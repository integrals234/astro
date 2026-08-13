"use client";

import NextLink from "next/link";
import { forwardRef } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { localizedHref } from "@/lib/i18n/routing";
import {
  isPlainLeftClick,
  useViewTransitionNavigate,
} from "@/hooks/useViewTransitionNavigate";

/**
 * `next/link` that keeps the visitor in their locale (Phase 3.2) and animates
 * the route change (Phase 1.2).
 *
 * Drop-in: import this as `Link` and existing JSX needs no change. Root-relative
 * hrefs get the locale prefix; external URLs, `#anchors` and `mailto:` pass
 * through untouched. Japanese resolves to the bare path, so nothing changes for
 * the default locale.
 *
 * Prefixing happens here rather than in the nav data so there is exactly one
 * place it can happen — prefixing in both would double up to `/en/en/chart`.
 *
 * This is also the single interception point for view transitions, which is
 * why every internal link in the app goes through it. Modified clicks,
 * new-tab targets, external hrefs and reduced-motion visitors fall straight
 * through to normal `next/link` behaviour.
 */
const LocaleLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NextLink>
>(function LocaleLink({ href, onClick, target, ...props }, ref) {
  const { language } = useLanguage();
  const navigate = useViewTransitionNavigate();

  const resolved =
    typeof href === "string" ? localizedHref(language, href) : href;

  const isInternal = typeof resolved === "string" && resolved.startsWith("/");

  return (
    <NextLink
      ref={ref}
      href={resolved}
      target={target}
      onClick={(event) => {
        onClick?.(event);
        if (!isInternal) return;
        if (!isPlainLeftClick(event, target)) return;

        event.preventDefault();
        navigate(resolved as string);
      }}
      {...props}
    />
  );
});

export default LocaleLink;
