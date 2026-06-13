"use client";

import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import AppShell from "@/components/layout/AppShell";
import ChartSectionNav from "@/components/chart/ChartSectionNav";

interface ChartShellProps {
  children: React.ReactNode;
  /** Show top auth bar when chart pages are viewed signed-out (generator only). */
  showPublicAuthBar?: boolean;
}

function PublicChartAuthBar() {
  return (
    <header className="mb-6 border-b border-shell-border bg-shell-sidebar/80 backdrop-blur-md -mx-4 px-4 py-3 md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="group">
          <span className="font-serif text-lg tracking-tight text-shell-warm group-hover:text-shell-accent transition-colors">
            Astro
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-xs font-medium text-shell-muted hover:text-shell-warm transition-colors"
          >
            Sign in
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
