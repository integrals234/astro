import type { SavedChartRecord } from "@/lib/chart-types";
import {
  isCompleteNatalInput,
  type BirthProfile,
  type NewBirthProfile,
} from "./types";

/**
 * Local persistence for birth profiles.
 *
 * Signed-out visitors keep profiles in localStorage; signing in promotes them
 * to real `SavedChart` rows via `/api/charts` (see `ProfileProvider`). Local
 * storage stays authoritative until that promotion succeeds, so a failed
 * request never loses the birth details someone just typed in.
 */
const STORAGE_KEY = "jl_birth_profiles";
const MAX_LOCAL_PROFILES = 8;

/*
 * An external store rather than component state.
 *
 * localStorage is a synchronous external system, which is exactly what
 * `useSyncExternalStore` exists for: reading it in an effect and calling
 * setState causes a cascading render on every mount, and every tool on the site
 * mounts this.
 *
 * `getServerSnapshot` returns a shared empty array — the same reference every
 * call, which is what keeps SSR and the first client paint agreeing instead of
 * looping. The real value arrives on subscription.
 */
const EMPTY: BirthProfile[] = [];

let cache: BirthProfile[] | null = null;
const listeners = new Set<() => void>();

export function subscribeProfiles(listener: () => void): () => void {
  listeners.add(listener);
  // Another tab editing the same account should not leave this one stale.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Identity-stable between writes, as `useSyncExternalStore` requires. */
export function getProfilesSnapshot(): BirthProfile[] {
  if (cache === null) cache = readLocalProfiles();
  return cache;
}

export function getProfilesServerSnapshot(): BirthProfile[] {
  return EMPTY;
}

export function setProfiles(
  update: (current: BirthProfile[]) => BirthProfile[],
): void {
  const next = update(getProfilesSnapshot());
  cache = next;
  writeLocalProfiles(next);
  for (const listener of listeners) listener();
}

export function readLocalProfiles(): BirthProfile[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isBirthProfile);
  } catch {
    // Corrupt or unavailable storage (private mode, quota) degrades to "no
    // saved profiles", never to a crash on first paint.
    return [];
  }
}

export function writeLocalProfiles(profiles: BirthProfile[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(profiles.slice(0, MAX_LOCAL_PROFILES)),
    );
  } catch {
    // Storage full or blocked. The in-memory context still works for this
    // session, which is the part the visitor can see.
  }
}

export function clearLocalProfiles(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* see writeLocalProfiles */
  }
}

export function makeProfile(input: NewBirthProfile): BirthProfile {
  // Built field-by-field rather than spread, so `chartData` — carried on the
  // input purely for callers on the signed-in (SavedChart-backed) path to
  // avoid a second compute round trip — is never copied onto the stored
  // profile. It is too large for localStorage and the guest path never
  // needs it.
  return {
    label: input.label,
    locationName: input.locationName,
    birth: input.birth,
    isPrimary: input.isPrimary,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
}

/*
 * Which profile is "primary" — the one tool pages auto-fill from.
 *
 * Kept as one small preference, separate from the profile list itself, because
 * the list moves between two different backing stores (local for guests,
 * `SavedChart` for signed-in users) while "which person is me" is a UI
 * preference that should survive that switch untouched.
 */
const PRIMARY_KEY = "jl_primary_chart_id";

export function getPrimaryId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(PRIMARY_KEY);
  } catch {
    return null;
  }
}

export function setPrimaryId(id: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (id === null) window.localStorage.removeItem(PRIMARY_KEY);
    else window.localStorage.setItem(PRIMARY_KEY, id);
  } catch {
    /* preference is best-effort */
  }
}

/**
 * A `SavedChart` row, read back as a `BirthProfile`.
 *
 * `formData` on a `SavedChart` carries transit fields alongside the natal
 * ones (the shape `/api/charts/compute` was called with); only the natal half
 * belongs on a profile, so the rest is dropped here rather than carried
 * forward into a fresh compute request that would silently reuse a stale
 * transit date.
 */
export function savedChartToProfile(
  chart: SavedChartRecord,
  primaryId: string | null,
): BirthProfile {
  const { formData } = chart;
  return {
    id: chart.id,
    label: chart.name,
    locationName: chart.locationName,
    birth: {
      year: formData.year,
      month: formData.month,
      day: formData.day,
      hour: formData.hour,
      minute: formData.minute,
      latitude: formData.latitude,
      longitude: formData.longitude,
    },
    isPrimary: chart.id === primaryId,
    createdAt: chart.createdAt,
  };
}

/**
 * Two profiles describe the same person when the natal inputs match. Used to
 * avoid piling up duplicates as someone moves between tools re-submitting the
 * same details.
 */
export function isSamePerson(a: BirthProfile, b: BirthProfile): boolean {
  const x = a.birth;
  const y = b.birth;
  return (
    x.year === y.year &&
    x.month === y.month &&
    x.day === y.day &&
    x.hour === y.hour &&
    x.minute === y.minute &&
    x.latitude.toFixed(4) === y.latitude.toFixed(4) &&
    x.longitude.toFixed(4) === y.longitude.toFixed(4)
  );
}

function isBirthProfile(value: unknown): value is BirthProfile {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.label === "string" &&
    typeof v.locationName === "string" &&
    typeof v.isPrimary === "boolean" &&
    typeof v.createdAt === "string" &&
    isCompleteNatalInput(v.birth)
  );
}
