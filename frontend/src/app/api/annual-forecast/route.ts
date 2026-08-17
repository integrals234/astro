import { NextResponse } from "next/server";
import { backendUrl } from "@/lib/chart-compute";

export const runtime = "nodejs";

/**
 * Server-side proxy for the Varshaphala (solar return) endpoint.
 *
 * `/api/v1/annual-forecast` is new backend code that has not been deployed
 * yet (see backend/server.py) — this route will 502 against the live
 * Render service until that ships. No caching here yet, unlike
 * /api/charts/compute: this isn't a hot path the way chart computation is,
 * and adding one is easy to do later against real traffic rather than
 * guessing now.
 */
interface AnnualForecastForm {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  latitude: number;
  longitude: number;
  target_year: number;
}

function isValidForm(value: unknown): value is AnnualForecastForm {
  if (typeof value !== "object" || value === null) return false;
  const f = value as Record<string, unknown>;
  const required = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "latitude",
    "longitude",
    "target_year",
  ];
  return required.every((k) => typeof f[k] === "number" && Number.isFinite(f[k]));
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidForm(body)) {
    return NextResponse.json(
      { error: "Invalid annual forecast request" },
      { status: 422 },
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${backendUrl()}/api/v1/annual-forecast`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(60_000),
    });
  } catch (error) {
    console.error("[annual-forecast] upstream unreachable", error);
    return NextResponse.json(
      { error: "Forecast engine unavailable" },
      { status: 503 },
    );
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Annual forecast computation failed" },
      { status: upstream.status === 422 ? 422 : 502 },
    );
  }

  return NextResponse.json(await upstream.json());
}
