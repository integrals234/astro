import { translateSign, type PdfLanguage } from "./i18n";
import { rashis } from "../education/rashi-content";
import { nakshatras } from "../education/nakshatras-content";

export interface HouseThemeRow {
  houseLabel: { en: string; ja: string };
  theme: { en: string; ja: string };
}

const HOUSE_LABELS_HI = [
  "प्रथम भाव (त्रिकोण · केंद्र) (धर्म)", "द्वितीय भाव (मारक) (अर्थ)",
  "तृतीय भाव (उपचय) (काम)", "चतुर्थ भाव (केंद्र) (मोक्ष)",
  "पंचम भाव (त्रिकोण) (धर्म)", "षष्ठ भाव (उपचय · दुःस्थान) (अर्थ)",
  "सप्तम भाव (केंद्र · मारक) (काम)", "अष्टम भाव (दुःस्थान) (मोक्ष)",
  "नवम भाव (त्रिकोण) (धर्म)", "दशम भाव (केंद्र · उपचय) (अर्थ)",
  "एकादश भाव (उपचय) (काम)", "द्वादश भाव (दुःस्थान) (मोक्ष)",
];
const HOUSE_THEMES_HI = [
  "स्वरूप, व्यक्तित्व, शारीरिक गठन, स्वास्थ्य, जीवन-शक्ति, स्वभाव, प्रतिष्ठा और जीवन की समग्र दिशा।",
  "कुटुंब, वाणी, संचित धन, आहार, मूल्य, मुख, दाहिनी आँख और प्रारंभिक शिक्षा।",
  "छोटे भाई-बहन, पराक्रम, साहस, संचार, लेखन, कौशल, छोटी यात्राएँ, भुजाएँ, कंधे और दाहिना कान।",
  "माता, घर, सुख, भूमि, अचल संपत्ति, वाहन, प्राथमिक शिक्षा, मन, छाती और फेफड़े।",
  "संतान, बुद्धि, सृजनशीलता, विद्या, प्रेम, पूर्व-पुण्य, मंत्र, उदर और हृदय।",
  "रोग, ऋण, शत्रु, विवाद, सेवा, श्रम, प्रतियोगिता, मातृ-पक्ष के संबंधी, दुर्घटनाएँ और आँतें।",
  "जीवनसाथी, विवाह, साझेदारी, व्यापार, कामेच्छा, जनसंपर्क, श्रोणि और प्रजनन अंग।",
  "आयु, आकस्मिक घटनाएँ, संकट, रहस्य, गूढ़ विद्या, विरासत, रूपांतरण, दीर्घकालिक रोग और प्रजनन अंग।",
  "पिता, गुरु, भाग्य, धर्म, उच्च शिक्षा, आस्था, पुण्य, तीर्थयात्रा, लंबी यात्राएँ और जाँघें।",
  "कर्म, पेशा, पद, प्रतिष्ठा, अधिकार, सामाजिक दायित्व और सार्वजनिक जीवन।",
  "लाभ, आय, इच्छापूर्ति, बड़े भाई-बहन, मित्र, नेटवर्क, मान्यता और पिंडलियाँ।",
  "व्यय, हानि, दान, मोक्ष, शयन-सुख, एकांत, विदेश, अस्पताल, कारावास, बायीं आँख और पैर।",
];
const HOUSE_LABELS_KO = [
  "제1하우스(트리코나·켄드라)(다르마)", "제2하우스(마라카)(아르타)",
  "제3하우스(우파차야)(카마)", "제4하우스(켄드라)(목샤)",
  "제5하우스(트리코나)(다르마)", "제6하우스(우파차야·두스타나)(아르타)",
  "제7하우스(켄드라·마라카)(카마)", "제8하우스(두스타나)(목샤)",
  "제9하우스(트리코나)(다르마)", "제10하우스(켄드라·우파차야)(아르타)",
  "제11하우스(우파차야)(카마)", "제12하우스(두스타나)(목샤)",
];
const HOUSE_THEMES_KO = [
  "자아, 성격, 행운과 불운, 명성, 평화, 번영, 건강, 신체, 출생지, 혈통, 삶 전반과 머리.",
  "가족, 집, 재산, 소득, 축적된 부, 말, 사업, 음식, 언행, 대화, 오른쪽 눈, 코, 입, 목과 턱.",
  "손아래 형제자매, 노력, 기술 훈련, 용기, 정신력, 집중력, 단거리 여행, 이웃, 음악, 공연 예술, 팔, 어깨와 오른쪽 귀.",
  "어머니, 가정, 토지, 부동산, 차량, 가구, 초등 교육, 기억, 농업, 가슴과 폐.",
  "자녀, 창의성, 재능, 문학, 지성, 고등 교육, 예술, 철학, 연애, 종교, 만트라, 복부, 위와 심장.",
  "적, 분쟁, 부하, 친척, 질병, 노동, 소송, 시험, 경쟁, 사고, 빚, 봉사, 복부와 장.",
  "배우자, 사업 동반자, 결혼, 성, 대인관계, 엉덩이, 비뇨기계와 생식기관.",
  "수명, 돌발 사건, 불규칙성, 고난, 비밀, 오컬트, 불명예, 정신적 고통, 고행, 요가, 명상, 사망 원인과 생식기관.",
  "아버지, 구루, 행운, 고급 지식, 종교, 신앙, 신과 스승에 대한 헌신, 덕, 순례, 장거리 여행, 외국과 엉덩이.",
  "상사, 직업, 천직, 운명, 사회적 사명, 사회적 영향력, 전문직, 명예, 지위, 권력과 대장.",
  "손위 형제자매, 친구, 후원자, 이익, 소득, 인정, 성공, 수상, 소원 성취, 조직, 허벅지, 무릎과 왼쪽 귀.",
  "손실, 지출, 투자, 자선, 해탈, 고통에서의 해방, 출가, 은둔, 수감, 입원, 이민, 왼쪽 눈과 발.",
];

