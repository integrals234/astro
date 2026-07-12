import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { isAppLanguage } from "@/lib/i18n/language";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { appLanguage: true },
  });

  return NextResponse.json({
    language: user?.appLanguage ?? null,
    userExists: Boolean(user),
  });
}

export async function PATCH(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const language =
    typeof body === "object" && body !== null && "language" in body
      ? (body as { language: unknown }).language
      : null;

  if (!isAppLanguage(language)) {
    return NextResponse.json(
      { error: "language must be one of en, hi, ja, or ko" },
      { status: 400 },
    );
  }

  const result = await prisma.user.updateMany({
    where: { id: userId },
    data: { appLanguage: language },
  });

  return NextResponse.json({
    language: result.count > 0 ? language : null,
    userExists: result.count > 0,
  });
}
