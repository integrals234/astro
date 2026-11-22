"use client";

import Link from "next/link";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { entityLabels } from "@/lib/education/entity-labels";
import { LEGAL_LINKS } from "@/lib/legal/titles";
import { aboutContent } from "@/lib/about/content";
import { APP_LANGUAGE_OPTIONS } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { getMainNavItems, SITE_NAME } from "@/lib/navigation";
import { getSharedCopy } from "@/lib/i18n/shared";
import { ChevronDown } from "lucide-react";
import { homeStoryCopy } from "@/lib/home/home-story-copy";

const INSTAGRAM_URL = "https://www.instagram.com/jyotishlife.jp/";

/*
 * Links only. The footer renders on every page, so importing ENTITY_SETS or
 * LEGAL_DOCUMENTS here put the whole education corpus and all four legal
 * texts (~430KB gzipped) into every page's JavaScript.
 */
/** Inline labels (not the daily/宿曜 copy modules) to keep the footer light. */
const TODAY_LABEL = { ja: "今日の運勢", en: "Today's horoscope", hi: "आज का राशिफल", ko: "오늘의 운세" } as const;

const ENTITY_LINKS = [
  { id: "nakshatras", path: "/nakshatras", title: entityLabels.nakshatrasTitle },
  { id: "rashis", path: "/rashis", title: entityLabels.rashisTitleLong },
  { id: "grahas", path: "/grahas", title: entityLabels.grahasTitle },
];

/**
 * The site had no footer at all (Phase 2.4).
 *
 * Beyond the obvious, this is an internal-linking surface: sitewide links to
 * every feature plus the four-locale switcher as real `<Link>`s, which is what
 * flattens crawl depth (Phase 3.7).
 *
 * The legal column links to the draft stubs under /legal. Those pages are
 * `noindex` and say plainly that they are drafts pending 行政書士 review —
 * which is the honest state, and better than a footer that 404s.
 *
 * The standing 娯楽・自己理解 disclaimer (Phase 3.17) lives in the bottom bar,
 * which is its natural home and puts it on every page at once.
 */
export default function SiteFooter() {
  const { language } = useLanguage();
  const pathname = useBarePathname();
  const copy = getSharedCopy(language);
  const navItems = getMainNavItems(language).filter(
    (item) => item.href !== "/" && item.href !== "/settings",
  );

  return (
    <footer className="washi-inverted w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-x-10 gap-y-2 lg:grid-cols-4 lg:gap-y-10">
          <div className="pb-6 lg:pb-0">
            <LocaleLink
              href="/"
              className="font-header text-lg tracking-tight"
              aria-label={copy.chrome.brandHome}
            >
              {SITE_NAME}
            </LocaleLink>
            <p className="mt-3 max-w-[28ch] text-sm opacity-70">
              {copy.metadata.description}
            </p>
          </div>

          <nav aria-label={copy.footer.contentHeading}>
            <details className="disclose disclose-desktop-open border-b border-white/10 lg:border-0">
            <summary className="text-sm lg:mb-3 lg:min-h-0">
              <h2 className="text-sm font-normal opacity-60">{copy.footer.contentHeading}</h2>
              <ChevronDown size={16} aria-hidden className="disclose-chevron opacity-60" />
            </summary>
            <ul className="space-y-1 pb-4 lg:space-y-2.5 lg:pb-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <LocaleLink
                    href={item.href}
                    className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0"
                  >
                    {item.label}
                  </LocaleLink>
                </li>
              ))}
              <li>
                <LocaleLink href="/tools" className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0">
                  {homeStoryCopy[language].tabs.tools}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/horoscope/today" className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0">
                  {TODAY_LABEL[language]}
                </LocaleLink>
              </li>
              {/* 宿曜 pages exist in Japanese only. */}
              {language === "ja" ? (
                <li>
                  <LocaleLink href="/sukuyo" className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0">
                    宿曜占星術の相性
                  </LocaleLink>
                </li>
              ) : null}
              {/* Entity set hubs — the shortest path from any page into the
                  programmatic corpus, which is what keeps it inside three
                  clicks of the root (Phase 3.7). */}
              {ENTITY_LINKS.map((set) => (
                <li key={set.id}>
                  <LocaleLink
                    href={set.path}
                    className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0"
                  >
                    {set.title[language]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
            </details>
          </nav>

          <nav aria-label={copy.footer.legalHeading}>
            <details className="disclose disclose-desktop-open border-b border-white/10 lg:border-0">
            <summary className="text-sm lg:mb-3 lg:min-h-0">
              <h2 className="text-sm font-normal opacity-60">{copy.footer.legalHeading}</h2>
              <ChevronDown size={16} aria-hidden className="disclose-chevron opacity-60" />
            </summary>
            <ul className="space-y-1 pb-4 lg:space-y-2.5 lg:pb-0">
              <li>
                <LocaleLink
                  href="/about"
                  className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0"
                >
                  {aboutContent.eyebrow[language]}
                </LocaleLink>
              </li>
              {LEGAL_LINKS.map((document) => (
                <li key={document.slug}>
                  <LocaleLink
                    href={`/legal/${document.slug}`}
                    className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0"
                  >
                    {document.title[language]}
                  </LocaleLink>
                </li>
              ))}
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center text-sm opacity-80 transition-opacity hover:opacity-100 lg:min-h-0"
                >
                  {copy.footer.instagram}
                </a>
              </li>
            </ul>
            </details>
          </nav>

          <nav aria-label={copy.footer.languageHeading}>
            <details className="disclose disclose-desktop-open border-b border-white/10 lg:border-0">
            <summary className="text-sm lg:mb-3 lg:min-h-0">
              <h2 className="text-sm font-normal opacity-60">{copy.footer.languageHeading}</h2>
              <ChevronDown size={16} aria-hidden className="disclose-chevron opacity-60" />
            </summary>
            <ul className="space-y-1 pb-4 lg:space-y-2.5 lg:pb-0">
              {APP_LANGUAGE_OPTIONS.map((option) => (
                <li key={option.code}>
                  <Link
                    href={localizedHref(option.code, pathname)}
                    hrefLang={option.code}
                    lang={option.code}
                    aria-current={option.code === language ? "true" : undefined}
                    className={`inline-flex min-h-[40px] items-center text-sm transition-opacity hover:opacity-100 lg:min-h-0 ${
                      option.code === language ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {option.nativeName}
                  </Link>
                </li>
              ))}
            </ul>
            </details>
          </nav>
        </div>

        <hr className="my-8 h-px border-0 bg-white/10 lg:my-10" />

        <div className="space-y-3 text-xs opacity-60">
          <p className="max-w-[80ch] leading-relaxed">
            {copy.footer.disclaimer}
          </p>
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