export function getHouseTheme(house: number, lang: PdfLanguage) {
  const row = HOUSE_THEMES[house - 1];
  if (lang === "hi") return { houseLabel: HOUSE_LABELS_HI[house - 1], theme: HOUSE_THEMES_HI[house - 1] };
  if (lang === "ko") return { houseLabel: HOUSE_LABELS_KO[house - 1], theme: HOUSE_THEMES_KO[house - 1] };
  return { houseLabel: row.houseLabel[lang], theme: row.theme[lang] };
}

export const HOUSE_THEMES: HouseThemeRow[] = [
  {
    houseLabel: {
      en: "1st House (Trikona · Kendra) (Dharma)",
      ja: "第1室（トリコーナ・ケンドラ）（ダルマ）",
    },
    theme: {
      en: "Self, personality, fortune and misfortune, fame, peace, prosperity, health, body, birthplace, lineage, life in general, head.",
      ja: "本人、性格、幸・不幸、名声、平和、豊かさ、健康、身体、出生地、家系・家柄、人生全般、頭部",
    },
  },
  {
    houseLabel: {
      en: "2nd House (Maraka) (Artha)",
      ja: "第2室（マラカ）（アルタ）",
    },
    theme: {
      en: "Family, home, property, income, accumulated wealth, speech, business, food, words, conduct, conversation, right eye, nose, mouth, throat, jaw.",
      ja: "家族、家庭、財産、収入、富の蓄積、話し方、商売、飲食、言葉、言動、会話、右目、鼻、口、喉、顎",
    },
  },
  {
    houseLabel: {
      en: "3rd House (Upachaya) (Kama)",
      ja: "第3室（ウパチャヤ）（カーマ）",
    },
    theme: {
      en: "Younger siblings, effort, technical training, courage, mental strength, concentration, short journeys, neighbours, communication, music, performing arts, arms, shoulders, right ear.",
      ja: "弟妹、努力、技術訓練、勇気、精神力、集中力、短い旅行、隣人、コミュニケーション、音楽、芸能、腕、肩、右耳",
    },
  },
  {
    houseLabel: {
      en: "4th House (Kendra) (Moksha)",
      ja: "第4室（ケンドラ）（モクシャ）",
    },
    theme: {
      en: "Mother, home, land, real estate, vehicles (car, plane, ship), furniture, primary education, memory, agriculture, chest, lungs.",
      ja: "母親、家庭、土地、不動産、乗り物（車・飛行機・船）、家具、初等教育、記憶、農業、胸部、肺",
    },
  },
  {
    houseLabel: {
      en: "5th House (Trikona) (Dharma)",
      ja: "第5室（トリコーナ）（ダルマ）",
    },
    theme: {
      en: "Children, creativity, talent, literature, intelligence, higher education, arts, philosophy, romance, religion, mantras, abdomen, stomach, heart.",
      ja: "子供、創造力、才能、文学、知能、高等教育、芸術、哲学、恋愛、宗教、マントラ、腹部、胃、心臓",
    },
  },
  {
    houseLabel: {
      en: "6th House (Upachaya · Dusthana) (Artha)",
      ja: "第6室（ウパチャヤ・ドゥシュタナ）（アルタ）",
    },
    theme: {
      en: "Enemies, disputes, subordinates, relatives, illness, labour, litigation, examinations, competition, accidents, debt, service, abdomen, intestines.",
      ja: "敵、争い、部下、親戚、病気、労働、訴訟、試験、競争、事故、借金、奉仕、腹部、腸",
    },
  },
  {
    houseLabel: {
      en: "7th House (Kendra · Maraka) (Kama)",
      ja: "第7室（ケンドラ・マラカ）（カーマ）",
    },
    theme: {
      en: "Spouse, business partner, marriage, sexuality, relationships, hips, urinary system, reproductive organs.",
      ja: "配偶者、ビジネスパートナー、結婚、性生活、対人関係、腰、泌尿器、生殖器",
    },
  },
  {
    houseLabel: {
      en: "8th House (Dusthana) (Moksha)",
      ja: "第8室（ドゥシュタナ）（モクシャ）",
    },
    theme: {
      en: "Longevity, sudden events, irregularity, trouble, secrets, occult, disgrace, sin, mental suffering, austerity, yoga, meditation, cause of death, reproductive organs.",
      ja: "本人の寿命、突発的な出来事、不規則な事象、トラブル、秘密、オカルト、不名誉、精神的苦痛、苦行、ヨーガ、瞑想、死因、生殖器",
    },
  },
  {
    houseLabel: {
      en: "9th House (Trikona) (Dharma)",
      ja: "第9室（トリコーナ）（ダルマ）",
    },
    theme: {
      en: "Father, guru, fortune, advanced knowledge, religion, faith, devotion to God and teachers, virtue, pilgrimage, long-distance travel, foreign lands, hips.",
      ja: "父親、グル、幸運、高度な知識、宗教、信仰、神や指導者への献身、高い徳、巡礼、長距離の移動、外国、腰",
    },
  },
  {
    houseLabel: {
      en: "10th House (Kendra · Upachaya) (Artha)",
      ja: "第10室（ケンドラ・ウパチャヤ）（アルタ）",
    },
    theme: {
      en: "Boss, occupation, vocation, destiny, social mission, social influence, profession, honour, status, power, large intestine.",
      ja: "上司、職業、天職、天命、社会的使命、社会的影響力、専門職、名誉、地位、権力、大腸",
    },
  },
  {
    houseLabel: {
      en: "11th House (Upachaya) (Kama)",
      ja: "第11室（ウパチャヤ）（カーマ）",
    },
    theme: {
      en: "Elder siblings, friends, supporters, gains, income, recognition, success, awards, fulfilment of wishes, organisations, thighs, knees, left ear.",
      ja: "兄姉、友人、支援者、利益、収入、評価、成功、勲章、願望達成、組織、大腿部、膝、左耳",
    },
  },
  {
    houseLabel: {
      en: "12th House (Dusthana) (Moksha)",
      ja: "第12室（ドゥシュタナ）（モクシャ）",
    },
    theme: {
      en: "Loss, expenses, investment, charity, liberation, release from suffering, renunciation, seclusion, imprisonment, hospitalisation, emigration, left eye, feet.",
      ja: "損失、出費、投資、寄付、解脱、苦悩からの解放、出家、隠遁、投獄、入院、海外移住、左目、足",
    },
  },
];

