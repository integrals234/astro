"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "@/components/i18n/LocaleLink";
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  MoonStar,
  Sparkles,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import PublicHeader from "@/components/layout/PublicHeader";
import HomeInstagramStrip from "@/components/home/HomeInstagramStrip";
import QuickChartForm from "@/components/home/QuickChartForm";
import StickyCtaBar from "@/components/home/StickyCtaBar";
import { TrustBadges, Testimonials } from "@/components/home/TrustSignals";
import Reveal from "@/components/motion/Reveal";
import { useHaptic } from "@/hooks/useHaptic";
import {
  welcomeContent,
  welcomeText,
  type WelcomeStartingPointId,
} from "@/lib/home/welcome-content";
import { useWelcomeLang } from "@/lib/home/use-welcome-lang";
import { uiText } from "@/lib/education/i18n/ui";

const HOME_BANNER_SRC = "/assets/new/banner.webp";
const HOME_INTRO_IMAGE_SRC = "/assets/new/e.webp";

const startingPointIcons: Record<WelcomeStartingPointId, typeof BookOpen> = {
  "new-readers": BookOpen,
  "own-chart": Compass,
  "learn-practice": FlaskConical,
  "personal-reading": MoonStar,
};

type Lang = ReturnType<typeof useWelcomeLang>["lang"];

/**
 * Full-bleed banner with a gradient scrim and an italic serif caption — the
 * reference's `.veda-band` treatment. The scrim is what lets the caption sit
 * on the image legibly in both themes.
 */
function HomeBanner({ embedded, lang }: { embedded?: boolean; lang: Lang }) {
  return (
    <figure
      /*
       * `overflow-hidden` belongs here, on the parent.
       *
       * Moment #1 scales the inner span to 1.06 and lifts it, and an element
       * cannot clip its own transform — so with the clip on the span the
       * banner grew upward and covered the site header.
       */
      className={`relative overflow-hidden ${
        embedded ? "-mx-4 mb-10 md:-mx-8" : "mb-10 w-full"
      }`}
    >
      {/* Moment #1: the banner recedes at half scroll speed as the page moves
          past it. Scrubbed, so it reverses on scroll-back. */}
      <span data-scroll="banner" className="block">
        <Image
          src={HOME_BANNER_SRC}
          alt={welcomeText(welcomeContent.bannerAlt, lang)}
          width={1600}
          height={707}
          className="block h-auto w-full"
          priority
          sizes="100vw"
        />
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-4 text-center font-header text-sm italic text-white/90 md:pb-6 md:text-base">
        {welcomeText(welcomeContent.bannerCaption, lang)}
      </figcaption>
    </figure>
  );
}

/**
 * The CTA row. Renders for signed-in *and* signed-out visitors — the specific
 * bug this fixes is that every button on the old homepage lived inside
 * `PublicWelcomeHeader`, which only renders when `!embedded`, so a signed-in
 * user saw no call to action anywhere on the page.
 */
function HeroCtaRow({ lang }: { lang: Lang }) {
  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/chart"
        className="washi-btn-primary gap-2 px-6 py-3.5 text-[length:var(--step-0)]"
      >
        <Sparkles size={16} aria-hidden />
        {welcomeText(welcomeContent.ctaPrimary, lang)}
      </Link>
      <Link
        href="/personal-appraisals"
        className="washi-btn-secondary gap-2 px-6 py-3.5 text-[length:var(--step-0)]"
      >
        <MoonStar size={16} aria-hidden />
        {welcomeText(welcomeContent.ctaSecondary, lang)}
      </Link>
    </div>
  );
}

