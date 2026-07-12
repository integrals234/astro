"use client";

import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import AppShell from "@/components/layout/AppShell";
import SiteBrand from "@/components/layout/SiteBrand";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
import ChartSectionNav from "@/components/chart/ChartSectionNav";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

interface ChartShellProps {
  children: React.ReactNode;
  /** Show top auth bar when chart pages are viewed signed-out (generator only). */
  showPublicAuthBar?: boolean;
}

function PublicChartAuthBar() {
  const { language } = useLanguage();
  const copy = getSharedCopy(language);

  return (
    <header className="mb-6 border-b border-shell-border bg-shell-sidebar/80 backdrop-blur-md -mx-4 px-4 py-3 md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <SiteBrand size="md" />
        <div className="flex items-center gap-3">
          <PublicLanguageLink className="inline-flex items-center gap-1.5 text-xs font-medium text-shell-muted transition-colors hover:text-shell-warm" />
          <Link
            href="/sign-in"
            className="text-xs font-medium text-shell-muted hover:text-shell-warm transition-colors"
          >
            {copy.chrome.signIn}
          </Link>
        </div>
      </div>
    </header>
  );
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
        <div className="min-h-screen bg-shell-bg text-shell-warm px-4 py-4 md:px-8 md:py-8">
          {showPublicAuthBar && <PublicChartAuthBar />}
          <div className="mx-auto max-w-7xl">
            <ChartSectionNav />
            {children}
          </div>
        </div>
      </SignedOut>
    </>
  );
}
