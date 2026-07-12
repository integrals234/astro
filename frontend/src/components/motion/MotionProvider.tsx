"use client";

import { useEffect } from "react";
import { haptic } from "@/hooks/useHaptic";

/**
 * Global tactile + press-feel layer.
 * Adds a soft active class and light haptic on interactive elements
 * without changing component APIs.
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

  return <>{children}</>;
}
