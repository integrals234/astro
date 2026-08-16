"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import BookingHandoff from "@/components/tools/BookingHandoff";
import { trackEvent } from "@/lib/analytics/events";
import { findNakshatra, type NakshatraRow } from "@/lib/jyotish/nakshatra-data";
import { toChartFormData } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
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
 * their answer immediately instead of another form.
 */
export default function SukuyoResult() {
  const { language } = useLanguage();
  const { primary, isLoaded } = useBirthProfile();
  const copy = sukuyoCopy[language];

  const [result, setResult] = useState<{
    row: NakshatraRow;
    pada: number;
  } | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const compute = useCallback(async () => {
    if (!primary) return;
    setStatus("loading");
    trackEvent("tool_opened", { slug: "sukuyo", locale: language });
    try {
      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toChartFormData(primary)),
      });
      if (!response.ok) throw new Error("compute failed");
      const data: ChartData = await response.json();

      const moon = data.planets.find((p) => p.name === "Moon");
      const row = moon ? findNakshatra(moon.nakshatra) : null;
      if (!moon || !row) throw new Error("no moon");

      setResult({ row, pada: moon.nakshatra_pada });
      setStatus("idle");
      trackEvent("tool_completed", { slug: "sukuyo", locale: language });
    } catch {
      setStatus("error");
    }
  }, [primary, language]);

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  if (!primary) {
    return (
      <div className="washi-card p-6 md:p-7">
        <p className="font-body text-text">{copy.needProfile}</p>
        <a href="#tool-form" className="washi-btn-primary mt-4 inline-block">
          {copy.enterDetails}
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-2">{copy.forPerson(primary.label)}</p>

        {!result ? (
          <>
            <p className="font-body text-text">{copy.readyPrompt}</p>
            <button
              type="button"
              onClick={compute}
              disabled={status === "loading"}
              className="washi-btn-primary mt-4 disabled:opacity-50"
            >
              {status === "loading" ? copy.computing : copy.compute}
            </button>
            {status === "error" && (
              <p className="mt-3 text-sm text-terracotta">{copy.error}</p>
            )}
          </>
        ) : (
          <>
            <p className="font-header text-[length:var(--step-3)] text-ink">
              {result.row.sukuyo}
            </p>
            <p className="mt-1 font-body text-sm text-text-muted">
              {result.row.sukuyoReading}
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label={copy.nakshatraLabel} value={result.row.name} />
              <Field
                label={copy.padaLabel}
                value={copy.padaValue(result.pada)}
              />
              <Field label={copy.lordLabel} value={result.row.lord} />
              <Field label={copy.ganaLabel} value={result.row.gana} />
            </dl>

            <p className="washi-measure mt-6 text-sm leading-relaxed text-text-muted">
              {copy.derivation(result.row.sukuyo, result.row.name)}
            </p>
          </>
        )}
      </div>

      {result ? <BookingHandoff tool="sukuyo" /> : null}
    </div>
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
