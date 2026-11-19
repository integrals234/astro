"use client";

/**
 * The one place GSAP plugins are registered. Import `gsap`, `useGSAP` and
 * `ScrollTrigger` from here, never from "gsap" directly, so registration
 * happens exactly once and tree-shaking keeps ScrollTrigger out of pages
 * that never import it.
 *
 * Division of labour (never both libraries on one element):
 *   - GSAP: the three signature moments — hero intro + sky ring, the kundli
 *     drawing itself, and the learn section's scroll story.
 *   - Motion (`motion/react`): UI — sheets, menus, result layout, reveals.
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);
}

export { gsap, useGSAP, ScrollTrigger };

/** Shared media queries for `gsap.matchMedia()`. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 1024px)";
