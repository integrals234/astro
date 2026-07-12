"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { getMainNavItems } from "@/lib/navigation";
import SiteBrand from "@/components/layout/SiteBrand";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/chart") {
    return pathname === "/chart" || pathname.startsWith("/chart/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const copy = getSharedCopy(language);
  const mainNavItems = getMainNavItems(language);

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="mobile-only h-10 w-10 items-center justify-center rounded-md border border-border bg-washi-elevated text-ink transition-colors hover:text-terracotta"
        aria-label={copy.chrome.openNavigation}
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label={copy.chrome.closeNavigation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-drawer fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
              onClick={() => onOpenChange(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="mobile-drawer fixed inset-y-0 left-0 z-50 flex w-[min(88vw,20rem)] flex-col border-r border-border bg-washi shadow-[0_1px_3px_rgba(47,47,47,0.06)]"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-5">
                <SiteBrand size="sm" />
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:text-ink"
                  aria-label={copy.chrome.closeMenu}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {mainNavItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-body transition-colors ${
                        active
                          ? "border-l-2 border-terracotta text-ink"
                          : "text-text-muted hover:text-text"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-border px-4 py-4">
                <SignedIn>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-washi-elevated px-3 py-3">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "h-8 w-8 bg-terracotta text-washi",
                        },
                      }}
                    />
                    <div>
                      <p className="text-[10px] font-body uppercase tracking-widest text-text-muted">
                        {copy.chrome.account}
                      </p>
                      <p className="text-xs text-text">{copy.chrome.signedIn}</p>
                    </div>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Link
                    href="/sign-in"
                    className="washi-btn-primary flex justify-center px-4 py-2.5 text-xs uppercase tracking-wider"
                  >
                    {copy.chrome.signIn}
                  </Link>
                </SignedOut>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
