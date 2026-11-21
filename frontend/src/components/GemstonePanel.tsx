"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import BookingHandoff from "@/components/tools/BookingHandoff";
import ToolResultFrame from "@/components/tools/ToolResultFrame";
import { computeChart, useProfileResult } from "@/components/tools/useProfileResult";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { SIGN_LORD, PLANET_ORDER, GEMSTONE } from "@/lib/jyotish/gemstones";
import { gemstoneCopy } from "@/lib/tools/gemstone-copy";

/**
 * Gemstone Recommendation — self-contained, same shape as
 * `NakshatraFinderPanel`. Reads only the already-returned
 * `ascendant_sign` and each planet's `dignity` from `/api/charts/compute` —
 * no backend change needed, unlike the Career Report.
 */
export default function GemstonePanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = gemstoneCopy[language];

  const state = useProfileResult({
    toolSlug: "gemstone-recommendation",
    compute: (natal) => computeChart(natal),
    toChartData: (data) => data,
  });

  return (
    <ToolResultFrame state={state} idPrefix="gemstone" submitLabel={copy.submit} loadingClassName="h-64">
      {(chartData) => {
        const lagnaLord = SIGN_LORD[chartData.ascendant_sign];
        if (!lagnaLord) return <p className="text-sm text-terracotta">{copy.error}</p>;
        // Every debilitated planet, in the classical order — the old panel
        // showed only the first and silently dropped the rest.
        const weakPlanets = PLANET_ORDER.filter(
          (name) => chartData.planets.find((p) => p.name === name)?.dignity === "Debilitated",
        );
        return (
          <div className="space-y-6">
            <div className="washi-card border-l-4 border-terracotta p-6 md:p-7">
              <p className="font-body text-sm leading-relaxed text-text">{copy.caution}</p>
            </div>

            <GemstoneCard
              heading={copy.lagnaCardHeading(t.planets[lagnaLord] ?? lagnaLord)}
              intro={copy.lagnaCardIntro}
              entry={GEMSTONE[lagnaLord]}
              copy={copy}
              language={language}
            />

            {weakPlanets.length > 0 ? (
              weakPlanets.map((planet) => (
                <GemstoneCard
                  key={planet}
                  heading={copy.weakCardHeading(t.planets[planet] ?? planet)}
                  intro={copy.weakCardIntro}
                  entry={GEMSTONE[planet]}
                  copy={copy}
                  language={language}
                />
              ))
            ) : (
              <div className="washi-card p-6 md:p-7">
                <p className="text-sm text-text-muted">{copy.noWeakPlanet}</p>
              </div>
            )}

            <BookingHandoff tool="gemstone" />
          </div>
        );
      }}
    </ToolResultFrame>
  );
}

function GemstoneCard({
  heading,
  intro,
  entry,
  copy,
  language,
}: {
  heading: string;
  intro: string;
  entry: (typeof GEMSTONE)[string];
  copy: (typeof gemstoneCopy)[keyof typeof gemstoneCopy];
  language: keyof typeof gemstoneCopy;
}) {
  return (
    <div className="washi-card p-6 md:p-7">
      <p className="font-header text-xl text-ink">{heading}</p>
      <p className="mt-2 text-sm text-text-muted">{intro}</p>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.primaryStoneLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.primaryStone[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.substituteStoneLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.substituteStone[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.metalLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.metal[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.fingerLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.finger[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.dayLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.day[language]}</p>
        </div>
      </div>
    </div>
  );
}
