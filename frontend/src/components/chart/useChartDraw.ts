"use client";

import type { RefObject } from "react";
import { useGsapEffect, MOTION_OK } from "@/lib/motion/gsap";

/**
 * Signature moment #2, shared by the North and South Indian charts — and so by
 * every chart on the site, since they all render through these two: the grid
 * traces itself line by line (`[data-k-line]`, DrawSVG), then each house or
 * sign box settles in (`[data-k-house]`, in DOM order).
 *
 * It plays when the chart actually comes into view. It used to play on mount,
 * so on pages with several charts (the chart page's D1/D9/Moon charts, a tool
 * result further down, the home story) every chart below the fold had
 * finished drawing before anyone scrolled to it.
 *
 * Replays whenever `signature` changes (a different person, ascendant or
 * placement), and does nothing under prefers-reduced-motion. Everything is
 * in the DOM and visible without script; the chart is only hidden once GSAP
 * is running and about to draw it.
 */
export function useChartDraw(svgRef: RefObject<SVGSVGElement | null>, signature: string) {
  useGsapEffect(
    svgRef,
    ({ gsap }) => {
      const svg = svgRef.current;
      if (!svg) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const timeline = gsap
          .timeline({ paused: true })
          .from("[data-k-line]", { drawSVG: "0%", duration: 0.5, ease: "power2.inOut", stagger: 0.07 })
          .from("[data-k-house]", { opacity: 0, y: 5, duration: 0.32, ease: "power2.out", stagger: 0.045 }, "-=0.25");

        const observer = new IntersectionObserver(
          (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            observer.disconnect();
            timeline.play();
          },
          { threshold: 0.35 },
        );
        observer.observe(svg);
        return () => observer.disconnect();
      });
      return () => mm.revert();
    },
    [signature],
  );
}
