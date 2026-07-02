import { TrendingUp } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter17PlanetaryStrength: CourseChapter = {
  id: "ch17",
  number: 17,
  title: { en: "Planetary Strength & Dignity", ja: "惑星の強さと品位" },
  subtitle: {
    en: "Exaltation, debilitation, rulership & Avasthas",
    ja: "高揚・弱体・支配・アヴァスタ",
  },
  icon: TrendingUp,
  steps: [
    {
      id: "ch17-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Why Strength Matters", ja: "なぜ強さが重要か" },
      body: {
        en: "Evaluating planetary strength is fundamental in Jyotish. A strong planet delivers benefits through its natural Karakas (Sun → vitality, Moon → mind) AND through the houses it rules from your Ascendant.",
        ja: "惑星の強さの評価はジョーティシュの基本です。強い惑星は天然のカーラカ（太陽→活力、月→心）と、アセンダントから支配するハウスの両方で利益をもたらします。",
      },
      highlight: {
        en: "Example: Aries Lagna → Leo is 5th house → strong Sun boosts children, creativity, AND confidence.",
        ja: "例：牡羊ラグナ→獅子は第5ハウス→強い太陽が子供・創造性・自信を高める。",
      },
    },
    {
      id: "ch17-s1",
      kind: "content",
      icon: "mountain",
      title: { en: "Four Core Strength States", ja: "四つの核心強度状態" },
      body: {
        en: "Beginners focus on four principal categories by sign placement: Exalted (strongest), Moolatrikona (between exalted and own), Own Sign (strong), Debilitated/Fallen (weakest). Debilitation is always 180° opposite exaltation.",
        ja: "初心者は星座配置による四つの主要カテゴリーに集中：高揚（最強）、ムーラトリコナ（高揚と支配の間）、支配星座（強い）、弱体/落ち（最弱）。弱体は常に高揚の180°反対。",
      },
      bullets: [
        { en: "Exalted → maximum positive returning karma", ja: "高揚→最大のポジティブ返却カルマ" },
        { en: "Debilitated → reduced ability to give good results", ja: "弱体→良い結果を与える能力が減少" },
        { en: "Parashara's scale: Exalted 100%, Moolatrikona 75%, Own 50%", ja: "パーラシャラの尺度：高揚100%、ムーラトリコナ75%、支配50%" },
      ],
    },
    {
      id: "ch17-s2",
      kind: "content",
      icon: "sun",
      title: { en: "Key Exaltations to Know", ja: "覚えるべき主要高揚" },
      body: {
        en: "Memorise these cornerstone dignities — they appear in every chart reading.",
        ja: "これらの基本品位を覚えましょう — すべてのチャートリーディングに現れます。",
      },
      bullets: [
        { en: "Sun exalted in Mesha (Aries), debilitated in Tula (Libra)", ja: "太陽高揚：メーシャ（牡羊）、弱体：トゥラ（天秤）" },
        { en: "Moon exalted in Vrishabha (Taurus), debilitated in Vrishchika (Scorpio)", ja: "月高揚：ヴリシャバ（牡牛）、弱体：ヴリシュチカ（蠍）" },
        { en: "Jupiter exalted in Karka (Cancer), debilitated in Makara (Capricorn)", ja: "木星高揚：カルカ（蟹）、弱体：マカラ（山羊）" },
        { en: "Venus exalted in Meena (Pisces), debilitated in Kanya (Virgo)", ja: "金星高揚：ミーナ（魚）、弱体：カニヤ（乙女）" },
        { en: "Saturn exalted in Tula (Libra), debilitated in Mesha (Aries)", ja: "土星高揚：トゥラ（天秤）、弱体：メーシャ（牡羊）" },
      ],
    },
    {
      id: "ch17-s3",
      kind: "content",
      icon: "orbit",
      title: { en: "Sign Rulership (Ownership)", ja: "星座支配（オーナーシップ）" },
      body: {
        en: "Each sign belongs to a planet. Sun and Moon rule one sign each; Mars, Mercury, Jupiter, Venus, Saturn rule two. Rahu and Ketu own no sign.",
        ja: "各星座は惑星に属します。太陽と月は各1星座；火星・水星・木星・金星・土星は2つ。ラーフとケートゥは星座を支配しない。",
      },
      bullets: [
        { en: "Sun → Simha (Leo); Moon → Karka (Cancer)", ja: "太陽→シンハ（獅子）；月→カルカ（蟹）" },
        { en: "Mars → Mesha & Vrishchika; Mercury → Mithuna & Kanya", ja: "火星→メーシャ＆ヴリシュチカ；水星→ミトゥナ＆カニヤ" },
        { en: "Jupiter → Dhanu & Meena; Venus → Vrishabha & Tula", ja: "木星→ダヌ＆ミーナ；金星→ヴリシャバ＆トゥラ" },
        { en: "Saturn → Makara & Kumbha", ja: "土星→マカラ＆クンバ" },
      ],
    },
    {
      id: "ch17-s4",
      kind: "content",
      icon: "wind",
      title: { en: "Friends, Neutrals & Enemies", ja: "友・中立・敵" },
      body: {
        en: "Beyond the four core states, planets in friendly signs score ~25%, neutral ~12%, enemy/debilitated ~0%. Temporary friendships (Great Friend/Great Enemy) depend on chart positions — software calculates these.",
        ja: "四核心状態の他、友星座で約25%、中立約12%、敵/弱体約0%。一時的友情（大友/大敵）はチャート位置次第 — ソフトが計算。",
      },
      highlight: {
        en: "Venus in a Sun-ruled sign (enemy) is less comfortable than Venus in a Mercury-ruled sign (friend).",
        ja: "太陽支配星座（敵）の金星は、水星支配星座（友）より快適でない。",
      },
    },
    {
      id: "ch17-flash",
      kind: "flashcards",
      title: { en: "Exaltation Flashcards", ja: "高揚 フラッシュカード" },
      instruction: {
        en: "Flip each card — match the Graha to its exaltation sign. View all to continue.",
        ja: "各カードを裏返し — グラハと高揚星座を結びつけましょう。すべて見て進みます。",
      },
      cards: [
        { id: "e1", front: { en: "Surya exalted", ja: "スーリヤ高揚" }, back: { en: "Mesha (Aries) 10°", ja: "メーシャ（牡羊）10°" }, icon: "sun" },
        { id: "e2", front: { en: "Chandra exalted", ja: "チャンドラ高揚" }, back: { en: "Vrishabha (Taurus)", ja: "ヴリシャバ（牡牛）" }, icon: "moon" },
        { id: "e3", front: { en: "Guru exalted", ja: "グル高揚" }, back: { en: "Karka (Cancer) 5°", ja: "カルカ（蟹）5°" }, icon: "sparkles" },
        { id: "e4", front: { en: "Shukra exalted", ja: "シュクラ高揚" }, back: { en: "Meena (Pisces) 27°", ja: "ミーナ（魚）27°" }, icon: "droplets" },
        { id: "e5", front: { en: "Shani exalted", ja: "シャニ高揚" }, back: { en: "Tula (Libra) 20°", ja: "トゥラ（天秤）20°" }, icon: "mountain" },
        { id: "e6", front: { en: "Mangal exalted", ja: "マンガル高揚" }, back: { en: "Makara (Capricorn) 28°", ja: "マカラ（山羊）28°" }, icon: "flame" },
      ],
    },
    {
      id: "ch17-match",
      kind: "match",
      title: { en: "Match Planet to Debilitation", ja: "惑星と弱体をマッチ" },
      instruction: {
        en: "Each exaltation has an opposite debilitation — connect the pairs.",
        ja: "各高揚には反対の弱体がある — ペアを結びつけましょう。",
      },
      pairs: [
        { leftId: "jup", left: { en: "Jupiter exalted in Cancer", ja: "木星高揚：蟹" }, rightId: "jupd", right: { en: "Debilitated in Capricorn", ja: "弱体：山羊" }, leftIcon: "sparkles" },
        { leftId: "ven", left: { en: "Venus exalted in Pisces", ja: "金星高揚：魚" }, rightId: "vend", right: { en: "Debilitated in Virgo", ja: "弱体：乙女" }, leftIcon: "droplets" },
        { leftId: "sun", left: { en: "Sun exalted in Aries", ja: "太陽高揚：牡羊" }, rightId: "sund", right: { en: "Debilitated in Libra", ja: "弱体：天秤" }, leftIcon: "sun" },
        { leftId: "sat", left: { en: "Saturn exalted in Libra", ja: "土星高揚：天秤" }, rightId: "satd", right: { en: "Debilitated in Aries", ja: "弱体：牡羊" }, leftIcon: "mountain" },
        { leftId: "rah", left: { en: "Rahu exalted", ja: "ラーフ高揚" }, rightId: "rahd", right: { en: "Debilitated in Scorpio", ja: "弱体：蠍" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch17-order",
      kind: "order",
      title: { en: "Parashara Strength Hierarchy", ja: "パーラシャラ強度階層" },
      instruction: {
        en: "Order planetary states from strongest to weakest (Parashara's percentages).",
        ja: "惑星状態を最強から最弱へ並べましょう（パーラシャラの百分比）。",
      },
      items: [
        { id: "ex", label: { en: "Exalted (100%)", ja: "高揚（100%）" }, icon: "sparkles" },
        { id: "mool", label: { en: "Moolatrikona (75%)", ja: "ムーラトリコナ（75%）" }, icon: "sun" },
        { id: "own", label: { en: "Own Sign (50%)", ja: "支配星座（50%）" }, icon: "mountain" },
        { id: "deb", label: { en: "Debilitated / Enemy (0%)", ja: "弱体/敵（0%）" }, icon: "wind" },
      ],
    },
    {
      id: "ch17-tf",
      kind: "true-false",
      title: { en: "Planetary Dignity: True or False", ja: "惑星品位 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c17tf1",
          statement: { en: "Debilitation is always 180° opposite the sign of exaltation.", ja: "弱体は常に高揚星座の180°反対にある。" },
          isTrue: true,
          explanation: { en: "Exaltation and debilitation are always opposite signs.", ja: "高揚と弱体は常に反対星座。" },
        },
        {
          id: "c17tf2",
          statement: { en: "Rahu and Ketu each rule two zodiac signs.", ja: "ラーフとケートゥは各2つの星座を支配する。" },
          isTrue: false,
          explanation: { en: "Rahu and Ketu do not own or rule any sign.", ja: "ラーフとケートゥは星座を支配しない。" },
        },
        {
          id: "c17tf3",
          statement: { en: "Moolatrikona is stronger than Own Sign but below Exaltation.", ja: "ムーラトリコナは支配星座より強く高揚より下。" },
          isTrue: true,
          explanation: { en: "Parashara: Exalted 100%, Moolatrikona 75%, Own 50%.", ja: "パーラシャラ：高揚100%、ムーラトリコナ75%、支配50%。" },
        },
        {
          id: "c17tf4",
          statement: { en: "A strong planet only affects its natural Karakas, not ruled houses.", ja: "強い惑星は天然カーラカのみに影響し、支配ハウスには影響しない。" },
          isTrue: false,
          explanation: { en: "Strong planets benefit BOTH natural indications AND houses they rule.", ja: "強い惑星は天然表示と支配ハウス両方に利益。" },
        },
      ],
    },
    {
      id: "ch17-multi",
      kind: "multi-select",
      title: { en: "What Makes a Planet Strong?", ja: "惑星を強くするものは？" },
      question: {
        en: "Which sign placements generally strengthen a planet? Select ALL that apply.",
        ja: "一般的に惑星を強化する星座配置は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "ex", label: { en: "Exalted sign", ja: "高揚星座" }, icon: "sparkles" },
        { id: "own", label: { en: "Own sign (rulership)", ja: "支配星座" }, icon: "sun" },
        { id: "deb", label: { en: "Debilitated sign", ja: "弱体星座" }, icon: "mountain" },
        { id: "mool", label: { en: "Moolatrikona sign", ja: "ムーラトリコナ星座" }, icon: "moon" },
        { id: "friend", label: { en: "Friend's sign", ja: "友の星座" }, icon: "wind" },
        { id: "enemy", label: { en: "Enemy's sign", ja: "敵の星座" }, icon: "flame" },
      ],
      correctOptionIds: ["ex", "own", "mool", "friend"],
      explanation: {
        en: "Exalted, Moolatrikona, Own, and Friendly signs strengthen — debilitation and enemy signs weaken.",
        ja: "高揚・ムーラトリコナ・支配・友星座が強化 — 弱体と敵星座が弱化。",
      },
    },
    {
      id: "ch17-quiz",
      kind: "quiz",
      question: {
        en: "Where is Jupiter (Guru) exalted at maximum strength?",
        ja: "木星（グル）が最大強度で高揚するのは？",
      },
      options: [
        { id: "sag", label: { en: "Dhanu (Sagittarius) — own sign", ja: "ダヌ（射手）— 支配星座" }, icon: "orbit" },
        { id: "can", label: { en: "Karka (Cancer) at 5°", ja: "カルカ（蟹）5°" }, icon: "droplets" },
        { id: "cap", label: { en: "Makara (Capricorn) — debilitated", ja: "マカラ（山羊）— 弱体" }, icon: "mountain" },
        { id: "pis", label: { en: "Meena (Pisces) — own sign", ja: "ミーナ（魚）— 支配星座" }, icon: "moon" },
      ],
      correctOptionId: "can",
      explanation: {
        en: "Jupiter is exalted in Cancer (Karka) at 5° — debilitated opposite in Capricorn.",
        ja: "木星は蟹（カルカ）5°で高揚 — 山羊で弱体（反対）。",
      },
    },
  ],
};
