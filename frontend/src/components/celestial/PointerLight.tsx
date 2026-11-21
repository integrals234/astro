"use client";

import { useEffect } from "react";

/**
 * Attention as illumination: on a night stage, the card under a desktop
 * pointer catches a soft brass light exactly where the pointer is. One
 * document-level listener writes --mx / --my on the hovered card; the light
 * itself is CSS (`.night .washi-card` in globals.css). Off for touch and
 * reduced motion.
 */
export default function PointerLight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.<HTMLElement>(".night .washi-card, .night [data-glow]");
      if (!target) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);
  return null;
}
