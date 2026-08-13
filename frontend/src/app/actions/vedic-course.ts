"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { requireUserId } from "@/lib/auth";
import type { CourseProgress } from "@/lib/vedic-course/types";
import type { AppLanguage } from "@/lib/i18n/language";

const saveErrors: Record<AppLanguage, string> = {
  en: "Failed to save progress",
  hi: "प्रगति सहेजी नहीं जा सकी",
  ja: "進捗を保存できませんでした",
  ko: "진행 상황을 저장하지 못했습니다",
};

const DEFAULT_PROGRESS: CourseProgress = {
  currentChapter: 0,
  completedSlides: [],
};

/**
 * Saved progress for the signed-in user, or a fresh course for everyone else.
 *
 * This used to call `requireUserId()`, which throws. That was safe while
 * `/test-beta` sat behind the middleware auth gate — a signed-out visitor was
 * redirected to sign-in and never reached the page. Phase 3.1 made the course
 * public, so the throw surfaced as a **500 on a route that is in the sitemap**:
 * signed-out humans and Googlebot both got an error page instead of the course.
 *
 * Reading progress is not a privileged operation — an anonymous visitor simply
 * has none. Writing still requires a user; see `saveVedicCourseProgress`.
 */
export async function getVedicCourseProgress(): Promise<CourseProgress> {
  const { userId } = await auth();
  if (!userId) return DEFAULT_PROGRESS;

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
  language: AppLanguage = "en",
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
    return { ok: false, error: saveErrors[language] };
  }
}
