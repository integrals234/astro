import { Sparkles, Bookmark, Clock, type LucideIcon } from "lucide-react";
import type { AppLanguage } from "./i18n/language";
import { chartUi } from "./chart-i18n";

export interface ChartNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

const chartNavMeta = [
  {
    href: "/chart",
    icon: Sparkles,
    keys: {
      label: "generate" as const,
      description: "generateDescription" as const,
    },
  },
  {
    href: "/chart/saved",
    icon: Bookmark,
    keys: {
      label: "saved" as const,
      description: "savedDescription" as const,
    },
  },
  {
    href: "/chart/recent",
    icon: Clock,
    keys: {
      label: "recent" as const,
      description: "recentDescription" as const,
    },
  },
] as const;

export function getChartNavItems(lang: AppLanguage): ChartNavItem[] {
  const copy = chartUi[lang]?.nav ?? chartUi.en.nav;

  return chartNavMeta.map((item) => ({
    href: item.href,
    icon: item.icon,
    label: copy[item.keys.label],
    description: copy[item.keys.description],
  }));
}

/** @deprecated Use getChartNavItems(lang) for localized labels */
export const chartNavItems: ChartNavItem[] = getChartNavItems("en");

export function isChartNavActive(pathname: string, href: string): boolean {
  if (href === "/chart") return pathname === "/chart";
  return pathname === href || pathname.startsWith(`${href}/`);
}
