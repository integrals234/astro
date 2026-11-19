"use client";

import { ChartDataProvider } from "@/components/chart/ChartDataProvider";
import ToolsBrowser from "@/components/tools/ToolsBrowser";
import type { ToolSummary } from "@/lib/tools/tool-summary";

/** Client island for /tools: the browser, with a shared chart so tools can open in place. */
export default function ToolsHub({ title, tools }: { title: string; tools: ToolSummary[] }) {
  return (
    <ChartDataProvider toolSlug="tools-hub">
      <ToolsBrowser variant="hub" title={title} tools={tools} />
    </ChartDataProvider>
  );
}
