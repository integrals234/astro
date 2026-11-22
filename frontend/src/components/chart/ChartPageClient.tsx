"use client";

import ChartShell from "@/components/chart/ChartShell";
import ChartWorkspace from "@/components/ChartWorkspace";

/** `after` (the server-rendered guide): see ChartShell for where it goes. */
export default function ChartPageClient({ after }: { after?: React.ReactNode }) {
  return (
    <ChartShell showPublicAuthBar after={after}>
      <ChartWorkspace embedded enablePersistence />
    </ChartShell>
  );
}
