"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import { getNavLabel } from "@/lib/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = getNavLabel(pathname);

  return (
    <div className="min-h-screen bg-shell-bg text-shell-warm flex w-full">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col min-w-0 w-full">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-shell-border bg-shell-sidebar px-4 py-4 md:px-8 supports-[padding:max(0px)]:pt-[max(1rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-3 min-w-0">
            <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.28em] text-shell-muted">
                Workspace
              </p>
              <h1 className="font-serif text-xl md:text-2xl tracking-tight text-shell-warm truncate">
                {pageTitle}
              </h1>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-medium text-shell-muted hover:text-shell-accent transition-colors px-3 py-2 rounded-xl hover:bg-white/[0.03]"
            >
              Public generator
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden min-h-[calc(100vh-5rem)] bg-shell-bg">
          <div className="px-4 py-4 md:px-8 md:py-8 w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
