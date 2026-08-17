'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import { computeNumerology, isChaldeanComputable } from '@/lib/numerology';
import { numerologyCopy } from '@/lib/numerology-copy';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';

function NumberTile({ label, value, planet }: { label: string; value: number; planet: string }) {
  return (
    <div className="washi-card p-5">
      <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{label}</div>
      <div className="font-header text-3xl text-ink">{value}</div>
      <div className="mt-1 text-xs text-text-muted">{planet}</div>
    </div>
  );
}

/**
 * Mulank, Bhagyank, and — when the name on file is Latin-script — a
 * Chaldean name number. Needs only a birth date, not a computed chart, so
 * this is the one section on the site that still renders when
 * `/api/charts/compute` fails: everything else here depends on a chart
 * that succeeded, this only depends on `useBirthProfile()`'s `primary`.
 */
export default function NumerologyPanel() {
  const { language } = useLanguage();
  const { primary, isLoaded } = useBirthProfile();
  const copy = numerologyCopy[language];
  const t: ChartTranslations = chartFormCopy[language];
  const [latinName, setLatinName] = useState('');

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

  const profileNameUsable = isChaldeanComputable(primary.label);
  const nameSource = profileNameUsable ? primary.label : latinName;
  const result = computeNumerology(primary.birth, nameSource || undefined);

  return (
    <div>
      <h2 className="font-header text-2xl text-ink mb-2">{copy.heading}</h2>
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.provenance}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberTile
          label={copy.mulankLabel}
          value={result.mulank}
          planet={copy.rulingPlanet(t.planets[result.mulankPlanet] ?? result.mulankPlanet)}
        />
        <NumberTile
          label={copy.bhagyankLabel}
          value={result.bhagyank}
          planet={copy.rulingPlanet(t.planets[result.bhagyankPlanet] ?? result.bhagyankPlanet)}
        />
        {result.nameNumber !== null && result.nameNumberPlanet ? (
          <NumberTile
            label={copy.nameNumberLabel}
            value={result.nameNumber}
            planet={copy.rulingPlanet(t.planets[result.nameNumberPlanet] ?? result.nameNumberPlanet)}
          />
        ) : (
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.nameNumberLabel}
            </div>
            <p className="mb-3 text-xs text-text-muted">{copy.nameNotLatin}</p>
            <input
              type="text"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
              placeholder={copy.latinNamePlaceholder}
              className="washi-field w-full p-2.5 text-sm text-ink placeholder:text-text-muted"
            />
          </div>
        )}
      </div>
    </div>
  );
}
