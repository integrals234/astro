'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import PlanetDetailsGrid from '@/components/chart/PlanetDetailsGrid';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { annualForecastCopy } from '@/lib/annual-forecast-copy';
import type { Planet } from '@/lib/chart-types';

interface AnnualForecastResult {
  return_date: string;
  return_time: string;
  ascendant_sign: string;
  planets: Planet[];
}

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = [CURRENT_YEAR, CURRENT_YEAR + 1, CURRENT_YEAR + 2];

/**
 * Varshaphala (solar return) — the chart cast for the moment transiting
 * Sun returns to its natal degree each year. Reuses PlanetDetailsGrid
 * directly rather than building a new table: the backend's
 * AnnualForecastResponse.planets deliberately reuses the exact same
 * PlanetData shape as the natal chart, so the same display component
 * applies unchanged.
 *
 * Talks to /api/annual-forecast, which proxies to the backend's
 * /api/v1/annual-forecast endpoint (see backend/server.py) — shows
 * `unavailable` rather than a silent failure if that service is
 * unreachable (a free-tier Render cold start, most commonly).
 */
export default function AnnualForecastPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = annualForecastCopy[language];
  const { primary, isLoaded } = useBirthProfile();

  const [year, setYear] = useState(CURRENT_YEAR);
  const [result, setResult] = useState<AnnualForecastResult | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'unavailable'>('idle');

  const handleCompute = async () => {
    if (!primary) return;
    setStatus('loading');
    setResult(null);
    try {
      const response = await fetch('/api/annual-forecast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: primary.birth.year,
          month: primary.birth.month,
          day: primary.birth.day,
          hour: primary.birth.hour,
          minute: primary.birth.minute,
          latitude: primary.birth.latitude,
          longitude: primary.birth.longitude,
          target_year: year,
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
        <p className="mb-1.5 text-[11px] text-text-muted">{copy.yearLabel}</p>
        <div className="washi-segmented inline-flex mb-4">
          {YEAR_OPTIONS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYear(y)}
              className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${year === y ? 'washi-segment-selected' : 'washi-segment-unselected'}`}
            >
              {y}
            </button>
          ))}
        </div>

        <div>
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
        <div className="mt-6 space-y-6">
          <p className="text-center font-body text-sm text-text-muted">
            {copy.returnMoment(result.return_date, result.return_time)}
          </p>
          <p className="text-center font-body text-sm text-ink">
            {copy.ascendantLabel}: {t.signs[result.ascendant_sign] ?? result.ascendant_sign}
          </p>
          <PlanetDetailsGrid planets={result.planets} t={t} lang={language} />
        </div>
      )}
    </div>
  );
}
