"use client";

import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

export default function BlogsPage() {
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

      <div className="flex min-h-[40vh] items-center justify-center rounded-3xl border border-shell-border bg-shell-elevated/35 px-6 py-16">
        <p className="text-sm md:text-base text-shell-muted text-center">
          {copy.empty}
        </p>
      </div>
    </div>
  );
}
