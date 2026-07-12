import type { PlanetEntry } from "./types";
import { planetImages } from "./asset-paths";

export const planetsIntro = {
  en: "The nine Grahas (Navagraha) are the primary actors in every Kundli. In Hindu tradition each has a presiding deity; collective worship is called Navagraha Puja. Below are the classical attributes used in chart judgment — gender, direction, dignity, and life themes.", hi: "प्रत्येक कुंडली में नौ ग्रह प्राथमिक कारक होते हैं। हिंदू परंपरा में प्रत्येक का एक इष्टदेव होता है; सामूहिक पूजा को नवग्रह पूजा कहा जाता है। चार्ट निर्णय में उपयोग की जाने वाली शास्त्रीय विशेषताएँ नीचे दी गई हैं - लिंग, दिशा, गरिमा और जीवन विषय।", ja: "9つの惑星（ナヴァ・グラハ）はすべてのクンダリーの主役です。ヒンドゥー教では各星に神格があり、「ナヴァグラハ・プージャ」として祈りが捧げられます。以下はチャート判断で用いる古典的な属性 — 性別、方角、品位、象意 — です。", ko: "9명의 Grahas(Navagraha)는 모든 Kundli의 주요 행위자입니다. 힌두교 전통에서는 각 사람마다 주재하는 신이 있습니다. 집단 예배를 나바그라하 푸자(Navagraha Puja)라고 합니다. 다음은 성별, 방향, 존엄성, 삶의 주제 등 차트 판단에 사용되는 고전적인 속성입니다.",
};

