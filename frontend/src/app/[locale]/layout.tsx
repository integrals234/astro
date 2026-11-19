import type { Metadata } from "next";
import {
  Hind,
  Lora,
  Martel,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Serif_KR,
  Shippori_Mincho,
} from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Providers } from "../providers";
import {
  APP_LANGUAGES,
  parseAppLanguage,
  type AppLanguage,
} from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";

/*
 * Design upgrade: Shippori Mincho carries the display voice at two weights
 * only (a weight costs nothing unless text on the page uses it), and body
 * moves to Noto Sans JP. The baseline downloaded 95 font files on the
 * Japanese homepage.
 */
const shippori = Shippori_Mincho({
  weight: ["500", "600"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

/*
 * One weight. A variable Noto Sans JP slice is ~1.9x a single-weight slice,
 * and Japanese body text needs 40–60 slices per page; 400 alone halves the
 * body-font bytes. `font-medium` resolves to 400 (no synthesis); the calm
 * direction uses weight sparingly and Mincho carries emphasis.
 */
const notoSansJp = Noto_Sans_JP({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  weight: ["500", "600"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false,
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false,
});

const martel = Martel({
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-martel",
  display: "swap",
  preload: false,
});

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500"],
  variable: "--font-hind",
  display: "swap",
  preload: false,
});

/*
 * Per-locale font variables (Phase 4).
 *
 * All eight families used to be applied on every page, so a Japanese visitor
 * downloaded Devanagari Martel and Hind, and `Cormorant_Garamond` was
 * preloaded despite `var(--font-cormorant)` being referenced nowhere in the
 * codebase — it has been deleted outright.
 *
 * Lora stays in every locale: it is `--font-chart`, which the kundli SVGs use
 * regardless of language.
 */
const FONTS_BY_LOCALE: Record<AppLanguage, string[]> = {
  ja: [shippori.variable, notoSansJp.variable, lora.variable],
  en: [lora.variable, notoSansJp.variable],
  ko: [notoSerifKr.variable, notoSansKr.variable, lora.variable],
  hi: [martel.variable, hind.variable, lora.variable],
};

type LocaleParams = { params: Promise<{ locale: string }> };

/*
 * The locale now comes from the URL, not a cookie. The previous `cookies()`
 * call here forced 100% dynamic rendering across the whole app — which is why
 * every route built as `ƒ`. Reading it from `params` is what makes the
 * programmatic pages in Phase 3.5 affordable as build-time HTML.
 */
export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  return getSharedCopy(parseAppLanguage(locale)).metadata;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const { locale } = await params;
  const initialLanguage = parseAppLanguage(locale);

  return (
    <html
      lang={initialLanguage}
      className={`${FONTS_BY_LOCALE[initialLanguage].join(" ")} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks script-capable visitors before first paint, so the hero's
            entrance state only applies when GSAP will actually run. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Providers initialLanguage={initialLanguage}>
          {children}
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}
