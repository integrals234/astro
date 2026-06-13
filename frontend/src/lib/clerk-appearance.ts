import type { Appearance } from "@clerk/types";

export const clerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#312e81",
    colorText: "#111827",
    colorTextSecondary: "#6b7280",
    colorBackground: "#ffffff",
    colorInputBackground: "#f9fafb",
    colorInputText: "#111827",
    colorDanger: "#dc2626",
    borderRadius: "0.75rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontFamilyButtons: "var(--font-inter), system-ui, sans-serif",
  },
  elements: {
    rootBox: "mx-auto w-full",
    card: "shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 rounded-3xl",
    headerTitle: "font-serif text-indigo-950 tracking-tight",
    headerSubtitle: "text-gray-500",
    socialButtonsBlockButton:
      "border border-gray-200 bg-gray-50/50 hover:bg-gray-50 text-gray-700",
    formButtonPrimary:
      "bg-indigo-950 hover:bg-indigo-900 shadow-lg shadow-indigo-900/20 normal-case",
    formFieldInput:
      "border border-gray-200 rounded-xl bg-gray-50/50 focus:border-indigo-500 focus:ring-indigo-500",
    footerActionLink: "text-indigo-600 hover:text-indigo-800",
    identityPreviewEditButton: "text-indigo-600",
    formFieldLabel: "text-gray-500 text-xs uppercase tracking-widest font-bold",
    dividerLine: "bg-gray-100",
    dividerText: "text-gray-400 text-xs uppercase tracking-widest",
  },
};
