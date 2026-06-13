"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { mainNavItems } from "@/lib/navigation";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();

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
        className="mobile-only items-center justify-center h-10 w-10 rounded-xl border border-shell-border bg-shell-elevated/70 text-shell-warm hover:border-shell-accent/30 hover:text-shell-accent transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-drawer fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => onOpenChange(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="mobile-drawer fixed inset-y-0 left-0 z-50 w-[min(88vw,20rem)] flex flex-col border-r border-shell-border bg-shell-sidebar shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-shell-border">
                <div>
                  <p className="font-serif text-lg text-shell-warm">Astro</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-shell-muted">
                    Navigation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-shell-border text-shell-muted hover:text-shell-warm transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {mainNavItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${
                        active
                          ? "bg-shell-accent-soft text-shell-warm"
                          : "text-shell-muted hover:bg-white/[0.03] hover:text-shell-warm"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={active ? "text-shell-accent" : "text-shell-muted"}
                      />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-shell-border px-4 py-4">
                <div className="flex items-center gap-3 rounded-2xl border border-shell-border bg-shell-elevated/60 px-3 py-3">
                  <UserButton afterSignOutUrl="/" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-shell-muted">
                      Account
                    </p>
                    <p className="text-xs text-shell-warm/80">Signed in</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
