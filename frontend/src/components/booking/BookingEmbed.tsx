"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { trackEvent } from "@/lib/analytics/events";
import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Cal.com availability picker.
 *
 * A plain iframe rather than Cal's embed script: it is one network dependency
 * instead of a third-party bundle, it cannot touch the rest of the page, and it
 * degrades to a link if framing is blocked. The scheduler is the only thing on
 * this route, so the extra interactivity their SDK buys is not worth the weight.
 */
export default function BookingEmbed({
  src,
  fallbackHref,
  offering,
  language,
  height = 720,
}: {
  src: string;
  fallbackHref: string;
  offering: string;
  language: AppLanguage;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    trackEvent("booking_started", { offering, locale: language });
  }, [offering, language]);

  // Theme is appended client-side because it is only known after next-themes
  // resolves; embedding it in the server-rendered src would flash the wrong one.
  const themedSrc = resolvedTheme
    ? `${src}${src.includes("?") ? "&" : "?"}theme=${resolvedTheme === "dark" ? "dark" : "light"}`
    : src;

  return (
    <div className="relative w-full">
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse rounded-lg bg-[color:var(--color-surface-muted,rgba(0,0,0,0.04))]"
          aria-hidden
        />
      )}
      <iframe
        key={themedSrc}
        src={themedSrc}
        onLoad={() => setLoaded(true)}
        title="Booking calendar"
        className="w-full rounded-lg border border-border bg-transparent"
        style={{ height }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <noscript>
        <a href={fallbackHref} className="washi-btn-primary mt-4 inline-block">
          Open the booking calendar
        </a>
      </noscript>
    </div>
  );
}
