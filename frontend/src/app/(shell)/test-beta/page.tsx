import ShellPageHeader from "@/components/layout/ShellPageHeader";
import VedicCourseModule from "@/components/vedic-course/VedicCourseModule";
import { getVedicCourseProgress } from "@/app/actions/vedic-course";
import { BookOpen } from "lucide-react";

export default async function VedicCoursePage() {
  const initialProgress = await getVedicCourseProgress();

  return (
    <div className="max-w-4xl space-y-8">
      <ShellPageHeader
        icon={BookOpen}
        eyebrow="Vedic Course"
        title="インド占星術ミニコース"
        description="A gamified introduction to Indian astrology for Japanese beginners — nine Grahas, twelve Rashis, Lagna, and how to read your birth chart. Toggle English / 日本語 anytime."
      />

      <section className="rounded-3xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        <VedicCourseModule initialProgress={initialProgress} />
      </section>
    </div>
  );
}
