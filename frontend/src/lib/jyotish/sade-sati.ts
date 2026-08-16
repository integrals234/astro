import { RASHIS, rashiIndex, type Rashi } from "./nakshatra-data";

/**
 * Sade Sati — Saturn's transit through the three signs centred on the natal
 * Moon, and the Japanese サターンリターン framing that sits alongside it.
 *
 * Derived entirely from data the ephemeris already returns (natal Moon sign and
 * transiting Saturn sign), so this needs no backend endpoint.
 *
 * Deliberately reports the *phase*, not a prediction. Which of the three signs
 * Saturn currently occupies is a fact; what it means for someone's life is a
 * reading, and that is the paid product.
 */
export type SadeSatiPhase =
  | "rising"
  | "peak"
  | "setting"
  | "dhaiya-fourth"
  | "dhaiya-eighth"
  | "none";

export interface SadeSatiResult {
  phase: SadeSatiPhase;
  /** True for the three-sign Sade Sati proper, false for the Dhaiya periods. */
  isSadeSati: boolean;
  natalMoonSign: Rashi;
  transitSaturnSign: Rashi;
  /** Signed distance from Moon to Saturn, 1-based (1 = same sign). */
  houseFromMoon: number;
}

export function computeSadeSati(
  natalMoonSign: string,
  transitSaturnSign: string,
): SadeSatiResult | null {
  const moonIdx = rashiIndex(natalMoonSign);
  const satIdx = rashiIndex(transitSaturnSign);
  if (moonIdx < 0 || satIdx < 0) return null;

  const houseFromMoon = ((satIdx - moonIdx + 12) % 12) + 1;

  let phase: SadeSatiPhase;
  switch (houseFromMoon) {
    case 12:
      phase = "rising";
      break;
    case 1:
      phase = "peak";
      break;
    case 2:
      phase = "setting";
      break;
    case 4:
      // Not Sade Sati, but classically counted as a lesser Saturn period.
      phase = "dhaiya-fourth";
      break;
    case 8:
      phase = "dhaiya-eighth";
      break;
    default:
      phase = "none";
  }

  return {
    phase,
    isSadeSati: phase === "rising" || phase === "peak" || phase === "setting",
    natalMoonSign: RASHIS[moonIdx],
    transitSaturnSign: RASHIS[satIdx],
    houseFromMoon,
  };
}

/**
 * Saturn return, the Western framing that has real Japanese search volume as
 * サターンリターン. Saturn's sidereal period is ~29.46 years, so returns cluster
 * around 29-30, 58-59 and 88 years of age.
 */
export function saturnReturnAges(): number[] {
  return [29, 59, 88];
}

export function nextSaturnReturn(birthYear: number, now = new Date()): {
  age: number;
  approximateYear: number;
} | null {
  const age = now.getFullYear() - birthYear;
  const next = saturnReturnAges().find((a) => a >= age);
  if (next === undefined) return null;
  return { age: next, approximateYear: birthYear + next };
}
