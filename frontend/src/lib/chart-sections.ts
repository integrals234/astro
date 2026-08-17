import type { ChartView } from "@/lib/chart-render";
import type { ChartTranslations } from "@/lib/chart-i18n";
import type { AppLanguage } from "@/lib/i18n/language";
import { yogasCopy } from "@/lib/jyotish/yogas-copy";
import { ashtakavargaCopy } from "@/lib/jyotish/ashtakavarga-copy";

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

/**
 * Sections newer than `chartFormCopy`'s old 8-tab set have no `tabs`/
 * `tabTitles` key to look a label up under — their heading comes from
 * their own copy module instead. Shared by `ChartWorkspace` and
 * `VerticalChartReport` so both surfaces label these the same way.
 */
const SPECIAL_SECTION_TITLE: Partial<Record<ChartSectionId, (lang: AppLanguage) => string>> = {
  yogas: (lang) => yogasCopy[lang].heading,
  ashtakavarga: (lang) => ashtakavargaCopy[lang].heading,
};

export interface ChartSectionEntry {
  id: ChartSectionId;
  /** Key into `chartFormCopy`'s `tabs`/`tabTitles`. Omitted for sections
   * with no such key — see `SPECIAL_SECTION_TITLE`. */
  tabKey?: string;
}

/** Short label for a rail/nav entry — `t.tabs[tabKey]` when present, else
 * the section's own heading copy. */
export function sectionLabel(entry: ChartSectionEntry, t: ChartTranslations, lang: AppLanguage): string {
  if (entry.tabKey) return t.tabs[entry.tabKey];
  return SPECIAL_SECTION_TITLE[entry.id]?.(lang) ?? entry.id;
}

/** Full heading for the section itself — `t.tabTitles[tabKey]` when
 * present, else the same fallback as `sectionLabel`. */
export function sectionHeading(entry: ChartSectionEntry, t: ChartTranslations, lang: AppLanguage): string {
  if (entry.tabKey) return t.tabTitles?.[entry.tabKey] ?? t.tabs[entry.tabKey];
  return SPECIAL_SECTION_TITLE[entry.id]?.(lang) ?? entry.id;
}
