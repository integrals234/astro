"use client";

import dynamic from "next/dynamic";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
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

/** Can this tool answer in place, given what the page already knows? */
export function canOpenInPlace(tool: ToolSummary, hasChart: boolean, hasProfile: boolean) {
  if (tool.resultPanel) return hasProfile || hasChart;
  if (tool.sections) return hasChart;
  return false;
}

/** The tool's answer, rendered inside a sheet. Needs a `ChartDataProvider` above it. */
export default function ToolPanel({ tool }: { tool: ToolSummary }) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const { data } = useChartData();
  const Panel = tool.resultPanel ? PANELS[tool.resultPanel] : null;

  return (
    <div className="space-y-6">
      {Panel ? <Panel /> : null}
      {tool.sections && data
        ? tool.sections.map((id) => <ChartSectionBody key={id} id={id} data={data} t={t} lang={language} />)
        : null}
      <Link href={`/tools/${tool.slug}`} className="washi-btn-secondary px-5 text-sm">
        {t.ui.readFullExplanation}
      </Link>
    </div>
  );
}
