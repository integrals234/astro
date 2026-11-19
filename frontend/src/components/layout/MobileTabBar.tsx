"use client";

import { BookOpen, Home, LayoutGrid, MoonStar, Sparkles, type LucideIcon } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { homeStoryCopy } from "@/lib/home/home-story-copy";

const TABS: { key: "home" | "chart" | "tools" | "learn" | "reading"; href: string; icon: LucideIcon; match: string[] }[] = [
  { key: "home", href: "/", icon: Home, match: [] },
  { key: "chart", href: "/chart", icon: Sparkles, match: ["/chart"] },
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

  const isActive = (tab: (typeof TABS)[number]) =>
    tab.match.length === 0 ? pathname === "/" : tab.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));

  return (
    <nav
      aria-label={copy.tabsAria}
      className={`tabbar fixed inset-x-0 bottom-0 z-50 border-t border-border bg-washi/95 pb-[env(safe-area-inset-bottom)] backdrop-blur ${breakpoint === "lg" ? "tabbar-lg lg:hidden" : "md:hidden"}`}
    >
      <ul className="mx-auto grid h-[60px] max-w-md grid-cols-5">
        {TABS.map((tab) => {
          const active = isActive(tab);
          const Icon = tab.icon;
          return (
            <li key={tab.key}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`flex h-full flex-col items-center justify-center gap-1 text-[10.5px] transition-colors duration-150 active:scale-95 ${
                  active ? "text-ink" : "text-text-muted"
                }`}
              >
                <span className="relative">
                  <Icon size={20} strokeWidth={active ? 2 : 1.6} aria-hidden />
                  {tab.key === "chart" && (
                    <span className="absolute -right-1 -top-0.5 h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
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
