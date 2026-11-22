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
import { breadcrumbSchema, faqSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { DISTANCE_MEANING, GROUP_MEANING, SHUKU_PROFILES } from "@/lib/sukuyo/content";
import { GROUP_ORDER, SHUKU_DISPLAY_ORDER } from "@/lib/sukuyo/page-data";
import { relationOf, RELATION_KANJI, type RelationGroup } from "@/lib/sukuyo/relations";
import { pairHref, shukuHref } from "@/lib/sukuyo/shuku";

/** 宿曜 pages are Japanese only (a Japanese search topic). */
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ja" }];
}
/** The "today's 宿" strip changes through the day. */
export const revalidate = 3600;

const PATH = "/sukuyo";
const TITLE = "宿曜占星術の相性｜27宿の性格と相性早見表（三九の秘法）";
const DESCRIPTION =
  "宿曜占星術（しゅくようせんせいじゅつ）の27宿それぞれの性格と、三九の秘法による相性（栄親・友衰・安壊・危成・業胎・命）を早見表で。二つの宿を選ぶと、恋愛・仕事・友人の相性を詳しく読めます。今日の月の宿も毎日更新。";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "ja") return {};
  return buildPageMetadata({ language: "ja", path: PATH, title: TITLE, description: DESCRIPTION, excludeAlternates: ["en", "hi", "ko"] });
}

const CELL_TONE: Record<RelationGroup, string> = {
  eishin: "bg-terracotta/15 text-terracotta",
  yuusui: "bg-terracotta/7 text-ink",
  gyoutai: "bg-moss/15 text-moss",
  mei: "bg-neutral-tag text-ink",
  kisei: "bg-washi text-text-muted",
  ankai: "bg-moss/8 text-text",
};

const FAQ = [
  {
    question: "宿曜占星術とは何ですか？",
    answer:
      "生まれた日の月の位置を27の宿（星座）に当てはめて、性格や相性、日々の運勢を読む占星術です。インドの月宿（ナクシャトラ）の体系が、唐代の中国で『宿曜経』としてまとめられ、空海によって日本に伝えられたとされます。",
  },
  {
    question: "三九の秘法とは何ですか？",
    answer:
      "自分の宿から相手の宿までを数え、その位置によって「命・業・胎・栄・親・友・衰・安・壊・危・成」の関係を割り出す方法です。関係は栄親・友衰・安壊・危成・業胎・命の六つに分かれ、栄親や友衰は穏やかな好相性、安壊や危成は刺激と試練を伴う相性とされます。",
  },
  {
    question: "近距離・中距離・遠距離はどう決まりますか？",
    answer:
      "流派によって数え方が異なります。当サイトでは、二つの宿の間隔を近い側で数え、1〜4宿を近距離、5〜8宿を中距離、10〜13宿を遠距離としています（命・業・胎には距離はありません）。この方法では、二人の距離はどちらから見ても同じになります。",
  },
  {
    question: "自分の宿（本命宿）はどうやって調べますか？",
    answer:
      "生年月日・出生時刻・出生地から、生まれたときの月の位置を計算して求めます。当サイトの「宿曜占星術｜本命宿を調べる」ツールで、旧暦の日付ではなく月の実際の位置から算出できます。",
  },
];

