import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { requireUserId } from "@/lib/auth";
import type { ChartData, ChartFormData } from "@/lib/chart-types";

function serializeChart(chart: {
  id: string;
  name: string;
  locationName: string;
  formData: unknown;
  chartData: unknown;
  isSaved: boolean;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: chart.id,
    name: chart.name,
    locationName: chart.locationName,
    formData: chart.formData as ChartFormData,
    chartData: chart.chartData as ChartData,
    isSaved: chart.isSaved,
    createdAt: chart.createdAt.toISOString(),
    updatedAt: chart.updatedAt.toISOString(),
  };
}

async function pruneRecentCharts(userId: string) {
  const recent = await prisma.savedChart.findMany({
    where: { userId, isSaved: false },
    orderBy: { createdAt: "desc" },
    select: { id: true },
    skip: 5,
  });

  if (recent.length === 0) return;

  await prisma.savedChart.deleteMany({
    where: {
      userId,
      isSaved: false,
      id: { in: recent.map((chart) => chart.id) },
    },
  });
}

export async function GET(req: Request) {
  try {
    const userId = await requireUserId();
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    if (type === "saved") {
      const charts = await prisma.savedChart.findMany({
        where: { userId, isSaved: true },
        orderBy: { updatedAt: "desc" },
      });
      return NextResponse.json(charts.map(serializeChart));
    }

    const charts = await prisma.savedChart.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
    return NextResponse.json(charts.map(serializeChart));
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(req: Request) {
  try {
    const userId = await requireUserId();
    const body = await req.json();
    const { name, locationName, formData, chartData, isSaved } = body as {
      name: string;
      locationName: string;
      formData: ChartFormData;
      chartData: ChartData;
      isSaved?: boolean;
    };

    if (!name?.trim() || !locationName || !formData || !chartData) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const chart = await prisma.savedChart.create({
      data: {
        userId,
        name: name.trim(),
        locationName,
        formData: formData as unknown as Prisma.InputJsonValue,
        chartData: chartData as unknown as Prisma.InputJsonValue,
        isSaved: Boolean(isSaved),
      },
    });

    await pruneRecentCharts(userId);

    return NextResponse.json(serializeChart(chart), { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Failed to save chart:", error);
    return NextResponse.json({ error: "Failed to save chart" }, { status: 500 });
  }
}
