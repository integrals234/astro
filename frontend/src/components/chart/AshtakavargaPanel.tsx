'use client';

import { computeAshtakavarga, type AshtakavargaPlanet } from '@/lib/jyotish/ashtakavarga';
import { ashtakavargaCopy } from '@/lib/jyotish/ashtakavarga-copy';
import { RASHIS } from '@/lib/jyotish/nakshatra-data';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface AshtakavargaPanelProps {
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
  /** `false` when the caller (e.g. `DeferredSection`) renders its own
   * heading for this section already. */
  showHeading?: boolean;
}

const PLANET_ORDER: readonly AshtakavargaPlanet[] = [
  'Sun',
  'Moon',
  'Mars',
  'Mercury',
  'Jupiter',
  'Venus',
  'Saturn',
];

/**
 * Bindu counts per sign — a 12-column table, one row per planet plus the
 * Sarvashtakavarga total, emphasised. Wrapped in its own horizontal
 * scroller since twelve columns plus a label column don't fit 320px.
 */
export default function AshtakavargaPanel({ data, t, lang, showHeading = true }: AshtakavargaPanelProps) {
  const result = computeAshtakavarga(data);
  const copy = ashtakavargaCopy[lang];

  return (
    <div>
      {showHeading && <h2 className="font-header text-2xl text-ink mb-6">{copy.heading}</h2>}
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="washi-table-header p-2 text-left font-body text-xs font-semibold uppercase tracking-wide" />
              {RASHIS.map((sign) => (
                <th
                  key={sign}
                  className="washi-table-header p-2 text-center font-body text-xs font-semibold uppercase tracking-wide"
                >
                  {t.signs[sign] ?? sign}
                </th>
              ))}
              <th className="washi-table-header p-2 text-center font-body text-xs font-semibold uppercase tracking-wide">
                {copy.totalLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {PLANET_ORDER.map((planet) => {
              const row = result.bhinnashtakavarga[planet];
              const rowTotal = row.reduce((sum, n) => sum + n, 0);
              return (
                <tr key={planet} className="border-b border-border">
                  <td className="p-2 font-body text-ink">{t.planets[planet] ?? planet}</td>
                  {row.map((count, i) => (
                    <td key={i} className="p-2 text-center font-chart tabular-nums text-text">
                      {count}
                    </td>
                  ))}
                  <td className="p-2 text-center font-chart tabular-nums font-semibold text-ink">{rowTotal}</td>
                </tr>
              );
            })}
            <tr className="border-t-2 border-terracotta bg-washi-elevated">
              <td className="p-2 font-body font-semibold text-ink">{copy.sarvaLabel}</td>
              {result.sarvashtakavarga.map((count, i) => (
                <td key={i} className="p-2 text-center font-chart tabular-nums font-semibold text-terracotta">
                  {count}
                </td>
              ))}
              <td className="p-2 text-center font-chart tabular-nums font-semibold text-terracotta">
                {result.sarvashtakavargaTotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
