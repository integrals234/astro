import { Eye } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter6Aspects: CourseChapter = {
  id: "ch6",
  number: 6,
  title: { en: "Aspects (Drishti)", ja: "アスペクト（ドリシュティ）" },
  subtitle: {
    en: "How planets gaze at each other and your houses",
    ja: "惑星が互いやハウスを「見る」仕組み",
  },
  icon: Eye,
  steps: [
    {
      id: "ch6-s0",
      kind: "content",
      icon: "eye",
      title: { en: "What Is Drishti?", ja: "ドリシュティとは？" },
      body: {
        en: "Drishti means \"gaze\" or \"aspect.\" A planet not only affects the house it sits in — it also influences other houses it \"looks at.\" Think of each Graha casting a beam of its energy across the chart.",
        ja: "ドリシュティは「視線」「アスペクト」の意味です。惑星は座るハウスだけでなく、「見ている」他のハウスにも影響します。各グラハがチャートにエネルギーの光を放つと考えましょう。",
      },
      highlight: {
        en: "Vedic aspects are house-based (from the whole-sign house a planet occupies), not degree-exact like some Western techniques.",
        ja: "インド式アスペクトはハウス基準（惑星がいる星座全体のハウスから）で、西洋の度数精密アスペクトとは異なります。",
      },
    },
    {
      id: "ch6-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "The Universal 7th Aspect", ja: "すべての惑星の第7アスペクト" },
      body: {
        en: "Every planet aspects the 7th house from its own position. This is the opposition — a direct, full-strength gaze across the chart wheel.",
        ja: "すべての惑星は自分の位置から第7ハウスにアスペクトします。これはオポジション — チャートの輪を横切る直接的で強い視線です。",
      },
      bullets: [
        { en: "Planet in House 1 → aspects House 7", ja: "第1ハウスの惑星 → 第7ハウスにアスペクト" },
        { en: "Planet in House 4 → aspects House 10", ja: "第4ハウスの惑星 → 第10ハウスにアスペクト" },
        { en: "Planet in House 5 → aspects House 11", ja: "第5ハウスの惑星 → 第11ハウスにアスペクト" },
      ],
    },
    {
      id: "ch6-s2",
      kind: "content",
      icon: "flame",
      title: { en: "Mars — Special Aspects", ja: "火星 — 特別なアスペクト" },
      body: {
        en: "Mars (Mangal) has extra Drishti on the 4th, 7th, and 8th houses from where it sits. Mars brings energy, conflict, or courage to those life areas.",
        ja: "火星（マンガル）は座る位置から第4・7・8ハウスに追加のドリシュティを持ちます。火星はそれらの人生領域にエネルギー・対立・勇気をもたらします。",
      },
      bullets: [
        { en: "Mars in House 1 → aspects Houses 4, 7, and 8", ja: "第1ハウスの火星 → 第4・7・8ハウスにアスペクト" },
        { en: "Effect: activates, heats up, or creates pressure in aspected houses", ja: "効果：アスペクト先を活性化・熱くする・プレッシャーを生む" },
      ],
    },
    {
      id: "ch6-s3",
      kind: "content",
      icon: "sparkles",
      title: { en: "Jupiter — Special Aspects", ja: "木星 — 特別なアスペクト" },
      body: {
        en: "Jupiter (Guru) aspects the 5th, 7th, and 9th houses from its position. Jupiter's gaze expands, protects, and brings wisdom — often the most helpful aspects in a chart.",
        ja: "木星（グル）は座る位置から第5・7・9ハウスにアスペクトします。木星の視線は拡大・守護・知恵をもたらす — チャートで最も助けになるアスペクトのことが多いです。",
      },
      bullets: [
        { en: "Jupiter in House 1 → aspects Houses 5, 7, and 9", ja: "第1ハウスの木星 → 第5・7・9ハウスにアスペクト" },
        { en: "Benefic aspect: growth, teachers, optimism in those houses", ja: "吉星のアスペクト：それらのハウスで成長・師・楽観" },
      ],
    },
    {
      id: "ch6-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "Saturn — Special Aspects", ja: "土星 — 特別なアスペクト" },
      body: {
        en: "Saturn (Shani) aspects the 3rd, 7th, and 10th houses. Saturn's gaze demands responsibility, structure, and patience in those areas.",
        ja: "土星（シャニ）は第3・7・10ハウスにアスペクトします。土星の視線はそれらの領域で責任・構造・忍耐を求めます。",
      },
      bullets: [
        { en: "Saturn in House 1 → aspects Houses 3, 7, and 10", ja: "第1ハウスの土星 → 第3・7・10ハウスにアスペクト" },
        { en: "Not \"bad\" — Saturn aspects build long-term strength", ja: "「悪い」わけではない — 土星のアスペクトは長期的な強さを築く" },
      ],
    },
    {
      id: "ch6-s5",
      kind: "content",
      icon: "sun",
      title: { en: "Conjunction — Sharing a House", ja: "合（コンジャンクション）— 同じハウス" },
      body: {
        en: "When two or more planets sit in the same sign/house, they are in conjunction. Their energies blend — sometimes harmoniously, sometimes like roommates who argue.",
        ja: "2つ以上の惑星が同じ星座・ハウスにあるとき、合（コンジャンクション）です。エネルギーが混ざり合います — 調和することも、言い争う同居人のようになることも。",
      },
      bullets: [
        { en: "Sun + Mercury: sharp intellect, strong opinions", ja: "太陽＋水星：鋭い知性・強い意見" },
        { en: "Moon + Venus: charm, love of comfort", ja: "月＋金星：魅力・快適さへの愛" },
        { en: "Mars + Saturn: disciplined action, frustration if blocked", ja: "火星＋土星：規律ある行動・阻まれるとフラストレーション" },
      ],
    },
    {
      id: "ch6-s6",
      kind: "content",
      icon: "moon",
      title: { en: "Benefic vs. Malefic Aspects", ja: "吉星と凶星のアスペクト" },
      body: {
        en: "A Jupiter aspect on your 7th house can bless relationships; Saturn aspecting the 7th may delay or deepen commitment. Always read the planet's nature first.",
        ja: "第7ハウスへの木星のアスペクトは関係を祝福することがあり、土星のアスペクトは遅れや深いコミットメントをもたらすことがあります。常に惑星の性質を先に読みましょう。",
      },
    },
    {
      id: "ch6-s7",
      kind: "content",
      icon: "compass",
      title: { en: "How to Count Aspects on Your Chart", ja: "チャートでアスペクトを数える方法" },
      body: {
        en: "① Find the planet's house number. ② Count forward to the 7th house from there (always). ③ If Mars/Jupiter/Saturn, also count their special aspect houses. ④ Note which signs/planets sit in aspected houses.",
        ja: "①惑星のハウス番号を確認。②そこから第7ハウスを数える（常に）。③火星・木星・土星なら特別アスペクトのハウスも数える。④アスペクト先にある星座・惑星をメモ。",
      },
      highlight: {
        en: "On the Dashboard chart, trace lines mentally from each planet — start with Jupiter and Saturn as they affect wide areas.",
        ja: "ダッシュボードのチャートで、各惑星から線を頭の中で引いて — 木星と土星から始めると広い範囲に影響します。",
      },
    },
    {
      id: "ch6-flash",
      kind: "flashcards",
      title: { en: "Special Aspect Flashcards", ja: "特別アスペクト フラッシュカード" },
      instruction: {
        en: "Memorize which houses Mars, Jupiter, and Saturn aspect beyond the universal 7th.",
        ja: "火星・木星・土星が第7アスペクト以外に見るハウスを覚えましょう。",
      },
      cards: [
        { id: "a1", front: { en: "Mars aspects…", ja: "火星は…にアスペクト" }, back: { en: "4th, 7th, 8th houses", ja: "第4・7・8ハウス" }, icon: "flame" },
        { id: "a2", front: { en: "Jupiter aspects…", ja: "木星は…にアスペクト" }, back: { en: "5th, 7th, 9th houses", ja: "第5・7・9ハウス" }, icon: "sparkles" },
        { id: "a3", front: { en: "Saturn aspects…", ja: "土星は…にアスペクト" }, back: { en: "3rd, 7th, 10th houses", ja: "第3・7・10ハウス" }, icon: "mountain" },
        { id: "a4", front: { en: "All planets aspect…", ja: "すべての惑星は…にアスペクト" }, back: { en: "7th house from their position", ja: "自分の位置から第7ハウス" }, icon: "orbit" },
        { id: "a5", front: { en: "Drishti means…", ja: "ドリシュティとは…" }, back: { en: "Gaze / aspect", ja: "視線・アスペクト" }, icon: "eye" },
      ],
    },
    {
      id: "ch6-match",
      kind: "match",
      title: { en: "Planet to Aspect Pattern", ja: "惑星とアスペクトパターン" },
      instruction: {
        en: "Match each planet to the houses it specially aspects (plus all aspect the 7th).",
        ja: "各惑星と特別アスペクトするハウスをマッチ（すべて第7もアスペクト）。",
      },
      pairs: [
        { leftId: "mars", left: { en: "Mars", ja: "火星" }, rightId: "m48", right: { en: "4th, 7th, 8th", ja: "第4・7・8" }, leftIcon: "flame" },
        { leftId: "jup", left: { en: "Jupiter", ja: "木星" }, rightId: "j579", right: { en: "5th, 7th, 9th", ja: "第5・7・9" }, leftIcon: "sparkles" },
        { leftId: "sat", left: { en: "Saturn", ja: "土星" }, rightId: "s3710", right: { en: "3rd, 7th, 10th", ja: "第3・7・10" }, leftIcon: "mountain" },
        { leftId: "all", left: { en: "Every planet", ja: "すべての惑星" }, rightId: "seventh", right: { en: "7th aspect", ja: "第7アスペクト" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch6-order",
      kind: "order",
      title: { en: "Jupiter's Aspect Houses", ja: "木星のアスペクトハウス" },
      instruction: {
        en: "Order Jupiter's three special aspect house numbers from lowest to highest.",
        ja: "木星の3つの特別アスペクトハウス番号を小さい順に並べましょう。",
      },
      items: [
        { id: "h5", label: { en: "5th House", ja: "第5ハウス" }, icon: "sun" },
        { id: "h7", label: { en: "7th House", ja: "第7ハウス" }, icon: "droplets" },
        { id: "h9", label: { en: "9th House", ja: "第9ハウス" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch6-tf",
      kind: "true-false",
      title: { en: "Aspect Facts: True or False", ja: "アスペクト マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "atf1",
          statement: { en: "Only Mars and Jupiter have aspects in Vedic astrology.", ja: "インド占星術でアスペクトがあるのは火星と木星だけだ。" },
          isTrue: false,
          explanation: { en: "All planets aspect the 7th; Mars, Jupiter, and Saturn have additional special aspects.", ja: "すべての惑星が第7にアスペクト；火星・木星・土星は追加の特別アスペクトあり。" },
        },
        {
          id: "atf2",
          statement: { en: "A planet in House 2 aspects House 8 through its 7th aspect.", ja: "第2ハウスの惑星は第7アスペクトで第8ハウスを見る。" },
          isTrue: true,
          explanation: { en: "Count 7 houses forward: 2→3→4→5→6→7→8.", ja: "7ハウス先を数える：2→3→4→5→6→7→8。" },
        },
        {
          id: "atf3",
          statement: { en: "Conjunction means two planets share the same house or sign.", ja: "合とは2つの惑星が同じハウスまたは星座を共有することだ。" },
          isTrue: true,
          explanation: { en: "Their energies blend in that life area.", ja: "その人生領域でエネルギーが混ざり合います。" },
        },
        {
          id: "atf4",
          statement: { en: "Saturn aspects the 5th, 7th, and 9th houses specially.", ja: "土星は第5・7・9ハウスに特別アスペクトする。" },
          isTrue: false,
          explanation: { en: "That's Jupiter. Saturn aspects 3rd, 7th, and 10th.", ja: "それは木星です。土星は第3・7・10ハウスにアスペクト。" },
        },
      ],
    },
    {
      id: "ch6-quiz",
      kind: "quiz",
      question: {
        en: "Mars specially aspects which houses (from its position)?",
        ja: "火星が特別にアスペクトするハウスは（自分の位置から）？",
      },
      options: [
        { id: "a", label: { en: "3rd, 7th, 10th", ja: "第3・7・10" }, icon: "mountain" },
        { id: "b", label: { en: "4th, 7th, 8th", ja: "第4・7・8" }, icon: "flame" },
        { id: "c", label: { en: "5th, 7th, 9th", ja: "第5・7・9" }, icon: "sparkles" },
        { id: "d", label: { en: "7th only", ja: "第7のみ" }, icon: "orbit" },
      ],
      correctOptionId: "b",
      explanation: {
        en: "Mars casts intense energy to the 4th, 7th, and 8th houses — plus it has the universal 7th aspect like all Grahas.",
        ja: "火星は第4・7・8ハウスに強いエネルギーを放ちます — すべてのグラハと同様に第7アスペクトも持ちます。",
      },
    },
  ],
};
