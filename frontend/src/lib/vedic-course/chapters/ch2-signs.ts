import { Sun } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter2Signs: CourseChapter = {
  id: "ch2",
  number: 2,
  title: { en: "The 12 Signs", ja: "12の星座（ラーシ）" },
  subtitle: {
    en: "Rashis — elements, modalities, and Sanskrit names",
    ja: "ラーシ — 元素・モダリティ・サンスクリット名",
  },
  icon: Sun,
  steps: [
    {
      id: "ch2-s0",
      kind: "content",
      icon: "orbit",
      title: { en: "What Is a Rashi?", ja: "ラーシとは？" },
      body: {
        en: "The zodiac is a 360° belt divided into 12 equal Rashis of 30° each. Planets travel through these signs; the sign shows the style or flavor of a planet's energy.",
        ja: "黄道は360°の帯で、12の等しい30°のラーシに分かれます。惑星はこれらの星座を通過し、星座は惑星エネルギーのスタイルや味わいを示します。",
      },
    },
    {
      id: "ch2-s1",
      kind: "content",
      icon: "flame",
      title: { en: "The Four Elements", ja: "4つの元素" },
      body: {
        en: "Every sign belongs to Fire, Earth, Air, or Water. Elements describe temperament — how energy moves through you.",
        ja: "すべての星座は火・地・風・水に属します。元素は気質 — エネルギーがどう動くかを表します。",
      },
      bullets: [
        { en: "Fire: inspiration, action (Mesha, Simha, Dhanu)", ja: "火：インスピレーション・行動（メーシャ、シンハ、ダヌ）" },
        { en: "Earth: stability, matter (Vrishabha, Kanya, Makara)", ja: "地：安定・物質（ヴリシャバ、カニヤ、マカラ）" },
        { en: "Air: ideas, connection (Mithuna, Tula, Kumbha)", ja: "風：考え・つながり（ミトゥナ、トゥラ、クンバ）" },
        { en: "Water: feeling, intuition (Karka, Vrishchika, Meena)", ja: "水：感情・直感（カルカ、ヴリシュチカ、ミーナ）" },
      ],
    },
    {
      id: "ch2-s2",
      kind: "content",
      icon: "wind",
      title: { en: "Cardinal, Fixed, Mutable", ja: "活動宮・不動宮・柔軟宮" },
      body: {
        en: "Modalities show how signs initiate, sustain, or adapt. This helps you compare signs beyond elements alone.",
        ja: "モダリティは星座がどう始め、維持し、適応するかを示します。元素だけでなく星座を比べる助けになります。",
      },
      bullets: [
        { en: "Cardinal (Chara): starts things — Mesha, Karka, Tula, Makara", ja: "活動宮（チャラ）：始める — メーシャ、カルカ、トゥラ、マカラ" },
        { en: "Fixed (Sthira): holds steady — Vrishabha, Simha, Vrishchika, Kumbha", ja: "不動宮（スティラ）：保つ — ヴリシャバ、シンハ、ヴリシュチカ、クンバ" },
        { en: "Mutable (Dvisvabhava): adapts — Mithuna, Kanya, Dhanu, Meena", ja: "柔軟宮（ドヴィスヴァバーヴァ）：適応 — ミトゥナ、カニヤ、ダヌ、ミーナ" },
      ],
    },
    {
      id: "ch2-s3",
      kind: "content",
      icon: "flame",
      title: { en: "Fire Signs in Detail", ja: "火の星座 詳しく" },
      body: {
        en: "Mesha ♈, Simha ♌, Dhanu ♐ — passionate, direct, and future-oriented.",
        ja: "メーシャ♈、シンハ♌、ダヌ♐ — 情熱的・率直・未来志向。",
      },
      bullets: [
        { en: "Mesha (Aries): pioneer, competitive, fast", ja: "メーシャ（牡羊座）：開拓者・競争的・速い" },
        { en: "Simha (Leo): creative, proud, generous", ja: "シンハ（獅子座）：創造的・誇り高い・寛大" },
        { en: "Dhanu (Sagittarius): philosophical, adventurous", ja: "ダヌ（射手座）：哲学的・冒険的" },
      ],
    },
    {
      id: "ch2-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "Earth Signs in Detail", ja: "地の星座 詳しく" },
      body: {
        en: "Vrishabha ♉, Kanya ♍, Makara ♑ — grounded, practical, and results-focused.",
        ja: "ヴリシャバ♉、カニヤ♍、マカラ♑ — 地に足がついた・実用的・結果重視。",
      },
      bullets: [
        { en: "Vrishabha (Taurus): sensual, patient, values security", ja: "ヴリシャバ（牡牛座）：感覚的・忍耐強い・安心を重視" },
        { en: "Kanya (Virgo): analytical, helpful, detail-oriented", ja: "カニヤ（乙女座）：分析的・助ける・細部重視" },
        { en: "Makara (Capricorn): ambitious, structured, enduring", ja: "マカラ（山羊座）：野心的・構造的・耐久" },
      ],
    },
    {
      id: "ch2-s5",
      kind: "content",
      icon: "wind",
      title: { en: "Air Signs in Detail", ja: "風の星座 詳しく" },
      body: {
        en: "Mithuna ♊, Tula ♎, Kumbha ♒ — mental, social, and idea-driven.",
        ja: "ミトゥナ♊、トゥラ♎、クンバ♒ — 知的・社交的・アイデア主導。",
      },
      bullets: [
        { en: "Mithuna (Gemini): curious, witty, dual-natured", ja: "ミトゥナ（双子座）：好奇心・機知・二面性" },
        { en: "Tula (Libra): diplomatic, aesthetic, partnership-minded", ja: "トゥラ（天秤座）：外交的・美的・パートナーシップ重視" },
        { en: "Kumbha (Aquarius): innovative, humanitarian, unconventional", ja: "クンバ（水瓶座）：革新的・人道主義・型破り" },
      ],
    },
    {
      id: "ch2-s6",
      kind: "content",
      icon: "droplets",
      title: { en: "Water Signs in Detail", ja: "水の星座 詳しく" },
      body: {
        en: "Karka ♋, Vrishchika ♏, Meena ♓ — emotional, intuitive, and deeply feeling.",
        ja: "カルカ♋、ヴリシュチカ♏、ミーナ♓ — 感情的・直感的・深く感じる。",
      },
      bullets: [
        { en: "Karka (Cancer): nurturing, protective, home-loving", ja: "カルカ（蟹座）：育む・守る・家庭を愛する" },
        { en: "Vrishchika (Scorpio): intense, secretive, transformative", ja: "ヴリシュチカ（蠍座）：強烈・秘密・変容" },
        { en: "Meena (Pisces): dreamy, compassionate, spiritual", ja: "ミーナ（魚座）：夢見がち・慈悲深い・スピリチュアル" },
      ],
    },
    {
      id: "ch2-flash",
      kind: "flashcards",
      title: { en: "Sign Name Flashcards", ja: "星座名フラッシュカード" },
      instruction: {
        en: "Learn the Sanskrit Vedic names. Flip each card and view all to continue.",
        ja: "サンスクリットのインド式名称を覚えましょう。すべてのカードを見てから進みます。",
      },
      cards: [
        { id: "s1", front: { en: "Mesha", ja: "メーシャ" }, back: { en: "Aries ♈", ja: "牡羊座 ♈" }, icon: "flame" },
        { id: "s2", front: { en: "Vrishabha", ja: "ヴリシャバ" }, back: { en: "Taurus ♉", ja: "牡牛座 ♉" }, icon: "mountain" },
        { id: "s3", front: { en: "Mithuna", ja: "ミトゥナ" }, back: { en: "Gemini ♊", ja: "双子座 ♊" }, icon: "wind" },
        { id: "s4", front: { en: "Karka", ja: "カルカ" }, back: { en: "Cancer ♋", ja: "蟹座 ♋" }, icon: "droplets" },
        { id: "s5", front: { en: "Simha", ja: "シンハ" }, back: { en: "Leo ♌", ja: "獅子座 ♌" }, icon: "sun" },
        { id: "s6", front: { en: "Kanya", ja: "カニヤ" }, back: { en: "Virgo ♍", ja: "乙女座 ♍" }, icon: "mountain" },
        { id: "s7", front: { en: "Tula", ja: "トゥラ" }, back: { en: "Libra ♎", ja: "天秤座 ♎" }, icon: "wind" },
        { id: "s8", front: { en: "Vrishchika", ja: "ヴリシュチカ" }, back: { en: "Scorpio ♏", ja: "蠍座 ♏" }, icon: "droplets" },
        { id: "s9", front: { en: "Dhanu", ja: "ダヌ" }, back: { en: "Sagittarius ♐", ja: "射手座 ♐" }, icon: "flame" },
        { id: "s10", front: { en: "Makara", ja: "マカラ" }, back: { en: "Capricorn ♑", ja: "山羊座 ♑" }, icon: "mountain" },
        { id: "s11", front: { en: "Kumbha", ja: "クンバ" }, back: { en: "Aquarius ♒", ja: "水瓶座 ♒" }, icon: "wind" },
        { id: "s12", front: { en: "Meena", ja: "ミーナ" }, back: { en: "Pisces ♓", ja: "魚座 ♓" }, icon: "droplets" },
      ],
    },
    {
      id: "ch2-match",
      kind: "match",
      title: { en: "Match Element to Signs", ja: "元素と星座をマッチ" },
      instruction: {
        en: "Connect each element to one of its Vedic fire/earth/air/water sign examples.",
        ja: "各元素と、その例となる星座をつなげましょう。",
      },
      pairs: [
        { leftId: "fire", left: { en: "Fire element", ja: "火の元素" }, rightId: "simha", right: { en: "Simha (Leo)", ja: "シンハ（獅子座）" }, leftIcon: "flame" },
        { leftId: "earth", left: { en: "Earth element", ja: "地の元素" }, rightId: "makara", right: { en: "Makara (Capricorn)", ja: "マカラ（山羊座）" }, leftIcon: "mountain" },
        { leftId: "air", left: { en: "Air element", ja: "風の元素" }, rightId: "mithuna", right: { en: "Mithuna (Gemini)", ja: "ミトゥナ（双子座）" }, leftIcon: "wind" },
        { leftId: "water", left: { en: "Water element", ja: "水の元素" }, rightId: "karka", right: { en: "Karka (Cancer)", ja: "カルカ（蟹座）" }, leftIcon: "droplets" },
      ],
    },
    {
      id: "ch2-order",
      kind: "order",
      title: { en: "Order the Fire Signs", ja: "火の星座を順番に" },
      instruction: {
        en: "Arrange the three fire signs in zodiac order (first → last in the year cycle).",
        ja: "3つの火の星座を黄道の順（年の周期で先→後）に並べましょう。",
      },
      items: [
        { id: "mesha", label: { en: "Mesha (Aries)", ja: "メーシャ（牡羊座）" }, icon: "flame" },
        { id: "simha", label: { en: "Simha (Leo)", ja: "シンハ（獅子座）" }, icon: "sun" },
        { id: "dhanu", label: { en: "Dhanu (Sagittarius)", ja: "ダヌ（射手座）" }, icon: "flame" },
      ],
    },
    {
      id: "ch2-tf",
      kind: "true-false",
      title: { en: "Sign Facts: True or False", ja: "星座ファクト マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "stf1",
          statement: { en: "Vedic and Western astrology use the same zodiac symbols (♈♉♊...).", ja: "インド式と西洋式は同じ星座記号（♈♉♊...）を使う。" },
          isTrue: true,
          explanation: { en: "Symbols match; Sanskrit names differ from Latin.", ja: "記号は同じ；サンスクリット名はラテン語と異なります。" },
        },
        {
          id: "stf2",
          statement: { en: "Kanya is the Vedic name for Libra.", ja: "カニヤは天秤座のインド式名称だ。" },
          isTrue: false,
          explanation: { en: "Kanya = Virgo. Tula = Libra.", ja: "カニヤ＝乙女座。トゥラ＝天秤座。" },
        },
        {
          id: "stf3",
          statement: { en: "Makara, Kumbha, and Meena are all fire signs.", ja: "マカラ、クンバ、ミーナはすべて火の星座だ。" },
          isTrue: false,
          explanation: { en: "Makara = Earth, Kumbha = Air, Meena = Water.", ja: "マカラ＝地、クンバ＝風、ミーナ＝水です。" },
        },
        {
          id: "stf4",
          statement: { en: "Simha is ruled by the Sun (Surya).", ja: "シンハは太陽（スーリヤ）に支配される。" },
          isTrue: true,
          explanation: { en: "Leo's ruler is Surya — royal, fiery energy.", ja: "獅子座の支配星はスーリヤ — 王者の火のエネルギー。" },
        },
      ],
    },
    {
      id: "ch2-quiz",
      kind: "quiz",
      question: {
        en: "Simha is the Vedic name for which Western sign?",
        ja: "シンハは西洋占星術のどの星座に相当しますか？",
      },
      options: [
        { id: "aries", label: { en: "Aries ♈", ja: "牡羊座 ♈" }, icon: "flame" },
        { id: "leo", label: { en: "Leo ♌", ja: "獅子座 ♌" }, icon: "sun" },
        { id: "libra", label: { en: "Libra ♎", ja: "天秤座 ♎" }, icon: "wind" },
        { id: "pisces", label: { en: "Pisces ♓", ja: "魚座 ♓" }, icon: "droplets" },
      ],
      correctOptionId: "leo",
      explanation: {
        en: "Simha means \"lion\" — the fiery, regal sign of Leo.",
        ja: "シンハは「獅子」の意味 — 火の性質を持つ王者の星座・獅子座です。",
      },
    },
  ],
};
