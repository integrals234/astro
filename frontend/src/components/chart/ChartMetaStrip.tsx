'use client';

import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import { formatDMS } from '@/lib/chart-format';

export interface ChartMetaStripProps {
  data: ChartData;
  t: ChartTranslations;
}

/**
 * Timezone/sunrise on the left, absolute Lagna degree/sunset on the right.
 * Extracted from `ChartWorkspace`'s "Top Grid Info" block, unchanged.
 *
 * `ChartData` also carries `ascendant_nakshatra`, `ayanamsha` and
 * `timezone_offset_hours` — computed on every response, shown nowhere. Left
 * out here deliberately: Phase 2 is a pixel-identical extraction, and adding
 * visible fields is a design change that belongs in a phase where the result
 * gets reviewed, not slipped into a refactor.
 */
export default function ChartMetaStrip({ data, t }: ChartMetaStripProps) {
  return (
    <div className="flex justify-between items-start mb-10 pb-6 border-b border-border">
      <div className="space-y-5">
        <div>
          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">
            {t.timezone}
          </div>
          <div className="font-chart text-sm text-ink">{data.timezone_detected}</div>
        </div>
        {data.sunrise && (
          <div>
            <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">
              {t.sunrise}
            </div>
            <div className="font-chart text-sm text-text font-medium">{data.sunrise}</div>
          </div>
        )}
      </div>
      <div className="space-y-5 text-right">
        <div>
          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">
            {t.absoluteLagna}
          </div>
          <div className="font-chart text-sm text-terracotta font-semibold">
            {formatDMS(data.ascendant_longitude)}
          </div>
        </div>
        {data.sunset && (
          <div>
            <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">
              {t.sunset}
            </div>
            <div className="font-chart text-sm text-text font-medium">{data.sunset}</div>
          </div>
        )}
      </div>
    </div>
  );
}
