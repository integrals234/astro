"use client";

import ChartShell from "@/components/chart/ChartShell";
import ChartWorkspace from "@/components/ChartWorkspace";

export default function ChartPageClient() {
  return (
    <ChartShell showPublicAuthBar>
      <ChartWorkspace embedded enablePersistence />
    </ChartShell>
  );
}
