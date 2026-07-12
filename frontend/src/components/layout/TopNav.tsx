"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { getMainNavItems } from "@/lib/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/chart") {
    return pathname === "/chart" || pathname.startsWith("/chart/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function TopNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const copy = getSharedCopy(language);
  const mainNavItems = getMainNavItems(language);

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
            className={`relative flex items-center gap-1.5 px-2.5 py-2.5 text-sm font-body font-medium whitespace-nowrap transition-colors ${
              active
                ? "text-ink border-b-2 border-terracotta"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Icon size={14} className="shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <div className="ml-2 flex items-center border-l border-border pl-2">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8 bg-terracotta text-washi",
                userButtonPopoverCard: "border border-border shadow-[0_1px_3px_rgba(47,47,47,0.06)]",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link
            href="/sign-in"
            className="px-2.5 py-2 text-sm font-body font-medium text-text-muted transition-colors hover:text-text"
          >
            {copy.chrome.signIn}
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
