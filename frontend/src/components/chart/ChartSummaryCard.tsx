'use client';

import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';
import { findRunningDasha, formatDashaDisplayDate } from '@/lib/chart-format';

export interface ChartSummaryCardProps {
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
}

function SummaryTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="washi-card p-5">
      <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{label}</div>
      <div className="font-header text-xl text-ink">{value}</div>
      {sub && <div className="mt-1 text-xs text-text-muted">{sub}</div>}
    </div>
  );
}

/**
 * The answer, before the diagrams: Lagna, Moon sign (+ nakshatra/pada), Sun
 * sign, and the currently-running mahadasha, as a 4-up row. Nothing forces
 * a visitor to read eight sections to find out what their own chart says
 * about them — the rest of the report is the detail behind these four facts.
 */
export default function ChartSummaryCard({ data, t, lang }: ChartSummaryCardProps) {
  const moon = data.planets.find((p) => p.name === 'Moon');
  const sun = data.planets.find((p) => p.name === 'Sun');
  const runningDasha = findRunningDasha(data.vimshottari_dashas);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <SummaryTile label={t.ui.summaryLagna} value={t.signs[data.ascendant_sign] ?? data.ascendant_sign} />
      <SummaryTile
        label={t.ui.summaryMoonSign}
        value={moon ? (t.signs[moon.sign] ?? moon.sign) : '—'}
        sub={moon ? `${t.nakshatras[moon.nakshatra] ?? moon.nakshatra} · ${t.ui.pada} ${moon.nakshatra_pada}` : undefined}
      />
      <SummaryTile label={t.ui.summarySunSign} value={sun ? (t.signs[sun.sign] ?? sun.sign) : '—'} />
      <SummaryTile
        label={t.ui.summaryCurrentDasha}
        value={runningDasha ? (t.planets[runningDasha.lord] ?? runningDasha.lord) : '—'}
        sub={runningDasha ? formatDashaDisplayDate(runningDasha.end_date, lang) : undefined}
      />
    </div>
  );
}
