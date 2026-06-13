import type { PlanetEntry } from "./types";
import { planetImages } from "./asset-paths";

export const planetsIntro = {
  en: "The nine Grahas (Navagraha) are the primary actors in every Kundli. In Hindu tradition each has a presiding deity; collective worship is called Navagraha Puja. Below are the classical attributes used in chart judgment — gender, direction, dignity, and life themes.",
  ja: "9つの惑星（ナヴァ・グラハ）はすべてのクンダリーの主役です。ヒンドゥー教では各星に神格があり、「ナヴァグラハ・プージャ」として祈りが捧げられます。以下はチャート判断で用いる古典的な属性 — 性別、方角、品位、象意 — です。",
};

export const planets: PlanetEntry[] = [
  {
    id: "sun",
    image: planetImages.sun,
    name: { en: "Sun", ja: "太陽" },
    sanskrit: { en: "Surya", ja: "スーリヤ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Masculine", ja: "男性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Temple", ja: "寺院" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Mild malefic", ja: "弱い凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "East", ja: "東" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Leo", ja: "獅子座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Aries", ja: "牡羊座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Libra", ja: "天秤座" } },
    ],
    description: {
      en: "Surya is the king of the chart — the Atma-karaka representing soul, vitality, and conscious will. A strong Sun grants leadership, clarity, and recognition; a afflicted Sun may show ego struggles or difficulty with authority figures, especially the father.",
      ja: "スーリヤはチャートの王 — アートマ（魂）、活力、意志を表す存在です。太陽が強いとリーダーシップや名誉、自信が育まれ、弱いとエゴや父親に関するテーマが浮上することがあります。",
    },
    significations: {
      en: "Father, courage, energy, pride, soul, ego, honor, power, health, government, royalty, medicine.",
      ja: "父親、勇気、エネルギッシュ、プライド、魂、エゴ。名誉、権力、健康、政府、王室、薬。",
    },
  },
  {
    id: "moon",
    image: planetImages.moon,
    name: { en: "Moon", ja: "月" },
    sanskrit: { en: "Chandra", ja: "チャンドラ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Feminine", ja: "女性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Water's edge", ja: "水辺" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Waxing: mild benefic; waning: mild malefic", ja: "満月に近い：弱い吉星／新月に近い：弱い凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "Northwest", ja: "北西" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Cancer", ja: "蟹座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Taurus", ja: "牡牛座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Scorpio", ja: "蠍座" } },
    ],
    description: {
      en: "Chandra governs Manas — the fluctuating mind, emotions, and receptivity. Vedic astrology is Moon-centric: the birth Nakshatra is reckoned from the Moon. A stable Moon supports happiness and memory; a troubled Moon may show anxiety or instability in domestic life.",
      ja: "チャンドラはマナス（心）、感情、受容性を司ります。インド占星術は月中心であり、出生ナクシャトラも月から定められます。月が安定していると幸せや記憶力が支えられ、不安定だと心の揺れや家庭のテーマが強まります。",
    },
    significations: {
      en: "Mother, family, women, spouse (for men), heart, feelings, social conduct, change, memory, happiness, travel.",
      ja: "母親、家族、女性、妻、心、感情。社会的行動、変化、記憶力、幸せ、旅行。",
    },
  },
  {
    id: "mercury",
    image: planetImages.mercury,
    name: { en: "Mercury", ja: "水星" },
    sanskrit: { en: "Budha", ja: "ブッダ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Neuter", ja: "中性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Playground, arena", ja: "遊び場、競技場" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Mild benefic", ja: "弱い吉星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "North", ja: "北" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Gemini, Virgo", ja: "双子座、乙女座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Virgo", ja: "乙女座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Pisces", ja: "魚座" } },
    ],
    description: {
      en: "Budha is the prince of intellect — discrimination, speech, and commerce. It takes the color of planets it associates with. Well-placed Mercury gives eloquence and analytical skill; afflicted Mercury may scatter attention or create nervous tension.",
      ja: "ブッダは知性と弁舌の王子 — 識別力、言葉、商業を司ります。合する惑星の色を借りる性質があり、良好なら論理とコミュニケーションが冴え、苦しいと散漫さや神経的な緊張が出ることがあります。",
    },
    significations: {
      en: "Relatives, prince, intellect, logic, reason, education, speech, communication, diplomacy, mediation, trade.",
      ja: "親戚、王子、知性、論理性、合理性、教育、言葉。コミュニケーション、外交、調停、商業、貿易。",
    },
  },
  {
    id: "venus",
    image: planetImages.venus,
    name: { en: "Venus", ja: "金星" },
    sanskrit: { en: "Shukra", ja: "シュクラ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Feminine", ja: "女性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Bedchamber", ja: "寝室" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Benefic", ja: "吉星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "Southeast", ja: "南東" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Taurus, Libra", ja: "牡牛座、天秤座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Pisces", ja: "魚座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Virgo", ja: "乙女座" } },
    ],
    description: {
      en: "Shukra is the teacher of the demons in myth — refined taste, relationship skill, and the arts. Venus blesses marriage, comfort, and aesthetic sensibility. Weak Venus may indicate delayed partnership or difficulty enjoying life's pleasures.",
      ja: "シュクラは神話における阿修羅の師 — 美、関係性、芸術を司る吉星です。恋愛、結婚、文化的洗練を象徴し、弱まるとパートナーシップの遅れや享楽との距離が出ることがあります。",
    },
    significations: {
      en: "Spouse, partner, love, marriage, art, beauty, fortune, culture, luxury, gems, music, entertainment, vehicles.",
      ja: "配偶者、パートナー、恋愛、結婚、芸術、美、幸運。文化、贅沢、宝石、音楽、娯楽、乗り物。",
    },
  },
  {
    id: "mars",
    image: planetImages.mars,
    name: { en: "Mars", ja: "火星" },
    sanskrit: { en: "Mangal", ja: "マンガル" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Masculine", ja: "男性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Place of fire", ja: "火のある場所" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Malefic", ja: "凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "South", ja: "南" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Aries, Scorpio", ja: "牡羊座、蠍座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Capricorn", ja: "山羊座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Cancer", ja: "蟹座" } },
    ],
    description: {
      en: "Mangal is raw force — courage, competition, and the fire that cuts through obstacles. It rules siblings, engineering, and surgery. Directed well, Mars builds warriors and builders; undirected, it becomes anger, accident, or conflict.",
      ja: "マンガルは生の力 — 勇気、競争、障害を切り開く火です。兄弟姉妹、技術、外科とも関わります。方向づけられれば戦士や建設者を育み、制御されなければ怒りや事故、争いとなります。",
    },
    significations: {
      en: "Siblings, passion, focus, strife, anger, competition, martial arts, violence, strength, fire, real estate, enemies.",
      ja: "兄弟姉妹、情熱、集中力、闘争、怒り、競争。武術、暴力、力、火、不動産、敵。",
    },
  },
  {
    id: "jupiter",
    image: planetImages.jupiter,
    name: { en: "Jupiter", ja: "木星" },
    sanskrit: { en: "Guru", ja: "グル" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Masculine", ja: "男性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Treasury", ja: "宝物庫" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Benefic", ja: "吉星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "Northeast", ja: "北東" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Sagittarius, Pisces", ja: "射手座、魚座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Cancer", ja: "蟹座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Capricorn", ja: "山羊座" } },
    ],
    description: {
      en: "Guru is the great benefic — wisdom, dharma, teachers, and expansion. Jupiter protects children, higher learning, and faith. Even when challenged, its aspect tends to give a saving grace or moral compass.",
      ja: "グルは最大の吉星 — 智慧、ダルマ、師、拡大を司ります。子供、高等教育、信仰を守護し、たとえ苦しくてもアスペクトによって救いや道徳の羅針盤が働くことが多いです。",
    },
    significations: {
      en: "Children, grandchildren, teachers, wisdom, guru, justice, compassion, expansion, scripture, religion, higher education, discernment.",
      ja: "子供、孫、教師、智慧、グル、正義、慈悲。拡大、聖典、宗教、高等教育、識別力。",
    },
  },
  {
    id: "saturn",
    image: planetImages.saturn,
    name: { en: "Saturn", ja: "土星" },
    sanskrit: { en: "Shani", ja: "シャニ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Neuter", ja: "中性" } },
      { label: { en: "Abode", ja: "場所" }, value: { en: "Impure places", ja: "汚れた場所" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Malefic", ja: "凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "West", ja: "西" } },
      { label: { en: "Own signs", ja: "支配星座" }, value: { en: "Capricorn, Aquarius", ja: "山羊座、水瓶座" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Libra", ja: "天秤座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Aries", ja: "牡羊座" } },
    ],
    description: {
      en: "Shani is time, karma, and austerity — the slow grinder that teaches through delay and discipline. Saturn's gifts arrive late but endure. Its periods demand patience; resisting its lessons often prolongs hardship.",
      ja: "シャニは時間、カルマ、苦行 — 遅れと規律を通じて教える厳しい師です。土星の恵みは遅れて来ますが長く続きます。その時期は忍耐が求められ、教えに抵抗すると試練が長引くことがあります。",
    },
    significations: {
      en: "Servants, laborers, endurance, suffering, obstacles, delay, hard work, longevity, disease, separation, democracy, sorrow, fear.",
      ja: "召使、労働者、忍耐、苦悩、障害、遅れ、ハードワーク。寿命、疾病、別離、民主主義、悲しみ、恐れ。",
    },
  },
  {
    id: "rahu",
    image: planetImages.rahu,
    name: { en: "Rahu", ja: "ラーフ" },
    sanskrit: { en: "Rahu", ja: "ラーフ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Feminine", ja: "女性" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Malefic", ja: "凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "Southwest", ja: "南西" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Taurus", ja: "牡牛座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Scorpio", ja: "蠍座" } },
    ],
    description: {
      en: "Rahu is the north lunar node — insatiable hunger for experience, foreignness, and unconventional paths. It amplifies material ambition and breaks taboos. Rahu periods can bring sudden rise, obsession, or confusion until integrated consciously.",
      ja: "ラーフは月の北ノード — 飽くなき欲望、異国性、型破りな道を象徴します。物質的野心を増幅し、タブーを破ります。ラーフの時期は急上昇や執着、混乱をもたらすこともあり、意識的に統合することが鍵です。",
    },
    significations: {
      en: "Foreigners, materialism, insatiable desire, recklessness, anomaly, sudden events, extroversion, false theories, self-centeredness.",
      ja: "外国人、物質主義、飽くなき欲望、向こう見ず。異常、突発的、外向的、間違った理論、自己中心的。",
    },
  },
  {
    id: "ketu",
    image: planetImages.ketu,
    name: { en: "Ketu", ja: "ケートゥ" },
    sanskrit: { en: "Ketu", ja: "ケートゥ" },
    attributes: [
      { label: { en: "Gender", ja: "性別" }, value: { en: "Neuter", ja: "中性" } },
      { label: { en: "Nature", ja: "生来的吉凶" }, value: { en: "Malefic", ja: "凶星" } },
      { label: { en: "Direction", ja: "方角" }, value: { en: "Southwest", ja: "南西" } },
      { label: { en: "Exaltation", ja: "高揚星座" }, value: { en: "Scorpio", ja: "蠍座" } },
      { label: { en: "Debilitation", ja: "減衰星座" }, value: { en: "Taurus", ja: "牡牛座" } },
    ],
    description: {
      en: "Ketu is the south node — detachment, past-life residue, and moksha (liberation). Where Rahu grasps outward, Ketu withdraws inward. It gives psychic sensitivity and spiritual insight, but may also bring isolation or a sense of incompleteness.",
      ja: "ケートゥは南ノード — 離脱、過去の残滓、モークシャ（解脱）を司ります。ラーフが外へ掴むのに対し、ケートゥは内へ引きます。霊的洞察を与える一方、孤立や欠乏感をもたらすこともあります。",
    },
    significations: {
      en: "Asceticism, deep thought, silence, liberation, discernment, solitude, conspiracy, occult, lack of self, mental instability.",
      ja: "禁欲、深い思考、無口、解脱、識別力。孤独、陰謀、オカルト、自身の欠如、精神の不安定。",
    },
  },
];
