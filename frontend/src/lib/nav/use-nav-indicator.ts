"use client";

import { useLayoutEffect, type RefObject } from "react";

/*
 * The active-item marker glides from the previous item to the new one.
 *
 * The navs are re-mounted with every page (each page renders its own header),
 * so the previous position is kept here, per nav, in viewport coordinates;
 * on mount or when the active item changes, the marker is FLIP-animated from
 * there with the Web Animations API. Horizontal only, so scroll position does
 * not matter. Nothing runs on the first page load (the `nav-ready` class
 * arrives after hydration) or under reduced motion.
 */
const lastBox = new Map<string, { left: number; width: number }>();
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function useNavIndicator(
  group: string,
  navRef: RefObject<HTMLElement | null>,
  activeKey: string | null,
  /** "after": the active link's ::after underline. "child": a [data-indicator] element inside it. */
  mode: "after" | "child",
) {
  useLayoutEffect(() => {
    const active = navRef.current?.querySelector<HTMLElement>('[data-active="true"]');
    const target = mode === "child" ? active?.querySelector<HTMLElement>("[data-indicator]") : active;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    if (rect.width === 0) return; // not shown at this breakpoint
    // The ::after underline is inset 0.65rem on each side of the link.
    const inset = mode === "after" ? 10.4 : 0;
    const next = { left: rect.left + inset, width: rect.width - inset * 2 };
    const prev = lastBox.get(group);
    lastBox.set(group, next);

    if (!prev || !document.documentElement.classList.contains("nav-ready")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dx = prev.left - next.left;
    const sx = next.width > 0 ? prev.width / next.width : 1;
    if (Math.abs(dx) < 1 && Math.abs(sx - 1) < 0.02) return;

    target.animate(
      [
        { transform: `translateX(${dx}px) scaleX(${sx})`, transformOrigin: "left center" },
        { transform: "translateX(0) scaleX(1)", transformOrigin: "left center" },
      ],
      { duration: 380, easing: EASE, ...(mode === "after" ? { pseudoElement: "::after" } : {}) },
    );
  }, [group, navRef, activeKey, mode]);
}
