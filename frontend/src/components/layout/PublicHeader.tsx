"use client";

import { useRef, useState } from "react";
import { SignedIn, SignedOut, UserMenu } from "@/components/auth/AuthProvider";
import { ChevronDown, Languages, Settings } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
import MobileNav from "@/components/layout/MobileNav";
import MobileTabBar from "@/components/layout/MobileTabBar";
import SiteBrand from "@/components/layout/SiteBrand";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { getMainNavItems } from "@/lib/navigation";
import { getSharedCopy } from "@/lib/i18n/shared";
import { uiText } from "@/lib/education/i18n/ui";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { usePendingNav } from "@/lib/nav/pending-nav";
import { useNavIndicator } from "@/lib/nav/use-nav-indicator";

/**
 * The one public header (Phase 2.4).
 *
 * `PublicWelcomeHeader`, `PublicHeader` (EducationalHub), `PublicHoroscopeHeader`
 * and `PublicChartAuthBar` were four near-identical copies. Every header change
 * was a four-file edit — and Phase 1.3 needed to add a theme toggle to all of
 * them, which is what finally made the duplication expensive.
 *
 * It carries the full main nav and the mobile drawer, because the public
 * content pages now use this header in *both* auth states rather than swapping
 * to `AppShell` when signed in. That swap is what used to wrap those pages in
 * `<SignedIn>`/`<SignedOut>`, which forces a bailout to client-side rendering
 * during static prerender — so the homepage and the learn hub shipped an empty
 * shell to crawlers. `AppShell` still owns the account routes under `(shell)` (dashboard, settings, saved/recent charts, premium).
 *
 * The brandbar is the reference's device: a slim ink strip above the nav that
 * gives the header a top edge and reads as a masthead. The ॐ mark is drawn
 * inline rather than pulling a whole font (the reference loads Yatra One for
 * that single glyph).
 */
/** Which nav items survive narrower desktop widths: the four core places
 * always; horoscope from 1024 px; the course from 1280 px (it is also in the
 * drawer, footer and the learn section). */
const NAV_PRIORITY: Record<string, string> = {
  "/horoscope": "hidden xl:inline-flex",
  "/course": "hidden 2xl:inline-flex",
};

export default function PublicHeader({
  pageLabel,
  showChartCta = true,
  maxWidth = "max-w-7xl",
}: {
  /** Small uppercase label under the brand on mobile. */
  pageLabel?: string;
  showChartCta?: boolean;
  maxWidth?: string;
}) {
  const { language } = useLanguage();
  const pathname = useBarePathname();
  const copy = getSharedCopy(language);
  const [mobileOpen, setMobileOpen] = useState(false);

  // "Home" is the brand mark's job; "Tools" is the hub added in the
  // design upgrade. Settings: the gear beside the avatar (signed in), the drawer, and /settings.
  const mainItems = getMainNavItems(language).filter(
    (item) => item.href !== "/settings" && item.href !== "/",
  );
  const chartIndex = mainItems.findIndex((item) => item.href === "/chart");
  const navItems = [
    ...mainItems.slice(0, chartIndex + 1),
    { href: "/tools", label: homeStoryCopy[language].tabs.tools, description: undefined as string | undefined },
    ...mainItems.slice(chartIndex + 1),
  ];

  // The clicked item is active immediately; its underline glides over.
  const shownPath = usePendingNav() ?? pathname;
  const isActive = (href: string) =>
    href === "/" ? shownPath === "/" : shownPath.startsWith(href);
  const navRef = useRef<HTMLElement>(null);
  useNavIndicator("public-nav", navRef, navItems.find((item) => isActive(item.href))?.href ?? null, "after");

  return (
    <>
    <header className="relative z-40 border-b border-border bg-washi/85 backdrop-blur-md lg:sticky lg:top-0">
      <div
        className="mx-auto hidden w-full max-w-7xl items-center justify-between gap-6 px-8 py-3 lg:flex"
      >
        <SiteBrand size="lg" className="shrink-0" />

        <nav
          ref={navRef}
          aria-label={copy.chrome.openNavigation}
          className="flex min-w-0 flex-1 items-center justify-center gap-0.5"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              title={item.description}
              data-active={isActive(item.href)}
              className={`nav-link-underline whitespace-nowrap px-2.5 py-2 text-[13px] transition-colors ${NAV_PRIORITY[item.href] ?? ""} ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          {/* Language: a small menu, but the four links stay real <a>s in
              the HTML — sitewide crawlable cross-locale links (Phase 3.2). */}
          <details className="group relative">
            <summary className="flex min-h-[40px] cursor-pointer list-none items-center gap-1 rounded-full px-2.5 text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
              <Languages size={15} aria-hidden />
              {language}
              <ChevronDown size={12} aria-hidden className="transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 rounded-[12px] border border-border bg-washi-elevated p-2">
              <PublicLanguageLink className="font-body flex items-center gap-1.5 px-1.5 py-1 text-xs text-text-muted" />
            </div>
          </details>
          <ThemeToggle />
          <SignedOut>
            <Link href="/sign-in" className="px-2 text-xs text-text-muted transition-colors hover:text-ink">
              {copy.chrome.signIn}
            </Link>
          </SignedOut>
          <SignedIn>
            {/* Site settings (language, appearance, account) — Clerk's own
                menu only manages the Clerk profile. */}
            <Link
              href="/settings"
              aria-label={copy.navigation.settings}
              title={copy.navigation.settings}
              aria-current={isActive("/settings") ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-neutral-tag hover:text-ink ${isActive("/settings") ? "text-ink" : "text-text-muted"}`}
            >
              <Settings size={17} aria-hidden />
            </Link>
            <UserMenu avatarClassName="h-7 w-7" />
          </SignedIn>
          {showChartCta && (
            <Link
              href="/chart"
              className="washi-btn-primary min-h-[38px] px-4 text-xs"
            >
              {uiText("generateChart", language)}
            </Link>
          )}
        </div>
      </div>

      <div
        className={`mx-auto flex w-full ${maxWidth} items-center gap-2 px-4 py-3 lg:hidden`}
      >
        {/*
         * Three controls, not five. The theme toggle is a 3-button segmented
         * control and the language switcher is four links — side by side on
         * the right they overran a 390px viewport and collided with the
         * brand. Both now live in the drawer, which has room for them.
         */}
        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} breakpoint="lg" />

        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 overflow-hidden text-center">
          <SiteBrand size="sm" className="max-w-full shrink-0" />
          {pageLabel && (
            <p className="washi-eyebrow-muted w-full truncate text-[10px] tracking-[0.2em]">
              {pageLabel}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center">
          <SignedOut>
            <Link href="/sign-in" className="inline-flex min-h-[44px] items-center px-1 text-[12px] text-text-muted">
              {copy.chrome.signIn}
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/settings"
              aria-label={copy.navigation.settings}
              className="flex h-11 w-11 items-center justify-center rounded-full text-text-muted"
            >
              <Settings size={18} aria-hidden />
            </Link>
            <UserMenu avatarClassName="h-7 w-7" />
          </SignedIn>
        </div>
      </div>
    </header>
    <MobileTabBar breakpoint="lg" />
    </>
  );
}