const SIGN_ID_MAP: Record<string, string> = {
  Aries: "aries",
  Taurus: "taurus",
  Gemini: "gemini",
  Cancer: "cancer",
  Leo: "leo",
  Virgo: "virgo",
  Libra: "libra",
  Scorpio: "scorpio",
  Sagittarius: "sagittarius",
  Capricorn: "capricorn",
  Aquarius: "aquarius",
  Pisces: "pisces",
};

const FUNCTIONAL_BY_ASC: Record<
  string,
  { benefics: string[]; malefics: string[]; neutral: string[] }
> = {
  Aries: { benefics: ["Jupiter", "Sun", "Mars"], malefics: ["Saturn", "Mercury", "Venus"], neutral: [] },
  Taurus: { benefics: ["Saturn", "Mercury", "Sun"], malefics: ["Jupiter", "Mars", "Moon"], neutral: ["Venus"] },
  Gemini: { benefics: ["Venus", "Saturn", "Mercury"], malefics: ["Mars", "Sun", "Jupiter"], neutral: [] },
  Cancer: { benefics: ["Mars", "Jupiter", "Moon"], malefics: ["Venus", "Mercury", "Saturn"], neutral: [] },
  Leo: { benefics: ["Mars", "Jupiter", "Sun"], malefics: ["Mercury", "Saturn", "Venus"], neutral: [] },
  Virgo: { benefics: ["Venus", "Mercury"], malefics: ["Mars", "Moon", "Jupiter"], neutral: ["Sun", "Saturn"] },
  Libra: { benefics: ["Mercury", "Saturn"], malefics: ["Jupiter", "Sun", "Mars"], neutral: ["Venus"] },
  Scorpio: { benefics: ["Jupiter", "Moon"], malefics: ["Mercury", "Mars", "Venus"], neutral: ["Sun", "Saturn"] },
  Sagittarius: { benefics: ["Sun", "Mars", "Mercury"], malefics: ["Venus", "Saturn", "Moon"], neutral: ["Jupiter"] },
  Capricorn: { benefics: ["Venus", "Mercury", "Saturn"], malefics: ["Mars", "Moon", "Sun"], neutral: ["Jupiter"] },
  Aquarius: { benefics: ["Venus", "Saturn"], malefics: ["Moon", "Mars", "Jupiter"], neutral: ["Mercury"] },
  Pisces: { benefics: ["Moon", "Mars", "Jupiter"], malefics: ["Sun", "Venus", "Saturn"], neutral: ["Mercury"] },
};

