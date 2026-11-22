/**
 * Quick sky — an instant, client-side *preview* of the two placements a
 * visitor cares about first: the sidereal Sun and Moon.
 *
 * Why this exists: the real chart comes from the Python engine on a free
 * Render instance that can take 30–60 s to wake from a cold start. Making a
 * first-time visitor stare at a spinner for that long is where they leave.
 * This module answers "where was the Moon?" in microseconds, from the date
 * and time alone, so the form shows something true about *their* sky while
 * they are still typing. The engine's exact result replaces it on arrival.
 *
 * Accuracy, stated plainly so nobody mistakes this for the engine:
 *   - Sun: Meeus ch. 25 low-precision, ~0.01°.
 *   - Moon: Meeus ch. 47 leading periodic terms, typically within ~0.3°.
 *   - Ayanamsa: linear Lahiri approximation, within ~0.02° over 1900–2100.
 *   - Time zone: *estimated* from the chosen place (see `estimateUtcOffset`).
 *     A wrong hour moves the Moon ~0.5°, still inside a 13°20′ nakshatra
 *     unless the Moon sits right on a boundary — which is why every surface
 *     using this labels it a preview.
 */

export const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

export type SignName = (typeof SIGNS)[number];

const NAKSHATRA_SPAN = 360 / 27;
const DEG = Math.PI / 180;

const norm = (deg: number) => ((deg % 360) + 360) % 360;

/** Julian Day for a UT calendar date (Meeus ch. 7). */
export function julianDay(
  year: number,
  month: number,
  day: number,
  hourUt: number,
): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day +
    hourUt / 24 +
    b -
    1524.5
  );
}

/** Tropical apparent-ish solar longitude, degrees. */
export function sunTropical(t: number): number {
  const l0 = 280.46646 + 36000.76983 * t + 0.0003032 * t * t;
  const m = (357.52911 + 35999.05029 * t - 0.0001537 * t * t) * DEG;
  const c =
    (1.914602 - 0.004817 * t - 0.000014 * t * t) * Math.sin(m) +
    (0.019993 - 0.000101 * t) * Math.sin(2 * m) +
    0.000289 * Math.sin(3 * m);
  return norm(l0 + c);
}

/** Tropical lunar longitude, degrees — the largest periodic terms. */
export function moonTropical(t: number): number {
  const lp = 218.3164477 + 481267.88123421 * t;
  const d = (297.8501921 + 445267.1114034 * t) * DEG;
  const m = (357.5291092 + 35999.0502909 * t) * DEG;
  const mp = (134.9633964 + 477198.8675055 * t) * DEG;
  const f = (93.272095 + 483202.0175233 * t) * DEG;
  const e = 1 - 0.002516 * t;
  const terms =
    6.288774 * Math.sin(mp) +
    1.274027 * Math.sin(2 * d - mp) +
    0.658314 * Math.sin(2 * d) +
    0.213618 * Math.sin(2 * mp) -
    0.185116 * e * Math.sin(m) -
    0.114332 * Math.sin(2 * f) +
    0.058793 * Math.sin(2 * d - 2 * mp) +
    0.057066 * e * Math.sin(2 * d - m - mp) +
    0.053322 * Math.sin(2 * d + mp) +
    0.045758 * e * Math.sin(2 * d - m) -
    0.040923 * e * Math.sin(m - mp) -
    0.03472 * Math.sin(d) -
    0.030383 * e * Math.sin(m + mp) +
    0.015327 * Math.sin(2 * d - 2 * f) -
    0.012528 * Math.sin(mp + 2 * f) +
    0.01098 * Math.sin(mp - 2 * f) +
    0.010675 * Math.sin(4 * d - mp) +
    0.010034 * Math.sin(3 * mp) +
    0.008548 * Math.sin(4 * d - 2 * mp);
  return norm(lp + terms);
}

/** Lahiri (Chitrapaksha) ayanamsa, linear approximation. */
export function lahiri(t: number): number {
  return 23.85307 + 1.39697 * t;
}

/**
 * UTC offset in hours for a birth place, *estimated*.
 *
 * The engine resolves the real IANA zone (timezonefinder + pytz, including
 * historical DST). The client has no zone database, so: the handful of
 * countries this site's visitors overwhelmingly come from are named
 * explicitly, and anything else falls back to solar time rounded to the
 * half hour. Good enough to place a Moon, never presented as exact.
 */
export function estimateUtcOffset(placeName: string, longitude: number): number {
  const name = placeName.toLowerCase();
  if (/日本|japan|일본|जापान/.test(name)) return 9;
  if (/대한민국|한국|korea|韓国|कोरिया/.test(name)) return 9;
  if (/भारत|india|インド|인도/.test(name)) return 5.5;
  if (/nepal|ネパール|नेपाल/.test(name)) return 5.75;
  if (/中国|china|台湾|taiwan|香港|hong kong|singapore|シンガポール/.test(name)) return 8;
  return Math.round(longitude / 7.5) / 2;
}

export interface QuickSkyInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  /** Hours east of UTC. */
  utcOffset: number;
}

export interface QuickBody {
  /** Sidereal longitude, degrees 0–360. */
  longitude: number;
  sign: SignName;
  degreeInSign: number;
  /** 1-based, Ashwini = 1. */
  nakshatraNumber: number;
  pada: number;
}

export interface QuickSky {
  sun: QuickBody;
  moon: QuickBody;
}

function describe(longitude: number): QuickBody {
  const signIndex = Math.floor(longitude / 30) % 12;
  const nakIndex = Math.floor(longitude / NAKSHATRA_SPAN) % 27;
  const intoNak = longitude - nakIndex * NAKSHATRA_SPAN;
  return {
    longitude,
    sign: SIGNS[signIndex],
    degreeInSign: longitude - signIndex * 30,
    nakshatraNumber: nakIndex + 1,
    pada: Math.min(4, Math.floor(intoNak / (NAKSHATRA_SPAN / 4)) + 1),
  };
}

export function computeQuickSky(input: QuickSkyInput): QuickSky {
  const hourUt = input.hour + input.minute / 60 - input.utcOffset;
  const jd = julianDay(input.year, input.month, input.day, hourUt);
  const t = (jd - 2451545.0) / 36525;
  const ayan = lahiri(t);
  return {
    sun: describe(norm(sunTropical(t) - ayan)),
    moon: describe(norm(moonTropical(t) - ayan)),
  };
}

/** Parse the `<input type=date>` / `<input type=time>` strings. */
export function quickSkyFromFields(
  date: string,
  time: string,
  utcOffset: number,
): QuickSky | null {
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!dm) return null;
  const tm = /^(\d{2}):(\d{2})/.exec(time || "12:00");
  const year = Number(dm[1]);
  if (year < 1800 || year > 2200) return null;
  return computeQuickSky({
    year,
    month: Number(dm[2]),
    day: Number(dm[3]),
    hour: tm ? Number(tm[1]) : 12,
    minute: tm ? Number(tm[2]) : 0,
    utcOffset,
  });
}
