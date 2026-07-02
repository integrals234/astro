import { Scale } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter9WesternVedic: CourseChapter = {
  id: "ch9",
  number: 9,
  title: { en: "Jyotish vs Western Astrology", ja: "ジョーティシュと西洋占星術" },
  subtitle: {
    en: "Two lenses on the same sky — different strengths",
    ja: "同じ空を見る二つのレンズ — それぞれの強み",
  },
  icon: Scale,
  steps: [
    {
      id: "ch9-s0",
      kind: "content",
      icon: "compass",
      title: { en: "Two Systems, Two Strengths", ja: "二つの体系、二つの強み" },
      body: {
        en: "Western Astrology emphasizes psychology — thoughts, emotions, and inner patterns. It excels at counselling and self-understanding. Vedic Astrology emphasizes karma — which influences return, when, and how to soften them.",
        ja: "西洋占星術は心理学 — 思考・感情・内面のパターン — を重視します。カウンセリングと自己理解に優れます。ヴェーダ占星術はカルマ — どの影響が返り、いつ、どう和らげるか — を重視します。",
      },
      highlight: {
        en: "Neither replaces the other — each offers unique value.",
        ja: "どちらも他を置き換えません — それぞれ独自の価値があります。",
      },
    },
    {
      id: "ch9-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "Sidereal vs Tropical Zodiac", ja: "サイデリアル vs トロピカル黄道" },
      body: {
        en: "Both systems use the same 30° sign segments (Aries, Taurus…). The difference is the starting point. Vedic uses the fixed Sidereal Zodiac anchored to distant stars. Western uses the Tropical Zodiac anchored to the spring equinox, which drifts over centuries.",
        ja: "両体系とも同じ30°の星座区分（牡羊・牡牛…）を使います。違いは起点です。ヴェーダは遠い星に固定されたサイデリアル黄道を使います。西洋は春分に固定されたトロピカル黄道を使い、世紀ごとにずれます。",
      },
      bullets: [
        { en: "The two zodiacs aligned ~1,700 years ago", ja: "二つの黄道は約1700年前に一致していた" },
        { en: "Today they differ by ~24° (Ayanamsha)", ja: "今日は約24°（アヤナームシャ）の差" },
        { en: "This is why your Vedic Sun sign may differ from Western", ja: "だからヴェーダの太陽星座が西洋と異なることがある" },
      ],
    },
    {
      id: "ch9-s2",
      kind: "content",
      icon: "sun",
      title: { en: "The Ayanamsha in Practice", ja: "実践のアヤナームシャ" },
      body: {
        en: "To convert a Western tropical position to Vedic sidereal, subtract roughly 24°. If your Western Sun is at 14° Virgo, sidereally that's 14 − 24 = −10° Virgo, which wraps to 20° Leo.",
        ja: "西洋のトロピカル位置をヴェーダのサイデリアルに変換するには、おおよそ24°を引きます。西洋の太陽が乙女座14°なら、サイデリアルでは14−24=−10°乙女座 → 獅子座20°に回り込みます。",
      },
      highlight: {
        en: "If born around 300 AD, both systems would show nearly identical positions.",
        ja: "紀元300年頃生まれなら、両体系はほぼ同じ位置を示すでしょう。",
      },
    },
    {
      id: "ch9-s3",
      kind: "content",
      icon: "mountain",
      title: { en: "Nine Grahas, Not Twelve Planets", ja: "9つのグラハ、12惑星ではない" },
      body: {
        en: "Jyotish uses only 9 Grahas: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, plus Rahu and Ketu (lunar nodes). Neptune, Uranus, and Pluto are not used — all predictive information is encoded in these nine.",
        ja: "ジョーティシュは9つのグラハのみ：太陽・月・水星・金星・火星・木星・土星、プラスラーフとケートゥ（月の交点）。海王星・天王星・冥王星は使いません — 予測に必要な情報はこの9つに符号化されています。",
      },
      bullets: [
        { en: "Information field, not Newtonian \"planetary forces\"", ja: "情報場であり、ニュートン的な「惑星の力」ではない" },
        { en: "9 planets × 12 signs × 12 houses × 27 Nakshatras = complete code", ja: "9惑星×12星座×12ハウス×27ナクシャトラ＝完全なコード" },
        { en: "Principles unchanged for thousands of years", ja: "原則は数千年変わらない" },
      ],
    },
    {
      id: "ch9-s4",
      kind: "content",
      icon: "moon",
      title: { en: "Sun Sign vs Ascendant", ja: "太陽星座 vs アセンダント" },
      body: {
        en: "In Jyotish, the Sun sign is a relatively minor factor. Far greater weight goes to the Ascendant (Lagna), Moon sign, Nakshatras, planetary strength, and Mahadashas — not newspaper-style Sun sign columns.",
        ja: "ジョーティシュでは太陽星座は比較的小さな要素です。アセンダント（ラグナ）・月星座・ナクシャトラ・惑星の強さ・マハーダシャーにずっと大きな重み — 新聞の太陽星座コラムではありません。",
      },
      bullets: [
        { en: "Mahadashas matter far more than transits in Jyotish", ja: "ジョーティシュではトランジットよりマハーダシャーがはるかに重要" },
        { en: "Western Sun-sign columns = entertainment, not applied astrology", ja: "西洋の太陽星座コラム＝エンタメであり、応用占星術ではない" },
      ],
    },
    {
      id: "ch9-s5",
      kind: "content",
      icon: "sparkles",
      title: { en: "Karmic Engineering vs Self-Reflection", ja: "カルマ工学 vs 自己省察" },
      body: {
        en: "Western charts help you understand who you are psychologically. Vedic charts help you understand what karmas are returning, when, and what practical steps — gemstones, mantras, charity, homas — can rebalance planetary influences.",
        ja: "西洋のチャートは心理的に自分が誰かを理解する助けになります。ヴェーダのチャートはどのカルマが返り、いつ、そして宝石・マントラ・慈善・ホーマなどの実践的ステップで惑星の影響を再平衡できるかを理解する助けになります。",
      },
      highlight: {
        en: "Vedic Astrology is the ultimate form of karmic engineering.",
        ja: "ヴェーダ占星術はカルマ工学の究極形です。",
      },
    },
    {
      id: "ch9-flash",
      kind: "flashcards",
      title: { en: "East vs West Flashcards", ja: "東西比較フラッシュカード" },
      instruction: {
        en: "Flip to learn key differences between the two astrological traditions.",
        ja: "裏返して二つの占星術伝統の主要な違いを覚えましょう。",
      },
      cards: [
        { id: "w1", front: { en: "Western focus", ja: "西洋の焦点" }, back: { en: "Psychology & mind", ja: "心理学と心" }, icon: "wind" },
        { id: "w2", front: { en: "Vedic focus", ja: "ヴェーダの焦点" }, back: { en: "Karma & timing", ja: "カルマと時期" }, icon: "moon" },
        { id: "w3", front: { en: "Western zodiac", ja: "西洋の黄道" }, back: { en: "Tropical (movable)", ja: "トロピカル（可動）" }, icon: "sun" },
        { id: "w4", front: { en: "Vedic zodiac", ja: "ヴェーダの黄道" }, back: { en: "Sidereal (fixed to stars)", ja: "サイデリアル（星に固定）" }, icon: "orbit" },
        { id: "w5", front: { en: "Ayanamsha", ja: "アヤナームシャ" }, back: { en: "~24° gap between zodiacs", ja: "黄道間の約24°の差" }, icon: "compass" },
        { id: "w6", front: { en: "Vedic timing system", ja: "ヴェーダの時期体系" }, back: { en: "Mahadashas (planetary periods)", ja: "マハーダシャー（惑星期）" }, icon: "mountain" },
      ],
    },
    {
      id: "ch9-match",
      kind: "match",
      title: { en: "Match Trait to Tradition", ja: "特徴と伝統をマッチ" },
      instruction: {
        en: "Connect each astrological feature to Western or Vedic astrology.",
        ja: "各占星術の特徴を西洋式かヴェーダ式かにつなげましょう。",
      },
      pairs: [
        { leftId: "psych", left: { en: "Counselling & self-understanding", ja: "カウンセリングと自己理解" }, rightId: "west", right: { en: "Western Astrology", ja: "西洋占星術" }, leftIcon: "wind" },
        { leftId: "karma", left: { en: "Returning karmas & remedies", ja: "返ってくるカルマとレメディ" }, rightId: "vedic", right: { en: "Vedic Astrology", ja: "ヴェーダ占星術" }, leftIcon: "moon" },
        { leftId: "trop", left: { en: "Spring equinox starting point", ja: "春分を起点" }, rightId: "west2", right: { en: "Western (Tropical)", ja: "西洋（トロピカル）" }, leftIcon: "sun" },
        { leftId: "sid", left: { en: "Fixed star background", ja: "固定星背景" }, rightId: "vedic2", right: { en: "Vedic (Sidereal)", ja: "ヴェーダ（サイデリアル）" }, leftIcon: "orbit" },
        { leftId: "pluto", left: { en: "Uses Pluto & Neptune", ja: "冥王星・海王星を使用" }, rightId: "west3", right: { en: "Western Astrology", ja: "西洋占星術" }, leftIcon: "sparkles" },
      ],
    },
    {
      id: "ch9-order",
      kind: "order",
      title: { en: "Convert Western to Vedic Sun", ja: "西洋太陽をヴェーダに変換" },
      instruction: {
        en: "Order the steps to convert a Western tropical Sun position to Vedic sidereal (example: 14° Virgo).",
        ja: "西洋トロピカルの太陽位置をヴェーダサイデリアルに変換する手順を並べましょう（例：乙女座14°）。",
      },
      items: [
        { id: "note", label: { en: "Note Western tropical degree (14° Virgo)", ja: "西洋トロピカル度数をメモ（乙女座14°）" }, icon: "sun" },
        { id: "sub", label: { en: "Subtract Ayanamsha (~24°)", ja: "アヤナームシャ（約24°）を引く" }, icon: "mountain" },
        { id: "wrap", label: { en: "If negative, add 30° and go to previous sign", ja: "負なら30°足して前の星座へ" }, icon: "orbit" },
        { id: "result", label: { en: "Result: 20° Leo (Simha)", ja: "結果：獅子座（シンハ）20°" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch9-tf",
      kind: "true-false",
      title: { en: "East vs West: True or False", ja: "東西比較 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "wtf1",
          statement: { en: "Vedic and Western astrology use different zodiac symbol glyphs (♈♉♊).", ja: "ヴェーダと西洋占星術は異なる星座記号（♈♉♊）を使う。" },
          isTrue: false,
          explanation: { en: "Symbols are the same; zodiac starting points differ.", ja: "記号は同じ；黄道の起点が異なります。" },
        },
        {
          id: "wtf2",
          statement: { en: "Jyotish views the universe as an interconnected field of information.", ja: "ジョーティシュは宇宙を相互接続された情報場と見なす。" },
          isTrue: true,
          explanation: { en: "Planets encode karmic data — not mechanistic forces.", ja: "惑星はカルマデータを符号化 — 機械的な力ではありません。" },
        },
        {
          id: "wtf3",
          statement: { en: "In Jyotish, the Sun sign is the most important factor — like Western horoscopes.", ja: "ジョーティシュでは西洋のように太陽星座が最重要要素だ。" },
          isTrue: false,
          explanation: { en: "Ascendant, Moon, Nakshatras, and dashas carry far more weight.", ja: "アセンダント・月・ナクシャトラ・ダシャーの方がはるかに重要です。" },
        },
        {
          id: "wtf4",
          statement: { en: "Only Vedic Astrology offers remedial measures for challenging karmas.", ja: "厳しいカルマへのレメディを提供するのはヴェーダ占星術だけだ。" },
          isTrue: true,
          explanation: { en: "Planetary antidotes (Upayes) are unique to the Jyotish tradition.", ja: "惑星の解決策（ウパーヤ）はジョーティシュ伝統独自です。" },
        },
      ],
    },
    {
      id: "ch9-multi",
      kind: "multi-select",
      title: { en: "What Jyotish Uses", ja: "ジョーティシュが使うもの" },
      question: {
        en: "Which are part of the Vedic astrological toolkit? Select ALL that apply.",
        ja: "ヴェーダ占星術のツールキットに含まれるものは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "sid", label: { en: "Sidereal zodiac", ja: "サイデリアル黄道" }, icon: "orbit" },
        { id: "dash", label: { en: "Mahadasha planetary periods", ja: "マハーダシャー惑星期" }, icon: "moon" },
        { id: "nep", label: { en: "Neptune & Uranus transits", ja: "海王星・天王星トランジット" }, icon: "wind" },
        { id: "nak", label: { en: "27 Nakshatras", ja: "27ナクシャトラ" }, icon: "sparkles" },
        { id: "rahu", label: { en: "Rahu & Ketu (lunar nodes)", ja: "ラーフとケートゥ（月の交点）" }, icon: "compass" },
        { id: "sunonly", label: { en: "Sun sign as primary reading tool", ja: "太陽星座を主要リーディングツール" }, icon: "sun" },
      ],
      correctOptionIds: ["sid", "dash", "nak", "rahu"],
      explanation: {
        en: "Jyotish uses sidereal zodiac, dashas, Nakshatras, and the nine Grahas including nodes — not outer planets or Sun-sign-only readings.",
        ja: "ジョーティシュはサイデリアル黄道・ダシャー・ナクシャトラ・交点を含む9グラハを使い — 外惑星や太陽星座のみのリーディングではありません。",
      },
    },
    {
      id: "ch9-quiz",
      kind: "quiz",
      question: {
        en: "Your Western Sun is at 28° Virgo. After subtracting ~24° Ayanamsha, where is your Vedic Sun?",
        ja: "西洋の太陽が乙女座28°。アヤナームシャ約24°を引くと、ヴェーダの太陽は？",
      },
      options: [
        { id: "virgo", label: { en: "4° Virgo (sign unchanged)", ja: "乙女座4°（星座変わらず）" }, icon: "mountain" },
        { id: "leo", label: { en: "20° Leo (previous sign)", ja: "獅子座20°（前の星座）" }, icon: "sun" },
        { id: "libra", label: { en: "4° Libra (next sign)", ja: "天秤座4°（次の星座）" }, icon: "wind" },
        { id: "same", label: { en: "28° Virgo (no change)", ja: "乙女座28°（変化なし）" }, icon: "orbit" },
      ],
      correctOptionId: "virgo",
      explanation: {
        en: "28 − 24 = 4° Virgo. The sign stays the same when the result remains positive within the sign.",
        ja: "28−24=乙女座4°。結果が星座内で正のままなら星座は変わりません。",
      },
    },
  ],
};
