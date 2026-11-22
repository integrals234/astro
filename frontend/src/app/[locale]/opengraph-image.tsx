import { ImageResponse } from "next/og";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { SITE_NAME } from "@/lib/seo/site";

export const size = { width: 1200, height: 630 };

/** One card per locale, prerendered rather than rendered per request. */
export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

export const contentType = "image/png";
export const alt = SITE_NAME;

/**
 * Sitewide Open Graph card (Phase 3.8).
 *
 * Drawn rather than photographed so it stays on-palette and costs no asset
 * weight. Colours are the light-theme washi tokens as literals — `ImageResponse`
 * renders outside the document, so CSS custom properties are not available.
 */
const WASHI = "#f5f0e6";
const INK = "#2f2f2f";
const GOLD = "#a9832e";
const TERRACOTTA = "#c77b4e";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = getSharedCopy(parseAppLanguage(locale)).metadata;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: WASHI,
          color: INK,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: TERRACOTTA,
          }}
        >
          <div style={{ width: 40, height: 2, background: GOLD }} />
          {SITE_NAME}
        </div>

        {/* The full-width bar (｜) in the Japanese title has no glyph in the
            card's fonts — the build then tried, and failed, to download one. */}
        <div style={{ fontSize: 68, lineHeight: 1.2, marginTop: 32 }}>
          {copy.title.replace(/｜/g, " | ")}
        </div>

        <div
          style={{
            fontSize: 30,
            lineHeight: 1.5,
            marginTop: 24,
            color: "#6b6b63",
            maxWidth: 900,
          }}
        >
          {copy.description}
        </div>

        {/* Three four-point stars, drawn: the ✦ character needed a font
            download at build time that Google Fonts refuses (HTTP 400). */}
        <div style={{ display: "flex", gap: 18, marginTop: 48 }}>
          {[0, 1, 2].map((i) => (
            <svg key={i} width="26" height="26" viewBox="0 0 24 24">
              <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" fill={GOLD} />
            </svg>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
