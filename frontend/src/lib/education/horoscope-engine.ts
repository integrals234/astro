import type { BilingualText, EducationLang } from "./types";
import type { HoroscopePeriod, HoroscopePeriodType } from "./horoscope-periods";

export type HoroscopeSignId =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export interface HoroscopeSignMeta {
  id: HoroscopeSignId;
  name: BilingualText;
  sanskrit: BilingualText;
  image: string;
  element: BilingualText;
  ruler: BilingualText;
}

export interface HoroscopeReading {
  signId: HoroscopeSignId;
  periodType: HoroscopePeriodType;
  periodKey: string;
  mood: BilingualText;
  overview: BilingualText;
  love: BilingualText;
  career: BilingualText;
  wellness: BilingualText;
  advice: BilingualText;
}

function seedFromString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pick<T>(items: T[], seed: number, slot: number): T {
  return items[(seed + slot) % items.length];
}

function pickN<T>(items: T[], seed: number, count: number, offset = 0): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(pick(items, seed, offset + i * 7));
  }
  return out;
}

const grahaInfluence: Record<EducationLang, string[]> = {
  en: ["Mars", "Venus", "Mercury", "the Moon", "the Sun", "Jupiter", "Saturn", "Rahu", "Ketu"],
  hi: ["मंगल", "शुक्र", "बुध", "चंद्र", "सूर्य", "गुरु", "शनि", "राहु", "केतु"],
  ja: ["火星", "金星", "水星", "月", "太陽", "木星", "土星", "ラーフ", "ケートゥ"],
  ko: ["망갈(화성)", "슈크라(금성)", "부다(수성)", "찬드라(달)", "수리야(태양)", "구루(목성)", "샤니(토성)", "라후", "케투"],
};

const weeklyMoods: BilingualText[] = [
  { en: "Bold & initiating", hi: "साहसी और पहल करने वाला", ja: "大胆で始動的", ko: "대담하고 주도적임",},
  { en: "Steady & grounded", hi: "स्थिर एवं जमींदोज", ja: "安定して地に足がついた", ko: "꾸준하고 접지된",},
  { en: "Curious & communicative", hi: "जिज्ञासु और संचारी", ja: "好奇心旺盛で会話的", ko: "호기심이 많고 의사소통이 잘되는 사람",},
  { en: "Reflective & nurturing", hi: "चिंतनशील और पोषण करने वाला", ja: "内省的で育む", ko: "성찰 및 육성",},
  { en: "Radiant & expressive", hi: "दीप्तिमान एवं अभिव्यंजक", ja: "輝きと表現力", ko: "빛나고 표현력이 풍부함",},
  { en: "Focused & refining", hi: "केंद्रित एवं परिष्कृत", ja: "集中して洗練", ko: "집중 & 정제",},
  { en: "Harmonizing & diplomatic", hi: "सामंजस्यपूर्ण एवं कूटनीतिक", ja: "調和と外交的", ko: "조화와 외교",},
  { en: "Intense & transformative", hi: "गहन एवं परिवर्तनकारी", ja: "強烈で変容的", ko: "강렬하고 변화무쌍한",},
  { en: "Expansive & hopeful", hi: "विस्तृत और आशावादी", ja: "拡大と希望", ko: "광범위하고 희망적",},
  { en: "Disciplined & strategic", hi: "अनुशासित और रणनीतिक", ja: "規律と戦略", ko: "규율 있고 전략적인",},
  { en: "Innovative & visionary", hi: "नवोन्वेषी एवं दूरदर्शी", ja: "革新的で先見的", ko: "혁신적이고 비전이 있는 사람",},
  { en: "Dreamy & intuitive", hi: "स्वप्निल एवं सहज", ja: "夢見がちで直感的", ko: "꿈꾸는듯한 & 직관적인",},
];

