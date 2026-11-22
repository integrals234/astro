import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ShukuPicker from "@/components/sukuyo/ShukuPicker";
import ShareButtons from "@/components/sukuyo/ShareButtons";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { DISTANCE_MEANING, GROUP_MEANING, GROUP_THEMES, KIND_MEANING } from "@/lib/sukuyo/content";
import { pairSummary, pairTitle, profileOf, relationLabel } from "@/lib/sukuyo/page-data";
import { DISTANCE_LABEL, GROUP_KANJI, RELATION_KANJI, relationOf } from "@/lib/sukuyo/relations";
import { SHUKUS, pairHref, shukuBySlug, shukuHref, type Shuku } from "@/lib/sukuyo/shuku";

/** All 729 ordered pairs, Japanese only, fully static. */
export const dynamicParams = false;
export function generateStaticParams() {
  return SHUKUS.flatMap((a) => SHUKUS.map((b) => ({ locale: "ja", shuku: a.slug, partner: b.slug })));
}

type Params = { params: Promise<{ locale: string; shuku: string; partner: string }> };

function resolve(locale: string, shuku: string, partner: string): [Shuku, Shuku] | null {
  const a = shukuBySlug(shuku);
  const b = shukuBySlug(partner);
  return locale === "ja" && a && b ? [a, b] : null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, shuku, partner } = await params;
  const pair = resolve(locale, shuku, partner);
  if (!pair) return {};
  const [a, b] = pair;
  const r = relationOf(a, b);
  return buildPageMetadata({
    language: "ja",
    path: pairHref(a, b),
    title: `${pairTitle(a, b, r)}｜宿曜占星術`,
    description: pairSummary(a, b, r).slice(0, 150),
    excludeAlternates: ["en", "hi", "ko"],
  });
}

/** "相手はあなたの…" rewritten from a named side's point of view. */
const fromSide = (who: Shuku, text: string) => text.replace(/^相手はあなたの/, "相手は").replace("あなた", `${who.kanji}の人`);

