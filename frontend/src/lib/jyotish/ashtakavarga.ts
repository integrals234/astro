import type { ChartData } from "@/lib/chart-types";
import { RASHIS, rashiIndex, type Rashi } from "./nakshatra-data";

/**
 * Ashtakavarga — "the eight-fold group": each of the seven classical
 * grahas plus the Lagna casts a bindu (benefic point) into specific houses
 * counted from its own sign, for each of the seven planets. Summing one
 * planet's bindus across all eight contributors gives its
 * Bhinnashtakavarga (BAV); summing all seven planets' BAVs sign-by-sign
 * gives the Sarvashtakavarga (SAV).
 *
 * Pure function of the eight contributors' sign positions, which
 * `ChartData` already carries (`ascendant_sign` plus each planet's
 * `sign`), so — like Ashtakoot and the yogas — this needs no backend work.
 *
 * The 56-row contribution table below (8 contributors × 7 target planets)
 * is classical data from Brihat Parashara Hora Shastra, not a derived
 * calculation — transcribed carefully and checked against the one
 * structural invariant every source agrees on: the total bindus across
 * all 56 rows, and therefore across a full Sarvashtakavarga, is exactly
 * 337 (`assertSarvashtakavargaInvariant` / the Phase 9 verification
 * script check this directly). Every one of the seven "planet contributes
 * to itself" rows also matches the same self-contribution houses used
 * independently for the Panchamahapurusha kendra logic elsewhere in this
 * codebase, which was a second cross-check during transcription.
 */
export type AshtakavargaContributor =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Lagna";

export type AshtakavargaPlanet = Exclude<AshtakavargaContributor, "Lagna">;

const ASHTAKAVARGA_PLANETS: readonly AshtakavargaPlanet[] = [
  "Sun",
  "Moon",
  "Mars",
  "Mercury",
  "Jupiter",
  "Venus",
  "Saturn",
];

/** Houses (1-based, counted from the contributor's own sign) that receive
 * a bindu, for each contributor → target-planet pair. */
const BINDU_TABLE: Record<AshtakavargaContributor, Record<AshtakavargaPlanet, readonly number[]>> = {
  Sun: {
    Sun: [1, 2, 4, 7, 8, 9, 10, 11],
    Moon: [3, 6, 7, 8, 10, 11],
    Mars: [3, 5, 6, 10, 11],
    Mercury: [5, 6, 9, 11, 12],
    Jupiter: [1, 2, 3, 4, 7, 8, 9, 10, 11],
    Venus: [8, 11, 12],
    Saturn: [1, 2, 4, 7, 8, 10, 11],
  },
  Moon: {
    Sun: [3, 6, 10, 11],
    Moon: [1, 3, 6, 7, 10, 11],
    Mars: [3, 6, 11],
    Mercury: [2, 4, 6, 8, 10, 11],
    Jupiter: [2, 5, 7, 9, 11],
    Venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
    Saturn: [3, 6, 11],
  },
  Mars: {
    Sun: [1, 2, 4, 7, 8, 9, 10, 11],
    Moon: [2, 3, 5, 6, 9, 10, 11],
    Mars: [1, 2, 4, 7, 8, 10, 11],
    Mercury: [1, 2, 4, 7, 8, 9, 10, 11],
    Jupiter: [1, 2, 4, 7, 8, 10, 11],
    Venus: [3, 5, 6, 9, 11, 12],
    Saturn: [3, 5, 6, 10, 11, 12],
  },
  Mercury: {
    Sun: [3, 5, 6, 9, 10, 11, 12],
    Moon: [1, 3, 4, 5, 7, 8, 10, 11],
    Mars: [3, 5, 6, 11],
    Mercury: [1, 3, 5, 6, 9, 10, 11, 12],
    Jupiter: [1, 2, 4, 5, 6, 9, 10, 11],
    Venus: [3, 5, 6, 9, 11],
    Saturn: [6, 8, 9, 10, 11, 12],
  },
  Jupiter: {
    Sun: [5, 6, 9, 11],
    Moon: [1, 4, 7, 8, 10, 11, 12],
    Mars: [6, 10, 11, 12],
    Mercury: [6, 8, 11, 12],
    Jupiter: [1, 2, 3, 4, 7, 8, 10, 11],
    Venus: [5, 8, 9, 10, 11],
    Saturn: [5, 6, 11, 12],
  },
  Venus: {
    Sun: [6, 7, 12],
    Moon: [3, 4, 5, 7, 9, 10, 11],
    Mars: [6, 8, 11, 12],
    Mercury: [1, 2, 3, 4, 5, 8, 9, 11],
    Jupiter: [2, 5, 6, 9, 10, 11],
    Venus: [1, 2, 3, 4, 5, 8, 9, 10, 11],
    Saturn: [3, 4, 5, 8, 9, 10, 11],
  },
  Saturn: {
    Sun: [1, 2, 4, 7, 8, 9, 10, 11],
    Moon: [3, 5, 6, 11],
    Mars: [1, 4, 7, 8, 9, 10, 11],
    Mercury: [1, 2, 4, 7, 8, 9, 10, 11],
    Jupiter: [3, 5, 6, 12],
    Venus: [6, 11, 12],
    Saturn: [3, 5, 6, 11],
  },
  Lagna: {
    Sun: [3, 4, 6, 10, 11, 12],
    Moon: [3, 6, 10, 11],
    Mars: [1, 3, 6, 10, 11],
    Mercury: [1, 2, 4, 6, 8, 10, 11],
    Jupiter: [1, 2, 4, 5, 6, 7, 9, 10, 11],
    Venus: [1, 2, 3, 4, 5, 8, 9, 11],
    Saturn: [1, 3, 4, 6, 10, 11],
  },
};