const NAKSHATRA_ID_MAP: Record<string, string> = {
  Ashwini: "ashwini",
  Bharani: "bharani",
  Krittika: "krittika",
  Rohini: "rohini",
  Mrigashira: "mrigashira",
  Ardra: "ardra",
  Punarvasu: "punarvasu",
  Pushya: "pushya",
  Ashlesha: "ashlesha",
  Magha: "magha",
  "Purva Phalguni": "purva-phalguni",
  "Uttara Phalguni": "uttara-phalguni",
  Hasta: "hasta",
  Chitra: "chitra",
  Swati: "swati",
  Vishakha: "vishakha",
  Anuradha: "anuradha",
  Jyeshtha: "jyeshtha",
  Mula: "mula",
  "Purva Ashadha": "purva-ashadha",
  "Uttara Ashadha": "uttara-ashadha",
  Shravana: "shravana",
  Dhanishta: "dhanishta",
  Shatabhisha: "shatabhisha",
  "Purva Bhadrapada": "purva-bhadrapada",
  "Uttara Bhadrapada": "uttara-bhadrapada",
  Revati: "revati",
};

const IMPORTED_COPY_REPLACEMENTS: Partial<
  Record<PdfLanguage, ReadonlyArray<readonly [string, string]>>
> = {
  en: [
    ["At best, Aries is", "At its best, Aries is"],
    ["; at stress,", "; under stress, it may become"],
    ["calm and storm alternate", "calm and storms alternate"],
    ["They gift abundance", "They give generously"],
    ["Perfectionism is both gift and burden.", "Perfectionism is both a gift and a burden."],
    ["oriented toward the other", "oriented toward others"],
    ["need beauty to feel sane", "need beauty to feel balanced"],
    ["Softness appears only to trusted few.", "Softness appears only to a trusted few."],
    ["Moon's favorite mansion", "Moon's favourite mansion"],
    ["It favors ", "It favours "],
    ["favors artisans", "favours artisans"],
    ["favors organizations", "favours organisations"],
    ["counseling", "counselling"],
    ["honoring ancestors", "honouring ancestors"],
    ["backed by honor", "backed by honour"],
    ["organized", "organised"],
    ["Honorable", "Honourable"],
    ["lord of death & dharma", "lord of death and dharma"],
    ["Krishna was born under Rohini.", "In Hindu tradition, Krishna is said to have been born under Rohini."],
  ],
  hi: [
    ["एआरआईएस", "मेष"],
    ["कैंसर", "कर्क"],
    ["लियो", "सिंह"],
    ["धनुराशि राशि", "धनु राशि"],
    ["कुम्भ", "कुंभ"],
    ["मीन राशि राशि", "मीन राशि"],
    ["सूरज", "सूर्य"],
    ["राजाओं", "रजस्"],
    ["सत्व", "सत्त्व"],
    ["भरनी", "भरणी"],
    ["माघ", "मघा"],
    ["सिट्रा", "चित्रा"],
    ["मुला", "मूल"],
    ["पूर्वा आषाढ़", "पूर्वाषाढ़ा"],
    ["पूर्व आषाढ़", "पूर्वाषाढ़ा"],
    ["उत्तरा आषाढ़", "उत्तराषाढ़ा"],
    ["श्रावण", "श्रवण"],
    ["पूर्व भाद्रपद", "पूर्वाभाद्रपद"],
    ["उत्तरा भाद्रपद", "उत्तराभाद्रपद"],
    ["पहला हवेली", "पहला नक्षत्र"],
    ["यह हवेली", "यह नक्षत्र"],
    ["अश्विनी मूल निवासी", "अश्विनी नक्षत्र के जातक"],
    ["पसंदीदा हवेली", "प्रिय नक्षत्र"],
    ["प्रकाश/तेज़ (क्षिप्रा)", "लघु/क्षिप्र"],
    ["शीतल (मृदु)", "मृदु"],
    ["तीक्ष्ण (तीक्ष्ण)", "तीक्ष्ण"],
    ["भयंकर (उग्रा)", "उग्र"],
    ["चल (चर)", "चर"],
    ["अश्विनी कुमार (आकाशीय चिकित्सक)", "अश्विनीकुमार (दिव्य वैद्य)"],
    ["पुजारी के रूप में बृहस्पति", "देवताओं के पुरोहित बृहस्पति"],
    ["नागा", "नाग"],
    ["पितृ (पूर्वज पिता)", "पितृगण (पूर्वज)"],
    ["सवितार", "सविता"],
    ["युवा अंकुर हवा से उड़ गया", "हवा में झूमता कोमल अंकुर"],
    ["कमल/कर्मचारी", "कमल/दंड"],
    ["बंडल जड़ें", "जड़ों का गुच्छा"],
    ["अपास", "आपः"],
    ["विनोइंग टोकरी", "ओसाने की टोकरी"],
    ["ज़हरीले भाषण", "विषैली वाणी"],
    ["स्पष्टता में कटौती", "पैनी स्पष्टता"],
    ["सामग्री का खिलना", "भौतिक समृद्धि"],
    ["पुरानी, ​​भावनात्मक रेचन और बौद्धिक सफलता का विनाश", "पुराने का विनाश, भावनात्मक रेचन और बौद्धिक सफलता"],
    ["भोग से बचने के उद्देश्य से आनंद को संतुलित करें", "अतिभोग से बचने के लिए आनंद और उद्देश्य में संतुलन रखें"],
    ["ने पूर्वा की शुरुआत को औपचारिक रूप दिया", "पूर्वा द्वारा आरंभ किए गए संबंधों को औपचारिक रूप देती है"],
    ["विस्तार के जादूगरों", "सूक्ष्म विवरण के विशेषज्ञों"],
    ["एकमात्र महत्वाकांक्षा", "एकाग्र महत्वाकांक्षा"],
    ["कांटेदार शाखा", "द्विशाखी शाखा"],
    ["अप्रत्याशित मिट्टी", "प्रतिकूल भूमि"],
    ["मित्रा की वाचा", "मित्र का अनुबंध"],
    ["ज्येष्ठा ज्येष्ठ है", "ज्येष्ठा वरिष्ठता का नक्षत्र है"],
    ["मूला को उखाड़ फेंकता है", "मूल जड़ों तक पहुँचता है"],
    ["उद्देश्य के प्रति विवाह", "उद्देश्य के प्रति अटूट समर्पण"],
    ["श्रवण सुनता है", "श्रवण सुनने और सुनकर सीखने का प्रतीक है"],
    ["मृत्यु दर का सामना करती है", "मृत्यु-बोध का सामना करती है"],
    ["रहस्यमय - ज्ञान को स्थिर करता है", "रहस्यात्मक ज्ञान को स्थिरता देता है"],
    ["गुप्त गहराई", "गूढ़ गहराई"],
    ["कुंद", "स्पष्टवादी"],
    ["पूषन", "पूषा"],
    ["वसुस", "वसुगण"],
    ["अजा एकपाड़ा", "अज एकपाद"],
    ["अहीर बुधन्या", "अहिर्बुध्न्य"],
    ["रेवती ने नक्षत्र चक्र को बंद कर दिया", "रेवती नक्षत्र-चक्र को पूर्ण करती है"],
  ],
  ja: [
    ["火星（伝統）、ケートゥ（ヴェーダ的）", "火星"],
    ["モークシャ", "モクシャ"],
  ],
};

