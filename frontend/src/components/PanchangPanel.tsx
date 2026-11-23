'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, LocateFixed, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import BirthDetailsFields, { EMPTY_BIRTH_DETAILS, type BirthDetailsValue } from '@/components/shared/BirthDetailsFields';
import { Calculating, InlineError } from '@/components/tools/ToolResultFrame';
import { trackEvent } from '@/lib/analytics/events';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { panchangCopy } from '@/lib/panchang-copy';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';
import { useSiteZone } from "@/components/time/useSiteZone";
import { zoneIsoDate } from "@/lib/time/site-zone";

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

interface Place {
  name: string;
  lat: number;
  lon: number;
}

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function shiftDay(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  return isoDate(new Date(y, m - 1, d + days));
}

/**
 * Panchang — tithi, nakshatra, yoga and karana at sunrise for a chosen day
 * and place. Deliberately doesn't show Rokuyo (see backend/server.py).
 *
 * A day-and-place tool rather than a person tool: it opens on today at the
 * remembered person's place, calculates straight away, and lets the visitor
 * step day by day, pick another place, or use their current location. Each
 * limb carries a one-line explanation, since the Sanskrit names alone mean
 * little to most visitors.
 */
export default function PanchangPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = panchangCopy[language];
  const ui = toolUiCopy[language];
  const { primary, isLoaded } = useBirthProfile();

  // null = "today" in the site zone (JST; IST in India) until a date is picked.
  const zone = useSiteZone();
  const todayIso = zoneIsoDate(zone);
  const [pickedDate, setDate] = useState<string | null>(null);
  const date = pickedDate ?? todayIso;
  const [place, setPlace] = useState<Place | null>(null);
  const [placeEntry, setPlaceEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [changingPlace, setChangingPlace] = useState(false);
  const [locating, setLocating] = useState<'idle' | 'busy' | 'denied'>('idle');
  const [result, setResult] = useState<PanchangResult | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const requestId = useRef(0);
  const defaulted = useRef(false);

  // Start from the remembered person's place.
  useEffect(() => {
    if (!isLoaded || defaulted.current) return;
    defaulted.current = true;
    if (primary) {
      const fromProfile = { name: primary.locationName, lat: primary.birth.latitude, lon: primary.birth.longitude };
      void Promise.resolve().then(() => setPlace(fromProfile));
    }
  }, [isLoaded, primary]);

  const compute = async (forDate: string, forPlace: Place) => {
    const id = ++requestId.current;
    setStatus('loading');
    try {
      const response = await fetch('/api/panchang', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: Number(forDate.slice(0, 4)),
          month: Number(forDate.slice(5, 7)),
          day: Number(forDate.slice(8, 10)),
          latitude: forPlace.lat,
          longitude: forPlace.lon,
        }),
      });
      if (!response.ok) throw new Error('panchang failed');
      const data = (await response.json()) as PanchangResult;
      if (id !== requestId.current) return; // a newer day/place won
      setResult(data);
      setStatus('idle');
      trackEvent('tool_completed', { slug: 'panchang', locale: language });
    } catch {
      if (id === requestId.current) setStatus('error');
    }
  };

  // Calculate whenever the day or place changes.
  useEffect(() => {
    if (!place) return;
    void Promise.resolve().then(() => compute(date, place));
    // compute only reads its arguments and stable setters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, place]);

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setLocating('denied');
      return;
    }
    setLocating('busy');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPlace({ name: ui.currentLocation, lat: pos.coords.latitude, lon: pos.coords.longitude });
        setChangingPlace(false);
        setLocating('idle');
      },
      () => setLocating('denied'),
      { timeout: 10000, maximumAge: 600000 },
    );
  };

  if (!isLoaded) return <Calculating className="h-64" />;

  const placeShort = place?.name.split(',')[0]?.trim() ?? '';
  const displayDate = new Date(`${date}T00:00:00`).toLocaleDateString(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });

  return (
    <div className="space-y-6">
      <div className="washi-card space-y-4 p-6 md:p-7">
        <div>
          <label htmlFor="panchang-date" className="mb-1.5 block text-[11px] text-text-muted">
            {copy.dateLabel}
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => setDate(shiftDay(date, -1))} aria-label={ui.prevDay} className="washi-btn-secondary px-2.5 py-2">
              <ChevronLeft size={16} aria-hidden />
            </button>
            <input
              id="panchang-date"
              type="date"
              value={date}
              min="1800-01-01"
              max="2100-12-31"
              onChange={(e) => e.target.value && setDate(e.target.value)}
              className="washi-field cursor-pointer p-2.5 text-sm"
            />
            <button type="button" onClick={() => setDate(shiftDay(date, 1))} aria-label={ui.nextDay} className="washi-btn-secondary px-2.5 py-2">
              <ChevronRight size={16} aria-hidden />
            </button>
            {date !== todayIso ? (
              <button type="button" onClick={() => setDate(null)} className="washi-btn-secondary px-3 py-2 text-xs">
                {ui.today}
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-[11px] text-text-muted">{ui.place}</p>
          {place && !changingPlace ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-ink">{placeShort}</span>
              <button type="button" onClick={() => setChangingPlace(true)} className="washi-btn-secondary px-3 py-1.5 text-xs">
                {ui.changePlace}
              </button>
            </div>
          ) : (
            <BirthDetailsFields
              value={placeEntry}
              onChange={(patch) => {
                const next = { ...placeEntry, ...patch };
                setPlaceEntry(next);
                if (patch.location) {
                  setPlace({ name: patch.location.display_name, lat: Number(patch.location.lat), lon: Number(patch.location.lon) });
                  setChangingPlace(false);
                  setPlaceEntry(EMPTY_BIRTH_DETAILS);
                }
              }}
              idPrefix="panchang-place"
              showName={false}
              showDate={false}
              showTime={false}
              placeLabel={ui.place}
            />
          )}
          <button
            type="button"
            onClick={useMyLocation}
            disabled={locating === 'busy'}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-terracotta underline-offset-4 hover:underline disabled:opacity-60"
          >
            <LocateFixed size={13} aria-hidden />
            {locating === 'busy' ? ui.locating : ui.useMyLocation}
          </button>
          {locating === 'denied' ? <p className="mt-1.5 text-xs text-terracotta" role="alert">{ui.locationDenied}</p> : null}
        </div>
      </div>

      {!place ? (
        <p className="text-sm text-text-muted">{copy.needPlace}</p>
      ) : status === 'error' ? (
        <InlineError message={ui.computeError}>
          <button type="button" onClick={() => compute(date, place)} className="washi-btn-primary inline-flex items-center gap-1.5 px-4 text-sm">
            <RotateCcw size={14} aria-hidden />
            {ui.retry}
          </button>
        </InlineError>
      ) : !result ? (
        <Calculating className="h-64" />
      ) : (
        <div aria-busy={status === 'loading'} className={status === 'loading' ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
          <p className="mb-4 text-sm text-text-muted" aria-live="polite">
            {copy.caption(displayDate, placeShort)}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {result.sunrise && (
              <Limb label={copy.sunriseLabel} value={result.sunrise} gloss={copy.sunriseGloss} mono />
            )}
            <Limb label={copy.tithiLabel} value={result.tithi_name} sub={copy.paksha[result.paksha]} gloss={copy.tithiGloss} />
            <Limb label={copy.nakshatraLabel} value={t.nakshatras[result.nakshatra] ?? result.nakshatra} gloss={copy.nakshatraGloss} />
            <Limb label={copy.yogaLabel} value={result.yoga_name} gloss={copy.yogaGloss} />
            <Limb label={copy.karanaLabel} value={result.karana_name} gloss={copy.karanaGloss} />
          </div>
        </div>
      )}
    </div>
  );
}

function Limb({ label, value, sub, gloss, mono = false }: { label: string; value: string; sub?: string; gloss: string; mono?: boolean }) {
  return (
    <div className="washi-card p-5">
      <div className="mb-2 text-[10px] font-body font-semibold uppercase tracking-widest text-text-muted">{label}</div>
      <div className={mono ? 'font-chart text-sm text-ink' : 'font-header text-lg text-ink'}>{value}</div>
      {sub ? <div className="mt-1 text-xs text-text-muted">{sub}</div> : null}
      <p className="mt-3 text-xs leading-relaxed text-text-muted">{gloss}</p>
    </div>
  );
}
