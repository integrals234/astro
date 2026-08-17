'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { panchangCopy } from '@/lib/panchang-copy';

interface PanchangResult {
  date: string;
  sunrise: string | null;
  paksha: 'Shukla' | 'Krishna';
  tithi_number: number;
  tithi_name: string;
  nakshatra: string;
  yoga_number: number;
  yoga_name: string;
  karana_number: number;
  karana_name: string;
}

function todayIsoDate(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * Panchang — tithi, nakshatra, yoga and karana for a chosen calendar day at
 * the visitor's saved location. Deliberately doesn't show Rokuyo — see the
 * backend comment in server.py for why that needs a real lunisolar
 * calendar implementation rather than the angular math the rest of this
 * uses.
 *
 * Talks to /api/panchang, which proxies to a backend endpoint that is
 * written but not yet deployed (see backend/server.py) — this will show
 * `unavailable` rather than a silent failure until that ships.
 *
 * Tithi/yoga/karana names are shown as their Sanskrit transliterations,
 * the same across all four locales — chartFormCopy already has a
 * localized nakshatra table (reused below), but the ~51 tithi/yoga/karana
 * names have no existing translation anywhere on this site, and writing
 * one is its own content task rather than something to improvise here.
 */
export default function PanchangPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = panchangCopy[language];
  const { primary, isLoaded } = useBirthProfile();

  const [date, setDate] = useState(todayIsoDate());
  const [result, setResult] = useState<PanchangResult | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'unavailable'>('idle');

  const handleCompute = async () => {
    if (!primary) return;
    setStatus('loading');
    setResult(null);
    try {
      const response = await fetch('/api/panchang', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: Number(date.slice(0, 4)),
          month: Number(date.slice(5, 7)),
          day: Number(date.slice(8, 10)),
          latitude: primary.birth.latitude,
          longitude: primary.birth.longitude,
        }),
      });
      if (response.status === 502 || response.status === 503) {
        setStatus('unavailable');
        return;
      }
      if (!response.ok) throw new Error('compute failed');
      setResult(await response.json());
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  if (!primary) {
    return (
      <div className="washi-card p-6 md:p-7">
        <p className="font-body text-text">{copy.needProfile}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-header text-2xl text-ink mb-2 text-center">{copy.heading}</h2>
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.intro}</p>

      <div className="washi-card p-6 md:p-7">
        <label htmlFor="panchang-date" className="mb-1.5 block text-[11px] text-text-muted">
          {copy.dateLabel}
        </label>
        <input
          id="panchang-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="washi-field w-full max-w-xs cursor-pointer p-2.5 text-sm"
        />

        <div className="mt-4">
          <button
            type="button"
            onClick={handleCompute}
            disabled={status === 'loading'}
            className="washi-btn-primary disabled:opacity-50"
          >
            {status === 'loading' ? copy.computing : copy.compute}
          </button>
        </div>

        {status === 'error' && <p className="mt-3 text-sm text-terracotta">{copy.error}</p>}
        {status === 'unavailable' && <p className="mt-3 text-sm text-terracotta">{copy.unavailable}</p>}
      </div>

      {result && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {result.sunrise && (
            <div className="washi-card p-5">
              <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
                {copy.sunriseLabel}
              </div>
              <div className="font-chart text-sm text-ink">{result.sunrise}</div>
            </div>
          )}
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.tithiLabel}
            </div>
            <div className="font-header text-lg text-ink">{result.tithi_name}</div>
            <div className="mt-1 text-xs text-text-muted">{copy.paksha[result.paksha]}</div>
          </div>
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.nakshatraLabel}
            </div>
            <div className="font-header text-lg text-ink">{t.nakshatras[result.nakshatra] ?? result.nakshatra}</div>
          </div>
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.yogaLabel}
            </div>
            <div className="font-header text-lg text-ink">{result.yoga_name}</div>
          </div>
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.karanaLabel}
            </div>
            <div className="font-header text-lg text-ink">{result.karana_name}</div>
          </div>
        </div>
      )}
    </div>
  );
}