function cleanImportedCopy(text: string, lang: PdfLanguage): string {
  let cleaned = text.normalize("NFC").replace(/\u200B/g, "");
  for (const [from, to] of IMPORTED_COPY_REPLACEMENTS[lang] ?? []) {
    cleaned = cleaned.replaceAll(from, to);
  }
  if (lang === "hi") {
    if (cleaned === "ज्येष्ठ") cleaned = "ज्येष्ठा";
    cleaned = cleaned
      .replaceAll("ज्येष्ठाा", "ज्येष्ठा")
      .replaceAll("पूर्वाभाद्रपदा", "पूर्वाभाद्रपद")
      .replaceAll("उत्तराभाद्रपदा", "उत्तराभाद्रपद")
      .replaceAll(" - ", " – ")
      .replaceAll("'", "′");
  }
  return cleaned;
}

const NAKSHATRA_EXTRA: Record<
  string,
  {
    gender: Record<PdfLanguage, string>;
    dosha: Record<PdfLanguage, string>;
    lifePurpose: Record<PdfLanguage, string>;
    temperament: Record<PdfLanguage, string>;
    element: Record<PdfLanguage, string>;
  }
> = {
  Rohini: {
    gender: { en: "Female", hi: "स्त्री", ja: "女性", ko: "여성" },
    dosha: { en: "Kapha", hi: "कफ", ja: "カパ", ko: "카파" },
    lifePurpose: { en: "Moksha", hi: "मोक्ष", ja: "モクシャ", ko: "목샤" },
    temperament: { en: "Manushya", hi: "मनुष्य", ja: "マヌーシャ", ko: "마누샤" },
    element: { en: "Earth", hi: "पृथ्वी", ja: "地", ko: "흙" },
  },
};

