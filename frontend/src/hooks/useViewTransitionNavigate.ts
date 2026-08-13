"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

type StartViewTransition = (
  callback: () => void | Promise<void>,
) => { finished: Promise<void> };

/**
 * How long to wait for a navigation to commit before releasing the transition
 * anyway. If a route is slow, the wrong failure is a page frozen under the
 * view-transition snapshot — better to drop the animation than the app.
 */
const COMMIT_TIMEOUT_MS = 600;

function canTransition(): boolean {
  if (typeof document === "undefined") return false;
  if (
    typeof (document as Document & { startViewTransition?: StartViewTransition })
      .startViewTransition !== "function"
  ) {
    return false;
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Route transitions via `document.startViewTransition` (Phase 1.2).
 *
 * `experimental.viewTransition` in next.config only wires up React's
 * `<ViewTransition>` component, and React 19.2.4 stable does not export it —
 * verified against this checkout. The CSS-only `@view-transition
 * { navigation: auto }` rule does not help either: it covers cross-document
 * navigations, and App Router routing is same-document.
 *
 * So this is the documented fallback. The subtlety is that `router.push` is
 * async — it does not mutate the DOM before returning — so the callback has to
 * hand `startViewTransition` a promise that settles when the new route commits.
 * We detect that as a pathname change, with a timeout so a stalled navigation
 * can never leave the page stuck behind the snapshot.
 */
export function useViewTransitionNavigate() {
  const router = useRouter();
  const pathname = usePathname();
  const pendingRef = useRef<{ href: string; resolve: () => void } | null>(null);

  // Release the transition once the new route is actually on screen.
  useEffect(() => {
    const pending = pendingRef.current;
    if (!pending) return;
    pendingRef.current = null;
    pending.resolve();
  }, [pathname]);

  return useCallback(
    (href: string) => {
      if (!canTransition()) {
        router.push(href);
        return;
      }

      (
        document as Document & { startViewTransition: StartViewTransition }
      ).startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            let settled = false;
            const finish = () => {
              if (settled) return;
              settled = true;
              pendingRef.current = null;
              resolve();
            };

            pendingRef.current = { href, resolve: finish };
            window.setTimeout(finish, COMMIT_TIMEOUT_MS);
            router.push(href);
          }),
      );
    },
    [router],
  );
}

/**
 * True for clicks that should become an in-app transition: plain left-click,
 * no modifier keys, not a new-tab target, not already handled.
 */
export function isPlainLeftClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  target?: string,
): boolean {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    (!target || target === "_self")
  );
}
