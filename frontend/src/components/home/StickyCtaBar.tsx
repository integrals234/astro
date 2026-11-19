"use client";

import { useEffect, useState, type RefObject } from "react";
import { ArrowUp, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";

/**
 * Sticky CTA — the "right moment" nudge.
 *
 * Appears only once the hero (and its form) has scrolled out of view, and
 * only while the visitor has no chart yet: once a chart exists, the nudge
 * has done its job and stepping aside is the respectful thing. It returns
 * the visitor *to the form* (#start) rather than to another page.
 *
 * Phone only, directly above the bottom tab bar. Desktop doesn't need it:
 * the sticky header carries the chart action at all times.
 * Dismissible per session. Driven by an IntersectionObserver, not a scroll
 * listener — no per-frame main-thread work.
 */
export default function StickyCtaBar({
  heroRef,
  hidden = false,
}: {
  heroRef: RefObject<HTMLElement | null>;
  hidden?: boolean;
}) {
  const { language } = useLanguage();
  const [pastHero, setPastHero] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  const shown = pastHero && !dismissed && !hidden;

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-0 z-40 bottom-[var(--tabbar-h)] transition-[opacity,transform] duration-200 ease-[var(--ease-out)] lg:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="border-t border-border bg-washi/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5 md:px-8">
          <p className="hidden min-w-0 flex-1 truncate text-sm text-text-muted sm:block">
            {welcomeText(welcomeContent.stickyCtaLead, language)}
          </p>
          <a
            href="#start"
            tabIndex={shown ? undefined : -1}
            className="washi-btn-primary flex-1 gap-2 px-5 text-sm sm:flex-none"
          >
            <ArrowUp size={15} aria-hidden />
            {welcomeText(welcomeContent.ctaPrimary, language)}
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            tabIndex={shown ? undefined : -1}
            aria-label={welcomeText(welcomeContent.stickyCtaDismiss, language)}
            className="tactile inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-text-muted hover:text-ink"
          >
            <X size={16} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
