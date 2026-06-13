import { Sun, Moon, Orbit, Compass } from "lucide-react";
import type { CourseChapter } from "./types";

export const VEDIC_COURSE_CHAPTERS: CourseChapter[] = [
  {
    id: "ch1",
    number: 1,
    title: { en: "The 9 Planets", ja: "9つの惑星（グラハ）" },
    subtitle: {
      en: "Grahas — cosmic forces that color your life",
      ja: "人生に色を与える宇宙の力",
    },
    icon: Orbit,
    steps: [
      {
        id: "ch1-s0",
        kind: "content",
        icon: "sparkles",
        title: {
          en: "Welcome to the Grahas",
          ja: "グラハへようこそ",
        },
        body: {
          en: "In Vedic astrology, nine celestial bodies — the Grahas — shape your personality and life path. Think of them as nine colored lenses through which you see the world.",
          ja: "インド占星術では、9つの天体「グラハ」があなたの性格や人生の道筋を形作ります。世界を見る9色のレンズのような存在です。",
        },
        highlight: {
          en: "Graha = planet or luminary that \"grasps\" your karma",
          ja: "グラハ＝カルマを「掴む」惑星・光体",
        },
      },
      {
        id: "ch1-s1",
        kind: "content",
        icon: "sun",
        title: { en: "Surya — The Sun", ja: "スーリヤ — 太陽" },
        body: {
          en: "The Sun is your soul, confidence, and father-figure energy. A strong Sun gives leadership and clarity; a weak Sun may feel invisible or unsure.",
          ja: "太陽は魂・自信・父親的なエネルギーを表します。太陽が強いとリーダーシップと明晰さが生まれ、弱いと目立たない・自信が持てない印象になります。",
        },
      },
      {
        id: "ch1-s2",
        kind: "content",
        icon: "moon",
        title: { en: "Chandra — The Moon", ja: "チャンドラ — 月" },
        body: {
          en: "The Moon rules your mind, emotions, and motherly comfort. It shows how you feel safe and how you react instinctively.",
          ja: "月は心・感情・母親的な安心感を司ります。どう安心するか、本能的にどう反応するかを示します。",
        },
      },
      {
        id: "ch1-s3",
        kind: "content",
        icon: "flame",
        title: { en: "Mangal — Mars", ja: "マンガル — 火星" },
        body: {
          en: "Mars is raw energy, courage, and action. It drives ambition, sportsmanship, and sometimes anger — your inner warrior.",
          ja: "火星は生のエネルギー・勇気・行動力です。野心やスポーツ精神、ときには怒り — 内なる戦士を表します。",
        },
      },
      {
        id: "ch1-s4",
        kind: "content",
        icon: "wind",
        title: { en: "Budha — Mercury", ja: "ブダ — 水星" },
        body: {
          en: "Mercury governs speech, logic, and learning. Writers, traders, and curious minds often have a prominent Mercury.",
          ja: "水星は言葉・論理・学びを司ります。作家や商人、好奇心旺盛な人は水星が強いことが多いです。",
        },
      },
      {
        id: "ch1-s5",
        kind: "content",
        icon: "sparkles",
        title: { en: "Guru — Jupiter", ja: "グル — 木星" },
        body: {
          en: "Jupiter is wisdom, teachers, and good fortune. It expands whatever it touches — beliefs, wealth, or optimism.",
          ja: "木星は知恵・師・幸運を表します。触れたものを広げる — 信念・富・楽観性を大きくします。",
        },
      },
      {
        id: "ch1-s6",
        kind: "content",
        icon: "droplets",
        title: { en: "Shukra — Venus", ja: "シュクラ — 金星" },
        body: {
          en: "Venus rules love, beauty, art, and pleasure. It shows what you find attractive and how you relate romantically.",
          ja: "金星は愛・美・芸術・快楽を司ります。何に惹かれるか、恋愛でどう関わるかを示します。",
        },
      },
      {
        id: "ch1-s7",
        kind: "content",
        icon: "mountain",
        title: { en: "Shani — Saturn", ja: "シャニ — 土星" },
        body: {
          en: "Saturn is discipline, delays, and hard lessons. It rewards patience and structure — the strict but fair teacher.",
          ja: "土星は規律・遅れ・厳しい教訓を表します。忍耐と構造を報いる — 厳しいが公平な教師です。",
        },
      },
      {
        id: "ch1-s8",
        kind: "content",
        icon: "orbit",
        title: { en: "Rahu & Ketu — The Shadow Nodes", ja: "ラーフとケートゥ — 影の交点" },
        body: {
          en: "Rahu craves worldly ambition and obsession; Ketu seeks spiritual detachment. They are not physical planets but powerful eclipse points on your chart.",
          ja: "ラーフは世俗的な野心と執着、ケートゥは精神的な離脱を求めます。物理的な惑星ではなく、チャート上の強力な食の点です。",
        },
      },
      {
        id: "ch1-quiz",
        kind: "quiz",
        question: {
          en: "Which Graha rules your emotions and inner mind?",
          ja: "感情と内なる心を司るグラハはどれ？",
        },
        options: [
          { id: "sun", label: { en: "Surya (Sun)", ja: "スーリヤ（太陽）" }, icon: "sun" },
          { id: "moon", label: { en: "Chandra (Moon)", ja: "チャンドラ（月）" }, icon: "moon" },
          { id: "mars", label: { en: "Mangal (Mars)", ja: "マンガル（火星）" }, icon: "flame" },
          { id: "venus", label: { en: "Shukra (Venus)", ja: "シュクラ（金星）" }, icon: "droplets" },
        ],
        correctOptionId: "moon",
        explanation: {
          en: "Chandra (Moon) is the karaka of the mind — your feelings, moods, and instinctive reactions.",
          ja: "チャンドラ（月）は心のカーラカ — 感情・気分・本能的反応を表します。",
        },
      },
    ],
  },
  {
    id: "ch2",
    number: 2,
    title: { en: "The 12 Signs", ja: "12の星座（ラーシ）" },
    subtitle: {
      en: "Rashis — the zodiac belt in Vedic style",
      ja: "ラーシ — インド式の黄道帯",
    },
    icon: Sun,
    steps: [
      {
        id: "ch2-s0",
        kind: "content",
        icon: "orbit",
        title: { en: "What Is a Rashi?", ja: "ラーシとは？" },
        body: {
          en: "A Rashi is a 30° slice of the sky — your \"sign\" in Vedic astrology. Signs describe your style of expressing planetary energy, not your whole personality alone.",
          ja: "ラーシは天球の30°の区切り — インド占星術での「星座」です。惑星のエネルギーを表現するスタイルを示し、性格全体だけではありません。",
        },
      },
      {
        id: "ch2-s1",
        kind: "content",
        icon: "flame",
        title: { en: "Fire Signs", ja: "火の星座" },
        body: {
          en: "Mesha (Aries ♈), Simha (Leo ♌), Dhanu (Sagittarius ♐) — bold, enthusiastic, action-first. They initiate and inspire.",
          ja: "メーシャ（牡羊座♈）、シンハ（獅子座♌）、ダヌ（射手座♐）— 大胆・情熱的・行動優先。始める力と鼓舞する力があります。",
        },
      },
      {
        id: "ch2-s2",
        kind: "content",
        icon: "mountain",
        title: { en: "Earth Signs", ja: "地の星座" },
        body: {
          en: "Vrishabha (Taurus ♉), Kanya (Virgo ♍), Makara (Capricorn ♑) — practical, steady, material. They build and preserve.",
          ja: "ヴリシャバ（牡牛座♉）、カニヤ（乙女座♍）、マカラ（山羊座♑）— 実用的・安定・物質的。築き、守る力があります。",
        },
      },
      {
        id: "ch2-s3",
        kind: "content",
        icon: "wind",
        title: { en: "Air Signs", ja: "風の星座" },
        body: {
          en: "Mithuna (Gemini ♊), Tula (Libra ♎), Kumbha (Aquarius ♒) — social, intellectual, communicative. They connect ideas and people.",
          ja: "ミトゥナ（双子座♊）、トゥラ（天秤座♎）、クンバ（水瓶座♒）— 社交的・知的・コミュニケーション上手。考えと人をつなぎます。",
        },
      },
      {
        id: "ch2-s4",
        kind: "content",
        icon: "droplets",
        title: { en: "Water Signs", ja: "水の星座" },
        body: {
          en: "Karka (Cancer ♋), Vrishchika (Scorpio ♏), Meena (Pisces ♓) — intuitive, emotional, deep. They feel and heal.",
          ja: "カルカ（蟹座♋）、ヴリシュチカ（蠍座♏）、ミーナ（魚座♓）— 直感的・感情的・深い。感じ、癒す力があります。",
        },
      },
      {
        id: "ch2-s5",
        kind: "content",
        icon: "sparkles",
        title: { en: "Quick Reference", ja: "早見表" },
        body: {
          en: "Mesha→Aries, Vrishabha→Taurus, Mithuna→Gemini, Karka→Cancer, Simha→Leo, Kanya→Virgo, Tula→Libra, Vrishchika→Scorpio, Dhanu→Sagittarius, Makara→Capricorn, Kumbha→Aquarius, Meena→Pisces.",
          ja: "メーシャ→牡羊座、ヴリシャバ→牡牛座、ミトゥナ→双子座、カルカ→蟹座、シンハ→獅子座、カニヤ→乙女座、トゥラ→天秤座、ヴリシュチカ→蠍座、ダヌ→射手座、マカラ→山羊座、クンバ→水瓶座、ミーナ→魚座。",
        },
        highlight: {
          en: "Vedic signs use the same symbols as Western — names differ in Sanskrit.",
          ja: "インド式も西洋と同じ記号を使います — 名前はサンスクリット語です。",
        },
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
  },
  {
    id: "ch3",
    number: 3,
    title: { en: "The 1st House", ja: "第1ハウス（ラグナ）" },
    subtitle: {
      en: "Lagna — your rising self on the horizon",
      ja: "ラグナ — 地平線に昇るあなたの姿",
    },
    icon: Moon,
    steps: [
      {
        id: "ch3-s0",
        kind: "content",
        icon: "sparkles",
        title: { en: "What Is Lagna?", ja: "ラグナとは？" },
        body: {
          en: "Lagna (Ascendant) is the zodiac sign rising on the eastern horizon at your exact birth moment. It is the most personal point on your chart — your \"mask\" and physical presence.",
          ja: "ラグナ（アセンダント）は、誕生の瞬間に東の地平線から昇っていた星座です。チャートで最も個人的な点 — あなたの「仮面」と肉体の印象を表します。",
        },
      },
      {
        id: "ch3-s1",
        kind: "content",
        icon: "sun",
        title: { en: "Lagna vs. Sun Sign", ja: "ラグナと太陽星座の違い" },
        body: {
          en: "Western horoscopes often use your Sun sign. Vedic readings start with Lagna because it changes every ~2 hours. Two people born the same day can have totally different Lagnas.",
          ja: "西洋占星術は太陽星座をよく使います。インド式はラグナから読み始めます。約2時間で変わるため、同じ日に生まれてもラグナは大きく異なります。",
        },
      },
      {
        id: "ch3-s2",
        kind: "content",
        icon: "moon",
        title: { en: "Your Outer Self", ja: "外に見えるあなた" },
        body: {
          en: "Lagna shows first impressions, body type, and life direction. A Mesha Lagna appears direct and pioneering; a Karka Lagna feels nurturing and protective.",
          ja: "ラグナは第一印象・体型・人生の方向性を示します。メーシャのラグナは率直で開拓的、カルカのラグナは育む・守る印象です。",
        },
      },
      {
        id: "ch3-s3",
        kind: "content",
        icon: "orbit",
        title: { en: "Finding Lagna on Your Chart", ja: "チャートでラグナを見つける" },
        body: {
          en: "Look for \"Asc\" or House 1 in your birth chart. The sign sitting there is your Lagna. Planets in the 1st house color how you present yourself to the world.",
          ja: "出生図で「Asc」または第1ハウスを探します。その星座がラグナです。第1ハウスにある惑星は、世界への見せ方に色を付けます。",
        },
        highlight: {
          en: "Tip: Generate your chart on the Dashboard with exact birth time for accurate Lagna.",
          ja: "ヒント：正確なラグナには、ダッシュボードで正確な出生時刻を入力してチャートを作成しましょう。",
        },
      },
      {
        id: "ch3-quiz",
        kind: "quiz",
        question: {
          en: "Why is exact birth time important for Lagna?",
          ja: "ラグナのために正確な出生時刻が重要なのはなぜ？",
        },
        options: [
          { id: "year", label: { en: "It changes every year", ja: "毎年変わるから" }, icon: "orbit" },
          { id: "hours", label: { en: "It changes every ~2 hours", ja: "約2時間で変わるから" }, icon: "sun" },
          { id: "never", label: { en: "It never changes", ja: "決して変わらないから" }, icon: "mountain" },
          { id: "month", label: { en: "It changes every month", ja: "毎月変わるから" }, icon: "moon" },
        ],
        correctOptionId: "hours",
        explanation: {
          en: "The Ascendant moves quickly — roughly one sign every two hours — so even 30 minutes can shift your Lagna.",
          ja: "アセンダントは速く動き — およそ2時間で一星座 — 30分の差でもラグナが変わることがあります。",
        },
      },
    ],
  },
  {
    id: "ch4",
    number: 4,
    title: { en: "Reading Your Chart", ja: "出生図の読み方" },
    subtitle: {
      en: "Put Grahas, Rashis, and Bhavas together",
      ja: "グラハ・ラーシ・バーヴァを組み合わせる",
    },
    icon: Compass,
    steps: [
      {
        id: "ch4-s0",
        kind: "content",
        icon: "orbit",
        title: { en: "The 12 Bhavas (Houses)", ja: "12のバーヴァ（ハウス）" },
        body: {
          en: "Your chart is divided into 12 houses — life areas like career, love, and health. House 1 always starts at your Lagna; the rest follow counter-clockwise around the wheel.",
          ja: "チャートは12のハウスに分かれます — キャリア・恋愛・健康などの人生の領域です。第1ハウスは常にラグナから始まり、反時計回りに続きます。",
        },
      },
      {
        id: "ch4-s1",
        kind: "content",
        icon: "sparkles",
        title: { en: "Four Key Life Pillars", ja: "4つの人生の柱" },
        body: {
          en: "Houses 1, 4, 7, and 10 are the Kendras — the strongest life themes: self (1), home & roots (4), partnerships (7), and career & reputation (10). Check which signs and planets sit here first.",
          ja: "第1・4・7・10ハウスはケンドラ — 最も強い人生テーマ：自己（1）、家庭とルーツ（4）、パートナーシップ（7）、キャリアと評判（10）。まずここにある星座と惑星を確認しましょう。",
        },
      },
      {
        id: "ch4-s2",
        kind: "content",
        icon: "sun",
        title: { en: "Planet + Sign = Flavor", ja: "惑星＋星座＝味わい" },
        body: {
          en: "A planet shows what energy; its sign shows how that energy expresses. Mars in Mesha is bold and fast; Mars in Karka acts through emotion and protection.",
          ja: "惑星は「何の」エネルギーか、星座は「どう」表現するかを示します。メーシャの火星は大胆で速く、カルカの火星は感情と守りを通じて働きます。",
        },
      },
      {
        id: "ch4-s3",
        kind: "content",
        icon: "moon",
        title: { en: "Your 5-Step Superficial Read", ja: "5ステップでざっくり読む" },
        body: {
          en: "① Find your Lagna sign. ② Note planets in the 1st house. ③ Check your Moon sign for mind/mood. ④ Glance at the 7th house for relationships. ⑤ See which house Jupiter and Saturn occupy for luck and lessons.",
          ja: "①ラグナの星座を確認。②第1ハウスの惑星をメモ。③月の星座で心・気分を見る。④第7ハウスで人間関係をチェック。⑤木星と土星のハウスで幸運と教訓を見る。",
        },
        highlight: {
          en: "You don't need to master everything — start with Lagna, Moon, and one house that matters to you today.",
          ja: "全部をマスターする必要はありません — ラグナ・月・今日気になるハウスから始めましょう。",
        },
      },
      {
        id: "ch4-s4",
        kind: "content",
        icon: "mountain",
        title: { en: "Open Your Chart on the Dashboard", ja: "ダッシュボードでチャートを開く" },
        body: {
          en: "Generate your South Indian or North Indian chart with your birth date, time, and place. Use this course as a lens — look at Lagna, then follow the five steps you just learned.",
          ja: "生年月日・時刻・場所を入力して、南インド式または北インド式のチャートを作成しましょう。このコースをレンズとして — ラグナを見て、学んだ5ステップを試してください。",
        },
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
          en: "The 7th house is the house of the other — spouse, business partners, and open enemies.",
          ja: "第7ハウスは「他者」のハウス — 配偶者・ビジネスパートナー・公然たる敵を表します。",
        },
      },
    ],
  },
];

export const ALL_STEP_IDS = VEDIC_COURSE_CHAPTERS.flatMap((ch) =>
  ch.steps.map((s) => s.id),
);
