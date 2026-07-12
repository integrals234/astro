"use client";

import { BookOpen } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { uiString } from "@/lib/vedic-course/i18n/ui";

export default function VedicCourseHeader() {
  const { language } = useLanguage();

  return (
    <ShellPageHeader
      icon={BookOpen}
      eyebrow={uiString("headerEyebrow", language)}
      title={uiString("headerTitle", language)}
      description={uiString("headerDescription", language)}
    />
  );
}