export function getLagnaReportText(sign: string, lang: PdfLanguage): string {
  const entry = rashis.find((r) => r.id === SIGN_ID_MAP[sign]);
  if (!entry) return "";
  const nature = cleanImportedCopy(
    entry.sections?.nature?.[lang] ?? entry.description[lang],
    lang,
  );
  const ruler = cleanImportedCopy(entry.ruler[lang], lang);
  const signName = translateSign(lang, sign);
  const intro = {
    en: `${entry.name.en} is ruled by ${ruler}.`,
    hi: `${signName} राशि का स्वामी ${ruler} है।`,
    ja: `${entry.name.ja}は${ruler}を支配星とする星座です。`,
    ko: `${entry.name.ko}의 지배 행성은 ${ruler}입니다.`,
  }[lang];
  return cleanImportedCopy(`${intro}\n\n${nature}`, lang);
}

export function getMoonNakshatraText(nakshatra: string, lang: PdfLanguage): string {
  const entry = nakshatras.find((n) => n.id === NAKSHATRA_ID_MAP[nakshatra]);
  if (!entry) return "";
  const desc = cleanImportedCopy(entry.description[lang], lang);
  const qualities = entry.qualities
    .map((q) => cleanImportedCopy(q[lang], lang))
    .join(lang === "ja" ? "。" : lang === "hi" ? "। " : ". ");
  const terminator = lang === "ja" ? "。" : lang === "hi" ? "।" : ".";
  return cleanImportedCopy(`${desc}\n\n${qualities}${qualities.endsWith(terminator) ? "" : terminator}`, lang);
}

