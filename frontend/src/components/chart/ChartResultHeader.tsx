'use client';

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
 * strip, unchanged apart from the optional reset slot.
 */
export default function ChartResultHeader({
  subject,
  t,
  onDownloadPdf,
  save,
  onReset,
}: ChartResultHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 border-b border-border bg-washi">
      <div>
        <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
          {t.subject}
        </div>
        <div className="font-header text-lg text-ink">{subject.trim() || '—'}</div>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-2">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="washi-btn-tertiary flex items-center gap-1.5 px-2 py-2 text-[10px] uppercase tracking-wider"
          >
            <RotateCcw size={13} />
            {t.ui?.resetChart}
          </button>
        )}
        {onDownloadPdf && (
          <button
            type="button"
            onClick={onDownloadPdf}
            className="washi-btn-secondary flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-wider transition-colors hover:bg-terracotta/10"
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
