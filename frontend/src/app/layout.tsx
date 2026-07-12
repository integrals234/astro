import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Hind,
  Lora,
  Martel,
  Noto_Sans_KR,
  Noto_Serif_KR,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
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

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku",
  display: "swap",
  preload: false,
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false,
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false,
});

const martel = Martel({
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-martel",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-hind",
  display: "swap",
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
      className={`${shippori.variable} ${zenKaku.variable} ${lora.variable} ${cormorant.variable} ${notoSerifKr.variable} ${notoSansKr.variable} ${martel.variable} ${hind.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased" suppressHydrationWarning>
        <Providers initialLanguage={initialLanguage}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
