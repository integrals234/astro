"use client";

import { useEffect } from "react";
import { LazyMotion, MotionConfig, domMax } from "framer-motion";
import { haptic } from "@/hooks/useHaptic";

/**
 * Global tactile + press-feel layer.
 * Adds a soft active class and light haptic on interactive elements
 * without changing component APIs.
 *
 * Also the reduced-motion floor for the whole app. The CSS
 * `prefers-reduced-motion` block in globals.css uses `!important` on
 * animation/transition duration, which cannot reach framer-motion — it drives
 * inline transforms via rAF/WAAPI. `MotionConfig reducedMotion="user"` is the
 * only thing that does, and it covers every framer consumer in the tree.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const isInteractive = (el: Element | null): HTMLElement | null => {
      if (!el || !(el instanceof Element)) return null;
      const target = el.closest(
        "a, button, [role='button'], .washi-btn-primary, .washi-btn-secondary, .washi-btn-tertiary, .tactile, summary, label[for]",
      );
      if (!target || !(target instanceof HTMLElement)) return null;
      if (target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true") {
        return null;
      }
      // Skip Clerk internals that manage their own press
      if (target.closest(".cl-rootBox, .cl-userButtonPopoverCard")) return null;
      return target;
    };

    const onPointerDown = (e: PointerEvent) => {
      const el = isInteractive(e.target as Element);
      if (!el) return;
      el.classList.add("is-pressing");
      if (e.pointerType === "touch") {
        haptic("selection");
      }
    };

    const clearPress = (e: PointerEvent) => {
      const el = isInteractive(e.target as Element);
      el?.classList.remove("is-pressing");
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", clearPress, { passive: true });
    document.addEventListener("pointercancel", clearPress, { passive: true });
    document.addEventListener("pointerleave", clearPress, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", clearPress);
      document.removeEventListener("pointercancel", clearPress);
      document.removeEventListener("pointerleave", clearPress);
    };
  }, []);

  /*
   * `LazyMotion` + `m` (Phase 4).
   *
   * Every component previously imported `motion`, which pulls framer's whole
   * feature set into the main bundle whether a surface uses it or not. `m` is
   * the same API with the features stripped out; `LazyMotion` loads them once,
   * asynchronously, for the tree below.
   *
   * `domMax` rather than the `domAnimation` the plan suggested: two surfaces
   * use layout animations — the chart workspace's form column and the toast
   * stack — and `domAnimation` omits them, which would have made toast
   * dismissal jump instead of slide. The extra features are still lazy, so
   * this costs nothing on first paint.
   *
   * Deliberately not `strict`. Strict throws at runtime on any stray
   * `motion.*`, and a crash is a far worse failure than the silent fallback
   * of loading the full bundle. Guard with the grep instead:
   *   grep -rn "</\?motion\." src --include=*.tsx   # must return nothing
   */
  return (
    <LazyMotion features={domMax}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
