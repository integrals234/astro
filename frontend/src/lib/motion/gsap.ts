"use client";

/**
 * GSAP, loaded after hydration.
 *
 * Division of labour (never both libraries on one element):
 *   - GSAP: the three signature moments — hero intro + sky ring, the kundli
 *     drawing itself, and the learn section's scroll story.
 *   - Motion (`motion/react`): UI — sheets, menus, result layout, reveals.
 *
 * Performance pass: GSAP + ScrollTrigger (~50KB gzipped) used to be imported
 * statically, so every page with a chart or the hero evaluated it during
 * hydration, at 4x CPU in mobile Lighthouse. Components now call
 * `useGsapEffect`, which fetches GSAP in its own chunk once the page is
 * interactive and runs the effect inside a `gsap.context` scoped to the
 * component (reverted on unmount or when deps change). ScrollTrigger loads
 * only when `withScrollTrigger` matches (the desktop learn story).
 *
 * Every animated element is fully visible in its server-rendered state, so
 * nothing depends on GSAP arriving.
 */
import { useEffect, type DependencyList, type RefObject } from "react";

type Core = typeof import("./gsap-core");
export type GsapApi = {
  gsap: Core["gsap"];
  /** Present only when `withScrollTrigger` matched and it has loaded. */
  ScrollTrigger: Awaited<ReturnType<Core["loadScrollTrigger"]>> | null;
};

let corePromise: Promise<Core> | null = null;
const loadCore = () => (corePromise ??= import("./gsap-core"));

export function useGsapEffect(
  scope: RefObject<Element | null>,
  effect: (api: GsapApi) => void | (() => void),
  deps: DependencyList,
  options: { withScrollTrigger?: string } = {},
) {
  useEffect(() => {
    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    void (async () => {
      const core = await loadCore();
      const wantsScroll =
        options.withScrollTrigger && window.matchMedia(options.withScrollTrigger).matches;
      const ScrollTrigger = wantsScroll ? await core.loadScrollTrigger() : null;
      if (cancelled || !scope.current) return;
      ctx = core.gsap.context(() => effect({ gsap: core.gsap, ScrollTrigger }), scope.current);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
    // The caller's deps are the contract, as with useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Shared media queries. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 1024px)";
