import type { ChartFormData } from "@/lib/chart-types";

/**
 * A person whose chart the visitor cares about.
 *
 * The unit the whole site is organised around from here on: enter birth details
 * once, and every tool answers for *that* person instead of showing a form.
 * Ishvaram asks for birth data separately on each of its 21 calculators; not
 * doing that is the single clearest difference a visitor can feel.
 */
export interface BirthProfile {
  id: string;
  /** Display label — the person's name, or 「自分」/「パートナー」 for a relation. */
  label: string;
  /** Human-readable birth place, as chosen from the geocoder. */
  locationName: string;
  /** The natal half only. Transit dates are per-request, never stored. */
  birth: NatalInput;
  isPrimary: boolean;
  createdAt: string;
}

export type NatalInput = Pick<
  ChartFormData,
  "year" | "month" | "day" | "hour" | "minute" | "latitude" | "longitude"
>;

export type NewBirthProfile = Omit<BirthProfile, "id" | "createdAt"> & {
  /**
   * A chart already computed for this person, if the caller has one.
   *
   * Signed-in profiles are backed by `SavedChart` rows — the same table behind
   * `/chart`'s recent and saved lists — so creating one requires a computed
   * chart. Most callers already have it (they just ran the compute to get a
   * Moon position or draw a preview); passing it here avoids a second round
   * trip. If omitted, the signed-in path computes it itself.
   */
  chartData?: import("@/lib/chart-types").ChartData;
};

/** Attach today's transit date to a natal input, for a compute request. */
export function natalToChartFormData(
  natal: NatalInput,
  transitDate = new Date(),
): ChartFormData {
  return {
    ...natal,
    transit_year: transitDate.getFullYear(),
    transit_month: transitDate.getMonth() + 1,
    transit_day: transitDate.getDate(),
  };
}

/** Expand a stored profile into a full compute request for today's transits. */
export function toChartFormData(
  profile: BirthProfile,
  transitDate = new Date(),
): ChartFormData {
  return natalToChartFormData(profile.birth, transitDate);
}

export function isCompleteNatalInput(value: unknown): value is NatalInput {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    ["year", "month", "day", "hour", "minute", "latitude", "longitude"] as const
  ).every((k) => typeof v[k] === "number" && Number.isFinite(v[k]));
}
