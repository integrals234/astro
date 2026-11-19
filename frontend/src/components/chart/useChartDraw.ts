"use client";

import type { RefObject } from "react";
import { useGsapEffect, MOTION_OK } from "@/lib/motion/gsap";

/**
 * Signature moment #2, shared by the North and South Indian charts: the
 * grid traces itself line by line (`[data-k-line]`, DrawSVG), then each
 * house or sign box settles in (`[data-k-house]`, in DOM order).
 *
 * Replays whenever `signature` changes (a different person, ascendant or
 * placement), and does nothing under prefers-reduced-motion. Everything is
 * in the DOM and visible without script; the timeline only animates *from*
 * hidden once GSAP is running.
 */
export function useChartDraw(svgRef: RefObject<SVGSVGElement | null>, signature: string) {
  useGsapEffect(
    svgRef,
    ({ gsap }) => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap
          .timeline()
          .from("[data-k-line]", { drawSVG: "0%", duration: 0.5, ease: "power2.inOut", stagger: 0.07 })
          .from("[data-k-house]", { opacity: 0, y: 5, duration: 0.32, ease: "power2.out", stagger: 0.045 }, "-=0.25");
      });
      return () => mm.revert();
    },
    [signature],
  );
}
