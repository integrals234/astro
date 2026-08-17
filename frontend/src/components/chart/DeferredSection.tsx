'use client';

import { useEffect, useRef, useState } from 'react';

export interface DeferredSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  /**
   * Reserved height before this section's body has mounted. A guess, not a
   * measurement — there is no way to know a section's real height before it
   * renders, so this only has to be close enough that the page doesn't jump
   * visibly as later sections pop in while an earlier one is still on screen.
   */
  minHeight?: number;
}

/**
 * One section of a vertically-stacked chart report.
 *
 * The `id` (an anchor and scroll-spy target) and the heading render
 * immediately; the body — a chart figure, a grid, a dasha tree — only
 * mounts once the section comes within ~600px of the scroll root, so a
 * page with eight or twelve sections doesn't compute and draw all of them
 * on first paint. Once mounted, a section stays mounted; this defers,
 * it doesn't virtualise.
 */
export default function DeferredSection({ id, title, children, minHeight = 560 }: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;
    const el = ref.current;
    if (!el) return;
    const root = el.closest('[data-education-scroll-root]');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldMount(true);
      },
      { root, rootMargin: '600px 0px 600px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldMount]);

  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-header text-2xl text-ink mb-8">{title}</h2>
      <div ref={ref} style={shouldMount ? undefined : { minHeight }}>
        {shouldMount ? children : null}
      </div>
    </section>
  );
}
