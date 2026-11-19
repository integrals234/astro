"use client";

import { ChartDataProvider } from "@/components/chart/ChartDataProvider";
import ToolsBrowser from "@/components/tools/ToolsBrowser";

/** Client island for /tools: the browser, with a shared chart so tools can open in place. */
export default function ToolsHub({ title }: { title: string }) {
  return (
    <ChartDataProvider toolSlug="tools-hub">
      <ToolsBrowser variant="hub" title={title} />
    </ChartDataProvider>
  );
}
