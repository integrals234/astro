"use client";

import { useEffect, useState, type RefObject } from "react";
import { Sparkles, X } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";

/**
 * Sticky CTA bar (CTA architecture, point 3).
 *
 * Materialises once the hero clears, carrying the primary action. Bottom on
 * mobile, top on desktop, and dismissible — a bar the visitor cannot get rid
 * of is the pattern that makes this device read as pushy rather than helpful.
 *
 * Driven by an IntersectionObserver on the hero rather than a scroll listener:
 * no work on the main thread per frame, and it reverses correctly on scroll
 * back up. Dismissal is per-session (component state), not persisted — it is a
 * nudge, not a preference.
 */
export default function StickyCtaBar({
  heroRef,
}: {
  heroRef: RefObject<HTMLElement | null>;
}) {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  const shown = visible && !dismissed;

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-0 bottom-0 z-40 transition-[opacity,transform] duration-300 ease-[var(--ease-butter)] md:bottom-auto md:top-0 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0 md:-translate-y-4"
      }`}
    >
      <div className="border-t border-border bg-washi-elevated/95 backdrop-blur md:border-b md:border-t-0">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-3 supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-6 md:supports-[padding:max(0px)]:pb-3">
          <p className="hidden min-w-0 flex-1 truncate text-sm text-text-muted sm:block">
            {welcomeText(welcomeContent.stickyCtaLead, language)}
          </p>
          <Link
            href="/chart"
            tabIndex={shown ? undefined : -1}
            className="washi-btn-primary flex-1 gap-2 px-4 py-2.5 text-sm sm:flex-none"
          >
            <Sparkles size={15} aria-hidden />
            {welcomeText(welcomeContent.ctaPrimary, language)}
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            tabIndex={shown ? undefined : -1}
            aria-label={welcomeText(welcomeContent.stickyCtaDismiss, language)}
            className="tactile shrink-0 rounded-md p-2 text-text-muted transition-colors hover:text-ink"
          >
            <X size={16} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
