import { Layers } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter15FunctionalPlanets: CourseChapter = {
  id: "ch15",
  number: 15,
  title: { en: "Functional Benefics & Houses", ja: "機能的吉星とハウス" },
  subtitle: {
    en: "Same planet, different chart — Lagna changes everything",
    ja: "同じ惑星、異なるチャート — ラグナがすべてを変える",
  },
  icon: Layers,
  steps: [
    {
      id: "ch15-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Natural vs Functional", ja: "生来的性質と機能的性質" },
      body: {
        en: "Every planet has a natural nature — Jupiter is naturally benefic, Saturn naturally challenging. But in Jyotish, planets also become functional benefics or malefics based on which houses they rule for YOUR Ascendant. Western astrology has no direct equivalent.",
        ja: "すべての惑星には生来的な性質があります。木星は生来的な吉星、土星は生来的に試練をもたらす惑星です。しかしジョーティシュでは、各惑星がその人のアセンダントから見てどのハウスを支配するかによって、機能的吉星または機能的凶星にもなります。西洋占星術に直接対応する概念はありません。",
      },
      highlight: {
        en: "The Ascendant is the master key — it sets benefic/malefic status for every planet.",
        ja: "アセンダントはすべてを解く鍵です。各惑星が吉星として働くか凶星として働くかを決定します。",
      },
    },
    {
      id: "ch15-s1",
      kind: "content",
      icon: "flame",
      title: { en: "Mars: Hero or Troublemaker?", ja: "火星：英雄かトラブルメーカーか？" },
      body: {
        en: "Mars is naturally a malefic — yet for Simha (Leo) Ascendant, Mars rules the 4th and 9th houses, making it an exceptionally positive functional benefic. For Kanya (Virgo) Ascendant, Mars rules the 6th and 11th — strongly unfavourable.",
        ja: "火星は生来的な凶星です。しかしシンハ（獅子座）アセンダントでは第4室と第9室を支配するため、非常に力強い機能的吉星になります。一方、カニヤ（乙女座）アセンダントでは第6室と第11室を支配し、強い機能的凶星として働きます。",
      },
      bullets: [
        { en: "Same Mars, opposite life results — proof of the information-field model", ja: "同じ火星、正反対の人生結果 — 情報場モデルの証明" },
        { en: "A physical \"Mars force\" couldn't explain this Ascendant-dependency", ja: "物理的「火星の力」ではこのアセンダント依存性を説明できない" },
      ],
    },
    {
      id: "ch15-s2",
      kind: "content",
      icon: "droplets",
      title: { en: "Venus: Benefic That Turns Malefic", ja: "凶星に変わる吉星・金星" },
      body: {
        en: "Venus is naturally the great benefic — yet for Meena (Pisces) Ascendant, Venus can become quite unfavourable because of the houses it rules. Never assume a \"benefic planet\" is always good for every chart.",
        ja: "金星は生来的な大吉星です。しかしミーナ（魚座）アセンダントでは、支配するハウスのためにかなり不利に働くことがあります。「吉星」だからどのチャートでも常に良いとは判断できません。",
      },
      bullets: [
        { en: "Planets ruling 1st, 5th, or 9th are generally auspicious (broad rule)", ja: "第1・5・9を支配する惑星は一般に吉（大まかなルール）" },
        { en: "Planets ruling 6th, 8th, or 12th tend toward functional malefic", ja: "第6・8・12室を支配する惑星は機能的凶星になりやすい" },
        { en: "Jyotish always has exceptions — context is everything", ja: "ジョーティシュには常に例外 — 文脈がすべて" },
      ],
    },
    {
      id: "ch15-s3",
      kind: "content",
      icon: "compass",
      title: { en: "Equal Houses & Sidereal Lagna", ja: "等分ハウスとサイデリアル・ラグナ" },
      body: {
        en: "Traditional Jyotish uses equal 30° houses aligned with the sidereal zodiac — each house equals one sign. Western astrology often uses unequal house systems (Placidus, Koch). Your sidereal Ascendant may differ significantly from your tropical one.",
        ja: "伝統ジョーティシュはサイデリアル黄道に合わせた等分30°ハウスを使用 — 各ハウス＝1星座。西洋占星術はしばしば不等分ハウス（プラシーダス、コッホ）。サイデリアル・アセンダントはトロピカルと大きく異なることがある。",
      },
      bullets: [
        { en: "Ascendant = sign rising on eastern horizon at birth", ja: "アセンダント＝出生時東の地平線に昇る星座" },
        { en: "Far more important than Sun sign in Jyotish", ja: "ジョーティシュでは太陽星座よりはるかに重要" },
        { en: "Determines gemstone remedies and functional planet status", ja: "宝石による処方と惑星の機能的な吉凶を決定する" },
      ],
    },
    {
      id: "ch15-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "Remedies Depend on Function", ja: "レメディは機能次第" },
      body: {
        en: "Functional benefics get gemstones to strengthen them. Functional malefics get mantras — never gemstones (which would amplify harm). Always analyse the full chart with Ascendant before any remedy.",
        ja: "機能的吉星は宝石で強化します。機能的凶星にはマントラを用い、害を増幅するおそれがあるため宝石は使いません。処方の前に、必ずアセンダントを基準にチャート全体を分析します。",
      },
      highlight: {
        en: "A Jyotish astrologer using Uranus is blending systems — not practicing traditional Jyotish.",
        ja: "天王星を使うジョーティシュ占星術師は体系を混ぜている — 伝統的ジョーティシュを実践していない。",
      },
    },
    {
      id: "ch15-flash",
      kind: "flashcards",
      title: { en: "Functional Planet Flashcards", ja: "機能的惑星のフラッシュカード" },
      instruction: {
        en: "Natural vs functional — flip each card to master the distinction.",
        ja: "生来的な性質と機能的な性質の違いを、カードをめくりながら確認しましょう。",
      },
      cards: [
        { id: "f1", front: { en: "Natural benefic", ja: "生来的吉星" }, back: { en: "Jupiter, Venus (generally gentle)", ja: "木星・金星（おおむね穏やか）" }, icon: "sparkles" },
        { id: "f2", front: { en: "Natural malefic", ja: "生来的凶星" }, back: { en: "Saturn, Mars, Rahu, Ketu", ja: "土星・火星・ラーフ・ケートゥ" }, icon: "flame" },
        { id: "f3", front: { en: "Functional benefic", ja: "機能的吉星" }, back: { en: "Auspicious for YOUR Ascendant", ja: "あなたのアセンダントに吉" }, icon: "sun" },
        { id: "f4", front: { en: "Functional malefic", ja: "機能的凶星" }, back: { en: "Unfavourable for YOUR Ascendant", ja: "あなたのアセンダントに不利" }, icon: "mountain" },
        { id: "f5", front: { en: "Mars + Leo Lagna", ja: "火星＋獅子ラグナ" }, back: { en: "Functional benefic (rules 4th & 9th)", ja: "機能的吉星（第4・9室支配）" }, icon: "flame" },
        { id: "f6", front: { en: "Equal houses", ja: "等分ハウス" }, back: { en: "30° per house = one sidereal sign", ja: "ハウス30°＝1サイデリアル星座" }, icon: "compass" },
      ],
    },
    {
      id: "ch15-match",
      kind: "match",
      title: { en: "Ascendant Scenario Match", ja: "アセンダントシナリオマッチ" },
      instruction: {
        en: "Match each Ascendant scenario to Mars or Venus's functional role.",
        ja: "各アセンダントで火星または金星が果たす機能的な役割を対応させましょう。",
      },
      pairs: [
        { leftId: "leo", left: { en: "Simha (Leo) Ascendant + Mars", ja: "シンハ（獅子）アセンダント＋火星" }, rightId: "ben", right: { en: "Functional benefic", ja: "機能的吉星" }, leftIcon: "sun" },
        { leftId: "vir", left: { en: "Kanya (Virgo) Ascendant + Mars", ja: "カニヤ（乙女）アセンダント＋火星" }, rightId: "mal", right: { en: "Functional malefic", ja: "機能的凶星" }, leftIcon: "flame" },
        { leftId: "pis", left: { en: "Meena (Pisces) Ascendant + Venus", ja: "ミーナ（魚）アセンダント＋金星" }, rightId: "unf", right: { en: "Can become unfavourable", ja: "不利になりうる" }, leftIcon: "droplets" },
        { leftId: "gem", left: { en: "Functional benefic planet", ja: "機能的吉星" }, rightId: "stone", right: { en: "Gemstone remedy OK", ja: "宝石による処方が可能" }, leftIcon: "sparkles" },
        { leftId: "man", left: { en: "Functional malefic planet", ja: "機能的凶星" }, rightId: "mantra", right: { en: "Mantra remedy preferred", ja: "マントラによる処方を優先" }, leftIcon: "wind" },
      ],
    },
    {
      id: "ch15-order",
      kind: "order",
      title: { en: "Remedy Decision Flow", ja: "レメディ決定フロー" },
      instruction: {
        en: "Order the steps before prescribing a planetary remedy.",
        ja: "惑星レメディを処方する前のステップを並べましょう。",
      },
      items: [
        { id: "lagna", label: { en: "Identify sidereal Ascendant (Lagna)", ja: "サイデリアル・アセンダント（ラグナ）を特定" }, icon: "sparkles" },
        { id: "rule", label: { en: "Determine which houses each planet rules", ja: "各惑星が支配するハウスを決定" }, icon: "compass" },
        { id: "func", label: { en: "Classify functional benefic vs malefic", ja: "機能的吉星か機能的凶星かを分類" }, icon: "eye" },
        { id: "rx", label: { en: "Prescribe gem (benefic) or mantra (malefic)", ja: "宝石（吉星）またはマントラ（凶星）を処方" }, icon: "mountain" },
      ],
    },
    {
      id: "ch15-tf",
      kind: "true-false",
      title: { en: "Functional Planets: True or False", ja: "機能的惑星：正誤問題" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c15tf1",
          statement: { en: "Venus is always beneficial for every Ascendant because it's a natural benefic.", ja: "金星は生来的吉星なのですべてのアセンダントで常に有益だ。" },
          isTrue: false,
          explanation: { en: "Functional status depends on house rulership — e.g. Venus for Pisces Lagna.", ja: "機能ステータスはハウス支配次第 — 例：魚ラグナの金星。" },
        },
        {
          id: "c15tf2",
          statement: { en: "Western astrology has a direct equivalent to functional benefics.", ja: "西洋占星術には機能的吉星に直接対応する概念がある。" },
          isTrue: false,
          explanation: { en: "Functional benefic/malefic based on Ascendant house rulership is unique to Jyotish.", ja: "アセンダントから見たハウス支配に基づく機能的な吉凶は、ジョーティシュ独自の考え方です。" },
        },
        {
          id: "c15tf3",
          statement: { en: "Traditional Jyotish uses equal 30° houses aligned with sidereal signs.", ja: "伝統ジョーティシュはサイデリアル星座に合わせた等分30°ハウスを使う。" },
          isTrue: true,
          explanation: { en: "Each house spans exactly one sign in the equal-house system.", ja: "等分ハウス体系では各ハウスが正確に1星座を占める。" },
        },
        {
          id: "c15tf4",
          statement: { en: "You should wear a gemstone for a functional malefic to reduce its harm.", ja: "機能的凶星の害を減らすため、その惑星の宝石を身につけるべきだ。" },
          isTrue: false,
          explanation: { en: "Gemstones strengthen planets — use mantras for malefics instead.", ja: "宝石は惑星を強化 — 凶星には代わりにマントラ。" },
        },
      ],
    },
    {
      id: "ch15-multi",
      kind: "multi-select",
      title: { en: "Why Ascendant Matters", ja: "なぜアセンダントが重要か" },
      question: {
        en: "The sidereal Ascendant determines which of the following? Select ALL.",
        ja: "サイデリアル・アセンダントが決定するものは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "func", label: { en: "Functional benefic/malefic status of planets", ja: "惑星の機能的な吉凶" }, icon: "layers" },
        { id: "gem", label: { en: "Safe Ascendant Lord gemstone remedy", ja: "安全なアセンダント支配星宝石レメディ" }, icon: "sparkles" },
        { id: "sun", label: { en: "Your newspaper horoscope Sun sign", ja: "新聞占いの太陽星座" }, icon: "sun" },
        { id: "house", label: { en: "Which sign occupies each of the 12 houses", ja: "12ハウス各々にどの星座があるか" }, icon: "compass" },
        { id: "outer", label: { en: "Whether to use Pluto in predictions", ja: "予測に冥王星を使うか" }, icon: "orbit" },
        { id: "pers", label: { en: "Outer personality and physical body themes", ja: "外見の性格と身体テーマ" }, icon: "eye" },
      ],
      correctOptionIds: ["func", "gem", "house", "pers"],
      explanation: {
        en: "Lagna sets functional planets, house signs, remedies, and outer self — not Sun-sign columns or outer planets.",
        ja: "ラグナは、惑星の機能的な吉凶、各ハウスの星座、処方、外面的な自己を定めます。新聞の太陽星座占いや外惑星とは関係ありません。",
      },
    },
    {
      id: "ch15-quiz",
      kind: "quiz",
      question: {
        en: "Mars rules the 4th and 9th houses. For which Ascendant is Mars a functional benefic?",
        ja: "火星が第4室と第9室を支配するとき、どのアセンダントで機能的吉星になりますか？",
      },
      options: [
        { id: "virgo", label: { en: "Kanya (Virgo) — Mars rules 3rd & 8th", ja: "カニヤ（乙女）— 火星は第3・8支配" }, icon: "mountain" },
        { id: "leo", label: { en: "Simha (Leo) — Mars rules 4th & 9th", ja: "シンハ（獅子）— 火星は第4・9支配" }, icon: "sun" },
        { id: "pisces", label: { en: "Meena (Pisces) — Mars rules 2nd & 9th", ja: "ミーナ（魚）— 火星は第2・9支配" }, icon: "droplets" },
        { id: "all", label: { en: "Mars is benefic for all Ascendants", ja: "火星はすべてのアセンダントで吉星" }, icon: "flame" },
      ],
      correctOptionId: "leo",
      explanation: {
        en: "Leo Ascendant: Mars as 4th and 9th lord becomes a powerful functional benefic.",
        ja: "獅子座アセンダントでは、第4室と第9室の支配星である火星が強力な機能的吉星になります。",
      },
    },
  ],
};