export const planets: PlanetEntry[] = [
  {
    id: "sun",
    image: planetImages.sun,
    name: { en: "Sun", hi: "सूरज", ja: "太陽", ko: "해",},
    sanskrit: { en: "Surya", hi: "सूर्य", ja: "スーリヤ", ko: "수리야",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Masculine", hi: "मदार्ना", ja: "男性", ko: "남성 명사",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Temple", hi: "मंदिर", ja: "寺院", ko: "절",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Mild malefic", hi: "हल्का अशुभ", ja: "弱い凶星", ko: "경미한 흉악함",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "East", hi: "पूर्व", ja: "東", ko: "동쪽",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Leo", hi: "लियो", ja: "獅子座", ko: "사자 별자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Aries", hi: "एआरआईएस", ja: "牡羊座", ko: "양자리",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Libra", hi: "तुला", ja: "天秤座", ko: "천칭",} },
    ],
    description: {
      en: "Surya is the king of the chart — the Atma-karaka representing soul, vitality, and conscious will. A strong Sun grants leadership, clarity, and recognition; a afflicted Sun may show ego struggles or difficulty with authority figures, especially the father.", hi: "सूर्य कुंडली का राजा है - आत्म-कारक जो आत्मा, जीवन शक्ति और चेतन इच्छा का प्रतिनिधित्व करता है। एक मजबूत सूर्य नेतृत्व, स्पष्टता और मान्यता प्रदान करता है; पीड़ित सूर्य अहंकार का संघर्ष या अधिकारियों, विशेषकर पिता के साथ कठिनाई दिखा सकता है।", ja: "スーリヤはチャートの王 — アートマ（魂）、活力、意志を表す存在です。太陽が強いとリーダーシップや名誉、自信が育まれ、弱いとエゴや父親に関するテーマが浮上することがあります。", ko: "수리야는 영혼, 활력, 의식적 의지를 나타내는 아트마카라카(Atma-karaka) 차트의 왕입니다. 강력한 Sun은 리더십, 명확성 및 인정을 부여합니다. 고통받는 태양은 권위 있는 인물, 특히 아버지와 자아 갈등이나 어려움을 보일 수 있습니다.",
    },
    significations: {
      en: "Father, health, eyesight, vitality, courage, energy, pride, soul, ego, honor, power, self-confidence, status, self-realization, government, royalty, medicine.", hi: "पिता, स्वास्थ्य, दृष्टि, जीवन शक्ति, साहस, ऊर्जा, गौरव, आत्मा, अहंकार, सम्मान, शक्ति, आत्मविश्वास, स्थिति, आत्म-बोध, सरकार, राजपरिवार, चिकित्सा।", ja: "父親、健康、視力、活力、勇気、エネルギー、プライド、魂、エゴ、名誉、権力、自信、地位、自己実現、政府、王室、薬。", ko: "아버지, 건강, 시력, 활력, 용기, 에너지, 자부심, 영혼, 자아, 명예, 힘, 자신감, 지위, 자기 실현, 정부, 왕족, 의학.",
    },
  },
  {
    id: "moon",
    image: planetImages.moon,
    name: { en: "Moon", hi: "चंद्रमा", ja: "月", ko: "달",},
    sanskrit: { en: "Chandra", hi: "चंद्रा", ja: "チャンドラ", ko: "찬드라",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Feminine", hi: "स्त्री", ja: "女性", ko: "여자 같은",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Water's edge", hi: "पानी के किनारे", ja: "水辺", ko: "물의 가장자리",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Waxing: mild benefic; waning: mild malefic", hi: "वैक्सिंग: हल्का लाभकारी; घट रहा है: हल्का अशुभ", ja: "満月に近い：弱い吉星／新月に近い：弱い凶星", ko: "왁싱: 온화한 유익함; 약해짐: 경미한 흉악함",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "Northwest", hi: "उत्तर पश्चिम", ja: "北西", ko: "북서",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Cancer", hi: "कैंसर", ja: "蟹座", ko: "암",} },
      { label: { en: "Exaltation", hi: "उच्च", ja: "高揚星座", ko: "항진",}, value: { en: "Taurus", hi: "वृषभ", ja: "牡牛座", ko: "황소자리",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Scorpio", hi: "वृश्चिक", ja: "蠍座", ko: "천갈궁",} },
    ],
    description: {
      en: "Chandra governs Manas — the fluctuating mind, emotions, and receptivity. Vedic astrology is Moon-centric: the birth Nakshatra is reckoned from the Moon. A stable Moon supports happiness and memory; a troubled Moon may show anxiety or instability in domestic life.", hi: "चंद्र मानस को नियंत्रित करता है - उतार-चढ़ाव वाले मन, भावनाओं और ग्रहणशीलता को। वैदिक ज्योतिष चंद्र-केंद्रित है: जन्म नक्षत्र की गणना चंद्रमा से की जाती है। एक स्थिर चंद्रमा खुशी और स्मृति का समर्थन करता है; अशांत चंद्रमा घरेलू जीवन में चिंता या अस्थिरता दिखा सकता है।", ja: "チャンドラはマナス（心）、感情、受容性を司ります。インド占星術は月中心であり、出生ナクシャトラも月から定められます。月が安定していると幸せや記憶力が支えられ、不安定だと心の揺れや家庭のテーマが強まります。", ko: "찬드라는 변동하는 마음, 감정, 수용성인 마나스를 관리합니다. 베다 점성술은 달 중심입니다. 즉, 나크샤트라의 탄생은 달에서 계산됩니다. 안정적인 달은 행복과 기억을 지원합니다. 문제가 있는 달은 가정 생활에 불안이나 불안정을 보일 수 있습니다.",
    },
    significations: {
      en: "Mother, fertility, heart, childhood health, family, women, spouse (for men), mind, memory, emotions, happiness, feelings, social conduct, change, prosperity, travel, water.", hi: "माँ, प्रजनन क्षमता, हृदय, बचपन का स्वास्थ्य, परिवार, महिलाएँ, जीवनसाथी (पुरुषों के लिए), मन, स्मृति, भावनाएँ, खुशी, भावनाएँ, सामाजिक आचरण, परिवर्तन, समृद्धि, यात्रा, पानी।", ja: "母親、生殖力、心臓、幼少期の健康、家族、女性、妻、心、記憶、感情、幸福、社会的行動、変化、繁栄、旅行、水。", ko: "어머니, 다산, 심장, 어린 시절의 건강, 가족, 여성, 배우자(남성의 경우), 마음, 기억, 감정, 행복, 느낌, 사회적 행동, 변화, 번영, 여행, 물.",
    },
  },
  {
    id: "mercury",
    image: planetImages.mercury,
    name: { en: "Mercury", hi: "बुध", ja: "水星", ko: "수성",},
    sanskrit: { en: "Budha", hi: "बुद्ध", ja: "ブッダ", ko: "부다",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Neuter", hi: "नपुंसक लिंग", ja: "中性", ko: "중성",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Playground, arena", hi: "खेल का मैदान, अखाड़ा", ja: "遊び場、競技場", ko: "놀이터, 경기장",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Mild benefic", hi: "हल्का लाभकारी", ja: "弱い吉星", ko: "가벼운 유익함",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "North", hi: "उत्तर", ja: "北", ko: "북쪽",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Gemini, Virgo", hi: "मिथुन, कन्या", ja: "双子座、乙女座", ko: "쌍둥이자리, 처녀자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Virgo", hi: "कन्या", ja: "乙女座", ko: "처녀 자리",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Pisces", hi: "मीन राशि", ja: "魚座", ko: "물고기",} },
    ],
    description: {
      en: "Budha is the prince of intellect — discrimination, speech, and commerce. It takes the color of planets it associates with. Well-placed Mercury gives eloquence and analytical skill; afflicted Mercury may scatter attention or create nervous tension.", hi: "बुद्ध बुद्धि, विवेक, वाणी और वाणिज्य के राजकुमार हैं। यह जिन ग्रहों के साथ जुड़ता है उनका रंग ग्रहण कर लेता है। अच्छी तरह से स्थित बुध वाक्पटुता और विश्लेषणात्मक कौशल देता है; पीड़ित बुध ध्यान भटका सकता है या तंत्रिका तनाव पैदा कर सकता है।", ja: "ブッダは知性と弁舌の王子 — 識別力、言葉、商業を司ります。合する惑星の色を借りる性質があり、良好なら論理とコミュニケーションが冴え、苦しいと散漫さや神経的な緊張が出ることがあります。", ko: "부처님은 지성, 즉 차별, 언어, 상업의 왕자입니다. 그것은 관련된 행성의 색깔을 취합니다. 잘 배치된 수성은 웅변과 분석 기술을 제공합니다. 고통받는 수성은 주의를 분산시키거나 긴장감을 조성할 수 있습니다.",
    },
    significations: {
      en: "Friends, relatives, nervous system, speech, intellect, logic, reason, education, communication, business, trade, diplomacy, mediation, dance, drama.", hi: "मित्र, रिश्तेदार, तंत्रिका तंत्र, भाषण, बुद्धि, तर्क, कारण, शिक्षा, संचार, व्यापार, व्यापार, कूटनीति, मध्यस्थता, नृत्य, नाटक।", ja: "友人、親戚、神経系、言葉、知性、論理性、合理性、教育、コミュニケーション、商業、貿易、外交、調停、舞踊、演劇。", ko: "친구, 친척, 신경계, 말, 지성, 논리, 이성, 교육, 의사소통, 사업, 무역, 외교, 중재, 춤, 드라마.",
    },
  },
  {
    id: "venus",
    image: planetImages.venus,
    name: { en: "Venus", hi: "शुक्र", ja: "金星", ko: "금성",},
    sanskrit: { en: "Shukra", hi: "शुक्र", ja: "シュクラ", ko: "슈크라",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Feminine", hi: "स्त्री", ja: "女性", ko: "여자 같은",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Bedchamber", hi: "सोने का कमरा", ja: "寝室", ko: "침실",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Benefic", hi: "शुभ", ja: "吉星", ko: "유익한",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "Southeast", hi: "दक्षिण-पूर्व", ja: "南東", ko: "남동",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Taurus, Libra", hi: "वृषभ, तुला", ja: "牡牛座、天秤座", ko: "황소자리, 천칭자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Pisces", hi: "मीन राशि", ja: "魚座", ko: "물고기",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Virgo", hi: "कन्या", ja: "乙女座", ko: "처녀 자리",} },
    ],
    description: {
      en: "Shukra is the teacher of the demons in myth — refined taste, relationship skill, and the arts. Venus blesses marriage, comfort, and aesthetic sensibility. Weak Venus may indicate delayed partnership or difficulty enjoying life's pleasures.", hi: "शुक्र मिथकों में राक्षसों के शिक्षक हैं - परिष्कृत स्वाद, संबंध कौशल और कला। शुक्र विवाह, आराम और सौंदर्य संबंधी संवेदनशीलता का आशीर्वाद देता है। कमजोर शुक्र साझेदारी में देरी या जीवन के सुखों का आनंद लेने में कठिनाई का संकेत दे सकता है।", ja: "シュクラは神話における阿修羅の師 — 美、関係性、芸術を司る吉星です。恋愛、結婚、文化的洗練を象徴し、弱まるとパートナーシップの遅れや享楽との距離が出ることがあります。", ko: "슈크라는 신화 속의 악마들, 즉 세련된 취향, 관계 기술, 예술을 가르치는 스승입니다. 금성은 결혼, 편안함, 미적 감성을 축복합니다. 약한 금성은 파트너십이 지연되거나 삶의 즐거움을 누리는 데 어려움이 있음을 나타낼 수 있습니다.",
    },
    significations: {
      en: "Spouse, partner, reproductive system, love, marriage, sensory pleasures, art, beauty, fortune, culture, luxury, gems, music, singing, poetry, commerce, entertainment, vehicles.", hi: "जीवनसाथी, साथी, प्रजनन प्रणाली, प्रेम, विवाह, संवेदी सुख, कला, सौंदर्य, भाग्य, संस्कृति, विलासिता, रत्न, संगीत, गायन, कविता, वाणिज्य, मनोरंजन, वाहन।", ja: "配偶者、パートナー、生殖系、恋愛、結婚、感覚的快楽、芸術、美、幸運、文化、贅沢、宝石、音楽、歌唱、詩、商業、娯楽、乗り物。", ko: "배우자, 파트너, 생식 기관, 사랑, 결혼, 감각적 즐거움, 예술, 아름다움, 재산, 문화, 사치, 보석, 음악, 노래, 시, 상업, 오락, 차량.",
    },
  },
  {
    id: "mars",
    image: planetImages.mars,
    name: { en: "Mars", hi: "मंगल ग्रह", ja: "火星", ko: "화성",},
    sanskrit: { en: "Mangal", hi: "मंगल", ja: "マンガル", ko: "망갈",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Masculine", hi: "मदार्ना", ja: "男性", ko: "남성 명사",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Place of fire", hi: "आग का स्थान", ja: "火のある場所", ko: "불의 장소",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Malefic", hi: "हानिकर", ja: "凶星", ko: "재앙",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "South", hi: "दक्षिण", ja: "南", ko: "남쪽",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Aries, Scorpio", hi: "मेष, वृश्चिक", ja: "牡羊座、蠍座", ko: "양자리, 전갈자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Capricorn", hi: "मकर", ja: "山羊座", ko: "염소자리",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Cancer", hi: "कैंसर", ja: "蟹座", ko: "암",} },
    ],
    description: {
      en: "Mangal is raw force — courage, competition, and the fire that cuts through obstacles. It rules siblings, engineering, and surgery. Directed well, Mars builds warriors and builders; undirected, it becomes anger, accident, or conflict.", hi: "मंगल कच्ची शक्ति है - साहस, प्रतिस्पर्धा, और आग जो बाधाओं को काटती है। यह भाई-बहन, इंजीनियरिंग और सर्जरी को नियंत्रित करता है। अच्छी तरह से निर्देशित, मंगल योद्धाओं और बिल्डरों का निर्माण करता है; अप्रत्यक्ष रूप से, यह क्रोध, दुर्घटना या संघर्ष बन जाता है।", ja: "マンガルは生の力 — 勇気、競争、障害を切り開く火です。兄弟姉妹、技術、外科とも関わります。方向づけられれば戦士や建設者を育み、制御されなければ怒りや事故、争いとなります。", ko: "망갈(Mangal)은 용기, 경쟁, 장애물을 뚫고 나가는 불 같은 원초적인 힘입니다. 그것은 형제자매, 공학, 수술을 지배합니다. 잘 지도된 화성은 전사와 건축업자를 양성합니다. 방향이 정해지지 않으면 분노, 사고, 갈등이 됩니다.",
    },
    significations: {
      en: "Siblings, energy, stamina, accidents, drive, courage, ambition, anger, passion, focus, strife, competition, martial arts, military, police, violence, strength, fire, real estate, property, enemies, technical matters.", hi: "भाई-बहन, ऊर्जा, सहनशक्ति, दुर्घटनाएं, ड्राइव, साहस, महत्वाकांक्षा, क्रोध, जुनून, फोकस, संघर्ष, प्रतिस्पर्धा, मार्शल आर्ट, सेना, पुलिस, हिंसा, ताकत, आग, अचल संपत्ति, संपत्ति, दुश्मन, तकनीकी मामले।", ja: "兄弟姉妹、エネルギー、持久力、事故、推進力、勇気、野心、怒り、情熱、集中力、闘争、競争、武術、軍事、警察、暴力、力、火、不動産、財産、敵、技術的事項。", ko: "형제자매, 에너지, 체력, 사고, 추진력, 용기, 야망, 분노, 열정, 집중력, 분쟁, 경쟁, 무술, 군대, 경찰, 폭력, 힘, 불, 부동산, 재산, 적, 기술적인 문제.",
    },
  },
  {
    id: "jupiter",
    image: planetImages.jupiter,
    name: { en: "Jupiter", hi: "बृहस्पति", ja: "木星", ko: "목성",},
    sanskrit: { en: "Guru", hi: "गुरु", ja: "グル", ko: "전문가",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Masculine", hi: "मदार्ना", ja: "男性", ko: "남성 명사",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Treasury", hi: "ख़ज़ाना", ja: "宝物庫", ko: "국고",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Benefic", hi: "शुभ", ja: "吉星", ko: "유익한",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "Northeast", hi: "ईशान कोण", ja: "北東", ko: "북동",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Sagittarius, Pisces", hi: "धनु, मीन", ja: "射手座、魚座", ko: "궁수자리, 물고기자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Cancer", hi: "कैंसर", ja: "蟹座", ko: "암",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Capricorn", hi: "मकर", ja: "山羊座", ko: "염소자리",} },
    ],
    description: {
      en: "Guru is the great benefic — wisdom, dharma, teachers, and expansion. Jupiter protects children, higher learning, and faith. Even when challenged, its aspect tends to give a saving grace or moral compass.", hi: "गुरु महान् हितकारी है - ज्ञान, धर्म, शिक्षक और विस्तार। बृहस्पति बच्चों, उच्च शिक्षा और विश्वास की रक्षा करता है। यहां तक ​​कि जब चुनौती दी जाती है, तो इसका पहलू राहत देने वाला अनुग्रह या नैतिक मार्गदर्शन देता है।", ja: "グルは最大の吉星 — 智慧、ダルマ、師、拡大を司ります。子供、高等教育、信仰を守護し、たとえ苦しくてもアスペクトによって救いや道徳の羅針盤が働くことが多いです。", ko: "구루(Guru)는 지혜, 달마, 스승, 확장이라는 위대한 유익입니다. 목성은 어린이, 고등 교육 및 신앙을 보호합니다. 도전을 받더라도 그 측면은 구원의 은혜나 도덕적 나침반을 주는 경향이 있습니다.",
    },
    significations: {
      en: "Children, grandchildren, teachers, guru, wisdom, compassion, optimism, spirituality, justice, expansion, wealth, philosophy, law, religion, scripture, higher education, discernment.", hi: "बच्चे, पोते-पोतियाँ, शिक्षक, गुरु, ज्ञान, करुणा, आशावाद, आध्यात्मिकता, न्याय, विस्तार, धन, दर्शन, कानून, धर्म, शास्त्र, उच्च शिक्षा, विवेक।", ja: "子供、孫、教師、グル、智慧、慈悲、楽観、霊性、正義、拡大、富、哲学、法、宗教、聖典、高等教育、識別力。", ko: "자녀, 손자, 교사, 전문가, 지혜, 연민, 낙천주의, 영성, 정의, 확장, 부, 철학, 법, 종교, 성서, 고등 교육, 분별력.",
    },
  },
  {
    id: "saturn",
    image: planetImages.saturn,
    name: { en: "Saturn", hi: "शनि ग्रह", ja: "土星", ko: "토성",},
    sanskrit: { en: "Shani", hi: "शॉनी", ja: "シャニ", ko: "샤니",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Neuter", hi: "नपुंसक लिंग", ja: "中性", ko: "중성",} },
      { label: { en: "Abode", hi: "धाम", ja: "場所", ko: "주소",}, value: { en: "Impure places", hi: "अशुद्ध स्थान", ja: "汚れた場所", ko: "불순한 장소",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Malefic", hi: "हानिकर", ja: "凶星", ko: "재앙",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "West", hi: "पश्चिम", ja: "西", ko: "서쪽",} },
      { label: { en: "Own signs", hi: "खुद के संकेत", ja: "支配星座", ko: "자신의 표지판",}, value: { en: "Capricorn, Aquarius", hi: "मकर, कुम्भ", ja: "山羊座、水瓶座", ko: "염소자리, 물병자리",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Libra", hi: "तुला", ja: "天秤座", ko: "천칭",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Aries", hi: "एआरआईएस", ja: "牡羊座", ko: "양자리",} },
    ],
    description: {
      en: "Shani is time, karma, and austerity — the slow grinder that teaches through delay and discipline. Saturn's gifts arrive late but endure. Its periods demand patience; resisting its lessons often prolongs hardship.", hi: "शनि समय, कर्म और तपस्या है - धीमी चक्की जो देरी और अनुशासन के माध्यम से सिखाती है। शनि के उपहार देर से आते हैं लेकिन टिके रहते हैं। इसकी अवधि धैर्य की मांग करती है; इसके पाठों का विरोध करना अक्सर कठिनाई को लम्बा खींच देता है।", ja: "シャニは時間、カルマ、苦行 — 遅れと規律を通じて教える厳しい師です。土星の恵みは遅れて来ますが長く続きます。その時期は忍耐が求められ、教えに抵抗すると試練が長引くことがあります。", ko: "샤니는 시간, 카르마, 긴축입니다. 지연과 규율을 통해 가르치는 느린 분쇄기입니다. 토성의 선물은 늦게 도착하지만 인내합니다. 그 기간에는 인내심이 필요합니다. 그 교훈에 저항하는 것은 종종 고난을 연장시킵니다.",
    },
    significations: {
      en: "Servants, elders, authority figures, longevity, bones, joints, patience, grief, hardship, humility, renunciation, endurance, suffering, obstacles, delay, hard work, disease, separation, land, agriculture, wood, metal, democracy, sorrow, fear.", hi: "नौकर, बुजुर्ग, अधिकारी व्यक्ति, दीर्घायु, हड्डियाँ, जोड़, धैर्य, दुःख, कठिनाई, विनम्रता, त्याग, धीरज, पीड़ा, बाधाएँ, देरी, कड़ी मेहनत, बीमारी, अलगाव, भूमि, कृषि, लकड़ी, धातु, लोकतंत्र, दुःख, भय।", ja: "召使、年長者、権威者、長寿、骨、関節、忍耐、悲しみ、苦難、謙虚、放棄、忍耐力、苦悩、障害、遅延、ハードワーク、疾病、別離、土地、農業、木材、金属、民主主義、悲しみ、恐れ。", ko: "종, 장로, 권위자, 장수, 뼈, 관절, 인내, 슬픔, 고난, 겸손, 포기, 인내, 고통, 장애물, 지연, 노력, 질병, 이별, 땅, 농업, 나무, 금속, 민주주의, 슬픔, 두려움.",
    },
  },
  {
    id: "rahu",
    image: planetImages.rahu,
    name: { en: "Rahu", hi: "राहु", ja: "ラーフ", ko: "라후",},
    sanskrit: { en: "Rahu", hi: "राहु", ja: "ラーフ", ko: "라후",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Feminine", hi: "स्त्री", ja: "女性", ko: "여자 같은",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Malefic", hi: "हानिकर", ja: "凶星", ko: "재앙",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "Southwest", hi: "दक्षिण पश्चिम", ja: "南西", ko: "남서",} },
      { label: { en: "Exaltation", hi: "उच्च", ja: "高揚星座", ko: "항진",}, value: { en: "Taurus", hi: "वृषभ", ja: "牡牛座", ko: "황소자리",} },
      { label: { en: "Debilitation", hi: "दुर्बलता", ja: "減衰星座", ko: "쇠약",}, value: { en: "Scorpio", hi: "वृश्चिक", ja: "蠍座", ko: "천갈궁",} },
    ],
    description: {
      en: "Rahu is the north lunar node — insatiable hunger for experience, foreignness, and unconventional paths. It amplifies material ambition and breaks taboos. Rahu periods can bring sudden rise, obsession, or confusion until integrated consciously.", hi: "राहु उत्तरी चंद्र नोड है - अनुभव, विदेशीता और अपरंपरागत रास्तों के लिए अतृप्त भूख। यह भौतिक महत्वाकांक्षा को बढ़ाता है और वर्जनाओं को तोड़ता है। राहु की अवधि सचेत रूप से एकीकृत होने तक अचानक वृद्धि, जुनून या भ्रम ला सकती है।", ja: "ラーフは月の北ノード — 飽くなき欲望、異国性、型破りな道を象徴します。物質的野心を増幅し、タブーを破ります。ラーフの時期は急上昇や執着、混乱をもたらすこともあり、意識的に統合することが鍵です。", ko: "Rahu는 북쪽 달 노드입니다. 경험, 이질성, 틀에 얽매이지 않는 길에 대한 만족할 줄 모르는 갈망입니다. 물질적 야망을 증폭시키고 금기를 깨뜨립니다. 라후 기간은 의식적으로 통합될 때까지 갑작스러운 상승, 집착 또는 혼란을 가져올 수 있습니다.",
    },
    significations: {
      en: "Unusual illnesses, frustration, phobias, inertia, compulsion, foreigners, materialism, worldly power, insatiable desire, recklessness, anomaly, sudden events, extroversion, false theories, theft, self-centeredness.", hi: "असामान्य बीमारियाँ, हताशा, भय, जड़ता, मजबूरी, विदेशी, भौतिकवाद, सांसारिक शक्ति, अतृप्त इच्छा, लापरवाही, विसंगति, अचानक घटनाएँ, बहिर्मुखता, झूठे सिद्धांत, चोरी, आत्मकेंद्रितता।", ja: "珍しい病気、挫折感、恐怖症、惰性、強迫、外国人、物質主義、世俗的な力、飽くなき欲望、向こう見ず、異常、突発的、外向的、間違った理論、盗み、自己中心的。", ko: "특이한 질병, 좌절, 공포증, 관성, 강박, 외국인, 물질주의, 세속적 권력, 만족할 수 없는 욕망, 무모함, 변칙, 갑작스러운 사건, 외향성, 거짓 이론, 절도, 자기 중심.",
    },
  },
  {
    id: "ketu",
    image: planetImages.ketu,
    name: { en: "Ketu", hi: "केतु", ja: "ケートゥ", ko: "케투",},
    sanskrit: { en: "Ketu", hi: "केतु", ja: "ケートゥ", ko: "케투",},
    attributes: [
      { label: { en: "Gender", hi: "लिंग", ja: "性別", ko: "성별",}, value: { en: "Neuter", hi: "नपुंसक लिंग", ja: "中性", ko: "중성",} },
      { label: { en: "Nature", hi: "प्रकृति", ja: "生来的吉凶", ko: "자연",}, value: { en: "Malefic", hi: "हानिकर", ja: "凶星", ko: "재앙",} },
      { label: { en: "Direction", hi: "दिशा", ja: "方角", ko: "방향",}, value: { en: "Southwest", hi: "दक्षिण पश्चिम", ja: "南西", ko: "남서",} },
      { label: { en: "Exaltation", hi: "उमंग", ja: "高揚星座", ko: "항진",}, value: { en: "Scorpio", hi: "वृश्चिक", ja: "蠍座", ko: "천갈궁",} },
      { label: { en: "Debilitation", hi: "नीच", ja: "減衰星座", ko: "쇠약",}, value: { en: "Taurus", hi: "वृषभ", ja: "牡牛座", ko: "황소자리",} },
    ],
    description: {
      en: "Ketu is the south node — detachment, past-life residue, and moksha (liberation). Where Rahu grasps outward, Ketu withdraws inward. It gives psychic sensitivity and spiritual insight, but may also bring isolation or a sense of incompleteness.", hi: "केतु दक्षिण नोड है - वैराग्य, पिछले जीवन अवशेष, और मोक्ष (मुक्ति)। जहां राहु बाहर की ओर पकड़ता है, वहीं केतु अंदर की ओर खींचता है। यह मानसिक संवेदनशीलता और आध्यात्मिक अंतर्दृष्टि देता है, लेकिन अलगाव या अपूर्णता की भावना भी ला सकता है।", ja: "ケートゥは南ノード — 離脱、過去の残滓、モークシャ（解脱）を司ります。ラーフが外へ掴むのに対し、ケートゥは内へ引きます。霊的洞察を与える一方、孤立や欠乏感をもたらすこともあります。", ko: "Ketu는 남쪽 노드입니다. 분리, 전생 잔여물 및 목샤(해방)입니다. Rahu가 바깥쪽으로 움켜쥐는 곳에서 Ketu는 안쪽으로 물러납니다. 그것은 정신적 민감성과 영적 통찰력을 제공하지만 고립감이나 불완전감을 가져올 수도 있습니다.",
    },
    significations: {
      en: "Unusual illnesses, psychic ability, intuition, esoteric interests, asceticism, deep thought, silence, liberation, enlightenment, discernment, solitude, conspiracy, occult, unusual events, spirits, lack of self, mental instability.", hi: "असामान्य बीमारियाँ, मानसिक क्षमता, अंतर्ज्ञान, गूढ़ रुचियाँ, तपस्या, गहन विचार, मौन, मुक्ति, आत्मज्ञान, विवेक, एकांत, षड्यंत्र, जादू-टोना, असामान्य घटनाएँ, आत्माएँ, स्वयं की कमी, मानसिक अस्थिरता।", ja: "珍しい病気、霊能力、直感、秘教的関心、禁欲、深い思考、無口、解脱、悟り、識別力、孤独、陰謀、オカルト、異常な出来事、霊、自身の欠如、精神の不安定。", ko: "특이한 질병, 심령 능력, 직관, 난해한 관심, 금욕주의, 깊은 생각, 침묵, 해방, 깨달음, 분별력, 고독, 음모, 신비주의, 특이한 사건, 영혼, 무아, 정신적 불안정.",
    },
  },
];
