"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/layout/MobileNav";
import TopNav from "@/components/layout/TopNav";
import { getNavLabel, SITE_NAME } from "@/lib/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = getNavLabel(pathname);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-shell-bg text-shell-warm">
      <header className="z-30 shrink-0 border-b border-shell-border bg-shell-sidebar supports-[padding:max(0px)]:pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="relative flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="z-10 flex min-w-0 items-center gap-3">
            <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
            <Link href="/" className="group hidden shrink-0 md:block">
              <span className="font-serif text-lg tracking-tight text-shell-warm transition-colors group-hover:text-shell-accent md:text-xl">
                {SITE_NAME}
              </span>
            </Link>
          </div>

          <h1 className="mobile-title pointer-events-none absolute left-1/2 top-1/2 max-w-[52%] -translate-x-1/2 -translate-y-1/2 truncate text-center font-serif text-base tracking-tight text-shell-warm">
            {pageTitle}
          </h1>

          <div className="z-10 flex items-center justify-end">
            <div className="mobile-only h-10 w-10 shrink-0" aria-hidden />
            <TopNav />
          </div>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-shell-bg">
        <div className="w-full px-4 py-4 md:px-8 md:py-8">{children}</div>
      </main>
    </div>
  );
}
