/**
 * GSAP itself, loaded on demand by `useGsapEffect` (lib/motion/gsap.ts) —
 * never imported statically by a component, so it stays out of the code
 * every page evaluates before first interaction.
 */
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export { gsap };

/** ScrollTrigger is only used by the desktop learn story: its own chunk. */
export async function loadScrollTrigger() {
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  return ScrollTrigger;
}
