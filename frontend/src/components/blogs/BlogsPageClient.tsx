"use client";

import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

export default function BlogsPageClient() {
  const { language } = useLanguage();
  const copy = getSharedCopy(language).blogs;

  return (
    <div className="max-w-4xl">
      <ShellPageHeader
        icon={BookOpen}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="washi-card flex min-h-[40vh] items-center justify-center px-6 py-16">
        <p className="text-sm md:text-base text-text-muted text-center">
          {copy.empty}
        </p>
      </div>
    </div>
  );
}
