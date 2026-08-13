import type { MetadataRoute } from "next";
import { DEFAULT_APP_LANGUAGE } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { SITE_NAME } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  const copy = getSharedCopy(DEFAULT_APP_LANGUAGE).metadata;

  return {
    name: copy.title,
    short_name: SITE_NAME,
    description: copy.description,
    lang: DEFAULT_APP_LANGUAGE,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e6",
    theme_color: "#f5f0e6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
