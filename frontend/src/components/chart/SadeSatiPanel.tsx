'use client';

import { computeSadeSati, nextSaturnReturn } from '@/lib/jyotish/sade-sati';
import { sadeSatiCopy } from '@/lib/jyotish/sade-sati-copy';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface SadeSatiPanelProps {
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
  showHeading?: boolean;
}

/**
 * Sade Sati (transiting Saturn's three-sign passage centred on the natal
 * Moon) plus Saturn return age — two separate ways Vedic and Western
 * astrology each read Saturn's slow significance in a life.
 *
 * Sade Sati is a pure function of `data` (natal Moon sign, transit Saturn
 * sign — both already computed). The return age needs the birth *year*
 * specifically, which `ChartData` doesn't carry — read from
 * `useBirthProfile()` directly rather than threading it through
 * `ChartSectionBody`'s props for one field only this section needs.
 */
export default function SadeSatiPanel({ data, t, lang, showHeading = true }: SadeSatiPanelProps) {
  const { primary } = useBirthProfile();
  const copy = sadeSatiCopy[lang];

  const moon = data.planets.find((p) => p.name === 'Moon');
  const transitSaturn = data.transit_planets.find((p) => p.name === 'Saturn');
  const sadeSati = moon && transitSaturn ? computeSadeSati(moon.sign, transitSaturn.sign) : null;
  const returnInfo = primary ? nextSaturnReturn(primary.birth.year) : null;

  return (
    <div>
      {showHeading && <h2 className="font-header text-2xl text-ink mb-6 text-center">{copy.heading}</h2>}
      <p className="washi-measure mb-6 font-body text-sm text-text-muted">{copy.intro}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sadeSati && (
          <div className="washi-card p-5">
            <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
              {copy.phases[sadeSati.phase].label}
            </div>
            <p className="font-body text-sm text-text">{copy.phases[sadeSati.phase].description}</p>
            <p className="mt-3 text-xs text-text-muted">
              {t.signs[transitSaturn!.sign] ?? transitSaturn!.sign} · {copy.houseFromMoon(sadeSati.houseFromMoon)}
            </p>
          </div>
        )}

        <div className="washi-card p-5">
          <div className="mb-2 text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
            {copy.saturnReturnHeading}
          </div>
          <p className="font-body text-sm text-text">
            {returnInfo ? copy.saturnReturnUpcoming(returnInfo.age, returnInfo.approximateYear) : copy.saturnReturnPast}
          </p>
        </div>
      </div>
    </div>
  );
}