function WelcomeHomeInner({ embedded }: { embedded?: boolean }) {
  const { lang } = useWelcomeLang();
  const instagramCopy = welcomeContent.instagram[lang];
  const { selection } = useHaptic();
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div
      className={`washi-ambient ${embedded ? "" : "min-h-screen"} bg-washi text-text`}
    >
      {!embedded && <PublicHeader pageLabel={uiText("home", lang)} maxWidth="max-w-6xl" />}

      <HomeBanner embedded={embedded} lang={lang} />

      <div
        className={`relative mx-auto max-w-6xl ${embedded ? "" : "px-4 pb-8 md:px-8 md:pb-12"}`}
      >
        {/*
         * Hero. Nothing above the fold animates on load — the H1 and the CTA
         * row are static and instant so LCP never waits on a timeline.
         */}
        <section ref={heroRef} className="mb-14 md:mb-20">
          <p className="washi-eyebrow washi-eyebrow-lead mb-5">
            {welcomeText(welcomeContent.heroEyebrow, lang)}
          </p>

          {/*
           * The 縦書き seal is gone from the hero. It rendered the *same*
           * string as the eyebrow directly above it, and under `[lang="en"]`
           * it falls back to horizontal — so English got the words twice in a
           * row, and the flex row it sat in squeezed the h1 into a narrow
           * column that broke mid-word. `.washi-seal` stays in the design
           * system for surfaces where it is the only label.
           */}
          <h1 className="max-w-3xl font-header text-[length:var(--step-4)] leading-[1.12] tracking-tight text-ink">
            {welcomeText(welcomeContent.title, lang)}
          </h1>

          <p className="washi-measure mt-6 font-header text-[length:var(--step-1)] italic text-text-muted">
            {welcomeText(welcomeContent.heroLead, lang)}
          </p>

          <HeroCtaRow lang={lang} />

          <div className="mt-8">
            <TrustBadges />
          </div>
        </section>

        {/* Inline birth-details form — the highest-conversion surface. */}
        <Reveal className="mb-16 md:mb-20">
          <QuickChartForm />
        </Reveal>

        <hr className="washi-hairline mb-14" />

        {/* Intro prose */}
        <section className="mb-14">
          <div className="washi-measure space-y-6">
            {welcomeContent.intro.map((paragraph, index) => (
              <div key={paragraph.en} className="space-y-6">
                <p className="font-body text-text-muted">
                  {welcomeText(paragraph, lang)}
                </p>
                {index === 0 && (
                  <Reveal>
                    <figure className="washi-mat">
                      <Image
                        src={HOME_INTRO_IMAGE_SRC}
                        alt={welcomeText(welcomeContent.introImageAlt, lang)}
                        width={1200}
                        height={900}
                        sizes="(max-width: 768px) 100vw, 48rem"
                      />
                    </figure>
                  </Reveal>
                )}
              </div>
            ))}
          </div>

          <Reveal>
            <blockquote className="washi-callout washi-measure mt-10 bg-moss-tint px-6 py-5">
              <p className="font-header text-[length:var(--step-1)] italic text-ink">
                {welcomeText(welcomeContent.pullQuote, lang)}
              </p>
            </blockquote>
          </Reveal>
        </section>

        <Reveal className="mb-14 max-w-2xl">
          <HomeInstagramStrip copy={instagramCopy} />
        </Reveal>
      </div>

      <div className="washi-glyph-divider" aria-hidden />

      {/*
       * Starting points on the inverted band. This is what gives the page a
       * spine, and it is where the reference puts the equivalent content.
       */}
      <section className="washi-inverted py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <p className="washi-eyebrow washi-eyebrow-flanked mb-4">
            {welcomeText(welcomeContent.startingPointsEyebrow, lang)}
          </p>
          <p className="mb-10 max-w-2xl font-body opacity-80">
            {welcomeText(welcomeContent.startingPointsLead, lang)}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {welcomeContent.startingPoints.map((point) => {
              const Icon = startingPointIcons[point.id];
              const primaryLink =
                point.links.find((link) => link.primary) ?? point.links[0];
              const secondaryLinks = point.links.filter(
                (link) => link !== primaryLink,
              );

              return (
                <Reveal key={point.id}>
                  <article className="washi-card washi-card-interactive group h-full p-6 md:p-7">
                    <div className="mb-4 flex items-start gap-3">
                      <span className="washi-icon-chip h-10 w-10 shrink-0 transition-transform duration-300 ease-[var(--ease-butter)] group-hover:-rotate-3 group-hover:scale-110">
                        <Icon size={18} aria-hidden />
                      </span>
                      <h2 className="font-header text-[length:var(--step-1)] leading-snug">
                        {welcomeText(point.title, lang)}
                      </h2>
                    </div>

                    <p className="mb-6 font-body text-sm opacity-80">
                      {welcomeText(point.body, lang)}
                    </p>

                    {/* One terminal action per card, not a row of equal pills. */}
                    <Link
                      href={primaryLink.href}
                      onClick={() => selection()}
                      className="washi-btn-secondary gap-2 px-4 py-2.5 text-sm"
                    >
                      {welcomeText(primaryLink.label, lang)}
                      <ArrowRight size={14} aria-hidden />
                    </Link>

                    {secondaryLinks.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                        {secondaryLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => selection()}
                            className="washi-btn-tertiary text-xs"
                          >
                            {welcomeText(link.label, lang)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <Testimonials />

        {/* Every page ends with a next action, not a scroll bottom. */}
        <Reveal className="mt-12 text-center">
          <hr className="washi-hairline mb-10" />
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/chart"
              className="washi-btn-primary gap-2 px-6 py-3.5 text-[length:var(--step-0)]"
            >
              <Sparkles size={16} aria-hidden />
              {welcomeText(welcomeContent.ctaPrimary, lang)}
            </Link>
            <Link
              href="/personal-appraisals"
              className="washi-btn-secondary gap-2 px-6 py-3.5 text-[length:var(--step-0)]"
            >
              {welcomeText(welcomeContent.ctaSecondary, lang)}
            </Link>
          </div>
        </Reveal>
      </div>

      {!embedded && <SiteFooter />}

      <StickyCtaBar heroRef={heroRef} />
    </div>
  );
}

/*
 * Rendered once, in both auth states.
 *
 * The page used to be wrapped in `<SignedIn><AppShell>…</SignedIn>` /
 * `<SignedOut>…</SignedOut>`. Clerk's auth components cannot resolve during
 * static prerender, so that wrapper bailed the whole tree to client-side
 * rendering and the homepage shipped 12 characters of text to crawlers.
 * `PublicHeader` adapts to auth state on its own, inside the header only.
 */
export default function WelcomeHomePage() {
  return <WelcomeHomeInner />;
}
