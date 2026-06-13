import {
  LayoutDashboard,
  Bookmark,
  Clock,
  FlaskConical,
  Sparkles,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Generate and explore charts",
  },
  {
    href: "/saved-charts",
    label: "Saved Charts",
    icon: Bookmark,
    description: "Your bookmarked charts",
  },
  {
    href: "/recent-charts",
    label: "Recent Charts",
    icon: Clock,
    description: "Last five generated charts",
  },
  {
    href: "/test-alpha",
    label: "Test Tab Alpha",
    icon: FlaskConical,
    description: "Experimental workspace",
  },
  {
    href: "/test-beta",
    label: "Vedic Course",
    icon: Sparkles,
    description: "インド占星術ミニコース (EN / 日本語)",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    description: "Account and preferences",
  },
];

export function getNavLabel(pathname: string): string {
  const match = mainNavItems.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );
  return match?.label ?? "Astro";
}
