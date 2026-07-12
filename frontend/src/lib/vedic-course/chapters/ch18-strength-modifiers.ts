import { Zap } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter18StrengthModifiers: CourseChapter = {
  id: "ch18",
  number: 18,
  title: { en: "Strength Modifiers", ja: "強度修飾因子" },
  subtitle: {
    en: "Retrograde, combustion, Vargottama & planetary war",
    ja: "逆行・燃焼・ヴァルゴッタマ・惑星戦争",
  },
  icon: Zap,
  steps: [
    {
      id: "ch18-s0",
      kind: "content",
      icon: "orbit",
      title: { en: "Beyond Sign Placement", ja: "星座配置を超えて" },
      body: {
        en: "Sign dignity is the foundation — but several other factors modify planetary strength: retrograde motion, combustion near the Sun, Vargottama status in Navamsha, planetary war, and aspects from benefics or malefics.",
        ja: "星座品位が基礎 — しかし他の因子が惑星強度を修飾：逆行運動、太陽近くの燃焼、ナヴァムシャのヴァルゴッタマ、惑星戦争、吉星/凶星からのアスペクト。",
      },
      highlight: {
        en: "Master the four dignities first — return to modifiers when you're comfortable with basics.",
        ja: "まず四品位をマスター — 基礎に慣れたら修飾因子に戻る。",
      },
    },
    {
      id: "ch18-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Combustion (Asta)", ja: "燃焼（アスタ）" },
      body: {
        en: "When a planet comes within ~10–15° of the Sun, it becomes combust — weakened in both natural Karakas and ruled houses. Mercury combusts frequently; Venus too when Morning Star. Rahu and Ketu never combust.",
        ja: "惑星が太陽から約10–15°以内に来ると燃焼 — 天然カーラカと支配ハウス両方で弱化。水星は頻繁に燃焼；金星も明けの明星の時。ラーフとケートゥは燃焼しない。",
      },
      bullets: [
        { en: "Always check planets very close to the Sun", ja: "太陽に非常に近い惑星を常に確認" },
        { en: "Exact orb varies by planet and direct/retrograde motion", ja: "正確なオーブは惑星と順行/逆行で異なる" },
      ],
    },
    {
      id: "ch18-s2",
      kind: "content",
      icon: "wind",
      title: { en: "Retrograde (Vakri)", ja: "逆行（ヴァクリ）" },
      body: {
        en: "Planets don't physically reverse — but they appear to move backward against the fixed stars. General consensus: retrograde planets gain strength. They also need to get closer to the Sun before combusting.",
        ja: "惑星は物理的に逆走しない — 固定星に対して後退して見える。一般的合意：逆行惑星は強度を得る。燃焼する前に太陽により近づく必要もある。",
      },
      highlight: {
        en: "Retrograde + strong sign dignity = a powerful, intensified planet.",
        ja: "逆行＋強い星座品位＝強力で強化された惑星。",
      },
    },
    {
      id: "ch18-s3",
      kind: "content",
      icon: "moon",
      title: { en: "Vargottama in Navamsha", ja: "ナヴァムシャのヴァルゴッタマ" },
      body: {
        en: "A planet in the same sign in both Rashi (D-1) and Navamsha (D-9) is Vargottama — strengthened considerably, at least equal to Own Sign. Exalted in both charts = even more powerful.",
        ja: "ラーシ（D-1）とナヴァムシャ（D-9）両方で同じ星座の惑星はヴァルゴッタマ — かなり強化、少なくとも支配星座同等。両チャートで高揚＝さらに強力。",
      },
      bullets: [
        { en: "Navamsha is key for marriage AND planetary strength", ja: "ナヴァムシャは結婚と惑星強度の両方に鍵" },
        { en: "Divisional charts (Vargas) add refinement — start with D-9", ja: "分割図（ヴァルガ）が精緻化 — D-9から始める" },
      ],
    },
    {
      id: "ch18-s4",
      kind: "content",
      icon: "flame",
      title: { en: "Planetary War & Aspects", ja: "惑星戦争とアスペクト" },
      body: {
        en: "Planetary War: two planets within ~1° — lower degree wins, higher degree loses strength. Sun, Moon, Rahu, Ketu don't participate. Aspects: Jupiter/Venus/Mercury/Moon aspects strengthen; Mars/Saturn aspects weaken. Rahu/Ketu don't cast aspects.",
        ja: "惑星戦争：2惑星が約1°以内 — 低度数が勝ち、高度数が強度を失う。太陽・月・ラーフ・ケートゥは不参加。アスペクト：木星/金星/水星/月のアスペクトが強化；火星/土星が弱化。ラーフ/ケートゥはアスペクトを投げない。",
      },
    },
    {
      id: "ch18-flash",
      kind: "flashcards",
      title: { en: "Modifier Flashcards", ja: "修飾因子 フラッシュカード" },
      instruction: {
        en: "Learn each strength modifier — flip all cards to continue.",
        ja: "各強度修飾因子を覚えましょう — すべて見て進みます。",
      },
      cards: [
        { id: "m1", front: { en: "Combust", ja: "燃焼" }, back: { en: "Too close to Sun → weakened", ja: "太陽に近すぎ→弱化" }, icon: "sun" },
        { id: "m2", front: { en: "Retrograde (Vakri)", ja: "逆行（ヴァクリ）" }, back: { en: "Apparent backward motion → stronger", ja: "見かけの後退→強化" }, icon: "orbit" },
        { id: "m3", front: { en: "Vargottama", ja: "ヴァルゴッタマ" }, back: { en: "Same sign in D-1 and D-9", ja: "D-1とD-9で同じ星座" }, icon: "moon" },
        { id: "m4", front: { en: "Planetary War", ja: "惑星戦争" }, back: { en: "Planets within ~1° — lower wins", ja: "約1°以内 — 低度数が勝つ" }, icon: "flame" },
        { id: "m5", front: { en: "Jupiter aspect", ja: "木星アスペクト" }, back: { en: "Benefic aspect → strengthens planet", ja: "吉星アスペクト→惑星強化" }, icon: "sparkles" },
        { id: "m6", front: { en: "Saturn aspect", ja: "土星アスペクト" }, back: { en: "Malefic aspect → weakens planet", ja: "凶星アスペクト→惑星弱化" }, icon: "mountain" },
      ],
    },
    {
      id: "ch18-match",
      kind: "match",
      title: { en: "Modifier Effect Match", ja: "修飾因子効果マッチ" },
      instruction: {
        en: "Connect each condition to its typical effect on planetary strength.",
        ja: "各状態を惑星強度への典型的効果に結びつけましょう。",
      },
      pairs: [
        { leftId: "comb", left: { en: "Combustion", ja: "燃焼" }, rightId: "weak", right: { en: "Weakened planet", ja: "惑星弱化" }, leftIcon: "sun" },
        { leftId: "retro", left: { en: "Retrograde", ja: "逆行" }, rightId: "strong", right: { en: "Strengthened planet", ja: "惑星強化" }, leftIcon: "orbit" },
        { leftId: "varg", left: { en: "Vargottama", ja: "ヴァルゴッタマ" }, rightId: "own", right: { en: "≥ Own Sign strength", ja: "≥支配星座強度" }, leftIcon: "moon" },
        { leftId: "jasp", left: { en: "Jupiter's aspect", ja: "木星のアスペクト" }, rightId: "ben", right: { en: "Benefic boost", ja: "吉星ブースト" }, leftIcon: "sparkles" },
        { leftId: "war", left: { en: "Planetary war loser", ja: "惑星戦争の敗者" }, rightId: "lose", right: { en: "Reduced positive results", ja: "ポジティブ結果減少" }, leftIcon: "flame" },
      ],
    },
    {
      id: "ch18-order",
      kind: "order",
      title: { en: "Strength Assessment Checklist", ja: "強度評価チェックリスト" },
      instruction: {
        en: "Order the steps when assessing a planet's full strength in a chart.",
        ja: "チャートで惑星の完全強度を評価するステップを並べましょう。",
      },
      items: [
        { id: "sign", label: { en: "1. Sign dignity (exalted/own/debilitated)", ja: "1. 星座品位（高揚/支配/弱体）" }, icon: "mountain" },
        { id: "mod", label: { en: "2. Modifiers (combust/retrograde/vargottama)", ja: "2. 修飾因子（燃焼/逆行/ヴァルゴッタマ）" }, icon: "orbit" },
        { id: "asp", label: { en: "3. Aspects received (benefic/malefic)", ja: "3. 受けるアスペクト（吉/凶）" }, icon: "eye" },
        { id: "func", label: { en: "4. Functional benefic/malefic for Lagna", ja: "4. ラグナに対する機能的吉/凶" }, icon: "compass" },
      ],
    },
    {
      id: "ch18-tf",
      kind: "true-false",
      title: { en: "Strength Modifiers: True or False", ja: "強度修飾因子 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c18tf1",
          statement: { en: "Rahu and Ketu can become combust when close to the Sun.", ja: "ラーフとケートゥは太陽に近いと燃焼できる。" },
          isTrue: false,
          explanation: { en: "Rahu and Ketu never become combust.", ja: "ラーフとケートゥは燃焼しない。" },
        },
        {
          id: "c18tf2",
          statement: { en: "Retrograde planets are generally considered to gain strength.", ja: "逆行惑星は一般に強度を得るとされる。" },
          isTrue: true,
          explanation: { en: "Retrogression is usually viewed positively in Jyotish.", ja: "逆行はジョーティシュで通常ポジティブに見られる。" },
        },
        {
          id: "c18tf3",
          statement: { en: "Vargottama means a planet occupies the same sign in D-1 and Navamsha.", ja: "ヴァルゴッタマは惑星がD-1とナヴァムシャで同じ星座にあること。" },
          isTrue: true,
          explanation: { en: "Vargottama strengthens considerably — at least Own Sign level.", ja: "ヴァルゴッタマはかなり強化 — 少なくとも支配星座レベル。" },
        },
        {
          id: "c18tf4",
          statement: { en: "Rahu and Ketu cast aspects like other Grahas.", ja: "ラーフとケートゥは他のグラハのようにアスペクトを投げる。" },
          isTrue: false,
          explanation: { en: "Rahu and Ketu do not cast aspects in traditional Jyotish.", ja: "伝統ジョーティシュでラーフとケートゥはアスペクトを投げない。" },
        },
      ],
    },
    {
      id: "ch18-multi",
      kind: "multi-select",
      title: { en: "What Weakens a Planet?", ja: "惑星を弱めるものは？" },
      question: {
        en: "Which conditions generally WEAKEN a planet? Select ALL that apply.",
        ja: "一般的に惑星を弱める条件は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "comb", label: { en: "Combustion near the Sun", ja: "太陽近くの燃焼" }, icon: "sun" },
        { id: "deb", label: { en: "Debilitated sign placement", ja: "弱体星座配置" }, icon: "mountain" },
        { id: "retro", label: { en: "Retrograde motion", ja: "逆行運動" }, icon: "orbit" },
        { id: "satasp", label: { en: "Saturn's malefic aspect", ja: "土星の凶星アスペクト" }, icon: "flame" },
        { id: "war", label: { en: "Losing a planetary war", ja: "惑星戦争に敗れる" }, icon: "wind" },
        { id: "varg", label: { en: "Vargottama status", ja: "ヴァルゴッタマ状態" }, icon: "moon" },
      ],
      correctOptionIds: ["comb", "deb", "satasp", "war"],
      explanation: {
        en: "Combustion, debilitation, malefic aspects, and losing planetary war weaken — retrograde and Vargottama strengthen.",
        ja: "燃焼・弱体・凶星アスペクト・惑星戦争敗北が弱化 — 逆行とヴァルゴッタマが強化。",
      },
    },
    {
      id: "ch18-quiz",
      kind: "quiz",
      question: {
        en: "Two planets are 0.5° apart (not Sun/Moon). What is this called?",
        ja: "2惑星が0.5°離れている（太陽/月以外）。これは何と呼ばれる？",
      },
      options: [
        { id: "conj", label: { en: "Simple conjunction only", ja: "単純合のみ" }, icon: "orbit" },
        { id: "war", label: { en: "Planetary War (Graha Yuddha)", ja: "惑星戦争（グラハ・ユッダ）" }, icon: "flame" },
        { id: "comb", label: { en: "Combustion", ja: "燃焼" }, icon: "sun" },
        { id: "varg", label: { en: "Vargottama", ja: "ヴァルゴッタマ" }, icon: "moon" },
      ],
      correctOptionId: "war",
      explanation: {
        en: "Planets within ~1° are in Planetary War — lower degree planet wins.",
        ja: "約1°以内の惑星は惑星戦争 — 低度数の惑星が勝つ。",
      },
    },
  ],
};
