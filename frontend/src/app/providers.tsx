"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ContentProtection from "@/components/layout/ContentProtection";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClerkProvider appearance={clerkAppearance}>
        <ContentProtection />
        {children}
      </ClerkProvider>
    </ThemeProvider>
  );
}
