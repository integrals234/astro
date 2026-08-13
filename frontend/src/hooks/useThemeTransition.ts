"use client";

import { useCallback } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

type StartViewTransition = (callback: () => void) => {
  finished: Promise<void>;
};

function supportsViewTransition(): boolean {
  return (
    typeof document !== "undefined" &&
    typeof (document as Document & { startViewTransition?: StartViewTransition })
      .startViewTransition === "function"
  );
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Circular-wipe theme switch (Phase 1.3).
 *
 * The reveal originates from the control the visitor actually clicked, which
 * is what makes it read as the button doing something rather than the page
 * flickering. Falls back to an instant swap where View Transitions are
 * unsupported or the visitor asked for reduced motion.
 *
 * `flushSync` is required: `startViewTransition` snapshots the DOM
 * synchronously, and React 19's default batching would let it capture the
 * pre-change state, producing a wipe between two identical frames.
 */
export function useThemeTransition() {
  const { setTheme } = useTheme();

  return useCallback(
    (nextTheme: string, origin?: HTMLElement | null) => {
      if (!supportsViewTransition() || prefersReducedMotion()) {
        setTheme(nextTheme);
        return;
      }

      const root = document.documentElement;
      const rect = origin?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      root.style.setProperty("--vt-x", `${x}px`);
      root.style.setProperty("--vt-y", `${y}px`);
      root.style.setProperty("--vt-r", `${radius}px`);
      root.dataset.themeTransition = "";

      const transition = (
        document as Document & { startViewTransition: StartViewTransition }
      ).startViewTransition(() => {
        flushSync(() => setTheme(nextTheme));
      });

      void transition.finished.finally(() => {
        delete root.dataset.themeTransition;
      });
    },
    [setTheme],
  );
}
