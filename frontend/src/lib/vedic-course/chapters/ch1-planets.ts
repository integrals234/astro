import { Orbit } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter1Planets: CourseChapter = {
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
      title: { en: "Welcome to Vedic Astrology", ja: "インド占星術へようこそ" },
      body: {
        en: "Jyotish (ज्योतिष) means \"science of light.\" For thousands of years, Indian astrologers have used the sky as a mirror of karma — not fortune-telling, but a map of tendencies you can work with.",
        ja: "ジョーティシュ（ज्योतिष）は「光の科学」の意味です。何千年もの間、インドの占星術師は空をカルマの鏡として使ってきました — 占いではなく、向き合える傾向の地図です。",
      },
      highlight: {
        en: "This course gives you a beginner's lens — enough to read your own chart superficially.",
        ja: "このコースは初心者向けのレンズ — 自分のチャートをざっくり読むのに十分です。",
      },
    },
    {
      id: "ch1-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "What Are the Grahas?", ja: "グラハとは何か？" },
      body: {
        en: "Nine celestial bodies — the Grahas — \"grasp\" or influence your life. Seven are physical (Sun through Saturn), plus Rahu and Ketu, the shadow nodes of the Moon.",
        ja: "9つの天体「グラハ」があなたの人生に影響を与えます。7つは物理的な惑星（太陽〜土星）、プラス月の影の交点ラーフとケートゥです。",
      },
      bullets: [
        { en: "Surya, Chandra, Mangal, Budha, Guru, Shukra, Shani", ja: "スーリヤ、チャンドラ、マンガル、ブダ、グル、シュクラ、シャニ" },
        { en: "Rahu (North Node) & Ketu (South Node)", ja: "ラーフ（北ノード）とケートゥ（南ノード）" },
      ],
    },
    {
      id: "ch1-s2",
      kind: "content",
      icon: "sun",
      title: { en: "Benefic vs. Malefic (Simply)", ja: "吉星と凶星（かんたんに）" },
      body: {
        en: "Beginners often hear \"benefic\" and \"malefic.\" Think of benefics as gentle teachers; malefics as strict coaches. Context always matters — a \"hard\" planet in the right place can build strength.",
        ja: "初心者は「吉星」「凶星」という言葉をよく聞きます。吉星は優しい教師、凶星は厳しいコーチと考えてください。文脈が大切 — 「厳しい」惑星も適切な場所では力を育てます。",
      },
      bullets: [
        { en: "Generally gentle: Jupiter, Venus, waxing Moon, well-placed Mercury", ja: "おおむね穏やか：木星、金星、満ちていく月、良好な水星" },
        { en: "Generally challenging: Saturn, Mars, Rahu, Ketu, Sun (can burn)", ja: "おおむね厳しい：土星、火星、ラーフ、ケートゥ、太陽（燃やすことも）" },
      ],
    },
    {
      id: "ch1-s3",
      kind: "content",
      icon: "sun",
      title: { en: "Surya — The Sun", ja: "スーリヤ — 太陽" },
      body: {
        en: "The king of the chart. Surya is your atma (soul), vitality, father, authority, and confidence in the world.",
        ja: "チャートの王。スーリヤはアートマ（魂）、活力、父、権威、世の中での自信を表します。",
      },
      bullets: [
        { en: "Strong Sun: leadership, clarity, recognition", ja: "太陽が強い：リーダーシップ、明晰さ、認知" },
        { en: "Weak Sun: low confidence, strained father themes", ja: "太陽が弱い：自信のなさ、父親に関するテーマ" },
        { en: "Rules the sign Simha (Leo)", ja: "シンハ（獅子座）を支配" },
      ],
    },
    {
      id: "ch1-s4",
      kind: "content",
      icon: "moon",
      title: { en: "Chandra — The Moon", ja: "チャンドラ — 月" },
      body: {
        en: "The queen of the chart. Chandra is your manas (mind), emotions, mother, comfort, and how you nurture yourself.",
        ja: "チャートの女王。チャンドラはマナス（心）、感情、母、安心感、自分を癒す方法を表します。",
      },
      bullets: [
        { en: "Moon sign = how you feel and react inside", ja: "月星座＝内面での感じ方・反応" },
        { en: "Waxing Moon is considered gentler than waning", ja: "満ちていく月は欠けていく月より穏やかとされる" },
        { en: "Rules Karka (Cancer)", ja: "カルカ（蟹座）を支配" },
      ],
    },
    {
      id: "ch1-s5",
      kind: "content",
      icon: "flame",
      title: { en: "Mangal — Mars", ja: "マンガル — 火星" },
      body: {
        en: "The commander. Mars is energy, courage, siblings, land, surgery, and the will to fight for what you want.",
        ja: "司令官。火星はエネルギー、勇気、兄弟、土地、外科、欲しいもののための戦いの意志です。",
      },
      bullets: [
        { en: "Strong Mars: athlete, entrepreneur, protector", ja: "火星が強い：運動家、起業家、守護者" },
        { en: "Afflicted Mars: anger, accidents, conflicts", ja: "火星が傷つく：怒り、事故、対立" },
        { en: "Rules Mesha (Aries) and Vrishchika (Scorpio)", ja: "メーシャ（牡羊座）とヴリシュチカ（蠍座）を支配" },
      ],
    },
    {
      id: "ch1-s6",
      kind: "content",
      icon: "wind",
      title: { en: "Budha — Mercury", ja: "ブダ — 水星" },
      body: {
        en: "The prince of communication. Mercury rules speech, writing, trade, humor, and analytical thinking.",
        ja: "コミュニケーションの王子。水星は言葉、文章、商売、ユーモア、分析的思考を司ります。",
      },
      bullets: [
        { en: "Adopts the nature of planets near it", ja: "近くの惑星の性質を取り込む" },
        { en: "Rules Mithuna (Gemini) and Kanya (Virgo)", ja: "ミトゥナ（双子座）とカニヤ（乙女座）を支配" },
      ],
    },
    {
      id: "ch1-s7",
      kind: "content",
      icon: "sparkles",
      title: { en: "Guru — Jupiter", ja: "グル — 木星" },
      body: {
        en: "The great teacher. Jupiter expands wisdom, children, wealth, dharma (right path), and optimism.",
        ja: "偉大な教師。木星は知恵、子供、富、ダルマ（正しい道）、楽観性を広げます。",
      },
      bullets: [
        { en: "Most benefic planet in Vedic astrology", ja: "インド占星術で最も吉星とされる" },
        { en: "Rules Dhanu (Sagittarius) and Meena (Pisces)", ja: "ダヌ（射手座）とミーナ（魚座）を支配" },
      ],
    },
    {
      id: "ch1-s8",
      kind: "content",
      icon: "droplets",
      title: { en: "Shukra — Venus", ja: "シュクラ — 金星" },
      body: {
        en: "The minister of pleasure. Venus governs love, marriage, art, luxury, vehicles, and harmony.",
        ja: "快楽の大臣。金星は愛、結婚、芸術、贅沢、乗り物、調和を司ります。",
      },
      bullets: [
        { en: "Shows taste in beauty and relationships", ja: "美と人間関係への好みを示す" },
        { en: "Rules Vrishabha (Taurus) and Tula (Libra)", ja: "ヴリシャバ（牡牛座）とトゥラ（天秤座）を支配" },
      ],
    },
    {
      id: "ch1-s9",
      kind: "content",
      icon: "mountain",
      title: { en: "Shani — Saturn", ja: "シャニ — 土星" },
      body: {
        en: "The slow elder. Saturn teaches patience through delay, discipline, labor, and karma from past efforts.",
        ja: "ゆっくりした長老。土星は遅れ、規律、労働、過去の努力のカルマを通じて忍耐を教えます。",
      },
      bullets: [
        { en: "Saturn transits slowly — lessons take years", ja: "土星はゆっくり移動 — 教訓は年単位" },
        { en: "Rules Makara (Capricorn) and Kumbha (Aquarius)", ja: "マカラ（山羊座）とクンバ（水瓶座）を支配" },
      ],
    },
    {
      id: "ch1-s10",
      kind: "content",
      icon: "orbit",
      title: { en: "Rahu & Ketu — Shadow Nodes", ja: "ラーフとケートゥ — 影の交点" },
      body: {
        en: "These are not physical planets but mathematical points where Moon's path crosses the Sun's. They create eclipses and karmic hunger or release.",
        ja: "物理的な惑星ではなく、月の軌道が太陽の軌道と交わる数学的な点です。食を起こし、カルマの渇きや解放をもたらします。",
      },
      bullets: [
        { en: "Rahu: obsession, foreign things, ambition, illusion", ja: "ラーフ：執着、外国、野心、幻想" },
        { en: "Ketu: spirituality, past-life skill, detachment", ja: "ケートゥ：スピリチュアル、前世のスキル、離脱" },
        { en: "Always opposite each other in the chart", ja: "チャート上で常に向かい合う" },
      ],
    },
    {
      id: "ch1-flash",
      kind: "flashcards",
      title: { en: "Planet Flashcards", ja: "惑星フラッシュカード" },
      instruction: {
        en: "Flip each card to memorize the core meaning. View all cards to continue.",
        ja: "カードを裏返して核心の意味を覚えましょう。すべて見てから先に進みます。",
      },
      cards: [
        { id: "f1", front: { en: "Surya", ja: "スーリヤ" }, back: { en: "Soul, father, authority", ja: "魂・父・権威" }, icon: "sun" },
        { id: "f2", front: { en: "Chandra", ja: "チャンドラ" }, back: { en: "Mind, mother, emotions", ja: "心・母・感情" }, icon: "moon" },
        { id: "f3", front: { en: "Mangal", ja: "マンガル" }, back: { en: "Energy, courage, action", ja: "エネルギー・勇気・行動" }, icon: "flame" },
        { id: "f4", front: { en: "Budha", ja: "ブダ" }, back: { en: "Speech, trade, logic", ja: "言葉・商売・論理" }, icon: "wind" },
        { id: "f5", front: { en: "Guru", ja: "グル" }, back: { en: "Wisdom, luck, children", ja: "知恵・幸運・子供" }, icon: "sparkles" },
        { id: "f6", front: { en: "Shukra", ja: "シュクラ" }, back: { en: "Love, art, pleasure", ja: "愛・芸術・快楽" }, icon: "droplets" },
        { id: "f7", front: { en: "Shani", ja: "シャニ" }, back: { en: "Discipline, delay, karma", ja: "規律・遅れ・カルマ" }, icon: "mountain" },
        { id: "f8", front: { en: "Rahu", ja: "ラーフ" }, back: { en: "Obsession, ambition", ja: "執着・野心" }, icon: "orbit" },
        { id: "f9", front: { en: "Ketu", ja: "ケートゥ" }, back: { en: "Detachment, moksha", ja: "離脱・モークシャ" }, icon: "orbit" },
      ],
    },
    {
      id: "ch1-match",
      kind: "match",
      title: { en: "Match Graha to Meaning", ja: "グラハと意味をマッチ" },
      instruction: {
        en: "Tap a planet on the left, then its meaning on the right. Match all pairs to win.",
        ja: "左の惑星をタップし、右の意味をタップ。全ペア一致でクリア。",
      },
      pairs: [
        { leftId: "l1", left: { en: "Chandra", ja: "チャンドラ" }, rightId: "r1", right: { en: "Mind & emotions", ja: "心と感情" }, leftIcon: "moon" },
        { leftId: "l2", left: { en: "Guru", ja: "グル" }, rightId: "r2", right: { en: "Wisdom & expansion", ja: "知恵と拡大" }, leftIcon: "sparkles" },
        { leftId: "l3", left: { en: "Shani", ja: "シャニ" }, rightId: "r3", right: { en: "Discipline & lessons", ja: "規律と教訓" }, leftIcon: "mountain" },
        { leftId: "l4", left: { en: "Rahu", ja: "ラーフ" }, rightId: "r4", right: { en: "Obsession & craving", ja: "執着と渇望" }, leftIcon: "orbit" },
        { leftId: "l5", left: { en: "Shukra", ja: "シュクラ" }, rightId: "r5", right: { en: "Love & beauty", ja: "愛と美" }, leftIcon: "droplets" },
      ],
    },
    {
      id: "ch1-tf",
      kind: "true-false",
      title: { en: "Planet True or False", ja: "惑星マルバツクイズ" },
      instruction: {
        en: "Answer at least 3 of 4 correctly to pass.",
        ja: "4問中3問以上正解で合格。",
      },
      statements: [
        {
          id: "tf1",
          statement: { en: "The Moon represents the mind and emotions in Vedic astrology.", ja: "インド占星術では月は心と感情を表す。" },
          isTrue: true,
          explanation: { en: "Chandra is the karaka (significator) of the mind.", ja: "チャンドラは心のカーラカ（象徴星）です。" },
        },
        {
          id: "tf2",
          statement: { en: "Rahu and Ketu are physical planets like Mars.", ja: "ラーフとケートゥは火星のような物理的な惑星だ。" },
          isTrue: false,
          explanation: { en: "They are lunar nodes — shadow points, not physical bodies.", ja: "月の交点 — 影の点であり、物理天体ではありません。" },
        },
        {
          id: "tf3",
          statement: { en: "Jupiter is generally considered the most benefic planet.", ja: "木星は一般に最も吉星とされる。" },
          isTrue: true,
          explanation: { en: "Guru brings growth, wisdom, and protection when well placed.", ja: "グルは良好な位置で成長・知恵・守護をもたらします。" },
        },
        {
          id: "tf4",
          statement: { en: "Saturn rewards impatience and shortcuts.", ja: "土星は焦りと近道を報いる。" },
          isTrue: false,
          explanation: { en: "Shani rewards patience, honesty, and steady effort.", ja: "シャニは忍耐・誠実さ・着実な努力を報います。" },
        },
      ],
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
};
