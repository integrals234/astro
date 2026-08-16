"use client";

import Link from "@/components/i18n/LocaleLink";
import {
  Compass,
  Heart,
  Moon,
  Orbit,
  ScrollText,
  Sparkles,
  Telescope,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { trackEvent } from "@/lib/analytics/events";
import { TOOL_LANDINGS } from "@/lib/tools/landing-content";
import { homeToolsCopy } from "@/lib/home/tools-copy";

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
 */
const ICONS: Record<string, LucideIcon> = {
  "free-horoscope": Sparkles,
  "birth-chart": ScrollText,
  "dasha-calculator": Orbit,
  "nakshatra-finder": Moon,
  sukuyo: Compass,
  compatibility: Heart,
  "moon-sign": Waves,
  "transit-now": Telescope,
};

export default function HomeToolGrid() {
  const { language } = useLanguage();
  const { primary, isLoaded } = useBirthProfile();
  const copy = homeToolsCopy[language];

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
          return (
            <li key={tool.slug}>
              <Link
                href={`/tools/${tool.slug}`}
                onClick={() =>
                  trackEvent("tool_opened", { slug: tool.slug, locale: language })
                }
                className="washi-card washi-card-interactive group flex h-full items-start gap-3 p-4 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="washi-icon-chip mt-0.5 h-9 w-9 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={16} className="text-moss" />
                </span>
                <span className="min-w-0">
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
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
