"use client";

import { useEffect } from "react";

/**
 * GA4, loaded only when `NEXT_PUBLIC_GA_ID` is set.
 *
 * Vercel Analytics stays the product-analytics source of truth — it is already
 * deployed and lighter under APPI. GA4 is here because Japanese SEO tooling and
 * Search Console workflows assume it exists, and because it is what an outside
 * consultant will ask for.
 *
 * Performance pass: gtag.js (~180KB) ran a ~350ms long task even with
 * `lazyOnload`, inside the window that mobile Lighthouse measures as Total
 * Blocking Time. The `dataLayer` queue and `gtag()` stub are defined at once,
 * so the page view and any funnel events fired early are queued, not lost;
 * only the library download waits for the visitor's first interaction
 * (scroll, pointer, key) or 10 s of idle, whichever comes first.
 */
type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!id) return;
    const w = window as GtagWindow;
    if (!w.gtag) {
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        // gtag.js reads the raw `arguments` object from dataLayer.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
      w.gtag("js", new Date());
      w.gtag("config", id, { anonymize_ip: true });
    }

    let loaded = false;
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    };
    const timer = window.setTimeout(load, 10_000);
    const cleanup = () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, load));
    };
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    return cleanup;
  }, [id]);

  return null;
}
