import type { ChartData, Planet } from "@/lib/chart-types";
import { SIGN_LORDS, type Rashi } from "./nakshatra-data";

/**
 * Yogas and doshas — planetary combinations classical Jyotish reads as
 * distinct from a chart's ordinary planet-by-planet placements.
 *
 * Every rule here is a pure function of data `/api/charts/compute` already
 * returns (`d1_house`, `sign`, `dignity`, `longitude`), so — like Ashtakoot —
 * this needs no backend work. Each hit carries its evidence (which planet,
 * which house) rather than just a name, since a bare "Gaja Kesari Yoga:
 * present" is indistinguishable from a horoscope generator; showing *why*
 * is what makes it a chart reading.
 */
export type YogaSeverity = "positive" | "caution" | "neutral";

export interface YogaEvidence {
  planet?: string;
  house?: number;
  sign?: string;
}

export interface YogaHit {
  id: YogaId;
  severity: YogaSeverity;
  evidence: YogaEvidence[];
}

export type YogaId =
  | "mangalDosha"
  | "kaalSarp"
  | "gajaKesari"
  | "budhaditya"
  | "chandraMangala"
  | "neechaBhangaRuchaka"
  | "panchamahapurushaRuchaka"
  | "panchamahapurushaBhadra"
  | "panchamahapurushaHamsa"
  | "panchamahapurushaMalavya"
  | "panchamahapurushaSasha";

const KENDRA_HOUSES = [1, 4, 7, 10];
const MANGAL_HOUSES = [1, 2, 4, 7, 8, 12];

function findPlanet(data: ChartData, name: string): Planet | undefined {
  return data.planets.find((p) => p.name === name);
}

/** Houses-from-Moon count, 1-based (1 = same sign as Moon). */
function houseFromMoon(moon: Planet, target: Planet): number {
  return ((target.d1_house - moon.d1_house + 12) % 12) + 1;
}

/** Mars in house 1, 2, 4, 7, 8 or 12 from the Lagna. The classical base rule
 * — some traditions additionally check from Moon and Venus, out of scope
 * here. */
function detectMangalDosha(data: ChartData): YogaHit | null {
  const mars = findPlanet(data, "Mars");
  if (!mars || !MANGAL_HOUSES.includes(mars.d1_house)) return null;
  return {
    id: "mangalDosha",
    severity: "caution",
    evidence: [{ planet: "Mars", house: mars.d1_house }],
  };
}

/** All seven classical grahas fall on one side of the Rahu–Ketu axis. */
function detectKaalSarp(data: ChartData): YogaHit | null {
  const rahu = findPlanet(data, "Rahu");
  if (!rahu) return null;
  const others = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"]
    .map((name) => findPlanet(data, name))
    .filter((p): p is Planet => p !== undefined);
  if (others.length < 7) return null;

  const forwardFromRahu = others.map((p) => (p.longitude - rahu.longitude + 360) % 360);
  const allOneSide = forwardFromRahu.every((d) => d < 180) || forwardFromRahu.every((d) => d > 180);
  if (!allOneSide) return null;

  return { id: "kaalSarp", severity: "caution", evidence: [{ planet: "Rahu" }] };
}

/** Jupiter in a kendra (1st/4th/7th/10th) from the Moon. */
function detectGajaKesari(data: ChartData): YogaHit | null {
  const moon = findPlanet(data, "Moon");
  const jupiter = findPlanet(data, "Jupiter");
  if (!moon || !jupiter) return null;
  if (!KENDRA_HOUSES.includes(houseFromMoon(moon, jupiter))) return null;
  return {
    id: "gajaKesari",
    severity: "positive",
    evidence: [{ planet: "Jupiter", house: jupiter.d1_house }],
  };
}

/** Sun and Mercury conjunct in the same sign. */
function detectBudhaditya(data: ChartData): YogaHit | null {
  const sun = findPlanet(data, "Sun");
  const mercury = findPlanet(data, "Mercury");
  if (!sun || !mercury || sun.sign !== mercury.sign) return null;
  return {
    id: "budhaditya",
    severity: "positive",
    evidence: [{ planet: "Sun", sign: sun.sign }, { planet: "Mercury", sign: mercury.sign }],
  };
}

/** Moon and Mars conjunct in the same sign — a wealth-generating yoga. */
function detectChandraMangala(data: ChartData): YogaHit | null {
  const moon = findPlanet(data, "Moon");
  const mars = findPlanet(data, "Mars");
  if (!moon || !mars || moon.sign !== mars.sign) return null;
  return {
    id: "chandraMangala",
    severity: "positive",
    evidence: [{ planet: "Moon", sign: moon.sign }, { planet: "Mars", sign: mars.sign }],
  };
}

/**
 * Neecha Bhanga Raja Yoga — debilitation cancelled.
 *
 * Classical texts list several independent cancellation conditions; this
 * checks one of the most commonly cited (the debilitated planet's sign
 * lord stands in a kendra from the Lagna), not the full rule set. Reported
 * as a cancellation of Mangal-Dosha-style caution, not as its own yoga id,
 * since what it actually says is "the debilitation below is weaker than it
 * looks" rather than a new placement.
 */
function detectNeechaBhanga(data: ChartData): YogaHit | null {
  const debilitated = data.planets.find((p) => p.dignity === "Debilitated");
  if (!debilitated) return null;
  const lordName = SIGN_LORDS[debilitated.sign as Rashi];
  const lord = lordName ? findPlanet(data, lordName) : undefined;
  if (!lord || !KENDRA_HOUSES.includes(lord.d1_house)) return null;
  return {
    id: "neechaBhangaRuchaka",
    severity: "positive",
    evidence: [
      { planet: debilitated.name, sign: debilitated.sign },
      { planet: lordName, house: lord.d1_house },
    ],
  };
}

const PANCHAMAHAPURUSHA: Record<string, { planet: string; id: YogaId }> = {
  Mars: { planet: "Mars", id: "panchamahapurushaRuchaka" },
  Mercury: { planet: "Mercury", id: "panchamahapurushaBhadra" },
  Jupiter: { planet: "Jupiter", id: "panchamahapurushaHamsa" },
  Venus: { planet: "Venus", id: "panchamahapurushaMalavya" },
  Saturn: { planet: "Saturn", id: "panchamahapurushaSasha" },
};

/** One of the five Panchamahapurusha yogas: the relevant planet in a kendra
 * from the Lagna, in its own sign or exalted. */
function detectPanchamahapurusha(data: ChartData): YogaHit[] {
  const hits: YogaHit[] = [];
  for (const { planet: name, id } of Object.values(PANCHAMAHAPURUSHA)) {
    const planet = findPlanet(data, name);
    if (!planet) continue;
    if (!KENDRA_HOUSES.includes(planet.d1_house)) continue;
    if (planet.dignity !== "Own Sign" && planet.dignity !== "Exalted") continue;
    hits.push({
      id,
      severity: "positive",
      evidence: [{ planet: name, house: planet.d1_house, sign: planet.sign }],
    });
  }
  return hits;
}

/** Every yoga/dosha this chart carries. Order is display order. */
export function detectYogas(data: ChartData): YogaHit[] {
  const hits: (YogaHit | null)[] = [
    detectMangalDosha(data),
    detectKaalSarp(data),
    detectGajaKesari(data),
    detectBudhaditya(data),
    detectChandraMangala(data),
    detectNeechaBhanga(data),
    ...detectPanchamahapurusha(data),
  ];
  return hits.filter((h): h is YogaHit => h !== null);
}
