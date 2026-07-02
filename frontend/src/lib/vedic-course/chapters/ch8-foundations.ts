import { BookOpen } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter8Foundations: CourseChapter = {
  id: "ch8",
  number: 8,
  title: { en: "Foundations of Jyotish", ja: "ジョーティシュの基礎" },
  subtitle: {
    en: "Karma, light, and the science of living well",
    ja: "カルマ・光・よく生きるための科学",
  },
  icon: BookOpen,
  steps: [
    {
      id: "ch8-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Jyotish — The Science of Light", ja: "ジョーティシュ — 光の科学" },
      body: {
        en: "Jyotish (ज्योतिष) comes from Jyoti, Sanskrit for \"light.\" It illuminates past tendencies, present patterns, and probable futures — not as fortune-telling, but as karmic engineering.",
        ja: "ジョーティシュ（ज्योतिष）はサンスクリットの「光（ジョーティ）」に由来します。過去の傾向・現在のパターン・起こりうる未来を照らします — 占いではなく、カルマ工学として。",
      },
      highlight: {
        en: "Like yoga, Jyotish aims to help you live healthier, happier, and more fulfilling lives.",
        ja: "ヨガと同様、ジョーティシュはより健康で幸せで充実した人生を支援することを目指します。",
      },
    },
    {
      id: "ch8-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "We Are Stardust", ja: "私たちは星の塵" },
      body: {
        en: "Modern science confirms that iron in our blood and calcium in our bones were forged in stars billions of years ago. Ancient Vedic sages saw the same unity — life on Earth is woven into the cosmos.",
        ja: "現代科学は、血液の鉄や骨のカルシウムが何十億年も前の星で生まれたことを確認しています。古代ヴェーダの聖者も同じ一体性を見ていました — 地上の生命は宇宙と織り込まれています。",
      },
      bullets: [
        { en: "Yoga deepens connection to Earth and sky", ja: "ヨガは大地と空へのつながりを深める" },
        { en: "Jyotish maps how cosmic patterns reflect in a birth chart", ja: "ジョーティシュは宇宙のパターンが出生図にどう映るかを地図化する" },
      ],
    },
    {
      id: "ch8-s2",
      kind: "content",
      icon: "moon",
      title: { en: "Karma & the Cosmic Postman", ja: "カルマと宇宙の郵便配達人" },
      body: {
        en: "Jyotish views returning karmas — actions from past lives ripening now. Planets don't control you; they act as the \"cosmic postman,\" delivering karmic packages addressed to you at specific times.",
        ja: "ジョーティシュは「返ってくるカルマ」— 過去生の行いが今熟すこと — を見ます。惑星は支配しません；「宇宙の郵便配達人」として、特定の時期にあなた宛のカルマの荷物を届けます。",
      },
      highlight: {
        en: "The Creator does not play dice — your birth moment encodes which karmas are likely to unfold.",
        ja: "創造主はサイコロを振らない — 生まれた瞬間に、どのカルマが展開しやすいかが符号化されています。",
      },
    },
    {
      id: "ch8-s3",
      kind: "content",
      icon: "compass",
      title: { en: "Predictive & Preventive", ja: "予測的かつ予防的" },
      body: {
        en: "Jyotish forecasts opportunities and obstacles across health, wealth, family, career, relationships, and spiritual growth — and indicates when they are likely to manifest through planetary periods (Mahadashas).",
        ja: "ジョーティシュは健康・富・家族・キャリア・人間関係・スピリチュアル成長の機会と障害を予測し — 惑星期（マハーダシャー）を通じていつ現れやすいかも示します。",
      },
      bullets: [
        { en: "Predictive: identify returning karmas and their timing", ja: "予測：返ってくるカルマとその時期を特定" },
        { en: "Preventive: remedial measures soften challenging karmas", ja: "予防：レメディ（処方）が厳しいカルマを和らげる" },
        { en: "Think weather forecast — probabilities, not certainties", ja: "天気予報のように — 確率であり、絶対ではない" },
      ],
    },
    {
      id: "ch8-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "The Four Purusharthas", ja: "四つのプルシャールタ" },
      body: {
        en: "Jyotish organizes life into four aims — the Purusharthas. Every major prediction relates to one or more of these.",
        ja: "ジョーティシュは人生を四つの目的（プルシャールタ）に整理します。主要な予測はいずれか — または複数 — に関わります。",
      },
      bullets: [
        { en: "Artha — wealth, health, food, children, knowledge", ja: "アルタ — 富・健康・食・子供・知識" },
        { en: "Dharma — duty, character, right action, career path", ja: "ダルマ — 義務・品格・正しい行い・キャリアの道" },
        { en: "Kama — desire, love, relationships, pleasure", ja: "カーマ — 欲望・愛・人間関係・快楽" },
        { en: "Moksha — spiritual growth, liberation, Self-realization", ja: "モークシャ — スピリチュアル成長・解放・自己実現" },
      ],
    },
    {
      id: "ch8-s5",
      kind: "content",
      icon: "eye",
      title: { en: "Free Will Meets Destiny", ja: "自由意志と運命の出会い" },
      body: {
        en: "Life combines both predetermination and free will. An enlightened master illustrated: \"Your adult height is predetermined, but the size of your waist is largely free will.\"",
        ja: "人生は予定と自由意志の両方を含みます。悟った師は例えました：「大人の身長は予め決まっているが、ウエストのサイズはほとんど自由意志だ。」",
      },
      bullets: [
        { en: "The birth chart is like DNA in a seed — blueprint, not every branch", ja: "出生図は種のDNAのように — 設計図であり、すべての枝ではない" },
        { en: "Remedies, meditation, charity, and seva can modify karmas", ja: "レメディ・瞑想・慈善・セヴァ（奉仕）がカルマを変えうる" },
      ],
    },
    {
      id: "ch8-s6",
      kind: "content",
      icon: "sparkles",
      title: { en: "Origins & Sister Sciences", ja: "起源と姉妹科学" },
      body: {
        en: "Maharishi Parashara cognized Jyotish over 5,000 years ago — revealed wisdom, not gradual discovery. Jyotish sits alongside Yoga, Ayurveda, Vastu, and Pranayama as Vedic sister sciences.",
        ja: "マハーリシ・パーラシャラが5000年以上前にジョーティシュを認知しました — 段階的発見ではなく、啓示された知恵です。ジョーティシュはヨガ・アーユルヴェーダ・ヴァーストゥ・プラーナーヤーマと並ぶヴェーダの姉妹科学です。",
      },
      bullets: [
        { en: "Not every problem is karma — lifestyle and environment matter too", ja: "すべての問題がカルマではない — 生活様式と環境も重要" },
        { en: "Ayurveda & Vastu address health and living-space imbalances", ja: "アーユルヴェーダとヴァーストゥは健康と住空間の不均衡に対処" },
        { en: "Universal benefit — no particular religion required", ja: "普遍的な利益 — 特定の宗教は不要" },
      ],
    },
    {
      id: "ch8-flash",
      kind: "flashcards",
      title: { en: "Purushartha Flashcards", ja: "プルシャールタ フラッシュカード" },
      instruction: {
        en: "Flip each card — match the Sanskrit term to its life domain. View all to continue.",
        ja: "カードを裏返し — サンスクリット語と人生の領域を結びつけましょう。すべて見てから進みます。",
      },
      cards: [
        { id: "p1", front: { en: "Artha", ja: "アルタ" }, back: { en: "Wealth, health, knowledge", ja: "富・健康・知識" }, icon: "mountain" },
        { id: "p2", front: { en: "Dharma", ja: "ダルマ" }, back: { en: "Duty, career, right action", ja: "義務・キャリア・正しい行い" }, icon: "compass" },
        { id: "p3", front: { en: "Kama", ja: "カーマ" }, back: { en: "Love, desire, relationships", ja: "愛・欲望・人間関係" }, icon: "droplets" },
        { id: "p4", front: { en: "Moksha", ja: "モークシャ" }, back: { en: "Spiritual liberation", ja: "スピリチュアルな解放" }, icon: "sparkles" },
        { id: "p5", front: { en: "Cosmic postman", ja: "宇宙の郵便配達人" }, back: { en: "Planets deliver karmas on schedule", ja: "惑星がカルマを予定通り届ける" }, icon: "orbit" },
        { id: "p6", front: { en: "Mahadasha", ja: "マハーダシャー" }, back: { en: "Major planetary period of influence", ja: "主要な惑星影響期" }, icon: "moon" },
      ],
    },
    {
      id: "ch8-match",
      kind: "match",
      title: { en: "Match Life Area to Purushartha", ja: "人生領域とプルシャールタをマッチ" },
      instruction: {
        en: "Connect each life theme to its Purushartha — the four aims Jyotish predicts across.",
        ja: "各人生テーマをプルシャールタに結びつけましょう — ジョーティシュが予測する四つの目的。",
      },
      pairs: [
        { leftId: "career", left: { en: "Career & duty", ja: "キャリアと義務" }, rightId: "dharma", right: { en: "Dharma", ja: "ダルマ" }, leftIcon: "compass" },
        { leftId: "marriage", left: { en: "Marriage & romance", ja: "結婚とロマンス" }, rightId: "kama", right: { en: "Kama", ja: "カーマ" }, leftIcon: "droplets" },
        { leftId: "wealth", left: { en: "Finances & health", ja: "財務と健康" }, rightId: "artha", right: { en: "Artha", ja: "アルタ" }, leftIcon: "mountain" },
        { leftId: "meditation", left: { en: "Enlightenment path", ja: "悟りへの道" }, rightId: "moksha", right: { en: "Moksha", ja: "モークシャ" }, leftIcon: "sparkles" },
        { leftId: "dashas", left: { en: "Timing of karmic delivery", ja: "カルマ配達のタイミング" }, rightId: "postman", right: { en: "Planetary periods", ja: "惑星期" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch8-order",
      kind: "order",
      title: { en: "The Jyotish Journey", ja: "ジョーティシュの旅" },
      instruction: {
        en: "Order the logical flow: from reading the chart to taking preventive action.",
        ja: "論理的な流れを並べましょう：チャートを読む → 予防的行動へ。",
      },
      items: [
        { id: "read", label: { en: "Decode the birth chart", ja: "出生図を解読" }, icon: "eye" },
        { id: "predict", label: { en: "Identify returning karmas & timing", ja: "返ってくるカルマと時期を特定" }, icon: "moon" },
        { id: "aware", label: { en: "Proceed with awareness (like taking an umbrella)", ja: "意識を持って進む（傘を持つように）" }, icon: "compass" },
        { id: "remedy", label: { en: "Apply remedial measures if needed", ja: "必要ならレメディを適用" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch8-tf",
      kind: "true-false",
      title: { en: "Karma Concepts: True or False", ja: "カルマ概念 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "ktf1",
          statement: { en: "Planets control you like puppet masters in Jyotish.", ja: "ジョーティシュでは惑星が操り人形のようにあなたを支配する。" },
          isTrue: false,
          explanation: { en: "Planets deliver karmas — you are not controlled by them.", ja: "惑星はカルマを届ける — 支配はされません。" },
        },
        {
          id: "ktf2",
          statement: { en: "Jyotish deals with probabilities, similar to weather forecasting.", ja: "ジョーティシュは天気予報のように確率を扱う。" },
          isTrue: true,
          explanation: { en: "Skilled astrologers aim for ~70% accuracy — high probability, not certainty.", ja: "熟練の占星術師は約70%の精度を目指す — 高確率であり、確実ではない。" },
        },
        {
          id: "ktf3",
          statement: { en: "Maharishi Parashara cognized the foundations of Jyotish.", ja: "マハーリシ・パーラシャラがジョーティシュの基礎を認知した。" },
          isTrue: true,
          explanation: { en: "Parashara's teachings remain the primary foundation for modern Jyotish.", ja: "パーラシャラの教えは現代ジョーティシュの主要な基盤です。" },
        },
        {
          id: "ktf4",
          statement: { en: "Every life problem is caused by returning karma from past lives.", ja: "すべての人生の問題は過去生の返ってくるカルマが原因だ。" },
          isTrue: false,
          explanation: { en: "Environment, lifestyle, Vastu, and Ayurveda address non-karmic issues too.", ja: "環境・生活様式・ヴァーストゥ・アーユルヴェーダも非カルマ的問題に対処します。" },
        },
      ],
    },
    {
      id: "ch8-multi",
      kind: "multi-select",
      title: { en: "Benefits of Jyotish Challenge", ja: "ジョーティシュの利益チャレンジ" },
      question: {
        en: "Which are genuine benefits of a Jyotish chart reading? Select ALL that apply.",
        ja: "出生図リーディングの本当の利益は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "timing", label: { en: "Timing when karmas are likely to manifest", ja: "カルマが現れやすい時期の特定" }, icon: "moon" },
        { id: "remedy", label: { en: "Remedial measures to soften challenges", ja: "困難を和らげるレメディ" }, icon: "sparkles" },
        { id: "muhurta", label: { en: "Choosing auspicious timing for important events", ja: "重要な出来事の吉時選択" }, icon: "compass" },
        { id: "entertain", label: { en: "Daily Sun-sign entertainment like newspapers", ja: "新聞のような日刊太陽星座エンタメ" }, icon: "sun" },
        { id: "connect", label: { en: "Feeling connected to the fabric of creation", ja: "創造の織物とのつながりを感じる" }, icon: "orbit" },
        { id: "ignore", label: { en: "Guaranteed elimination of all negative karma", ja: "すべてのネガティブカルマの完全消去保証" }, icon: "mountain" },
      ],
      correctOptionIds: ["timing", "remedy", "muhurta", "connect"],
      explanation: {
        en: "Jyotish offers timing, remedies, muhurta, and deeper connection — but not entertainment-level Sun signs or total karma erasure.",
        ja: "ジョーティシュは時期・レメディ・ムフルタ・深いつながりを提供 — エンタメ級の太陽星座やカルマ完全消去ではありません。",
      },
    },
    {
      id: "ch8-quiz",
      kind: "quiz",
      question: {
        en: "What does the word \"Jyotish\" literally mean?",
        ja: "「ジョーティシュ」という言葉の文字通りの意味は？",
      },
      options: [
        { id: "star", label: { en: "Star map", ja: "星の地図" }, icon: "orbit" },
        { id: "light", label: { en: "Science of light", ja: "光の科学" }, icon: "sparkles" },
        { id: "fate", label: { en: "Fixed fate", ja: "固定された運命" }, icon: "mountain" },
        { id: "magic", label: { en: "Occult magic", ja: "オカルト魔術" }, icon: "moon" },
      ],
      correctOptionId: "light",
      explanation: {
        en: "Jyoti means light — Jyotish shines light on past, present, and probable future.",
        ja: "ジョーティは光 — ジョーティシュは過去・現在・起こりうる未来に光を当てます。",
      },
    },
  ],
};
