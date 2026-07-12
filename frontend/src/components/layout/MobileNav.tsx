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
import { useHaptic } from "@/hooks/useHaptic";
import {
  easeOutExpo,
  springDrawer,
  staggerContainer,
  staggerItem,
} from "@/lib/motion/tokens";

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
  const { light, selection, medium } = useHaptic();

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    medium();
    onOpenChange(true);
  };

  const closeMenu = () => {
    light();
    onOpenChange(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className="mobile-only tactile h-10 w-10 items-center justify-center rounded-md border border-border bg-washi-elevated text-ink shadow-[var(--shadow-elevated)] transition-colors hover:border-terracotta/40 hover:text-terracotta hover:shadow-[var(--shadow-soft)]"
        aria-label={copy.chrome.openNavigation}
        aria-expanded={open}
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
              transition={{ duration: 0.28, ease: easeOutExpo }}
              className="mobile-drawer fixed inset-0 z-40 bg-ink/25 backdrop-blur-[6px]"
              onClick={closeMenu}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={springDrawer}
              className="mobile-drawer mobile-drawer-panel fixed inset-y-0 left-0 z-50 flex w-[min(88vw,20rem)] flex-col border-r border-border bg-washi"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-5">
                <SiteBrand size="sm" />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="tactile inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-muted hover:border-terracotta/40 hover:text-ink"
                  aria-label={copy.chrome.closeMenu}
                >
                  <X size={18} />
                </button>
              </div>

              <motion.nav
                className="flex-1 space-y-1 overflow-y-auto overscroll-contain px-3 py-4"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {mainNavItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  const Icon = item.icon;

                  return (
                    <motion.div key={item.href} variants={staggerItem}>
                      <Link
                        href={item.href}
                        data-active={active}
                        onClick={() => selection()}
                        className={`mobile-nav-link tactile flex items-center gap-3 rounded-md px-3 py-3 text-sm font-body ${
                          active
                            ? "border-l-2 border-terracotta pl-[10px] text-ink"
                            : "text-text-muted hover:bg-washi-elevated hover:text-text"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            active
                              ? "text-terracotta transition-transform duration-300"
                              : "transition-transform duration-300"
                          }
                        />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="border-t border-border px-4 py-4">
                <SignedIn>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-washi-elevated px-3 py-3 shadow-[var(--shadow-elevated)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
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
                    onClick={() => selection()}
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
