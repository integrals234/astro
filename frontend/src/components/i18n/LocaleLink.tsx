"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, useRef } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { localizedHref, stripLocale } from "@/lib/i18n/routing";
import { setPendingNav } from "@/lib/nav/pending-nav";

/**
 * `next/link` that keeps the visitor in their locale (Phase 3.2) and gives
 * every in-app navigation immediate feedback.
 *
 * Drop-in: import this as `Link` and existing JSX needs no change. Root-relative
 * hrefs get the locale prefix; external URLs, `#anchors` and `mailto:` pass
 * through untouched. Japanese resolves to the bare path, so nothing changes for
 * the default locale.
 *
 * Prefixing happens here rather than in the nav data so there is exactly one
 * place it can happen — prefixing in both would double up to `/en/en/chart`.
 *
 * Navigation used to run inside `document.startViewTransition`, which froze
 * the screen on a snapshot until the next page committed (up to 600ms) and,
 * for pages slower than that, animated the old page into itself before the
 * new one popped in. Now a plain click marks the target page pending
 * (`setPendingNav`): navs highlight the tapped item at once, <NavProgress>
 * shows a line if the wait is long, and the new page animates in when it
 * mounts (`.page-enter`, globals.css).
 */
/*
 * Routes whose payload is large enough that prefetching them from every page
 * (the tab bar and header link to them everywhere) is not worth it. They are
 * prefetched on intent instead: mouse hover or keyboard focus. Not on touch
 * start — on a phone the tap's own navigation request followed ~100ms later
 * and did not reuse the prefetch, so the page downloaded twice.
 */
const INTENT_PREFETCH_ONLY = ["/learn-jyotish", "/course"];

const isPlainLeftClick = (event: React.MouseEvent<HTMLAnchorElement>, target?: string) =>
  !event.defaultPrevented &&
  event.button === 0 &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey &&
  (!target || target === "_self");

const LocaleLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NextLink>
>(function LocaleLink(
  { href, onClick, onPointerEnter, onFocus, target, prefetch, ...props },
  ref,
) {
  const { language } = useLanguage();
  const router = useRouter();
  const prefetched = useRef(false);

  const resolved =
    typeof href === "string" ? localizedHref(language, href) : href;

  const isInternal = typeof resolved === "string" && resolved.startsWith("/");
  const intentOnly =
    typeof href === "string" &&
    INTENT_PREFETCH_ONLY.some((route) => href === route || href.startsWith(`${route}?`));

  const prefetchOnIntent = () => {
    if (!intentOnly || prefetched.current || typeof resolved !== "string") return;
    prefetched.current = true;
    router.prefetch(resolved);
  };

  return (
    <NextLink
      ref={ref}
      href={resolved}
      target={target}
      prefetch={prefetch ?? (intentOnly ? false : undefined)}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        if (event.pointerType === "mouse") prefetchOnIntent();
      }}
      onFocus={(event) => {
        onFocus?.(event);
        prefetchOnIntent();
      }}
      onClick={(event) => {
        onClick?.(event);
        if (!isInternal || !isPlainLeftClick(event, target)) return;
        const next = stripLocale(new URL(resolved as string, window.location.href).pathname).pathname;
        const current = stripLocale(window.location.pathname).pathname;
        if (next === current) return;
        // Which way the page should slide in (phone tab bar sets it per tab).
        document.documentElement.dataset.navDir = event.currentTarget.dataset.navDir ?? "none";
        setPendingNav(next);
      }}
      {...props}
    />
  );
});

export default LocaleLink;