export function getNakshatraAttributes(nakshatra: string, lang: PdfLanguage) {
  const entry = nakshatras.find((n) => n.id === NAKSHATRA_ID_MAP[nakshatra]);
  const extra = NAKSHATRA_EXTRA[nakshatra];
  if (!entry) return [];
  if (!extra) {
    const labels = {
      en: ["Nakshatra", "Sanskrit Name", "Presiding Deity", "Planetary Lord", "Symbol", "Zodiac Range", "Guna", "Nature", "Key Qualities"],
      hi: ["नक्षत्र", "संस्कृत नाम", "अधिष्ठाता देवता", "नक्षत्र स्वामी", "प्रतीक", "राशि विस्तार", "गुण", "प्रकृति", "मुख्य विशेषताएँ"],
      ja: ["ナクシャトラ", "サンスクリット名", "守護神", "支配星", "シンボル", "黄道範囲", "グナ", "気質", "主な性質"],
      ko: ["낙샤트라", "산스크리트 이름", "주재 신", "지배 행성", "상징", "황도 범위", "구나", "성질", "주요 특성"],
    }[lang];
    const values = [
      entry.name[lang],
      entry.sanskrit[lang],
      entry.deity[lang],
      entry.ruler[lang],
      entry.symbol[lang],
      entry.range[lang],
      entry.guna[lang],
      entry.nature[lang],
      entry.qualities.map((quality) => quality[lang]).join(lang === "ja" ? "、" : ", "),
    ].map((value) => cleanImportedCopy(value, lang));
    return labels.map((label, index) => ({ label, value: values[index] }));
  }
  const label = (en: string, hi: string, ja: string, ko: string) => ({ en, hi, ja, ko })[lang];
  return [
    { label: label("Planetary Lord", "नक्षत्र स्वामी", "支配星", "지배 행성"), value: cleanImportedCopy(entry.ruler[lang], lang) },
    { label: label("Symbol", "प्रतीक", "シンボル", "상징"), value: cleanImportedCopy(entry.symbol[lang], lang) },
    { label: label("Deity", "अधिष्ठाता देवता", "神格", "주재신"), value: cleanImportedCopy(entry.deity[lang], lang) },
    { label: label("Gender", "लिंग", "性別", "성별"), value: extra.gender[lang] },
    { label: label("Guna", "गुण", "グナ", "구나"), value: entry.guna[lang] },
    { label: label("Dosha", "दोष", "ドーシャ", "도샤"), value: extra.dosha[lang] },
    { label: label("Life Purpose", "पुरुषार्थ", "人生の目的", "삶의 목적"), value: extra.lifePurpose[lang] },
    { label: label("Temperament", "गण", "気質", "기질"), value: extra.temperament[lang] },
    { label: label("Element", "तत्त्व", "元素", "원소"), value: extra.element[lang] },
  ];
}

export function getFunctionalPlanets(ascendantSign: string) {
  return (
    FUNCTIONAL_BY_ASC[ascendantSign] ?? {
      benefics: [],
      malefics: [],
      neutral: [],
    }
  );
}

