import type { EducationLang } from "@/lib/education/types";

export type WelcomeStartingPointId =
  | "new-readers"
  | "own-chart"
  | "learn-practice"
  | "personal-reading";

export interface WelcomeQuickLink {
  href: string;
  label: { en: string; ja: string };
}

export interface WelcomeStartingPoint {
  id: WelcomeStartingPointId;
  title: { en: string; ja: string };
  body: { en: string; ja: string };
  links: WelcomeQuickLink[];
}

export const welcomeContent = {
  title: {
    en: "Welcome to Jyotish Life",
    ja: "ジョーティッシュ・ライフへようこそ",
  },
  intro: [
    {
      en: "There are turns in life that are hard to explain — a pattern that repeats, a question that stays unanswered, a search for direction. Jyotish, the predictive and preventive science of Vedic astrology, has addressed these questions for thousands of years. Jyotish Life was created to bring this knowledge to Japanese readers, in a form that is authentic, clear, and genuinely usable.",
      ja: "人生には説明しにくい転機があります——繰り返すパターン、答えの見つからない問い、方向性を求める探索。予測と予防のヴェーダ占星術であるジョーティッシュは、数千年にわたりこれらの問いに向き合ってきました。ジョーティッシュ・ライフは、この知識を日本語の読者の皆様に、正統で、明確で、実際に役立つ形でお届けするために創設されました。",
    },
    {
      en: "Jyotish Life offers a comprehensive collection of resources on Vedic astrology — articles, diagrams, a precise birth chart generator, an interactive way to learn, and personal readings prepared directly by a practising Vedic astrologer. The material has been written for readers at every level, from complete beginners to those with deeper interest in the subject.",
      ja: "ジョーティッシュ・ライフでは、ヴェーダ占星術に関する包括的なリソースを提供しています——記事、図解、精密な出生チャート生成、インタラクティブな学習方法、そして実践するヴェーダ占星術師が直接作成する個人鑑定。初心者の方からより深い関心をお持ちの方まで、あらゆるレベルの読者のために執筆されています。",
    },
  ],
  startingPointsLead: {
    en: "Below are some suggested starting points, depending on what you are looking for",
    ja: "お探しの内容に応じて、以下の出発点をご提案します",
  },
  instagram: {
    en: {
      line: "Daily chart tips and Jyotish insights on Instagram",
      handle: "@jyotishlife.jp",
      cta: "Follow",
    },
    ja: {
      line: "Instagramで毎日のチャートのヒントとジョーティッシュの洞察をお届け",
      handle: "@jyotishlife.jp",
      cta: "フォロー",
    },
  },
  startingPoints: [
    {
      id: "new-readers",
      title: {
        en: "For Readers New to Vedic Astrology",
        ja: "ヴェーダ占星術が初めての方へ",
      },
      body: {
        en: "If you are new to Jyotish, we recommend beginning with our Learn Jyotish section, followed by Introduction, Rashis (Signs), and Planets. These provide the foundation needed to understand everything else on Jyotish Life.",
        ja: "ジョーティッシュが初めての方は、まず「占星術を学ぶ」セクションから始め、その後「入門」「ラーシ（星座）」「惑星（グラハ）」へ進むことをおすすめします。ジョーティッシュ・ライフの他の内容を理解するための基礎となります。",
      },
      links: [
        {
          href: "/learn-jyotish",
          label: { en: "Learn Jyotish", ja: "占星術を学ぶ" },
        },
        {
          href: "/learn-jyotish?section=introduction",
          label: { en: "Introduction", ja: "入門" },
        },
        {
          href: "/learn-jyotish?section=rashis",
          label: { en: "Rashis (Signs)", ja: "ラーシ（星座）" },
        },
        {
          href: "/learn-jyotish?section=planets",
          label: { en: "Planets", ja: "惑星（グラハ）" },
        },
      ],
    },
    {
      id: "own-chart",
      title: {
        en: "For Those Who Want to See Their Own Chart",
        ja: "ご自身のチャートから始めたい方へ",
      },
      body: {
        en: "If you would like to begin with your own birth details, our chart generator produces a precise Vedic horoscope — in both North and South Indian styles — based on authentic calculation methods. We recommend reading the Introduction and Houses (Bhavas) sections alongside your chart, as this will help you understand what you are looking at.",
        ja: "出生データから始めたい方には、正統な計算法に基づく精密なヴェーダホロスコープを、北インド式・南インド式の両方で生成できます。チャートとあわせて「入門」「ハウス（バーヴァ）」を読むと、見ている内容の理解が深まります。",
      },
      links: [
        {
          href: "/chart",
          label: { en: "Chart generator", ja: "チャート作成" },
        },
      ],
    },
    {
      id: "learn-practice",
      title: {
        en: "For Those Who Want to Learn Through Practice",
        ja: "実践を通じて学びたい方へ",
      },
      body: {
        en: "If you prefer to learn by doing rather than reading first, our interactive Jyotish game offers a simple way to see how the planets and houses work together, before going deeper into the articles.",
        ja: "まず読むより、実践で学びたい方には、記事を深く読む前に惑星とハウスの関係を体験できるインタラクティブなジョーティッシュゲームをご用意しています。",
      },
      links: [
        {
          href: "/test-beta",
          label: { en: "Interactive Jyotish game", ja: "インタラクティブ・ジョーティッシュ" },
        },
      ],
    },
    {
      id: "personal-reading",
      title: {
        en: "For Readers Seeking a Personal Reading",
        ja: "個人鑑定をご希望の方へ",
      },
      body: {
        en: "Those who wish to go beyond self-study can request a personal appraisal, prepared directly by Om Shukla, a Vedic Brahmin astrologer trained in a family tradition of Jyotish, with additional training under Jyotishacharya Dr. Usha Shukla (gold medalist, PhD in Vedic Astrology).",
        ja: "独学を超えて個別のご相談をご希望の方は、家系のジョーティッシュを継承するヴェーダ・ブラーミン占星術師オム・シュクラによる個人鑑定をご依頼いただけます。ジョーティシャーチャarya ウシャ・シュクラ博士（ヴェーダ占星術博士、金メダリスト）のもとでも研鑽を積んでいます。",
      },
      links: [
        {
          href: "/personal-appraisals",
          label: { en: "Personal Appraisals", ja: "個人鑑定" },
        },
      ],
    },
  ] satisfies WelcomeStartingPoint[],
} as const;

export function welcomeText(
  field: { en: string; ja: string },
  lang: EducationLang
): string {
  return field[lang];
}
