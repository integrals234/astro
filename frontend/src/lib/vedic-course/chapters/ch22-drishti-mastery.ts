import { ScanEye } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter22DrishtiMastery: CourseChapter = {
  id: "ch22",
  number: 22,
  title: { en: "Drishti Interpretation Mastery", ja: "ドリシュティ解釈マスター" },
  subtitle: {
    en: "Reading aspects with natural + functional wisdom",
    ja: "天然＋機能の知恵でアスペクトを読む",
  },
  icon: ScanEye,
  steps: [
    {
      id: "ch22-s0",
      kind: "content",
      icon: "eye",
      title: { en: "House-to-House, Not Degree Orbs", ja: "ハウス対ハウス、度数オーブではない" },
      body: {
        en: "Jyotish aspects go from one house to another — not planet-orb to planet-orb like Western astrology. A Sun at 2° in House 1 aspects Saturn at 29° in House 7. Empty houses receive aspects too — this is crucial.",
        ja: "ジョーティシュのアスペクトはハウスからハウスへ — 西洋のような惑星オーブ対惑星オーブではない。第1ハウス2°の太陽は第7ハウス29°の土星にアスペクト。空のハウスもアスペクトを受ける — これが重要。",
      },
      highlight: {
        en: "Both occupied AND empty houses can be strengthened or weakened by aspects.",
        ja: "占有も空もハウスはアスペクトで強化または弱化されうる。",
      },
    },
    {
      id: "ch22-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Worked Example: Sagittarius Lagna", ja: "実例：射手座ラグナ" },
      body: {
        en: "Sun exalted in Aries (House 5) aspects Libra (House 11). Sun rules the auspicious 9th (Leo) — functional benefic. Result: gains, profits, and fulfilled desires (11th house) get a powerful boost.",
        ja: "太陽が牡羊（第5ハウス）で高揚、天秤座（第11ハウス）にアスペクト。太陽は吉な第9（獅子）を支配 — 功能的吉星。結果：利益・収入・叶う願い（第11ハウス）が強力にブースト。",
      },
      bullets: [
        { en: "Step 1: Identify Ascendant", ja: "ステップ1：アセンダントを特定" },
        { en: "Step 2: Assess aspecting planet's strength & function", ja: "ステップ2：アスペクトする惑星の強度と機能を評価" },
        { en: "Step 3: Identify which house receives the aspect", ja: "ステップ3：アスペクトを受けるハウスを特定" },
        { en: "Step 4: Read natural + functional nature together", ja: "ステップ4：天然＋機能の性質を一緒に読む" },
      ],
    },
    {
      id: "ch22-s2",
      kind: "content",
      icon: "sparkles",
      title: { en: "Benefic vs Malefic Aspects", ja: "吉星 vs 凶星アスペクト" },
      body: {
        en: "Benefic aspects (Jupiter, Venus, Mercury, Moon) strengthen the aspected house and its themes. Malefic aspects (Mars, Saturn) challenge them — but a strong functional benefic Saturn aspecting your 10th can build career through discipline.",
        ja: "吉星アスペクト（木星、金星、水星、月）はアスペクト先ハウスとテーマを強化。凶星アスペクト（火星、土星）は困難を — しかし強い功能的吉星土星が第10にアスペクトすれば規律を通じてキャリアを築く。",
      },
      bullets: [
        { en: "Always consider BOTH natural and functional nature", ja: "常に天然と機能の両方の性質を考慮" },
        { en: "Rahu and Ketu do NOT cast aspects", ja: "ラーフとケートゥはアスペクトを投げない" },
      ],
    },
    {
      id: "ch22-s3",
      kind: "content",
      icon: "orbit",
      title: { en: "Conjunction in Whole-Sign Jyotish", ja: "全星座制ジョーティシュの合" },
      body: {
        en: "Conjunction = same sign/house, even at opposite degrees. Sun at 1° Taurus + Saturn at 28° Taurus = conjunct. Jyotish doesn't emphasize Western oppositions, trines, or sextiles — Drishti replaces them.",
        ja: "合＝同じ星座/ハウス、反対の度数でも。牡牛1°の太陽＋牡牛28°の土星＝合。ジョーティシュは西洋のオポジション、トライン、セクスタイルを強調しない — ドリシュティが置き換える。",
      },
    },
    {
      id: "ch22-s4",
      kind: "content",
      icon: "compass",
      title: { en: "Equal Houses & Aspect Counting", ja: "等分ハウスとアスペクト数え" },
      body: {
        en: "Whole sign = Ascendant sign is entire 1st house. Count houses clockwise from the planet's house to find aspect targets. Mars in House 10 → aspects Houses 1 (4th), 4 (7th), and 5 (8th) from its position.",
        ja: "全星座＝アセンダント星座が第1ハウス全体。惑星のハウスから時計回りにハウスを数えてアスペクト先を見つける。第10ハウスの火星→第1（第4）、第4（第7）、第5（第8）にアスペクト。",
      },
      highlight: {
        en: "Birth-time errors near sign boundaries? Skilled astrologers use rectification from life events.",
        ja: "星座境界近くの出生時刻エラー？熟練占星術師は人生の出来事からリクティフィケーション。",
      },
    },
    {
      id: "ch22-s5",
      kind: "content",
      icon: "mountain",
      title: { en: "Dusthana Aspects & Strong Houses", ja: "ダストハナアスペクトと強いハウス" },
      body: {
        en: "A malefic aspecting a Dusthana can actually help — strong 6th house overcomes enemies; strong 8th gives longevity; strong 12th limits losses and supports moksha. Context and strength always matter.",
        ja: "凶星がダストハナにアスペクトすることは実際に助けになることがある — 強い第6は敵を克服；強い第8は長寿；強い第12は損失を制限しモークシャを支える。文脈と強度が常に重要。",
      },
    },
    {
      id: "ch22-flash",
      kind: "flashcards",
      title: { en: "Aspect Rules Flashcards", ja: "アスペクトルール フラッシュカード" },
      instruction: {
        en: "Master the aspect system differences from Western astrology.",
        ja: "西洋占星術とのアスペクト体系の違いをマスター。",
      },
      cards: [
        { id: "d1", front: { en: "Jyotish aspects are…", ja: "ジョーティシュアスペクトは…" }, back: { en: "House to house", ja: "ハウス対ハウス" }, icon: "eye" },
        { id: "d2", front: { en: "Empty houses…", ja: "空のハウスは…" }, back: { en: "Can receive aspects", ja: "アスペクトを受けられる" }, icon: "orbit" },
        { id: "d3", front: { en: "Rahu/Ketu aspects?", ja: "ラーフ/ケートゥアスペクト？" }, back: { en: "None — they don't cast", ja: "なし — 投げない" }, icon: "wind" },
        { id: "d4", front: { en: "Conjunction in Jyotish", ja: "ジョーティシュの合" }, back: { en: "Same sign, any degree", ja: "同じ星座、任意の度数" }, icon: "sun" },
        { id: "d5", front: { en: "Combustion threshold", ja: "燃焼閾値" }, back: { en: "~10–15° from Sun", ja: "太陽から約10–15°" }, icon: "flame" },
        { id: "d6", front: { en: "Read aspect using…", ja: "アスペクトを読むには…" }, back: { en: "Natural + functional nature", ja: "天然＋機能の性質" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch22-match",
      kind: "match",
      title: { en: "Aspect Interpretation Match", ja: "アスペクト解釈マッチ" },
      instruction: {
        en: "Connect each aspect scenario to its interpretation principle.",
        ja: "各アスペクトシナリオを解釈原則に結びつけましょう。",
      },
      pairs: [
        { leftId: "jup7", left: { en: "Jupiter aspects 7th house", ja: "木星が第7ハウスにアスペクト" }, rightId: "rel", right: { en: "Blesses partnerships", ja: "パートナーシップを祝福" }, leftIcon: "sparkles" },
        { leftId: "sat7", left: { en: "Saturn aspects 7th house", ja: "土星が第7ハウスにアスペクト" }, rightId: "delay", right: { en: "May delay/deepen commitment", ja: "コミットメントを遅らせ/深める可能性" }, leftIcon: "mountain" },
        { leftId: "sun11", left: { en: "Exalted Sun aspects 11th", ja: "高揚太陽が第11にアスペクト" }, rightId: "gain", right: { en: "Boosts gains & desires", ja: "利益と願いをブースト" }, leftIcon: "sun" },
        { leftId: "empty", left: { en: "Aspect on empty house", ja: "空ハウスへのアスペクト" }, rightId: "still", right: { en: "Still affects house themes", ja: "ハウステーマに依然影響" }, leftIcon: "eye" },
        { leftId: "mar4", left: { en: "Mars special 4th aspect", ja: "火星の特別第4アスペクト" }, rightId: "home", right: { en: "Energises home/mother themes", ja: "家庭/母のテーマにエネルギー" }, leftIcon: "flame" },
      ],
    },
    {
      id: "ch22-order",
      kind: "order",
      title: { en: "Four-Step Aspect Reading", ja: "四ステップアスペクト読解" },
      instruction: {
        en: "Order the steps for interpreting any planetary aspect in Jyotish.",
        ja: "ジョーティシュで任意の惑星アスペクトを解釈するステップを並べましょう。",
      },
      items: [
        { id: "asc", label: { en: "1. Establish Ascendant & functional status", ja: "1. アセンダントと機能ステータスを確立" }, icon: "compass" },
        { id: "str", label: { en: "2. Assess aspecting planet's sign strength", ja: "2. アスペクト惑星の星座強度を評価" }, icon: "mountain" },
        { id: "house", label: { en: "3. Identify the aspected house number", ja: "3. アスペクト先ハウス番号を特定" }, icon: "eye" },
        { id: "read", label: { en: "4. Combine natural + functional + house themes", ja: "4. 天然＋機能＋ハウステーマを統合" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch22-tf",
      kind: "true-false",
      title: { en: "Drishti Mastery: True or False", ja: "ドリシュティマスター マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c22tf1",
          statement: { en: "Jyotish aspects require planets to be within a few degrees of each other.", ja: "ジョーティシュアスペクトは惑星が数度以内にある必要がある。" },
          isTrue: false,
          explanation: { en: "Aspects are house-to-house — degree orbs don't matter.", ja: "アスペクトはハウス対ハウス — 度数オーブは関係ない。" },
        },
        {
          id: "c22tf2",
          statement: { en: "An empty 7th house can still receive Mars's 7th aspect.", ja: "空の第7ハウスでも火星の第7アスペクトを受けられる。" },
          isTrue: true,
          explanation: { en: "Empty houses are fully affected by aspects.", ja: "空のハウスもアスペクトの完全な影響を受ける。" },
        },
        {
          id: "c22tf3",
          statement: { en: "When reading aspects, only the natural nature of the planet matters.", ja: "アスペクトを読むとき、惑星の天然性質のみが重要だ。" },
          isTrue: false,
          explanation: { en: "Both natural AND functional characteristics must be considered.", ja: "天然と機能の両方の特性を考慮する必要がある。" },
        },
        {
          id: "c22tf4",
          statement: { en: "Sun at 1° and Saturn at 28° in the same sign are conjunct in Jyotish.", ja: "同じ星座で1°の太陽と28°の土星はジョーティシュで合だ。" },
          isTrue: true,
          explanation: { en: "Whole-sign conjunction — degree separation doesn't break it.", ja: "全星座制の合 — 度数の離れはそれを破らない。" },
        },
      ],
    },
    {
      id: "ch22-multi",
      kind: "multi-select",
      title: { en: "Which Planets Cast Aspects?", ja: "アスペクトを投げる惑星は？" },
      question: {
        en: "Which Grahas cast aspects in traditional Jyotish? Select ALL.",
        ja: "伝統ジョーティシュでアスペクトを投げるグラハは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "sun", label: { en: "Sun (7th aspect)", ja: "太陽（第7アスペクト）" }, icon: "sun" },
        { id: "jup", label: { en: "Jupiter (5th, 7th, 9th)", ja: "木星（第5・7・9）" }, icon: "sparkles" },
        { id: "rah", label: { en: "Rahu (7th aspect)", ja: "ラーフ（第7アスペクト）" }, icon: "orbit" },
        { id: "sat", label: { en: "Saturn (3rd, 7th, 10th)", ja: "土星（第3・7・10）" }, icon: "mountain" },
        { id: "ket", label: { en: "Ketu (special aspects)", ja: "ケートゥ（特別アスペクト）" }, icon: "wind" },
        { id: "mar", label: { en: "Mars (4th, 7th, 8th)", ja: "火星（第4・7・8）" }, icon: "flame" },
      ],
      correctOptionIds: ["sun", "jup", "sat", "mar"],
      explanation: {
        en: "All planets except Rahu and Ketu cast aspects — Rahu/Ketu have no Drishti.",
        ja: "ラーフとケートゥ以外のすべての惑星がアスペクト — ラーフ/ケートゥにドリシュティなし。",
      },
    },
    {
      id: "ch22-quiz",
      kind: "quiz",
      question: {
        en: "Mars sits in House 10. Which houses does its 4th special aspect reach?",
        ja: "火星が第10ハウスにいる。第4特別アスペクトはどのハウスに届く？",
      },
      options: [
        { id: "h1", label: { en: "House 1", ja: "第1ハウス" }, icon: "sun" },
        { id: "h4", label: { en: "House 4", ja: "第4ハウス" }, icon: "droplets" },
        { id: "h7", label: { en: "House 7", ja: "第7ハウス" }, icon: "wind" },
        { id: "h13", label: { en: "House 13 (doesn't exist)", ja: "第13ハウス（存在しない）" }, icon: "mountain" },
      ],
      correctOptionId: "h1",
      explanation: {
        en: "4th aspect from House 10: 10→11→12→1. Mars also aspects 4 (7th) and 5 (8th).",
        ja: "第10から第4アスペクト：10→11→12→1。火星は第4（第7）と第5（第8）にもアスペクト。",
      },
    },
  ],
};
