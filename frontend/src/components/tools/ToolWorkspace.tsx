"use client";

import dynamic from "next/dynamic";
import type { ChartTab } from "@/lib/chart-types";

/**
 * The working chart tool, embedded in a tool landing page (Phase 3.6).
 *
 * `enablePersistence` is off: these pages are public and the visitor may not
 * be signed in, and requiring a name before the tool will run is exactly the
 * friction that stops a landing page converting.
 *
 * Loaded with `next/dynamic` because `ChartWorkspace` pulls in cmdk,
 * framer-motion, Clerk and both chart renderers. The tool landings are static,
 * server-rendered, SEO-critical pages whose value is the prose above the fold —
 * they should not block on the workspace bundle to become readable.
 */
const ChartWorkspace = dynamic(() => import("@/components/ChartWorkspace"), {
  loading: () => <WorkspaceSkeleton />,
});

function WorkspaceSkeleton() {
  return (
    <div
      className="min-h-[28rem] animate-pulse rounded-lg bg-[color:var(--color-surface-muted,rgba(0,0,0,0.04))]"
      aria-hidden
    />
  );
}

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
