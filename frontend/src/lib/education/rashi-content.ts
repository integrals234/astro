import type { ContentBlock, RashiEntry } from "./types";
import { rashiImages } from "./asset-paths";

export const rashisIntro = {
  en: "The twelve Rashis (zodiac signs) divide the 360° ecliptic into equal arcs of 30° each. Your birth date places the Sun in one Rashi, shaping temperament, strengths, and life themes — while the Moon sign, Ascendant (Lagna), and Nakshatra add further layers in Jyotish.",
  ja: "12のラーシ（星座）は黄道360度をそれぞれ30度ずつに分けます。生年月日によって太陽が置かれるラーシは気質や強み、人生のテーマを形づくります。月の星座、アセンダント（ラグナ）、ナクシャトラがさらに層を加えます。",
};

export const rashisOverviewBlocks: ContentBlock[] = [
  {
    title: { en: "How Rashis Are Defined", ja: "ラーシの定義" },
    paragraphs: [
      {
        en: "The zodiac is a belt along the ecliptic divided into twelve equal signs of 30 degrees. The Sun's projection into a sign at birth is your solar Rashi — the sign most people know from their birthday. In a Kundli, every Graha occupies a Rashi, and the Ascendant sign colours how you meet the world.",
        ja: "黄道帯は12の等分された30度の星座に分かれます。出生時に太陽が射す星座がソーラーラーシ — 誕生日で知られる星座です。クンダリーではすべてのグラハがラーシに位置し、アセンダントは世界との出会い方を色づけます。",
      },
      {
        en: "Each sign is ruled by a planet, belongs to an element, and carries distinct strengths, weaknesses, and talents. Differences in element and lordship shape natives differently — much like the Grahas themselves.",
        ja: "各星座には支配星と元素があり、固有の強み・弱み・才能を持ちます。元素と支配星の違いが、グラハと同様に人を異なる形に育みます。",
      },
    ],
  },
  {
    title: { en: "The Four Elements", ja: "四元素" },
    paragraphs: [
      {
        en: "Rashis express the temperament of their element. Fire signs (Aries, Leo, Sagittarius) are spirited and initiating. Earth signs (Taurus, Virgo, Capricorn) are practical and enduring. Air signs (Gemini, Libra, Aquarius) are intellectual and connective. Water signs (Cancer, Scorpio, Pisces) are emotional and intuitive.",
        ja: "ラーシは元素の気質を表します。火（牡羊・獅子・射手）は情熱と開始。地（牡牛・乙女・山羊）は実用と持続。風（双子・天秤・水瓶）は知性と結びつき。水（蟹・蠍・魚）は感情と直感。",
      },
    ],
  },
  {
    title: { en: "Ruling Planets of the Twelve Signs", ja: "12星座の支配星" },
    paragraphs: [
      {
        en: "Mars rules Aries and Scorpio. Venus rules Taurus and Libra. Mercury rules Gemini and Virgo. The Moon rules Cancer alone. The Sun rules Leo. Jupiter rules Sagittarius and Pisces. Saturn rules Capricorn and Aquarius. In chart judgment, a planet is strengthened in its own or exalted sign and tested in inimical signs.",
        ja: "火星は牡羊と蠍、金星は牡牛と天秤、水星は双子と乙女、月は蟹のみ、太陽は獅子、木星は射手と魚、土星は山羊と水瓶を支配します。自分の星座や高揚星座では惑星が強まり、敵対の星座では試されます。",
      },
    ],
  },
  {
    title: { en: "Decans & Finer Divisions", ja: "デカンと細分化" },
    paragraphs: [
      {
        en: "Each 30° sign divides into three decans of 10° each — subtler shades of the same sign. Beyond Rashis, the 27 Nakshatras (13°20' each) offer even finer lunar symbolism. The Ascendant (rising sign) describes how others perceive you, while the Moon sign maps the inner mind.",
        ja: "各30度の星座は10度ずつの3つのデカンに分かれ — 同じ星座のより細かな色合いです。ラーシの先に27のナクシャトラ（各13°20'）があり、月の象徴をさらに精密にします。アセンダントは他者からの見え方、月の星座は内なる心を映します。",
      },
    ],
  },
];

function rashi(
  id: keyof typeof rashiImages,
  data: Omit<RashiEntry, "id" | "image">
): RashiEntry {
  return { id, image: rashiImages[id], ...data };
}

