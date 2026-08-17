'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollSpy } from '@/lib/chart-scroll-spy';

export interface ChartSectionRailItem {
  id: string;
  label: string;
}

export interface ChartSectionRailProps {
  items: readonly ChartSectionRailItem[];
  /** Announces the nav's purpose to screen readers; per-page copy. */
  ariaLabel: string;
}

/**
 * Section nav for a vertically-stacked chart report, replacing the old
 * horizontal tab bar (which never fit eight labels, let alone twelve, at
 * any breakpoint — especially in Japanese).
 *
 * Desktop keeps a sticky *vertical* rail, since going vertical is what
 * actually fixes the overflow rather than just hiding its scrollbar.
 * Mobile gets a sticky one-row disclosure ("3 / 8 · Planetary Details ▾")
 * instead of a horizontal scroll strip, so the current section is reachable
 * in one tap at any width.
 */
export default function ChartSectionRail({ items, ariaLabel }: ChartSectionRailProps) {
  const ids = items.map((item) => item.id);
  const activeId = useScrollSpy(ids);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const activeItem = items[activeIndex] ?? items[0];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav aria-label={ariaLabel} className="hidden lg:sticky lg:top-8 lg:block lg:h-fit lg:w-48 lg:shrink-0">
        <ul className="space-y-0.5 border-l border-border">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                data-orientation="vertical"
                onClick={() => scrollToId(item.id)}
                aria-current={item.id === activeId ? 'true' : undefined}
                className={`block w-full px-4 py-2 text-left text-xs font-body font-medium uppercase tracking-widest transition-colors ${
                  item.id === activeId ? 'washi-tab-active' : 'washi-tab-inactive hover:text-text'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sticky top-0 z-10 mb-6 border-b border-border bg-washi py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between text-xs font-body font-medium uppercase tracking-widest text-ink"
        >
          <span>
            {activeIndex + 1} / {items.length} · {activeItem?.label}
          </span>
          <ChevronDown size={16} className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileOpen && (
          <ul className="mt-3 space-y-0.5">
            {items.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    item.id === activeId ? 'font-semibold text-terracotta' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {i + 1}. {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
