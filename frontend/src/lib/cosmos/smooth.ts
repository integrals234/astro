import type Lenis from "lenis";

/**
 * The home page's Lenis instance (desktop only), so anything that scrolls
 * the page programmatically — the hero handing over to the result, the
 * chapter rail — glides with the same engine instead of fighting it.
 */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function smoothScrollTo(target: HTMLElement | number, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.4 });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target + offset, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth", block: "start" });
}
