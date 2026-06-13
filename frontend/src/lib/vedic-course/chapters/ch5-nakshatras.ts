import { Star } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter5Nakshatras: CourseChapter = {
  id: "ch5",
  number: 5,
  title: { en: "Nakshatras & Moon", ja: "ナクシャトラと月" },
  subtitle: {
    en: "27 lunar mansions — the Moon's deeper story",
    ja: "27の月の宿 — 月の深い物語",
  },
  icon: Star,
  steps: [
    {
      id: "ch5-s0",
      kind: "content",
      icon: "moon",
      title: { en: "What Is a Nakshatra?", ja: "ナクシャトラとは？" },
      body: {
        en: "The zodiac is also divided into 27 Nakshatras of 13°20' each. They come from the Moon's daily motion and ancient star lore. Your Moon Nakshatra is deeply personal in Vedic astrology.",
        ja: "黄道は27のナクシャトラ（各13°20'）にも分かれます。月の日々の動きと古代の星の伝承に由来します。月のナクシャトラはインド占星術で非常に個人的です。",
      },
    },
    {
      id: "ch5-s1",
      kind: "content",
      icon: "sparkles",
      title: { en: "Why the Moon Matters So Much", ja: "なぜ月がとても重要か" },
      body: {
        en: "Vedic astrology is Chandra-oriented. The Moon shows the mind (manas), comfort, and emotional habits. Many predictive techniques start from Moon position, not Sun.",
        ja: "インド占星術は月中心です。月は心（マナス）、安心感、感情の習慣を示します。多くの予測技法は太陽ではなく月の位置から始まります。",
      },
    },
    {
      id: "ch5-s2",
      kind: "content",
      icon: "orbit",
      title: { en: "The 27 Nakshatras (Overview)", ja: "27ナクシャトラ（概要）" },
      body: {
        en: "Each Nakshatra has a deity, symbol, and temperament. You don't need to memorize all 27 now — start with your own Moon Nakshatra on your chart.",
        ja: "各ナクシャトラには神、象徴、気質があります。今は27全部を覚える必要はありません — チャートの自分の月のナクシャトラから始めましょう。",
      },
      bullets: [
        { en: "Ashwini → quick, healing beginnings", ja: "アシュヴィニ → 速い、癒しの始まり" },
        { en: "Rohini → beauty, growth, sensuality", ja: "ローヒニ → 美、成長、官能" },
        { en: "Krittika → sharp, purifying fire", ja: "クリッティカ → 鋭い、浄化の火" },
        { en: "... 24 more mansions around the zodiac", ja: "… あと24の宿が黄道を巡る" },
      ],
    },
    {
      id: "ch5-s3",
      kind: "content",
      icon: "sun",
      title: { en: "Pada — Quarter of a Nakshatra", ja: "パーダ — ナクシャトラの四分の一" },
      body: {
        en: "Each Nakshatra has 4 Padas (quarters) of 3°20' each. Pada links Nakshatra to the navamsa (D9) chart — advanced topic, but you'll see \"pada\" on detailed charts.",
        ja: "各ナクシャトラには4つのパーダ（四分の一、各3°20'）があります。パーダはナクシャトラとナヴァムシャ（D9）チャートを結びます — 上級ですが、詳細チャートに「パーダ」と出ます。",
      },
    },
    {
      id: "ch5-s4",
      kind: "content",
      icon: "droplets",
      title: { en: "Finding Your Moon Nakshatra", ja: "月のナクシャトラを見つける" },
      body: {
        en: "On your birth chart, find the Moon symbol (☽). The sign AND nakshatra name will be listed — e.g. \"Moon in Rohini.\" Read a simple description online to reflect on your emotional style.",
        ja: "出生図で月の記号（☽）を探します。星座とナクシャトラ名が表示されます — 例「月 in ローヒニ」。簡単な説明を読んで感情スタイルを振り返りましょう。",
      },
    },
    {
      id: "ch5-flash",
      kind: "flashcards",
      title: { en: "Famous Nakshatras", ja: "有名なナクシャトラ" },
      instruction: {
        en: "Learn six well-known lunar mansions beginners encounter first.",
        ja: "初心者が最初に出会う6つの月の宿を学びましょう。",
      },
      cards: [
        { id: "n1", front: { en: "Ashwini", ja: "アシュヴィニ" }, back: { en: "Healing, speed, horses", ja: "癒し・速さ・馬" }, icon: "flame" },
        { id: "n2", front: { en: "Rohini", ja: "ローヒニ" }, back: { en: "Beauty, growth, nourishment", ja: "美・成長・栄養" }, icon: "droplets" },
        { id: "n3", front: { en: "Mrigashira", ja: "ムリガシーラ" }, back: { en: "Searching, gentle curiosity", ja: "探求・穏やかな好奇心" }, icon: "wind" },
        { id: "n4", front: { en: "Magha", ja: "マガ" }, back: { en: "Ancestors, royalty, pride", ja: "祖先・王族・誇り" }, icon: "sun" },
        { id: "n5", front: { en: "Swati", ja: "スワティ" }, back: { en: "Independence, trade, wind", ja: "独立・商売・風" }, icon: "wind" },
        { id: "n6", front: { en: "Revati", ja: "レヴァティ" }, back: { en: "Compassion, journeys' end", ja: "慈悲・旅の終わり" }, icon: "moon" },
      ],
    },
    {
      id: "ch5-match",
      kind: "match",
      title: { en: "Nakshatra Traits Match", ja: "ナクシャトラ特性マッチ" },
      instruction: {
        en: "Match each Nakshatra to its beginner-friendly theme.",
        ja: "各ナクシャトラと初心者向けテーマをつなげましょう。",
      },
      pairs: [
        { leftId: "rohini", left: { en: "Rohini", ja: "ローヒニ" }, rightId: "beauty", right: { en: "Beauty & growth", ja: "美と成長" }, leftIcon: "droplets" },
        { leftId: "ashwini", left: { en: "Ashwini", ja: "アシュヴィニ" }, rightId: "heal", right: { en: "Healing & speed", ja: "癒しと速さ" }, leftIcon: "flame" },
        { leftId: "magha", left: { en: "Magha", ja: "マガ" }, rightId: "ancestor", right: { en: "Ancestors & pride", ja: "祖先と誇り" }, leftIcon: "sun" },
        { leftId: "revati", left: { en: "Revati", ja: "レヴァティ" }, rightId: "compassion", right: { en: "Compassion & completion", ja: "慈悲と完成" }, leftIcon: "moon" },
      ],
    },
    {
      id: "ch5-tf",
      kind: "true-false",
      title: { en: "Nakshatra True or False", ja: "ナクシャトラ マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "ntf1",
          statement: { en: "There are 27 Nakshatras in the Vedic zodiac system.", ja: "インド式黄道には27のナクシャトラがある。" },
          isTrue: true,
          explanation: { en: "27 × 13°20' = 360° full circle.", ja: "27 × 13°20' ＝ 360° の円。" },
        },
        {
          id: "ntf2",
          statement: { en: "Nakshatras are only used for the Sun, not the Moon.", ja: "ナクシャトラは月ではなく太陽だけに使われる。" },
          isTrue: false,
          explanation: { en: "Moon's Nakshatra is especially important; all planets occupy a nakshatra.", ja: "月のナクシャトラは特に重要；すべての惑星がナクシャトラに位置します。" },
        },
        {
          id: "ntf3",
          statement: { en: "Each Nakshatra is smaller than a full Rashi (sign).", ja: "各ナクシャトラはラーシ（星座）より小さい。" },
          isTrue: true,
          explanation: { en: "A sign is 30°; a nakshatra is 13°20'.", ja: "星座は30°；ナクシャトラは13°20'。" },
        },
        {
          id: "ntf4",
          statement: { en: "Your Moon Nakshatra has no relation to emotional habits.", ja: "月のナクシャトラは感情の習慣と無関係だ。" },
          isTrue: false,
          explanation: { en: "Moon nakshatra deeply colors mental and emotional patterns.", ja: "月のナクシャトラは心と感情のパターンに深く色を付けます。" },
        },
      ],
    },
    {
      id: "ch5-quiz",
      kind: "quiz",
      question: {
        en: "How many Nakshatras divide the Vedic zodiac?",
        ja: "インド式黄道は何個のナクシャトラに分かれますか？",
      },
      options: [
        { id: "12", label: { en: "12", ja: "12" }, icon: "orbit" },
        { id: "27", label: { en: "27", ja: "27" }, icon: "moon" },
        { id: "9", label: { en: "9", ja: "9" }, icon: "sun" },
        { id: "36", label: { en: "36", ja: "36" }, icon: "sparkles" },
      ],
      correctOptionId: "27",
      explanation: {
        en: "27 lunar mansions × 13°20' each = the full 360° zodiac.",
        ja: "27の月の宿 × 各13°20' ＝ 360° の黄道全体。",
      },
    },
  ],
};