const monthlyThemes: BilingualText[] = [
  { en: "consolidating recent gains", hi: "हाल के लाभ को समेकित करना", ja: "最近の成果を固める", ko: "최근 이익 통합",},
  { en: "opening a new chapter", hi: "एक नया अध्याय खोलना", ja: "新しい章を開く", ko: "새로운 장을 열다",},
  { en: "healing old patterns", hi: "पुराने ढर्रे को ठीक करना", ja: "古いパターンを癒す", ko: "오래된 패턴을 치유하다",},
  { en: "testing your discipline", hi: "अपने अनुशासन का परीक्षण", ja: "規律を試す", ko: "당신의 규율을 시험해 보세요",},
  { en: "expanding your network", hi: "अपने नेटवर्क का विस्तार करना", ja: "人脈を広げる", ko: "네트워크 확장",},
  { en: "deepening inner clarity", hi: "आंतरिक स्पष्टता को गहरा करना", ja: "内なる明晰さを深める", ko: "내면의 명확성을 심화",},
];

const yearlyArcs: BilingualText[] = [
  { en: "a year of courageous reinvention", hi: "साहसी पुनर्निमाण का एक वर्ष", ja: "勇気ある再構築の年", ko: "용기 있는 재창조의 해",},
  { en: "a year of patient mastery", hi: "धैर्यपूर्वक महारत हासिल करने का एक वर्ष", ja: "忍耐ある熟達の年", ko: "인내심을 갖고 숙달한 1년",},
  { en: "a year of learning and movement", hi: "सीखने और आंदोलन का एक वर्ष", ja: "学びと移動の年", ko: "학습과 운동의 1년",},
  { en: "a year of emotional maturity", hi: "भावनात्मक परिपक्वता का एक वर्ष", ja: "感情の成熟の年", ko: "정서적 성숙의 해",},
  { en: "a year of visible leadership", hi: "दृश्यमान नेतृत्व का एक वर्ष", ja: "目に見える指導の年", ko: "가시적인 리더십의 해",},
  { en: "a year of practical refinement", hi: "व्यावहारिक सुधार का एक वर्ष", ja: "実務を磨く年", ko: "실용정화의 1년",},
  { en: "a year of partnership and balance", hi: "साझेदारी और संतुलन का एक वर्ष", ja: "パートナーシップと均衡の年", ko: "파트너십과 균형의 해",},
  { en: "a year of depth and release", hi: "गहराई और रिलीज़ का एक वर्ष", ja: "深さと手放しの年", ko: "깊이와 해방의 해",},
  { en: "a year of faith and exploration", hi: "विश्वास और अन्वेषण का एक वर्ष", ja: "信頼と探求の年", ko: "신앙과 탐구의 해",},
  { en: "a year of structure and legacy", hi: "संरचना और विरासत का एक वर्ष", ja: "構造と遺産の年", ko: "구조와 유산의 해",},
  { en: "a year of innovation and community", hi: "नवाचार और समुदाय का एक वर्ष", ja: "革新と共同体の年", ko: "혁신과 커뮤니티의 해",},
  { en: "a year of compassion and imagination", hi: "करुणा और कल्पना का एक वर्ष", ja: "慈悲と想像力の年", ko: "연민과 상상의 해",},
];

const focusAreas: BilingualText[] = [
  { en: "career momentum", hi: "करियर की गति", ja: "キャリアの勢い", ko: "경력 모멘텀",},
  { en: "home and family", hi: "घर और परिवार", ja: "家庭と家族", ko: "집과 가족",},
  { en: "creative expression", hi: "रचनात्मक अभिव्यक्ति", ja: "創造的表現", ko: "창의적인 표현",},
  { en: "financial planning", hi: "वित्तीय नियोजन", ja: "財務計画", ko: "재무 계획",},
  { en: "health routines", hi: "स्वास्थ्य दिनचर्या", ja: "健康習慣", ko: "건강 루틴",},
  { en: "partnerships", hi: "पार्टनरशिप्स", ja: "パートナーシップ", ko: "파트너십",},
  { en: "spiritual practice", hi: "आध्यात्मिक अभ्यास", ja: "精神的実践", ko: "영적 실천",},
  { en: "education and travel", hi: "शिक्षा और यात्रा", ja: "学びと旅", ko: "교육과 여행",},
];

