import { annualForecastLongForm } from "./annual-forecast";
import { babyNamesLongForm } from "./baby-names";
import { birthChartLongForm } from "./birth-chart";
import { birthTimeCheckLongForm } from "./birth-time-check";
import { careerReportLongForm } from "./career-report";
import { compatibilityLongForm } from "./compatibility";
import { dashaCalculatorLongForm } from "./dasha-calculator";
import { gemstoneRecommendationLongForm } from "./gemstone-recommendation";
import { lagnaCalculatorLongForm } from "./lagna-calculator";
import { mangalDoshaLongForm } from "./mangal-dosha";
import { moonSignLongForm } from "./moon-sign";
import { nakshatraFinderLongForm } from "./nakshatra-finder";
import { numerologyLongForm } from "./numerology";
import { panchangLongForm } from "./panchang";
import { saturnReturnLongForm } from "./saturn-return";
import { sukuyoLongForm } from "./sukuyo";
import { transitNowLongForm } from "./transit-now";
import type { ToolLongForm } from "./types";

/**
 * Long-form bodies by slug.
 *
 * Only tools that have had the writing done appear here; the rest render their
 * FAQ section alone until their body is written. Missing content degrades to a
 * shorter page rather than an empty heading, which is the right failure mode
 * while the corpus is being filled in.
 *
 */
const ALL: ToolLongForm[] = [
  annualForecastLongForm,
  babyNamesLongForm,
  birthChartLongForm,
  birthTimeCheckLongForm,
  careerReportLongForm,
  compatibilityLongForm,
  dashaCalculatorLongForm,
  gemstoneRecommendationLongForm,
  lagnaCalculatorLongForm,
  mangalDoshaLongForm,
  moonSignLongForm,
  nakshatraFinderLongForm,
  numerologyLongForm,
  panchangLongForm,
  saturnReturnLongForm,
  sukuyoLongForm,
  transitNowLongForm,
];

export function findToolLongForm(slug: string): ToolLongForm | undefined {
  return ALL.find((entry) => entry.slug === slug);
}

export type { ToolLongForm, ToolSection } from "./types";
