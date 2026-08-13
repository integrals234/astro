"use client";

import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
import MobileNav from "@/components/layout/MobileNav";
import SiteBrand from "@/components/layout/SiteBrand";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { getMainNavItems } from "@/lib/navigation";
import { getSharedCopy } from "@/lib/i18n/shared";
import { uiText } from "@/lib/education/i18n/ui";

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
 * shell to crawlers. `AppShell` still owns the app-like routes under `(shell)`.
 *
 * The brandbar is the reference's device: a slim ink strip above the nav that
 * gives the header a top edge and reads as a masthead. The ॐ mark is drawn
 * inline rather than pulling a whole font (the reference loads Yatra One for
 * that single glyph).
 */
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

  const navItems = getMainNavItems(language).filter(
    (item) => item.href !== "/settings",
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-border bg-washi/80 backdrop-blur-md">
      <div className="washi-inverted flex h-6 items-center justify-center gap-2">
        <span aria-hidden className="text-gold" style={{ fontSize: 11 }}>
          ॐ
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] opacity-70">
          {copy.metadata.title}
        </span>
      </div>

      <div
        className={`shell-header-desktop mx-auto w-full ${maxWidth} items-center justify-between gap-6 px-8 py-3.5`}
      >
        <SiteBrand size="lg" className="shrink-0" />

        <nav
          aria-label={copy.chrome.openNavigation}
          className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              title={item.description}
              data-active={isActive(item.href)}
              className={`nav-link-underline tactile whitespace-nowrap px-2.5 py-2 text-sm font-medium ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <PublicLanguageLink className="font-body inline-flex items-center gap-1.5 px-1.5 py-2 text-xs font-medium text-text-muted transition-colors hover:text-text" />
          <ThemeToggle />
          {showChartCta && (
            <Link
              href="/chart"
              className="washi-btn-secondary gap-1.5 px-3 py-2 text-xs"
            >
              <Sparkles size={14} aria-hidden />
              {uiText("generateChart", language)}
            </Link>
          )}
          <SignedOut>
            <Link href="/sign-in" className="washi-btn-tertiary text-xs">
              {copy.chrome.signIn}
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      <div
        className={`shell-header-mobile mx-auto w-full ${maxWidth} items-center gap-2 px-4 py-3`}
      >
        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />

        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center">
          <SiteBrand size="sm" className="shrink-0" />
          {pageLabel && (
            <p className="washi-eyebrow-muted text-[10px] tracking-[0.2em]">
              {pageLabel}
            </p>
          )}
        </div>

        <ThemeToggle iconOnly />
        <PublicLanguageLink
          iconOnly
          className="inline-flex h-9 shrink-0 items-center justify-center gap-1 rounded-md border border-border bg-washi-elevated px-1.5 text-[10px] text-text transition-colors hover:text-terracotta"
        />
      </div>
    </header>
  );
}