const loveWeekly: BilingualText[] = [
  {
    en: "Honest conversations clear the air and invite warmth.", hi: "ईमानदार बातचीत हवा को साफ करती है और गर्मजोशी को आमंत्रित करती है।", ja: "率直な対話が空気を澄ませ、温かさを招きます。", ko: "솔직한 대화는 공기를 맑게 하고 따뜻함을 불러일으킵니다.",
  },
  {
    en: "Small gestures matter more than grand declarations now.", hi: "छोटी-छोटी बातें अब बड़ी-बड़ी घोषणाओं से ज्यादा मायने रखती हैं।", ja: "今は大げさな宣言より小さな気遣いが効きます。", ko: "이제는 거창한 선언보다 작은 몸짓이 더 중요합니다.",
  },
  {
    en: "Give space where needed; closeness returns naturally.", hi: "जहां आवश्यक हो वहां जगह दें; निकटता स्वाभाविक रूप से लौट आती है।", ja: "必要なら距離を。親密さは自然に戻ります。", ko: "필요한 곳에 공간을 제공하십시오. 친밀감은 자연스럽게 돌아옵니다.",
  },
  {
    en: "A shared plan strengthens trust in relationships.", hi: "साझा योजना रिश्तों में विश्वास को मजबूत करती है।", ja: "共有の計画が関係の信頼を強めます。", ko: "공유된 계획은 관계에 대한 신뢰를 강화합니다.",
  },
];

const careerWeekly: BilingualText[] = [
  {
    en: "Prioritize one decisive task before scattering energy.", hi: "ऊर्जा बिखेरने से पहले एक निर्णायक कार्य को प्राथमिकता दें।", ja: "エネルギーを散らす前に、決定的な一つの仕事を優先を。", ko: "에너지를 흩트리기 전에 결정적인 일 하나를 우선순위로 두세요.",
  },
  {
    en: "Collaboration opens a door that solo effort cannot.", hi: "सहयोग एक ऐसा द्वार खोलता है जो एकल प्रयास नहीं कर सकता।", ja: "協力が、単独では開けない扉を開きます。", ko: "협업은 혼자서는 할 수 없는 문을 열어줍니다.",
  },
  {
    en: "Review details carefully; precision protects reputation.", hi: "विवरण की सावधानीपूर्वक समीक्षा करें; परिशुद्धता प्रतिष्ठा की रक्षा करती है।", ja: "細部を丁寧に確認を。精密さが評価を守ります。", ko: "세부정보를 주의 깊게 검토하세요. 정확성은 평판을 보호합니다.",
  },
  {
    en: "A mentor's perspective helps you choose the wiser path.", hi: "एक गुरु का दृष्टिकोण आपको समझदारी भरा रास्ता चुनने में मदद करता है।", ja: "師や先輩の視点が、より賢い道の選択を助けます。", ko: "멘토의 관점은 당신이 더 현명한 길을 선택하는 데 도움이 됩니다.",
  },
];

const wellnessWeekly: BilingualText[] = [
  {
    en: "Balance activity with rest; the body sets the pace.", hi: "आराम के साथ गतिविधि को संतुलित करें; शरीर गति निर्धारित करता है।", ja: "活動と休息のバランスを。身体がペースを決めます。", ko: "활동과 휴식의 균형을 유지하세요. 몸이 속도를 설정합니다.",
  },
  {
    en: "Hydration, sleep, and mindful meals restore vitality.", hi: "जलयोजन, नींद और सचेत भोजन जीवन शक्ति बहाल करते हैं।", ja: "水分、睡眠、意識的な食事が活力を回復させます。", ko: "수분 공급, 수면, 주의 깊은 식사는 활력을 회복합니다.",
  },
  {
    en: "Gentle movement clears mental fog better than force.", hi: "बल प्रयोग की तुलना में कोमल गति मानसिक धुंध को बेहतर ढंग से दूर करती है।", ja: "穏やかな運動が、無理よりも心の霧を晴らします。", ko: "부드러운 움직임은 힘보다 정신적 안개를 더 잘 제거합니다.",
  },
  {
    en: "Reduce screen noise; quiet hours sharpen intuition.", hi: "स्क्रीन शोर कम करें; शांत घंटे अंतर्ज्ञान को तेज करते हैं।", ja: "画面の雑音を減らし、静かな時間が直感を研ぎ澄ます。", ko: "화면 소음을 줄입니다. 조용한 시간은 직관을 날카롭게 합니다.",
  },
];

