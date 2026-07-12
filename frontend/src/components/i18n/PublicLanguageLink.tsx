"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { settingsCopy } from "@/lib/i18n/settings";

export default function PublicLanguageLink({
  iconOnly = false,
  className = "",
}: {
  iconOnly?: boolean;
  className?: string;
}) {
  const { language } = useLanguage();
  const label = settingsCopy[language].language.title;

  return (
    <Link
      href="/settings#language"
      aria-label={label}
      title={label}
      className={className}
    >
      <Languages size={16} aria-hidden />
      {!iconOnly && <span>{label}</span>}
    </Link>
  );
}
