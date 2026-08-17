'use client';

import { m } from 'framer-motion';
import type { Planet } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { formatDMS, planetSymbols } from '@/lib/chart-format';
import type { AppLanguage } from '@/lib/i18n/language';

function DignityBadge({ dignity, t }: { dignity: string; t: ChartTranslations }) {
  const styles: Record<string, string> = {
    Exalted: 'washi-status-positive',
    Debilitated: 'washi-status-caution',
    'Own Sign': 'washi-status-positive',
    Neutral: 'washi-status-neutral',
  };
  return (
    <span
      className={`text-[10px] px-2 py-0.5 border-0 font-body font-semibold uppercase tracking-wider ${styles[dignity] || styles['Neutral']}`}
    >
      {t.ui.dignity[dignity] ?? dignity}
    </span>
  );
}

export interface PlanetDetailsGridProps {
  planets: Planet[];
  t: ChartTranslations;
  lang: AppLanguage;
  columns?: 2 | 3;
}

/**
 * One card per graha — house, sign, longitude, dignity, lord, nakshatra and
 * pada. Extracted from `ChartWorkspace`'s Details tab, unchanged.
 */
export default function PlanetDetailsGrid({
  planets,
  t,
  lang,
  columns = 3,
}: PlanetDetailsGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-4`}
    >
      {planets.map((p, idx) => {
        // Force Rahu/Ketu Retrograde locally for the details cards
        const isRetro = p.name === 'Rahu' || p.name === 'Ketu' ? true : p.is_retrograde;

        return (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            className="washi-card p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <h3
                  className={`font-body font-semibold text-ink ${lang === 'hi' ? 'text-xl' : 'text-lg'}`}
                >
                  <span className="mr-2 font-chart text-terracotta">
                    {planetSymbols[p.name]}
                  </span>
                  {t.planets[p.name]}
                </h3>
                {isRetro && (
                  <span
                    className={`font-body font-semibold washi-status-caution px-2 py-0.5 uppercase tracking-wider ${lang === 'hi' ? 'text-xs' : 'text-[10px]'}`}
                  >
                    {t.ui.retrograde}
                  </span>
                )}
              </div>
              <DignityBadge dignity={p.dignity} t={t} />
            </div>
            <div className="space-y-2 text-sm text-text-muted">
              <div className="flex justify-between">
                <span className={lang === 'hi' ? 'text-base' : ''}>
                  {t.ui?.house} {p.d1_house}
                </span>
                <span className="font-chart text-ink">
                  {t.signs[p.sign]} {formatDMS(p.longitude)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={lang === 'hi' ? 'text-base' : ''}>{t.ui?.lord}</span>
                <span className={`font-medium text-ink ${lang === 'hi' ? 'text-base' : ''}`}>
                  {t.planets[p.sign_lord]}
                </span>
              </div>
              <div className="pt-2 mt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <span
                    className={`font-body font-semibold text-terracotta uppercase tracking-widest ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                  >
                    {t.ui.nakshatraLabel}
                  </span>
                  <span className={`font-semibold text-ink ${lang === 'hi' ? 'text-base' : 'text-sm'}`}>
                    {t.nakshatras[p.nakshatra]}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-text-muted uppercase tracking-widest">
                    {t.ui?.pada}
                  </span>
                  <span className="font-chart text-xs text-text-muted">{p.nakshatra_pada}</span>
                </div>
              </div>
            </div>
          </m.div>
        );
      })}
    </div>
  );
}
