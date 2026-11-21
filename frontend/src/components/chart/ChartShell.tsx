"use client";

import { SignedIn, SignedOut } from "@/components/auth/AuthProvider";
import AppShell from "@/components/layout/AppShell";
import Starfield from "@/components/celestial/Starfield";
import PointerLight from "@/components/celestial/PointerLight";
import PublicHeader from "@/components/layout/PublicHeader";
import ChartSectionNav from "@/components/chart/ChartSectionNav";

interface ChartShellProps {
  children: React.ReactNode;
  /** Show top auth bar when chart pages are viewed signed-out (generator only). */
  showPublicAuthBar?: boolean;
}

export default function ChartShell({ children, showPublicAuthBar }: ChartShellProps) {
  return (
    <>
      <SignedIn>
        {/* design-magic: the chart workspace is an always-night stage. */}
        <div className="night">
        <AppShell>
          <div className="max-w-7xl">
            <ChartSectionNav />
            {children}
          </div>
        </AppShell>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="night relative isolate min-h-screen bg-washi text-ink">
          <div aria-hidden className="night-sky fixed inset-0 -z-10">
            <Starfield density={0.55} meteors={false} seed={41} />
          </div>
          <PointerLight />
          {showPublicAuthBar && <PublicHeader showChartCta={false} />}
          <div className="page-enter mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-8">
            <ChartSectionNav />
            {children}
          </div>
        </div>
      </SignedOut>
    </>
  );
}
