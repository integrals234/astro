import ShellPageHeader from "@/components/layout/ShellPageHeader";
import VedicCourseModule from "@/components/vedic-course/VedicCourseModule";
import { getVedicCourseProgress } from "@/app/actions/vedic-course";
import { BookOpen } from "lucide-react";

export default async function VedicCoursePage() {
  const initialProgress = await getVedicCourseProgress();

  return (
    <div className="max-w-5xl space-y-8">
      <ShellPageHeader
        icon={BookOpen}
        eyebrow="Vedic Course"
        title="インド占星術ミニコース"
        description="Seven chapters in English, हिन्दी, 日本語, or 한국어 — Grahas, Rashis, Lagna, houses, Nakshatras, Drishti, and chart reading with 25+ games."
      />

      <section className="relative rounded-3xl border border-shell-border bg-shell-elevated/40 p-5 pt-8 sm:p-8 sm:pt-8">
        <VedicCourseModule initialProgress={initialProgress} />
      </section>
    </div>
  );
}
