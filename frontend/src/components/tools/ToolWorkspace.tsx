"use client";

import ChartWorkspace from "@/components/ChartWorkspace";
import type { ChartTab } from "@/lib/chart-types";

/**
 * The working chart tool, embedded in a tool landing page (Phase 3.6).
 *
 * `enablePersistence` is off: these pages are public and the visitor may not
 * be signed in, and requiring a name before the tool will run is exactly the
 * friction that stops a landing page converting.
 */
export default function ToolWorkspace({
  initialTab,
}: {
  initialTab: ChartTab;
}) {
  return (
    <div className="washi-card p-4 md:p-6">
      <ChartWorkspace embedded initialTab={initialTab} />
    </div>
  );
}
