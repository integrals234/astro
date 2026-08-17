'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import type { Dasha } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { formatDashaDisplayDate, planetSymbols } from '@/lib/chart-format';
import type { AppLanguage } from '@/lib/i18n/language';

function DashaNode({
  dasha,
  level = 1,
  t,
  lang,
  defaultOpen = false,
}: {
  dasha: Dasha;
  level?: number;
  t: ChartTranslations;
  lang: AppLanguage;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasSubs = dasha.sub_dashas && dasha.sub_dashas.length > 0;

  const levelStyles: Record<number, string> = {
    1: 'bg-washi-elevated border-border text-ink font-body font-semibold text-lg p-4',
    2: 'bg-washi-elevated border-border text-ink font-body font-medium text-md p-3 ml-4',
    3: 'bg-washi border-border text-text font-body font-medium text-sm p-2 ml-8',
    4: 'bg-transparent border-transparent text-text-muted font-body font-normal text-xs p-1.5 ml-12',
  };

  return (
    <div className="w-full">
      <div
        onClick={() => hasSubs && setIsOpen(!isOpen)}
        className={`flex justify-between items-center rounded-md border cursor-pointer transition-colors duration-200 mb-1 ${levelStyles[level]}`}
      >
        <div className="flex items-center gap-2">
          {hasSubs && (
            <m.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] text-moss">
              ▶
            </m.span>
          )}
          {!hasSubs && <span className="w-3"></span>}
          <span>
            <span className="mr-2 text-terracotta font-chart">{planetSymbols[dasha.lord]}</span>
            {t.planets[dasha.lord]}
          </span>
        </div>
        <div className="text-right flex gap-4 font-chart text-xs text-text-muted tabular-nums">
          <span>{formatDashaDisplayDate(dasha.start_date, lang)}</span>
          <span className="text-border">|</span>
          <span>{formatDashaDisplayDate(dasha.end_date, lang)}</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && hasSubs && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-l border-border ml-4 pl-2"
          >
            {dasha.sub_dashas!.map((sub, i) => (
              <DashaNode key={i} dasha={sub} level={level + 1} t={t} lang={lang} />
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** True while `now` falls within `[start_date, end_date)`. */
function isRunning(dasha: Dasha, now: Date): boolean {
  const start = new Date(dasha.start_date.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3'));
  const end = new Date(dasha.end_date.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3'));
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return false;
  return now >= start && now < end;
}

export interface DashaTimelineProps {
  dashas: Dasha[];
  t: ChartTranslations;
  lang: AppLanguage;
  /**
   * Opens the currently running mahadasha by default rather than requiring a
   * click to find it. Off by default so the still-tabbed workspace (Phase 2)
   * keeps its exact original all-collapsed behaviour.
   */
  openCurrent?: boolean;
}

/**
 * The Vimshottari dasha tree. Extracted from `ChartWorkspace`'s Dasha tab —
 * `DashaNode` unchanged apart from the new `defaultOpen` it needs to open on
 * the running period.
 */
export default function DashaTimeline({
  dashas,
  t,
  lang,
  openCurrent = false,
}: DashaTimelineProps) {
  const now = new Date();
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-header text-ink mb-2 text-center">{t.dashaTimeline}</h2>
      <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-body font-semibold mb-10">
        {t.dashaSub}
      </p>
      <div className="space-y-1">
        {dashas.map((dasha, i) => (
          <DashaNode
            key={i}
            dasha={dasha}
            t={t}
            lang={lang}
            defaultOpen={openCurrent && isRunning(dasha, now)}
          />
        ))}
      </div>
    </div>
  );
}
