import { Sparkles, Bookmark, Clock, type LucideIcon } from "lucide-react";

export interface ChartNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export const chartNavItems: ChartNavItem[] = [
  {
    href: "/chart",
    label: "Generate",
    icon: Sparkles,
    description: "Create and explore charts",
  },
  {
    href: "/chart/saved",
    label: "Saved",
    icon: Bookmark,
    description: "Your bookmarked charts",
  },
  {
    href: "/chart/recent",
    label: "Recent",
    icon: Clock,
    description: "Last five generated charts",
  },
];

export function isChartNavActive(pathname: string, href: string): boolean {
  if (href === "/chart") return pathname === "/chart";
  return pathname === href || pathname.startsWith(`${href}/`);
}
