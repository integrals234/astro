"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import BookingHandoff from "@/components/tools/BookingHandoff";
import ChartFigure from "@/components/chart/ChartFigure";
import ToolResultFrame from "@/components/tools/ToolResultFrame";
import { computeChart, useProfileResult } from "@/components/tools/useProfileResult";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { houseFromSign } from "@/lib/chart-render";
import {
  D10_LAGNA_SIGN,
  D10_PLANET_SIGNIFICANCE,
} from "@/lib/jyotish/career-significations";
import { careerReportCopy } from "@/lib/tools/career-report-copy";

/**
 * Career Report (D10 / Dashamsha) — self-contained, same shape as
 * `NakshatraFinderPanel`/`GemstonePanel`. The one tool on the site whose
 * backend field (`d10_sign`/`d10_ascendant_sign`) didn't exist before this
 * feature — see `houseFromSign` in `chart-render.ts`, the same math that
 * draws the D10 diagram below, reused here to place each planet in its D10
 * house without duplicating that formula.
 */
export default function CareerReportPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = careerReportCopy[language];

  const state = useProfileResult({
    toolSlug: "career-report",
    compute: (natal) => computeChart(natal),
    toChartData: (data) => data,
  });

  return (
    <div className="space-y-6">
      {/* What the report is, before as well as after it is calculated. */}
      <p className="washi-measure text-sm text-text-muted">{copy.intro}</p>

      <ToolResultFrame state={state} idPrefix="career-report" submitLabel={copy.submit} loadingClassName="h-72">
        {(chartData) => {
          const lagnaBlurb = chartData.d10_ascendant_sign ? D10_LAGNA_SIGN[chartData.d10_ascendant_sign] : undefined;
          if (!lagnaBlurb) return <p className="text-sm text-terracotta">{copy.error}</p>;
          return (
            <div className="space-y-8">
              <div className="washi-card p-6 md:p-7">
                <ChartFigure
                  data={chartData}
                  view="d10"
                  t={t}
                  lang={language}
                  chartStyle="North"
                  useSymbols={false}
                  controls="none"
                />
              </div>

              <div className="washi-card p-6 md:p-7">
                <p className="washi-eyebrow mb-3">{copy.lagnaHeading(t.signs[chartData.d10_ascendant_sign] ?? chartData.d10_ascendant_sign)}</p>
                <p className="font-body leading-relaxed text-text">{lagnaBlurb[language]}</p>
              </div>

              <div className="washi-card p-6 md:p-7">
                <p className="washi-eyebrow mb-2">{copy.planetsHeading}</p>
                <p className="mb-5 text-xs text-text-muted">{copy.planetsIntro}</p>
                <div className="space-y-4">
                  {chartData.planets.map((planet) => {
                    const blurb = D10_PLANET_SIGNIFICANCE[planet.name];
                    if (!blurb) return null;
                    const house = houseFromSign(planet.d10_sign, chartData.d10_ascendant_sign);
                    return (
                      <div key={planet.name}>
                        <p className="font-body font-semibold text-ink">
                          {t.planets[planet.name] ?? planet.name}
                          <span className="ml-2 text-xs font-normal text-text-muted">
                            {copy.houseLabel(house)} · {t.signs[planet.d10_sign] ?? planet.d10_sign}
                          </span>
                        </p>
                        <p className="mt-1 text-sm text-text-muted">{blurb[language]}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <BookingHandoff tool="career" />
            </div>
          );
        }}
      </ToolResultFrame>
    </div>
  );
}
