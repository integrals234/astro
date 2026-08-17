'use client';

import { m } from 'framer-motion';
import type { Planet } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { planetSymbols } from '@/lib/chart-format';

export interface AspectsGridProps {
  planets: Planet[];
  t: ChartTranslations;
}

/**
 * One card per graha with at least one Vedic aspect, listing the houses it
 * casts drishti on. Extracted from `ChartWorkspace`'s Aspects tab, unchanged.
 */
export default function AspectsGrid({ planets, t }: AspectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {planets
        .filter((p) => p.aspects_houses.length > 0)
        .map((p, idx) => (
          <m.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            className="washi-card flex flex-col p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full washi-icon-chip font-chart text-base">
                {planetSymbols[p.name]}
              </div>
              <span className="font-body font-semibold text-ink">{t.planets[p.name]}</span>
              <span className="text-xs text-text-muted">
                {t.inHouse} {p.d1_house}
              </span>
            </div>
            <div>
              <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-2">
                {t.ui?.aspects}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.aspects_houses.map((h) => (
                  <div
                    key={h}
                    className="border border-border px-3 py-1.5 rounded text-sm font-body font-medium text-text"
                  >
                    {t.ui?.house} {h}
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        ))}
    </div>
  );
}
