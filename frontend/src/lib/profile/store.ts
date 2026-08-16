import {
  isCompleteNatalInput,
  type BirthProfile,
  type NewBirthProfile,
} from "./types";

/**
 * Local persistence for birth profiles.
 *
 * Signed-out visitors keep profiles in localStorage; signing in promotes them
 * to the database (see `/api/profiles`). Local storage stays authoritative
 * until that promotion succeeds, so a failed request never loses the birth
 * details someone just typed in.
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
  return {
    ...input,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `p_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
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
