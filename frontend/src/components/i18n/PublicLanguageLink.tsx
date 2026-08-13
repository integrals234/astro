"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { APP_LANGUAGE_OPTIONS } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { settingsCopy } from "@/lib/i18n/settings";

/**
 * Inline locale switcher (Phase 3.2).
 *
 * This used to be a single deep-link to `/settings#language`. Now that locales
 * live in the URL it can be four real `<Link>`s to the current page under each
 * prefix — which switches language in one click instead of three, and puts a
 * sitewide set of crawlable cross-locale links on every public surface.
 *
 * Deliberately plain `next/link`, not `LocaleLink`: each href targets a
 * specific locale rather than inheriting the current one.
 *
 * `/settings` remains the canonical control; both write the same preference.
 */
export default function PublicLanguageLink({
  iconOnly = false,
  className = "",
}: {
  iconOnly?: boolean;
  className?: string;
}) {
  const { language } = useLanguage();
  const pathname = useBarePathname();
  const label = settingsCopy[language].language.title;

  return (
    <nav aria-label={label} className={className}>
      <Languages size={16} aria-hidden />
      {!iconOnly && <span className="sr-only">{label}</span>}
      <span className="inline-flex items-center gap-1">
        {APP_LANGUAGE_OPTIONS.map((option) => {
          const active = option.code === language;
          return (
            <Link
              key={option.code}
              href={localizedHref(option.code, pathname)}
              hrefLang={option.code}
              lang={option.code}
              aria-current={active ? "true" : undefined}
              title={option.nativeName}
              className={`rounded-sm px-1 uppercase tracking-wider transition-colors ${
                active ? "text-terracotta" : "opacity-70 hover:opacity-100"
              }`}
            >
              {option.code}
            </Link>
          );
        })}
      </span>
    </nav>
  );
}
