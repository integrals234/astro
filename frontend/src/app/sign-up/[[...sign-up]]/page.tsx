"use client";

import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";
import SiteBrand from "@/components/layout/SiteBrand";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

export default function SignUpPage() {
  const { language } = useLanguage();
  const copy = getSharedCopy(language).auth;

  return (
    <main className="min-h-screen bg-shell-bg flex flex-col items-center justify-center p-4">
      <PublicLanguageLink className="fixed right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-shell-border bg-shell-elevated/80 px-3 py-2 text-xs font-medium text-shell-warm backdrop-blur transition-colors hover:border-shell-accent/40 hover:text-shell-accent" />
      <div className="mb-8 text-center">
        <div className="flex justify-center">
          <SiteBrand size="lg" />
        </div>
        <p className="mt-2 text-sm text-shell-muted">
          {copy.signUpDescription}
        </p>
      </div>
      <SignUp
        appearance={clerkAppearance}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
      />
    </main>
  );
}
