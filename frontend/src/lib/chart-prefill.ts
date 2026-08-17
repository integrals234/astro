import type { ChartFormData } from "./chart-types";

/**
 * Prefill contract for handing birth details to /chart as query params.
 *
 * The homepage's vertical report and the tool landing pages
 * (`VerticalChartReport`, `ChartSectionResult`) each compute and draw their
 * own chart inline now, so this is no longer the primary path into /chart —
 * it survives as the "open the full workspace" link from those pages, and
 * for any other shareable prefilled link. Keeping the param names in one
 * module means every producer and the one consumer cannot drift apart.
 */
export const CHART_PREFILL_KEYS = {
  name: "name",
  date: "date",
  time: "time",
  lat: "lat",
  lon: "lon",
  place: "place",
} as const;

export interface ChartPrefill {
  name: string;
  /** `YYYY-MM-DD` */
  date: string;
  /** `HH:MM` */
  time: string;
  latitude: number;
  longitude: number;
  place: string;
}

export function buildChartPrefillQuery(prefill: ChartPrefill): string {
  const params = new URLSearchParams({
    [CHART_PREFILL_KEYS.date]: prefill.date,
    [CHART_PREFILL_KEYS.time]: prefill.time,
    [CHART_PREFILL_KEYS.lat]: String(prefill.latitude),
    [CHART_PREFILL_KEYS.lon]: String(prefill.longitude),
    [CHART_PREFILL_KEYS.place]: prefill.place,
  });
  if (prefill.name.trim()) {
    params.set(CHART_PREFILL_KEYS.name, prefill.name.trim());
  }
  return params.toString();
}

export interface ParsedChartPrefill {
  name: string;
  place: string;
  formPatch: Pick<
    ChartFormData,
    "year" | "month" | "day" | "hour" | "minute" | "latitude" | "longitude"
  >;
}

/**
 * Returns null unless every field needed to compute a chart is present and
 * numeric — a partial prefill must leave the workspace on its own defaults
 * rather than half-applying.
 */
export function parseChartPrefill(
  params: URLSearchParams,
): ParsedChartPrefill | null {
  const date = params.get(CHART_PREFILL_KEYS.date);
  const time = params.get(CHART_PREFILL_KEYS.time);
  const lat = Number(params.get(CHART_PREFILL_KEYS.lat));
  const lon = Number(params.get(CHART_PREFILL_KEYS.lon));
  const place = params.get(CHART_PREFILL_KEYS.place) ?? "";

  if (!date || !time || !place) return null;
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  if (![year, month, day, hour, minute].every(Number.isFinite)) return null;

  return {
    name: params.get(CHART_PREFILL_KEYS.name) ?? "",
    place,
    formPatch: {
      year,
      month,
      day,
      hour,
      minute,
      latitude: lat,
      longitude: lon,
    },
  };
}
