"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useAuth } from "@clerk/nextjs";
import {
  clearLocalProfiles,
  getPrimaryId,
  getProfilesServerSnapshot,
  getProfilesSnapshot,
  isSamePerson,
  makeProfile,
  savedChartToProfile,
  setPrimaryId,
  setProfiles,
  subscribeProfiles,
} from "@/lib/profile/store";
import {
  natalToChartFormData,
  type BirthProfile,
  type NewBirthProfile,
} from "@/lib/profile/types";
import type { SavedChartRecord } from "@/lib/chart-types";

/**
 * One birth profile, shared by every tool on the site.
 *
 * Backed by two different stores depending on sign-in state, which is the fix
 * for a real bug: profiles created through a tool were living in a separate
 * `BirthProfile` table that had nothing to do with the `SavedChart` rows
 * `/chart`'s "recent" and "saved" panels read, so anything added through a
 * tool was invisible there and vice versa. Signed-in profiles are now
 * `SavedChart` rows directly — the same rows, read the same way — so adding a
 * person anywhere on the site makes them appear everywhere on the site.
 *
 * Guests keep the original localStorage-only behaviour, since `SavedChart`
 * requires an account. Their profiles are promoted to real rows on sign-in.
 */
interface ProfileContextValue {
  profiles: BirthProfile[];
  primary: BirthProfile | null;
  /** False until the relevant store (local or server) has loaded once. */
  isLoaded: boolean;
  /** Adds or updates by person identity. Persists to `SavedChart` when signed in. */
  upsertProfile: (input: NewBirthProfile) => Promise<BirthProfile>;
  setPrimary: (id: string) => void;
  /** Deletes the underlying `SavedChart` row when signed in. */
  removeProfile: (id: string) => Promise<void>;
  /** True while a signed-in add/remove round trip is in flight. */
  isSyncing: boolean;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

async function fetchServerProfiles(): Promise<SavedChartRecord[]> {
  // "Recent" (unsaved) and "saved" are two different queries server-side —
  // union them here so a profile someone marked saved months ago is still
  // available to pick from, not just the last five charts touched.
  const [recentRes, savedRes] = await Promise.all([
    fetch("/api/charts?type=recent"),
    fetch("/api/charts?type=saved"),
  ]);
  const recent: SavedChartRecord[] = recentRes.ok ? await recentRes.json() : [];
  const saved: SavedChartRecord[] = savedRes.ok ? await savedRes.json() : [];
  const byId = new Map<string, SavedChartRecord>();
  for (const chart of [...recent, ...saved]) byId.set(chart.id, chart);
  return [...byId.values()].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

async function createServerProfile(
  input: NewBirthProfile,
): Promise<SavedChartRecord> {
  const chartData =
    input.chartData ??
    (await (async () => {
      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(natalToChartFormData(input.birth)),
      });
      if (!response.ok) throw new Error("compute failed");
      return response.json();
    })());

