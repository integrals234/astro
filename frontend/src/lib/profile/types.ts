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

export type NewBirthProfile = Omit<BirthProfile, "id" | "createdAt">;

/** Expand a stored profile into a full compute request for today's transits. */
export function toChartFormData(
  profile: BirthProfile,
  transitDate = new Date(),
): ChartFormData {
  return {
    ...profile.birth,
    transit_year: transitDate.getFullYear(),
    transit_month: transitDate.getMonth() + 1,
    transit_day: transitDate.getDate(),
  };
}

export function isCompleteNatalInput(value: unknown): value is NatalInput {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    ["year", "month", "day", "hour", "minute", "latitude", "longitude"] as const
  ).every((k) => typeof v[k] === "number" && Number.isFinite(v[k]));
}
