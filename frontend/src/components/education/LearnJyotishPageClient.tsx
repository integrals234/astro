"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EducationalHub from "@/components/education/EducationalHub";
import { isEducationSectionId } from "@/lib/education/section-links";

function LearnJyotishFromParams() {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  const initialSection =
    sectionParam && isEducationSectionId(sectionParam) ? sectionParam : undefined;

  return <EducationalHub initialSection={initialSection} />;
}

export default function LearnJyotishPageClient() {
  return (
    <Suspense fallback={null}>
      <LearnJyotishFromParams />
    </Suspense>
  );
}
