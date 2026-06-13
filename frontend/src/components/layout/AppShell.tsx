"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/layout/MobileNav";
import TopNav from "@/components/layout/TopNav";
import SiteBrand from "@/components/layout/SiteBrand";
import { getNavLabel } from "@/lib/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = getNavLabel(pathname);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-shell-bg text-shell-warm">
      <header className="z-30 shrink-0 border-b border-shell-border bg-shell-sidebar supports-[padding:max(0px)]:pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="shell-header-desktop w-full items-center justify-between gap-8 px-6 py-3.5">
          <SiteBrand size="lg" className="shrink-0" />
          <TopNav />
        </div>

        <div className="shell-header-mobile w-full items-center gap-2 px-4 py-3">
          <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-1 text-center">
            <SiteBrand size="sm" className="shrink-0 max-w-full" />
            <p className="w-full truncate text-[10px] font-medium uppercase tracking-[0.2em] text-shell-muted">
              {pageTitle}
            </p>
          </div>
          <div className="h-10 w-10 shrink-0" aria-hidden />
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-shell-bg">
        <div className="w-full px-4 py-4 md:px-8 md:py-8">{children}</div>
      </main>
    </div>
  );
}
