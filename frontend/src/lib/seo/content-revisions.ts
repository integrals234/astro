/**
 * When each content collection last actually changed.
 *
 * The sitemap previously stamped `new Date()` on every row at build time, which
 * told Google that all ~500 pages changed on every deploy — a signal it learns
 * to discount entirely, so genuine updates stop being noticed.
 *
 * These are maintained by hand: bump the relevant constant in the same commit
 * that edits the corresponding content module. A stale-but-honest date is worth
 * far more than a fresh-but-meaningless one.
 */
export const CONTENT_REVISIONS = {
  /** Home, about, and the standing marketing surfaces. */
  core: "2026-08-17",
  /** `src/lib/personal-appraisals/i18n/content.ts` — turnaround now 3–4 weeks. */
  appraisals: "2026-08-16",
  /** `src/lib/tools/landing-content.ts`. */
  tools: "2026-08-17",
  /** `src/lib/education/*-content.ts` long-form articles. */
  articles: "2026-06-06",
  /** Nakshatra / rashi / graha entity corpus. */
  entities: "2026-08-17",
  /** `src/lib/education/horoscope-engine.ts` output rotates on a weekly cycle. */
  horoscope: "2026-08-16",
  /** `src/lib/vedic-course/`. */
  course: "2026-06-06",
} as const;

export type ContentCollection = keyof typeof CONTENT_REVISIONS;

export function revisionOf(collection: ContentCollection): Date {
  return new Date(`${CONTENT_REVISIONS[collection]}T00:00:00Z`);
}
