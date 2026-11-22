/**
 * Where the planets really are — for the home page's solar system.
 *
 * Heliocentric positions from JPL's "approximate positions of the planets"
 * Keplerian elements (Standish, valid 1800–2050, ~1′ for the inner planets,
 * a few ′ for Jupiter and Saturn), and from those the geocentric *sidereal*
 * longitudes (Lahiri) of the nine grahas: the seven bodies plus Rahu and
 * Ketu, the Moon's mean nodes. Sun and Moon reuse the quick-sky series.
 *
 * Accuracy is a degree or better — right for a picture of the sky, never
 * presented as the chart (the engine computes that).
 */
import { julianDay, lahiri, moonTropical, sunTropical } from "./quick-sky";

const DEG = Math.PI / 180;
const norm = (deg: number) => ((deg % 360) + 360) % 360;

export type Planet = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn";
export type Graha = "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter" | "Venus" | "Saturn" | "Rahu" | "Ketu";

export const GRAHAS: readonly Graha[] = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

/** a (AU), e, I, L, ϖ (long. perihelion), Ω (long. node) — value and rate per Julian century. */
const ELEMENTS: Record<Planet, [number, number][]> = {
  Mercury: [[0.38709927, 0.00000037], [0.20563593, 0.00001906], [7.00497902, -0.00594749], [252.2503235, 149472.67411175], [77.45779628, 0.16047689], [48.33076593, -0.12534081]],
  Venus: [[0.72333566, 0.0000039], [0.00677672, -0.00004107], [3.39467605, -0.0007889], [181.9790995, 58517.81538729], [131.60246718, 0.00268329], [76.67984255, -0.27769418]],
  Earth: [[1.00000261, 0.00000562], [0.01671123, -0.00004392], [-0.00001531, -0.01294668], [100.46457166, 35999.37244981], [102.93768193, 0.32327364], [0, 0]],
  Mars: [[1.52371034, 0.00001847], [0.0933941, 0.00007882], [1.84969142, -0.00813131], [-4.55343205, 19140.30268499], [-23.94362959, 0.44441088], [49.55953891, -0.29257343]],
  Jupiter: [[5.202887, -0.00011607], [0.04838624, -0.00013253], [1.30439695, -0.00183714], [34.39644051, 3034.74612775], [14.72847983, 0.21252668], [100.47390909, 0.20469106]],
  Saturn: [[9.53667594, -0.0012506], [0.05386179, -0.00050991], [2.48599187, 0.00193609], [49.95424423, 1222.49362201], [92.59887831, -0.41897216], [113.66242448, -0.28867794]],
};

export const PLANETS = Object.keys(ELEMENTS) as Planet[];

/** Julian centuries since J2000 for a JS Date (UTC). */
export function centuries(date: Date): number {
  const jd = julianDay(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600,
  );
  return (jd - 2451545.0) / 36525;
}

/** Heliocentric ecliptic coordinates (AU, J2000 ecliptic). */
export function heliocentric(planet: Planet, t: number): { x: number; y: number; z: number } {
  const [a, e, I, L, w, O] = ELEMENTS[planet].map(([v, r]) => v + r * t);
  const omega = w - O; // argument of perihelion
  let M = norm(L - w);
  if (M > 180) M -= 360;
  // Kepler's equation, Newton iterations in degrees (JPL's recipe).
  const eStar = e / DEG;
  let E = M + eStar * Math.sin(M * DEG);
  for (let i = 0; i < 6; i++) {
    const dM = M - (E - eStar * Math.sin(E * DEG));
    const dE = dM / (1 - e * Math.cos(E * DEG));
    E += dE;
    if (Math.abs(dE) < 1e-6) break;
  }
  const xp = a * (Math.cos(E * DEG) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E * DEG);
  const co = Math.cos(omega * DEG);
  const so = Math.sin(omega * DEG);
  const cO = Math.cos(O * DEG);
  const sO = Math.sin(O * DEG);
  const cI = Math.cos(I * DEG);
  const sI = Math.sin(I * DEG);
  return {
    x: (co * cO - so * sO * cI) * xp + (-so * cO - co * sO * cI) * yp,
    y: (co * sO + so * cO * cI) * xp + (-so * sO + co * cO * cI) * yp,
    z: so * sI * xp + co * sI * yp,
  };
}

/** Mean longitude of the Moon's ascending node (Rahu), tropical degrees. */
function meanNode(t: number): number {
  return norm(125.04452 - 1934.136261 * t + 0.0020708 * t * t);
}

/** Geocentric sidereal (Lahiri) longitude of every graha, degrees 0–360. */
export function grahaLongitudes(t: number): Record<Graha, number> {
  const ayan = lahiri(t);
  const earth = heliocentric("Earth", t);
  const geo = (p: Planet) => {
    const h = heliocentric(p, t);
    return norm(Math.atan2(h.y - earth.y, h.x - earth.x) / DEG - ayan);
  };
  const rahu = norm(meanNode(t) - ayan);
  return {
    Sun: norm(sunTropical(t) - ayan),
    Moon: norm(moonTropical(t) - ayan),
    Mars: geo("Mars"),
    Mercury: geo("Mercury"),
    Jupiter: geo("Jupiter"),
    Venus: geo("Venus"),
    Saturn: geo("Saturn"),
    Rahu: rahu,
    Ketu: norm(rahu + 180),
  };
}

/** The ayanamsha at `t`, degrees: where sidereal 0° Aries sits in the tropical frame. */
export function ayanamsha(t: number): number {
  return lahiri(t);
}
