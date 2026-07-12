"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const THEME_SCRIPT_WARNING_FILTER =
  "__astroThemeScriptWarningFiltered__" as const;

// next-themes injects an inline <script> to prevent theme flicker before hydration.
// React 19 warns about <script> tags rendered inside client components; the script
// still runs correctly during SSR, so this specific warning is a false positive.
if (
  typeof window !== "undefined" &&
  !(window as Window & { [THEME_SCRIPT_WARNING_FILTER]?: boolean })[
    THEME_SCRIPT_WARNING_FILTER
  ]
) {
  (
    window as Window & { [THEME_SCRIPT_WARNING_FILTER]?: boolean }
  )[THEME_SCRIPT_WARNING_FILTER] = true;

  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    const message = args.map(String).join(" ");
    if (message.includes("Encountered a script tag")) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="astro-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
