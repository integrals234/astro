"use client";

import Link from "@/components/i18n/LocaleLink";
import { SITE_NAME } from "@/lib/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
} as const;

interface SiteBrandProps {
  className?: string;
  size?: keyof typeof sizeClasses;
}

export default function SiteBrand({ className = "", size = "md" }: SiteBrandProps) {
  const [first, second] = SITE_NAME.split(" ");
  const { language } = useLanguage();
  const copy = getSharedCopy(language);

  return (
    <Link
      href="/"
      aria-label={copy.chrome.brandHome}
      className={`group inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap ${sizeClasses[size]} ${className}`}
    >
      <span className="font-body font-medium tracking-[0.02em] text-ink transition-colors group-hover:text-terracotta">
        {first}
      </span>
      <span className="font-header font-normal italic tracking-[0.04em] text-terracotta transition-colors group-hover:opacity-90">
        {second}
      </span>
    </Link>
  );
}
