import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_Devanagari,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import { Providers } from "./providers";
import {
  APP_LANGUAGE_KEY,
  parseAppLanguage,
} from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";

// Inter for clean data, numbers, and UI elements
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Playfair Display for premium, editorial headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const notoJapanese = Noto_Sans_JP({
  variable: "--font-noto-japanese",
  display: "swap",
  preload: false,
});

const notoKorean = Noto_Sans_KR({
  variable: "--font-noto-korean",
  display: "swap",
  preload: false,
});

async function getRequestLanguage() {
  const cookieStore = await cookies();
  return parseAppLanguage(cookieStore.get(APP_LANGUAGE_KEY)?.value);
}

export async function generateMetadata(): Promise<Metadata> {
  const language = await getRequestLanguage();
  return getSharedCopy(language).metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getRequestLanguage();

  return (
    <html
      lang={initialLanguage}
      className={`${inter.variable} ${playfair.variable} ${notoDevanagari.variable} ${notoJapanese.variable} ${notoKorean.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers initialLanguage={initialLanguage}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}