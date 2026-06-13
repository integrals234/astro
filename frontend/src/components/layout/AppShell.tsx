"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/layout/MobileNav";
import TopNav from "@/components/layout/TopNav";
import { getNavLabel } from "@/lib/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = getNavLabel(pathname);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-shell-bg text-shell-warm">
      <header className="z-30 shrink-0 border-b border-shell-border bg-shell-sidebar supports-[padding:max(0px)]:pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3">
          {/* Left: mobile menu + brand (+ mobile page title) */}
          <div className="flex min-w-0 items-center gap-3">
            <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
            <Link href="/" className="group shrink-0">
              <span className="font-serif text-lg md:text-xl tracking-tight text-shell-warm group-hover:text-shell-accent transition-colors">
                Astro
              </span>
            </Link>
            <div className="mobile-title min-w-0 border-l border-shell-border pl-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-shell-muted">
                Workspace
              </p>
              <h1 className="font-serif text-base tracking-tight text-shell-warm truncate">
                {pageTitle}
              </h1>
            </div>
          </div>

          {/* Right: desktop horizontal tabs */}
          <TopNav />
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-shell-bg">
        <div className="w-full px-4 py-4 md:px-8 md:py-8">{children}</div>
      </main>
    </div>
  );
}
