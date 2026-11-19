import { compatibilityLongForm } from "./compatibility";
import { sukuyoLongForm } from "./sukuyo";
import { birthChartLongForm } from "./birth-chart";
import { mangalDoshaLongForm } from "./mangal-dosha";
import { babyNamesLongForm } from "./baby-names";
import type { ToolLongForm } from "./types";

/**
 * Long-form bodies by slug.
 *
 * Only tools that have had the writing done appear here; the rest render their
 * FAQ section alone until their body is written. Missing content degrades to a
 * shorter page rather than an empty heading, which is the right failure mode
 * while the corpus is being filled in.
 *
 * Still missing (backlog, Phase 11): dasha-calculator, nakshatra-finder,
 * moon-sign, transit-now, numerology, saturn-return, birth-time-check.
 */
const ALL: ToolLongForm[] = [
  sukuyoLongForm,
  compatibilityLongForm,
  birthChartLongForm,
  mangalDoshaLongForm,
  babyNamesLongForm,
];

export function findToolLongForm(slug: string): ToolLongForm | undefined {
  return ALL.find((entry) => entry.slug === slug);
}

export type { ToolLongForm, ToolSection } from "./types";
