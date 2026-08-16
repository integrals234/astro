"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import { useAuth } from "@clerk/nextjs";
import {
  getProfilesServerSnapshot,
  getProfilesSnapshot,
  isSamePerson,
  makeProfile,
  setProfiles,
  subscribeProfiles,
} from "@/lib/profile/store";
import type { BirthProfile, NewBirthProfile } from "@/lib/profile/types";

/**
 * One birth profile, shared by every tool on the site.
 *
 * The retention mechanic: a visitor enters their details once and every
 * calculator afterwards shows *their* answer instead of another empty form.
 */
interface ProfileContextValue {
  profiles: BirthProfile[];
  primary: BirthProfile | null;
  /** False during SSR and first paint, so tools can avoid flashing an empty form. */
  isLoaded: boolean;
  /** Adds or updates by person identity and returns the stored profile. */
  upsertProfile: (input: NewBirthProfile) => BirthProfile;
  setPrimary: (id: string) => void;
  removeProfile: (id: string) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const profiles = useSyncExternalStore(
    subscribeProfiles,
    getProfilesSnapshot,
    getProfilesServerSnapshot,
  );
  const isLoaded = useSyncExternalStore(
    subscribeProfiles,
    () => true,
    () => false,
  );

  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
  const hasSynced = useRef(false);

  /*
   * Adoption on sign-in. Profiles created while signed out are pushed to the
   * account once, so the work of typing birth details survives the sign-in
   * boundary — the moment a visitor is most likely to abandon.
   *
   * Guarded by a ref rather than depending on `profiles`, which this would
   * otherwise update and re-trigger.
   */
  useEffect(() => {
    if (hasSynced.current) return;
    if (!isAuthLoaded || !isSignedIn || !isLoaded) return;

    hasSynced.current = true;
    const controller = new AbortController();

    void (async () => {
      try {
        const response = await fetch("/api/profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profiles: getProfilesSnapshot() }),
          signal: controller.signal,
        });
        if (!response.ok) return;
        const merged: unknown = await response.json();
        if (Array.isArray(merged)) {
          setProfiles(() => merged as BirthProfile[]);
        }
      } catch {
        // The local copy remains authoritative; nothing the visitor typed is lost.
      }
    })();

    return () => controller.abort();
  }, [isAuthLoaded, isSignedIn, isLoaded]);

  const upsertProfile = useCallback((input: NewBirthProfile) => {
    const candidate = makeProfile(input);
    let stored = candidate;

    setProfiles((current) => {
      const existing = current.find((p) => isSamePerson(p, candidate));
      if (existing) {
        // Same person, possibly a better label. Keep the original id so
        // anything already referencing it stays valid.
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
  }, []);

  const setPrimary = useCallback((id: string) => {
    setProfiles((current) => current.map((p) => ({ ...p, isPrimary: p.id === id })));
  }, []);

  const removeProfile = useCallback((id: string) => {
    setProfiles((current) => {
      const next = current.filter((p) => p.id !== id);
      // Never leave the set without a primary — tools read it directly.
      if (next.length > 0 && !next.some((p) => p.isPrimary)) {
        next[0] = { ...next[0], isPrimary: true };
      }
      return next;
    });
  }, []);

  const value = useMemo<ProfileContextValue>(
    () => ({
      profiles,
      primary: profiles.find((p) => p.isPrimary) ?? profiles[0] ?? null,
      isLoaded,
      upsertProfile,
      setPrimary,
      removeProfile,
    }),
    [profiles, isLoaded, upsertProfile, setPrimary, removeProfile],
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
