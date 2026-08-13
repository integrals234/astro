"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EducationalHub from "@/components/education/EducationalHub";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { isEducationSectionId } from "@/lib/education/section-links";
import { sectionPath } from "@/lib/education/article-routes";
import { localizedHref } from "@/lib/i18n/routing";

/**
 * Legacy `?section=` support.
 *
 * Sections have real URLs since Phase 3.3, so this only exists for old links
 * and bookmarks: it forwards to the canonical path and replaces the history
 * entry, leaving one indexable address per section rather than two.
 *
 * It is isolated in its own Suspense boundary on purpose. `useSearchParams()`
 * makes the *closest* boundary bail out of static prerendering — when it sat
 * at the top of this file, that boundary was the entire hub, so
 * `/learn-jyotish` prerendered to an empty shell and shipped 26 characters of
 * text to crawlers. Confining it here costs only this invisible component.
 */
function LegacySectionRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { language } = useLanguage();
  const section = searchParams.get("section");

  useEffect(() => {
    if (!section || !isEducationSectionId(section)) return;
    router.replace(localizedHref(language, sectionPath(section)));
  }, [section, language, router]);

  return null;
}

export default function LearnJyotishPageClient() {
  return (
    <>
      <Suspense fallback={null}>
        <LegacySectionRedirect />
      </Suspense>
      <EducationalHub />
    </>
  );
}
