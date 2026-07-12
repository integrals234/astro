import {
  Home,
  Sparkles,
  FlaskConical,
  MoonStar,
  BookOpen,
  GraduationCap,
  CalendarRange,
  Settings,
  type LucideIcon,
} from "lucide-react";
import type { AppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";

export const SITE_NAME = "Jyotish Life";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

const navMeta = [
  {
    href: "/",
    icon: Home,
    labelKey: "home",
    descriptionKey: "homeDescription",
  },
  {
    href: "/learn-jyotish",
    icon: GraduationCap,
    labelKey: "learn",
    descriptionKey: "learnDescription",
  },
  {
    href: "/horoscope",
    icon: CalendarRange,
    labelKey: "horoscope",
    descriptionKey: "horoscopeDescription",
  },
  {
    href: "/chart",
    icon: Sparkles,
    labelKey: "chart",
    descriptionKey: "chartDescription",
  },
  {
    href: "/personal-appraisals",
    icon: MoonStar,
    labelKey: "appraisals",
    descriptionKey: "appraisalsDescription",
  },
  {
    href: "/test-beta",
    icon: FlaskConical,
    labelKey: "course",
    descriptionKey: "courseDescription",
  },
  {
    href: "/blogs",
    icon: BookOpen,
    labelKey: "blogs",
    descriptionKey: "blogsDescription",
  },
  {
    href: "/settings",
    icon: Settings,
    labelKey: "settings",
    descriptionKey: "settingsDescription",
  },
] as const;

export function getMainNavItems(language: AppLanguage): NavItem[] {
  const copy = getSharedCopy(language).navigation;
  return navMeta.map((item) => ({
    href: item.href,
    icon: item.icon,
    label: copy[item.labelKey],
    description: copy[item.descriptionKey],
  }));
}

export function getNavLabel(pathname: string, language: AppLanguage): string {
  if (pathname === "/premium" || pathname.startsWith("/premium/")) {
    return getSharedCopy(language).premium.title;
  }

  const mainNavItems = getMainNavItems(language);

  const match = mainNavItems
    .filter((item) => item.href !== "/")
    .find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
    );

  return match?.label ?? SITE_NAME;
}
