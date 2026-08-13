import type { EducationSectionId } from "./types";

const VALID_SECTIONS = new Set<EducationSectionId>([
  "introduction",
  "rashis",
  "planets",
  "nakshatras",
  "houses",
  "aspects",
  "mahadashas",
  "transits",
  "remedies",
]);

export function isEducationSectionId(value: string): value is EducationSectionId {
  return VALID_SECTIONS.has(value as EducationSectionId);
}

/**
 * Real section URL. This used to return `/learn-jyotish?section=<id>`, which
 * was a query-string view of the client hub rather than an addressable page.
 * The hub still honours `?section=` so old links keep working, but everything
 * that links *out* should point at the indexable path (Phase 3.3).
 */
export function learnJyotishSectionHref(section: EducationSectionId): string {
  return `/learn-jyotish/${section}`;
}
