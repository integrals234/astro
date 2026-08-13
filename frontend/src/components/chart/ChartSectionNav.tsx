"use client";

import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import Link from "@/components/i18n/LocaleLink";
import { getChartNavItems, isChartNavActive } from "@/lib/chart-navigation";
import { useChartLang } from "@/lib/use-chart-lang";
import { getChartUi } from "@/lib/chart-i18n";

export default function ChartSectionNav() {
  const pathname = useBarePathname();
  const lang = useChartLang();
  const chartNavItems = getChartNavItems(lang);
  const copy = getChartUi(lang);

  return (
    <nav
      aria-label={copy.nav.sectionsAria}
      className="mb-6 flex items-center gap-1 overflow-x-auto border-b border-border"
    >
      {chartNavItems.map((item) => {
        const active = isChartNavActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.description}
            className={`relative flex items-center gap-2 px-3.5 py-2.5 text-xs font-body font-medium whitespace-nowrap transition-colors ${
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
    </nav>
  );
}
