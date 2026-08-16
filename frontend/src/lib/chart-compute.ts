import type { ChartFormData } from "@/lib/chart-types";

/** Where the Python ephemeris service lives. */
export function backendUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

/**
 * Cache key for a chart request.
 *
 * Field order is fixed rather than taken from `Object.keys`, so a client that
 * serialises the form differently still hits the same row. Transit date is part
 * of the key because the response embeds transit positions — dropping it would
 * serve yesterday's sky.
 */
export async function chartCacheKey(form: ChartFormData): Promise<string> {
  const canonical = [
    form.year,
    form.month,
    form.day,
    form.hour,
    form.minute,
    // Coordinates are floats from a geocoder; rounding to ~11 m keeps
    // imperceptible jitter from fragmenting the cache.
    form.latitude.toFixed(4),
    form.longitude.toFixed(4),
    form.transit_year,
    form.transit_month,
    form.transit_day,
  ].join("|");

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(canonical),
  );
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Cached charts older than this are pruned and treated as misses. */
export const CHART_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