export default async function SukuyoHubPage({ params }: Params) {
  const { locale } = await params;
  if (locale !== "ja") notFound();

  return (
    <>
      <JsonLd
        nodes={[
          organizationSchema("ja"),
          websiteSchema("ja"),
          breadcrumbSchema("ja", [
            { name: "ホーム", path: "/" },
            { name: "宿曜占星術の相性", path: PATH },
          ]),
          faqSchema(FAQ),
        ]}
      />
      <PublicPageShell>
        <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-10">
          <Breadcrumbs
            language="ja"
            label="パンくずリスト"
            crumbs={[
              { name: "ホーム", path: "/" },
              { name: "宿曜占星術の相性", path: PATH },
            ]}
          />

          <header className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-washi-elevated px-3 py-1 text-xs tracking-[0.06em] text-terracotta">
              宿曜占星術・二十七宿
            </p>
            <h1 className="mt-4 font-header text-[length:var(--step-4)] leading-[1.15] tracking-tight text-ink">宿曜占星術の相性と27宿の性格</h1>
            <p className="mt-4 leading-[1.9] text-text">
              宿曜占星術は、生まれた日の月の位置を27の宿に当てはめて、性格や人との相性を読む占いです。二人の宿の位置関係から相性を割り出す「三九の秘法」で、恋愛・結婚、仕事、友人関係の傾向を読み解きます。
            </p>
          </header>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <ShukuPicker />
            <TodayShukuStrip />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-text-muted">自分の宿がわからない方は</span>
            <Link href="/tools/sukuyo" className="washi-btn-secondary gap-2 px-4 text-sm">
              本命宿を調べる（無料）
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <section aria-labelledby="relations" className="mt-14">
            <h2 id="relations" className="font-header text-[length:var(--step-3)] text-ink">
              三九の秘法・六つの相性
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {GROUP_ORDER.map((g) => (
                <article key={g} className="chart-card p-5">
                  <h3 className="font-header text-[length:var(--step-1)] text-ink">{GROUP_MEANING[g].title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-text">{GROUP_MEANING[g].summary}</p>
                </article>
              ))}
            </div>
            <div className="mt-5 chart-card p-5 text-sm leading-[1.85] text-text">
              <h3 className="font-header text-[length:var(--step-1)] text-ink">相性の「距離」</h3>
              <ul className="mt-2 space-y-1">
                <li>{DISTANCE_MEANING.near}</li>
                <li>{DISTANCE_MEANING.mid}</li>
                <li>{DISTANCE_MEANING.far}</li>
              </ul>
              <p className="mt-2 text-xs text-text-muted">
                距離の数え方は流派によって異なります。当サイトは二つの宿の間隔を近い側で数えます（1〜4宿＝近距離、5〜8宿＝中距離、10〜13宿＝遠距離）。
              </p>
            </div>
          </section>

          <section aria-labelledby="shukus" className="mt-14">
            <h2 id="shukus" className="font-header text-[length:var(--step-3)] text-ink">
              27宿の性格
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {SHUKU_DISPLAY_ORDER.map((s) => (
                <li key={s.slug}>
                  <Link href={shukuHref(s)} className="washi-card washi-card-interactive flex h-full flex-col p-4">
                    <span className="font-header text-[length:var(--step-1)] text-ink">{s.kanji}</span>
                    <span className="text-xs text-text-muted">{s.reading}</span>
                    <span className="mt-2 text-[13px] leading-snug text-text">{SHUKU_PROFILES[s.kanji].keyword}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="chart" className="mt-14">
            <h2 id="chart" className="font-header text-[length:var(--step-3)] text-ink">
              宿曜 相性早見表（27宿×27宿）
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-[1.85] text-text-muted">
              縦が自分の宿、横が相手の宿です。マスは「自分から見た相手」の関係で、押すとその二人の相性を詳しく読めます。
            </p>
            <div className="mt-5 overflow-x-auto rounded-[16px] border border-border" data-lenis-prevent>
              <table className="min-w-[900px] border-collapse text-center text-[11px]">
                <thead>
                  <tr>
                    <th scope="col" className="sticky left-0 z-10 bg-washi-elevated p-1.5 text-text-muted">
                      自分＼相手
                    </th>
                    {SHUKU_DISPLAY_ORDER.map((s) => (
                      <th key={s.slug} scope="col" className="bg-washi-elevated p-1 font-normal text-text-muted">
                        {s.kanji[0]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SHUKU_DISPLAY_ORDER.map((a) => (
                    <tr key={a.slug}>
                      <th scope="row" className="sticky left-0 z-10 bg-washi-elevated p-1.5 font-normal text-ink">
                        <Link href={shukuHref(a)}>{a.kanji}</Link>
                      </th>
                      {SHUKU_DISPLAY_ORDER.map((b) => {
                        const r = relationOf(a, b);
                        return (
                          <td key={b.slug} className="border border-border/60 p-0">
                            <Link
                              href={pairHref(a, b)}
                              title={`${a.kanji}と${b.kanji}の相性`}
                              className={`block px-1 py-1.5 ${CELL_TONE[r.group]} hover:outline hover:outline-1 hover:outline-terracotta`}
                            >
                              {RELATION_KANJI[r.kind]}
                            </Link>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="faq" className="mt-14 max-w-3xl">
            <h2 id="faq" className="font-header text-[length:var(--step-3)] text-ink">
              よくある質問
            </h2>
            <div className="mt-5 space-y-3">
              {FAQ.map((f) => (
                <details key={f.question} className="disclose washi-card p-5">
                  <summary className="font-medium text-ink">{f.question}</summary>
                  <p className="mt-3 text-sm leading-[1.9] text-text">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </PublicPageShell>
    </>
  );
}
