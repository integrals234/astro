"use client";

import { useEffect, useState, type ComponentType } from "react";
import { createPortal } from "react-dom";
import { ClerkProvider, SignIn, SignUp, UserButton, useUser } from "@clerk/nextjs";
import { getClerkAppearance } from "@/lib/clerk-appearance";
import type { AppLanguage } from "@/lib/i18n/language";
import type { AuthState, ClerkWidget, ClerkWidgetKind } from "@/components/auth/types";

type ClerkLocalization = (typeof import("@clerk/localizations"))["jaJP"];

/* Each locale's Clerk strings load on their own, only for the active locale. */
const localizationLoaders: Record<AppLanguage, () => Promise<{ default: ClerkLocalization }>> = {
  ja: () => import("@/lib/clerk-l10n/ja"),
  en: () => import("@/lib/clerk-l10n/en"),
  hi: () => import("@/lib/clerk-l10n/hi"),
  ko: () => import("@/lib/clerk-l10n/ko"),
};

const WIDGETS: Record<ClerkWidgetKind, ComponentType<Record<string, unknown>>> = {
  userButton: UserButton as ComponentType<Record<string, unknown>>,
  signIn: SignIn as ComponentType<Record<string, unknown>>,
  signUp: SignUp as ComponentType<Record<string, unknown>>,
};

/** Reports Clerk's sign-in state up to `AuthProvider` once Clerk knows it. */
function Bridge({ onState }: { onState: (state: AuthState) => void }) {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    onState({
      isLoaded: true,
      isSignedIn: Boolean(isSignedIn),
      user: user
        ? {
            id: user.id,
            fullName: user.fullName,
            firstName: user.firstName,
            email: user.primaryEmailAddress?.emailAddress ?? null,
            createdAt: user.createdAt ?? null,
          }
        : null,
    });
  }, [isLoaded, isSignedIn, user, onState]);

  return null;
}

/** Clerk's provider plus every Clerk component a page asked for, portalled into place. */
export default function ClerkIsland({
  language,
  theme,
  widgets,
  onState,
}: {
  language: AppLanguage;
  theme: "light" | "dark";
  widgets: ClerkWidget[];
  onState: (state: AuthState) => void;
}) {
  const [localization, setLocalization] = useState<ClerkLocalization | undefined>();

  useEffect(() => {
    let cancelled = false;
    void localizationLoaders[language]().then((mod) => {
      if (!cancelled) setLocalization(mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  return (
    <ClerkProvider appearance={getClerkAppearance(theme)} localization={localization}>
      <Bridge onState={onState} />
      {widgets.map((widget) => {
        const Widget = WIDGETS[widget.kind];
        return createPortal(<Widget {...widget.props} />, widget.el, widget.id);
      })}
    </ClerkProvider>
  );
}
