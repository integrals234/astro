"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chartNavItems, isChartNavActive } from "@/lib/chart-navigation";

export default function ChartSectionNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Chart sections"
      className="mb-6 flex items-center gap-1 overflow-x-auto rounded-2xl border border-shell-border bg-shell-elevated/40 p-1"
    >
      {chartNavItems.map((item) => {
        const active = isChartNavActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.description}
            className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              active
                ? "bg-shell-accent-soft text-shell-warm shadow-[inset_0_-2px_0_0_var(--shell-accent)]"
                : "text-shell-muted hover:text-shell-warm hover:bg-white/[0.04]"
            }`}
          >
            <Icon
              size={14}
              className={`shrink-0 ${active ? "text-shell-accent" : "text-shell-muted"}`}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
