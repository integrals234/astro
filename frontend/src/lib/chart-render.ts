import type { ChartData } from "@/lib/chart-types";

/**
 * Chart-data → `KundliChart`-props mapping, for the three views used outside
 * the main workspace: Lagna (D1), Chandra (Moon-based), and Gochar (transit).
 *
 * Deliberately a byte-for-byte port of the equivalent branches in
 * `ChartWorkspace`'s internal `getRenderData` rather than a shared import —
 * that function also carries D9/Chalit branches and workspace-local state
 * (`gocharBase`) this module has no business depending on, and duplicating
 * ~20 lines of pure geometry is a smaller risk than coupling a homepage
 * preview to the main workspace's internals. If the house-mapping rules ever
 * change, both copies need the same edit; there are only two.
 */
export const SIGN_TO_NUMBER: Record<string, number> = {
  Aries: 1, Taurus: 2, Gemini: 3, Cancer: 4, Leo: 5, Virgo: 6,
  Libra: 7, Scorpio: 8, Sagittarius: 9, Capricorn: 10, Aquarius: 11, Pisces: 12,
};

function integerDegree(raw: number): number {
  return Math.floor(raw % 30);
}

export interface RenderPlanet {
  name: string;
  enName: string;
  house: number;
  degree: number;
  isRetrograde: boolean;
  sign: string;
}

export interface ChartViewData {
  planets: RenderPlanet[];
  transitPlanets: RenderPlanet[];
  ascendantSign: string;
}

export type ChartView = "lagna" | "moon" | "gochar";

function mapPlanet(
  p: ChartData["planets"][number],
  house: number,
  displayName: string,
): RenderPlanet {
  return {
    name: displayName,
    enName: p.name,
    house,
    degree: integerDegree(p.longitude),
    isRetrograde:
      p.name === "Rahu" || p.name === "Ketu" ? true : Boolean(p.is_retrograde),
    sign: p.sign,
  };
}

function mapTransit(
  p: ChartData["transit_planets"][number],
  house: number,
  displayName: string,
): RenderPlanet {
  return {
    name: displayName,
    enName: p.name,
    house,
    degree: integerDegree(p.longitude),
    isRetrograde:
      p.name === "Rahu" || p.name === "Ketu" ? true : Boolean(p.is_retrograde),
    sign: p.sign,
  };
}

/**
 * @param planetNames Localised planet names, keyed by the engine's English name.
 */
export function chartView(
  data: ChartData,
  view: ChartView,
  planetNames: Record<string, string>,
): ChartViewData {
  const name = (enName: string) => planetNames[enName] ?? enName;

  if (view === "lagna") {
    return {
      planets: data.planets.map((p) => mapPlanet(p, p.d1_house, name(p.name))),
      transitPlanets: [],
      ascendantSign: data.ascendant_sign,
    };
  }

  if (view === "moon") {
    const moon = data.planets.find((p) => p.name === "Moon");
    const moonHouse = moon ? moon.d1_house : 1;
    return {
      planets: data.planets.map((p) =>
        mapPlanet(p, ((p.d1_house - moonHouse + 12) % 12) + 1, name(p.name)),
      ),
      transitPlanets: [],
      ascendantSign: moon ? moon.sign : "Aries",
    };
  }

  // Gochar, anchored on the ascendant (Lagna-based transit view).
  const anchorNum = SIGN_TO_NUMBER[data.ascendant_sign] || 1;
  return {
    planets: data.planets.map((p) =>
      mapPlanet(
        p,
        ((SIGN_TO_NUMBER[p.sign] - anchorNum + 12) % 12) + 1,
        name(p.name),
      ),
    ),
    transitPlanets: data.transit_planets.map((p) =>
      mapTransit(
        p,
        ((SIGN_TO_NUMBER[p.sign] - anchorNum + 12) % 12) + 1,
        name(p.name),
      ),
    ),
    ascendantSign: data.ascendant_sign,
  };
}