  const response = await fetch("/api/charts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.label,
      locationName: input.locationName,
      formData: natalToChartFormData(input.birth),
      chartData,
      isSaved: false,
    }),
  });
  if (!response.ok) throw new Error("save failed");
  return response.json();
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();

  // Local (guest) branch — unchanged external-store subscription.
  const localProfiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    getProfilesServerSnapshot,
  );
  const isLocalLoaded = useSyncExternalStore(
    subscribeProfiles,
    () => true,
    () => false,
  );

  // Server (signed-in) branch.
  const [serverCharts, setServerCharts] = useState<SavedChartRecord[]>([]);
  const [isServerLoaded, setIsServerLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  // `getPrimaryId()` is a guarded synchronous localStorage read (null during
  // SSR), so it is safe as a lazy initializer — no effect needed to populate it.
  const [primaryId, setPrimaryIdState] = useState<string | null>(() =>
    getPrimaryId(),
  );

  const refreshServerProfiles = useCallback(async () => {
    try {
      setServerCharts(await fetchServerProfiles());
    } catch {
      // Leave the previous list in place; a transient failure should not
      // blank out profiles someone is actively choosing between.
    } finally {
      setIsServerLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthLoaded) return;
    // Wrapped in an async function rather than branching directly in the
    // effect body: `setIsServerLoaded` for the signed-out case would otherwise
    // be a bare setState call in the effect's own synchronous path.
    void (async () => {
      if (!isSignedIn) {
        setIsServerLoaded(true);
        return;
      }
      await refreshServerProfiles();
    })();
  }, [isAuthLoaded, isSignedIn, refreshServerProfiles]);

  /*
   * One-time promotion of guest profiles on sign-in.
   *
   * Guarded by a ref rather than a dependency on the profile list, which this
   * would otherwise update and re-trigger.
   */
  const hasPromoted = useRef(false);
  useEffect(() => {
    if (hasPromoted.current) return;
    if (!isAuthLoaded || !isSignedIn || !isLocalLoaded) return;
    if (localProfiles.length === 0) {
      hasPromoted.current = true;
      return;
    }

    hasPromoted.current = true;
    void (async () => {
      for (const profile of localProfiles) {
        try {
          await createServerProfile({
            label: profile.label,
            locationName: profile.locationName,
            birth: profile.birth,
            isPrimary: false,
          });
        } catch {
          // A promotion failure leaves that one profile only in local storage
          // rather than losing it; it is simply not offered to tools until
          // the next successful sync.
        }
      }
      clearLocalProfiles();
      await refreshServerProfiles();
    })();
  }, [isAuthLoaded, isSignedIn, isLocalLoaded, localProfiles, refreshServerProfiles]);

  const serverProfiles = useMemo(
    () => serverCharts.map((chart) => savedChartToProfile(chart, primaryId)),
    [serverCharts, primaryId],
  );

  const useServer = Boolean(isSignedIn);
  const profiles = useServer ? serverProfiles : localProfiles;
  const isLoaded = useServer ? isServerLoaded : isLocalLoaded;

  const upsertProfile = useCallback(
    async (input: NewBirthProfile): Promise<BirthProfile> => {
      if (useServer) {
        setIsSyncing(true);
        try {
          // Same-person dedupe against the current server list, matching the
          // guest path so re-submitting one's own details never piles up
          // duplicate SavedChart rows.
          const candidateBirth = input.birth;
          const existing = serverCharts.find((chart) =>
            isSamePerson(savedChartToProfile(chart, null), {
              id: "",
              label: "",
              locationName: "",
              birth: candidateBirth,
              isPrimary: false,
              createdAt: "",
            }),
          );
          const record = existing ?? (await createServerProfile(input));
          await refreshServerProfiles();
          const resolvedPrimary = getPrimaryId() ?? record.id;
          if (!getPrimaryId()) {
            setPrimaryId(resolvedPrimary);
            setPrimaryIdState(resolvedPrimary);
          }
          return savedChartToProfile(record, resolvedPrimary);
        } finally {
          setIsSyncing(false);
        }
      }

      const candidate = makeProfile(input);
      let stored = candidate;
      setProfiles((current) => {
        const existing = current.find((p) => isSamePerson(p, candidate));
        if (existing) {
          stored = { ...existing, label: input.label || existing.label };
          return current.map((p) => (p.id === existing.id ? stored : p));
        }
        stored = { ...candidate, isPrimary: candidate.isPrimary || current.length === 0 };
        const rest = stored.isPrimary
          ? current.map((p) => ({ ...p, isPrimary: false }))
          : current;
        return [stored, ...rest];
      });
      return stored;
    },
    [useServer, serverCharts, refreshServerProfiles],
  );

  const setPrimary = useCallback(
    (id: string) => {
      if (useServer) {
        setPrimaryId(id);
        setPrimaryIdState(id);
        return;
      }
      setProfiles((current) =>
        current.map((p) => ({ ...p, isPrimary: p.id === id })),
      );
    },
    [useServer],
  );

  const removeProfile = useCallback(
    async (id: string) => {
      if (useServer) {
        setIsSyncing(true);
        try {
          await fetch(`/api/charts/${id}`, { method: "DELETE" });
          await refreshServerProfiles();
          if (getPrimaryId() === id) {
            const next = serverCharts.find((c) => c.id !== id);
            setPrimaryId(next ? next.id : null);
            setPrimaryIdState(next ? next.id : null);
          }
        } finally {
          setIsSyncing(false);
        }
        return;
      }

      setProfiles((current) => {
        const next = current.filter((p) => p.id !== id);
        if (next.length > 0 && !next.some((p) => p.isPrimary)) {
          next[0] = { ...next[0], isPrimary: true };
        }
        return next;
      });
    },
    [useServer, serverCharts, refreshServerProfiles],
  );

  const value = useMemo<ProfileContextValue>(
    () => ({
      profiles,
      primary: profiles.find((p) => p.isPrimary) ?? profiles[0] ?? null,
      isLoaded,
      upsertProfile,
      setPrimary,
      removeProfile,
      isSyncing,
    }),
    [profiles, isLoaded, upsertProfile, setPrimary, removeProfile, isSyncing],
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useBirthProfile(): ProfileContextValue {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useBirthProfile must be used within a ProfileProvider");
  }
  return context;
}
