/**
 * Time samples for a birth-time-uncertainty check — computing the same
 * chart at several times across an uncertain window and watching which
 * placements actually move, rather than reading one chart as if the
 * entered time were exact.
 */

/** N times (HH:MM, minute-rounded), evenly spaced across
 * `[centerTime - windowMinutes, centerTime + windowMinutes]`. */
export function generateTimeSamples(
  centerTime: string,
  windowMinutes: number,
  count: number,
): string[] {
  const [h, m] = centerTime.split(":").map(Number);
  const centerMinutes = h * 60 + m;
  const start = centerMinutes - windowMinutes;
  const step = count > 1 ? (windowMinutes * 2) / (count - 1) : 0;

  return Array.from({ length: count }, (_, i) => {
    const totalMinutes = Math.round(start + step * i);
    const normalized = ((totalMinutes % 1440) + 1440) % 1440;
    const hh = Math.floor(normalized / 60);
    const mm = normalized % 60;
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  });
}

export interface TimeSample {
  time: string;
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