export default async function PairPage({ params }: Params) {
  const { locale, shuku, partner } = await params;
  const pair = resolve(locale, shuku, partner);
  if (!pair) notFound();
  const [a, b] = pair;
  const r = relationOf(a, b);
  const g = GROUP_MEANING[r.group];
  const themes = GROUP_THEMES[r.group];
  const pa = profileOf(a);
  const pb = profileOf(b);
  const path = pairHref(a, b);
  const title = pairTitle(a, b, r);
  const summary = pairSummary(a, b, r);
  const same = a.slug === b.slug;

  const faq = [
    { question: `${a.kanji}と${b.kanji}の相性は？`, answer: summary },
    { question: `${a.kanji}と${b.kanji}の恋愛・結婚の相性は？`, answer: themes.love },
    { question: `${a.kanji}と${b.kanji}の仕事の相性は？`, answer: themes.work },
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
            { name: a.kanji, path: shukuHref(a) },
            { name: `${a.kanji}と${b.kanji}`, path },
          ]),
          articleSchema({ language: "ja", path, headline: title, description: summary }),
          faqSchema(faq),
        ]}
      />
      <PublicPageShell>
        <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-8 md:py-10">
          <Breadcrumbs
            language="ja"
            label="パンくずリスト"
            crumbs={[
              { name: "ホーム", path: "/" },
              { name: "宿曜占星術の相性", path: "/sukuyo" },
              { name: a.kanji, path: shukuHref(a) },
              { name: `${a.kanji}と${b.kanji}`, path },
            ]}
          />

          <header>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-washi-elevated px-3 py-1 text-xs tracking-[0.06em] text-terracotta">
              宿曜占星術・三九の秘法
            </p>
            <h1 className="mt-4 font-header text-[length:var(--step-4)] leading-[1.15] tracking-tight text-ink">
              {a.kanji}と{b.kanji}の相性
            </h1>
          </header>

          {/* The answer first: the relation from both sides. */}
          <section aria-label="相性の結論" className="chart-cover mt-6 p-5 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-3">
                <Link href={shukuHref(a)} className="font-header text-[length:var(--step-3)] text-ink">
                  {a.kanji}
                </Link>
                <ArrowLeftRight size={20} aria-hidden className="text-terracotta" />
                <Link href={shukuHref(b)} className="font-header text-[length:var(--step-3)] text-ink">
                  {b.kanji}
                </Link>
              </div>
              <p className="rounded-full bg-terracotta/12 px-4 py-1.5 font-header text-[length:var(--step-1)] text-terracotta">
                {relationLabel(r)}
              </p>
            </div>
            {!same ? (
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[14px] border border-border bg-washi p-4">
                  <dt className="text-xs text-text-muted">{a.kanji}から見た{b.kanji}</dt>
                  <dd className="mt-1 font-header text-[length:var(--step-2)] text-ink">「{RELATION_KANJI[r.kind]}」</dd>
                </div>
                <div className="rounded-[14px] border border-border bg-washi p-4">
                  <dt className="text-xs text-text-muted">{b.kanji}から見た{a.kanji}</dt>
                  <dd className="mt-1 font-header text-[length:var(--step-2)] text-ink">「{RELATION_KANJI[r.reverse]}」</dd>
                </div>
              </dl>
            ) : null}
            <p className="mt-5 leading-[1.9] text-text">{summary}</p>
          </section>

          <div className="mt-5">
            <ShareButtons path={path} text={`${a.kanji}と${b.kanji}の相性は「${relationLabel(r)}」｜宿曜占星術`} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <section className="chart-card p-5 md:col-span-2">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">{g.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-[1.9] text-text">
                <li>
                  <span className="font-medium text-ink">{a.kanji}の人から見ると：</span>
                  {fromSide(a, KIND_MEANING[r.kind])}
                </li>
                {!same ? (
                  <li>
                    <span className="font-medium text-ink">{b.kanji}の人から見ると：</span>
                    {fromSide(b, KIND_MEANING[r.reverse])}
                  </li>
                ) : null}
                {r.distance ? <li>{DISTANCE_MEANING[r.distance]}</li> : null}
              </ul>
            </section>
            <section className="chart-card p-5">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">恋愛・結婚</h2>
              <p className="mt-2 text-sm leading-[1.9] text-text">{themes.love}</p>
            </section>
            <section className="chart-card p-5">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">仕事</h2>
              <p className="mt-2 text-sm leading-[1.9] text-text">{themes.work}</p>
            </section>
            <section className="chart-card p-5 md:col-span-2">
              <h2 className="font-header text-[length:var(--step-1)] text-ink">友人関係</h2>
              <p className="mt-2 text-sm leading-[1.9] text-text">{themes.friend}</p>
            </section>
          </div>

          <section aria-labelledby="two" className="mt-10">
            <h2 id="two" className="font-header text-[length:var(--step-2)] text-ink">
              二人の宿の性格
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {(same ? [[a, pa]] as const : ([[a, pa], [b, pb]] as const)).map(([s, p]) => (
                <article key={s.slug} className="washi-card p-5">
                  <h3 className="font-header text-[length:var(--step-1)] text-ink">
                    {s.kanji}（{s.reading}）<span className="ml-2 text-sm text-text-muted">{p.keyword}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-[1.9] text-text">{p.nature}</p>
                  <Link href={shukuHref(s)} className="mt-3 inline-flex items-center gap-1.5 text-sm text-terracotta">
                    {s.kanji}の性格と相性一覧
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <ShukuPicker self={a.slug} title="ほかの宿との相性も調べる" />
          </div>

          <nav aria-label="関連ページ" className="mt-8 flex flex-wrap gap-3 text-sm">
            {!same ? (
              <Link href={pairHref(b, a)} className="washi-btn-secondary px-4 text-sm">
                {b.kanji}から見た{a.kanji}との相性
              </Link>
            ) : null}
            <Link href="/sukuyo" className="washi-btn-secondary px-4 text-sm">
              27宿の相性早見表
            </Link>
            <Link href="/tools/sukuyo" className="washi-btn-primary gap-2 px-4 text-sm">
              本命宿を正確に調べる
              <ArrowRight size={14} aria-hidden />
            </Link>
          </nav>

          <p className="mt-8 text-[11px] leading-relaxed text-text-muted">
            三九の秘法の{GROUP_KANJI[r.group]}にもとづく、伝統的な相性の読み方です。距離は二つの宿の間隔を近い側で数えています（流派により異なります）。
            {r.distance ? ` この二人は${DISTANCE_LABEL[r.distance]}です。` : ""}
          </p>
        </div>
      </PublicPageShell>
    </>
  );
}
