"use client";

import { SignedIn, SignedOut, useAuthState } from "@/components/auth/AuthProvider";
import AppShell from "@/components/layout/AppShell";
import PublicHeader from "@/components/layout/PublicHeader";
import ChartSectionNav from "@/components/chart/ChartSectionNav";

interface ChartShellProps {
  children: React.ReactNode;
  /**
   * Server-rendered content after the workspace (the /chart guide). Signed
   * in, it goes inside the app frame's own scroll area — outside it, it
   * became a second page scroll that ran on after the chart ended. Signed
   * out or not yet known (crawlers, first paint), it renders as plain page
   * content after the workspace, so it is in the server HTML.
   */
  after?: React.ReactNode;
  /** Show top auth bar when chart pages are viewed signed-out (generator only). */
  showPublicAuthBar?: boolean;
}

/** Everything except "known to be signed in" — including the server render. */
function UnlessSignedIn({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuthState();
  return isLoaded && isSignedIn ? null : <>{children}</>;
}

export default function ChartShell({ children, showPublicAuthBar, after }: ChartShellProps) {
  return (
    <>
      <SignedIn>
        <AppShell>
          <div className="max-w-7xl">
            <ChartSectionNav />
            {children}
            {after}
          </div>
        </AppShell>
      </SignedIn>
      <SignedOut>
        <div className="chart-stage relative isolate min-h-screen bg-washi text-ink">
          {showPublicAuthBar && <PublicHeader showChartCta={false} />}
          <div className="page-enter mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-8">
            <ChartSectionNav />
            {children}
          </div>
        </div>
      </SignedOut>
      {after ? (
        <UnlessSignedIn>
          <div className="bg-washi">{after}</div>
        </UnlessSignedIn>
      ) : null}
    </>
  );
}
