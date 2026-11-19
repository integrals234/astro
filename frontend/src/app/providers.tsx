"use client";

import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { getClerkAppearance } from "@/lib/clerk-appearance";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ContentProtection from "@/components/layout/ContentProtection";
import MotionProvider from "@/components/motion/MotionProvider";
import { ProfileProvider } from "@/components/profile/ProfileProvider";
import { ToastProvider } from "@/components/ui/Toaster";
import {
  LanguageAccountSync,
  LanguageProvider,
  useLanguage,
} from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "@/lib/i18n/language";

type ClerkLocalization = (typeof import("@clerk/localizations"))["jaJP"];

/*
 * Performance pass: all four Clerk localizations (~78KB gzipped) were in
 * every page's JS. Each now loads on its own, only for the active locale.
 * Clerk's UI (sign-in, user menu) is English for the moment before it lands.
 */
const clerkLocalizationLoaders: Record<AppLanguage, () => Promise<{ default: ClerkLocalization }>> = {
  ja: () => import("@/lib/clerk-l10n/ja"),
  en: () => import("@/lib/clerk-l10n/en"),
  hi: () => import("@/lib/clerk-l10n/hi"),
  ko: () => import("@/lib/clerk-l10n/ko"),
};

function LocalizedClerkProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [localization, setLocalization] = useState<ClerkLocalization | undefined>();

  useEffect(() => {
    let cancelled = false;
    void clerkLocalizationLoaders[language]().then((mod) => {
      if (!cancelled) setLocalization(mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  return (
    <ClerkProvider
      appearance={getClerkAppearance(resolvedTheme === "dark" ? "dark" : "light")}
      localization={localization}
    >
      <LanguageAccountSync />
      <ContentProtection />
      <MotionProvider>
        {/* Inside ClerkProvider: adoption of guest profiles on sign-in needs useAuth. */}
        <ProfileProvider>
          <ToastProvider>{children}</ToastProvider>
        </ProfileProvider>
      </MotionProvider>
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
