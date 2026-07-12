"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  MoonStar,
  Sparkles,
} from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import SiteBrand from "@/components/layout/SiteBrand";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
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

function HomeBanner({
  embedded,
  alt,
}: {
  embedded?: boolean;
  alt: string;
}) {
  return (
    <div
      className={
        embedded
          ? "-mx-4 mb-8 md:-mx-8 md:mb-10"
          : "mb-8 w-full md:mb-10"
      }
    >
      <Image
        src={HOME_BANNER_SRC}
        alt={alt}
        width={1600}
        height={707}
        className="block h-auto w-full"
        priority
        sizes="100vw"
      />
    </div>
  );
}

function PublicWelcomeHeader({ lang }: {
  lang: ReturnType<typeof useWelcomeLang>["lang"];
}) {
  return (
    <header className="border-b border-border bg-washi">
      <div className="shell-header-desktop mx-auto w-full max-w-6xl items-center justify-between gap-6 px-8 py-4">
        <SiteBrand size="lg" className="shrink-0" />
        <nav className="flex shrink-0 items-center gap-3">
          <PublicLanguageLink className="font-body inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:text-text" />
          <Link
            href="/chart"
            className="washi-btn-secondary gap-1.5 px-3 py-2 text-xs"
          >
            <Sparkles size={14} />
            {uiText("generateChart", lang)}
          </Link>
          <SignedOut>
            <Link
              href="/sign-in"
              className="washi-btn-tertiary text-xs"
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
        <Link
          href="/sign-in"
          className="washi-btn-secondary h-10 shrink-0 px-3 text-[11px]"
        >
          {uiText("signIn", lang)}
        </Link>
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center">
          <SiteBrand size="sm" className="shrink-0" />
          <p className="washi-eyebrow-muted text-[10px] tracking-[0.2em]">
            {uiText("home", lang)}
          </p>
        </div>
        <PublicLanguageLink
          iconOnly
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-washi-elevated text-text transition-colors hover:text-terracotta"
        />
      </div>
    </header>
  );
}

function WelcomeHomeInner({ embedded }: { embedded?: boolean }) {
  const { lang } = useWelcomeLang();
  const instagramCopy = welcomeContent.instagram[lang];

  const content = (
    <div className={`${embedded ? "" : "min-h-screen"} bg-washi text-text`}>
      {!embedded && <PublicWelcomeHeader lang={lang} />}

      <HomeBanner
        embedded={embedded}
        alt={welcomeText(welcomeContent.bannerAlt, lang)}
      />

      <div className={`relative mx-auto max-w-6xl ${embedded ? "" : "px-4 pb-8 md:px-8 md:pb-12"}`}>
        <div className="relative">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-header max-w-3xl text-4xl leading-[1.12] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
              {welcomeText(welcomeContent.title, lang)}
            </h1>

            <div className="mt-8 max-w-3xl space-y-5">
              {welcomeContent.intro.map((paragraph) => (
                <p
                  key={paragraph.en}
                  className="font-body text-sm leading-[1.9] text-text-muted md:text-base"
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
              <p className="font-body text-sm leading-[1.9] text-text md:text-base">
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
                    className="washi-card group relative p-6 md:p-7"
                  >
                    <div className="relative">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="washi-icon-chip h-10 w-10 shrink-0">
                          <Icon size={18} aria-hidden />
                        </div>
                        <h2 className="font-body text-lg font-medium leading-snug text-text md:text-xl">
                          {welcomeText(point.title, lang)}
                        </h2>
                      </div>

                      <p className="font-body mb-6 text-sm leading-[1.9] text-text-muted">
                        {welcomeText(point.body, lang)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {point.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="font-body inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-terracotta hover:text-terracotta"
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
