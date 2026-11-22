"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { nakshatraHref, tr } from "@/lib/sky/entity-links";

const STEPS = [
  { id: "rashi", href: "/rashis" },
  { id: "nakshatra", href: "/nakshatras" },
  { id: "graha", href: "/grahas" },
] as const;

/**
 * After the journey: where to go next. The three ideas themselves are
 * chapters of the scroll journey (rashi, nakshatra, graha); this keeps the
 * section's heading, a link to each idea's index, the course and articles,
 * the 27 nakshatras as a rail on phones, and the folded site introduction.
 */
export default function LearnStory() {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const t = chartFormCopy[language];

  return (
    <section aria-labelledby="learn-title" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-24">
      <div className="max-w-2xl">
        <h2 id="learn-title" className="ma-title">
          {copy.learnTitle}
        </h2>
        <p className="mt-3 text-sm leading-[1.8] text-text-muted">{copy.learnLead}</p>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {STEPS.map((step) => {
          const s = copy.learnSteps[step.id];
          return (
            <li key={step.id}>
              <Link href={step.href} className="washi-card washi-card-interactive group flex h-full flex-col p-5">
                <span className="font-header text-[length:var(--step-1)] text-ink">{s.title}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-terracotta">
                  {s.cta}
                  <ArrowRight size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

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
