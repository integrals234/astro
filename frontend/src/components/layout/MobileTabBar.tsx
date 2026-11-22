"use client";

import { useRef } from "react";
import { CalendarDays, BookOpen, Home, LayoutGrid, MoonStar, Sparkles, type LucideIcon } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { usePendingNav } from "@/lib/nav/pending-nav";
import { useNavIndicator } from "@/lib/nav/use-nav-indicator";

const TABS: { key: "home" | "chart" | "today" | "tools" | "learn" | "reading"; href: string; icon: LucideIcon; match: string[] }[] = [
  { key: "home", href: "/", icon: Home, match: [] },
  { key: "chart", href: "/chart", icon: Sparkles, match: ["/chart"] },
  // The daily page is the most-visited: one tap from anywhere on a phone.
  { key: "today", href: "/horoscope/today", icon: CalendarDays, match: ["/horoscope"] },
  { key: "tools", href: "/tools", icon: LayoutGrid, match: ["/tools"] },
  { key: "learn", href: "/learn-jyotish", icon: BookOpen, match: ["/learn-jyotish", "/nakshatras", "/rashis", "/grahas", "/course"] },
  { key: "reading", href: "/personal-appraisals", icon: MoonStar, match: ["/personal-appraisals", "/book"] },
];

/**
 * Phone navigation, in the thumb zone.
 *
 * The header drawer stays for everything else (horoscope, settings,
 * language, theme), but the five places people actually go are one tap away
 * at the bottom of the screen. 60 px tall plus the home-indicator inset;
 * the `.tabbar` class is what the layout CSS keys off to pad the page and
 * lift fixed UI (the sticky CTA) above it. Public pages keep it through
 * tablet widths (the full header needs 1024 px); AppShell, whose TopNav
 * fits from 768 px, passes breakpoint="md".
 */
export default function MobileTabBar({ breakpoint = "lg" }: { breakpoint?: "md" | "lg" }) {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const pathname = useBarePathname();
  // The tapped tab is active the moment it is tapped, not when its page lands.
  const shownPath = usePendingNav() ?? pathname;
  const navRef = useRef<HTMLElement>(null);

  const matches = (tab: (typeof TABS)[number], path: string) =>
    tab.match.length === 0 ? path === "/" : tab.match.some((m) => path === m || path.startsWith(`${m}/`));
  const isActive = (tab: (typeof TABS)[number]) => matches(tab, shownPath);
  const activeIndex = TABS.findIndex(isActive);
  const currentIndex = TABS.findIndex((tab) => matches(tab, pathname));
  useNavIndicator("tabbar", navRef, activeIndex >= 0 ? TABS[activeIndex].key : null, "child");

  return (
    <nav
      ref={navRef}
      aria-label={copy.tabsAria}
      className={`tabbar fixed inset-x-0 bottom-0 z-50 border-t border-border bg-washi/95 pb-[env(safe-area-inset-bottom)] backdrop-blur ${breakpoint === "lg" ? "tabbar-lg lg:hidden" : "md:hidden"}`}
    >
      <ul className="mx-auto grid h-[60px] max-w-md grid-cols-6">
        {TABS.map((tab, index) => {
          const active = isActive(tab);
          const Icon = tab.icon;
          return (
            <li key={tab.key}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                data-active={active}
                // The new page slides in from the side this tab is on.
                data-nav-dir={currentIndex < 0 || index === currentIndex ? "none" : index > currentIndex ? "forward" : "back"}
                className={`flex h-full flex-col items-center justify-center gap-1 text-[10.5px] transition-[color,scale] duration-150 active:scale-95 ${
                  active ? "text-ink" : "text-text-muted"
                }`}
              >
                <span className="relative flex h-7 w-12 items-center justify-center">
                  {active && (
                    <span data-indicator className="absolute inset-0 rounded-full bg-terracotta/12" aria-hidden />
                  )}
                  <Icon size={20} strokeWidth={active ? 2 : 1.6} className="relative" aria-hidden />
                  {tab.key === "chart" && (
                    <span className="absolute right-2.5 top-0.5 h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
                  )}
                </span>
                {copy.tabs[tab.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
