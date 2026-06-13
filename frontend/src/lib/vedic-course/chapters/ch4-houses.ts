import { Compass } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter4Houses: CourseChapter = {
  id: "ch4",
  number: 4,
  title: { en: "The 12 Houses", ja: "12のハウス（バーヴァ）" },
  subtitle: {
    en: "Bhavas — the stages of your life story",
    ja: "バーヴァ — 人生の舞台",
  },
  icon: Compass,
  steps: [
    {
      id: "ch4-s0",
      kind: "content",
      icon: "orbit",
      title: { en: "What Are Bhavas?", ja: "バーヴァとは？" },
      body: {
        en: "Houses are 12 life departments. House 1 starts at Lagna; houses 2–12 follow counter-clockwise. Planets in a house activate that life area.",
        ja: "ハウスは12の人生部門です。第1ハウスはラグナから始まり、2〜12ハウスは反時計回りに続きます。ハウスにある惑星はその人生領域を活性化します。",
      },
    },
    {
      id: "ch4-s1",
      kind: "content",
      icon: "sparkles",
      title: { en: "Kendras — The Four Pillars", ja: "ケンドラ — 4つの柱" },
      body: {
        en: "Houses 1, 4, 7, and 10 are Kendras (angles). They are the strongest, most visible parts of life.",
        ja: "第1・4・7・10ハウスはケンドラ（角）。最も強く、目に見える人生の部分です。",
      },
      bullets: [
        { en: "1st: self, body, personality", ja: "第1：自己・身体・性格" },
        { en: "4th: home, mother, inner peace", ja: "第4：家庭・母・内なる平安" },
        { en: "7th: spouse, partners, contracts", ja: "第7：配偶者・パートナー・契約" },
        { en: "10th: career, status, public life", ja: "第10：キャリア・地位・公的な生活" },
      ],
    },
    {
      id: "ch4-s2",
      kind: "content",
      icon: "sun",
      title: { en: "Trikonas — Luck Houses", ja: "トリコナ — 幸運のハウス" },
      body: {
        en: "Houses 1, 5, and 9 are Trikonas (trines) — dharma, creativity, and fortune. They support growth and protection.",
        ja: "第1・5・9ハウスはトリコナ（トライン）— ダルマ・創造性・幸運。成長と守護を支えます。",
      },
      bullets: [
        { en: "5th: children, romance, intelligence, past merit", ja: "第5：子供・恋愛・知性・過去の功徳" },
        { en: "9th: teachers, luck, long journeys, higher wisdom", ja: "第9：師・幸運・長旅・高次の知恵" },
      ],
    },
    {
      id: "ch4-s3",
      kind: "content",
      icon: "wind",
      title: { en: "Houses 2, 6, 8, 12 — Growth Through Challenge", ja: "第2・6・8・12ハウス — 試練を通じた成長" },
      body: {
        en: "These houses often bring effort or transformation. Beginners should not fear them — they show where life asks you to grow.",
        ja: "これらのハウスはしばしば努力や変容をもたらします。初心者は恐れる必要はありません — 人生が成長を求める場所を示します。",
      },
      bullets: [
        { en: "2nd: wealth, speech, family food", ja: "第2：富・言葉・家族の食" },
        { en: "6th: enemies, disease, service, daily work", ja: "第6：敵・病・奉仕・日常の仕事" },
        { en: "8th: secrets, longevity, sudden change", ja: "第8：秘密・長寿・突然の変化" },
        { en: "12th: sleep, losses, foreign lands, moksha", ja: "第12：睡眠・損失・外国・モークシャ" },
      ],
    },
    {
      id: "ch4-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "Houses 3 & 11 — Effort & Gains", ja: "第3・11ハウス — 努力と利益" },
      body: {
        en: "The 3rd house is courage, siblings, and skills you build. The 11th is friends, income, and wishes fulfilled.",
        ja: "第3ハウスは勇気・兄弟・築くスキル。第11は友人・収入・叶う願いです。",
      },
    },
    {
      id: "ch4-s5",
      kind: "content",
      icon: "moon",
      title: { en: "Planet + House = Where Energy Acts", ja: "惑星＋ハウス＝エネルギーの舞台" },
      body: {
        en: "Jupiter in the 10th often brings career wisdom; Moon in the 4th deepens home life. Always read planet + sign + house together.",
        ja: "第10ハウスの木星はしばしばキャリアの知恵を；第4ハウスの月は家庭生活を深めます。常に惑星＋星座＋ハウスを一緒に読みましょう。",
      },
    },
    {
      id: "ch4-flash",
      kind: "flashcards",
      title: { en: "House Themes Flashcards", ja: "ハウステーマ フラッシュカード" },
      instruction: {
        en: "Memorize the life theme of each key house.",
        ja: "主要ハウスの人生テーマを覚えましょう。",
      },
      cards: [
        { id: "h1", front: { en: "1st House", ja: "第1ハウス" }, back: { en: "Self, body, Lagna", ja: "自己・身体・ラグナ" }, icon: "sparkles" },
        { id: "h2", front: { en: "2nd House", ja: "第2ハウス" }, back: { en: "Wealth, speech", ja: "富・言葉" }, icon: "mountain" },
        { id: "h4", front: { en: "4th House", ja: "第4ハウス" }, back: { en: "Home, mother", ja: "家庭・母" }, icon: "mountain" },
        { id: "h5", front: { en: "5th House", ja: "第5ハウス" }, back: { en: "Children, creativity", ja: "子供・創造性" }, icon: "sun" },
        { id: "h7", front: { en: "7th House", ja: "第7ハウス" }, back: { en: "Marriage, partners", ja: "結婚・パートナー" }, icon: "droplets" },
        { id: "h9", front: { en: "9th House", ja: "第9ハウス" }, back: { en: "Luck, dharma, teachers", ja: "幸運・ダルマ・師" }, icon: "sparkles" },
        { id: "h10", front: { en: "10th House", ja: "第10ハウス" }, back: { en: "Career, reputation", ja: "キャリア・評判" }, icon: "sun" },
        { id: "h12", front: { en: "12th House", ja: "第12ハウス" }, back: { en: "Spirituality, foreign", ja: "スピリチュアル・外国" }, icon: "moon" },
      ],
    },
    {
      id: "ch4-match",
      kind: "match",
      title: { en: "Match House to Life Area", ja: "ハウスと人生領域をマッチ" },
      instruction: {
        en: "Connect each house number to its main theme.",
        ja: "ハウス番号と主なテーマをつなげましょう。",
      },
      pairs: [
        { leftId: "h4n", left: { en: "4th House", ja: "第4ハウス" }, rightId: "home", right: { en: "Home & mother", ja: "家庭と母" }, leftIcon: "mountain" },
        { leftId: "h7n", left: { en: "7th House", ja: "第7ハウス" }, rightId: "partner", right: { en: "Marriage & partners", ja: "結婚とパートナー" }, leftIcon: "droplets" },
        { leftId: "h10n", left: { en: "10th House", ja: "第10ハウス" }, rightId: "career", right: { en: "Career & status", ja: "キャリアと地位" }, leftIcon: "sun" },
        { leftId: "h5n", left: { en: "5th House", ja: "第5ハウス" }, rightId: "kids", right: { en: "Children & creativity", ja: "子供と創造性" }, leftIcon: "sparkles" },
        { leftId: "h9n", left: { en: "9th House", ja: "第9ハウス" }, rightId: "luck", right: { en: "Luck & wisdom", ja: "幸運と知恵" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch4-order",
      kind: "order",
      title: { en: "Order the Kendras", ja: "ケンドラを順番に" },
      instruction: {
        en: "Arrange Kendra houses in numerical order (lowest to highest).",
        ja: "ケンドラのハウスを番号順（小→大）に並べましょう。",
      },
      items: [
        { id: "k1", label: { en: "1st House", ja: "第1ハウス" }, icon: "sparkles" },
        { id: "k4", label: { en: "4th House", ja: "第4ハウス" }, icon: "mountain" },
        { id: "k7", label: { en: "7th House", ja: "第7ハウス" }, icon: "droplets" },
        { id: "k10", label: { en: "10th House", ja: "第10ハウス" }, icon: "sun" },
      ],
    },
    {
      id: "ch4-quiz",
      kind: "quiz",
      question: {
        en: "Which house represents partnerships and marriage?",
        ja: "パートナーシップや結婚を表すハウスはどれ？",
      },
      options: [
        { id: "h4", label: { en: "4th House", ja: "第4ハウス" }, icon: "mountain" },
        { id: "h7", label: { en: "7th House", ja: "第7ハウス" }, icon: "droplets" },
        { id: "h10", label: { en: "10th House", ja: "第10ハウス" }, icon: "sun" },
        { id: "h12", label: { en: "12th House", ja: "第12ハウス" }, icon: "moon" },
      ],
      correctOptionId: "h7",
      explanation: {
        en: "The 7th house is the house of the other — spouse and open partnerships.",
        ja: "第7ハウスは「他者」のハウス — 配偶者と公然たるパートナーシップ。",
      },
    },
  ],
};