const adviceWeekly: BilingualText[] = [
  {
    en: "Act on Tuesday–Thursday windows when focus peaks.", hi: "फोकस चरम पर होने पर मंगलवार-गुरुवार की विंडो पर कार्रवाई करें।", ja: "集中が高まる火〜木曜の時間帯に動くとよいでしょう。", ko: "집중도가 가장 높은 화요일~목요일에 조치를 취하세요.",
  },
  {
    en: "Delay major commitments until after you sleep on them.", hi: "प्रमुख प्रतिबद्धताओं को तब तक के लिए टाल दें जब तक आप उन पर सो नहीं जाते।", ja: "大きな決断は一晩寝てからに遅らせて。", ko: "중요한 약속은 잠이 들 때까지 미루세요.",
  },
  {
    en: "Say yes to what aligns with your long-term dharma.", hi: "जो आपके दीर्घकालिक धर्म के अनुरूप हो, उसके लिए हाँ कहें।", ja: "長期のダルマ（使命）に合うものには yes を。", ko: "당신의 장기적인 달마와 일치하는 것에 동의하십시오.",
  },
  {
    en: "Let go of one obligation that drains more than it gives.", hi: "एक ऐसे दायित्व को छोड़ दें जो जितना देता है उससे कहीं अधिक बर्बाद कर देता है।", ja: "与える以上に消耗する一つの義務を手放して。", ko: "주는 것보다 더 많은 것을 소모시키는 의무 하나를 버리십시오.",
  },
];

function signTone(signId: HoroscopeSignId, lang: EducationLang): string {
  const tones: Record<HoroscopeSignId, BilingualText> = {
    aries: { en: "pioneering fire", hi: "अग्रणी आग", ja: "先駆的な火", ko: "선구적인 불",},
    taurus: { en: "steady earth", hi: "स्थिर पृथ्वी", ja: "安定した地", ko: "안정된 지구",},
    gemini: { en: "curious air", hi: "उत्सुक हवा", ja: "好奇心の風", ko: "호기심 많은 공기",},
    cancer: { en: "protective water", hi: "सुरक्षात्मक जल", ja: "守る水", ko: "보호수",},
    leo: { en: "noble fire", hi: "महान अग्नि", ja: "高貴な火", ko: "고귀한 불",},
    virgo: { en: "discerning earth", hi: "समझदार पृथ्वी", ja: "識別する地", ko: "안목 있는 지구",},
    libra: { en: "harmonizing air", hi: "सामंजस्यपूर्ण वायु", ja: "調和の風", ko: "조화로운 공기",},
    scorpio: { en: "penetrating water", hi: "मर्मज्ञ जल", ja: "貫く水", ko: "관통하는 물",},
    sagittarius: { en: "expansive fire", hi: "विस्तृत अग्नि", ja: "拡大の火", ko: "광범위한 화재",},
    capricorn: { en: "ambitious earth", hi: "महत्वाकांक्षी पृथ्वी", ja: "野心の地", ko: "야심찬 지구",},
    aquarius: { en: "humanitarian air", hi: "मानवतावादी हवा", ja: "人道的な風", ko: "인도주의적 공기",},
    pisces: { en: "compassionate water", hi: "दयालु जल", ja: "慈悲の水", ko: "자비로운 물",},
  };
  return tones[signId][lang];
}

function buildWeeklyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const grahaEn = pick(grahaInfluence.en, seed, 1);
  const grahaHi = pick(grahaInfluence.hi, seed, 1);
  const grahaJa = pick(grahaInfluence.ja, seed, 1);
  const grahaKo = pick(grahaInfluence.ko, seed, 1);
  const focus = pick(focusAreas, seed, 3);

  const overview: BilingualText = {
    en: `This week (${period.rangeLabel.en}), ${grahaEn} emphasizes ${focus.en} for ${sign.name.en}. Your ${signTone(sign.id, "en")} nature responds well when you move with intention rather than urgency. Midweek brings the clearest window for progress.`, hi: `इस सप्ताह (${period.rangeLabel.hi}), ${grahaHi} ${sign.name.hi} के लिए ${focus.hi} पर जोर देता है। जब आप जल्दबाज़ी के बजाय स्पष्ट उद्देश्य से आगे बढ़ते हैं, तो आपका ${signTone(sign.id, "hi")} स्वभाव बेहतर परिणाम देता है। सप्ताह का मध्य प्रगति के लिए सबसे अनुकूल समय है।`, ja: `今週（${period.rangeLabel.ja}）、${grahaJa}は${sign.name.ja}にとって${focus.ja}を強調します。${signTone(sign.id, "ja")}の性質は、焦りより意図を持って動くときに力を発揮します。週の中盤が最も進展しやすいでしょう。`, ko: `이번 주(${period.rangeLabel.ko})에는 ${grahaKo}의 영향으로 ${sign.name.ko}의 ${focus.ko}이 부각됩니다. 서두르기보다 분명한 의도를 갖고 움직일 때 ${signTone(sign.id, "ko")} 기질이 잘 발휘됩니다. 주중이 진전을 이루기에 가장 좋은 시기입니다.`,
  };

  return {
    signId: sign.id,
    periodType: "weekly",
    periodKey: period.key,
    mood: pick(weeklyMoods, seed, 5),
    overview,
    love: pick(loveWeekly, seed, 11),
    career: pick(careerWeekly, seed, 17),
    wellness: pick(wellnessWeekly, seed, 23),
    advice: pick(adviceWeekly, seed, 29),
  };
}

function buildMonthlyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const theme = pick(monthlyThemes, seed, 2);
  const grahaEn = pick(grahaInfluence.en, seed, 4);
  const grahaHi = pick(grahaInfluence.hi, seed, 4);
  const grahaJa = pick(grahaInfluence.ja, seed, 4);
  const grahaKo = pick(grahaInfluence.ko, seed, 4);
  const [focusA, focusB] = pickN(focusAreas, seed, 2, 6);

  const overview: BilingualText = {
    en: `For ${period.label.en}, ${sign.name.en} is ${theme.en}. ${grahaEn} shapes the month's rhythm, asking you to balance ${focusA.en} with ${focusB.en}. Your ${signTone(sign.id, "en")} temperament thrives when routines are simple and sincere.`, hi: `${period.label.hi} में ${sign.name.hi} के लिए ${theme.hi} का समय है। ${grahaHi} महीने की लय को आकार देता है और ${focusA.hi} तथा ${focusB.hi} में संतुलन रखने को कहता है। आपका ${signTone(sign.id, "hi")} स्वभाव सरल और सच्ची दिनचर्या में फलता-फूलता है।`, ja: `${period.label.ja}、${sign.name.ja}は${theme.ja}流れにあります。${grahaJa}が今月のリズムを形づけ、${focusA.ja}と${focusB.ja}の均衡を求めます。${signTone(sign.id, "ja")}の気質は、シンプルで誠実な習慣の中で力を発揮します。`, ko: `${period.label.ko}, ${sign.name.ko}에게는 ${theme.ko} 흐름이 이어집니다. ${grahaKo}가 이달의 리듬을 만들며 ${focusA.ko}과 ${focusB.ko}의 균형을 요구합니다. ${signTone(sign.id, "ko")} 기질은 단순하고 성실한 일상에서 힘을 발휘합니다.`,
  };

  const love: BilingualText = {
    en: `Venus cycles highlight sincerity over performance in love. Singles may meet someone through ${focusA.en}; couples benefit from revisiting shared goals.`, hi: `शुक्र का चक्र प्रेम में दिखावे से अधिक ईमानदारी को महत्व देता है। अविवाहित लोगों की ${focusA.hi} के माध्यम से किसी से भेंट हो सकती है; दंपतियों को साझा लक्ष्यों पर फिर विचार करने से लाभ होगा।`, ja: `金星の巡りが恋愛で演出より誠実さを強調します。独身の方は${focusA.ja}を通じた出会いがあり得ます。カップルは共有の目標を見直すとよいでしょう。`, ko: `금성의 흐름은 사랑에서 겉치레보다 진실함을 강조합니다. 싱글은 ${focusA.ko}을 통해 인연을 만날 수 있고, 커플은 공동의 목표를 다시 살펴보면 좋습니다.`,
  };

  const career: BilingualText = {
    en: `Professional growth favors steady delivery. A project tied to ${focusB.en} gains visibility after the second week. Negotiate only when terms are fully clear.`, hi: `व्यावसायिक प्रगति में निरंतर काम लाभ देगा। ${focusB.hi} से जुड़ी परियोजना दूसरे सप्ताह के बाद ध्यान आकर्षित करेगी। शर्तें पूरी तरह स्पष्ट होने पर ही बातचीत करें।`, ja: `職業面では着実な遂行が有利です。${focusB.ja}に関わる仕事は第二週以降に注目を集めます。条件が完全に明確なときだけ交渉を。`, ko: `직업적 성장은 꾸준한 실행에서 나옵니다. ${focusB.ko}과 관련된 프로젝트는 둘째 주 이후 주목받습니다. 조건이 완전히 명확할 때만 협상하세요.`,
  };

  const wellness: BilingualText = {
    en: `Monthly wellness improves through rhythm: regular meals, sleep, and short daily walks. Emotional balance follows when you honor limits without guilt.`, hi: `मासिक स्वास्थ्य में लय के माध्यम से सुधार होता है: नियमित भोजन, नींद और छोटी दैनिक सैर। जब आप बिना अपराधबोध के सीमाओं का सम्मान करते हैं तो भावनात्मक संतुलन बना रहता है।`, ja: `今月の健康はリズムで整います。規則正しい食事と睡眠、短い日歩が効きます。限界を罪悪感なく尊重すると感情の均衡も戻ります。`, ko: `규칙적인 식사, 수면, 매일 짧은 산책 등의 리듬을 통해 월간 건강이 향상됩니다. 죄책감 없이 한계를 존중할 때 정서적 균형이 이루어집니다.`,
  };

  const advice: BilingualText = {
    en: `Set one measurable goal for ${period.label.en} and review it each Sunday. Let ${sign.ruler.en} guide patience over pressure.`, hi: `${period.label.hi} के लिए एक मापने योग्य लक्ष्य तय करें और हर रविवार उसकी समीक्षा करें। ${sign.ruler.hi} से प्रेरणा लेकर दबाव के बजाय धैर्य चुनें।`, ja: `${period.label.ja}の測定可能な目標を一つ立て、毎週日曜に見直して。${sign.ruler.ja}の力を借り、プレッシャーより忍耐を選んで。`, ko: `${period.label.ko}에 달성 가능한 목표 하나를 정하고 매주 일요일 점검하세요. ${sign.ruler.ko}의 힘을 빌려 압박보다 인내를 선택하세요.`,
  };

  return {
    signId: sign.id,
    periodType: "monthly",
    periodKey: period.key,
    mood: pick(weeklyMoods, seed, 8),
    overview,
    love,
    career,
    wellness,
    advice,
  };
}

function buildYearlyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const arc = pick(yearlyArcs, seed, 1);
  const grahaEn = pick(grahaInfluence.en, seed, 3);
  const grahaHi = pick(grahaInfluence.hi, seed, 3);
  const grahaJa = pick(grahaInfluence.ja, seed, 3);
  const grahaKo = pick(grahaInfluence.ko, seed, 3);
  const [focusA, focusB, focusC] = pickN(focusAreas, seed, 3, 9);

  const overview: BilingualText = {
    en: `${period.label.en} marks ${arc.en} for ${sign.name.en}. ${grahaEn} and ${sign.ruler.en} together emphasize ${focusA.en}, ${focusB.en}, and ${focusC.en}. Your ${signTone(sign.id, "en")} gifts mature when you commit to fewer priorities and finish what you start.`, hi: `${period.label.hi} ${sign.name.hi} के लिए ${arc.hi} का संकेत देता है। ${grahaHi} और ${sign.ruler.hi} मिलकर ${focusA.hi}, ${focusB.hi} और ${focusC.hi} पर जोर देते हैं। आपका ${signTone(sign.id, "hi")} गुण तब निखरता है जब आप कम प्राथमिकताएँ चुनकर शुरू किए काम पूरे करते हैं।`, ja: `${period.label.ja}は${sign.name.ja}にとって${arc.ja}。${grahaJa}と${sign.ruler.ja}が共に${focusA.ja}、${focusB.ja}、${focusC.ja}を強調します。${signTone(sign.id, "ja")}の才能は、優先を絞り始めたことを完遂するときに成熟します。`, ko: `${period.label.ko}은 ${sign.name.ko}에게 ${arc.ko}가 되는 해입니다. ${grahaKo}와 ${sign.ruler.ko}가 함께 ${focusA.ko}, ${focusB.ko}, ${focusC.ko}을 강조합니다. 우선순위를 줄이고 시작한 일을 끝낼 때 ${signTone(sign.id, "ko")} 재능이 성숙합니다.`,
  };

  const love: BilingualText = {
    en: `Relationships evolve through honesty and pacing. Mid-year favors deepening trust; year-end invites reflection on what partnership truly means to you.`, hi: `रिश्ते ईमानदारी और गति से विकसित होते हैं। मध्य वर्ष विश्वास को गहरा करने का पक्षधर है; साल का अंत इस बात पर विचार करने के लिए आमंत्रित करता है कि साझेदारी वास्तव में आपके लिए क्या मायने रखती है।`, ja: `関係は誠実さとペース配分で進化します。年の中盤は信頼を深める時期、年末はパートナーシップの本当の意味を振り返る時期です。`, ko: `관계는 정직과 속도를 통해 발전합니다. 올해 중반은 신뢰가 깊어지는 것을 선호합니다. 연말에는 파트너십이 귀하에게 진정으로 의미하는 바가 무엇인지 생각해 볼 수 있습니다.`,
  };

  const career: BilingualText = {
    en: `Career themes build in three waves: planning in spring, execution in summer, consolidation in autumn. Recognition arrives when craftsmanship meets consistency.`, hi: `कैरियर विषय तीन तरंगों में बनते हैं: वसंत में योजना, गर्मियों में कार्यान्वयन, शरद ऋतु में समेकन। पहचान तब मिलती है जब शिल्प कौशल निरंतरता से मिलता है।`, ja: `キャリアは三つの波で進みます。春は計画、夏は実行、秋は統合。職人気質と一貫性が出会ったときに評価が訪れます。`, ko: `경력 테마는 봄의 계획, 여름의 실행, 가을의 통합이라는 세 가지 물결로 구성됩니다. 인정은 장인정신이 일관성을 충족할 때 달성됩니다.`,
  };

  const wellness: BilingualText = {
    en: `Long-term vitality depends on sustainable habits, not bursts of intensity. Seasonal adjustments to diet and rest keep your ${signTone(sign.id, "en")} constitution balanced.`, hi: `दीर्घकालिक ऊर्जा तीव्र प्रयासों के बजाय टिकाऊ आदतों पर निर्भर करती है। ऋतु के अनुसार आहार और विश्राम में बदलाव आपके ${signTone(sign.id, "hi")} स्वभाव को संतुलित रखते हैं।`, ja: `長期的な活力は激しい波より持続可能な習慣にかかります。季節に合わせた食事と休息の調整が、${signTone(sign.id, "ja")}の体質を保ちます。`, ko: `장기적인 활력은 순간적인 무리보다 지속 가능한 습관에 달려 있습니다. 계절에 맞춰 식사와 휴식을 조절하면 ${signTone(sign.id, "ko")} 체질의 균형을 지킬 수 있습니다.`,
  };

  const advice: BilingualText = {
    en: `Choose one theme for ${period.label.en}: learn, build, heal, or lead. Revisit it at each solstice and equinox to stay aligned with Jyotish timing.`, hi: `${period.label.hi} के लिए एक विषय चुनें—सीखना, निर्माण करना, उपचार करना या नेतृत्व करना। ज्योतिषीय समय के अनुरूप रहने के लिए हर अयनांत और विषुव पर इसकी समीक्षा करें।`, ja: `${period.label.ja}のテーマを一つ選び（学ぶ・築く・癒す・導く）、至点と二分点ごとに見直してジョーティッシュの時機と調和させましょう。`, ko: `${period.label.ko}의 주제를 하나 고르세요—배움, 구축, 치유, 또는 이끔. 지점과 분점마다 되돌아보며 조티시의 때와 조화를 유지하세요.`,
  };

  return {
    signId: sign.id,
    periodType: "yearly",
    periodKey: period.key,
    mood: pick(yearlyArcs, seed, 12),
    overview,
    love,
    career,
    wellness,
    advice,
  };
}

