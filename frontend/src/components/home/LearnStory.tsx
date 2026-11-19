"use client";

import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { nakshatraHref, tr } from "@/lib/sky/entity-links";
import { useGsapEffect, DESKTOP, MOTION_OK } from "@/lib/motion/gsap";

const STEPS = [
  { id: "rashi", href: "/rashis" },
  { id: "nakshatra", href: "/nakshatras" },
  { id: "graha", href: "/grahas" },
] as const;

const C = 200;
const at = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  // Rounded so server and client agree to the digit (hydration).
  return { x: Math.round((C - r * Math.cos(a)) * 100) / 100, y: Math.round((C + r * Math.sin(a)) * 100) / 100 };
};
const GRAHAS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

/**
 * Screen four: learning, as a scroll story (signature moment #3).
 *
 * Desktop: the wheel on the left is held in place while three short ideas
 * scroll past on the right; scroll position scrubs the wheel from twelve
 * signs, to twenty-seven mansions, to nine grahas — and back, because it is
 * scrubbed, not triggered. Phone: no pinning (it fights thumb scrolling);
 * the three ideas are plain short chunks, followed by a swipeable rail of
 * all 27 nakshatras. Reduced motion: every layer simply visible.
 */
export default function LearnStory() {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const t = chartFormCopy[language];
  const root = useRef<HTMLElement>(null);

  useGsapEffect(
    root,
    ({ gsap, ScrollTrigger }) => {
      // ScrollTrigger is only fetched on desktop; phones never load it.
      if (!ScrollTrigger) return;
      const mm = gsap.matchMedia();
      mm.add(`${DESKTOP} and ${MOTION_OK}`, () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: "[data-learn-steps]",
            start: "top 60%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        });
        tl.set("[data-layer='nakshatra'], [data-layer='graha']", { opacity: 0 })
          .fromTo("[data-layer='rashi']", { opacity: 1 }, { opacity: 0.25, duration: 1 }, 0.9)
          .fromTo("[data-layer='nakshatra']", { opacity: 0, scale: 0.94, svgOrigin: "200 200" }, { opacity: 1, scale: 1, svgOrigin: "200 200", duration: 1 }, 0.9)
          .to("[data-layer='nakshatra']", { opacity: 0.3, duration: 1 }, 2.2)
          .fromTo("[data-layer='graha']", { opacity: 0, rotation: -40, svgOrigin: "200 200" }, { opacity: 1, rotation: 0, svgOrigin: "200 200", duration: 1 }, 2.2);

        // The active step's text brightens; the others recede — but only to
        // 0.7, which keeps every step above WCAG AA contrast while dimmed.
        gsap.utils.toArray<HTMLElement>("[data-learn-step]").forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0.7 },
            {
              opacity: 1,
              scrollTrigger: { trigger: step, start: "top 70%", end: "top 40%", scrub: true },
            },
          );
        });
        return () => ScrollTrigger.refresh();
      });
      return () => mm.revert();
    },
    [],
    { withScrollTrigger: `${DESKTOP} and ${MOTION_OK}` },
  );

  return (
    <section ref={root} aria-labelledby="learn-title" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-24">
      <div className="max-w-2xl">
        <h2 id="learn-title" className="ma-title">
          {copy.learnTitle}
        </h2>
        <p className="mt-3 text-sm leading-[1.8] text-text-muted">{copy.learnLead}</p>
      </div>

      <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        {/* The wheel: held on desktop, absent on phone. */}
        <div className="hidden lg:block">
          <div className="sticky top-[18vh]">
            <svg viewBox="0 0 400 400" className="mx-auto block h-auto w-full max-w-[440px]" aria-hidden>
              <circle cx={C} cy={C} r={180} fill="none" stroke="var(--color-ink)" strokeOpacity={0.4} />
              <g data-layer="rashi" stroke="var(--color-ink)" strokeOpacity={0.45}>
                <circle cx={C} cy={C} r={120} fill="none" />
                {Array.from({ length: 12 }, (_, i) => {
                  const a = at(i * 30, 120);
                  const b = at(i * 30, 180);
                  return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
                })}
              </g>
              <g data-layer="nakshatra" stroke="var(--color-moss)" strokeWidth={1.5}>
                {Array.from({ length: 27 }, (_, i) => {
                  const a = at(i * (360 / 27), 150);
                  const b = at(i * (360 / 27), 180);
                  return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
                })}
              </g>
              <g data-layer="graha">
                {GRAHAS.map((g, i) => {
                  const p = at(i * 40 + 20, 84);
                  return (
                    <g key={g}>
                      <circle cx={p.x} cy={p.y} r={g === "Moon" ? 7 : 5} fill={g === "Moon" ? "var(--color-terracotta)" : "var(--color-ink)"} />
                      <text x={p.x} y={p.y + 22} textAnchor="middle" fontSize={11} fill="var(--color-text-muted)" style={{ fontFamily: "var(--font-body)" }}>
                        {tr(t.planets, g)}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <ol data-learn-steps className="snap-rail pb-1 lg:mx-0 lg:block lg:overflow-visible lg:px-0">
          {STEPS.map((step) => {
            const s = copy.learnSteps[step.id];
            return (
              <li
                key={step.id}
                data-learn-step
                className="washi-card flex w-[78vw] max-w-[340px] flex-col p-6 lg:w-auto lg:max-w-none lg:min-h-[52vh] lg:justify-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
              >
                <h3 className="font-header text-[length:var(--step-2)] text-ink lg:text-[length:var(--step-3)]">{s.title}</h3>
                <p className="mt-3 max-w-[30em] leading-[1.8] text-text">{s.body}</p>
                <Link href={step.href} className="washi-btn-tertiary mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-4 text-sm lg:mt-4 lg:pt-0">
                  {s.cta}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Phone: browse the 27 mansions with a thumb. */}
      <ul className="snap-rail mt-8 pb-1 lg:hidden" aria-label={copy.learnSteps.nakshatra.title}>
        {NAKSHATRAS.map((n) => (
          <li key={n.name}>
            <Link
              href={nakshatraHref(n.name)}
              className="washi-card flex h-[92px] w-[132px] flex-col justify-between p-3"
            >
              <span className="text-xs tabular text-text-muted">{n.number}</span>
              <span className="font-header text-[15px] leading-tight text-ink">{tr(t.nakshatras, n.name)}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-4">
        <Link href="/course" className="washi-btn-secondary gap-2 px-5 text-sm">
          {copy.learnCourse}
          <ArrowRight size={14} aria-hidden />
        </Link>
        <Link href="/learn-jyotish" className="washi-btn-secondary gap-2 px-5 text-sm">
          {copy.learnArticles}
        </Link>
      </div>

      {/* The site introduction stays on the page (and in the HTML), folded. */}
      <details className="disclose mt-10 border-t border-border pt-2">
        <summary className="text-sm text-ink">
          {copy.aboutTitle}
          <ChevronDown size={16} aria-hidden className="disclose-chevron text-text-muted" />
        </summary>
        <div className="washi-measure space-y-4 pb-4 pt-2 text-sm leading-[1.9] text-text-muted">
          {welcomeContent.intro.map((paragraph) => (
            <p key={paragraph.en}>{welcomeText(paragraph, language)}</p>
          ))}
          <p className="font-header text-[length:var(--step-1)] text-ink">{welcomeText(welcomeContent.pullQuote, language)}</p>
        </div>
      </details>
    </section>
  );
}
