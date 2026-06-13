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

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;

    const chart = await prisma.savedChart.findFirst({
      where: { id, userId },
    });

    if (!chart) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(serializeChart(chart));
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;
    const body = await req.json();

    const existing = await prisma.savedChart.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data: Prisma.SavedChartUpdateInput = {};

    if (typeof body.isSaved === "boolean") {
      data.isSaved = body.isSaved;
    }
    if (typeof body.name === "string" && body.name.trim()) {
      data.name = body.name.trim();
    }

    const chart = await prisma.savedChart.update({
      where: { id },
      data,
    });

    return NextResponse.json(serializeChart(chart));
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;

    const existing = await prisma.savedChart.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.savedChart.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