export function generateHoroscopeReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod
): HoroscopeReading {
  const seed = seedFromString(`${period.type}:${period.key}:${sign.id}`);

  if (period.type === "weekly") return buildWeeklyReading(sign, period, seed);
  if (period.type === "monthly") return buildMonthlyReading(sign, period, seed);
  return buildYearlyReading(sign, period, seed);
}

export function generateAllHoroscopes(
  signs: HoroscopeSignMeta[],
  period: HoroscopePeriod
): HoroscopeReading[] {
  return signs.map((sign) => generateHoroscopeReading(sign, period));
}

export const horoscopeIntro: BilingualText = {
  en: "Solar-sign horoscopes for all twelve Rashis, refreshed automatically for the current week, month, and year. Forecasts blend Jyotish symbolism with the rhythm of passing time — select a period and sign to read yours.", hi: "सभी बारह राशियों के लिए सौर-राशि राशिफल, वर्तमान सप्ताह, महीने और वर्ष के लिए स्वचालित रूप से ताज़ा हो जाते हैं। पूर्वानुमान ज्योतिष प्रतीकवाद को गुजरते समय की लय के साथ मिलाते हैं - अपना पढ़ने के लिए एक अवधि चुनें और हस्ताक्षर करें।", ja: "12のラーシすべてのソーラーサイン運勢。現在の週・月・年に合わせて自動更新されます。ジョーティッシュの象徴と時間のリズムを組み合わせた予測 — 期間と星座を選んでお読みください。", ko: "현재 주, 월, 연도에 대해 자동으로 새로 고쳐지는 12개의 Rashis에 대한 태양 별자리 운세입니다. 예측은 Jyotish 상징주의와 시간이 흐르는 리듬을 혼합합니다. 기간을 선택하고 기호를 읽으세요.",
};

export const horoscopeSectionLabels = {
  overview: { en: "Overview", hi: "सिंहावलोकन", ja: "概要", ko: "개요",} satisfies BilingualText,
  love: { en: "Love", hi: "प्यार", ja: "恋愛", ko: "사랑",} satisfies BilingualText,
  career: { en: "Career", hi: "आजीविका", ja: "キャリア", ko: "직업",} satisfies BilingualText,
  wellness: { en: "Wellness", hi: "कल्याण", ja: "健康", ko: "웰빙",} satisfies BilingualText,
  advice: { en: "Guidance", hi: "मार्गदर्शन", ja: "指針", ko: "안내",} satisfies BilingualText,
  mood: { en: "Mood", hi: "मनोदशा", ja: "ムード", ko: "분위기",} satisfies BilingualText,
};
