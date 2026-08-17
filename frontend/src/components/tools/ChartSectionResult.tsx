"use client";

import { useEffect, useState } from "react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import ChartSectionBody from "@/components/chart/ChartSectionBody";
import BookingHandoff from "@/components/tools/BookingHandoff";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { trackEvent } from "@/lib/analytics/events";
import { chartFormCopy } from "@/lib/chart-i18n";
import { buildChartPrefillQuery } from "@/lib/chart-prefill";
import { natalToChartFormData, toChartFormData } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import type { ChartSectionId } from "@/lib/chart-sections";
import { chartPreviewCopy } from "@/lib/tools/chart-preview-copy";
import type { ToolHandoffId } from "@/lib/tools/handoff-copy";

/**
 * One or more chart sections, computed and drawn without leaving the page.
 *
 * The tools that used to embed the full chart workspace for this — a
 * component built for someone who wants every tab, every save/load control,
 * and a PDF export — get only the section(s) that answer what they searched
 * for, stacked vertically. Same entry-and-compute flow used elsewhere for
 * this (birth details once, remembered for every other tool), rendered
 * through `ChartSectionBody` so it shares markup with every other section
 * consumer instead of calling `KundliChart` directly.
 */
export default function ChartSectionResult({
  sections,
  toolSlug,
  handoffTool = "generic",
}: {
  sections: readonly ChartSectionId[];
  toolSlug: string;
  handoffTool?: ToolHandoffId;
}) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const copy = chartPreviewCopy[language];
  const { primary, isLoaded, upsertProfile } = useBirthProfile();

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [computedFor, setComputedFor] = useState<string | null>(null);

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
  useEffect(() => {
    if (!isLoaded || !primary || computedFor === primary.id) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent("tool_opened", { slug: toolSlug, locale: language });
      await runCompute(toChartFormData(primary));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, primary, computedFor]);

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

  if (!chartData && !primary && status !== "loading") {
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
    <div className="space-y-10">
      {sections.map((id) => (
        <ChartSectionBody key={id} id={id} data={chartData} t={t} lang={language} />
      ))}

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
