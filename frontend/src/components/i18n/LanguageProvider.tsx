"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  APP_LANGUAGE_COOKIE_MAX_AGE,
  APP_LANGUAGE_KEY,
  DEFAULT_APP_LANGUAGE,
  LEGACY_LANGUAGE_STORAGE_KEYS,
  isAppLanguage,
  type AppLanguage,
} from "@/lib/i18n/language";
import { switchLocale } from "@/lib/i18n/routing";

interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Persisted preference. Since Phase 3.2 this is *memory only* — it records
 * what the visitor last chose so we can offer them a link, and it is what the
 * signed-in account preference syncs against. It never decides what gets
 * rendered; the URL does. Redirecting or swapping content off a stored
 * preference is what made Googlebot see English on Japanese URLs.
 */
function persistLanguagePreference(language: AppLanguage) {
  localStorage.setItem(APP_LANGUAGE_KEY, language);
  document.cookie = `${APP_LANGUAGE_KEY}=${language}; Path=/; Max-Age=${APP_LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage?: AppLanguage;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Authoritative: handed down from the `[locale]` route param.
  const language = initialLanguage ?? DEFAULT_APP_LANGUAGE;

  const applyLanguage = useCallback(
    (nextLanguage: AppLanguage) => {
      persistLanguagePreference(nextLanguage);
      if (nextLanguage === language) return;
      router.push(switchLocale(pathname, nextLanguage));
    },
    [language, pathname, router],
  );

  useEffect(() => {
    // The server already renders <html lang>. This keeps it correct across
    // client-side navigations between locales.
    document.documentElement.lang = language;
    persistLanguagePreference(language);

    for (const key of LEGACY_LANGUAGE_STORAGE_KEYS) {
      localStorage.removeItem(key);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: applyLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageAccountSync() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { language } = useLanguage();
  const [accountLoadedFor, setAccountLoadedFor] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const userId = user.id;
    const controller = new AbortController();

    async function loadAccountPreference() {
      try {
        const response = await fetch("/api/preferences/language", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data = (await response.json()) as { language: unknown };
        // Recorded as preference memory only — deliberately *not* applied.
        // Auto-navigating a signed-in user off the URL they requested is the
        // same content-swap bug in a different costume.
        if (isAppLanguage(data.language)) {
          persistLanguagePreference(data.language);
        }
        setAccountLoadedFor(userId);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Failed to load language preference", error);
        }
      }
    }

    void loadAccountPreference();
    return () => controller.abort();
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    if (!isSignedIn || !user || accountLoadedFor !== user.id) return;

    void fetch("/api/preferences/language", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language }),
    }).catch((error) => {
      console.error("Failed to save language preference", error);
    });
  }, [accountLoadedFor, isSignedIn, language, user]);

  return null;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
