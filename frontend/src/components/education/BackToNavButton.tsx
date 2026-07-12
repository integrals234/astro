"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { uiText } from "@/lib/education/i18n/ui";
import type { BilingualText, EducationLang } from "@/lib/education/types";

function getScrollRoot(el: Element): Element | null {
  let node = el.parentElement;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (/(auto|scroll|overlay)/.test(overflowY)) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

export default function BackToNavButton({
  targetRef,
  lang,
  onBeforeScroll,
  watchKey,
  label,
  className = "",
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  lang: EducationLang;
  onBeforeScroll?: () => void;
  watchKey?: string;
  label?: BilingualText;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const buttonLabel = label ? label[lang] : uiText("backToTopicList", lang);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const root = getScrollRoot(target);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { root, threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef, watchKey]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={() => {
            onBeforeScroll?.();
            requestAnimationFrame(() => {
              targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          }}
          aria-label={buttonLabel}
          title={buttonLabel}
          className={`fixed z-30 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-washi-elevated text-text-muted shadow-[0_1px_3px_rgba(47,47,47,0.06)] transition-[color,background-color,border-color,opacity,transform] duration-200 hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 active:scale-95 bottom-5 right-5 supports-[padding:max(0px)]:bottom-[max(1.25rem,env(safe-area-inset-bottom))] supports-[padding:max(0px)]:right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-8 md:right-8 ${className}`}
        >
          <ArrowUp size={17} strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
