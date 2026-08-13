import type { Metadata } from "next";
import ChartPageClient from "@/components/chart/ChartPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { getChartUi } from "@/lib/chart-i18n";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { localeUrl, SITE_NAME } from "@/lib/seo/site";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: "/chart",
    title: copy.navigation.chart,
    description: copy.navigation.chartDescription,
  });
}

export default async function ChartPage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);
  const chartCopy = getChartUi(language);

  /*
   * The heading and description are rendered here, on the server, rather than
   * inside the workspace.
   *
   * `ChartWorkspace` reads `useSearchParams()` for chart prefill, which makes
   * its Suspense boundary bail out of static prerendering — so the page itself
   * would otherwise be an empty shell with no title, no description and no
   * crawlable text at all. The tool below is still client-rendered; the page's
   * identity no longer depends on it.
   */
  return (
    <>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          {
            "@type": "SoftwareApplication",
            "@id": `${localeUrl(language, "/chart")}#app`,
            name: chartCopy.appTitle,
            description: copy.navigation.chartDescription,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: localeUrl(language, "/chart"),
            inLanguage: language,
            publisher: { "@type": "Organization", name: SITE_NAME },
            offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
          },
        ]}
      />

      <div className="sr-only">
        <h1>{chartCopy.appTitle}</h1>
        <p>{copy.navigation.chartDescription}</p>
      </div>

      <ChartPageClient />
    </>
  );
}