export const rashis: RashiEntry[] = [
  rashi("aries", {
    number: 1,
    name: { en: "Aries", ja: "牡羊座" },
    sanskrit: { en: "Mesha", ja: "メーシャ" },
    dates: { en: "21 Mar – 20 Apr", ja: "3月21日 – 4月20日" },
    element: { en: "Fire", ja: "火" },
    ruler: { en: "Mars", ja: "火星（マンガル）" },
    symbol: { en: "Ram", ja: "羊" },
    bodyPart: { en: "Head", ja: "頭" },
    description: {
      en: "The first sign of the zodiac — pioneer, initiator, and spark of new cycles. Aries natives lead with courage, directness, and an instinct to act before overthinking.",
      ja: "黄道の第一星座 — 先駆者、開始者、新しい周期の火花。牡羊座の人は勇気と率直さ、考えすぎる前に動く本能で先導します。",
    },
    traits: [
      { en: "Bold, competitive, independent", ja: "大胆、競争的、独立的" },
      { en: "Impatient but refreshingly honest", ja: "せっかちだが爽やかに正直" },
      { en: "Natural starters; may struggle to finish", ja: "自然なスターター、完遂は課題になりうる" },
    ],
    sections: {
      nature: {
        en: "Aries nature is fiery and forward-leaning — emotional surges come quickly and pass quickly. Decisions are instinctive; hesitation feels like defeat. At best, Aries is heroic and protective; at stress, blunt or combative.",
        ja: "牡羊の性質は火的で前のめり — 感情の波は速く来て速く去る。決断は本能的で、躊躇は敗北のように感じます。最良のときは英雄的・保護的、ストレス時は blunt または好戦的。",
      },
      career: {
        en: "Careers in leadership, entrepreneurship, sports, military, surgery, engineering, and any field requiring quick initiative suit Aries. They thrive as founders and first-movers rather than long-term administrators.",
        ja: "リーダーシップ、起業、スポーツ、軍事、外科、工学など迅速な開始が要る分野に適します。長期の管理者より創業者・先駆者として力を発揮します。",
      },
      relationships: {
        en: "In relationships Aries is passionate and straightforward — they want honesty and momentum. They can be protective partners but need space for independence; power struggles arise when challenged.",
        ja: "関係では情熱的で率直 — 誠実さと推進力を求めます。保護的なパートナーになりうるが独立の余地が必要で、挑戦されると力の争いが起きやすい。",
      },
      romance: {
        en: "Romance is pursued actively and ardently. Aries expresses love through action, adventure, and fierce loyalty. They dislike games and prefer partners who match their energy.",
        ja: "恋愛は積極的かつ熱烈に追求。行動、冒険、強い忠誠で愛を示す。駆け引きを嫌い、エネルギーに匹敵する相手を好みます。",
      },
      health: {
        en: "The head, eyes, and blood are sensitive zones. Watch for headaches, fevers, inflammation, and stress from overexertion. Cooling routines and paced exercise help balance Mars.",
        ja: "頭、目、血液が敏感な領域。頭痛、発熱、炎症、過労によるストレスに注意。クールダウンとペース配分の運動が火星のバランスに役立ちます。",
      },
      decans: {
        en: "1st decan (Mars): pure Aries — warrior spirit. 2nd decan (Sun): regal confidence. 3rd decan (Jupiter): philosophical courage and generosity.",
        ja: "第1デカン（火星）：純粋な牡羊 — 戦士の精神。第2デカン（太陽）：王者の自信。第3デカン（木星）：哲学的勇気と寛大さ。",
      },
    },
  }),
  rashi("taurus", {
    number: 2,
    name: { en: "Taurus", ja: "牡牛座" },
    sanskrit: { en: "Vrishabha", ja: "ヴリシャヴ" },
    dates: { en: "21 Apr – 21 May", ja: "4月21日 – 5月21日" },
    element: { en: "Earth", ja: "地" },
    ruler: { en: "Venus", ja: "金星（シュクラ）" },
    symbol: { en: "Bull", ja: "牡牛" },
    bodyPart: { en: "Face, throat", ja: "顔、喉" },
    description: {
      en: "Taurus anchors the zodiac in stability, sensuality, and material security. Natives value beauty, comfort, and loyalty — building slowly but enduringly.",
      ja: "牡牛座は安定、官能、物質的安心で黄道を支えます。美、快適さ、忠誠を重んじ — ゆっくりだが永く築きます。",
    },
    traits: [
      { en: "Patient, reliable, pleasure-loving", ja: "忍耐強い、信頼できる、快楽を愛する" },
      { en: "Stubborn when values are threatened", ja: "価値が脅かされると頑固" },
      { en: "Strong aesthetic and financial sense", ja: "強い美的・財務感覚" },
    ],
    sections: {
      nature: {
        en: "Taurus nature is calm, sensory, and grounded. They prefer predictability and tangible results. Change is accepted slowly; once committed, they are among the most steadfast signs.",
        ja: "牡牛の性質は穏やか、感覚的、地に足がついた。予測可能性と具体的成果を好みます。変化はゆっくり受け入れ、一度コミットすれば最も堅実な星座のひとつ。",
      },
      career: {
        en: "Finance, banking, agriculture, culinary arts, fashion, music, real estate, and luxury goods align with Taurus. They excel where patience and quality compound over time.",
        ja: "金融、銀行、農業、料理、ファッション、音楽、不動産、奢侈品が合います。忍耐と品質が時間とともに複利する場で優れます。",
      },
      relationships: {
        en: "Loyal and devoted, Taurus partners offer security and sensual warmth. They dislike instability and need trust built gradually. Possessiveness can surface when insecure.",
        ja: "忠実で献身的、安心と官能的な温かさを提供。不安定を嫌い、信頼は徐々に築く必要があります。不安時に所有欲が出ることがあります。",
      },
      romance: {
        en: "Romance unfolds through touch, quality time, gifts, and culinary delight. Venus gifts Taurus with charm and a love of romance that prefers substance over flash.",
        ja: "恋愛は触れ合い、質の高い時間、贈り物、食の喜びを通じて花開く。金星は魅力と、派手さより実質を好むロマンスの愛を与えます。",
      },
      health: {
        en: "Throat, neck, thyroid, and weight regulation need care. Overindulgence in rich food or sedentary habits can accumulate. Regular gentle exercise and moderation sustain Venus.",
        ja: "喉、首、甲状腺、体重管理に注意。濃い食事や座りがちな習慣の過剰は蓄積しやすい。穏やかな運動と節制が金星を支えます。",
      },
      decans: {
        en: "1st decan (Venus): classic Taurus sensuality. 2nd decan (Mercury): practical artistry. 3rd decan (Saturn): disciplined builder.",
        ja: "第1デカン（金星）：典型的な牡牛の官能。第2デカン（水星）：実用的な芸術性。第3デカン（土星）：規律ある建設者。",
      },
    },
  }),
  rashi("gemini", {
    number: 3,
    name: { en: "Gemini", ja: "双子座" },
    sanskrit: { en: "Mithuna", ja: "ミトゥン" },
    dates: { en: "22 May – 21 Jun", ja: "5月22日 – 6月21日" },
    element: { en: "Air", ja: "風" },
    ruler: { en: "Mercury", ja: "水星（ブッダ）" },
    symbol: { en: "Twins", ja: "双子" },
    bodyPart: { en: "Arms, shoulders, lungs", ja: "腕、肩、肺" },
    description: {
      en: "Gemini is the communicator — quick-witted, curious, and dual-natured. Natives gather information, connect people, and adapt rapidly to changing contexts.",
      ja: "双子座はコミュニケーター — 機知に富み、好奇深く、二重の性質。情報を集め、人をつなぎ、文脈の変化に素早く適応します。",
    },
    traits: [
      { en: "Articulate, versatile, sociable", ja: "雄弁、多才、社交的" },
      { en: "Restless mind; loves variety", ja: "落ち着きのない心、変化を愛する" },
      { en: "Can scatter energy across too many interests", ja: "関心が広すぎてエネルギーが分散しうる" },
    ],
    sections: {
      nature: {
        en: "Gemini nature is mental and mercurial — calm and storm alternate. They process life through language, ideas, and social exchange. Boredom is the enemy; stimulation is medicine.",
        ja: "双子の性質は精神的で水星のように — 静と嵐が交替。言語、考え、社会的交換を通じて人生を処理。退屈が敵、刺激が薬。",
      },
      career: {
        en: "Writing, journalism, teaching, sales, marketing, IT, translation, and public relations suit Gemini. Multi-tasking roles and media-facing careers leverage Mercury's gift.",
        ja: "執筆、ジャーナリズム、教育、営業、マーケ、IT、翻訳、広報が合います。マルチタスクとメディア向きの職が水星の賜物を活かします。",
      },
      relationships: {
        en: "Gemini partners need intellectual rapport and freedom to socialize. They express care through conversation and humour. Emotional depth may need conscious cultivation.",
        ja: "知的な共鳴と社交の自由が必要。会話とユーモアで愛情を示す。感情の深さは意識的な育成が必要なことも。",
      },
      romance: {
        en: "Flirtation, witty banter, and shared curiosity fuel Gemini romance. They fall for minds first. Variety and mental play keep love alive.",
        ja: "いちゃつき、機知の応酬、共有する好奇心が恋を育む。まず心に恋する。変化と知的な遊びが愛を保つ。",
      },
      health: {
        en: "Respiratory system, nerves, and hands are focal points. Anxiety, shallow breathing, and sleep irregularity arise when overstimulated. Grounding practices help.",
        ja: "呼吸器、神経、手が焦点。過刺激で不安、浅い呼吸、睡眠の乱れが出やすい。グラウンディングが助けになります。",
      },
      decans: {
        en: "1st decan (Mercury): pure Gemini agility. 2nd decan (Venus): charming wordsmith. 3rd decan (Uranus*): inventive (*Western decan lord).",
        ja: "第1デカン（水星）：純粋な双子の敏捷さ。第2デカン（金星）：魅力的な言葉の職人。第3デカン：独創的。",
      },
    },
  }),
  rashi("cancer", {
    number: 4,
    name: { en: "Cancer", ja: "蟹座" },
    sanskrit: { en: "Karka", ja: "カルカ" },
    dates: { en: "22 Jun – 22 Jul", ja: "6月22日 – 7月22日" },
    element: { en: "Water", ja: "水" },
    ruler: { en: "Moon", ja: "月（チャンドラ）" },
    symbol: { en: "Crab", ja: "蟹" },
    bodyPart: { en: "Chest, breasts", ja: "胸" },
    description: {
      en: "Cancer is the nurturer — protective, memory-rich, and deeply tied to home and family. The Moon's sign par excellence in Jyotish emotional symbolism.",
      ja: "蟹座は養育者 — 保護的、記憶豊か、家庭と家族に深く結びつく。ジョーティッシュの感情象徴における月の星座。",
    },
    traits: [
      { en: "Empathetic, tenacious, family-oriented", ja: "共感的、粘り強い、家族志向" },
      { en: "Mood shifts with lunar rhythms", ja: "月のリズムとともに気分が変わる" },
      { en: "Shell of caution protects soft interior", ja: "柔らかな内側を守る硬い殻" },
    ],
    sections: {
      nature: {
        en: "Cancer nature is tidal — receptive, imaginative, and security-seeking. They remember slights and kindnesses equally. Home is sanctuary; outsiders enter by invitation only.",
        ja: "蟹の性質は潮のよう — 受容的、想像力豊か、安心を求める。無礼も親切も同じくらい覚える。家は聖域、外の人は招待されて初めて入る。",
      },
      career: {
        en: "Nursing, hospitality, real estate, childcare, psychology, cooking, and history suit Cancer. Roles that care for people or preserve tradition feel natural.",
        ja: "看護、接客、不動産、育児、心理学、料理、歴史が合います。人をケアする、伝統を守る役が自然に感じられます。",
      },
      relationships: {
        en: "Devoted and protective, Cancer partners create emotional safety. They need reciprocity and can retreat into shell when hurt. Family approval often matters.",
        ja: "献身的で保護的、感情的な安全を作る。相互性を必要とし、傷つくと殻に閉じこもる。家族の承認が重要なことも。",
      },
      romance: {
        en: "Romance is nurturing — home-cooked meals, sentimental gifts, and deep loyalty. Cancer loves slowly and for the long term.",
        ja: "恋愛は養育的 — 手料理、感傷的な贈り物、深い忠誠。ゆっくり、長く愛します。",
      },
      health: {
        en: "Stomach, digestion, and fluid retention are sensitive. Emotional stress maps directly to the gut. Lunar routines and calming foods support health.",
        ja: "胃、消化、水分貯留が敏感。感情ストレスが直に腸に映る。月のリズムと穏やかな食が健康を支えます。",
      },
      decans: {
        en: "1st decan (Moon): classic Cancer sensitivity. 2nd decan (Mars): protective fighter. 3rd decan (Jupiter): generous caretaker.",
        ja: "第1デカン（月）：典型的な蟹の感受性。第2デカン（火星）：保護する戦士。第3デカン（木星）：寛大な世話役。",
      },
    },
  }),
  rashi("leo", {
    number: 5,
    name: { en: "Leo", ja: "獅子座" },
    sanskrit: { en: "Simha", ja: "シンハ" },
    dates: { en: "23 Jul – 23 Aug", ja: "7月23日 – 8月23日" },
    element: { en: "Fire", ja: "火" },
    ruler: { en: "Sun", ja: "太陽（スーリヤ）" },
    symbol: { en: "Lion", ja: "獅子" },
    bodyPart: { en: "Heart, upper back", ja: "心臓、上背部" },
    description: {
      en: "Leo radiates solar confidence — creative, generous, and born to be seen. The sign of kingship, drama, and wholehearted self-expression.",
      ja: "獅子座は太陽の自信を放つ — 創造的、寛大、見られるために生まれた。王権、ドラマ、心からの自己表現の星座。",
    },
    traits: [
      { en: "Charismatic, proud, warm-hearted", ja: "カリスマ、誇り高い、温かい心" },
      { en: "Craves recognition and creative outlet", ja: "認知と創造的出口を渇望" },
      { en: "Loyal leader; ego bruises deeply", ja: "忠実なリーダー、エゴは深く傷つく" },
    ],
    sections: {
      nature: {
        en: "Leo nature is fixed fire — steady warmth, theatrical flair, and moral centre. They gift abundance when appreciated and wilt when ignored. Honour is non-negotiable.",
        ja: "獅子の性質は固定の火 — 安定した温かさ、演剧的な才、道徳の中心。感謝されると豊かさを与え、無視されるとしぼむ。名誉は譲れない。",
      },
      career: {
        en: "Performing arts, politics, management, entertainment, gold/jewellery, and leadership roles suit Leo. The stage — literal or corporate — calls them.",
        ja: "舞台芸術、政治、経営、エンタメ、金・宝石、リーダー職が合います。文字通りまたは企業の舞台が呼びます。",
      },
      relationships: {
        en: "Leo partners are protective, extravagant in affection, and expect admiration. They give generously but need respect. Drama in love is rarely boring.",
        ja: "保護的で愛情に惜しみなく、賞賛を期待。寛大に与えるが尊敬が必要。恋のドラマは退屈になりにくい。",
      },
      romance: {
        en: "Grand gestures, public devotion, and playful pride define Leo romance. They love being chosen and celebrated.",
        ja: "壮大な仕草、公の献身、遊び心のある誇りが獅子の恋を定義。選ばれ祝福されることを愛する。",
      },
      health: {
        en: "Heart, spine, and circulation need attention. Pride can drive overwork. Solar vitality returns with creative joy and rest.",
        ja: "心臓、脊椎、循環に注意。プライドが過労を駆り立てる。創造的喜びと休息で太陽の活力が戻る。",
      },
      decans: {
        en: "1st decan (Sun): pure Leo radiance. 2nd decan (Jupiter): magnanimous ruler. 3rd decan (Mars): fierce protector.",
        ja: "第1デカン（太陽）：純粋な獅子の輝き。第2デカン（木星）：寛大な支配者。第3デカン（火星）：激しい守護者。",
      },
    },
  }),
  rashi("virgo", {
    number: 6,
    name: { en: "Virgo", ja: "乙女座" },
    sanskrit: { en: "Kanya", ja: "カンニャ" },
    dates: { en: "24 Aug – 22 Sept", ja: "8月24日 – 9月22日" },
    element: { en: "Earth", ja: "地" },
    ruler: { en: "Mercury", ja: "水星（ブッダ）" },
    symbol: { en: "Virgin (Maiden)", ja: "乙女" },
    bodyPart: { en: "Abdomen, intestines", ja: "腹部、腸" },
    description: {
      en: "Virgo refines — analytical, service-minded, and devoted to improvement. Mercury here expresses through discrimination, craft, and practical intelligence.",
      ja: "乙女座は洗練する — 分析的、奉仕の心、改善への献身。ここでの水星は識別、技、実用的知性として表れる。",
    },
    traits: [
      { en: "Detail-oriented, modest, helpful", ja: "細部志向、謙虚、助けになる" },
      { en: "High standards for self and surroundings", ja: "自分と環境への高い基準" },
      { en: "Anxiety when order breaks down", ja: "秩序が崩れると不安" },
    ],
    sections: {
      nature: {
        en: "Virgo nature is methodical and observant — noticing what others miss. They serve through fixing, organising, and healing. Perfectionism is both gift and burden.",
        ja: "乙女の性質は体系的で観察的 — 他者が見逃すものに気づく。直す、整理する、癒すことで奉仕する。完璧主義は賜物であり負担でもある。",
      },
      career: {
        en: "Medicine, accounting, editing, research, nutrition, veterinary science, and quality control align with Virgo. Precision careers reward them.",
        ja: "医学、会計、編集、研究、栄養、獣医学、品質管理が合います。精密さを要する職が報いてくれます。",
      },
      relationships: {
        en: "Virgo shows love through acts of service and practical support. They need partners who appreciate subtlety. Critical tone can wound if unchecked.",
        ja: "奉仕の行為と実用的支援で愛を示す。繊細さを評価する相手が必要。批判的な口調は制御されなければ傷つける。",
      },
      romance: {
        en: "Romance grows quietly — reliability, thoughtful gestures, and health-conscious care. They express devotion in daily rituals.",
        ja: "恋は静かに育つ — 信頼性、思いやりの仕草、健康を気遣うケア。日々の儀式で献身を表す。",
      },
      health: {
        en: "Digestive tract, nervous system, and food sensitivities are key. Worry manifests somatically. Routine, clean diet, and mindfulness restore balance.",
        ja: "消化管、神経系、食物感受性が鍵。心配が身体に現れる。ルーティン、清潔な食、マインドフルネスがバランスを回復。",
      },
      decans: {
        en: "1st decan (Mercury): analytical purist. 2nd decan (Saturn): structured craftsman. 3rd decan (Venus): refined aesthete.",
        ja: "第1デカン（水星）：分析的な純粋主義者。第2デカン（土星）：構造化された職人。第3デカン（金星）：洗練された美学家。",
      },
    },
  }),
  rashi("libra", {
    number: 7,
    name: { en: "Libra", ja: "天秤座" },
    sanskrit: { en: "Tula", ja: "トゥラー" },
    dates: { en: "23 Sept – 23 Oct", ja: "9月23日 – 10月23日" },
    element: { en: "Air", ja: "風" },
    ruler: { en: "Venus", ja: "金星（シュクラ）" },
    symbol: { en: "Scales", ja: "天秤" },
    bodyPart: { en: "Kidneys, lower back", ja: "腎臓、腰" },
    description: {
      en: "Libra seeks harmony — diplomatic, fair-minded, and aesthetically refined. The sign of partnership, justice, and balanced exchange.",
      ja: "天秤座は調和を求める — 外交的、公正、美的に洗練。パートナーシップ、正義、均衡の交換の星座。",
    },
    traits: [
      { en: "Charming, cooperative, indecisive at times", ja: "魅力的、協調的、時に優柔不断" },
      { en: "Strong sense of fairness", ja: "強い公正感" },
      { en: "Avoids conflict until balance breaks", ja: "均衡が崩れるまで対立を避ける" },
    ],
    sections: {
      nature: {
        en: "Libra nature weighs options — social, graceful, and oriented toward the other. They mirror environments and need beauty to feel sane. Indecision stems from seeing all sides.",
        ja: "天秤の性質は選択肢を量る — 社会的、優雅、他者志向。環境を映し、美がないと正気でいられない。優柔不断はすべての側面が見えるから。",
      },
      career: {
        en: "Law, diplomacy, design, fashion, counselling, HR, and the arts suit Libra. Mediation and client-facing elegance are strengths.",
        ja: "法律、外交、デザイン、ファッション、カウンセリング、人事、芸術が合います。調停と顧客向けの優雅さが強み。",
      },
      relationships: {
        en: "Partnership is central — Libra often defines self through relationship. They negotiate skillfully but may suppress needs to keep peace.",
        ja: "パートナーシップが中心 — 関係を通じて自己を定義することが多い。巧みに交渉するが平和のために欲求を抑えることも。",
      },
      romance: {
        en: "Romance is an art form — flowers, poetry, and refined dates. Libra loves being courted and courting in equal measure.",
        ja: "恋愛は芸術 — 花、詩、洗練されたデート。求められ、求めることを等しく愛する。",
      },
      health: {
        en: "Kidneys, skin, and lumbar region need balance. Sugar and alcohol excess disturb Venus here. Hydration and harmonious routines help.",
        ja: "腎臓、皮膚、腰部のバランスに注意。糖とアルコールの過剰が金星を乱す。水分と調和的ルーティンが助けになる。",
      },
      decans: {
        en: "1st decan (Venus): classic Libra grace. 2nd decan (Uranus*): unconventional diplomat. 3rd decan (Mercury): articulate negotiator.",
        ja: "第1デカン（金星）：典型的な天秤の優雅さ。第2デカン：型破りな外交官。第3デカン（水星）：雄弁な交渉者。",
      },
    },
  }),
  rashi("scorpio", {
    number: 8,
    name: { en: "Scorpio", ja: "蠍座" },
    sanskrit: { en: "Vrishchika", ja: "ヴリシュチカ" },
    dates: { en: "24 Oct – 22 Nov", ja: "10月24日 – 11月22日" },
    element: { en: "Water", ja: "水" },
    ruler: { en: "Mars (traditional), Ketu (Vedic nuance)", ja: "火星（伝統）、ケートゥ（ヴェーダ的）" },
    symbol: { en: "Scorpion", ja: "蠍" },
    bodyPart: { en: "Reproductive organs", ja: "生殖器" },
    description: {
      en: "Scorpio dives deep — intense, transformative, and magnetically private. The sign of secrets, regeneration, and psychological power.",
      ja: "蠍座は深く潜る — 強烈、変容的、磁気的に内密。秘密、再生、心理の力の星座。",
    },
    traits: [
      { en: "Passionate, strategic, loyal", ja: "情熱的、戦略的、忠実" },
      { en: "All or nothing emotionally", ja: "感情はすべてか無か" },
      { en: "Penetrating insight; guards vulnerability", ja: "貫く洞察、脆弱性を守る" },
    ],
    sections: {
      nature: {
        en: "Scorpio nature is fixed water — still surface, powerful depths. They research motives, endure crises, and emerge transformed. Trust is earned slowly and valued absolutely.",
        ja: "蠍の性質は固定の水 — 静かな表面、強力な深み。動機を調べ、危機に耐え、変容して現れる。信頼はゆっくり得られ絶対に大切にされる。",
      },
      career: {
        en: "Psychology, surgery, investigation, occult sciences, finance, research, and crisis management suit Scorpio. They excel where depth and discretion are required.",
        ja: "心理学、外科、調査、オカルト科学、金融、研究、危機管理が合います。深さと慎重さが要る場で優れます。",
      },
      relationships: {
        en: "Scorpio partners bond intensely — jealousy and devotion are two sides of one coin. Betrayal is rarely forgiven; loyalty is rewarded with fierce protection.",
        ja: "強烈に結びつく — 嫉妬と献身は一枚のコインの両面。裏切りはめったに許されず、忠誠は激しい保護で報われる。",
      },
      romance: {
        en: "Romance is transformative and private — physical and soul merger sought. Surface-level connection never satisfies.",
        ja: "恋は変容的で私的 — 身体と魂の融合を求める。表面的なつながりでは決して満たされない。",
      },
      health: {
        en: "Reproductive system, elimination, and emotional toxins are focal. Suppressed emotion becomes illness. Cleansing practices and honest catharsis heal.",
        ja: "生殖器系、排泄、感情の毒素が焦点。抑えた感情が病になる。浄化の実践と正直な浄化が癒す。",
      },
      decans: {
        en: "1st decan (Mars): pure Scorpio intensity. 2nd decan (Jupiter): philosophical depth. 3rd decan (Moon): emotional mystic.",
        ja: "第1デカン（火星）：純粋な蠍の強度。第2デカン（木星）：哲学的深さ。第3デカン（月）：感情的神秘家。",
      },
    },
  }),
  rashi("sagittarius", {
    number: 9,
    name: { en: "Sagittarius", ja: "射手座" },
    sanskrit: { en: "Dhanu", ja: "ダヌ" },
    dates: { en: "23 Nov – 21 Dec", ja: "11月23日 – 12月21日" },
    element: { en: "Fire", ja: "火" },
    ruler: { en: "Jupiter", ja: "木星（グル）" },
    symbol: { en: "Archer", ja: "弓矢" },
    bodyPart: { en: "Thighs, hips", ja: "太もも、腰" },
    description: {
      en: "Sagittarius aims at truth — optimistic, philosophical, and restless for horizons. Jupiter's sign of expansion, dharma, and long journeys.",
      ja: "射手座は真理を狙う — 楽観的、哲学的、地平線への落ち着きなさ。グルによる拡大、ダルマ、長旅の星座。",
    },
    traits: [
      { en: "Adventurous, honest, freedom-loving", ja: "冒険的、正直、自由を愛する" },
      { en: "Blunt speech; big-picture thinker", ja: "率直な言葉、大局観" },
      { en: "Restless when confined", ja: "閉じ込められると落ち着かない" },
    ],
    sections: {
      nature: {
        en: "Sagittarius nature is mutable fire — enthusiastic, candid, and meaning-seeking. They quest for wisdom across cultures and belief systems. Routine without purpose suffocates them.",
        ja: "射手の性質は可変の火 — 熱狂的、率直、意味を求める。文化と信仰体系を越えて智慧を探求。目的のないルーティンは窒息させる。",
      },
      career: {
        en: "Teaching, law, publishing, travel, sports, spirituality, and international business suit Sagittarius. Roles with mobility and moral dimension inspire them.",
        ja: "教育、法律、出版、旅行、スポーツ、スピリチュアリティ、国際ビジネスが合います。移動と道徳的次元のある役が鼓舞する。",
      },
      relationships: {
        en: "Sagittarius partners need freedom and shared adventure. Honesty is mandatory; possessiveness repels. They grow through partners who expand their worldview.",
        ja: "自由と共有の冒険が必要。正直は必須、所有欲は反発する。世界観を広げる相手を通じて成長する。",
      },
      romance: {
        en: "Romance is exploratory — travel dates, philosophical nights, laughter. They love openly and fear boredom more than rejection.",
        ja: "恋は探検的 — 旅のデート、哲学的な夜、笑い。公然と愛し、拒絶より退屈を恐れる。",
      },
      health: {
        en: "Hips, thighs, liver, and weight from excess suit Sagittarius vulnerabilities. Jupiter can over-expand — moderation in food and drink preserves vitality.",
        ja: "腰、太もも、肝臓、過剰による体重が脆弱点。木星は過度に拡大しうる — 食酒の節制が活力を保つ。",
      },
      decans: {
        en: "1st decan (Jupiter): pure Sagittarius optimism. 2nd decan (Mars): crusading archer. 3rd decan (Sun): noble teacher.",
        ja: "第1デカン（木星）：純粋な射手の楽観。第2デカン（火星）：十字軍の射手。第3デカン（太陽）：高貴な教師。",
      },
    },
  }),
  rashi("capricorn", {
    number: 10,
    name: { en: "Capricorn", ja: "山羊座" },
    sanskrit: { en: "Makara", ja: "マカラ" },
    dates: { en: "22 Dec – 20 Jan", ja: "12月22日 – 1月20日" },
    element: { en: "Earth", ja: "地" },
    ruler: { en: "Saturn", ja: "土星（シャニ）" },
    symbol: { en: "Sea-goat", ja: "海山羊" },
    bodyPart: { en: "Knees, bones", ja: "膝、骨" },
    description: {
      en: "Capricorn climbs — disciplined, ambitious, and patient for legacy. Saturn's sign of structure, responsibility, and mastery over time.",
      ja: "山羊座は登る — 規律ある、野心的、遺産のために忍耐強い。シャニによる構造、責任、時間を超えた熟達の星座。",
    },
    traits: [
      { en: "Responsible, strategic, reserved", ja: "責任感、戦略的、控えめ" },
      { en: "Delayed gratification masters", ja: "遅延満足の達人" },
      { en: "Dry humour beneath serious exterior", ja: "真面目な外見の下のドライなユーモア" },
    ],
    sections: {
      nature: {
        en: "Capricorn nature is cardinal earth — initiating practical structures. They respect hierarchy, honour duty, and measure life in achievements. Softness appears only to trusted few.",
        ja: "山羊の性質は活動の地 — 実用的構造を始める。階層を尊重し、義務を重んじ、成果で人生を測る。柔らかさは信頼した少数にだけ現れる。",
      },
      career: {
        en: "Administration, government, engineering, architecture, mining, and executive leadership suit Capricorn. They build institutions that outlast trends.",
        ja: "行政、政府、工学、建築、鉱業、経営幹部が合います。流行を超えて残る制度を築く。",
      },
      relationships: {
        en: "Capricorn partners are dependable and slow to open. They show love through provision and long-term planning. Work-life balance must be negotiated.",
        ja: "頼りになり、心を開くのは遅い。養うことと長期計画で愛を示す。仕事と生活のバランスは交渉が必要。",
      },
      romance: {
        en: "Romance matures like fine wine — traditional courtship, status awareness, and commitment over flirtation. They take vows seriously.",
        ja: "恋はワインのように熟す — 伝統的な求愛、地位への意識、浮気より誓い。誓いを真剣に受け止める。",
      },
      health: {
        en: "Knees, joints, teeth, and skin dryness need care. Saturn can bring melancholy affecting bones. Structure in sleep, calcium, and gentle movement helps.",
        ja: "膝、関節、歯、皮膚の乾燥に注意。土星は骨に影響する憂鬱をもたらしうる。睡眠、カルシウム、穏やかな運動の構造が助けになる。",
      },
      decans: {
        en: "1st decan (Saturn): pure Capricorn ambition. 2nd decan (Venus): cultured achiever. 3rd decan (Mercury): strategic planner.",
        ja: "第1デカン（土星）：純粋な山羊の野心。第2デカン（金星）：教養ある達成者。第3デカン（水星）：戦略的計画者。",
      },
    },
  }),
  rashi("aquarius", {
    number: 11,
    name: { en: "Aquarius", ja: "水瓶座" },
    sanskrit: { en: "Kumbha", ja: "クンバ" },
    dates: { en: "21 Jan – 18 Feb", ja: "1月21日 – 2月18日" },
    element: { en: "Air", ja: "風" },
    ruler: { en: "Saturn", ja: "土星（シャニ）" },
    symbol: { en: "Water-bearer", ja: "水を注ぐ者" },
    bodyPart: { en: "Calves, ankles", ja: "脛、足首" },
    description: {
      en: "Aquarius pours new ideas — humanitarian, unconventional, and future-oriented. Saturn's airy sign of systems, networks, and collective progress.",
      ja: "水瓶座は新しい考えを注ぐ — 人道的、型破り、未来志向。シャニの風の星座、システム、ネットワーク、集合的進歩。",
    },
    traits: [
      { en: "Independent, inventive, idealistic", ja: "独立的、独創的、理想主義" },
      { en: "Friendly yet emotionally detached at times", ja: "友好的だが時に感情的に距離がある" },
      { en: "Rebels against obsolete tradition", ja: "古い伝統に反抗" },
    ],
    sections: {
      nature: {
        en: "Aquarius nature is fixed air — holding ideals firmly while appearing detached. They think in systems and communities. Personal feelings are often processed intellectually.",
        ja: "水瓶の性質は固定の風 — 離れているように見えながら理想を固く保つ。システムと共同体で考える。個人の感情はしばしば知的に処理される。",
      },
      career: {
        en: "Technology, science, social reform, aviation, astrology, and NGO work suit Aquarius. They innovate where old models fail society.",
        ja: "技術、科学、社会改革、航空、占星術、NGOが合います。古いモデルが社会を失敗させる場所で革新する。",
      },
      relationships: {
        en: "Aquarius partners value friendship within romance. They need intellectual equality and space. Emotional demands can feel claustrophobic.",
        ja: "恋の中の友情を重視。知的平等とスペースが必要。感情的な要求は窮屈に感じることも。",
      },
      romance: {
        en: "Romance is unconventional — unusual dates, causes shared, freedom honoured. They love humanity broadly and individuals selectively.",
        ja: "恋は型破り — 珍しいデート、共有する大義、尊重される自由。広く人類を愛し、個人は選択的に。",
      },
      health: {
        en: "Circulation, ankles, and nervous tension from overstimulation are themes. Saturn plus air can dry the system. Regular grounding and community balance help.",
        ja: "循環、足首、過刺激による神経緊張がテーマ。土星と風はシステムを乾かしうる。定期的なグラウンディングと共同体のバランスが助けになる。",
      },
      decans: {
        en: "1st decan (Saturn): structured reformer. 2nd decan (Mercury): inventive communicator. 3rd decan (Venus): artistic humanist.",
        ja: "第1デカン（土星）：構造化された改革者。第2デカン（水星）：独創的コミュニケーター。第3デカン（金星）：芸術的人道主義者。",
      },
    },
  }),
  rashi("pisces", {
    number: 12,
    name: { en: "Pisces", ja: "魚座" },
    sanskrit: { en: "Meena", ja: "ミーナ" },
    dates: { en: "19 Feb – 20 Mar", ja: "2月19日 – 3月20日" },
    element: { en: "Water", ja: "水" },
    ruler: { en: "Jupiter", ja: "木星（グル）" },
    symbol: { en: "Two fish", ja: "二匹の魚" },
    bodyPart: { en: "Feet", ja: "足" },
    description: {
      en: "Pisces dissolves boundaries — compassionate, imaginative, and spiritually porous. The closing sign of the zodiac, merging self with the ocean of consciousness.",
      ja: "魚座は境界を溶かす — 慈悲深い、想像力豊か、霊的に透過的。黄道の最後の星座、自己を意識の海に溶け合わせる。",
    },
    traits: [
      { en: "Empathic, artistic, dreamy", ja: "共感的、芸術的、夢見がち" },
      { en: "Absorbs others' moods easily", ja: "他者の気分を容易に吸収" },
      { en: "Escapism when overwhelmed", ja: "圧倒されると逃避" },
    ],
    sections: {
      nature: {
        en: "Pisces nature is mutable water — flowing, receptive, and symbol-rich. They sense undercurrents others miss. Reality and dream intertwine; art and devotion are natural languages.",
        ja: "魚の性質は可変の水 — 流れ、受容的、象徴豊か。他者が見逃す底流を感じる。現実と夢が絡み、芸術と献身が自然な言語。",
      },
      career: {
        en: "Music, film, healing arts, charity, marine work, poetry, and spiritual counselling suit Pisces. They thrive where imagination serves compassion.",
        ja: "音楽、映画、癒しの芸術、慈善、海洋仕事、詩、スピリチュアルカウンセリングが合います。想像が慈悲に仕える場で力を発揮。",
      },
      relationships: {
        en: "Pisces partners merge empathically — sometimes losing boundaries. They forgive readily but need partners who anchor them in reality.",
        ja: "共感的に融合 — 時に境界を失う。容易に許すが現実に錨を下ろす相手が必要。",
      },
      romance: {
        en: "Romance is poetic and sacrificial — soul-mate longing, music, and spiritual union idealised. They love with the whole ocean.",
        ja: "恋は詩的で献身的 — ソウルメイトの憧れ、音楽、霊的結合の理想化。海全体で愛する。",
      },
      health: {
        en: "Feet, lymphatic system, and addiction susceptibility are sensitive. Emotional overwhelm needs creative and spiritual outlets. Boundaries protect health.",
        ja: "足、リンパ系、依存の感受性が敏感。感情の圧倒は創造的・霊的出口が必要。境界が健康を守る。",
      },
      decans: {
        en: "1st decan (Jupiter): mystical dreamer. 2nd decan (Mars): spiritual warrior. 3rd decan (Pluto*): depth mystic (*Western decan).",
        ja: "第1デカン（木星）：神秘的な夢見人。第2デカン（火星）：霊的戦士。第3デカン：深みの神秘家。",
      },
    },
  }),
];
