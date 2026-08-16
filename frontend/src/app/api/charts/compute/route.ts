import { NextResponse, after } from "next/server";
import { prisma } from "@/lib/prisma";
import type { ChartFormData } from "@/lib/chart-types";
import {
  CHART_CACHE_TTL_MS,
  backendUrl,
  chartCacheKey,
} from "@/lib/chart-compute";

export const runtime = "nodejs";

/**
 * Server-side proxy for chart computation.
 *
 * Previously the browser called the Render service directly, which made the
 * backend origin public (hence `allow_origins=["*"]`) and recomputed identical
 * requests on every page load. Proxying fixes both, and gives the AI explainer
 * a server-side place to read the same chart facts later.
 */
function isValidForm(value: unknown): value is ChartFormData {
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
    "transit_year",
    "transit_month",
    "transit_day",
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
      { error: "Invalid chart form data" },
      { status: 422 },
    );
  }

  const key = await chartCacheKey(body);

  try {
    const cached = await prisma.chartCache.findUnique({ where: { key } });
    if (cached && Date.now() - cached.createdAt.getTime() < CHART_CACHE_TTL_MS) {
      return NextResponse.json(cached.chartData, {
        headers: { "x-chart-cache": "hit" },
      });
    }
  } catch (error) {
    // A cache outage must degrade to a slow chart, never to no chart.
    console.error("[chart-compute] cache read failed", error);
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${backendUrl()}/api/v1/compute-charts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // Generous: a spun-down dyno can take ~30s to answer, and failing early
      // would turn a slow chart into a broken one.
      signal: AbortSignal.timeout(60_000),
    });
  } catch (error) {
    console.error("[chart-compute] upstream unreachable", error);
    return NextResponse.json(
      { error: "Chart engine unavailable" },
      { status: 503 },
    );
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Chart computation failed" },
      { status: upstream.status === 422 ? 422 : 502 },
    );
  }

  const chartData = await upstream.json();

  // `after()` rather than a floating promise: on Vercel the function is frozen
  // once the response is sent, so `void (async …)` would have its cache write
  // killed mid-flight and every request would miss forever.
  after(async () => {
    try {
      await prisma.chartCache.upsert({
        where: { key },
        create: { key, chartData },
        update: { chartData, createdAt: new Date() },
      });
      await prisma.chartCache.deleteMany({
        where: { createdAt: { lt: new Date(Date.now() - CHART_CACHE_TTL_MS) } },
      });
    } catch (error) {
      console.error("[chart-compute] cache write failed", error);
    }
  });

  return NextResponse.json(chartData, {
    headers: { "x-chart-cache": "miss" },
  });
}
