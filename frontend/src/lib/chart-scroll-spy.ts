"use client";

import { useEffect, useState } from "react";

/**
 * Which of `ids` (each an `id` on a `<section>` in document order) is
 * currently the one a reader is looking at, for a sticky section rail.
 *
 * One `IntersectionObserver` watching a thin band roughly a third of the
 * way down the viewport, rather than a scroll listener — same approach as
 * `StickyCtaBar`/`BackToNavButton`. The root is resolved via
 * `[data-education-scroll-root]`, the attribute `AppShell` stamps on its
 * `<main>` — the same element `EducationalHub.tsx` looks up for its own
 * pinned-nav logic. `.closest()` returns `null` when no such ancestor
 * exists (the signed-out `/chart` layout, which just scrolls the document),
 * and `null` is exactly what `IntersectionObserver` wants for "the
 * viewport" in that case.
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  // Callers (e.g. mapping a translation lookup over a constant id list)
  // often can't hand back the same array reference twice. Depending on the
  // *content* rather than the reference keeps the observer from being torn
  // down and rebuilt on every unrelated re-render.
  const idsKey = ids.join('|');

  useEffect(() => {
    if (ids.length === 0) return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const root = elements[0].closest("[data-education-scroll-root]");
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Earliest in document order among those currently in the band,
        // rather than whichever entry's callback fired last.
        const current = ids.find((id) => visible.has(id));
        if (current) setActiveId(current);
      },
      { root, rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- idsKey is ids' content signature
  }, [idsKey]);

  return activeId;
}
