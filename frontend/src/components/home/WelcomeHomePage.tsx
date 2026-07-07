"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  Languages,
  MoonStar,
  Sparkles,
} from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import SiteBrand from "@/components/layout/SiteBrand";
import HomeInstagramStrip from "@/components/home/HomeInstagramStrip";
import {
  welcomeContent,
  welcomeText,
  type WelcomeStartingPointId,
} from "@/lib/home/welcome-content";
import { useWelcomeLang } from "@/lib/home/use-welcome-lang";
import { uiText } from "@/lib/education/i18n/ui";

const HOME_BANNER_SRC = "/assets/new/banner.jpeg";

const startingPointIcons: Record<
  WelcomeStartingPointId,
  typeof BookOpen
> = {
  "new-readers": BookOpen,
  "own-chart": Compass,
  "learn-practice": FlaskConical,
  "personal-reading": MoonStar,
};

function HomeBanner({ embedded }: { embedded?: boolean }) {
  return (
    <div
      className={
        embedded
          ? "-mx-4 mb-8 md:-mx-8 md:mb-10"
          : "mb-8 w-full md:mb-10"
      }
    >
      <img
        src={HOME_BANNER_SRC}
        alt="Jyotish Life"
        className="block h-auto w-full"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

function PublicWelcomeHeader({
  lang,
  toggleLang,
}: {
  lang: ReturnType<typeof useWelcomeLang>["lang"];
  toggleLang: ReturnType<typeof useWelcomeLang>["toggleLang"];
}) {

  return (
    <header className="border-b border-shell-border bg-shell-sidebar/80 backdrop-blur-md">
      <div className="shell-header-desktop mx-auto w-full max-w-6xl items-center justify-between gap-6 px-8 py-4">
        <SiteBrand size="lg" className="shrink-0" />
        <nav className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-lg border border-shell-border bg-shell-elevated/60 px-3 py-2 text-xs font-medium text-shell-warm transition-all hover:border-shell-accent/40"
          >
            <Languages size={14} className="text-shell-accent" />
            {lang === "en" ? uiText("switchToJa", lang) : uiText("switchToEn", lang)}
          </button>
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

      <div className="shell-header-mobile mx-auto w-full max-w-6xl items-center gap-2 px-4 py-4">
        <div className="h-10 w-10 shrink-0" aria-hidden />
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center">
          <SiteBrand size="sm" className="shrink-0" />
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-shell-muted">
            {uiText("home", lang)}
          </p>
        </div>
        <nav className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === "en" ? uiText("switchToJa", lang) : uiText("switchToEn", lang)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-shell-border bg-shell-elevated/60 text-shell-warm"
          >
            <Languages size={16} className="text-shell-accent" />
          </button>
        </nav>
      </div>
    </header>
  );
}

function WelcomeHomeInner({ embedded }: { embedded?: boolean }) {
  const { lang, toggleLang } = useWelcomeLang();
  const instagramCopy = welcomeContent.instagram[lang];

  const content = (
    <div className={`${embedded ? "" : "min-h-screen"} bg-shell-bg text-shell-warm`}>
      {!embedded && <PublicWelcomeHeader lang={lang} toggleLang={toggleLang} />}

      <HomeBanner embedded={embedded} />

      <div className={`relative mx-auto max-w-6xl ${embedded ? "" : "px-4 pb-8 md:px-8 md:pb-12"}`}>
        {/* Ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 h-72 w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-shell-accent/[0.08] blur-3xl" />
          <div className="absolute top-16 right-0 h-48 w-48 rounded-full bg-shell-accent/[0.05] blur-2xl" />
          <div className="absolute top-32 left-8 h-32 w-32 rounded-full bg-shell-accent/[0.04] blur-2xl" />
        </div>

        <div className="relative">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            {embedded && (
              <div className="mb-6 flex justify-end sm:mb-8">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="inline-flex items-center gap-2 rounded-xl border border-shell-border bg-shell-elevated/60 px-4 py-2 text-xs font-medium text-shell-warm transition-colors hover:border-shell-accent/40"
                >
                  <Languages size={14} className="text-shell-accent" />
                  {lang === "en" ? uiText("switchToJa", lang) : uiText("switchToEn", lang)}
                </button>
              </div>
            )}

            <h1 className="font-brand max-w-3xl text-4xl leading-[1.12] tracking-tight text-shell-warm md:text-5xl lg:text-[3.25rem]">
              {welcomeText(welcomeContent.title, lang)}
            </h1>

            <div className="mt-8 max-w-3xl space-y-5">
              {welcomeContent.intro.map((paragraph) => (
                <p
                  key={paragraph.en}
                  className="text-sm leading-relaxed text-shell-muted md:text-base md:leading-relaxed"
                >
                  {welcomeText(paragraph, lang)}
                </p>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            className="mb-10 max-w-2xl"
          >
            <HomeInstagramStrip copy={instagramCopy} />
          </motion.div>

          {/* Starting points */}
          <section className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm leading-relaxed text-shell-warm/90 md:text-base">
                {welcomeText(welcomeContent.startingPointsLead, lang)}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {welcomeContent.startingPoints.map((point, index) => {
                const Icon = startingPointIcons[point.id];

                return (
                  <motion.article
                    key={point.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-3xl border border-shell-border bg-gradient-to-br from-shell-elevated/80 via-shell-elevated/45 to-shell-bg/50 p-6 md:p-7 backdrop-blur-sm transition-colors hover:border-shell-accent/25"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-shell-accent/[0.06] blur-2xl transition-opacity group-hover:opacity-100 opacity-60"
                    />

                    <div className="relative">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-shell-accent/20 bg-shell-accent-soft">
                          <Icon size={18} className="text-shell-accent" aria-hidden />
                        </div>
                        <h2 className="font-serif text-lg leading-snug text-shell-warm md:text-xl">
                          {welcomeText(point.title, lang)}
                        </h2>
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-shell-muted">
                        {welcomeText(point.body, lang)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {point.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 rounded-full border border-shell-border bg-shell-bg/40 px-3.5 py-2 text-xs font-medium text-shell-warm transition-all hover:border-shell-accent/40 hover:bg-shell-accent-soft hover:text-shell-accent"
                          >
                            {welcomeText(link.label, lang)}
                            <ArrowRight size={12} className="opacity-60" aria-hidden />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return content;
}

export default function WelcomeHomePage() {
  return (
    <>
      <SignedIn>
        <AppShell>
          <WelcomeHomeInner embedded />
        </AppShell>
      </SignedIn>
      <SignedOut>
        <WelcomeHomeInner />
      </SignedOut>
    </>
  );
}
