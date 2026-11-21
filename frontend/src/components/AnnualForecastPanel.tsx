'use client';

import { useCallback, useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import PlanetDetailsGrid from '@/components/chart/PlanetDetailsGrid';
import BookingHandoff from '@/components/tools/BookingHandoff';
import ToolResultFrame from '@/components/tools/ToolResultFrame';
import { useProfileResult } from '@/components/tools/useProfileResult';
import SegmentedControl from '@/components/ui/SegmentedControl';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { annualForecastCopy } from '@/lib/annual-forecast-copy';
import type { Planet } from '@/lib/chart-types';
import type { NatalInput } from '@/lib/profile/types';

interface AnnualForecastResult {
  return_date: string;
  return_time: string;
  ascendant_sign: string;
  planets: Planet[];
}

const CURRENT_YEAR = new Date().getFullYear();
/** Last year too: someone whose birthday has passed may want the running year's chart. */
const YEAR_OPTIONS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1, CURRENT_YEAR + 2];

/**
 * Varshaphala (solar return) — the chart cast for the moment transiting
 * Sun returns to its natal degree each year. Reuses PlanetDetailsGrid: the
 * backend's AnnualForecastResponse.planets uses the natal PlanetData shape.
 *
 * Calculates straight away for the remembered person and the current year;
 * changing the year recalculates. Talks to /api/annual-forecast (proxy to
 * the backend's /api/v1/annual-forecast).
 */
export default function AnnualForecastPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = annualForecastCopy[language];
  const [year, setYear] = useState(CURRENT_YEAR);

  const compute = useCallback(
    async (natal: NatalInput): Promise<AnnualForecastResult> => {
      const response = await fetch('/api/annual-forecast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...natal, target_year: year }),
      });
      if (!response.ok) throw new Error(`annual forecast failed: ${response.status}`);
      return (await response.json()) as AnnualForecastResult;
    },
    [year],
  );

  const state = useProfileResult({ toolSlug: 'annual-forecast', compute, key: String(year) });

  return (
    <div>
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.intro}</p>
      <ToolResultFrame state={state} idPrefix="annual-forecast" submitLabel={copy.compute} loadingClassName="h-64">
        {(result) => (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-text-muted">{copy.yearLabel}</span>
              <SegmentedControl
                label={copy.yearLabel}
                options={YEAR_OPTIONS.map((y) => ({ value: y, label: String(y) }))}
                value={year}
                onChange={setYear}
              />
            </div>
            <div className="washi-card grid gap-4 p-5 sm:grid-cols-2">
              <div>
                <p className="washi-eyebrow-muted mb-1">{year}</p>
                <p className="font-body text-sm text-ink">{copy.returnMoment(result.return_date, result.return_time)}</p>
              </div>
              <div>
                <p className="washi-eyebrow-muted mb-1">{copy.ascendantLabel}</p>
                <p className="font-header text-xl text-ink">{t.signs[result.ascendant_sign] ?? result.ascendant_sign}</p>
              </div>
            </div>
            <PlanetDetailsGrid planets={result.planets} t={t} lang={language} />
            <BookingHandoff tool="generic" />
          </div>
        )}
      </ToolResultFrame>
    </div>
  );
}
