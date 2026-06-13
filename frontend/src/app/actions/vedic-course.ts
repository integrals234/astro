"use server";

import prisma from "@/lib/prisma";
import { requireUserId } from "@/lib/auth";
import type { CourseProgress } from "@/lib/vedic-course/types";

const DEFAULT_PROGRESS: CourseProgress = {
  currentChapter: 0,
  completedSlides: [],
};

export async function getVedicCourseProgress(): Promise<CourseProgress> {
  const userId = await requireUserId();

  const record = await prisma.vedicCourseProgress.findUnique({
    where: { userId },
    select: { currentChapter: true, completedSlides: true },
  });

  if (!record) return DEFAULT_PROGRESS;

  return {
    currentChapter: record.currentChapter,
    completedSlides: record.completedSlides,
  };
}

export async function saveVedicCourseProgress(
  progress: CourseProgress,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const userId = await requireUserId();

    await prisma.vedicCourseProgress.upsert({
      where: { userId },
      create: {
        userId,
        currentChapter: progress.currentChapter,
        completedSlides: progress.completedSlides,
      },
      update: {
        currentChapter: progress.currentChapter,
        completedSlides: progress.completedSlides,
      },
    });

    return { ok: true };
  } catch (error) {
    console.error("Failed to save vedic course progress:", error);
    return { ok: false, error: "Failed to save progress" };
  }
}
