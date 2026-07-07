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

export function learnJyotishSectionHref(section: EducationSectionId): string {
  return `/learn-jyotish?section=${section}`;
}
