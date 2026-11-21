"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Link from "@/components/i18n/LocaleLink";
import BookingHandoff from "@/components/tools/BookingHandoff";
import ToolResultFrame from "@/components/tools/ToolResultFrame";
import { computeChart, useProfileResult } from "@/components/tools/useProfileResult";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { NAKSHATRAS, findNakshatra } from "@/lib/jyotish/nakshatra-data";
import { nakshatras } from "@/lib/education/nakshatras-content";
import {
  PLANET_REMEDY,
  NATURE_WHY,
  DEITY_REMEDY_COPY,
} from "@/lib/jyotish/nakshatra-remedies";
import { nakshatraFinderCopy } from "@/lib/tools/nakshatra-finder-copy";

interface Result {
  nakshatraNumber: number;
  nakshatraName: string;
  pada: number | null;
  moonSign: string;
  personLabel: string | null;
}

/**
 * Free Nakshatra Calculator — its own entry form and its own
 * `/api/charts/compute` call, same shape as `ChartSectionResult`'s inline
 * path, but with a purpose-built result layout (star + 2x2 stat card,
 * meaning, nakshatra-level "for your chart" guidance, remedies, cross-links)
 * rather than the generic planets table `ChartSectionBody` renders.
 *
 * Auto-computes from the shared birth profile the moment one exists — the
 * site's "enter once, use everywhere" promise — so a visitor who already
 * has details saved from any other tool never sees the form at all.
 */
export default function NakshatraFinderPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = nakshatraFinderCopy[language];

  const state = useProfileResult({
    toolSlug: "nakshatra-finder",
    compute: (natal) => computeChart(natal),
    toChartData: (data) => data,
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {copy.trustItems.map((item) => (
          <span key={item} className="washi-badge">
            {item}
          </span>
        ))}
      </div>

      <ToolResultFrame state={state} idPrefix="nakshatra-finder" submitLabel={copy.submit} loadingClassName="h-64">
        {(data, subject) => {
          const moon = data.planets.find((p) => p.name === "Moon");
          const row = moon ? findNakshatra(moon.nakshatra) : undefined;
          if (!moon || !row) return <p className="text-sm text-terracotta">{copy.error}</p>;
          const result: Result = {
            nakshatraNumber: row.number,
            nakshatraName: row.name,
            // Without a real birth time the pada (a 3°20′ quarter) is not reliable.
            pada: subject.timeUnknown ? null : moon.nakshatra_pada,
            moonSign: moon.sign,
            personLabel: null,
          };
          return <NakshatraResult result={result} copy={copy} t={t} language={language} />;
        }}
      </ToolResultFrame>

      <p className="washi-measure mt-4 text-xs text-text-muted">
        <Link href="/tools/birth-time-check" className="underline">
          {copy.birthTimeSensitivityLink}
        </Link>
      </p>
    </div>
  );
}

function NakshatraResult({
  result,
  copy,
  t,
  language,
  onEdit,
}: {
  result: Result;
  copy: (typeof nakshatraFinderCopy)[keyof typeof nakshatraFinderCopy];
  t: ChartTranslations;
  language: keyof typeof nakshatraFinderCopy;
  onEdit?: () => void;
}) {
  const nakshatraRow = NAKSHATRAS[result.nakshatraNumber - 1];
  const education = nakshatras.find((n) => n.number === result.nakshatraNumber);
  if (!education) return null;

  const planetRemedy = PLANET_REMEDY[nakshatraRow.lord];
  const natureWhy = NATURE_WHY[education.nature.en];

  return (
    <div className="space-y-8">
      <div className="washi-card p-6 text-center md:p-7">
        {result.personLabel && (
          <p className="washi-eyebrow mb-2">{copy.forPerson(result.personLabel)}</p>
        )}
        <Star size={22} aria-hidden className="mx-auto text-gold" />
        <p className="mt-3 font-header text-[length:var(--step-3)] text-ink">
          {education.name[language]}
        </p>
        <p className="mt-1 text-sm text-text-muted">{education.name.hi}</p>

        <hr className="washi-hairline my-5" />

        <div className="grid grid-cols-2 gap-4 text-left">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultPadaLabel}</p>
            <p className="mt-1 font-body text-ink">
              {result.pada ?? copy.padaUnresolved}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultRulerLabel}</p>
            <p className="mt-1 font-body text-ink">{t.planets[nakshatraRow.lord] ?? nakshatraRow.lord}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultDeityLabel}</p>
            <p className="mt-1 font-body text-ink">{education.deity[language]}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultMoonSignLabel}</p>
            <p className="mt-1 font-body text-ink">{t.signs[result.moonSign] ?? result.moonSign}</p>
          </div>
        </div>

        {onEdit ? (
        <button type="button" onClick={onEdit} className="washi-btn-secondary mt-6 px-4 py-2 text-sm">
          {copy.calculateAgain}
        </button>
        ) : null}
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-3">{copy.meaningHeading}</p>
        <p className="font-body leading-relaxed text-text">{education.description[language]}</p>
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-3">{copy.forYourChartHeading}</p>
        <p className="mb-3 font-body text-text">{copy.forYourChartLead}</p>
        <ul className="space-y-2">
          {education.qualities.map((quality) => (
            <li key={quality.en} className="flex items-start gap-2.5 font-body text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
              {quality[language]}
            </li>
          ))}
        </ul>
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-4">{copy.remediesHeading}</p>
        <div className="space-y-5">
          <div>
            <p className="font-body font-semibold text-ink">{planetRemedy.title[language]}</p>
            <p className="mt-1 text-xs italic leading-relaxed text-terracotta">
              {planetRemedy.whyItHelps[language]}
            </p>
            <p className="mt-1 text-xs text-text-muted">{planetRemedy.howTo[language]}</p>
          </div>
          <hr className="washi-hairline" />
          <div>
            <p className="font-body font-semibold text-ink">
              {DEITY_REMEDY_COPY.title[language](education.deity[language])}
            </p>
            <p className="mt-1 text-xs italic leading-relaxed text-terracotta">
              {natureWhy?.[language]}
            </p>
            <p className="mt-1 text-xs text-text-muted">{DEITY_REMEDY_COPY.howTo[language]}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-ink">{copy.exploreHeading}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/tools/birth-chart" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreChart}
          </Link>
          <Link href="/tools/dasha-calculator" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreDasha}
          </Link>
          <Link href="/tools/transit-now" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreTransit}
          </Link>
        </div>
      </div>

      <BookingHandoff tool="generic" />
    </div>
  );
}
