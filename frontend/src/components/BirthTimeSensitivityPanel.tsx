'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from '@/components/shared/BirthDetailsFields';
import { generateTimeSamples, findSignChanges, type TimeSample } from '@/lib/birth-time-sensitivity';
import { natalToChartFormData } from '@/lib/profile/types';
import type { ChartData } from '@/lib/chart-types';
import { birthTimeSensitivityCopy } from '@/lib/birth-time-sensitivity-copy';

const WINDOW_OPTIONS = [30, 60, 120] as const;
const SAMPLE_COUNT = 7;

/**
 * Computes the same birth chart at several times across an uncertain
 * window and shows where the ascendant sign actually changes, rather than
 * reading one chart as if an approximate time were exact.
 *
 * Self-contained, with its own entry form: this needs a time *window*, not
 * a single birth time, so it doesn't fit `ChartDataProvider`'s one-chart
 * contract or `BirthDetailsFields`' single time field on its own — reuses
 * `BirthDetailsFields` for date/place, adds one control (the window) on
 * top, and runs its own sequential compute loop rather than going through
 * the shared single-chart flow.
 */
export default function BirthTimeSensitivityPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = birthTimeSensitivityCopy[language];

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [windowMinutes, setWindowMinutes] = useState<(typeof WINDOW_OPTIONS)[number]>(60);
  const [samples, setSamples] = useState<TimeSample[] | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!isBirthDetailsComplete(entry) || !entry.location) return;
    setStatus('loading');
    setSamples(null);
    try {
      const times = generateTimeSamples(entry.time, windowMinutes, SAMPLE_COUNT);
      const results: TimeSample[] = [];
      // Sequential, not Promise.all: this is a birth-time check specifically
      // because someone is uncertain, not a common path — seven requests in
      // a row is a fine trade for not opening seven connections at once.
      for (const time of times) {
        const [hour, minute] = time.split(':').map(Number);
        const formData = natalToChartFormData({
          year: Number(entry.date.slice(0, 4)),
          month: Number(entry.date.slice(5, 7)),
          day: Number(entry.date.slice(8, 10)),
          hour,
          minute,
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
        results.push({ time, ascendantSign: data.ascendant_sign, ascendantLongitude: data.ascendant_longitude });
      }
      setSamples(results);
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  const changes = samples ? findSignChanges(samples) : [];

  return (
    <div>
      <h2 className="font-header text-2xl text-ink mb-6 text-center">{copy.heading}</h2>
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.intro}</p>

      <div className="washi-card p-6 md:p-7">
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
          idPrefix="birth-time-sensitivity"
          showName={false}
        />

        <div className="mt-4">
          <p className="mb-1.5 text-[11px] text-text-muted">{copy.windowLabel}</p>
          <div className="washi-segmented inline-flex">
            {WINDOW_OPTIONS.map((minutes) => (
              <button
                key={minutes}
                type="button"
                onClick={() => setWindowMinutes(minutes)}
                className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${windowMinutes === minutes ? 'washi-segment-selected' : 'washi-segment-unselected'}`}
              >
                {copy.windowOption(minutes)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isBirthDetailsComplete(entry) || status === 'loading'}
          className="washi-btn-primary mt-4 disabled:opacity-50"
        >
          {status === 'loading' ? copy.computing : copy.compute}
        </button>
        {status === 'error' && <p className="mt-3 text-sm text-terracotta">{copy.error}</p>}
      </div>

      {samples && (
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
                </tr>
              </thead>
              <tbody>
                {samples.map((sample, i) => {
                  const isBoundary = changes.some((c) => c.atIndex === i);
                  return (
                    <tr key={i} className={`border-b border-border ${isBoundary ? 'bg-washi-elevated' : ''}`}>
                      <td className="p-2 font-chart tabular-nums text-ink">{sample.time}</td>
                      <td className="p-2 font-body text-ink">
                        {t.signs[sample.ascendantSign] ?? sample.ascendantSign}
                        {isBoundary && (
                          <span className="ml-2 text-xs text-terracotta">{copy.boundaryFlag}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="washi-measure font-body text-sm text-text-muted">
            {changes.length === 0 ? copy.stableResult : copy.changesFound(changes.length)}
          </p>
        </div>
      )}
    </div>
  );
}
