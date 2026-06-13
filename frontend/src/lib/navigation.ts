import {
  Home,
  Sparkles,
  FlaskConical,
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
    href: "/",
    label: "Home",
    icon: Home,
    description: "Jyotish learning hub",
  },
  {
    href: "/chart",
    label: "Chart",
    icon: Sparkles,
    description: "Generate and explore charts",
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
    icon: FlaskConical,
    description: "インド占星術ミニコース (EN / हिन्दी / 日本語 / 한국어)",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    description: "Account and preferences",
  },
];

export function getNavLabel(pathname: string): string {
  if (pathname === "/") return "Home";
  if (pathname === "/chart" || pathname.startsWith("/chart/")) return "Chart";
  const match = mainNavItems
    .filter((item) => item.href !== "/")
    .find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
    );
  return match?.label ?? "Astro";
}
