"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import BookingHandoff from "@/components/tools/BookingHandoff";
import ToolResultFrame from "@/components/tools/ToolResultFrame";
import { computeChart, useProfileResult } from "@/components/tools/useProfileResult";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { findNakshatra } from "@/lib/jyotish/nakshatra-data";
import { sukuyoCopy } from "@/lib/tools/sukuyo-copy";

/**
 * 宿曜 (Sukuyō) — the visitor's birth mansion.
 *
 * Strategically the most defensible tool on the site. 宿曜占星術 is a Japanese
 * Buddhist tradition that descends from these same 27 lunar mansions, so this
 * is the one page where the Vedic engine answers a natively Japanese question
 * with more precision than the Japanese sites do: most compute the mansion from
 * the lunar calendar date, while this reads the Moon's actual sidereal
 * longitude from the ephemeris.
 *
 * Reads the shared birth profile, so someone arriving from any other tool sees
 * their answer immediately instead of another form (shared useProfileResult).
 */
export default function SukuyoResult() {
  const { language } = useLanguage();
  const copy = sukuyoCopy[language];
  const t: ChartTranslations = chartFormCopy[language];

  // Computes for the remembered person straight away; a first-time visitor
  // gets the form here (one submit also fills the chart section below).
  const state = useProfileResult({
    toolSlug: "sukuyo",
    compute: (natal) => computeChart(natal),
    toChartData: (data) => data,
  });

  return (
    <ToolResultFrame state={state} idPrefix="sukuyo" intro={copy.needProfile} submitLabel={copy.compute} loadingClassName="h-64">
      {(data, subject) => {
        const moon = data.planets.find((p) => p.name === "Moon");
        const row = moon ? findNakshatra(moon.nakshatra) : undefined;
        if (!moon || !row) return <p className="text-sm text-terracotta">{copy.error}</p>;
        return (
          <div className="space-y-6">
            <div className="washi-card p-6 md:p-7">
              <p className="font-header text-[length:var(--step-3)] text-ink">{row.sukuyo}</p>
              <p className="mt-1 font-body text-sm text-text-muted">{row.sukuyoReading}</p>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label={copy.nakshatraLabel} value={t.nakshatras[row.name] ?? row.name} />
                {/* The pada needs a real birth time to be trusted. */}
                {!subject.timeUnknown ? <Field label={copy.padaLabel} value={copy.padaValue(moon.nakshatra_pada)} /> : null}
                <Field label={copy.lordLabel} value={t.planets[row.lord] ?? row.lord} />
                <Field label={copy.ganaLabel} value={copy.ganaNames[row.gana] ?? row.gana} />
              </dl>

              <p className="washi-measure mt-6 text-sm leading-relaxed text-text-muted">
                {copy.derivation(row.sukuyo, t.nakshatras[row.name] ?? row.name)}
              </p>
            </div>

            <BookingHandoff tool="sukuyo" />
          </div>
        );
      }}
    </ToolResultFrame>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="washi-eyebrow-muted mb-1">{label}</dt>
      <dd className="font-body text-ink">{value}</dd>
    </div>
  );
}
