'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One section of the chart workspace, as a card in the bento grid.
 *
 * Like `DeferredSection`, the anchor and heading render at once and the body
 * (a chart drawing, a grid, the dasha tree) mounts only when the card comes
 * within ~600px of the scroll root, then stays mounted. The reserved height
 * is per card and modest, so a grid of not-yet-mounted cards never leaves a
 * long empty scroll.
 */
export default function SectionCard({
  id,
  index,
  title,
  className = '',
  minHeight = 380,
  figure = false,
  children,
}: {
  id: string;
  /** 1-based position in the reading order, shown as a small numeral. */
  index: number;
  title: string;
  className?: string;
  minHeight?: number;
  /** A chart drawing: centred in the card when its row is taller. */
  figure?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = ref.current;
    if (!el) return;
    const root = el.closest('[data-education-scroll-root]');
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setMounted(true), {
      root,
      rootMargin: '600px 0px 600px 0px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section id={id} data-figure={figure ? '' : undefined} aria-labelledby={`${id}-title`} className={`chart-card scroll-mt-32 min-w-0 ${className}`}>
      <header className="chart-card-head">
        <span className="chart-card-index" aria-hidden>
          {String(index).padStart(2, '0')}
        </span>
        <h2 id={`${id}-title`} className="min-w-0 font-header text-[length:var(--step-1)] leading-snug text-ink">
          {title}
        </h2>
      </header>
      <div ref={ref} className="chart-card-body" style={mounted ? undefined : { minHeight }}>
        {mounted ? children : null}
      </div>
    </section>
  );
}
