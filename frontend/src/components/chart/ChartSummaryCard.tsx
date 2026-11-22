'use client';

import type { ReactNode } from 'react';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';
import { findRunningDasha, formatDashaDisplayDate } from '@/lib/chart-format';

export interface ChartSummaryCardProps {
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
}

/* Engraved emblems — one stroke weight, drawn on a 32-unit grid. */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const Emblems: Record<'lagna' | 'moon' | 'sun' | 'dasha', ReactNode> = {
  // The eastern horizon with a sign rising over it.
  lagna: (
    <>
      <path d="M4 22h24" {...stroke} />
      <path d="M9 22a7 7 0 0 1 14 0" {...stroke} />
      <path d="M16 6v6M13 9l3-3 3 3" {...stroke} />
    </>
  ),
  moon: <path d="M20.5 5.5a10.5 10.5 0 1 0 6 16.2A9 9 0 0 1 20.5 5.5z" {...stroke} />,
  sun: (
    <>
      <circle cx="16" cy="16" r="6" {...stroke} />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <path
            key={deg}
            d={`M${(16 + Math.cos(a) * 9).toFixed(2)} ${(16 + Math.sin(a) * 9).toFixed(2)}L${(16 + Math.cos(a) * 12).toFixed(2)} ${(16 + Math.sin(a) * 12).toFixed(2)}`}
            {...stroke}
          />
        );
      })}
    </>
  ),
  // A period on a dial: an arc of the circle with its hand.
  dasha: (
    <>
      <circle cx="16" cy="16" r="11" {...stroke} opacity="0.45" />
      <path d="M16 5a11 11 0 0 1 10.5 14.3" {...stroke} />
      <path d="M16 16V9M16 16l4.5 3" {...stroke} />
    </>
  ),
};

function Seal({ emblem, label, value, sub }: { emblem: keyof typeof Emblems; label: string; value: string; sub?: string }) {
  return (
    <div className="chart-card relative p-4 sm:p-5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-terracotta" aria-hidden>
        {Emblems[emblem]}
      </svg>
      <div className="mt-3 text-xs text-text-muted">{label}</div>
      <div className="mt-1 font-header text-lg leading-tight text-ink [overflow-wrap:normal] sm:text-[length:var(--step-2)]">{value}</div>
      {sub && <div className="mt-1 text-xs text-text-muted">{sub}</div>}
    </div>
  );
}

/**
 * The answer, before the diagrams: Lagna, Moon sign (+ nakshatra/pada), Sun
 * sign, and the currently-running mahadasha. Nothing forces a visitor to read
 * eight sections to find out what their own chart says about them — the rest
 * of the report is the detail behind these four facts. (design-magic: four
 * engraved seals, each with its own drawn emblem.)
 */
export default function ChartSummaryCard({ data, t, lang }: ChartSummaryCardProps) {
  const moon = data.planets.find((p) => p.name === 'Moon');
  const sun = data.planets.find((p) => p.name === 'Sun');
  const runningDasha = findRunningDasha(data.vimshottari_dashas);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      <Seal emblem="lagna" label={t.ui.summaryLagna} value={t.signs[data.ascendant_sign] ?? data.ascendant_sign} />
      <Seal
        emblem="moon"
        label={t.ui.summaryMoonSign}
        value={moon ? (t.signs[moon.sign] ?? moon.sign) : '—'}
        sub={moon ? `${t.nakshatras[moon.nakshatra] ?? moon.nakshatra} · ${t.ui.pada} ${moon.nakshatra_pada}` : undefined}
      />
      <Seal emblem="sun" label={t.ui.summarySunSign} value={sun ? (t.signs[sun.sign] ?? sun.sign) : '—'} />
      <Seal
        emblem="dasha"
        label={t.ui.summaryCurrentDasha}
        value={runningDasha ? (t.planets[runningDasha.lord] ?? runningDasha.lord) : '—'}
        sub={runningDasha ? formatDashaDisplayDate(runningDasha.end_date, lang) : undefined}
      />
    </div>
  );
}
