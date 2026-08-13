import type { Metadata } from "next";
import VedicCourseModule from "@/components/vedic-course/VedicCourseModule";
import VedicCourseHeader from "@/components/vedic-course/VedicCourseHeader";
import { getVedicCourseProgress } from "@/app/actions/vedic-course";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language).navigation;

  return buildPageMetadata({
    language,
    path: "/course",
    title: copy.course,
    description: copy.courseDescription,
  });
}

export default async function VedicCoursePage() {
  const initialProgress = await getVedicCourseProgress();

  return (
    <div className="max-w-5xl space-y-8">
      <VedicCourseHeader />

      <section className="washi-card relative p-5 pt-8 sm:p-8 sm:pt-8">
        <VedicCourseModule initialProgress={initialProgress} />
      </section>
    </div>
  );
}
