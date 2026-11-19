"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import BookingHandoff from "@/components/tools/BookingHandoff";
import ChartFigure from "@/components/chart/ChartFigure";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { natalToChartFormData, toChartFormData } from "@/lib/profile/types";
import { houseFromSign } from "@/lib/chart-render";
import type { ChartData } from "@/lib/chart-types";
import { trackEvent } from "@/lib/analytics/events";
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
  const { primary, isLoaded, upsertProfile } = useBirthProfile();
  const { toast } = useToast();

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [computedFor, setComputedFor] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  const runCompute = async (formData: ReturnType<typeof natalToChartFormData>) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("compute failed");
      const data: ChartData = await response.json();
      setChartData(data);
      setStatus("idle");
      trackEvent("tool_completed", { slug: "career-report", locale: language });
      return data;
    } catch {
      setStatus("error");
      return null;
    }
  };

  useEffect(() => {
    if (!isLoaded || !primary || editing || computedFor === primary.id) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent("tool_opened", { slug: "career-report", locale: language });
      await runCompute(toChartFormData(primary));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, primary, editing, computedFor]);

  const handleSubmit = async () => {
    if (!isBirthDetailsComplete(entry) || !entry.location) return;
    const birth = {
      year: Number(entry.date.slice(0, 4)),
      month: Number(entry.date.slice(5, 7)),
      day: Number(entry.date.slice(8, 10)),
      hour: Number(entry.time.slice(0, 2)),
      minute: Number(entry.time.slice(3, 5)),
      latitude: Number(entry.location.lat),
      longitude: Number(entry.location.lon),
    };
    const data = await runCompute(natalToChartFormData(birth));
    if (!data) return;
    setEditing(false);
    try {
      await upsertProfile({
        label: entry.name.trim() || entry.location.display_name,
        locationName: entry.location.display_name,
        birth,
        isPrimary: false,
        chartData: data,
      });
    } catch {
      toast(t.saveError);
    }
  };

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  const showForm = editing || (!primary && !chartData);
  const showSkeleton = !showForm && !chartData;
  const lagnaBlurb = chartData ? D10_LAGNA_SIGN[chartData.d10_ascendant_sign] : null;

  return (
    <div>
      {showForm && (
        <div className="washi-card p-6 md:p-7">
          <BirthDetailsFields
            value={entry}
            onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
            idPrefix="career-report"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isBirthDetailsComplete(entry) || status === "loading"}
            className="washi-btn-primary mt-5 disabled:opacity-50"
          >
            {status === "loading" ? copy.computing : copy.submit}
          </button>
          {status === "error" && <p className="mt-3 text-sm text-terracotta">{copy.error}</p>}
        </div>
      )}

      {showSkeleton && <div className="washi-card h-72 animate-pulse" aria-hidden />}

      {!showForm && chartData && lagnaBlurb && (
        <div className="space-y-8">
          <p className="washi-measure text-sm text-text-muted">{copy.intro}</p>

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
                  <div key={planet.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body font-semibold text-ink">
                        {t.planets[planet.name] ?? planet.name}
                        <span className="ml-2 text-xs font-normal text-text-muted">
                          {copy.houseLabel(house)}
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-text-muted">{blurb[language]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="washi-btn-secondary px-4 py-2 text-sm"
            >
              {copy.calculateAgain}
            </button>
          </div>

          <BookingHandoff tool="generic" />
        </div>
      )}
    </div>
  );
}
