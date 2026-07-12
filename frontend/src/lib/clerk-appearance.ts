import type { Appearance } from "@clerk/types";

type ThemeMode = "light" | "dark";

const palette: Record<ThemeMode, {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  inputBackground: string;
  inputText: string;
  danger: string;
}> = {
  light: {
    primary: "#C77B4E",
    text: "#333333",
    textSecondary: "#6B6B63",
    background: "#FBF8F1",
    inputBackground: "#FBF8F1",
    inputText: "#333333",
    danger: "#C77B4E",
  },
  dark: {
    primary: "#D68E5F",
    text: "#ECE4D6",
    textSecondary: "#978F80",
    background: "#2A2723",
    inputBackground: "#201E1A",
    inputText: "#DED7C9",
    danger: "#D68E5F",
  },
};

export function getClerkAppearance(mode: ThemeMode = "light"): Appearance {
  const c = palette[mode];
  return {
    variables: {
      colorPrimary: c.primary,
      colorText: c.text,
      colorTextSecondary: c.textSecondary,
      colorBackground: c.background,
      colorInputBackground: c.inputBackground,
      colorInputText: c.inputText,
      colorDanger: c.danger,
      borderRadius: "6px",
      fontFamily: "var(--font-body)",
      fontFamilyButtons: "var(--font-body)",
    },
    elements: {
      rootBox: "mx-auto w-full",
      card: "shadow-[var(--shadow-elevated)] border border-border rounded-lg bg-washi-elevated",
      headerTitle: "font-header text-ink tracking-tight",
      headerSubtitle: "text-text-muted",
      socialButtonsBlockButton:
        "border border-border bg-washi hover:bg-washi-elevated text-text",
      formButtonPrimary:
        "bg-terracotta hover:opacity-90 text-washi shadow-none normal-case font-semibold",
      formFieldInput:
        "border border-border rounded-md bg-washi-elevated focus:border-terracotta focus:ring-terracotta",
      footerActionLink: "text-terracotta hover:underline",
      identityPreviewEditButton: "text-terracotta",
      formFieldLabel: "text-text-muted text-xs uppercase tracking-widest font-semibold",
      dividerLine: "bg-border",
      dividerText: "text-text-muted text-xs uppercase tracking-widest",
    },
  };
}

/** Default (light) appearance for non-theme-aware call sites. */
export const clerkAppearance: Appearance = getClerkAppearance("light");
