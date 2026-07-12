import type { BilingualText, ContentBlock } from "./types";

export const introHero: BilingualText = {
  en: "Jyotish — The Science of Light", hi: "ज्योतिष - प्रकाश का विज्ञान", ja: "ジョーティッシュ — 光の科学", ko: "Jyotish — 빛의 과학",
};

export const introSubtitle: BilingualText = {
  en: "A comprehensive introduction to Indian Vedic astrology: its philosophy, chart forms, and the cosmic map behind the Kundli.", hi: "भारतीय वैदिक ज्योतिष का व्यापक परिचय: इसका दर्शन, चार्ट रूप और कुंडली के पीछे का ब्रह्मांडीय मानचित्र।", ja: "インドのヴェーダ占星術の哲学、チャート形式、クンダリーに映る宇宙の地図まで — 包括的な入門ガイド。", ko: "인도 베다 점성술에 대한 포괄적인 소개: 철학, 차트 형태, Kundli 뒤에 있는 우주 지도.",
};

export const introBlocks: ContentBlock[] = [
  {
    title: {
      en: "What Is Jyotish?", hi: "ज्योतिष क्या है?", ja: "ジョーティッシュとは", ko: "조티쉬(Jyotish)란 무엇인가?",
    },
    paragraphs: [
      {
        en: "Jyotish (ज्योतिष) is one of the knowledge systems of the Vedic tradition, alongside Ayurveda and Yoga. The word combines Jyoti (light) and Isha (lord or soul), and is widely understood as the \"science of light\" — the study of how celestial radiance mirrors human life.", hi: "ज्योतिष (ज्योतिष) आयुर्वेद और योग के साथ-साथ वैदिक परंपरा की ज्ञान प्रणालियों में से एक है। यह शब्द ज्योति (प्रकाश) और ईशा (भगवान या आत्मा) को जोड़ता है, और इसे व्यापक रूप से \"प्रकाश के विज्ञान\" के रूप में समझा जाता है - यह अध्ययन कि कैसे दिव्य चमक मानव जीवन को प्रतिबिंबित करती है।", ja: "ジョーティッシュ（ज्योतिष）は、アーユルヴェーダやヨガと同じく、ヴェーダの伝統思想における知識体系のひとつです。「Jyoti＝光」と「Isha＝神（魂）」が組み合わさった言葉で、一般に「光の科学」として知られています。", ko: "조티쉬(Jyotish)는 아유르베다, 요가와 함께 베다 전통의 지식 체계 중 하나입니다. 이 단어는 Jyoti(빛)와 Isha(영주 또는 영혼)를 결합한 것으로, 천상의 빛이 인간의 삶을 어떻게 반영하는지에 대한 연구인 \"빛의 과학\"으로 널리 이해됩니다.",
      },
      {
        en: "Originally called \"star science,\" Jyotish examines the motion of heavenly bodies. Its lineage is ancient, transmitted orally and in Sanskrit texts long before modern astronomy. Practitioners read the sky not as random fate, but as a patterned field of karma — tendencies that can be understood, refined, and worked with.", hi: "मूल रूप से \"तारा विज्ञान\" कहा जाने वाला ज्योतिष खगोलीय पिंडों की गति की जांच करता है। इसकी वंशावली प्राचीन है, जो आधुनिक खगोल विज्ञान से बहुत पहले मौखिक रूप से और संस्कृत ग्रंथों में प्रसारित हुई थी। अभ्यासकर्ता आकाश को यादृच्छिक भाग्य के रूप में नहीं, बल्कि कर्म के एक पैटर्न वाले क्षेत्र के रूप में पढ़ते हैं - ऐसी प्रवृत्तियाँ जिन्हें समझा जा सकता है, परिष्कृत किया जा सकता है और उनके साथ काम किया जा सकता है।", ja: "本来のジョーティッシュは「星学」と呼ばれる天体の動きを研究する学問であり、その歴史はヴェーダと同様に古くから伝承されてきたものといわれます。空を盲目的な運命ではなく、理解し、磨き、向き合えるカルマのパターンとして読み解きます。", ko: "원래는 \"별 과학\"이라고 불렸던 Jyotish는 천체의 움직임을 조사합니다. 그 계보는 고대이며, 현대 천문학이 나오기 오래 전에 구전과 산스크리트어 문헌으로 전해졌습니다. 실무자들은 하늘을 무작위 운명이 아니라 패턴화된 카르마 장, 즉 이해하고, 정제하고, 함께 일할 수 있는 경향으로 봅니다.",
      },
    ],
  },
  {
    title: {
      en: "The Building Blocks of a Chart", hi: "चार्ट के बिल्डिंग ब्लॉक", ja: "チャートを構成する要素", ko: "차트의 구성 요소",
    },
    paragraphs: [
      {
        en: "A Jyotish chart integrates nine Grahas (planets), twelve Rashis (signs), and twenty-seven Nakshatras (lunar mansions). The nine Grahas are the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, plus Rahu and Ketu — the lunar nodes where the Moon's path crosses the ecliptic.", hi: "एक ज्योतिष चार्ट नौ ग्रह (ग्रह), बारह राशि (संकेत), और सत्ताईस नक्षत्र (चंद्र हवेली) को एकीकृत करता है। नौ ग्रह सूर्य, चंद्रमा, बुध, शुक्र, मंगल, बृहस्पति, शनि, साथ ही राहु और केतु हैं - चंद्र नोड्स जहां चंद्रमा का मार्ग क्रांतिवृत्त को पार करता है।", ja: "ジョーティッシュでは、太陽系の星々（太陽、月、水星、金星、火星、木星、土星）と、太陽と月の軌道の交点であるラーフとケートゥを加えた9つの惑星（ナヴァ・グラハ）、12の星座（ラーシ）、天空を月の移動距離で27分割した領域（ナクシャトラ）を使って分析していきます。", ko: "Jyotish 차트는 9개의 Grahas(행성), 12개의 Rashis(표시) 및 27개의 Nakshatras(달 저택)를 통합합니다. 9개의 그라하(Graha)는 태양, 달, 수성, 금성, 화성, 목성, 토성, 그리고 달의 경로가 황도를 가로지르는 달 노드인 라후(Rahu)와 케투(Ketu)입니다.",
      },
      {
        en: "These cosmic elements are believed to exert a profound influence on life and destiny. The configuration at birth — which Graha sits in which Rashi and Nakshatra — is thought to echo one's innate temperament, challenges, and gifts.", hi: "ऐसा माना जाता है कि ये ब्रह्मांडीय तत्व जीवन और भाग्य पर गहरा प्रभाव डालते हैं। जन्म के समय का विन्यास - कौन सा ग्रह किस राशि और नक्षत्र में बैठता है - ऐसा माना जाता है कि यह किसी के जन्मजात स्वभाव, चुनौतियों और उपहारों को प्रतिध्वनित करता है।", ja: "ジョーティッシュにおいてこれらの宇宙の要素は、私たちの生命や運命に大きな影響を与えているとされます。特に誕生時における宇宙の状態、つまり惑星や星座の配置は個人の傾向や性質と密接に関わっていると考えられています。", ko: "이러한 우주 요소는 삶과 운명에 깊은 영향을 미치는 것으로 믿어집니다. Graha가 앉아 있는 Rashi와 Nakshatra의 출생 구성은 타고난 기질, 도전, 재능을 반영하는 것으로 생각됩니다.",
      },
    ],
  },
  {
    title: {
      en: "The Kundli (Birth Chart)", hi: "कुंडली (जन्म कुंडली)", ja: "クンダリー（出生図）", ko: "Kundli (출생 차트)",
    },
    paragraphs: [
      {
        en: "Planetary positions are drawn on a wheel divided into twelve Bhavas (houses). This diagram — the Kundli — is the Indian equivalent of the Western horoscope. Houses represent life domains: self, wealth, siblings, home, children, health, partnership, longevity, fortune, career, gains, and release.", hi: "ग्रहों की स्थिति बारह भावों (घरों) में विभाजित एक चक्र पर खींची गई है। यह आरेख - कुंडली - पश्चिमी कुंडली का भारतीय समकक्ष है। घर जीवन के क्षेत्रों का प्रतिनिधित्व करते हैं: स्वयं, धन, भाई-बहन, घर, बच्चे, स्वास्थ्य, साझेदारी, दीर्घायु, भाग्य, करियर, लाभ और रिहाई।", ja: "ジョーティッシュでは、9つの惑星と12の星座、27のナクシャトラにこれらの影響を集約させ、星図として表します。天空360度を12の室（バーヴァ）に分割した図面に惑星や星座を描いたものを「クンダリー（Kundli）」と呼び、西洋占星術のホロスコープに相当します。", ko: "행성의 위치는 12개의 Bhavas(하우스)로 나누어진 바퀴에 그려집니다. 이 다이어그램(Kundli)은 서양 별자리에 해당하는 인도의 다이어그램입니다. 주택은 자신, 부, 형제자매, 집, 자녀, 건강, 파트너십, 장수, 행운, 직업, 이득 및 해방과 같은 삶의 영역을 나타냅니다.",
      },
      {
        en: "Observation follows the ecliptic — the Sun's apparent annual path. Unlike Western tropical astrology, which anchors Aries 0° to the vernal equinox, Jyotish uses the sidereal zodiac aligned with fixed star constellations.", hi: "अवलोकन क्रांतिवृत्त का अनुसरण करता है - सूर्य का स्पष्ट वार्षिक पथ। पश्चिमी उष्णकटिबंधीय ज्योतिष के विपरीत, जो मेष राशि को वसंत विषुव से 0° पर स्थिर करता है, ज्योतिष स्थिर तारा नक्षत्रों के साथ संरेखित नक्षत्र राशि चक्र का उपयोग करता है।", ja: "インド占星術において9つの惑星や12の星座は、黄道という天空の太陽の軌道上で観察されます。黄道は天空を1日で1周していくという考え方は西洋占星術と大きく変わりません。", ko: "관측은 태양의 명백한 연간 경로인 황도를 따릅니다. 양자리를 춘분점에 0°로 고정시키는 서양 열대 점성술과 달리 조티쉬는 항성 별자리에 정렬된 항성 황도대를 사용합니다.",
      },
    ],
  },
  {
    title: {
      en: "Ayanamsha — Sidereal vs. Tropical", hi: "अयनांश - नाक्षत्र बनाम उष्णकटिबंधीय", ja: "アヤナムシャ — サイデリアル方式とトロピカル方式", ko: "Ayanamsha — 항성 대 열대",
    },
    paragraphs: [
      {
        en: "Western astrology begins Aries at the spring equinox (the intersection of the celestial equator and ecliptic). Because Earth's axis precesses, that equinox drifts roughly one degree every seventy years. Jyotish instead measures from the actual constellation backdrop — the sidereal method.", hi: "पश्चिमी ज्योतिष मेष राशि से वसंत विषुव (आकाशीय भूमध्य रेखा और क्रांतिवृत्त का प्रतिच्छेदन) पर शुरू होता है। क्योंकि पृथ्वी की धुरी आगे बढ़ती है, विषुव हर सत्तर साल में लगभग एक डिग्री खिसक जाता है। ज्योतिष इसके बजाय वास्तविक नक्षत्र पृष्ठभूमि - नक्षत्र विधि - से मापता है।", ja: "インド占星術が天体の位置を実際の星座の位置に基づいて起点（牡羊座の0度）を定めるのに対し、西洋占星術は太陽暦の春分点から牡羊座の0度を始めます。この春分点は地球の地軸が少しずつずれているため、約70年に1度程ずれていっています。", ko: "서양 점성술은 춘분점(천구의 적도와 황도의 교차점)에 양자리를 시작합니다. 지구의 축이 세차운동을 하기 때문에 그 분점은 대략 70년마다 1도씩 변합니다. 대신 Jyotish는 실제 별자리 배경, 즉 항성 방법을 사용하여 측정합니다.",
      },
      {
        en: "The angular gap between tropical and sidereal reckoning is called Ayanamsha. Today it is approximately 23–24 degrees, which is why your Vedic rising sign and planet positions often differ from Western charts for the same birth data.", hi: "उष्णकटिबंधीय और नाक्षत्र गणना के बीच के कोणीय अंतर को अयनांश कहा जाता है। आज यह लगभग 23-24 डिग्री है, यही कारण है कि आपके वैदिक उदय चिन्ह और ग्रह की स्थिति अक्सर समान जन्म डेटा के लिए पश्चिमी चार्ट से भिन्न होती है।", ja: "インド占星術ではこの角度差を「アヤナムシャ」と呼びます。現在は約23〜24度のずれがあり、同じ出生データでもインド式と西洋式で星座の位置が異なることがあります。インド占星術は「サイデリアル方式」、西洋占星術は「トロピカル方式」と呼ばれます。", ko: "열대 및 항성 계산 사이의 각도 간격을 Ayanamsha라고 합니다. 오늘날 그것은 약 23-24도이므로 동일한 출생 데이터에 대해 베다 상승 별자리와 행성 위치가 서양 차트와 종종 다른 이유가 있습니다.",
      },
    ],
  },
  {
    title: {
      en: "North Indian vs. South Indian Charts", hi: "उत्तर भारतीय बनाम दक्षिण भारतीय चार्ट", ja: "北インド式と南インド式のチャート", ko: "북인도 대 남인도 차트",
    },
    paragraphs: [
      {
        en: "The North Indian (diamond) chart places the Ascendant (Lagna) at the top center and arranges signs counter-clockwise. House positions are fixed; sign numbers shift according to the rising sign. This makes house topics immediately visible.", hi: "उत्तर भारतीय (हीरा) चार्ट लग्न (लग्न) को शीर्ष केंद्र में रखता है और संकेतों को वामावर्त व्यवस्थित करता है। सदन की स्थिति निश्चित है; चिन्ह संख्याएँ बढ़ते चिन्ह के अनुसार बदलती रहती हैं। इससे घर के विषय तुरंत दिखाई देने लगते हैं।", ja: "北インド式は、アセンダント（ASC）を中央上部に配置して、反時計回りに12星座を置いていきます。ハウスの位置が固定されており、牡羊座を1として順に数字を割り当て、対応するハウスに記載していきます。", ko: "북인도(다이아몬드) 차트는 Ascendant(Lagna)를 상단 중앙에 배치하고 표지판을 시계 반대 방향으로 배열합니다. 하우스 포지션은 고정되어 있습니다. 부호 번호는 상승 부호에 따라 이동합니다. 이렇게 하면 하우스 주제가 즉시 표시됩니다.",
      },
      {
        en: "The South Indian (square) chart fixes the twelve signs clockwise in permanent positions. Only the Ascendant and house cusps move per native. House placement is less obvious at a glance, but planetary sign relationships, dignities, and Drishti (aspects) read more clearly — which is why many traditional teachers prefer it.", hi: "दक्षिण भारतीय (वर्गाकार) चार्ट बारह चिन्हों को स्थायी स्थिति में दक्षिणावर्त दिशा में स्थिर करता है। प्रति जातक केवल लग्न और गृह कुंडली ही गतिशील होती है। घर का स्थान एक नज़र में कम स्पष्ट होता है, लेकिन ग्रहों के संकेत संबंध, गरिमा और दृष्टि (पहलू) अधिक स्पष्ट रूप से पढ़ते हैं - यही कारण है कि कई पारंपरिक शिक्षक इसे पसंद करते हैं।", ja: "南インド式では12の星座が固定されており、各星座は時計回りに配置されています。アセンダントの位置が一人ひとり変わり、ハウスの位置も変わります。惑星と星座の関係（吉凶や強弱）やドリシュティ（アスペクト）がわかりやすいメリットがあります。", ko: "남부 인도(정사각형) 차트는 12개의 기호를 시계 방향으로 고정된 위치에 고정합니다. 네이티브별로 어센던트와 하우스 커스프만 이동합니다. 집 배치는 한 눈에 덜 분명하지만 행성의 별자리 관계, 존엄성 및 Drishti(측면)는 더 명확하게 읽혀집니다. 이것이 바로 많은 전통적인 교사가 이를 선호하는 이유입니다.",
      },
    ],
  },
  {
    title: {
      en: "Macrocosm and Microcosm", hi: "स्थूल जगत और सूक्ष्म जगत", ja: "大宇宙と小宇宙", ko: "대우주와 소우주",
    },
    paragraphs: [
      {
        en: "Vedic philosophy holds that the macrocosm (the universe) and microcosm (the individual) share the same essence. Jyotish extends this: the human body maps to the zodiac. Planetary motions in the chart correspond to conditions in the body and mind; celestial rhythms are said to influence physical balance and the flow of life events — much as seasonal and geographic factors influence Ayurvedic doshas.", hi: "वैदिक दर्शन मानता है कि स्थूल जगत (ब्रह्मांड) और सूक्ष्म जगत (व्यक्ति) का सार एक ही है। ज्योतिष इसका विस्तार करता है: मानव शरीर राशि चक्र के अनुसार मानचित्र बनाता है। चार्ट में ग्रहों की गति शरीर और मन की स्थितियों के अनुरूप है; कहा जाता है कि आकाशीय लय भौतिक संतुलन और जीवन की घटनाओं के प्रवाह को प्रभावित करती है - ठीक उसी तरह जैसे मौसमी और भौगोलिक कारक आयुर्वेदिक दोषों को प्रभावित करते हैं।", ja: "ヴェーダ思想では、この世界を織りなす「大宇宙」と、私たち個々の生命としての「小宇宙」は、その本質において同じものであると考えられます。ジョーティッシュでも人体の各部は宇宙や天体の構成に対応していると考え、チャートに表れる惑星の動きは人体の在り様にも照応するものと捉えられます。", ko: "베다 철학은 대우주(우주)와 소우주(개인)가 동일한 본질을 공유한다고 주장합니다. Jyotish는 이것을 확장하여 인체가 황도대에 매핑됩니다. 차트의 행성 움직임은 몸과 마음의 상태에 해당합니다. 천상의 리듬은 계절적, 지리적 요인이 아유르베다 도샤에 영향을 미치는 것처럼 신체적 균형과 삶의 흐름에 영향을 미친다고 합니다.",
      },
      {
        en: "In Ayurveda, bodily doshas respond to season, region, and lifestyle. In Jyotish, the arrangement and movement of Grahas similarly touches bodily equilibrium and the arc of one's life path.", hi: "आयुर्वेद में, शारीरिक दोष मौसम, क्षेत्र और जीवनशैली के अनुसार प्रतिक्रिया करते हैं। ज्योतिष में, ग्रहों की व्यवस्था और गति इसी तरह शारीरिक संतुलन और किसी के जीवन पथ के चाप को छूती है।", ja: "アーユルヴェーダにおいて身体のドーシャが季節や地域から影響を受けるのと同じように、ジョーティッシュでは天空の星々の配置や動きが、身体のバランスはもちろん、人生の流れにも影響を及ぼすと考えられています。", ko: "Ayurveda에서는 신체의 도샤가 계절, 지역, 라이프스타일에 반응합니다. Jyotish에서 Grahas의 배열과 움직임은 비슷하게 신체의 균형과 삶의 경로에 영향을 미칩니다.",
      },
    ],
  },
];

