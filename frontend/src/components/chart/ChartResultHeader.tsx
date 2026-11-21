'use client';

import Armillary from '@/components/celestial/Armillary';
import { SIGNS } from '@/lib/sky/quick-sky';
import { Bookmark, BookmarkCheck, Download, RotateCcw } from 'lucide-react';
import type { ChartTranslations } from '@/lib/chart-i18n';

export interface ChartResultHeaderSaveState {
  isSaved: boolean;
  isBusy: boolean;
  onToggle: () => void;
}

export interface ChartResultHeaderProps {
  subject: string;
  t: ChartTranslations;
  onDownloadPdf?: () => void;
  save?: ChartResultHeaderSaveState;
  /**
   * Draw-a-different-chart. Unused until Phase 4 — the button only renders
   * once a caller passes this, so wiring the prop through now costs nothing
   * visible and saves a second edit to this file later.
   */
  onReset?: () => void;
}

/**
 * The result panel's title bar. Extracted from `ChartWorkspace`'s header
 * strip, unchanged apart from the optional reset slot. design-magic: a
 * celestial banner — the person's name set large over a night sky.
 */
export default function ChartResultHeader({
  subject,
  t,
  onDownloadPdf,
  save,
  onReset,
}: ChartResultHeaderProps) {
  return (
    <div className="night-sky relative isolate flex min-h-[9.5rem] flex-wrap items-end justify-between gap-4 overflow-hidden border-b border-border px-6 py-6 md:min-h-[12rem] md:px-10 md:py-8">
      {/* design-magic: the result opens under its own sky, the armillary
          turning behind the person's name. */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 -z-10 opacity-60 md:-right-12 md:-top-24">
        <Armillary signLabels={SIGNS.map((sign) => t.signs[sign] ?? sign)} style={{ '--size': 'clamp(180px, 26vw, 280px)' } as React.CSSProperties} />
      </div>
      <h2 className="min-w-0 font-header text-[length:var(--step-4)] leading-none tracking-tight text-ink">
        <span className="sr-only">{t.subject}: </span>
        {subject.trim() || '—'}
      </h2>
      <div className="relative flex flex-wrap items-center justify-end gap-2">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="washi-btn-secondary flex items-center gap-1.5 bg-washi/70 px-4 py-2 text-xs backdrop-blur-sm"
          >
            <RotateCcw size={13} />
            {t.ui?.resetChart}
          </button>
        )}
        {onDownloadPdf && (
          <button
            type="button"
            onClick={onDownloadPdf}
            className="washi-btn-secondary flex items-center gap-2 bg-washi/60 px-4 py-2 text-xs backdrop-blur-sm transition-colors hover:bg-terracotta/10"
          >
            <Download size={14} />
            {t.downloadPdf}
          </button>
        )}
        {save && (
          <button
            type="button"
            onClick={save.onToggle}
            disabled={save.isBusy}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider rounded-md border transition-colors ${
              save.isSaved
                ? 'border-terracotta bg-terracotta/10 text-terracotta'
                : 'border-terracotta bg-transparent text-terracotta hover:bg-terracotta/10'
            }`}
          >
            {save.isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
            {save.isBusy ? t.savingChart : save.isSaved ? t.savedChart : t.saveChart}
          </button>
        )}
      </div>
    </div>
  );
}
