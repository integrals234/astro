"use client";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ContentProtection from "@/components/layout/ContentProtection";
import NavProgress from "@/components/layout/NavProgress";
import MotionProvider from "@/components/motion/MotionProvider";
import { ProfileProvider } from "@/components/profile/ProfileProvider";
import { ToastProvider } from "@/components/ui/Toaster";
import {
  LanguageAccountSync,
  LanguageProvider,
} from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "@/lib/i18n/language";

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
        {/* Clerk itself loads lazily inside; see AuthProvider. */}
        <AuthProvider>
          <LanguageAccountSync />
          <ContentProtection />
          <NavProgress />
          <MotionProvider>
            {/* Inside AuthProvider: adoption of guest profiles on sign-in needs the auth state. */}
            <ProfileProvider>
              <ToastProvider>{children}</ToastProvider>
            </ProfileProvider>
          </MotionProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
