'use client';

import { Bookmark, BookmarkCheck, Download, PencilLine, RotateCcw } from 'lucide-react';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';
import { formatDMS } from '@/lib/chart-format';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';

export interface ChartCoverSaveState {
  isSaved: boolean;
  isBusy: boolean;
  onToggle: () => void;
}

/**
 * The cover of a computed chart: who it is for, when and where they were
 * born, the four reference facts the old meta strip carried (timezone,
 * sunrise, sunset, the exact ascendant), and every action on the chart.
 * "Edit" opens the birth-details form inside the cover, so changing a
 * detail never sends the reader to the top of a different card.
 */
export default function ChartCover({
  subject,
  birthDate,
  birthTime,
  place,
  data,
  t,
  lang,
  onDownloadPdf,
  onReset,
  save,
  editOpen,
  onToggleEdit,
  children,
}: {
  subject: string;
  /** `YYYY-MM-DD` */
  birthDate: string;
  /** `HH:MM` */
  birthTime: string;
  place: string;
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
  onDownloadPdf?: () => void;
  onReset?: () => void;
  save?: ChartCoverSaveState;
  editOpen: boolean;
  onToggleEdit: () => void;
  /** The birth-details form, shown while editing. */
  children?: React.ReactNode;
}) {
  const ui = toolUiCopy[lang];
  const [y, m, d] = birthDate.split('-').map(Number);
  const dateLabel = Number.isFinite(y)
    ? new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(y, m - 1, d))
    : birthDate;

  const facts = [
    { label: t.absoluteLagna, value: formatDMS(data.ascendant_longitude), accent: true },
    { label: t.timezone, value: data.timezone_detected },
    ...(data.sunrise ? [{ label: t.sunrise, value: data.sunrise }] : []),
    ...(data.sunset ? [{ label: t.sunset, value: data.sunset }] : []),
  ];

  return (
    <section className="chart-cover" aria-labelledby="chart-cover-title">
      <div className="relative flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:p-10">
        <div className="min-w-0">
          <p className="text-xs font-body text-text-muted">{t.subject}</p>
          <h2 id="chart-cover-title" className="mt-1 break-words font-header text-[length:var(--step-4)] leading-[1.05] tracking-tight text-ink">
            {subject.trim() || '—'}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-text">
            <span className="whitespace-nowrap">{dateLabel}</span>
            <span aria-hidden className="mx-2 text-text-muted">·</span>
            <span className="whitespace-nowrap font-chart tabular-nums">{birthTime}</span>
            {place ? (
              <>
                <span aria-hidden className="mx-2 text-text-muted">·</span>
                <span>{place}</span>
              </>
            ) : null}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <button type="button" onClick={onToggleEdit} aria-expanded={editOpen} className="washi-btn-secondary gap-2 px-4 text-sm">
            <PencilLine size={15} aria-hidden />
            {editOpen ? ui.cancel : ui.edit}
          </button>
          {save && (
            <button
              type="button"
              onClick={save.onToggle}
              disabled={save.isBusy}
              aria-pressed={save.isSaved}
              className={`${save.isSaved ? 'washi-btn-primary' : 'washi-btn-secondary'} gap-2 px-4 text-sm disabled:opacity-60`}
            >
              {save.isSaved ? <BookmarkCheck size={15} aria-hidden /> : <Bookmark size={15} aria-hidden />}
              {save.isBusy ? t.savingChart : save.isSaved ? t.savedChart : t.saveChart}
            </button>
          )}
          {onDownloadPdf && (
            <button type="button" onClick={onDownloadPdf} className="washi-btn-secondary gap-2 px-4 text-sm">
              <Download size={15} aria-hidden />
              {t.downloadPdf}
            </button>
          )}
          {onReset && (
            <button type="button" onClick={onReset} className="washi-btn-tertiary gap-1.5 px-3 text-sm">
              <RotateCcw size={14} aria-hidden />
              {t.ui?.resetChart}
            </button>
          )}
        </div>
      </div>

      <dl className="chart-cover-facts">
        {facts.map((fact) => (
          <div key={fact.label} className="min-w-0 px-5 py-4 sm:px-6">
            <dt className="text-[11px] font-body text-text-muted">{fact.label}</dt>
            <dd className={`mt-1 truncate font-chart text-sm tabular-nums ${fact.accent ? 'text-terracotta' : 'text-ink'}`}>{fact.value}</dd>
          </div>
        ))}
      </dl>

      {editOpen ? <div className="border-t border-border p-5 sm:p-8">{children}</div> : null}
    </section>
  );
}