export function getNaturalPlanets(isWaxingMoon: boolean) {
  return {
    benefics: isWaxingMoon
      ? ["Jupiter", "Venus", "Moon"]
      : ["Jupiter", "Venus"],
    malefics: isWaxingMoon
      ? ["Saturn", "Mars", "Rahu", "Ketu", "Sun"]
      : ["Saturn", "Mars", "Rahu", "Ketu", "Sun", "Moon"],
    neutral: ["Mercury"],
  };
}

export const SAMPLE_DISCLAIMER = {
  en: "This page summarizes the Lagna and Moon Nakshatra from the Vedic Astrology Birth Chart. A complete interpretation also considers planetary strength, houses, aspects, divisional charts, and dasha periods. Consult a qualified Jyotish practitioner for a full reading.",
  ja: "このページでは、ヴェーダ占星術の出生図に基づくラグナと月のナクシャトラを要約しています。総合的な判断には、惑星の強さ、ハウス、アスペクト、分割図、ダシャー期間なども考慮する必要があります。詳しい鑑定は、専門のジョーティシュ占星術師にご相談ください。",
  hi: "यह पृष्ठ वैदिक ज्योतिषीय जन्म-कुंडली के आधार पर लग्न और चंद्र नक्षत्र का सार प्रस्तुत करता है। समग्र फलादेश में ग्रहबल, भाव, दृष्टि, वर्ग-कुंडली और ग्रह-दशा सहित अन्य कारकों का भी विचार आवश्यक है। विस्तृत विवेचन के लिए योग्य ज्योतिषी से परामर्श करें।",
  ko: "이 페이지는 베다 점성술 출생 차트를 바탕으로 라그나와 달의 낙샤트라를 요약합니다. 종합 해석에는 행성의 강도, 하우스, 드리슈티, 분할 차트와 다샤 기간도 함께 고려해야 합니다. 자세한 해석은 전문 조티시 상담가와 상의하세요.",
};

export const DASHA_DISCLAIMER = {
  en: "Vimshottari Dasha describes the sequence of planetary periods used for timing in Jyotish. The Mahadasha indicates the broader life phase; each Antardasha describes a shorter phase within it. Dates below are computational results, not standalone predictions.",
  ja: "ヴィムショッタリ・ダシャーは、ジョーティシュで時期判断に用いる惑星期の流れです。マハーダシャーは人生の大きな期間を示し、アンタルダシャーはその内側の短い期間を示します。以下の日付は計算結果であり、それだけで出来事を断定するものではありません。",
  hi: "विंशोत्तरी ग्रह-दशा ज्योतिष में समय-निर्धारण के लिए ग्रहों की क्रमिक अवधियाँ बताती है। महादशा जीवन की व्यापक अवधि दर्शाती है और प्रत्येक अंतर्दशा उसी के भीतर की छोटी अवधि दर्शाती है। नीचे दी गई तिथियाँ गणनात्मक परिणाम हैं, स्वतंत्र भविष्यवाणी नहीं।",
  ko: "빔쇼타리 다샤는 조티시에서 시기 판단에 사용하는 행성 다샤의 순서입니다. 마하다샤는 삶의 큰 기간을, 안타르다샤는 그 안의 짧은 기간을 나타냅니다. 아래 날짜는 계산 결과이며 그 자체로 사건을 단정하는 예측은 아닙니다.",
};

export const DASHA_NOTE = {
  en: "Note: Dates may vary slightly because of ephemeris precision, birth-time inputs, and rounding.",
  ja: "注：天文暦の精度、出生時刻の入力、端数処理により、日付がわずかに異なる場合があります。",
  hi: "नोट: खगोलीय पंचांग की शुद्धता, जन्म-समय के इनपुट और गोलाईकरण के कारण तिथियों में थोड़ा अंतर हो सकता है।",
  ko: "참고: 천문력 정밀도, 출생 시각 입력과 반올림에 따라 날짜가 조금 달라질 수 있습니다.",
};

export const SAMPLE_SOURCE = {
  en: "Source: Jyotish Life — Vedic Astrology Birth Chart",
  ja: "出典：Jyotish Life ヴェーダ占星術出生図",
  hi: "स्रोत: Jyotish Life — वैदिक ज्योतिषीय जन्म-कुंडली",
  ko: "출처: Jyotish Life — 베다 점성술 출생 차트",
};
