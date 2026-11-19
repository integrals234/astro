/**
 * Engine names → programmatic entity URLs (Phase 3.5 routes). The entity ids
 * are the engine's English names, lower-cased and hyphenated, so no lookup
 * table (and none of the large education content modules) is needed in the
 * client bundle just to build a link.
 */
const slug = (name: string) => name.trim().toLowerCase().replace(/\s+/g, "-");

export const nakshatraHref = (engineName: string) => `/nakshatras/${slug(engineName)}`;
export const rashiHref = (sign: string) => `/rashis/${slug(sign)}`;
export const grahaHref = (planet: string) => `/grahas/${slug(planet)}`;

/** Localised label from one of the chart-i18n maps (signs, nakshatras,
 * planets), falling back to the engine's English name. */
export const tr = (map: object, key: string): string =>
  (map as Record<string, string | undefined>)[key] ?? key;
