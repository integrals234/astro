import type { Metadata } from "next";
import VedicCourseModule from "@/components/vedic-course/VedicCourseModule";
import VedicCourseHeader from "@/components/vedic-course/VedicCourseHeader";
import { getVedicCourseProgress } from "@/app/actions/vedic-course";
import { buildCourseChapters } from "@/lib/vedic-course/localized-chapters";
import { parseAppLanguage } from "@/lib/i18n/language";
import { buildPageMetadata } from "@/lib/seo/metadata";
import PublicPageShell from "@/components/layout/PublicPageShell";
import { seoPageCopy } from "@/lib/seo/page-copy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  return buildPageMetadata({
    language,
    path: "/course",
    title: seoPageCopy[language].course.title,
    description: seoPageCopy[language].course.description,
  });
}

export default async function VedicCoursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const initialProgress = await getVedicCourseProgress();

  // Public layout, like every other content tab (it used to sit in the
  // signed-in app frame, so the header and scrolling changed on this tab).
  return (
    <PublicPageShell>
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-6 md:px-8 md:py-10">
        <VedicCourseHeader />

        <section className="washi-card relative p-5 pt-8 sm:p-8 sm:pt-8">
          {/* The chapters arrive as data, already in this language. */}
          <VedicCourseModule initialProgress={initialProgress} chapters={buildCourseChapters(language)} />
        </section>
      </div>
    </PublicPageShell>
  );
}
