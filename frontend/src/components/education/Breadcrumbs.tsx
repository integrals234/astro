import Link from "next/link";
import type { AppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";

export interface Crumb {
  name: string;
  /** Unprefixed app path. The last crumb renders as text, not a link. */
  path: string;
}

/**
 * Breadcrumbs on every nested page (Phase 3.7). Paired with `BreadcrumbList`
 * schema on the same pages, they are what keeps crawl depth legible once the
 * corpus has hundreds of URLs.
 *
 * Plain `next/link` with pre-resolved hrefs so the trail is in the server HTML.
 */
export default function Breadcrumbs({
  crumbs,
  language,
  label,
}: {
  crumbs: Crumb[];
  language: AppLanguage;
  label: string;
}) {
  return (
    <nav aria-label={label} className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-gold">
                  ›
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-text">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={localizedHref(language, crumb.path)}
                  className="transition-colors hover:text-terracotta"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
