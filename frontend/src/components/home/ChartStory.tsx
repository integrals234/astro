"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, ChevronDown, RotateCcw, Share2 } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
import ChartFigure from "@/components/chart/ChartFigure";
import { useToast } from "@/components/ui/Toaster";
import { chartFormCopy } from "@/lib/chart-i18n";
import { findRunningDasha, formatDashaDisplayDate } from "@/lib/chart-format";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";
import { grahaHref, nakshatraHref, rashiHref, tr } from "@/lib/sky/entity-links";
import { trackEvent } from "@/lib/analytics/events";

// The full ten-section report is still one tap away, but it is no longer
// shipped (or rendered) until someone asks for it.
const VerticalChartReport = dynamic(() => import("@/components/chart/VerticalChartReport"), {
  ssr: false,
  loading: () => <div className="washi-card h-72 animate-pulse" aria-hidden />,
});

export interface StorySubject {
  name: string | null;
  place: string | null;
}

/**
 * Screen two: "your chart", told in six beats instead of one long dump.
 *
 *   phone   — a horizontal story: swipe card to card (chart → lagna → moon →
 *             sun → current period → what next), with a step counter and
 *             previous/next buttons for anyone who doesn't swipe;
 *   desktop — chart on the left, held in place, and the four readings
 *             beside it, so nothing has to be scrolled away to compare.
 *
 * Same DOM for both (one chart, rendered once); the container switches
 * between a snap rail and a two-column grid.
 */
