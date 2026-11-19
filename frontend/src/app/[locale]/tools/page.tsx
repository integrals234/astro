import type { Metadata } from "next";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ToolsHub from "@/components/tools/ToolsHub";
import { uiText } from "@/lib/education";
import { TOOL_LANDINGS } from "@/lib/tools/landing-content";
import { APP_LANGUAGES, parseAppLanguage, type AppLanguage } from "@/lib/i18n/language";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { localeUrl } from "@/lib/seo/site";

/**
 * The tools hub (design upgrade). Before this, the seventeen tool pages had
 * no index of their own — the homepage grid was the only place they were
 * listed together — so the phone tab bar and "see all tools" links had
 * nowhere to land. Every tile is a real link, so this is also a flat,
 * crawlable hub for the tool cluster (Phase 3.7's hub-and-spoke).
 */
type Params = { params: Promise<{ locale: string }> };

const HUB_COPY: Record<AppLanguage, { title: string; description: string }> = {
  ja: {
    title: "無料のインド占星術ツール一覧",
    description:
      "出生図（ホロスコープ）、ナクシャトラ、ダシャー、相性診断、宿曜まで。インド占星術（ジョーティッシュ）の無料ツール17種を、一度の入力でまとめて使えます。",
  },
  en: {
    title: "Free Vedic astrology tools",
    description:
      "Birth chart, nakshatra, dasha, compatibility and more — seventeen free Jyotish tools that all work from a single entry of your birth details.",
  },
  hi: {
    title: "निःशुल्क वैदिक ज्योतिष उपकरण",
    description:
      "जन्म कुंडली, नक्षत्र, दशा, गुण मिलान और बहुत कुछ — सत्रह निःशुल्क ज्योतिष उपकरण, जो एक बार दर्ज किए गए जन्म विवरण से चलते हैं।",
  },
  ko: {
    title: "무료 베다 점성술 도구",
    description:
      "출생 차트, 낙샤트라, 다샤, 궁합, 수요까지 — 출생 정보를 한 번만 입력하면 쓸 수 있는 무료 조티시 도구 17가지.",
  },
};

export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  return buildPageMetadata({
    language,
    path: "/tools",
    title: HUB_COPY[language].title,
    description: HUB_COPY[language].description,
  });
}

export default async function ToolsHubPage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: HUB_COPY[language].title, path: "/tools" },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          {
            "@type": "ItemList",
            "@id": `${localeUrl(language, "/tools")}#tools`,
            name: HUB_COPY[language].title,
            itemListElement: TOOL_LANDINGS.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.title[language],
              url: localeUrl(language, `/tools/${tool.slug}`),
            })),
          },
        ]}
      />
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 md:px-8">
        <Breadcrumbs crumbs={crumbs} language={language} label={HUB_COPY[language].title} />
      </div>
      <ToolsHub title={HUB_COPY[language].title} />
    </PublicPageShell>
  );
}
