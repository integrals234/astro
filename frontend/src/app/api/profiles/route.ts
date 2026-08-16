import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { isCompleteNatalInput, type BirthProfile } from "@/lib/profile/types";

export const runtime = "nodejs";

/**
 * Birth profiles for the signed-in user.
 *
 * POST is a merge, not a replace: the client sends whatever it accumulated
 * while signed out, and the server folds it into the account. That is what
 * makes signing in non-destructive — someone who built three charts as a guest
 * keeps all three.
 */
type StoredBirth = BirthProfile["birth"];

function serialise(row: {
  id: string;
  label: string;
  locationName: string;
  birth: unknown;
  isPrimary: boolean;
  createdAt: Date;
}): BirthProfile | null {
  if (!isCompleteNatalInput(row.birth)) return null;
  return {
    id: row.id,
    label: row.label,
    locationName: row.locationName,
    birth: row.birth,
    isPrimary: row.isPrimary,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await prisma.birthProfile.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(rows.map(serialise).filter(Boolean));
}

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const incoming = (body as { profiles?: unknown })?.profiles;
  if (!Array.isArray(incoming)) {
    return NextResponse.json({ error: "Expected profiles[]" }, { status: 422 });
  }

  const existing = await prisma.birthProfile.findMany({ where: { userId } });

  for (const candidate of incoming) {
    if (typeof candidate !== "object" || candidate === null) continue;
    const c = candidate as Partial<BirthProfile>;
    if (!isCompleteNatalInput(c.birth)) continue;

    // Identity is the natal data, not the client-side id: the same person
    // arriving from two devices must not become two rows.
    const match = existing.find((row) => sameBirth(row.birth, c.birth as StoredBirth));
    if (match) continue;

    const created = await prisma.birthProfile.create({
      data: {
        userId,
        label: (c.label ?? "").slice(0, 120) || "Chart",
        locationName: (c.locationName ?? "").slice(0, 240),
        birth: c.birth,
        isPrimary: existing.length === 0,
      },
    });
    existing.push(created);
  }

  const rows = await prisma.birthProfile.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(rows.map(serialise).filter(Boolean));
}

function sameBirth(a: unknown, b: StoredBirth): boolean {
  if (!isCompleteNatalInput(a)) return false;
  return (
    a.year === b.year &&
    a.month === b.month &&
    a.day === b.day &&
    a.hour === b.hour &&
    a.minute === b.minute &&
    a.latitude.toFixed(4) === b.latitude.toFixed(4) &&
    a.longitude.toFixed(4) === b.longitude.toFixed(4)
  );
}
