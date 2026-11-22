import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ShukuPicker from "@/components/sukuyo/ShukuPicker";
import TodayShukuStrip from "@/components/sukuyo/TodayShukuStrip";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { GROUP_MEANING } from "@/lib/sukuyo/content";
import { partnersByGroup, profileOf } from "@/lib/sukuyo/page-data";
import { DISTANCE_LABEL, GROUP_KANJI, RELATION_KANJI } from "@/lib/sukuyo/relations";
import { SHUKUS, pairHref, shukuBySlug, shukuHref } from "@/lib/sukuyo/shuku";
import { nakshatraHref, tr } from "@/lib/sky/entity-links";
import { chartFormCopy } from "@/lib/chart-i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return SHUKUS.map((s) => ({ locale: "ja", shuku: s.slug }));
}
/** The daily section changes through the day. */
export const revalidate = 3600;

type Params = { params: Promise<{ locale: string; shuku: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, shuku } = await params;
  const s = shukuBySlug(shuku);
  if (locale !== "ja" || !s) return {};
  const p = profileOf(s);
  return buildPageMetadata({
    language: "ja",
    path: shukuHref(s),
    title: `${s.kanji}（${s.reading}）の性格と相性｜宿曜占星術`,
    description: `宿曜占星術の${s.kanji}（${s.reading}）は「${p.keyword}」。性格・恋愛・仕事の傾向と、三九の秘法による26宿との相性（栄親・友衰・安壊・危成・業胎）を一覧で。今日の${s.kanji}の運勢も毎日更新。`,
    excludeAlternates: ["en", "hi", "ko"],
  });
}

export default async function ShukuPage({ params }: Params) {
  const { locale, shuku } = await params;
  const s = shukuBySlug(shuku);
  if (locale !== "ja" || !s) notFound();
  const p = profileOf(s);
  const groups = partnersByGroup(s);
  const t = chartFormCopy.ja;
  const best = groups.find((g) => g.group === "eishin")!.rows.map((r) => r.partner.kanji);
  const intense = groups.find((g) => g.group === "ankai")!.rows.map((r) => r.partner.kanji);

  const faq = [
    { question: `${s.kanji}と相性がよい宿は？`, answer: `三九の秘法で最もよいとされる「栄親」の関係にあたるのは、${best.join("・")}です。気楽な「友衰」の関係も穏やかな好相性とされます。` },
    { question: `${s.kanji}と相性に注意が必要な宿は？`, answer: `強く惹かれ合う一方で波乱を含みやすいとされる「安壊」の関係にあたるのは、${intense.join("・")}です。互いを変えようとしすぎないことが鍵とされます。` },
    { question: `${s.kanji}はインド占星術のどのナクシャトラにあたりますか？`, answer: `${s.kanji}は、インド占星術のナクシャトラ「${tr(t.nakshatras, s.nakshatra)}」に対応します。宿曜の27宿は、インドの月宿が中国を経て日本に伝わったものです。` },
  ];

  return (
    <>
      <JsonLd
        nodes={[
          organizationSchema("ja"),
          websiteSchema("ja"),
          breadcrumbSchema("ja", [
            { name: "ホーム", path: "/" },
            { name: "宿曜占星術の相性", path: "/sukuyo" },
            { name: s.kanji, path: shukuHref(s) },
          ]),
          articleSchema({ language: "ja", path: shukuHref(s), headline: `${s.kanji}の性格と相性`, description: p.nature }),
          faqSchema(faq),
        ]}
      />
      <PublicPageShell>
        <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10">
          <Breadcrumbs
            language="ja"
            label="パンくずリスト"
            crumbs={[
              { name: "ホーム", path: "/" },
              { name: "宿曜占星術の相性", path: "/sukuyo" },
              { name: s.kanji, path: shukuHref(s) },
            ]}
          />

          <header>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-washi-elevated px-3 py-1 text-xs tracking-[0.06em] text-terracotta">
              宿曜占星術・{p.keyword}
            </p>
            <h1 className="mt-4 font-header text-[length:var(--step-4)] leading-[1.15] tracking-tight text-ink">
              {s.kanji}（{s.reading}）の性格と相性
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              インド占星術のナクシャトラ：
              <Link href={nakshatraHref(s.nakshatra)} className="underline underline-offset-4">
                {tr(t.nakshatras, s.nakshatra)}
              </Link>
            </p>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <section className="chart-card p-5 md:col-span-3">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">性格</h2>
              <p className="mt-2 leading-[1.9] text-text">{p.nature}</p>
            </section>
            <section className="chart-card p-5 md:col-span-1 md:col-start-1">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">恋愛・結婚</h2>
              <p className="mt-2 text-sm leading-[1.9] text-text">{p.love}</p>
            </section>
            <section className="chart-card p-5">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">仕事・学び</h2>
              <p className="mt-2 text-sm leading-[1.9] text-text">{p.work}</p>
            </section>
            <div className="md:row-span-1">
              <TodayShukuStrip self={s} />
            </div>
          </div>

          <div className="mt-6">
            <ShukuPicker self={s.slug} title={`${s.kanji}と相手の相性を調べる`} />
          </div>

          <section aria-labelledby="partners" className="mt-12">
            <h2 id="partners" className="font-header text-[length:var(--step-3)] text-ink">
              {s.kanji}と各宿の相性
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {groups.map(({ group, rows }) => (
                <article key={group} className="chart-card p-5">
                  <h3 className="font-header text-[length:var(--step-1)] text-ink">{GROUP_MEANING[group].title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.8] text-text-muted">{GROUP_MEANING[group].summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {rows.map(({ partner, relation }) => (
                      <li key={partner.slug}>
                        <Link
                          href={pairHref(s, partner)}
                          className="flex items-center justify-between gap-3 rounded-[10px] border border-border bg-washi px-3 py-2 text-sm transition-colors hover:border-terracotta/50"
                        >
                          <span className="text-ink">
                            {s.kanji}と<span className="font-medium">{partner.kanji}</span>
                          </span>
                          <span className="shrink-0 text-xs text-text-muted">
                            {relation.group === "mei" ? GROUP_KANJI.mei : `${RELATION_KANJI[relation.kind]}${relation.distance ? `・${DISTANCE_LABEL[relation.distance]}` : ""}`}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="faq" className="mt-12 max-w-3xl">
            <h2 id="faq" className="font-header text-[length:var(--step-3)] text-ink">
              よくある質問
            </h2>
            <div className="mt-5 space-y-3">
              {faq.map((f) => (
                <details key={f.question} className="disclose washi-card p-5">
                  <summary className="font-medium text-ink">{f.question}</summary>
                  <p className="mt-3 text-sm leading-[1.9] text-text">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/tools/sukuyo" className="washi-btn-primary gap-2 px-5 text-sm">
              自分の本命宿を正確に調べる
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link href="/sukuyo" className="washi-btn-secondary px-5 text-sm">
              27宿の相性早見表
            </Link>
          </div>
        </div>
      </PublicPageShell>
    </>
  );
}
