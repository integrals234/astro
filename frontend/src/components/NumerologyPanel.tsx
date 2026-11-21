'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import BookingHandoff from '@/components/tools/BookingHandoff';
import ToolResultFrame from '@/components/tools/ToolResultFrame';
import { useProfileResult } from '@/components/tools/useProfileResult';
import { computeNumerology, isChaldeanComputable } from '@/lib/numerology';
import { numerologyCopy } from '@/lib/numerology-copy';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import type { NatalInput } from '@/lib/profile/types';

function NumberTile({ label, value, planet, meaning }: { label: string; value: number; planet: string; meaning: string }) {
  return (
    <div className="washi-card p-5">
      <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{label}</div>
      <div className="font-header text-3xl text-ink">{value}</div>
      <div className="mt-1 text-xs text-text-muted">{planet}</div>
      <p className="mt-3 text-sm leading-relaxed text-text">{meaning}</p>
    </div>
  );
}

/**
 * Mulank, Bhagyank and a Chaldean name number. Needs only a birth date, so
 * the form asks for the date (and an optional name) and nothing else.
 *
 * The Latin-name box is always shown and editable — it used to disappear
 * the moment one valid letter produced a number, so nobody could finish
 * typing a name.
 */
const resolveNatal = async (natal: NatalInput) => natal;

export default function NumerologyPanel() {
  const { language } = useLanguage();
  const copy = numerologyCopy[language];
  const t: ChartTranslations = chartFormCopy[language];

  const state = useProfileResult({
    toolSlug: 'numerology',
    compute: resolveNatal,
    needs: { time: false, place: false },
    // A date-only entry has no place, so it is not saved as a person.
    save: false,
  });

  return (
    <div>
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.provenance}</p>
      <ToolResultFrame state={state} idPrefix="numerology" intro={copy.intro} submitLabel={copy.submit} showTime={false} showPlace={false}>
        {(natal, subject) => (
          <NumerologyResult
            // Restart the name box when the person changes.
            key={`${subject.profileId ?? 'local'}-${natal.year}-${natal.month}-${natal.day}`}
            natal={natal}
            initialName={isChaldeanComputable(subject.name) ? subject.name : ''}
            copy={copy}
            t={t}
          />
        )}
      </ToolResultFrame>
    </div>
  );
}

function NumerologyResult({
  natal,
  initialName,
  copy,
  t,
}: {
  natal: NatalInput;
  initialName: string;
  copy: (typeof numerologyCopy)[keyof typeof numerologyCopy];
  t: ChartTranslations;
}) {
  const [name, setName] = useState(initialName);
  const trimmed = name.trim();
  const nameValid = trimmed === '' || isChaldeanComputable(trimmed);
  const result = computeNumerology(natal, nameValid && trimmed ? trimmed : undefined);
  const planet = (p: string) => copy.rulingPlanet(t.planets[p] ?? p);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NumberTile label={copy.mulankLabel} value={result.mulank} planet={planet(result.mulankPlanet)} meaning={copy.meaning(result.mulank)} />
        <NumberTile label={copy.bhagyankLabel} value={result.bhagyank} planet={planet(result.bhagyankPlanet)} meaning={copy.meaning(result.bhagyank)} />
        <div className="washi-card p-5">
          <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{copy.nameNumberLabel}</div>
          {result.nameNumber !== null && result.nameNumberPlanet ? (
            <>
              <div className="font-header text-3xl text-ink">{result.nameNumber}</div>
              <div className="mt-1 text-xs text-text-muted">{planet(result.nameNumberPlanet)}</div>
              <p className="mt-3 text-sm leading-relaxed text-text">{copy.meaning(result.nameNumber)}</p>
            </>
          ) : (
            <div className="font-header text-3xl text-text-muted">—</div>
          )}
          <label htmlFor="numerology-latin-name" className="mt-4 block text-[11px] text-text-muted">
            {copy.nameFieldLabel}
          </label>
          <input
            id="numerology-latin-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.latinNamePlaceholder}
            aria-invalid={!nameValid}
            aria-describedby="numerology-name-help"
            autoComplete="name"
            className={`washi-field mt-1.5 w-full p-2.5 text-sm text-ink placeholder:text-text-muted ${nameValid ? '' : 'border-terracotta'}`}
          />
          <p id="numerology-name-help" className={`mt-1.5 text-xs ${nameValid ? 'text-text-muted' : 'text-terracotta'}`} role={nameValid ? undefined : 'alert'}>
            {nameValid ? copy.nameHelp : copy.nameInvalid}
          </p>
        </div>
      </div>
      <BookingHandoff tool="generic" />
    </div>
  );
}
