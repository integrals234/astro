import type { AppLanguage } from "@/lib/i18n/language";

/**
 * What can actually be booked, and how.
 *
 * Two shapes of offering, and conflating them is the mistake this module
 * exists to prevent:
 *
 * - `live` formats occupy a slot in a calendar, so they take a real
 *   availability picker.
 * - `async` formats (the written appraisal) produce a PDF weeks later and never
 *   involve a meeting. Putting a slot picker in front of one would ask the
 *   visitor to schedule something that does not happen.
 *
 * Prices are deliberately absent: everything is quoted by inquiry, and payment
 * is still settled over WhatsApp after the details are agreed.
 */
export type OfferingId =
  | "consultation"
  | "compatibility"
  | "muhurta"
  | "rectification"
  | "written";

export interface BookableOffering {
  id: OfferingId;
  kind: "live" | "async";
  /**
   * Cal.com event-type slug. `null` for async offerings, which have no slot.
   * A slug that does not exist on the account is treated as unbookable at
   * request time rather than rendering a dead embed.
   */
  calEventSlug: string | null;
  /** Minutes, for the copy above the picker. Null when it varies. */
  durationMinutes: number | null;
  /** Maps to the offering ids used in personal-appraisals content. */
  contentOfferingId: string;
}

export const BOOKING_CATALOG: Record<OfferingId, BookableOffering> = {
  consultation: {
    id: "consultation",
    kind: "live",
    calEventSlug: "personal-consultation-60",
    durationMinutes: 60,
    contentOfferingId: "live",
  },
  compatibility: {
    id: "compatibility",
    kind: "live",
    calEventSlug: "compatibility-reading-90",
    durationMinutes: 90,
    contentOfferingId: "compatibility",
  },
  muhurta: {
    id: "muhurta",
    kind: "live",
    calEventSlug: "muhurta-selection-60",
    durationMinutes: 60,
    contentOfferingId: "muhurta",
  },
  rectification: {
    id: "rectification",
    kind: "live",
    calEventSlug: "birth-time-rectification-60",
    durationMinutes: 60,
    contentOfferingId: "written",
  },
  written: {
    id: "written",
    kind: "async",
    calEventSlug: null,
    durationMinutes: null,
    contentOfferingId: "written",
  },
};

export const BOOKABLE_OFFERING_IDS = Object.keys(BOOKING_CATALOG) as OfferingId[];

export function parseOfferingId(value: string): OfferingId | null {
  return (BOOKABLE_OFFERING_IDS as string[]).includes(value)
    ? (value as OfferingId)
    : null;
}

/** Cal.com account the event types live under. */
export function calUsername(): string {
  return process.env.NEXT_PUBLIC_CAL_USERNAME ?? "alpha-mac-5tbxqf";
}

/**
 * Cal.com renders its own locale from this param. Hindi is not among their
 * supported UI locales, so those visitors get English rather than a broken
 * embed.
 */
export function calLocale(language: AppLanguage): string {
  return language === "hi" ? "en" : language;
}

export function calBookingUrl(
  slug: string,
  language: AppLanguage,
  { embed }: { embed: boolean },
): string {
  const url = new URL(`https://cal.com/${calUsername()}/${slug}`);
  if (embed) url.searchParams.set("embed", "true");
  url.searchParams.set("locale", calLocale(language));
  return url.toString();
}
