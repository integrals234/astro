"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { enUS, hiIN, jaJP, koKR } from "@clerk/localizations";
import { useTheme } from "next-themes";
import { getClerkAppearance } from "@/lib/clerk-appearance";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ContentProtection from "@/components/layout/ContentProtection";
import MotionProvider from "@/components/motion/MotionProvider";
import {
  LanguageAccountSync,
  LanguageProvider,
  useLanguage,
} from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "@/lib/i18n/language";

const clerkLocalizations = { en: enUS, hi: hiIN, ja: jaJP, ko: koKR } as const;

function LocalizedClerkProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProvider
      appearance={getClerkAppearance(resolvedTheme === "dark" ? "dark" : "light")}
      localization={clerkLocalizations[language]}
    >
      <LanguageAccountSync />
      <ContentProtection />
      <MotionProvider>{children}</MotionProvider>
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