export default function ChartStory({ subject }: { subject: StorySubject | null }) {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const t = chartFormCopy[language];
  const { data, status, retry, reset } = useChartData();
  const { toast } = useToast();
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reportOpen, setReportOpen] = useState(false);
  const [slow, setSlow] = useState(false);

  // After a few seconds of waiting, say why (free-tier cold start) instead
  // of leaving a silent skeleton.
  useEffect(() => {
    if (status !== "loading") return;
    const id = window.setTimeout(() => setSlow(true), 4500);
    return () => {
      window.clearTimeout(id);
      setSlow(false);
    };
  }, [status]);

  // Phone step counter follows the swipe.
  useEffect(() => {
    const el = rail.current;
    if (!el || !data) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-story-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(cards.indexOf(entry.target as HTMLElement));
        }
      },
      { root: el, threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [data]);

  if (status === "idle" && !data) return null;

  if (!data) {
    return (
      <section id="your-chart" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 md:px-8" aria-busy={status === "loading"}>
        {status === "error" ? (
          <div className="washi-callout mx-auto max-w-xl p-6 text-center">
            <p className="text-text">{copy.computeError}</p>
            <button type="button" onClick={() => void retry()} className="washi-btn-secondary mt-4 gap-2 px-5 text-sm">
              <RotateCcw size={14} aria-hidden />
              {copy.retry}
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14" role="status">
            <div className="aspect-square w-full animate-pulse rounded-[14px] bg-washi-deep" aria-hidden />
            <div className="space-y-4">
              <p className="font-header text-[length:var(--step-2)] text-ink">{copy.computing}</p>
              {slow && <p className="text-sm text-text-muted">{copy.coldStart}</p>}
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-20 animate-pulse rounded-[14px] bg-washi-deep" aria-hidden />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  const moon = data.planets.find((p) => p.name === "Moon");
  const sun = data.planets.find((p) => p.name === "Sun");
  const dasha = findRunningDasha(data.vimshottari_dashas);
  const nakName = moon ? (tr(t.nakshatras, moon.nakshatra)) : "—";
  const lagnaName = tr(t.signs, data.ascendant_sign);
  const total = 6;

  const goTo = (index: number) => {
    const el = rail.current;
    const card = el?.querySelectorAll<HTMLElement>("[data-story-card]")[index];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 16, behavior: "smooth" });
  };

  const share = async () => {
    if (!moon) return;
    const url = `${window.location.origin}${language === "ja" ? "" : `/${language}`}${nakshatraHref(moon.nakshatra)}`;
    const text = copy.shareText(nakName);
    try {
      if (navigator.share) {
        await navigator.share({ title: "Jyotish Life", text, url });
        trackEvent("result_shared", { locale: language, method: "native" });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast(copy.copied);
        trackEvent("result_shared", { locale: language, method: "clipboard" });
      }
    } catch {
      // Dismissing the share sheet is not an error worth surfacing.
    }
  };

  const insights: {
    key: string;
    label: string;
    value: string;
    sub?: string;
    teaser: string;
    href: string;
    linkLabel: string;
    accent?: boolean;
  }[] = [
    {
      key: "lagna",
      label: t.ui.summaryLagna,
      value: lagnaName,
      teaser: copy.lagnaTeaser,
      href: rashiHref(data.ascendant_sign),
      linkLabel: copy.readAbout(lagnaName),
    },
    {
      key: "moon",
      label: `${t.ui.summaryMoonSign} · ${t.ui.nakshatraLabel}`,
      value: nakName,
      sub: moon ? `${tr(t.signs, moon.sign)} · ${t.ui.pada} ${moon.nakshatra_pada}` : undefined,
      teaser: copy.moonTeaser(nakName),
      href: moon ? nakshatraHref(moon.nakshatra) : "/nakshatras",
      linkLabel: copy.readAbout(nakName),
      accent: true,
    },
    {
      key: "sun",
      label: t.ui.summarySunSign,
      value: sun ? (tr(t.signs, sun.sign)) : "—",
      teaser: copy.sunTeaser,
      href: sun ? rashiHref(sun.sign) : "/rashis",
      linkLabel: copy.readAbout(sun ? (tr(t.signs, sun.sign)) : ""),
    },
    {
      key: "dasha",
      label: t.ui.summaryCurrentDasha,
      value: dasha ? (tr(t.planets, dasha.lord)) : "—",
      teaser: dasha
        ? copy.dashaTeaser(tr(t.planets, dasha.lord), formatDashaDisplayDate(dasha.end_date, language))
        : "",
      href: dasha ? grahaHref(dasha.lord) : "/grahas",
      linkLabel: copy.readAbout(dasha ? (tr(t.planets, dasha.lord)) : ""),
    },
  ];

  const cardBase =
    "washi-card w-[84vw] max-w-[380px] p-6 sm:w-[60vw] lg:w-auto lg:max-w-none lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:px-0 lg:py-6";

  return (
    <section
      id="your-chart"
      aria-labelledby="story-title"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-14 md:px-8 md:py-20"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="story-title" className="ma-title">
            {copy.storyTitle(subject?.name ?? null)}
          </h2>
          {subject?.place && <p className="mt-2 text-sm text-text-muted">{copy.storyFor(subject.place)}</p>}
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={share} className="washi-btn-secondary gap-2 px-4 text-sm">
            <Share2 size={15} aria-hidden />
            {copy.share}
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              document.getElementById("start")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex min-h-[44px] items-center gap-1.5 px-3 text-sm text-text-muted transition-colors hover:text-ink"
          >
            <RotateCcw size={14} aria-hidden />
            <span className="hidden sm:inline">{copy.changeDetails}</span>
          </button>
        </div>
      </div>

      <div
        ref={rail}
        className="snap-rail pb-2 lg:mx-0 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-x-14 lg:overflow-visible lg:px-0 lg:pb-0"
        aria-roledescription="carousel"
      >
        {/* 1 — the chart, drawing itself. Sticky beside the readings on desktop. */}
        <article
          data-story-card
          aria-label={t.tabTitles.D1}
          className="washi-card w-[84vw] max-w-[380px] p-3 sm:w-[60vw] lg:row-span-5 lg:sticky lg:top-24 lg:w-auto lg:max-w-none lg:self-start lg:p-6"
        >
          <ChartFigure data={data} view="lagna" t={t} lang={language} chartStyle="North" useSymbols={false} showHeading={false} />
        </article>

        {insights.map((item) => (
          <article key={item.key} data-story-card className={`${cardBase} flex flex-col`}>
            <p className="text-xs tracking-[0.08em] text-text-muted">{item.label}</p>
            <p className={`mt-2 font-header text-[length:var(--step-3)] leading-tight ${item.accent ? "text-terracotta" : "text-ink"}`}>
              {item.value}
            </p>
            {item.sub && <p className="mt-1 text-sm text-text-muted">{item.sub}</p>}
            {item.teaser && <p className="mt-4 text-[length:var(--step-0)] leading-[1.8] text-text">{item.teaser}</p>}
            <Link href={item.href} className="washi-btn-tertiary mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-4 text-sm">
              {item.linkLabel}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </article>
        ))}

        {/* 6 — what next. Each step is a different depth of the same chart. */}
        <article data-story-card className={`${cardBase} lg:border-b-0`}>
          <p className="text-xs tracking-[0.08em] text-text-muted">{copy.nextStepsTitle}</p>
          <ul className="mt-3 divide-y divide-border">
            {[
              { href: "/tools/nakshatra-finder", label: `${copy.relatedTool}: ${t.ui.nakshatraLabel}` },
              { href: "/tools/dasha-calculator", label: `${copy.relatedTool}: ${t.ui.summaryCurrentDasha}` },
              { href: "/personal-appraisals", label: welcomeText(welcomeContent.ctaSecondary, language) },
            ].map((step) => (
              <li key={step.href}>
                <Link href={step.href} className="flex min-h-[48px] items-center justify-between gap-3 py-2 text-sm text-ink transition-colors hover:text-moss">
                  {step.label}
                  <ArrowRight size={14} aria-hidden className="shrink-0 text-text-muted" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setReportOpen((v) => !v)}
            aria-expanded={reportOpen}
            aria-controls="full-report"
            className="washi-btn-primary mt-5 w-full gap-2 px-5 text-sm"
          >
            {reportOpen ? copy.closeFullReport : copy.openFullReport}
            <ChevronDown size={15} aria-hidden className={`transition-transform duration-200 ${reportOpen ? "rotate-180" : ""}`} />
          </button>
        </article>
      </div>

      {/* Phone: where am I in the story, and buttons for anyone who doesn't swipe. */}
      <div className="mt-4 flex items-center justify-between lg:hidden">
        <button
          type="button"
          onClick={() => goTo(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label={copy.previous}
          className="tactile inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink disabled:opacity-30"
        >
          <ArrowLeft size={16} aria-hidden />
        </button>
        <div className="flex items-center gap-1.5" aria-live="polite">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              aria-hidden
              className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${i === active ? "w-5 bg-ink" : "w-1.5 bg-border"}`}
            />
          ))}
          <span className="sr-only">{copy.stepOf(active + 1, total)}</span>
        </div>
        <button
          type="button"
          onClick={() => goTo(Math.min(total - 1, active + 1))}
          disabled={active === total - 1}
          aria-label={copy.next}
          className="tactile inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink disabled:opacity-30"
        >
          <ArrowRight size={16} aria-hidden />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {reportOpen && (
          <m.div
            id="full-report"
            key="report"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
            className="mt-12"
          >
            <div className="washi-card p-5 md:p-10">
              <VerticalChartReport />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
