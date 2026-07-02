import { Shield } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter10Applications: CourseChapter = {
  id: "ch10",
  number: 10,
  title: { en: "Applied Jyotish", ja: "応用ジョーティシュ" },
  subtitle: {
    en: "Remedies, timing, compatibility & karmic balance",
    ja: "レメディ・時期選択・相性・カルマの平衡",
  },
  icon: Shield,
  steps: [
    {
      id: "ch10-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Planetary Antidotes (Upayes)", ja: "惑星の解決策（ウパーヤ）" },
      body: {
        en: "When imbalances appear in the birth chart, Jyotish prescribes remedial measures — not superstition, but karmic rebalancing. These help \"avert the danger that has not yet arisen.\"",
        ja: "出生図に不均衡が現れると、ジョーティシュはレメディ（処方）を勧めます — 迷信ではなく、カルマの再平衡です。「まだ来ていない危険を避ける」助けになります。",
      },
      bullets: [
        { en: "Gemstones touching the skin (chart-specific, not birth-month stones)", ja: "肌に触れる宝石（チャート別 — 誕生月の石ではない）" },
        { en: "Sanskrit mantra recitation", ja: "サンスクリット・マントラの唱和" },
        { en: "Charitable acts (dana) and Seva (selfless service)", ja: "慈善（ダーナ）とセヴァ（無私の奉仕）" },
        { en: "Vedic ceremonies: Homas, Yagnas, Yajnas", ja: "ヴェーダの儀式：ホーマ・ヤギャ・ヤジュナ" },
      ],
    },
    {
      id: "ch10-s1",
      kind: "content",
      icon: "mountain",
      title: { en: "Gemstones vs Birthstones", ja: "宝石 vs 誕生石" },
      body: {
        en: "Western birthstones by birth month were standardized by jewellers in 1912 — largely a trade convention. Jyotish recommends gemstones only after detailed chart analysis. Emeralds balance Mercury for one person but may harm another.",
        ja: "西洋の誕生月の石は1912年に宝石商によって標準化 — 主に商習慣です。ジョーティシュは詳細なチャート分析後にのみ宝石を勧めます。エメラルドが一人の水星を平衡しても、別の人には害になることがあります。",
      },
      highlight: {
        en: "Diamonds are not always \"a girl's best friend\" in Jyotish!",
        ja: "ジョーティシュではダイヤが常に「女性の親友」とは限りません！",
      },
    },
    {
      id: "ch10-s2",
      kind: "content",
      icon: "compass",
      title: { en: "Muhurta — Auspicious Timing", ja: "ムフルタ — 吉時" },
      body: {
        en: "\"There is a time for every purpose under heaven.\" Muhurta selects the most favourable moment to begin marriage, business, home construction, investments, and other major ventures.",
        ja: "「天の下にはすべての目的に時がある。」ムフルタは結婚・事業・家の建築・投資など重大な始まりに最も好ましい瞬間を選びます。",
      },
      bullets: [
        { en: "Factors: weekday, lunar day (tithi), Moon's Nakshatra, time of day", ja: "要素：曜日・月日（ティthi）・月のナクシャトラ・時刻" },
        { en: "Cross-checked against the individual's birth chart", ja: "個人の出生図と照合" },
        { en: "Maharishi Mahesh Yogi: \"Well begun is half done!\"", ja: "マハーリシ・マヘーシュ・ヨーギ：「始めが良ければ半分できたも同然！」" },
      ],
    },
    {
      id: "ch10-s3",
      kind: "content",
      icon: "droplets",
      title: { en: "Compatibility Analysis", ja: "相性分析" },
      body: {
        en: "Jyotish assesses how well two people may cooperate — in marriage, business, or partnership. Compatibility means fewer tensions, not necessarily romantic love or physical attraction.",
        ja: "ジョーティシュは二人がどれだけうまく協力できるか — 結婚・ビジネス・パートナーシップ — を評価します。相性とは緊張が少ないことであり、必ずしも恋愛や身体的魅力ではありません。",
      },
      bullets: [
        { en: "Requires accurate birth times for both charts", ja: "両方のチャートに正確な出生時刻が必要" },
        { en: "Examines Navamsha (9th divisional chart) and birth Nakshatras", ja: "ナヴァムシャ（第9分割図）と出生ナクシャトラを検査" },
        { en: "Ethical note: compatibility for already-married couples is inappropriate", ja: "倫理：既婚カップルの相性分析は不適切" },
      ],
    },
    {
      id: "ch10-s4",
      kind: "content",
      icon: "eye",
      title: { en: "Medical Astrology Basics", ja: "メディカル占星術の基礎" },
      body: {
        en: "Jyotish can indicate karmic health tendencies — not replace doctors. Each house maps to body regions (1st = head, 5th = stomach, 12th = feet). Each planet governs physiological systems (Venus = reproductive, Saturn = bones).",
        ja: "ジョーティシュはカルマ的な健康傾向を示せます — 医師の代わりではありません。各ハウスは身体部位に対応（第1=頭、第5=胃、第12=足）。各惑星は生理系を司ります（金星=生殖、土星=骨）。",
      },
      bullets: [
        { en: "Always consult a qualified doctor or Ayurvedic practitioner first", ja: "常に資格のある医師かアーユルヴェーダ実践者に先に相談" },
        { en: "Problematic Ketu dasha may bring hard-to-diagnose illnesses", ja: "問題のあるケートゥ・ダシャーは診断困難な病気をもたらすことがある" },
        { en: "Advanced: Jyotish + Ayurveda doshas (Dr. David Frawley)", ja: "上級：ジョーティシュ＋アーユルヴェーダ・ドーシャ（デーヴィッド・フローリー博士）" },
      ],
    },
    {
      id: "ch10-s5",
      kind: "content",
      icon: "moon",
      title: { en: "Changing Karma Without Remedies", ja: "レメディなしでカルマを変える" },
      body: {
        en: "Remedies are powerful, but karma can also shift through spiritual practice. Guru's grace, regular meditation (especially mantra meditation), monthly charity, and Seva are all karmically transformative.",
        ja: "レメディは強力ですが、スピリチュアル実践でもカルマは変わります。グルの恩寵・定期的な瞑想（特にマントラ瞑想）・毎月の慈善・セヴァはすべてカルマ的に変容的です。",
      },
      highlight: {
        en: "Long-term meditators often show greatly reduced negative karma in practice.",
        ja: "長期瞑想者は実践上、ネガティブカルマが大きく減っていることが多いです。",
      },
    },
    {
      id: "ch10-flash",
      kind: "flashcards",
      title: { en: "Remedy Flashcards", ja: "レメディ フラッシュカード" },
      instruction: {
        en: "Learn the main remedial tools of Jyotish. Flip each card and view all to continue.",
        ja: "ジョーティシュの主要レメディツールを覚えましょう。すべてのカードを見てから進みます。",
      },
      cards: [
        { id: "r1", front: { en: "Upaya / Planetary Antidote", ja: "ウパーヤ / 惑星の解決策" }, back: { en: "Remedial measure for imbalance", ja: "不均衡へのレメディ" }, icon: "sparkles" },
        { id: "r2", front: { en: "Muhurta", ja: "ムフルタ" }, back: { en: "Auspicious timing for new beginnings", ja: "新しい始まりの吉時" }, icon: "compass" },
        { id: "r3", front: { en: "Navamsha", ja: "ナヴァムシャ" }, back: { en: "9th divisional chart for marriage", ja: "結婚用第9分割図" }, icon: "moon" },
        { id: "r4", front: { en: "Dana", ja: "ダーナ" }, back: { en: "Charitable giving to modify karma", ja: "カルマを変える慈善" }, icon: "mountain" },
        { id: "r5", front: { en: "Seva", ja: "セヴァ" }, back: { en: "Selfless service", ja: "無私の奉仕" }, icon: "droplets" },
        { id: "r6", front: { en: "Homa / Yagna", ja: "ホーマ / ヤギャ" }, back: { en: "Vedic fire ceremony", ja: "ヴェーダの火の儀式" }, icon: "flame" },
      ],
    },
    {
      id: "ch10-match",
      kind: "match",
      title: { en: "Match Remedy to Purpose", ja: "レメディと目的をマッチ" },
      instruction: {
        en: "Connect each Jyotish tool to what it primarily addresses.",
        ja: "各ジョーティシュツールが主に対処することを結びつけましょう。",
      },
      pairs: [
        { leftId: "gem", left: { en: "Chart-specific gemstone", ja: "チャート別の宝石" }, rightId: "balance", right: { en: "Planetary energy balance", ja: "惑星エネルギーの平衡" }, leftIcon: "sparkles" },
        { leftId: "muh", left: { en: "Muhurta selection", ja: "ムフルタ選択" }, rightId: "timing", right: { en: "Best time to start ventures", ja: "事業開始の最良の時" }, leftIcon: "compass" },
        { leftId: "nav", left: { en: "Navamsha analysis", ja: "ナヴァムシャ分析" }, rightId: "compat", right: { en: "Marriage compatibility depth", ja: "結婚相性の深さ" }, leftIcon: "moon" },
        { leftId: "man", left: { en: "Planet-specific mantra", ja: "惑星別マントラ" }, rightId: "vibrate", right: { en: "Vibrational karmic correction", ja: "振動的カルマ修正" }, leftIcon: "wind" },
        { leftId: "med", left: { en: "Regular meditation", ja: "定期的な瞑想" }, rightId: "reduce", right: { en: "Reduce predicted negative karmas", ja: "予測されたネガティブカルマを減らす" }, leftIcon: "eye" },
      ],
    },
    {
      id: "ch10-order",
      kind: "order",
      title: { en: "Muhurta Factor Priority", ja: "ムフルタ要素の優先順" },
      instruction: {
        en: "Order the layers an astrologer considers when selecting a Muhurta (general → specific).",
        ja: "ムフルタ選択時に占星術師が考慮する層を並べましょう（一般 → 具体）。",
      },
      items: [
        { id: "event", label: { en: "Purpose of the event (marriage, business…)", ja: "出来事の目的（結婚・事業…）" }, icon: "compass" },
        { id: "chart", label: { en: "Individual's birth chart & Nakshatra", ja: "個人の出生図とナクシャトラ" }, icon: "moon" },
        { id: "lunar", label: { en: "Lunar day, weekday, Moon's Nakshatra", ja: "月日・曜日・月のナクシャトラ" }, icon: "orbit" },
        { id: "avoid", label: { en: "Avoid eclipse zones & afflicted periods", ja: "食の区域と傷ついた期間を避ける" }, icon: "eye" },
      ],
    },
    {
      id: "ch10-tf",
      kind: "true-false",
      title: { en: "Applied Jyotish: True or False", ja: "応用ジョーティシュ マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "atf1",
          statement: { en: "Modern birthstones by month are primarily a jewellery trade convention.", ja: "月別の現代誕生石は主に宝石商の商習慣だ。" },
          isTrue: true,
          explanation: { en: "Standardized in 1912 by the American National Association of Jewellers.", ja: "1912年にアメリカ宝石商協会によって標準化されました。" },
        },
        {
          id: "atf2",
          statement: { en: "It is ethical to request compatibility analysis for an already-married couple.", ja: "既婚カップルの相性分析を依頼するのは倫理的だ。" },
          isTrue: false,
          explanation: { en: "Marriage guidance counselling is more appropriate in that situation.", ja: "その状況では結婚カウンセリングの方が適切です。" },
        },
        {
          id: "atf3",
          statement: { en: "Medical Astrology can replace consultation with a qualified doctor.", ja: "メディカル占星術は資格のある医師への相談に代われる。" },
          isTrue: false,
          explanation: { en: "Always seek medical advice first — Jyotish complements, not replaces, healthcare.", ja: "常に医療アドバイスを先に — ジョーティシュは医療を補完し、置き換えません。" },
        },
        {
          id: "atf4",
          statement: { en: "Muhurta helps align important beginnings with supportive cosmic timing.", ja: "ムフルタは重要な始まりを支援的な宇宙のタイミングと一致させる。" },
          isTrue: true,
          explanation: { en: "Well begun is half done — timing reduces obstacles.", ja: "始めが良ければ半分できた — タイミングが障害を減らします。" },
        },
      ],
    },
    {
      id: "ch10-multi",
      kind: "multi-select",
      title: { en: "Karmic Rebalancing Toolkit", ja: "カルマ再平衡ツールキット" },
      question: {
        en: "Which can help modify or soften returning negative karmas? Select ALL that apply.",
        ja: "返ってくるネガティブカルマを変えたり和らげたりできるものは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "gem", label: { en: "Prescribed gemstone touching skin", ja: "肌に触れる処方宝石" }, icon: "sparkles" },
        { id: "mantra", label: { en: "Planet-specific mantra chanting", ja: "惑星別マントラ唱和" }, icon: "wind" },
        { id: "med", label: { en: "Regular meditation practice", ja: "定期的な瞑想実践" }, icon: "eye" },
        { id: "birthstone", label: { en: "Wearing any birth-month gemstone", ja: "誕生月の宝石を何でも着ける" }, icon: "mountain" },
        { id: "seva", label: { en: "Selfless service (Seva)", ja: "無私の奉仕（セヴァ）" }, icon: "droplets" },
        { id: "ignore", label: { en: "Ignoring all predicted challenges", ja: "予測された困難をすべて無視" }, icon: "orbit" },
      ],
      correctOptionIds: ["gem", "mantra", "med", "seva"],
      explanation: {
        en: "Gemstones (chart-specific), mantras, meditation, charity, and seva all modify karma — random birthstones and denial do not.",
        ja: "宝石（チャート別）・マントラ・瞑想・慈善・セヴァはすべてカルマを変えます — 適当な誕生石と否認ではありません。",
      },
    },
    {
      id: "ch10-quiz",
      kind: "quiz",
      title: { en: "Cosmic Postman Final Check", ja: "宇宙の郵便配達人 最終チェック" },
      question: {
        en: "A problematic Saturn in the 12th house may indicate karmic tendencies affecting which body area?",
        ja: "第12ハウスの問題のある土星は、どの身体部位に影響するカルマ傾向を示す可能性がある？",
      },
      options: [
        { id: "head", label: { en: "Head (1st house region)", ja: "頭（第1ハウス領域）" }, icon: "sun" },
        { id: "stomach", label: { en: "Stomach (5th house region)", ja: "胃（第5ハウス領域）" }, icon: "flame" },
        { id: "feet", label: { en: "Feet & joints (12th house region)", ja: "足と関節（第12ハウス領域）" }, icon: "mountain" },
        { id: "heart", label: { en: "Heart only — houses don't map to body", ja: "心臓のみ — ハウスは身体に対応しない" }, icon: "wind" },
      ],
      correctOptionId: "feet",
      explanation: {
        en: "The 12th house governs feet; Saturn governs bones and joints — combining both suggests foot/joint karmic themes.",
        ja: "第12ハウスは足を司り；土星は骨と関節を司ります — 両方を組み合わせると足・関節のカルマテーマを示唆します。",
      },
    },
  ],
};
