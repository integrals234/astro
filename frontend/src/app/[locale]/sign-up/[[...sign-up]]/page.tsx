"use client";

import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";
import SiteBrand from "@/components/layout/SiteBrand";
import PublicLanguageLink from "@/components/i18n/PublicLanguageLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";
import { localizedHref } from "@/lib/i18n/routing";

export default function SignUpPage() {
  const { language } = useLanguage();
  const copy = getSharedCopy(language).auth;

  return (
    <main className="min-h-screen bg-washi flex flex-col items-center justify-center p-4">
      <PublicLanguageLink className="fixed right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-border bg-washi-elevated/80 px-3 py-2 text-xs font-medium text-ink backdrop-blur transition-colors hover:border-terracotta/40 hover:text-terracotta" />
      <div className="mb-8 text-center">
        <div className="flex justify-center">
          <SiteBrand size="lg" />
        </div>
        <p className="mt-2 text-sm text-text-muted">
          {copy.signUpDescription}
        </p>
      </div>
      {/*
       * `path` must match the URL this component is actually mounted at.
       * Locale routing moved it from `/sign-up` to `/en/sign-up` (and the
       * bare path for Japanese), and a mismatch makes Clerk render nothing —
       * the page shipped its heading and no form at all.
       */}
      <SignUp
        appearance={clerkAppearance}
        routing="path"
        path={localizedHref(language, "/sign-up")}
        signInUrl={localizedHref(language, "/sign-in")}
      />
    </main>
  );
}
