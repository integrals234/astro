import VedicCourseModule from "@/components/vedic-course/VedicCourseModule";
import VedicCourseHeader from "@/components/vedic-course/VedicCourseHeader";
import { getVedicCourseProgress } from "@/app/actions/vedic-course";

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
