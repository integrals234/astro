"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import AppShell from "@/components/layout/AppShell";
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
        <AppShell>
          <div className="max-w-7xl">
            <ChartSectionNav />
            {children}
          </div>
        </AppShell>
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen bg-washi text-ink">
          {showPublicAuthBar && <PublicHeader showChartCta={false} />}
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-8">
            <ChartSectionNav />
            {children}
          </div>
        </div>
      </SignedOut>
    </>
  );
}
