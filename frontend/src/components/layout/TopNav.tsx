"use client";

import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "@/components/i18n/LocaleLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { getMainNavItems } from "@/lib/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";
import { useHaptic } from "@/hooks/useHaptic";

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

  return (
    <nav className="desktop-topnav min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto border-b border-transparent">
      {mainNavItems.map((item) => {
        const active = isActive(pathname, item.href);
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
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8 bg-terracotta text-washi transition-shadow duration-300 hover:shadow-[var(--shadow-glow-terracotta)]",
                userButtonPopoverCard: "border border-border shadow-[var(--shadow-lift)]",
              },
            }}
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
