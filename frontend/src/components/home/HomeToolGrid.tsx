"use client";

import { useState } from "react";
import Link from "@/components/i18n/LocaleLink";
import {
  ChevronDown,
  Compass,
  Flame,
  Heart,
  Moon,
  Orbit,
  ScrollText,
  Sparkles,
  Telescope,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
import ChartSectionBody from "@/components/chart/ChartSectionBody";
import SukuyoResult from "@/components/tools/SukuyoResult";
import CompatibilityResult from "@/components/tools/CompatibilityResult";
import { trackEvent } from "@/lib/analytics/events";
import { TOOL_LANDINGS } from "@/lib/tools/landing-content";
import { homeToolsCopy } from "@/lib/home/tools-copy";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { springDrawer } from "@/lib/motion/tokens";

/**
 * The free tools, surfaced on the homepage.
 *
 * Competitors put dozens of calculators one tap from the homepage, and that
 * density is genuinely why people stay and come back — a visitor who only sees
 * a single chart form has one thing to do and one reason to leave.
 *
 * The difference here is the personalisation line: once a birth profile exists,
 * this says so, because "every one of these already knows your details" is the
 * part a grid of twenty separate forms cannot claim.
 *
 * Each card carries two lines, not one: what the tool is (`description`) and
 * when to actually use it (`useCase`). A feature list ("draws your kundli")
 * does not give anyone a reason to click; "check before scheduling anything
 * important" does.
 *
 * Once a chart exists (via the report above, sharing `ChartDataProvider`), a
 * card with sections or a dedicated result panel expands in place instead of
 * navigating away — reusing the already-computed chart, not firing its own
 * compute. The full `/tools/[slug]` page stays linked from inside the
 * expanded panel rather than duplicated: that page carries the long-form
 * copy and FAQ schema this grid shouldn't repeat eight times over.
 */
const ICONS: Record<string, LucideIcon> = {
  "birth-chart": ScrollText,
  "dasha-calculator": Orbit,
  "nakshatra-finder": Moon,
  "mangal-dosha": Flame,
  sukuyo: Compass,
  compatibility: Heart,
  "moon-sign": Waves,
  "transit-now": Telescope,
};

export default function HomeToolGrid() {
  const { language } = useLanguage();
  const { primary, isLoaded } = useBirthProfile();
  const { data: chartData } = useChartData();
  const copy = homeToolsCopy[language];
  const t: ChartTranslations = chartFormCopy[language];
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section aria-labelledby="home-tools" className="mt-16">
      <p className="washi-eyebrow mb-2">{copy.eyebrow}</p>
      <h2
        id="home-tools"
        className="font-body text-2xl text-ink"
      >
        {copy.heading}
      </h2>
      <p className="washi-measure mt-2 text-sm leading-relaxed text-text-muted">
        {/*
          Only claimed once a profile actually exists — promising "no re-entry"
          to someone who has entered nothing reads as noise.
        */}
        {isLoaded && primary ? copy.personalised(primary.label) : copy.intro}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TOOL_LANDINGS.map((tool) => {
          const Icon = ICONS[tool.slug] ?? Sparkles;
          const expandable = Boolean(chartData) && Boolean(tool.sections || tool.resultPanel);
          const isOpen = openSlug === tool.slug;

          const cardInner = (
            <>
              <span className="washi-icon-chip mt-0.5 h-9 w-9 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-3">
                <Icon size={16} className="text-moss" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-body text-sm font-medium text-ink">
                  {tool.title[language]}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-text-muted">
                  {tool.description[language]}
                </span>
                <span className="mt-1.5 block text-xs italic leading-relaxed text-terracotta">
                  {tool.useCase[language]}
                </span>
              </span>
              {expandable && (
                <ChevronDown
                  size={16}
                  className={`mt-1 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              )}
            </>
          );

          return (
            <li key={tool.slug}>
              <div className="washi-card washi-card-interactive group flex h-full flex-col transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                {expandable ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenSlug(isOpen ? null : tool.slug);
                      trackEvent("tool_opened", { slug: tool.slug, locale: language });
                    }}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-3 p-4 text-left"
                  >
                    {cardInner}
                  </button>
                ) : (
                  <Link
                    href={`/tools/${tool.slug}`}
                    onClick={() =>
                      trackEvent("tool_opened", { slug: tool.slug, locale: language })
                    }
                    className="flex h-full items-start gap-3 p-4"
                  >
                    {cardInner}
                  </Link>
                )}

                <AnimatePresence initial={false}>
                  {expandable && isOpen && chartData && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={springDrawer}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 border-t border-border p-4">
                        {tool.resultPanel === "sukuyo" && <SukuyoResult />}
                        {tool.resultPanel === "compatibility" && <CompatibilityResult />}
                        {tool.sections?.map((id) => (
                          <ChartSectionBody key={id} id={id} data={chartData} t={t} lang={language} />
                        ))}
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="washi-btn-secondary inline-block text-xs"
                        >
                          {t.ui.readFullExplanation}
                        </Link>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
