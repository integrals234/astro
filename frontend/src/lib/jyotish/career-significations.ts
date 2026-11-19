import type { BilingualText } from "@/lib/education/types";

/**
 * Career Report (D10 / Dashamsha) interpretive content.
 *
 * Scoped to two independent 1-dimensional datasets rather than a 12×10
 * (sign × house) matrix: the D10 Lagna sign sets a general career
 * temperament, and each planet placed in the D10 chart adds its own
 * classical career domain. Combining both already personalizes the report
 * to the visitor's actual chart without needing 120+ hand-written
 * combinations.
 */
export const D10_LAGNA_SIGN: Record<string, BilingualText> = {
  Aries: {
    en: "A career temperament that favors initiative — starting things, competing directly, and leading from the front rather than following an established path.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो पहल को प्राथमिकता देता है — चीजें शुरू करना, सीधे प्रतिस्पर्धा करना, और स्थापित मार्ग का अनुसरण करने के बजाय आगे से नेतृत्व करना।",
    ja: "率先して行動する気質——物事を立ち上げ、直接競い合い、既存の道をたどるよりも先頭に立って導くことを好む傾向があります。",
    ko: "주도적인 성향의 커리어 기질 — 일을 먼저 시작하고, 직접 경쟁하며, 정해진 길을 따르기보다 앞장서서 이끄는 것을 선호합니다.",
  },
  Taurus: {
    en: "A career temperament that favors steady accumulation — building something durable over time, with a strong pull toward finance, resources, or tangible craft.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो स्थिर संचय को प्राथमिकता देता है — समय के साथ कुछ टिकाऊ बनाना, वित्त, संसाधनों या मूर्त शिल्प की ओर मजबूत झुकाव के साथ।",
    ja: "着実な積み上げを好む気質——時間をかけて長続きするものを築き、金融や資源、実際の技巧に強く惹かれる傾向があります。",
    ko: "꾸준한 축적을 선호하는 커리어 기질 — 시간을 들여 오래가는 것을 쌓아가며, 금융이나 자원, 실질적인 기술에 강하게 끌립니다.",
  },
  Gemini: {
    en: "A career temperament that favors communication and variety — writing, teaching, trade, or any work that involves constant information exchange.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो संचार और विविधता को प्राथमिकता देता है — लेखन, शिक्षण, व्यापार, या कोई भी कार्य जिसमें निरंतर सूचना का आदान-प्रदान शामिल हो।",
    ja: "コミュニケーションと多様性を好む気質——文筆、教育、商取引など、絶えず情報をやり取りする仕事に向いています。",
    ko: "소통과 다양성을 선호하는 커리어 기질 — 글쓰기, 가르치는 일, 무역, 혹은 끊임없이 정보를 주고받는 모든 일에 잘 맞습니다.",
  },
  Cancer: {
    en: "A career temperament that favors care and nurture — hospitality, food, healthcare, or roles built around looking after people.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो देखभाल और पोषण को प्राथमिकता देता है — आतिथ्य, भोजन, स्वास्थ्य सेवा, या लोगों की देखभाल पर बने कार्य।",
    ja: "ケアと養育を好む気質——接客業、食、医療、あるいは人の世話を中心とした役割に向いています。",
    ko: "돌봄과 양육을 선호하는 커리어 기질 — 접객업, 식품, 의료, 혹은 사람을 돌보는 일 중심의 역할에 잘 맞습니다.",
  },
  Leo: {
    en: "A career temperament that favors visibility and authority — public-facing roles, leadership positions, or work with a strong personal brand attached.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो दृश्यता और अधिकार को प्राथमिकता देता है — सार्वजनिक भूमिकाएं, नेतृत्व पद, या ऐसा कार्य जिसमें एक मजबूत व्यक्तिगत पहचान जुड़ी हो।",
    ja: "存在感と権威を好む気質——人前に立つ役割やリーダーの立場、強い個人ブランドを伴う仕事に向いています。",
    ko: "가시성과 권위를 선호하는 커리어 기질 — 대중 앞에 서는 역할, 리더십 자리, 또는 강한 개인 브랜드가 따르는 일에 잘 맞습니다.",
  },
  Virgo: {
    en: "A career temperament that favors precision and service — analysis, quality control, administration, or health-related work done meticulously.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो सटीकता और सेवा को प्राथमिकता देता है — विश्लेषण, गुणवत्ता नियंत्रण, प्रशासन, या सावधानीपूर्वक किया गया स्वास्थ्य-संबंधी कार्य।",
    ja: "精密さと奉仕を好む気質——分析、品質管理、事務、または綿密に行う医療関連の仕事に向いています。",
    ko: "정밀함과 봉사를 선호하는 커리어 기질 — 분석, 품질 관리, 행정, 또는 꼼꼼하게 수행하는 보건 관련 일에 잘 맞습니다.",
  },
  Libra: {
    en: "A career temperament that favors balance and partnership — law, diplomacy, design, or any work conducted jointly rather than alone.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो संतुलन और साझेदारी को प्राथमिकता देता है — कानून, कूटनीति, डिज़ाइन, या अकेले के बजाय संयुक्त रूप से किया गया कोई भी कार्य।",
    ja: "均衡とパートナーシップを好む気質——法律、外交、デザイン、あるいは一人ではなく共同で行う仕事に向いています。",
    ko: "균형과 파트너십을 선호하는 커리어 기질 — 법률, 외교, 디자인, 혹은 혼자가 아닌 함께 수행하는 일에 잘 맞습니다.",
  },
  Scorpio: {
    en: "A career temperament that favors depth and investigation — research, diagnostics, crisis work, or anything requiring going beneath the surface.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो गहराई और जांच को प्राथमिकता देता है — शोध, निदान, संकट प्रबंधन, या सतह के नीचे जाने की आवश्यकता वाला कोई भी कार्य।",
    ja: "深さと探究を好む気質——研究、診断、危機対応など、表面の下を掘り下げる必要のある仕事に向いています。",
    ko: "깊이와 탐구를 선호하는 커리어 기질 — 연구, 진단, 위기 대응, 또는 표면 아래를 파고들어야 하는 모든 일에 잘 맞습니다.",
  },
  Sagittarius: {
    en: "A career temperament that favors teaching and broad horizons — education, law, publishing, travel, or work connected to belief systems.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो शिक्षण और व्यापक क्षितिज को प्राथमिकता देता है — शिक्षा, कानून, प्रकाशन, यात्रा, या विश्वास प्रणालियों से जुड़ा कार्य।",
    ja: "教育と広い視野を好む気質——教育、法律、出版、旅行、または信念体系に関わる仕事に向いています。",
    ko: "가르침과 넓은 시야를 선호하는 커리어 기질 — 교육, 법률, 출판, 여행, 혹은 신념 체계와 관련된 일에 잘 맞습니다.",
  },
  Capricorn: {
    en: "A career temperament that favors structure and long timelines — administration, engineering, or any field where seniority is earned slowly and durably.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो संरचना और लंबी समयसीमा को प्राथमिकता देता है — प्रशासन, इंजीनियरिंग, या कोई भी क्षेत्र जहां वरिष्ठता धीरे-धीरे और स्थायी रूप से अर्जित होती है।",
    ja: "構造と長期的な時間軸を好む気質——事務、工学、または年功が徐々に、確実に積み上がる分野に向いています。",
    ko: "구조와 긴 시간축을 선호하는 커리어 기질 — 행정, 공학, 혹은 연차가 천천히, 견고하게 쌓이는 분야에 잘 맞습니다.",
  },
  Aquarius: {
    en: "A career temperament that favors systems and reform — technology, social causes, science, or work aimed at a group rather than an individual.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो प्रणालियों और सुधार को प्राथमिकता देता है — प्रौद्योगिकी, सामाजिक कार्य, विज्ञान, या व्यक्ति के बजाय समूह पर केंद्रित कार्य।",
    ja: "システムと改革を好む気質——テクノロジー、社会運動、科学、あるいは個人よりも集団を対象とした仕事に向いています。",
    ko: "시스템과 개혁을 선호하는 커리어 기질 — 기술, 사회 운동, 과학, 혹은 개인보다 집단을 대상으로 하는 일에 잘 맞습니다.",
  },
  Pisces: {
    en: "A career temperament that favors imagination and compassion — the arts, healing professions, or work with a spiritual or charitable dimension.",
    hi: "एक ऐसा व्यावसायिक स्वभाव जो कल्पना और करुणा को प्राथमिकता देता है — कला, उपचार से जुड़े पेशे, या आध्यात्मिक या धर्मार्थ आयाम वाला कार्य।",
    ja: "想像力と思いやりを好む気質——芸術、癒しに関わる職業、あるいは精神的・慈善的な側面を持つ仕事に向いています。",
    ko: "상상력과 연민을 선호하는 커리어 기질 — 예술, 치유 관련 직업, 혹은 영적이거나 자선적인 면이 있는 일에 잘 맞습니다.",
  },
};

