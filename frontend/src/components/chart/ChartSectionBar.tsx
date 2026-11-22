'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollSpy } from '@/lib/chart-scroll-spy';

export interface ChartSectionBarItem {
  id: string;
  label: string;
}

/**
 * The workspace's section nav: one sticky bar above the card grid.
 *
 *   - tablet and desktop: every section as a chip in one row (scrolls
 *     sideways only if it must), the current one filled; the display
 *     controls sit at the end of the same bar;
 *   - phone: a one-row disclosure ("3 / 10 · Dasha ▾") that opens the list,
 *     so the current section is always one tap away.
 */
export default function ChartSectionBar({
  items,
  ariaLabel,
  controls,
}: {
  items: readonly ChartSectionBarItem[];
  ariaLabel: string;
  /** Rendered at the end of the bar (tablet and desktop). */
  controls?: React.ReactNode;
}) {
  const activeId = useScrollSpy(items.map((item) => item.id));
  const [open, setOpen] = useState(false);
  const rail = useRef<HTMLUListElement>(null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));
  const active = items[activeIndex] ?? items[0];

  // Keep the current chip in view as the reader scrolls.
  useEffect(() => {
    const chip = rail.current?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!chip || !rail.current) return;
    const r = rail.current;
    const left = chip.offsetLeft - r.clientWidth / 2 + chip.clientWidth / 2;
    r.scrollTo({ left, behavior: 'smooth' });
  }, [activeId]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <nav aria-label={ariaLabel} className="chart-bar">
      <div className="hidden items-center gap-3 md:flex">
        <ul ref={rail} className="chart-bar-rail">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                type="button"
                onClick={() => go(item.id)}
                aria-current={item.id === activeId ? 'true' : undefined}
                className="chart-chip"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {controls ? <div className="ml-auto shrink-0">{controls}</div> : null}
      </div>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex min-h-[44px] w-full items-center justify-between gap-3 px-1 text-left font-body text-sm text-ink"
        >
          <span className="min-w-0 truncate">
            <span className="mr-2 font-chart text-xs text-terracotta tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            {active?.label}
          </span>
          <ChevronDown size={16} aria-hidden className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="grid grid-cols-2 gap-1.5 pb-2 pt-1">
            {items.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={item.id === activeId ? 'true' : undefined}
                  className="chart-chip w-full justify-start"
                >
                  <span className="font-chart text-[10px] opacity-60 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