export interface AshtakavargaResult {
  /** One 12-entry bindu array per planet, indexed by `RASHIS`. */
  bhinnashtakavarga: Record<AshtakavargaPlanet, number[]>;
  /** The seven BAVs summed sign-by-sign — classically totals 337. */
  sarvashtakavarga: number[];
  sarvashtakavargaTotal: number;
}

function contributorSign(data: ChartData, contributor: AshtakavargaContributor): Rashi | null {
  const raw = contributor === "Lagna"
    ? data.ascendant_sign
    : data.planets.find((p) => p.name === contributor)?.sign;
  if (!raw) return null;
  const idx = rashiIndex(raw);
  return idx >= 0 ? RASHIS[idx] : null;
}

/**
 * Bhinnashtakavarga for one target planet: for each of the eight
 * contributors, mark a bindu in every sign that falls in one of the
 * contributor's benefic houses (counted from the contributor's own sign).
 */
function computeBhinnashtakavarga(data: ChartData, target: AshtakavargaPlanet): number[] {
  const bindus = new Array(12).fill(0);
  for (const contributor of Object.keys(BINDU_TABLE) as AshtakavargaContributor[]) {
    const sign = contributorSign(data, contributor);
    if (!sign) continue;
    const fromIdx = rashiIndex(sign);
    for (const house of BINDU_TABLE[contributor][target]) {
      const signIdx = (fromIdx + house - 1) % 12;
      bindus[signIdx] += 1;
    }
  }
  return bindus;
}

export function computeAshtakavarga(data: ChartData): AshtakavargaResult {
  const bhinnashtakavarga = Object.fromEntries(
    ASHTAKAVARGA_PLANETS.map((planet) => [planet, computeBhinnashtakavarga(data, planet)]),
  ) as Record<AshtakavargaPlanet, number[]>;

  const sarvashtakavarga = new Array(12).fill(0);
  for (const planet of ASHTAKAVARGA_PLANETS) {
    for (let sign = 0; sign < 12; sign++) {
      sarvashtakavarga[sign] += bhinnashtakavarga[planet][sign];
    }
  }

  return {
    bhinnashtakavarga,
    sarvashtakavarga,
    sarvashtakavargaTotal: sarvashtakavarga.reduce((sum, n) => sum + n, 0),
  };
}
