import { Crown } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter21Yogakaraka: CourseChapter = {
  id: "ch21",
  number: 21,
  title: { en: "Yogakaraka & Functional Lords", ja: "ヨーガカーラカと機能支配星" },
  subtitle: {
    en: "Benefics and malefics for every Ascendant",
    ja: "すべてのアセンダントの吉星と凶星",
  },
  icon: Crown,
  steps: [
    {
      id: "ch21-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Beyond Natural Nature", ja: "生来的性質を超えて" },
      body: {
        en: "Functional benefics and malefics depend on which houses a planet rules from YOUR Ascendant. This is essential for chart reading AND gemstone prescriptions. The Ascendant lord never harms the native.",
        ja: "機能的吉星と凶星はあなたのアセンダントからどのハウスを支配するか次第。チャートリーディングと宝石処方の両方に必須。アセンダント支配星はネイティブを害しない。",
      },
      highlight: {
        en: "Grade 5 benefic >> Grade 1 benefic. Grade 5 malefic >> Grade 1 malefic.",
        ja: "グレード5吉星 >> グレード1吉星。グレード5凶星 >> グレード1凶星。",
      },
    },
    {
      id: "ch21-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Yogakaraka — The Chart Hero", ja: "ヨーガカーラカ — チャートの英雄" },
      body: {
        en: "A Yogakaraka planet rules both a Kendra (1,4,7,10) AND a Trikona (1,5,9) — exceptionally auspicious. Famous Yogakarakas: Mars for Cancer & Leo, Venus for Capricorn & Aquarius, Saturn for Taurus & Libra.",
        ja: "ヨーガカーラカ惑星はケンドラ（1,4,7,10）とトリコナ（1,5,9）両方を支配 — 非常に吉。有名なヨーガカーラカ：蟹と獅子の火星、山羊と水瓶の金星、牡牛と天秤の土星。",
      },
      bullets: [
        { en: "Leo Lagna: Mars rules 4th & 9th — Grade 5 Yogakaraka", ja: "獅子ラグナ：火星が第4・9支配 — グレード5ヨーガカーラカ" },
        { en: "Cancer Lagna: Mars rules 5th & 10th — Yogakaraka", ja: "蟹ラグナ：火星が第5・10支配 — ヨーガカーラカ" },
        { en: "Capricorn Lagna: Venus rules 5th & 10th — Yogakaraka", ja: "山羊ラグナ：金星が第5・10支配 — ヨーガカーラカ" },
      ],
    },
    {
      id: "ch21-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Maraka Planets", ja: "マラカ惑星" },
      body: {
        en: "Maraka (\"death-inflicting\") planets rule the 2nd and/or 7th houses — linked to longevity and partnerships. They aren't literally fatal but can bring heavy challenges during their dashas. Examples: Mars Maraka for Taurus; Venus Maraka for Scorpio.",
        ja: "マラカ（「死をもたらす」）惑星は第2および/または第7ハウスを支配 — 長寿とパートナーシップに関連。文字通り致命的ではないがダシャー中に重い困難をもたらすことがある。例：牡牛のマラカ火星；蠍のマラカ金星。",
      },
    },
    {
      id: "ch21-s3",
      kind: "content",
      icon: "flame",
      title: { en: "Key Ascendants — Leo & Virgo", ja: "主要アセンダント — 獅子と乙女" },
      body: {
        en: "Leo: Mars (Yogakaraka G5), Jupiter (G2), Sun benefic. Malefics: Mercury (G4), Saturn (G2), Venus (G1). Virgo: Venus (Yogakaraka), Mercury benefic. Malefics: Mars (G4), Moon (G3), Jupiter Maraka (G1).",
        ja: "獅子：火星（ヨーガカーラカG5）、木星（G2）、太陽吉星。凶星：水星（G4）、土星（G2）、金星（G1）。乙女：金星（ヨーガカーラカ）、水星吉星。凶星：火星（G4）、月（G3）、木星マラカ（G1）。",
      },
      highlight: {
        en: "Same Mars — hero for Leo, villain for Virgo. Ascendant changes everything.",
        ja: "同じ火星 — 獅子では英雄、乙女では悪役。アセンダントがすべてを変える。",
      },
    },
    {
      id: "ch21-s4",
      kind: "content",
      icon: "droplets",
      title: { en: "Key Ascendants — Pisces & Aquarius", ja: "主要アセンダント — 魚と水瓶" },
      body: {
        en: "Pisces: Mars (G4 benefic), Moon (G2), Jupiter (G1). Malefics: Saturn (G5!), Venus (G4), Sun (G2), Mercury (G1). Aquarius: Venus (G5 Yogakaraka!), Saturn benefic. Malefics: Jupiter (G5!), Moon (G2), Mars (G1).",
        ja: "魚：火星（G4吉星）、月（G2）、木星（G1）。凶星：土星（G5!）、金星（G4）、太陽（G2）、水星（G1）。水瓶：金星（G5ヨーガカーラカ!）、土星吉星。凶星：木星（G5!）、月（G2）、火星（G1）。",
      },
      bullets: [
        { en: "Pisces: Venus is Grade 4 malefic — opposite of natural benefic status", ja: "魚：金星はグレード4凶星 — 生来的吉星ステータスの反対" },
        { en: "Gemstone rule: strengthen functional benefics only", ja: "宝石ルール：機能的吉星のみ強化" },
        { en: "Rahu/Ketu: always natural malefics, never functional lords", ja: "ラーフ/ケートゥ：常に生来的凶星、機能支配星にならない" },
      ],
    },
    {
      id: "ch21-s5",
      kind: "content",
      icon: "compass",
      title: { en: "Good Houses Strengthen Planets", ja: "吉ハウスが惑星を強化" },
      body: {
        en: "Trikona (5,9) and Kendra (1,4,7,10) houses strengthen occupying planets. Dusthana (6,8,12) weaken them AND the houses those planets rule. Upachaya (3,6,10,11) improve with time — malefics do well here.",
        ja: "トリコナ（5,9）とケンドラ（1,4,7,10）ハウスは占有惑星を強化。ダストハナ（6,8,12）はそれらと支配ハウスを弱化。ウパーチャヤ（3,6,10,11）は時間とともに改善 — 凶星がここで良い。",
      },
    },
    {
      id: "ch21-flash",
      kind: "flashcards",
      title: { en: "Yogakaraka Flashcards", ja: "ヨーガカーラカ フラッシュカード" },
      instruction: {
        en: "Match Ascendants to their Yogakaraka planet. Flip all cards.",
        ja: "アセンダントとヨーガカーラカ惑星を結びつけ。すべて見て進みます。",
      },
      cards: [
        { id: "y1", front: { en: "Leo (Simha) Lagna", ja: "獅子（シンハ）ラグナ" }, back: { en: "Mars — Grade 5 Yogakaraka", ja: "火星 — グレード5ヨーガカーラカ" }, icon: "sun" },
        { id: "y2", front: { en: "Cancer (Karka) Lagna", ja: "蟹（カルカ）ラグナ" }, back: { en: "Mars — Yogakaraka", ja: "火星 — ヨーガカーラカ" }, icon: "moon" },
        { id: "y3", front: { en: "Capricorn (Makara) Lagna", ja: "山羊（マカラ）ラグナ" }, back: { en: "Venus — Yogakaraka", ja: "金星 — ヨーガカーラカ" }, icon: "mountain" },
        { id: "y4", front: { en: "Aquarius (Kumbha) Lagna", ja: "水瓶（クンバ）ラグナ" }, back: { en: "Venus — Grade 5 Yogakaraka", ja: "金星 — グレード5ヨーガカーラカ" }, icon: "wind" },
        { id: "y5", front: { en: "Taurus (Vrishabha) Lagna", ja: "牡牛（ヴリシャバ）ラグナ" }, back: { en: "Saturn — Yogakaraka", ja: "土星 — ヨーガカーラカ" }, icon: "droplets" },
        { id: "y6", front: { en: "Virgo (Kanya) Lagna", ja: "乙女（カニヤ）ラグナ" }, back: { en: "Venus — Yogakaraka", ja: "金星 — ヨーガカーラカ" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch21-match",
      kind: "match",
      title: { en: "Lagna Functional Match", ja: "ラグナ機能マッチ" },
      instruction: {
        en: "Connect each Ascendant scenario to the correct functional classification.",
        ja: "各アセンダントシナリオを正しい機能分類に結びつけましょう。",
      },
      pairs: [
        { leftId: "leo", left: { en: "Leo Lagna + Mars", ja: "獅子ラグナ＋火星" }, rightId: "yog", right: { en: "Grade 5 Yogakaraka", ja: "グレード5ヨーガカーラカ" }, leftIcon: "sun" },
        { leftId: "vir", left: { en: "Virgo Lagna + Mars", ja: "乙女ラグナ＋火星" }, rightId: "mal", right: { en: "Grade 4 Malefic", ja: "グレード4凶星" }, leftIcon: "flame" },
        { leftId: "pis", left: { en: "Pisces Lagna + Venus", ja: "魚ラグナ＋金星" }, rightId: "g4", right: { en: "Grade 4 Malefic", ja: "グレード4凶星" }, leftIcon: "droplets" },
        { leftId: "gem", left: { en: "Gemini Lagna + Mars", ja: "双子ラグナ＋火星" }, rightId: "g5", right: { en: "Grade 5 Malefic", ja: "グレード5凶星" }, leftIcon: "wind" },
        { leftId: "aqu", left: { en: "Aquarius Lagna + Venus", ja: "水瓶ラグナ＋金星" }, rightId: "yog2", right: { en: "Grade 5 Yogakaraka", ja: "グレード5ヨーガカーラカ" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch21-order",
      kind: "order",
      title: { en: "Remedy Safety by Function", ja: "機能別レメディ安全性" },
      instruction: {
        en: "Order functional planet types from safest to most dangerous for gemstone remedy.",
        ja: "宝石レメディで最も安全→最も危険な機能的惑星タイプを並べましょう。",
      },
      items: [
        { id: "yog", label: { en: "Yogakaraka (safest gem candidate)", ja: "ヨーガカーラカ（最も安全な宝石候補）" }, icon: "sparkles" },
        { id: "ben", label: { en: "Functional benefic (Grade 2–4)", ja: "機能的吉星（G2–4）" }, icon: "sparkles" },
        { id: "lag", label: { en: "Ascendant lord (generally safe)", ja: "アセンダント支配星（一般に安全）" }, icon: "sun" },
        { id: "mal", label: { en: "Functional malefic (mantras only!)", ja: "機能的凶星（マントラのみ！）" }, icon: "mountain" },
      ],
    },
    {
      id: "ch21-tf",
      kind: "true-false",
      title: { en: "Yogakaraka Facts: True or False", ja: "ヨーガカーラカ マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c21tf1",
          statement: { en: "The Ascendant lord never harms the native.", ja: "アセンダント支配星はネイティブを害しない。" },
          isTrue: true,
          explanation: { en: "A fundamental Parashara principle — Lagna lord is always protective.", ja: "パーラシャラの基本原則 — ラグナ支配星は常に保護的。" },
        },
        {
          id: "c21tf2",
          statement: { en: "Rahu can be a functional benefic because it rules certain houses.", ja: "ラーフは特定ハウスを支配するので機能的吉星になれる。" },
          isTrue: false,
          explanation: { en: "Rahu and Ketu own no signs — they remain natural malefics only.", ja: "ラーフとケートゥは星座を支配しない — 生来的凶星のまま。" },
        },
        {
          id: "c21tf3",
          statement: { en: "Venus is a Grade 5 Yogakaraka for Aquarius Ascendant.", ja: "金星は水瓶アセンダントのグレード5ヨーガカーラカだ。" },
          isTrue: true,
          explanation: { en: "Venus rules 4th & 9th from Aquarius — exceptionally auspicious.", ja: "金星は水瓶から第4・9を支配 — 非常に吉。" },
        },
        {
          id: "c21tf4",
          statement: { en: "You should wear a gemstone for a Grade 5 functional malefic.", ja: "グレード5機能的凶星の宝石を着けるべきだ。" },
          isTrue: false,
          explanation: { en: "Never strengthen functional malefics with gems — use mantras instead.", ja: "機能的凶星を宝石で強化してはいけない — 代わりにマントラ。" },
        },
      ],
    },
    {
      id: "ch21-multi",
      kind: "multi-select",
      title: { en: "Yogakaraka Identification", ja: "ヨーガカーラカ特定" },
      question: {
        en: "Which planets are Yogakarakas for their listed Ascendant? Select ALL.",
        ja: "リストのアセンダントのヨーガカーラカである惑星は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "leom", label: { en: "Mars for Leo Ascendant", ja: "獅子アセンダントの火星" }, icon: "sun" },
        { id: "capv", label: { en: "Venus for Capricorn Ascendant", ja: "山羊アセンダントの金星" }, icon: "mountain" },
        { id: "virm", label: { en: "Mars for Virgo Ascendant", ja: "乙女アセンダントの火星" }, icon: "flame" },
        { id: "taus", label: { en: "Saturn for Taurus Ascendant", ja: "牡牛アセンダントの土星" }, icon: "droplets" },
        { id: "canm", label: { en: "Mars for Cancer Ascendant", ja: "蟹アセンダントの火星" }, icon: "moon" },
        { id: "pism", label: { en: "Mercury for Pisces Ascendant", ja: "魚アセンダントの水星" }, icon: "wind" },
      ],
      correctOptionIds: ["leom", "capv", "taus", "canm"],
      explanation: {
        en: "Mars Yogakaraka for Leo & Cancer; Venus for Capricorn; Saturn for Taurus. Mars is G4 malefic for Virgo; Mercury is G1 malefic for Pisces.",
        ja: "火星は獅子と蟹のヨーガカーラカ；金星は山羊；土星は牡牛。火星は乙女でG4凶星；水星は魚でG1凶星。",
      },
    },
    {
      id: "ch21-quiz",
      kind: "quiz",
      question: {
        en: "Gemini Ascendant: which planet is the Grade 5 functional malefic?",
        ja: "双子アセンダント：グレード5機能的凶星はどの惑星？",
      },
      options: [
        { id: "ven", label: { en: "Venus (rules 5 & 12)", ja: "金星（第5・12支配）" }, icon: "droplets" },
        { id: "mar", label: { en: "Mars (rules 6 & 11)", ja: "火星（第6・11支配）" }, icon: "flame" },
        { id: "jup", label: { en: "Jupiter (rules 7 & 10)", ja: "木星（第7・10支配）" }, icon: "sparkles" },
        { id: "mer", label: { en: "Mercury (rules 1 & 4)", ja: "水星（第1・4支配）" }, icon: "wind" },
      ],
      correctOptionId: "mar",
      explanation: {
        en: "Mars rules the 6th and 11th from Gemini — Grade 5 malefic, very adverse indeed.",
        ja: "火星は双子から第6・11を支配 — グレード5凶星、非常に不利。",
      },
    },
  ],
};
