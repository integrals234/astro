"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import SiteBrand from "@/components/layout/SiteBrand";
import HoroscopeSection from "@/components/horoscope/HoroscopeSection";
import { uiText } from "@/lib/education/i18n/ui";
import { useEducationLang } from "@/lib/education/use-education-lang";

function PublicHoroscopeHeader() {
  const { lang } = useEducationLang();

  return (
    <header className="border-b border-shell-border bg-shell-sidebar/80 backdrop-blur-md">
      <div className="shell-header-desktop mx-auto w-full max-w-7xl items-center justify-between gap-6 px-8 py-4">
        <SiteBrand size="lg" className="shrink-0" />
        <nav className="flex shrink-0 items-center gap-4">
          <Link
            href="/chart"
            className="inline-flex items-center gap-1.5 rounded-lg border border-shell-border bg-shell-elevated/60 px-3 py-2 text-xs font-medium text-shell-warm transition-all hover:border-shell-accent/40 hover:text-shell-accent"
          >
            <Sparkles size={14} />
            {uiText("generateChart", lang)}
          </Link>
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-xs font-medium text-shell-muted transition-colors hover:text-shell-warm"
            >
              {uiText("signIn", lang)}
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>

      <div className="shell-header-mobile mx-auto w-full max-w-7xl items-center gap-2 px-4 py-4">
        <div className="h-10 w-10 shrink-0" aria-hidden />
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center">
          <SiteBrand size="sm" className="shrink-0" />
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-shell-muted">
            {uiText("horoscope", lang)}
          </p>
        </div>
        <div className="h-10 w-10 shrink-0" aria-hidden />
      </div>
    </header>
  );
}

function HoroscopePageInner({ embedded }: { embedded?: boolean }) {
  const { lang } = useEducationLang();

  return (
    <div className={`${embedded ? "" : "min-h-screen"} bg-shell-bg text-shell-warm`}>
      {!embedded && <PublicHoroscopeHeader />}

      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-4 py-6 md:px-8 md:py-10"}`}>
        <HoroscopeSection lang={lang} />
      </div>
    </div>
  );
}

export default function HoroscopePage() {
  return (
    <>
      <SignedIn>
        <AppShell>
          <HoroscopePageInner embedded />
        </AppShell>
      </SignedIn>
      <SignedOut>
        <HoroscopePageInner />
      </SignedOut>
    </>
  );
}
