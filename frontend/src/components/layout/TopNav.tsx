"use client";

import { useRef } from "react";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "@/components/i18n/LocaleLink";
import { SignedIn, SignedOut, UserMenu } from "@/components/auth/AuthProvider";
import { getMainNavItems } from "@/lib/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";
import { useHaptic } from "@/hooks/useHaptic";
import { usePendingNav } from "@/lib/nav/pending-nav";
import { useNavIndicator } from "@/lib/nav/use-nav-indicator";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/chart") {
    return pathname === "/chart" || pathname.startsWith("/chart/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function TopNav() {
  const pathname = useBarePathname();
  const { language } = useLanguage();
  const copy = getSharedCopy(language);
  const mainNavItems = getMainNavItems(language);
  const { selection } = useHaptic();
  // The clicked item is active immediately; its underline glides over.
  const shownPath = usePendingNav() ?? pathname;
  const navRef = useRef<HTMLElement>(null);
  useNavIndicator("shell-nav", navRef, mainNavItems.find((item) => isActive(shownPath, item.match ?? item.href))?.href ?? null, "after");

  return (
    <nav ref={navRef} className="desktop-topnav min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto border-b border-transparent">
      {mainNavItems.map((item) => {
        const active = isActive(shownPath, item.match ?? item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.description}
            data-active={active}
            onClick={() => selection()}
            className={`nav-link-underline tactile relative flex items-center gap-1.5 px-2.5 py-2.5 text-sm font-body font-medium whitespace-nowrap ${
              active
                ? "text-ink border-b-2 border-terracotta"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Icon
              size={14}
              className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active ? "text-terracotta" : "group-hover:scale-105"
              }`}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <div className="ml-2 flex items-center gap-2 border-l border-border pl-2">
        <ThemeToggle />
        <SignedIn>
          <UserMenu
            avatarClassName="h-8 w-8 bg-terracotta text-washi transition-shadow duration-300 hover:shadow-[var(--shadow-glow-terracotta)]"
            popoverClassName="border border-border shadow-[var(--shadow-lift)]"
          />
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-in"
            onClick={() => selection()}
            className="tactile px-2.5 py-2 text-sm font-body font-medium text-text-muted hover:text-text"
          >
            {copy.chrome.signIn}
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
