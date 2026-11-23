"use client";

import { useCallback, useState } from "react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ChartSectionBody from "@/components/chart/ChartSectionBody";
import BookingHandoff from "@/components/tools/BookingHandoff";
import DoshaRemedyReference from "@/components/DoshaRemedyReference";
import ToolResultFrame from "@/components/tools/ToolResultFrame";
import { computeChart, useProfileResult } from "@/components/tools/useProfileResult";
import { chartFormCopy } from "@/lib/chart-i18n";
import { buildChartPrefillQuery } from "@/lib/chart-prefill";
import type { ChartSectionId } from "@/lib/chart-sections";
import type { NatalInput } from "@/lib/profile/types";
import { chartPreviewCopy } from "@/lib/tools/chart-preview-copy";
import type { ToolHandoffId } from "@/lib/tools/handoff-copy";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";
import { useSiteZone } from "@/components/time/useSiteZone";
import { zoneIsoDate } from "@/lib/time/site-zone";

/**
 * One or more chart sections, computed and drawn without leaving the page.
 *
 * The tools that used to embed the full chart workspace for this get only
 * the section(s) that answer what they searched for, stacked vertically,
 * through `ChartSectionBody` so the markup is shared with /chart.
 *
 * The person/compute/error flow is the shared `useProfileResult` +
 * `ToolResultFrame`. Transit sections also get a working Lagna/Moon base
 * toggle (client-side re-anchoring, no new request) and a date picker
 * (recomputes the transits for that day).
 */
export default function ChartSectionResult({
  sections,
  toolSlug,
  handoffTool = "generic",
  formless = false,
  showRemedies = false,
}: {
  sections: readonly ChartSectionId[];
  toolSlug: string;
  handoffTool?: ToolHandoffId;
  /** Another panel on the page owns the entry form (sukuyo): render nothing until a person exists. */
  formless?: boolean;
  /** Mangal Dosha: the general remedy reference, after the result. */
  showRemedies?: boolean;
}) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const copy = chartPreviewCopy[language];
  const ui = toolUiCopy[language];
  const hasTransits = sections.includes("gochar") || sections.includes("sadeSati");

  const [gocharBase, setGocharBase] = useState<"Lagna" | "Chandra">("Lagna");
  // null = "today" in the site zone (JST; IST in India) until a date is picked.
  const zone = useSiteZone();
  const todayIso = zoneIsoDate(zone);
  const [pickedDay, setTransitDay] = useState<string | null>(null);
  const transitDay = pickedDay ?? todayIso;

  const compute = useCallback(
    (natal: NatalInput) => {
      const [y, m, d] = transitDay.split("-").map(Number);
      return computeChart(natal, new Date(y, m - 1, d));
    },
    [transitDay],
  );

  const state = useProfileResult({
    toolSlug,
    compute,
    key: hasTransits ? transitDay : "",
    toChartData: (data) => data,
  });

  if (formless && state.isLoaded && !state.subject) return null;

  return (
    <ToolResultFrame state={state} idPrefix={`preview-${toolSlug}`} loadingClassName="h-[536px] md:h-[424px] lg:h-[412px]">
      {(chartData, subject) => {
        const n = subject.natal;
        const prefillQuery = buildChartPrefillQuery({
          name: subject.name,
          date: `${String(n.year).padStart(4, "0")}-${String(n.month).padStart(2, "0")}-${String(n.day).padStart(2, "0")}`,
          time: `${String(n.hour).padStart(2, "0")}:${String(n.minute).padStart(2, "0")}`,
          latitude: n.latitude,
          longitude: n.longitude,
          place: subject.place,
        });
        return (
          <div className="space-y-10">
            {hasTransits ? (
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <label htmlFor={`${toolSlug}-transit-date`} className="text-text-muted">
                  {ui.transitDate}
                </label>
                <input
                  id={`${toolSlug}-transit-date`}
                  type="date"
                  value={transitDay}
                  min="1900-01-01"
                  max="2099-12-31"
                  onChange={(e) => e.target.value && setTransitDay(e.target.value)}
                  className="washi-field cursor-pointer p-2 text-sm"
                />
                {transitDay !== todayIso ? (
                  <button type="button" onClick={() => setTransitDay(null)} className="washi-btn-secondary px-3 py-2 text-xs">
                    {ui.today}
                  </button>
                ) : null}
              </div>
            ) : null}

            {sections.map((id) => (
              <ChartSectionBody
                key={id}
                id={id}
                data={chartData}
                t={t}
                lang={language}
                gocharBase={gocharBase}
                onGocharBaseChange={setGocharBase}
                openCurrentDasha={id === "dasha"}
                birthYear={n.year}
              />
            ))}

            {showRemedies ? <DoshaRemedyReference /> : null}

            <Link href={`/chart?${prefillQuery}`} className="washi-btn-secondary inline-block text-sm">
              {copy.openFullChart}
            </Link>

            <BookingHandoff tool={handoffTool} offering="consultation" />
          </div>
        );
      }}
    </ToolResultFrame>
  );
}
