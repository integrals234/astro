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

        <div style={{ fontSize: 68, lineHeight: 1.2, marginTop: 32 }}>
          {copy.title}
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

        <div
          style={{ display: "flex", gap: 18, marginTop: 48, color: GOLD, fontSize: 26 }}
        >
          ✦ ✦ ✦
        </div>
      </div>
    ),
    size,
  );
}
