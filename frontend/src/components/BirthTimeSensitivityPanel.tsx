'use client';

import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  detailsFromProfile,
  validateBirthDetails,
  type BirthDetailsErrors,
  type BirthDetailsValue,
} from '@/components/shared/BirthDetailsFields';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { InlineError } from '@/components/tools/ToolResultFrame';
import { trackEvent } from '@/lib/analytics/events';
import { generateTimeSamples, findSignChanges, type TimeSample } from '@/lib/birth-time-sensitivity';
import { natalToChartFormData } from '@/lib/profile/types';
import type { ChartData } from '@/lib/chart-types';
import { birthTimeSensitivityCopy } from '@/lib/birth-time-sensitivity-copy';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';

const WINDOW_OPTIONS = [30, 60, 120] as const;
const SAMPLE_COUNT = 7;
const CENTER_INDEX = Math.floor(SAMPLE_COUNT / 2);

/**
 * Computes the same birth chart at several times across an uncertain
 * window and shows where the ascendant sign actually changes, rather than
 * reading one chart as if an approximate time were exact.
 *
 * Its own form (it needs a time *window*), pre-filled from the remembered
 * person. Each sample carries its own calendar date, so a window crossing
 * midnight computes the after-midnight samples for the next day. Rows
 * appear as they are computed, with progress, and the entered time is
 * marked.
 */
export default function BirthTimeSensitivityPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = birthTimeSensitivityCopy[language];
  const ui = toolUiCopy[language];
  const { primary, isLoaded } = useBirthProfile();

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [errors, setErrors] = useState<BirthDetailsErrors>({});
  const [windowMinutes, setWindowMinutes] = useState<(typeof WINDOW_OPTIONS)[number]>(60);
  const [samples, setSamples] = useState<TimeSample[] | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const prefilled = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Most visitors check their own time: start from the remembered person.
  useEffect(() => {
    if (!isLoaded || !primary || prefilled.current) return;
    prefilled.current = true;
    setEntry({ ...detailsFromProfile(primary), name: '' });
  }, [isLoaded, primary]);

  const handleSubmit = async (event?: React.FormEvent) => {
    event?.preventDefault();
    const found = validateBirthDetails(entry, language);
    // A window needs a centre: "unknown time" is no use here.
    if (entry.timeUnknown) found.time = ui.errTime;
    setErrors(found);
    if (Object.keys(found).length > 0 || !entry.location) return;

    setStatus('loading');
    setSamples([]);
    trackEvent('tool_opened', { slug: 'birth-time-check', locale: language });
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
    const points = generateTimeSamples(entry.date, entry.time, windowMinutes, SAMPLE_COUNT);
    try {
      for (const point of points) {
        const formData = natalToChartFormData({
          year: point.year,
          month: point.month,
          day: point.day,
          hour: point.hour,
          minute: point.minute,
          latitude: Number(entry.location.lat),
          longitude: Number(entry.location.lon),
        });
        const response = await fetch('/api/charts/compute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('compute failed');
        const data: ChartData = await response.json();
        const sample: TimeSample = {
          time: point.time,
          date: `${point.year}-${String(point.month).padStart(2, '0')}-${String(point.day).padStart(2, '0')}`,
          dayOffset: point.dayOffset,
          ascendantSign: data.ascendant_sign,
          ascendantLongitude: data.ascendant_longitude,
        };
        setSamples((current) => [...(current ?? []), sample]);
      }
      setStatus('idle');
      trackEvent('tool_completed', { slug: 'birth-time-check', locale: language });
    } catch {
      setStatus('error');
    }
  };

  const done = samples?.length ?? 0;
  const complete = status === 'idle' && done === SAMPLE_COUNT;
  const changes = samples && complete ? findSignChanges(samples) : [];

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="washi-card p-6 md:p-7">
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => {
            setEntry((v) => ({ ...v, ...patch }));
            setErrors({});
          }}
          idPrefix="birth-time-sensitivity"
          showName={false}
          errors={errors}
        />

        <div className="mt-4">
          <p className="mb-1.5 text-[11px] text-text-muted">{copy.windowLabel}</p>
          <SegmentedControl
            label={copy.windowLabel}
            options={WINDOW_OPTIONS.map((minutes) => ({ value: minutes, label: copy.windowOption(minutes) }))}
            value={windowMinutes}
            onChange={setWindowMinutes}
          />
        </div>

        <button type="submit" disabled={status === 'loading'} className="washi-btn-primary mt-5 disabled:opacity-60">
          {status === 'loading' ? copy.computing : copy.compute}
        </button>
      </form>

      <div ref={resultRef} className="scroll-mt-24">
        {status === 'loading' ? (
          <p role="status" className="mt-4 text-sm text-text-muted">
            {ui.progress(done, SAMPLE_COUNT)}
          </p>
        ) : null}

        {status === 'error' ? (
          <div className="mt-6">
            <InlineError message={copy.error}>
              <button type="button" onClick={() => handleSubmit()} className="washi-btn-primary inline-flex items-center gap-1.5 px-4 text-sm">
                <RotateCcw size={14} aria-hidden />
                {ui.retry}
              </button>
            </InlineError>
          </div>
        ) : null}

        {samples && samples.length > 0 && (
          <div className="mt-6 space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="washi-table-header p-2 text-left font-body text-xs font-semibold uppercase tracking-wide">
                      {copy.timeColumn}
                    </th>
                    <th className="washi-table-header p-2 text-left font-body text-xs font-semibold uppercase tracking-wide">
                      {copy.ascendantColumn}
                    </th>
                    <th className="washi-table-header p-2 text-right font-body text-xs font-semibold uppercase tracking-wide">
                      {copy.degreeColumn}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {samples.map((sample, i) => {
                    const isBoundary = changes.some((c) => c.atIndex === i);
                    const isCenter = i === CENTER_INDEX;
                    return (
                      <tr
                        key={`${sample.date}-${sample.time}`}
                        className={`border-b border-border ${isBoundary ? 'bg-washi-elevated' : ''} ${isCenter ? 'font-semibold' : ''}`}
                      >
                        <td className="p-2 font-chart tabular-nums text-ink">
                          {sample.time}
                          {sample.dayOffset !== 0 ? (
                            <span className="ml-2 text-xs font-normal text-text-muted">
                              ({sample.dayOffset < 0 ? copy.dayBefore : copy.dayAfter})
                            </span>
                          ) : null}
                          {isCenter ? <span className="ml-2 text-xs font-normal text-moss">{copy.centerFlag}</span> : null}
                        </td>
                        <td className="p-2 font-body text-ink">
                          {t.signs[sample.ascendantSign] ?? sample.ascendantSign}
                          {isBoundary && (
                            <span className="ml-2 text-xs text-terracotta">{copy.boundaryFlag}</span>
                          )}
                        </td>
                        <td className="p-2 text-right font-chart tabular-nums text-text-muted">
                          {Math.floor(((sample.ascendantLongitude % 30) + 30) % 30)}°
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {complete ? (
              <p className="washi-measure font-body text-sm text-text-muted">
                {changes.length === 0 ? copy.stableResult : copy.changesFound(changes.length)}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
