'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import type { Dasha } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { formatDashaDisplayDate, isDashaRunning, planetSymbols } from '@/lib/chart-format';
import type { AppLanguage } from '@/lib/i18n/language';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';

const parseDashaDate = (value: string) => new Date(value.replace(/(\d+) (\w+) (\d+)/, '$2 $1, $3')).getTime();

/** Share of the period already behind us, 0–1. */
function dashaElapsed(dasha: Dasha): number {
  const start = parseDashaDate(dasha.start_date);
  const end = parseDashaDate(dasha.end_date);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;
  return Math.min(1, Math.max(0, (Date.now() - start) / (end - start)));
}

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

  // One indent per level, from the nested container — the rows themselves
  // no longer add their own margin (the two together pushed the end dates
  // off the right edge of a phone).
  const levelStyles: Record<number, string> = {
    1: 'bg-washi-elevated border-border text-ink font-semibold text-base sm:text-lg px-3 py-3 sm:px-4',
    2: 'bg-washi-elevated border-border text-ink font-medium text-[15px] px-3 py-2.5',
    3: 'bg-washi border-border text-text font-medium text-sm px-2.5 py-2',
    4: 'bg-transparent border-transparent text-text-muted font-normal text-xs px-2 py-1.5',
  };
  const elapsed = running ? dashaElapsed(dasha) : 0;

  return (
    <div className="w-full">
      {/* A real button when it expands (keyboard and screen readers), a
          plain row when it is a leaf. */}
      <RowTag
        {...(hasSubs ? { type: 'button' as const, 'aria-expanded': isOpen, onClick: () => setIsOpen(!isOpen) } : {})}
        className={`relative mb-1 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-[10px] border font-body text-left transition-colors duration-200 ${hasSubs ? 'cursor-pointer hover:border-terracotta/40' : ''} ${levelStyles[level]} ${running ? '!border-terracotta/60' : ''}`}
      >
        <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
          {hasSubs ? (
            <m.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] text-moss" aria-hidden>
              ▶
            </m.span>
          ) : (
            <span className="w-[10px]" aria-hidden />
          )}
          <span className="min-w-0">
            <span className="mr-1.5 font-chart text-terracotta">{planetSymbols[dasha.lord]}</span>
            {t.planets[dasha.lord]}
          </span>
          {running ? (
            <span className="rounded-full bg-terracotta/12 px-2 py-0.5 text-[10px] font-medium text-terracotta">{ui.runningNow}</span>
          ) : null}
        </span>
        {/* Stacked on a phone, side by side from sm up — both always visible. */}
        <span className="flex flex-col items-end font-chart text-[11px] leading-snug text-text-muted tabular-nums sm:flex-row sm:items-center sm:gap-2 sm:text-xs">
          <span className="whitespace-nowrap">{formatDashaDisplayDate(dasha.start_date, lang)}</span>
          <span aria-hidden className="hidden text-text-muted/60 sm:inline">→</span>
          <span className="whitespace-nowrap text-text">
            <span className="sr-only">{ui.endLabel}: </span>
            {formatDashaDisplayDate(dasha.end_date, lang)}
          </span>
        </span>
        {running ? (
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-terracotta/15">
            <span className="block h-full bg-terracotta" style={{ width: `${Math.round(elapsed * 100)}%` }} />
          </span>
        ) : null}
      </RowTag>
      <AnimatePresence>
        {isOpen && hasSubs && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="ml-2 overflow-hidden border-l border-border pl-2 sm:ml-4 sm:pl-3"
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
    <div className="mx-auto w-full max-w-3xl">
      {showHeading && (
        <>
          <h2 className="text-2xl font-header text-ink mb-2 text-center">{t.dashaTimeline}</h2>
          <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-body font-semibold mb-10">
            {t.dashaSub}
          </p>
        </>
      )}
      <div className="mb-1.5 flex justify-end gap-2 px-3 font-body text-[10px] uppercase tracking-widest text-text-muted sm:px-4" aria-hidden>
        <span>{toolUiCopy[lang].startLabel}</span>
        <span>→</span>
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
