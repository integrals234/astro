"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { enUS, hiIN, jaJP, koKR } from "@clerk/localizations";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ContentProtection from "@/components/layout/ContentProtection";
import {
  LanguageAccountSync,
  LanguageProvider,
  useLanguage,
} from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "@/lib/i18n/language";

const clerkLocalizations = { en: enUS, hi: hiIN, ja: jaJP, ko: koKR } as const;

function LocalizedClerkProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  return (
    <ClerkProvider
      appearance={clerkAppearance}
      localization={clerkLocalizations[language]}
    >
      <LanguageAccountSync />
      <ContentProtection />
      {children}
    </ClerkProvider>
  );
}

export function Providers({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: AppLanguage;
}) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        <LocalizedClerkProvider>
          {children}
        </LocalizedClerkProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
