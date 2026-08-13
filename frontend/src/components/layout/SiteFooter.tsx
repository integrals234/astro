"use client";

import Link from "next/link";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBarePathname } from "@/lib/i18n/use-bare-pathname";
import { ENTITY_SETS } from "@/lib/education/entity-routes";
import { LEGAL_DOCUMENTS } from "@/lib/legal/content";
import { aboutContent } from "@/lib/about/content";
import { APP_LANGUAGE_OPTIONS } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { getMainNavItems, SITE_NAME } from "@/lib/navigation";
import { getSharedCopy } from "@/lib/i18n/shared";

const INSTAGRAM_URL = "https://www.instagram.com/jyotishlife.jp/";

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
    <footer className="washi-inverted mt-16 w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
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
            <h2 className="washi-eyebrow-lead mb-4">
              {copy.footer.contentHeading}
            </h2>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <LocaleLink
                    href={item.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </LocaleLink>
                </li>
              ))}
              {/* Entity set hubs — the shortest path from any page into the
                  programmatic corpus, which is what keeps it inside three
                  clicks of the root (Phase 3.7). */}
              {Object.values(ENTITY_SETS).map((set) => (
                <li key={set.id}>
                  <LocaleLink
                    href={set.path}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {set.title[language]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={copy.footer.legalHeading}>
            <h2 className="washi-eyebrow-lead mb-4">
              {copy.footer.legalHeading}
            </h2>
            <ul className="space-y-2.5">
              <li>
                <LocaleLink
                  href="/about"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {aboutContent.eyebrow[language]}
                </LocaleLink>
              </li>
              {LEGAL_DOCUMENTS.map((document) => (
                <li key={document.slug}>
                  <LocaleLink
                    href={`/legal/${document.slug}`}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
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
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {copy.footer.instagram}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label={copy.footer.languageHeading}>
            <h2 className="washi-eyebrow-lead mb-4">
              {copy.footer.languageHeading}
            </h2>
            <ul className="space-y-2.5">
              {APP_LANGUAGE_OPTIONS.map((option) => (
                <li key={option.code}>
                  <Link
                    href={localizedHref(option.code, pathname)}
                    hrefLang={option.code}
                    lang={option.code}
                    aria-current={option.code === language ? "true" : undefined}
                    className={`text-sm transition-opacity hover:opacity-100 ${
                      option.code === language ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {option.nativeName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="washi-hairline my-10 max-w-none" />

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
