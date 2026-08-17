import { NextResponse } from "next/server";
import { backendUrl } from "@/lib/chart-compute";

export const runtime = "nodejs";

/**
 * Server-side proxy for the Panchang (tithi/nakshatra/yoga/karana) endpoint.
 *
 * `/api/v1/panchang` is new backend code that has not been deployed yet
 * (see backend/server.py) — this route will 502 against the live Render
 * service until that ships. Deliberately does not return Rokuyo — see the
 * backend comment for why that's separate follow-up work.
 */
interface PanchangForm {
  year: number;
  month: number;
  day: number;
  latitude: number;
  longitude: number;
}

function isValidForm(value: unknown): value is PanchangForm {
  if (typeof value !== "object" || value === null) return false;
  const f = value as Record<string, unknown>;
  const required = ["year", "month", "day", "latitude", "longitude"];
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
    return NextResponse.json({ error: "Invalid panchang request" }, { status: 422 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${backendUrl()}/api/v1/panchang`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(60_000),
    });
  } catch (error) {
    console.error("[panchang] upstream unreachable", error);
    return NextResponse.json({ error: "Panchang engine unavailable" }, { status: 503 });
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Panchang computation failed" },
      { status: upstream.status === 422 ? 422 : 502 },
    );
  }

  return NextResponse.json(await upstream.json());
}