export const D10_PLANET_SIGNIFICANCE: Record<string, BilingualText> = {
  Sun: {
    en: "Adds a pull toward authority, government, or positions where you're recognized as the one in charge.",
    hi: "यह अधिकार, सरकार, या ऐसे पदों की ओर झुकाव जोड़ता है जहां आपको प्रभारी व्यक्ति के रूप में पहचाना जाता है।",
    ja: "権威、行政、または責任者として認められる立場への傾向を加えます。",
    ko: "권위, 정부 기관, 또는 책임자로 인정받는 자리로의 성향을 더합니다.",
  },
  Moon: {
    en: "Adds a pull toward public-facing, caregiving, or emotionally responsive work — anything that reads people's moods well.",
    hi: "यह सार्वजनिक-मुखी, देखभाल करने वाले, या भावनात्मक रूप से प्रतिक्रियाशील कार्य की ओर झुकाव जोड़ता है — कुछ भी जो लोगों के मूड को अच्छी तरह पढ़ता है।",
    ja: "対人的、ケア中心、あるいは感情に敏感に応じる仕事への傾向を加えます。人の気分を読み取ることに長けた仕事です。",
    ko: "대중을 상대하거나 돌보는 일, 혹은 감정에 민감하게 반응하는 일로의 성향을 더합니다 — 사람의 기분을 잘 읽는 모든 일입니다.",
  },
  Mars: {
    en: "Adds a pull toward technical, physical, or high-stakes work — engineering, sports, surgery, defense, or anything requiring decisive action.",
    hi: "यह तकनीकी, शारीरिक, या उच्च-दांव वाले कार्य की ओर झुकाव जोड़ता है — इंजीनियरिंग, खेल, सर्जरी, रक्षा, या निर्णायक कार्रवाई की आवश्यकता वाला कुछ भी।",
    ja: "技術的、身体的、あるいは重大な局面を伴う仕事への傾向を加えます。工学、スポーツ、外科、防衛など、即断即決が求められる分野です。",
    ko: "기술적이거나 신체적인, 혹은 중대한 결단이 필요한 일로의 성향을 더합니다 — 공학, 스포츠, 외과, 국방 등 결단력이 필요한 모든 일입니다.",
  },
  Mercury: {
    en: "Adds a pull toward communication, analysis, or trade — writing, media, consulting, accounting, or technology.",
    hi: "यह संचार, विश्लेषण, या व्यापार की ओर झुकाव जोड़ता है — लेखन, मीडिया, परामर्श, लेखांकन, या प्रौद्योगिकी।",
    ja: "コミュニケーション、分析、商取引への傾向を加えます。文筆、メディア、コンサルティング、会計、テクノロジーなどです。",
    ko: "소통, 분석, 무역으로의 성향을 더합니다 — 글쓰기, 미디어, 컨설팅, 회계, 혹은 기술 분야입니다.",
  },
  Jupiter: {
    en: "Adds a pull toward teaching, counsel, or institutions — education, law, finance, or advisory roles built on accumulated knowledge.",
    hi: "यह शिक्षण, परामर्श, या संस्थानों की ओर झुकाव जोड़ता है — शिक्षा, कानून, वित्त, या संचित ज्ञान पर आधारित सलाहकार भूमिकाएं।",
    ja: "教育、助言、あるいは組織への傾向を加えます。教育、法律、金融、または蓄積された知識に基づく助言的な役割です。",
    ko: "가르침, 조언, 혹은 기관으로의 성향을 더합니다 — 교육, 법률, 금융, 혹은 축적된 지식에 기반한 자문 역할입니다.",
  },
  Venus: {
    en: "Adds a pull toward beauty, design, or relationship-based work — the arts, luxury goods, hospitality, or entertainment.",
    hi: "यह सौंदर्य, डिज़ाइन, या संबंध-आधारित कार्य की ओर झुकाव जोड़ता है — कला, विलासिता की वस्तुएं, आतिथ्य, या मनोरंजन।",
    ja: "美、デザイン、あるいは人間関係を基盤とした仕事への傾向を加えます。芸術、高級品、接客業、エンターテインメントなどです。",
    ko: "미(美), 디자인, 혹은 관계 중심 일로의 성향을 더합니다 — 예술, 명품, 접객업, 혹은 엔터테인먼트입니다.",
  },
  Saturn: {
    en: "Adds a pull toward structured, long-haul work — administration, labor, real estate, or anything built slowly and meant to last.",
    hi: "यह संरचित, दीर्घकालिक कार्य की ओर झुकाव जोड़ता है — प्रशासन, श्रम, अचल संपत्ति, या धीरे-धीरे निर्मित और टिकाऊ बनाने के लिए बनाया गया कुछ भी।",
    ja: "構造的で長期にわたる仕事への傾向を加えます。事務、労働、不動産、あるいはゆっくりと築かれ、長く続くことを意図したものです。",
    ko: "구조적이고 장기적인 일로의 성향을 더합니다 — 행정, 노동, 부동산, 혹은 천천히 쌓아 오래 유지하도록 지어진 모든 것입니다.",
  },
  Rahu: {
    en: "Adds a pull toward unconventional, foreign, or frontier-technology work — fields that didn't quite exist a generation ago.",
    hi: "यह अपरंपरागत, विदेशी, या अग्रणी-तकनीक कार्य की ओर झुकाव जोड़ता है — ऐसे क्षेत्र जो एक पीढ़ी पहले ठीक से मौजूद नहीं थे।",
    ja: "型破りな、海外に関わる、あるいは最先端技術の仕事への傾向を加えます。一世代前にはまだ存在しなかったような分野です。",
    ko: "비관습적이거나 해외 관련, 혹은 최첨단 기술 분야로의 성향을 더합니다 — 한 세대 전에는 존재하지 않았던 분야들입니다.",
  },
  Ketu: {
    en: "Adds a pull toward specialized, research-oriented, or behind-the-scenes work — roles that don't need the spotlight to matter.",
    hi: "यह विशिष्ट, अनुसंधान-उन्मुख, या पर्दे के पीछे के कार्य की ओर झुकाव जोड़ता है — ऐसी भूमिकाएं जिन्हें महत्वपूर्ण होने के लिए स्पॉटलाइट की आवश्यकता नहीं होती।",
    ja: "専門的、研究志向、あるいは表舞台に出ない仕事への傾向を加えます。注目されなくても意味を持つ役割です。",
    ko: "전문적이거나 연구 지향적인, 혹은 무대 뒤의 일로의 성향을 더합니다 — 주목받지 않아도 의미 있는 역할입니다.",
  },
};
