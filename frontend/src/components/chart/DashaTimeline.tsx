'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import type { Dasha } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { formatDashaDisplayDate, isDashaRunning, planetSymbols } from '@/lib/chart-format';
import type { AppLanguage } from '@/lib/i18n/language';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';

/** Expandable rows are buttons; leaves are plain divs. */
function RowTag({ children, ...props }: React.ComponentPropsWithoutRef<'button'> & React.ComponentPropsWithoutRef<'div'>) {
  return props.onClick ? (
    <button {...(props as React.ComponentPropsWithoutRef<'button'>)}>{children}</button>
  ) : (
    <div {...(props as React.ComponentPropsWithoutRef<'div'>)}>{children}</div>
  );
}

function DashaNode({
  dasha,
  level = 1,
  t,
  lang,
  defaultOpen = false,
  highlightCurrent = false,
}: {
  dasha: Dasha;
  level?: number;
  t: ChartTranslations;
  lang: AppLanguage;
  defaultOpen?: boolean;
  /** Mark (and open down to) the running period at every level. */
  highlightCurrent?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasSubs = Boolean(dasha.sub_dashas && dasha.sub_dashas.length > 0);
  const running = highlightCurrent && isDashaRunning(dasha, new Date());
  const ui = toolUiCopy[lang];

  const levelStyles: Record<number, string> = {
    1: 'bg-washi-elevated border-border text-ink font-body font-semibold text-lg p-4',
    2: 'bg-washi-elevated border-border text-ink font-body font-medium text-md p-3 ml-4',
    3: 'bg-washi border-border text-text font-body font-medium text-sm p-2 ml-8',
    4: 'bg-transparent border-transparent text-text-muted font-body font-normal text-xs p-1.5 ml-12',
  };

  return (
    <div className="w-full">
      {/* A real button when it expands (keyboard and screen readers), a
          plain row when it is a leaf. */}
      <RowTag
        {...(hasSubs ? { type: 'button' as const, 'aria-expanded': isOpen, onClick: () => setIsOpen(!isOpen) } : {})}
        className={`flex w-full justify-between items-center rounded-md border text-left transition-colors duration-200 mb-1 ${hasSubs ? 'cursor-pointer' : ''} ${levelStyles[level]} ${running ? 'border-terracotta/60' : ''}`}
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
          {running ? (
            <span className="rounded-full bg-terracotta/12 px-2 py-0.5 text-[10px] font-medium text-terracotta">{ui.runningNow}</span>
          ) : null}
        </div>
        <div className="text-right flex gap-4 font-chart text-xs text-text-muted tabular-nums">
          <span>{formatDashaDisplayDate(dasha.start_date, lang)}</span>
          <span className="text-border">|</span>
          <span>{formatDashaDisplayDate(dasha.end_date, lang)}</span>
        </div>
      </RowTag>
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
              <DashaNode
                key={i}
                dasha={sub}
                level={level + 1}
                t={t}
                lang={lang}
                highlightCurrent={highlightCurrent}
                defaultOpen={highlightCurrent && level < 2 && isDashaRunning(sub, new Date())}
              />
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
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
  /** `false` when a caller (e.g. `DeferredSection`) already renders its own
   * heading for this timeline — otherwise this and the caller's would double up. */
  showHeading?: boolean;
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
  showHeading = true,
}: DashaTimelineProps) {
  const now = new Date();
  return (
    <div className="max-w-3xl mx-auto">
      {showHeading && (
        <>
          <h2 className="text-2xl font-header text-ink mb-2 text-center">{t.dashaTimeline}</h2>
          <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-body font-semibold mb-10">
            {t.dashaSub}
          </p>
        </>
      )}
      <div className="mb-1 flex justify-end gap-4 px-4 font-body text-[10px] uppercase tracking-widest text-text-muted" aria-hidden>
        <span>{toolUiCopy[lang].startLabel}</span>
        <span className="text-border">|</span>
        <span>{toolUiCopy[lang].endLabel}</span>
      </div>
      <div className="space-y-1">
        {dashas.map((dasha, i) => (
          <DashaNode
            key={i}
            dasha={dasha}
            t={t}
            lang={lang}
            defaultOpen={openCurrent && isDashaRunning(dasha, now)}
            highlightCurrent={openCurrent}
          />
        ))}
      </div>
    </div>
  );
}
