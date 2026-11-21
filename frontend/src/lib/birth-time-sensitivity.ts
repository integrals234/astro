/**
 * Time samples for a birth-time-uncertainty check — computing the same
 * chart at several times across an uncertain window and watching which
 * placements actually move, rather than reading one chart as if the
 * entered time were exact.
 */

export interface SamplePoint {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  /** "HH:MM", for display. */
  time: string;
  /** Days from the entered date (-1, 0 or +1): the window can cross midnight. */
  dayOffset: number;
}

/**
 * N local wall-clock moments evenly spaced across
 * `[center - windowMinutes, center + windowMinutes]`, each with its own
 * calendar date.
 *
 * The old version returned bare "HH:MM" strings and the caller reused the
 * entered date, so for 23:30 ± 60 min the 00:30 sample was computed for the
 * wrong day. The arithmetic runs in UTC purely as a calendar (no time zone
 * is applied — the backend resolves the birthplace's zone itself), which
 * also rolls months and years over and is immune to browser DST shifts.
 */
export function generateTimeSamples(
  date: string,
  centerTime: string,
  windowMinutes: number,
  count: number,
): SamplePoint[] {
  const [y, mo, d] = date.split("-").map(Number);
  const [h, m] = centerTime.split(":").map(Number);
  const center = Date.UTC(y, mo - 1, d, h, m);
  const base = Date.UTC(y, mo - 1, d);
  const step = count > 1 ? (windowMinutes * 2) / (count - 1) : 0;

  return Array.from({ length: count }, (_, i) => {
    const offsetMinutes = Math.round(-windowMinutes + step * i);
    const at = new Date(center + offsetMinutes * 60_000);
    const hour = at.getUTCHours();
    const minute = at.getUTCMinutes();
    const dayStart = Date.UTC(at.getUTCFullYear(), at.getUTCMonth(), at.getUTCDate());
    return {
      year: at.getUTCFullYear(),
      month: at.getUTCMonth() + 1,
      day: at.getUTCDate(),
      hour,
      minute,
      time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
      dayOffset: Math.round((dayStart - base) / 86_400_000),
    };
  });
}

export interface TimeSample {
  time: string;
  /** Calendar date of this sample, "YYYY-MM-DD". */
  date: string;
  dayOffset: number;
  ascendantSign: string;
  ascendantLongitude: number;
}

export interface SignChange {
  /** Index into the samples array where the sign changed from the previous one. */
  atIndex: number;
  from: string;
  to: string;
}

/** Where the ascendant sign actually changes across the sampled times —
 * the boundaries that matter for a birth-time-uncertainty reading. Samples
 * must already be in chronological order. */
export function findSignChanges(samples: readonly TimeSample[]): SignChange[] {
  const changes: SignChange[] = [];
  for (let i = 1; i < samples.length; i++) {
    if (samples[i].ascendantSign !== samples[i - 1].ascendantSign) {
      changes.push({ atIndex: i, from: samples[i - 1].ascendantSign, to: samples[i].ascendantSign });
    }
  }
  return changes;
}
