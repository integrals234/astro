import type { ChartView } from "@/lib/chart-render";

/**
 * One piece of chart output a page can ask for by name, rather than
 * embedding the full multi-tab workspace to get at one part of it.
 *
 * A superset of `ChartView`: the five projections plus the three
 * non-drawing tabs (planetary details, aspects, dasha) that `ChartWorkspace`
 * also renders. Grows again in later phases (a "summary" card for the
 * vertical report, then yogas/ashtakavarga/numerology) — kept to only what
 * Phase 3 actually dispatches to for now, so there is no id here without a
 * component behind it yet.
 */
export type ChartSectionId =
  | "lagna"
  | "navamsha"
  | "chalit"
  | "moon"
  | "gochar"
  | "planets"
  | "aspects"
  | "dasha";

/** The five sections that draw a chart figure, mapped to their projection. */
export const SECTION_TO_VIEW: Partial<Record<ChartSectionId, ChartView>> = {
  lagna: "lagna",
  navamsha: "d9",
  chalit: "chalit",
  moon: "moon",
  gochar: "gochar",
};
