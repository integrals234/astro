"use client";

import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import KundliChart from "@/components/KundliChart";
import BookingHandoff from "@/components/tools/BookingHandoff";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { trackEvent } from "@/lib/analytics/events";
import { chartFormCopy } from "@/lib/chart-i18n";
import { chartView, type ChartView } from "@/lib/chart-render";
import { buildChartPrefillQuery } from "@/lib/chart-prefill";
import { natalToChartFormData, toChartFormData } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import { chartPreviewCopy } from "@/lib/tools/chart-preview-copy";
import type { ToolHandoffId } from "@/lib/tools/handoff-copy";

/**
 * A single chart view, computed and drawn without leaving the page.
 *
 * The three "which chart" tools — Lagna, Moon and transits — used to embed
 * the full chart workspace, which is a 949-line component built for someone
 * who wants every tab, every save/load control, and a PDF export. Someone who
 * clicked "moon sign" wants their moon sign. This computes once, draws the one
 * (or few) views asked for, and links out to the full workspace for anyone who
 * wants the rest — instead of loading the rest for everyone.
 *
 * With more than one entry in `views`, the views render as switchable tabs
 * (the homepage's use: one compute, three ways to look at it).
 */
export default function ChartPreviewResult({
  views,
  toolSlug,
  handoffTool = "generic",
}: {
  views: readonly ChartView[];
  toolSlug: string;
  handoffTool?: ToolHandoffId;
}) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const copy = chartPreviewCopy[language];
  const { primary, isLoaded, upsertProfile } = useBirthProfile();

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [activeView, setActiveView] = useState<ChartView>(views[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [computedFor, setComputedFor] = useState<string | null>(null);
  /** Set by "New chart" — blocks the auto-compute effect below so clearing
   * `chartData` doesn't just recompute the same remembered person again. */
  const [overrideEntry, setOverrideEntry] = useState(false);

  const runCompute = async (
    formData: ReturnType<typeof natalToChartFormData>,
  ) => {
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
      trackEvent("tool_completed", { slug: toolSlug, locale: language });
      return data;
    } catch {
      setStatus("error");
      return null;
    }
  };

  // Auto-compute from the remembered person, once, the first time one exists.
  // Wrapped in an async function rather than calling setComputedFor directly
  // in the effect body, which would otherwise be a bare setState call in the
  // effect's own synchronous path.
  useEffect(() => {
    if (!isLoaded || !primary || computedFor === primary.id || overrideEntry) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent("tool_opened", { slug: toolSlug, locale: language });
      await runCompute(toChartFormData(primary));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, primary, computedFor, overrideEntry]);

  const handleReset = () => {
    setChartData(null);
    setComputedFor(null);
    setOverrideEntry(true);
    setEntry(EMPTY_BIRTH_DETAILS);
  };

  const handleEntrySubmit = async () => {
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
    // Remembered for every other tool, same as the full workspace does.
    void upsertProfile({
      label: entry.name.trim() || entry.location.display_name,
      locationName: entry.location.display_name,
      birth,
      isPrimary: false,
      chartData: data,
    });
  };

  if (!isLoaded) {
    return <div className="washi-card h-72 animate-pulse" aria-hidden />;
  }

  if (!chartData && (!primary || overrideEntry) && status !== "loading") {
    return (
      <div className="washi-card p-6 md:p-7">
        <p className="mb-4 font-body text-text">{copy.needDetails}</p>
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
          idPrefix={`preview-${toolSlug}`}
        />
        <button
          type="button"
          onClick={handleEntrySubmit}
          disabled={!isBirthDetailsComplete(entry)}
          className="washi-btn-primary mt-4 disabled:opacity-50"
        >
          {copy.generate}
        </button>
      </div>
    );
  }

  if (status === "loading" || !chartData) {
    return <div className="washi-card h-72 animate-pulse" aria-hidden />;
  }

  const rendered = chartView(chartData, activeView, t.planets);
  const prefillQuery = primary
    ? buildChartPrefillQuery({
        name: primary.label,
        date: `${String(primary.birth.year).padStart(4, "0")}-${String(primary.birth.month).padStart(2, "0")}-${String(primary.birth.day).padStart(2, "0")}`,
        time: `${String(primary.birth.hour).padStart(2, "0")}:${String(primary.birth.minute).padStart(2, "0")}`,
        latitude: primary.birth.latitude,
        longitude: primary.birth.longitude,
        place: primary.locationName,
      })
    : "";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        {views.length > 1 ? (
          <div className="flex gap-2" role="tablist">
            {views.map((v) => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={activeView === v}
                onClick={() => setActiveView(v)}
                className={`washi-badge transition-colors ${
                  activeView === v
                    ? "border-terracotta text-ink"
                    : "text-text-muted hover:text-ink"
                }`}
              >
                {copy.viewLabels[v]}
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={handleReset}
          className="washi-btn-tertiary flex items-center gap-1.5 px-2 py-2 text-[10px] uppercase tracking-wider"
        >
          <RotateCcw size={13} />
          {t.ui?.resetChart}
        </button>
      </div>

      <KundliChart
        planets={rendered.planets}
        transitPlanets={rendered.transitPlanets}
        ascendantSign={rendered.ascendantSign}
        ascLabel={activeView !== "moon" ? t.ui.asc : undefined}
        ascDegree={
          activeView !== "moon"
            ? Math.floor(chartData.ascendant_longitude % 30)
            : undefined
        }
        transitLabel={t.transitPlanet}
        accessibility={{
          planetAt: t.planetAt,
          transitPlanet: t.transitPlanet,
          retrograde: t.retrogradeLong,
        }}
      />

      <Link
        href={prefillQuery ? `/chart?${prefillQuery}` : "/chart"}
        className="washi-btn-secondary inline-block text-sm"
      >
        {copy.openFullChart}
      </Link>

      <BookingHandoff tool={handoffTool} offering="consultation" />
    </div>
  );
}
