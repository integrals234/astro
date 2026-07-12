"use client";

import { useUser } from "@clerk/nextjs";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import {
  APP_LANGUAGE_COOKIE_MAX_AGE,
  APP_LANGUAGE_KEY,
  DEFAULT_APP_LANGUAGE,
  LEGACY_LANGUAGE_STORAGE_KEYS,
  isAppLanguage,
  type AppLanguage,
} from "@/lib/i18n/language";

interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const APP_LANGUAGE_CHANGE_EVENT = "app-language-change";

function readBrowserLanguage(initialLanguage?: AppLanguage): AppLanguage {
  if (typeof window === "undefined") {
    return initialLanguage ?? DEFAULT_APP_LANGUAGE;
  }

  const explicit = localStorage.getItem(APP_LANGUAGE_KEY);
  if (isAppLanguage(explicit)) return explicit;

  for (const key of LEGACY_LANGUAGE_STORAGE_KEYS) {
    const legacy = localStorage.getItem(key);
    if (isAppLanguage(legacy)) return legacy;
  }

  return initialLanguage ?? DEFAULT_APP_LANGUAGE;
}

function persistBrowserLanguage(language: AppLanguage) {
  localStorage.setItem(APP_LANGUAGE_KEY, language);
  document.cookie = `${APP_LANGUAGE_KEY}=${language}; Path=/; Max-Age=${APP_LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

function subscribeToBrowserLanguage(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === APP_LANGUAGE_KEY) onChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(APP_LANGUAGE_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(APP_LANGUAGE_CHANGE_EVENT, onChange);
  };
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage?: AppLanguage;
}) {
  const language = useSyncExternalStore(
    subscribeToBrowserLanguage,
    () => readBrowserLanguage(initialLanguage),
    () => initialLanguage ?? DEFAULT_APP_LANGUAGE,
  );
  const applyLanguage = useCallback((nextLanguage: AppLanguage) => {
    persistBrowserLanguage(nextLanguage);
    window.dispatchEvent(new Event(APP_LANGUAGE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    persistBrowserLanguage(language);

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
  const { language, setLanguage } = useLanguage();
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
        if (isAppLanguage(data.language)) setLanguage(data.language);
        setAccountLoadedFor(userId);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Failed to load language preference", error);
        }
      }
    }

    void loadAccountPreference();
    return () => controller.abort();
  }, [isLoaded, isSignedIn, setLanguage, user]);

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
