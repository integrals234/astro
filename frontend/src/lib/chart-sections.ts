import type { ChartView } from "@/lib/chart-render";

/**
 * One piece of chart output a page can ask for by name, rather than
 * embedding the full multi-tab workspace to get at one part of it.
 *
 * A superset of `ChartView`: the five projections, the three non-drawing
 * tabs (planetary details, aspects, dasha) `ChartWorkspace` also renders,
 * `summary` — a 4-up "the answer, before the diagrams" card
 * (`ChartSummaryCard`) the vertical report leads with — `yogas`, the
 * planetary-combination panel (`YogaPanel`) — and `ashtakavarga`, the
 * bindu-table panel (`AshtakavargaPanel`). Grows again once numerology
 * lands, kept to only what has a component behind it today.
 */
export type ChartSectionId =
  | "summary"
  | "lagna"
  | "navamsha"
  | "chalit"
  | "moon"
  | "gochar"
  | "planets"
  | "aspects"
  | "dasha"
  | "yogas"
  | "ashtakavarga";

/** The five sections that draw a chart figure, mapped to their projection. */
export const SECTION_TO_VIEW: Partial<Record<ChartSectionId, ChartView>> = {
  lagna: "lagna",
  navamsha: "d9",
  chalit: "chalit",
  moon: "moon",
  gochar: "gochar",
};
