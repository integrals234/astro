import type { MetadataRoute } from "next";
import { buildSitemap } from "@/app/sitemap";

/**
 * First-party sitemap, for search-console submission.
 *
 * Identical to `/sitemap.xml` except that the `learn-jyotish` article corpus
 * is omitted, leaving the landing pages, tools, and the entity corpus — the
 * pages written for this site. The English originals of those articles are
 * already `noindex`, and the JA/HI/KO versions are translations of the same
 * third-party source, so this variant is the one to hand to Search Console
 * while that position is unresolved.
 *
 * ⚠ This omits; it does not block. Section hubs remain in both sitemaps and
 * link to every article, so a crawler still reaches them and may still index
 * them. If the goal is for those translations not to be indexed at all, extend
 * `isArticleNoindexed` in `lib/seo/metadata.ts` to cover the other locales —
 * that is the only directive that actually prevents indexing.
 *
 * Hand-serialised rather than using the `MetadataRoute.Sitemap` convention
 * because Next.js only maps that convention to `/sitemap.xml`. The output
 * format deliberately mirrors what Next.js emits for the primary sitemap, so
 * the two stay comparable.
 */
export const dynamic = "force-static";

const XML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => XML_ESCAPES[character]);
}

function renderEntry(entry: MetadataRoute.Sitemap[number]): string {
  const parts = [`<loc>${escapeXml(entry.url)}</loc>`];

  const languages = entry.alternates?.languages;
  if (languages) {
    for (const [hreflang, href] of Object.entries(languages)) {
      if (typeof href !== "string") continue;
      parts.push(
        `<xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}"/>`,
      );
    }
  }

  if (entry.lastModified) {
    const date =
      entry.lastModified instanceof Date
        ? entry.lastModified
        : new Date(entry.lastModified);
    parts.push(`<lastmod>${date.toISOString()}</lastmod>`);
  }

  if (entry.changeFrequency) {
    parts.push(`<changefreq>${entry.changeFrequency}</changefreq>`);
  }

  if (typeof entry.priority === "number") {
    parts.push(`<priority>${entry.priority}</priority>`);
  }

  return `<url>${parts.join("")}</url>`;
}

export function GET() {
  const entries = buildSitemap({ includeArticles: false });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderEntry).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
