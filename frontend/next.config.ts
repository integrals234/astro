import type { NextConfig } from "next";

/**
 * Locale-aware legacy redirects. `:locale` is constrained to the three
 * prefixed locales — Japanese serves from the bare root, which the
 * unprefixed variant of each rule covers.
 */
const LEGACY_PATHS: Array<{ from: string; to: string }> = [
  { from: "/test-alpha", to: "/personal-appraisals" },
  // A placeholder URL in primary navigation is a trust signal both Google and
  // Japanese users read. Renamed in Phase 3.2.
  { from: "/test-beta", to: "/course" },
  // /blogs shipped with no posts and was removed. It was in the sitemap, so it
  // is indexed — 301 to the article corpus rather than serving a 404.
  { from: "/blogs", to: "/learn-jyotish" },
  // free-horoscope duplicated birth-chart almost exactly (both drew the
  // Lagna chart + planetary details); its FAQs and "free" framing moved
  // into birth-chart rather than being lost.
  { from: "/tools/free-horoscope", to: "/tools/birth-chart" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return LEGACY_PATHS.flatMap(({ from, to }) => [
      { source: from, destination: to, permanent: true },
      {
        source: `/:locale(en|hi|ko)${from}`,
        destination: `/:locale${to}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
