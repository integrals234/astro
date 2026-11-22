"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { Calculating, InlineError } from "@/components/tools/ToolResultFrame";
import { profilePersonName } from "@/lib/profile/types";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";
import { chartFormCopy } from "@/lib/chart-i18n";
import type { ToolLanding } from "@/lib/tools/landing-content";
import type { ToolSummary } from "@/lib/tools/tool-summary";

/*
 * Every in-place tool result, loaded on demand.
 *
 * The old homepage grid imported all of these statically, so a first-time
 * visitor downloaded every calculator's code before seeing the hero. Each is
 * now its own chunk, fetched the first time its sheet opens.
 */
const loading = () => <div className="h-48 animate-pulse rounded-[14px] bg-washi-deep" aria-hidden />;

const PANELS = {
  sukuyo: dynamic(() => import("@/components/tools/SukuyoResult"), { ssr: false, loading }),
  compatibility: dynamic(() => import("@/components/tools/CompatibilityResult"), { ssr: false, loading }),
  numerology: dynamic(() => import("@/components/NumerologyPanel"), { ssr: false, loading }),
  birthTimeSensitivity: dynamic(() => import("@/components/BirthTimeSensitivityPanel"), { ssr: false, loading }),
  annualForecast: dynamic(() => import("@/components/AnnualForecastPanel"), { ssr: false, loading }),
  panchang: dynamic(() => import("@/components/PanchangPanel"), { ssr: false, loading }),
  babyNames: dynamic(() => import("@/components/BabyNamesPanel"), { ssr: false, loading }),
  nakshatraFinder: dynamic(() => import("@/components/NakshatraFinderPanel"), { ssr: false, loading }),
  gemstone: dynamic(() => import("@/components/GemstonePanel"), { ssr: false, loading }),
  careerReport: dynamic(() => import("@/components/CareerReportPanel"), { ssr: false, loading }),
} satisfies Record<NonNullable<ToolLanding["resultPanel"]>, unknown>;

const ChartSectionBody = dynamic(() => import("@/components/chart/ChartSectionBody"), { ssr: false, loading });
const ChartSectionResult = dynamic(() => import("@/components/tools/ChartSectionResult"), { ssr: false, loading });

/**
 * Can this tool answer in place? Every tool can: with a remembered person
 * the sheet shows their answer (or its calculating / failed state); for a
 * first-time visitor it opens on the tool's own short form — quick use
 * without leaving the page.
 */
export function canOpenInPlace(tool: ToolSummary) {
  return Boolean(tool.resultPanel || tool.sections);
}

/** The tool's answer, rendered inside a sheet. Needs a `ChartDataProvider` above it. */
export default function ToolPanel({ tool }: { tool: ToolSummary }) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const ui = toolUiCopy[language];
  const { data, status, retry } = useChartData();
  const { primary } = useBirthProfile();
  const [gocharBase, setGocharBase] = useState<"Lagna" | "Chandra">("Lagna");
  const Panel = tool.resultPanel ? PANELS[tool.resultPanel] : null;
  const showSections = Boolean(tool.sections) && !tool.resultPanel;

  return (
    <div className="space-y-6">
      {showSections && primary ? (
        <p className="text-sm text-text-muted">{ui.resultFor(profilePersonName(primary))}</p>
      ) : null}
      {Panel ? <Panel /> : null}
      {/* No one remembered yet: the tool's own form, right here. */}
      {showSections && !data && !primary ? <ChartSectionResult sections={tool.sections!} toolSlug={tool.slug} /> : null}
      {showSections && !data && primary && status === "error" ? (
        <InlineError message={ui.computeError}>
          <button type="button" onClick={() => void retry()} className="washi-btn-primary px-4 text-sm">
            {ui.retry}
          </button>
        </InlineError>
      ) : null}
      {showSections && !data && primary && status !== "error" ? <Calculating /> : null}
      {showSections && data
        ? tool.sections!.map((id) => (
            <ChartSectionBody
              key={id}
              id={id}
              data={data}
              t={t}
              lang={language}
              gocharBase={gocharBase}
              onGocharBaseChange={setGocharBase}
              openCurrentDasha={id === "dasha"}
              birthYear={primary?.birth.year}
            />
          ))
        : null}
      <Link href={`/tools/${tool.slug}`} className="washi-btn-secondary px-5 text-sm">
        {t.ui.readFullExplanation}
      </Link>
    </div>
  );
}
