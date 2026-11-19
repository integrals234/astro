import type { Metadata } from "next";
import { Lora } from "next/font/google";
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
 * Fonts — performance pass.
 *
 * next/font emits the @font-face CSS for *every* font imported here into the
 * render-blocking stylesheet of *every* page, whatever its locale. With the
 * CJK families split into ~120 unicode-range slices each, that was ~165KB of
 * gzipped CSS ahead of first paint on every page — a Japanese visitor waited
 * on Korean and Devanagari font declarations.
 *
 * Now only Lora (Latin, ~1KB of CSS; it is `--font-chart` in every locale)
 * stays on next/font. Each page loads its own locale's families from Google
 * Fonts *asynchronously* (`LOCALE_FONT_CSS` below): the stylesheet never
 * blocks rendering, text paints at once in the system face, and the web
 * face swaps in. The CSS variables the type stacks reference
 * (`--font-shippori` etc.) are defined in globals.css as plain family names.
 */
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

/*
 * One weight for body text: a single-weight CJK slice is ~half a variable
 * one, and Japanese needs 40–60 slices per page. Mincho at 500/600 only.
 */
const LOCALE_FONT_CSS: Record<AppLanguage, string> = {
  ja: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600&family=Noto+Sans+JP:wght@400&display=optional",
  en: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&display=optional",
  ko: "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600&family=Noto+Sans+KR:wght@400&display=optional",
  hi: "https://fonts.googleapis.com/css2?family=Martel:wght@400;600;700&family=Hind:wght@400;500&display=optional",
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
      className={`${lora.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Locale fonts, never render-blocking: inserted by script (a
            script-inserted stylesheet does not block paint), with a
            <noscript> link for visitors without JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(LOCALE_FONT_CSS[initialLanguage])};document.head.appendChild(l)})()`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={LOCALE_FONT_CSS[initialLanguage]} />
        </noscript>
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
