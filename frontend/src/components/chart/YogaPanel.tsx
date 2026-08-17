'use client';

import { detectYogas, type YogaSeverity } from '@/lib/jyotish/yogas';
import { yogasCopy } from '@/lib/jyotish/yogas-copy';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface YogaPanelProps {
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
  /** `false` when the caller (e.g. `DeferredSection`) renders its own
   * heading for this section already. */
  showHeading?: boolean;
}

const SEVERITY_CLASS: Record<YogaSeverity, string> = {
  positive: 'washi-status-positive',
  caution: 'washi-status-caution',
  neutral: 'washi-status-neutral',
};

/**
 * Yoga/dosha hits for this chart, each with the evidence (planet, house,
 * sign) that triggered it — the difference between a reading and a bare
 * "Gaja Kesari Yoga: yes". An empty result renders as a plain statement,
 * not an error: most charts carry only a few of these, and "none of the
 * checked combinations" is a legitimate answer.
 */
export default function YogaPanel({ data, t, lang, showHeading = true }: YogaPanelProps) {
  const hits = detectYogas(data);
  const copy = yogasCopy[lang];
  const heading = showHeading && (
    <h2 className="font-header text-2xl text-ink mb-6 text-center">{copy.heading}</h2>
  );

  if (hits.length === 0) {
    return (
      <div>
        {heading}
        <div className="washi-callout p-5">
          <p className="font-body text-sm text-text">{copy.empty}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {heading}
      <div className="space-y-4">
        <p className="washi-measure font-body text-sm text-text-muted">{copy.intro}</p>
        {hits.map((hit) => {
          const meta = copy.yogas[hit.id];
          return (
            <div key={hit.id} className="washi-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-header text-base text-ink">{meta.name}</h3>
                <span
                  className={`px-3 py-1 text-[10px] font-body font-semibold uppercase tracking-wider ${SEVERITY_CLASS[hit.severity]}`}
                >
                  {copy.severityLabels[hit.severity]}
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-text-muted">{meta.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {hit.evidence.map((ev, i) => {
                  const planetLabel = ev.planet ? (t.planets[ev.planet] ?? ev.planet) : '';
                  const label =
                    ev.house !== undefined
                      ? copy.evidenceHouse(planetLabel, ev.house)
                      : ev.sign
                        ? copy.evidenceSign(planetLabel, t.signs[ev.sign] ?? ev.sign)
                        : planetLabel;
                  return (
                    <li key={i} className="washi-badge text-[11px]">
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
