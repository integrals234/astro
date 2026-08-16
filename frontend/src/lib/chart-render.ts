import type { ChartData } from "@/lib/chart-types";
import { getIntegerDegree, NUMBER_TO_SIGN, SIGN_TO_NUMBER } from "@/lib/chart-format";

/**
 * Chart-data → `KundliChart`-props mapping, for every view the site renders:
 * Lagna (D1), Navamsha (D9), Chalit, Chandra (Moon-based), and Gochar
 * (transit).
 *
 * Previously this handled only lagna/moon/gochar, as a deliberate duplicate
 * of `ChartWorkspace`'s internal `getRenderData` — which also handled D9 and
 * Chalit. That duplication is now resolved by widening this module to be the
 * only projection and deleting the workspace's private copy. The merge
 * carries three deltas from the original three-view version, each verified
 * against `getRenderData` on real computed charts before the workspace was
 * switched over:
 *
 * 1. `mapPlanet` now takes a `customSign` override. For lagna/moon/gochar
 *    this is always `p.sign` — behaviourally identical to before. D9 passes
 *    `p.d9_sign`; Chalit passes a sign recomputed from the ascendant plus the
 *    Chalit house offset. Get this wrong and planets land in the wrong cells
 *    on the South Indian chart specifically, on the D9/Chalit views only —
 *    the North Indian chart doesn't use `sign` for cell placement, so a bug
 *    here would ship invisibly on half the chart styles.
 * 2. `gocharBase` — Gochar can anchor transits on the Lagna or the Moon sign.
 *    Default `"lagna"` matches the original three-view behaviour exactly.
 * 3. `showAscendant`/`ascendantDegree` are derived once, here, rather than by
 *    each consumer re-deriving `activeTab === 'D1' || activeTab === 'Gochar'`
 *    (or the view-based equivalent) independently.
 */
export type ChartView = "lagna" | "d9" | "chalit" | "moon" | "gochar";

export interface ChartViewOptions {
  /** Which point Gochar anchors transits on. Default `"lagna"`. */
  gocharBase?: "lagna" | "moon";
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
  /** True for the two views where the Lagna marker belongs in house 1. */
  showAscendant: boolean;
  ascendantDegree: number;
}

function mapPlanet(
  p: ChartData["planets"][number],
  house: number,
  displayName: string,
  customSign?: string,
): RenderPlanet {
  return {
    name: displayName,
    enName: p.name,
    house,
    degree: getIntegerDegree(p.longitude),
    isRetrograde:
      p.name === "Rahu" || p.name === "Ketu" ? true : Boolean(p.is_retrograde),
    sign: customSign ?? p.sign,
  };
}

function mapTransit(
  p: ChartData["transit_planets"][number],
  house: number,
  displayName: string,
  customSign?: string,
): RenderPlanet {
  return {
    name: displayName,
    enName: p.name,
    house,
    degree: getIntegerDegree(p.longitude),
    isRetrograde:
      p.name === "Rahu" || p.name === "Ketu" ? true : Boolean(p.is_retrograde),
    sign: customSign ?? p.sign,
  };
}

/**
 * @param planetNames Localised planet names, keyed by the engine's English name.
 */
export function chartView(
  data: ChartData,
  view: ChartView,
  planetNames: Record<string, string>,
  options: ChartViewOptions = {},
): ChartViewData {
  const name = (enName: string) => planetNames[enName] ?? enName;
  const ascendantDegree = getIntegerDegree(data.ascendant_longitude);

  if (view === "lagna") {
    return {
      planets: data.planets.map((p) => mapPlanet(p, p.d1_house, name(p.name))),
      transitPlanets: [],
      ascendantSign: data.ascendant_sign,
      showAscendant: true,
      ascendantDegree,
    };
  }

  if (view === "d9") {
    const ascNum = SIGN_TO_NUMBER[data.d9_ascendant_sign];
    return {
      // p.d9_sign moves each planet to its Navamsha sign, not its D1 sign.
      planets: data.planets.map((p) =>
        mapPlanet(
          p,
          ((SIGN_TO_NUMBER[p.d9_sign] - ascNum + 12) % 12) + 1,
          name(p.name),
          p.d9_sign,
        ),
      ),
      transitPlanets: [],
      ascendantSign: data.d9_ascendant_sign,
      showAscendant: false,
      ascendantDegree,
    };
  }

  if (view === "chalit") {
    const ascNum = SIGN_TO_NUMBER[data.ascendant_sign];
    return {
      planets: data.planets.map((p) => {
        // Which physical zodiac sign the Chalit house falls into.
        let newSignNum = ascNum + (p.chalit_house - 1);
        if (newSignNum > 12) newSignNum -= 12;
        return mapPlanet(
          p,
          p.chalit_house,
          name(p.name),
          NUMBER_TO_SIGN[newSignNum],
        );
      }),
      transitPlanets: [],
      ascendantSign: data.ascendant_sign,
      showAscendant: false,
      ascendantDegree,
    };
  }

  if (view === "moon") {
    const moon = data.planets.find((p) => p.name === "Moon");
    const moonHouse = moon ? moon.d1_house : 1;
    return {
      // South Indian Chandra charts keep planets in their D1 signs; only the
      // Ascendant marker moves.
      planets: data.planets.map((p) =>
        mapPlanet(p, ((p.d1_house - moonHouse + 12) % 12) + 1, name(p.name)),
      ),
      transitPlanets: [],
      ascendantSign: moon ? moon.sign : "Aries",
      showAscendant: false,
      ascendantDegree,
    };
  }

  // Gochar.
  let anchorSign = data.ascendant_sign;
  if (options.gocharBase === "moon") {
    const moon = data.planets.find((p) => p.name === "Moon");
    if (moon) anchorSign = moon.sign;
  }
  const anchorNum = SIGN_TO_NUMBER[anchorSign] || 1;
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
    ascendantSign: anchorSign,
    showAscendant: true,
    ascendantDegree,
  };
}
