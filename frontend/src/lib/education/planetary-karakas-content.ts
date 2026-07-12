import type { WisdomArticle } from "./types";

/** Planetary significators (Karakas) — physiological, psychological, and sociological aspects */
export const planetaryKarakasArticle: WisdomArticle = {
  id: "planetary-karakas",
  section: "planets",
  title: {
    en: "Planets and Their Significations", hi: "ग्रह और उनका महत्व", ja: "惑星とその象意（カラカ）", ko: "행성과 그 의미",
  },
  related: ["planetary-strengths", "natural-benefics-malefics", "navagraha-guide"],
  blocks: [
    {
      type: "heading",
      level: 2,
      text: {
        en: "Planets and Their Significations", hi: "ग्रह और उनका महत्व", ja: "惑星とその象意（カラカ）", ko: "행성과 그 의미",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Summary: Planetary significators (Karakas) covering physiological, psychological, and sociological aspects of a person. Includes an explanation of how planetary placement in a horoscope influences these significations.", hi: "सारांश: ग्रह कारक (कारक) जो किसी व्यक्ति के शारीरिक, मनोवैज्ञानिक और समाजशास्त्रीय पहलुओं को कवर करते हैं। इसमें यह स्पष्टीकरण शामिल है कि कुंडली में ग्रहों की स्थिति इन अर्थों को कैसे प्रभावित करती है।", ja: "概要: 個人の生理的・心理的・社会的側面を表す惑星の象意（カラカ）。ホロスコープにおける惑星の配置がこれらの象意にどのように影響するかについても説明します。", ko: "요약: 사람의 생리적, 심리적, 사회학적 측면을 다루는 행성적 의미(Karakas). 별자리에서 행성의 위치가 이러한 의미에 어떻게 영향을 미치는지에 대한 설명이 포함되어 있습니다.",
      },
    },
    {
      type: "heading",
      level: 3,
      text: {
        en: "Planets as Physiological, Psychological, and Sociological Significators", hi: "शारीरिक, मनोवैज्ञानिक और समाजशास्त्रीय महत्व के रूप में ग्रह", ja: "生理・心理・社会の象意としての惑星", ko: "생리적, 심리적, 사회적 상징으로서의 행성",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "In Vedic astrology, planets serve as significators (Karakas) for a variety of physiological, psychological, and sociological factors connected to the individual.", hi: "वैदिक ज्योतिष में, ग्रह व्यक्ति से जुड़े विभिन्न शारीरिक, मनोवैज्ञानिक और सामाजिक कारकों के लिए कारक (कारक) के रूप में कार्य करते हैं।", ja: "ヴェーダ占星術では、惑星は個人に関連するさまざまな生理的・心理的・社会的要因の象意（カラカ）として機能します。", ko: "베다 점성술에서 행성은 개인과 관련된 다양한 생리적, 심리적, 사회학적 요인에 대한 의미자(카라카스) 역할을 합니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Vedic astrology views the entire cosmos and everyone within it as part of one interconnected whole. Within this framework, planetary positions at the time of birth encode information about a person's unfolding karma. The astrologer's task is to interpret this coded information and turn it into meaningful predictions.", hi: "वैदिक ज्योतिष पूरे ब्रह्मांड और इसके भीतर के सभी लोगों को एक दूसरे से जुड़े पूरे हिस्से के रूप में देखता है। इस ढांचे के भीतर, जन्म के समय ग्रहों की स्थिति किसी व्यक्ति के प्रकट होने वाले कर्म के बारे में जानकारी देती है। ज्योतिषी का कार्य इस कोडित जानकारी की व्याख्या करना और उसे सार्थक भविष्यवाणियों में बदलना है।", ja: "ヴェーダ占星術は、宇宙全体とその中のすべての人を相互につながった一つの全体の一部と見なします。この枠組みの中で、出生時の惑星の位置は、その人の展開するカルマに関する情報を符号化しています。占星術師の仕事は、この符号化された情報を解釈し、意味のある予測に変えることです。", ko: "베다 점성술은 전체 우주와 그 안에 있는 모든 사람을 하나의 상호 연결된 전체의 일부로 봅니다. 이 프레임워크 내에서 출생 당시의 행성 위치는 개인의 카르마 전개에 대한 정보를 암호화합니다. 점성가의 임무는 이 암호화된 정보를 해석하고 이를 의미 있는 예측으로 바꾸는 것입니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "A core part of reading a chart is understanding what each planet represents. Below is a basic overview:", hi: "चार्ट पढ़ने का मुख्य हिस्सा यह समझना है कि प्रत्येक ग्रह क्या दर्शाता है। नीचे एक बुनियादी अवलोकन है:", ja: "チャートを読む上での核心は、各惑星が何を表すかを理解することです。以下は基本的な概要です。", ko: "차트를 읽는 핵심 부분은 각 행성이 무엇을 나타내는지 이해하는 것입니다. 다음은 기본 개요입니다.",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Sun (Surya)", hi: "सूर्य (सूर्य)", ja: "太陽（スーリヤ）", ko: "태양(수리야)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Health, eyesight, general vitality", hi: "• शारीरिक: स्वास्थ्य, दृष्टि, सामान्य जीवन शक्ति", ja: "• 生理: 健康、視力、全般的な活力", ko: "• 생리적: 건강, 시력, 전반적인 활력",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Power and influence, self-confidence, status", hi: "• मनोवैज्ञानिक: शक्ति और प्रभाव, आत्मविश्वास, स्थिति", ja: "• 心理: 力と影響力、自信、地位", ko: "• 심리적: 권력과 영향력, 자신감, 지위",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Father", hi: "• समाजशास्त्र: पिता", ja: "• 社会: 父親", ko: "• 사회학: 아버지",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Self-realization, government institutions", hi: "• अन्य: आत्मबोध, सरकारी संस्थाएँ", ja: "• その他: 自己実現、政府機関", ko: "• 기타 : 자아실현, 정부기관",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Moon (Chandra)", hi: "चंद्रमा (चंद्र)", ja: "月（チャンドラ）", ko: "문(찬드라)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Fertility, heart, childhood health", hi: "• शारीरिक: प्रजनन क्षमता, हृदय, बचपन का स्वास्थ्य", ja: "• 生理: 生殖力、心臓、幼少期の健康", ko: "• 생리: 생식능력, 심장, 아동기 건강",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Mind, memory, emotions, happiness", hi: "• मनोवैज्ञानिक: मन, स्मृति, भावनाएं, खुशी", ja: "• 心理: 心、記憶、感情、幸福", ko: "• 심리적: 정신, 기억, 감정, 행복",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Mother", hi: "• समाजशास्त्र: माँ", ja: "• 社会: 母親", ko: "• 사회학: 어머니",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Prosperity, travel, water", hi: "• अन्य: समृद्धि, यात्रा, पानी", ja: "• その他: 繁栄、旅行、水", ko: "• 기타: 번영, 여행, 물",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Mars (Mangala)", hi: "मंगल (मंगल)", ja: "火星（マンガル）", ko: "화성(망갈라)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Energy, stamina, accidents", hi: "• शारीरिक: ऊर्जा, सहनशक्ति, दुर्घटनाएँ", ja: "• 生理: エネルギー、持久力、事故", ko: "• 생리적: 에너지, 체력, 사고",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Drive, courage, ambition, anger", hi: "• मनोवैज्ञानिक: ड्राइव, साहस, महत्वाकांक्षा, क्रोध", ja: "• 心理: 推進力、勇気、野心、怒り", ko: "• 심리적: 추진력, 용기, 야망, 분노",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Siblings (some say younger siblings specifically)", hi: "• समाजशास्त्रीय: भाई-बहन (कुछ लोग विशेष रूप से छोटे भाई-बहन कहते हैं)", ja: "• 社会: 兄弟姉妹（特に弟妹とする説もある）", ko: "• 사회학: 형제자매(일부에서는 구체적으로 동생이라고 함)",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Military, police, enemies, property, technical matters", hi: "• अन्य: सेना, पुलिस, दुश्मन, संपत्ति, तकनीकी मामले", ja: "• その他: 軍事、警察、敵、不動産、技術的事項", ko: "• 기타: 군대, 경찰, 적, 재산, 기술 문제",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Mercury (Buddha)", hi: "बुध (बुद्ध)", ja: "水星（ブッダ）", ko: "수성(부처)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Nervous system, speech", hi: "• शारीरिक: तंत्रिका तंत्र, वाणी", ja: "• 生理: 神経系、言語", ko: "• 생리: 신경계, 언어",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Logic, intellect, education", hi: "• मनोवैज्ञानिक: तर्क, बुद्धि, शिक्षा", ja: "• 心理: 論理、知性、教育", ko: "• 심리학: 논리, 지성, 교육",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Friends", hi: "• समाजशास्त्रीय: मित्रो", ja: "• 社会: 友人", ko: "• 사회학: 친구",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Business, communication, dance, drama", hi: "• अन्य: व्यवसाय, संचार, नृत्य, नाटक", ja: "• その他: 商業、コミュニケーション、舞踊、演劇", ko: "• 기타: 비즈니스, 커뮤니케이션, 댄스, 드라마",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Jupiter (Guru)", hi: "बृहस्पति (गुरु)", ja: "木星（グル）", ko: "목성(구루)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Body fat", hi: "• शारीरिक: शारीरिक वसा", ja: "• 生理: 体脂肪", ko: "• 생리적: 체지방",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Wisdom, compassion, optimism, spirituality", hi: "• मनोवैज्ञानिक: बुद्धि, करुणा, आशावाद, आध्यात्मिकता", ja: "• 心理: 智慧、慈悲、楽観、霊性", ko: "• 심리적: 지혜, 연민, 낙천주의, 영성",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Children, relationship with one's Guru", hi: "• समाजशास्त्र: बच्चे, किसी के गुरु के साथ संबंध", ja: "• 社会: 子供、グルとの関係", ko: "• 사회학: 어린이, 전문가와의 관계",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Wealth, teachers, philosophy, law, religion", hi: "• अन्य: धन, शिक्षक, दर्शन, कानून, धर्म", ja: "• その他: 富、教師、哲学、法、宗教", ko: "• 기타: 부, 교사, 철학, 법률, 종교",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Venus (Shukra)", hi: "शुक्र (शुक्र)", ja: "金星（シュクラ）", ko: "비너스(슈크라)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Reproductive system", hi: "• शारीरिक: प्रजनन प्रणाली", ja: "• 生理: 生殖系", ko: "• 생리: 생식계",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Sensory pleasures", hi: "• मनोवैज्ञानिक: संवेदी सुख", ja: "• 心理: 感覚的な快楽", ko: "• 심리적: 감각적 즐거움",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Spouse", hi: "• समाजशास्त्र: जीवनसाथी", ja: "• 社会: 配偶者", ko: "• 사회학: 배우자",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Luxury, singing, poetry, commerce", hi: "• अन्य: विलासिता, गायन, कविता, वाणिज्य", ja: "• その他: 贅沢、歌唱、詩、商業", ko: "• 기타: 사치, 노래, 시, 상업",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Saturn (Shani)", hi: "शनि (शनि)", ja: "土星（シャニ）", ko: "토성(샤니)",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Longevity, bones, joints", hi: "• शारीरिक: दीर्घायु, हड्डियाँ, जोड़", ja: "• 生理: 長寿、骨、関節", ko: "• 생리적: 장수, 뼈, 관절",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Patience, grief, hardship, humility, renunciation", hi: "• मनोवैज्ञानिक: धैर्य, दुःख, कठिनाई, विनम्रता, त्याग", ja: "• 心理: 忍耐、悲しみ、苦難、謙虚、放棄", ko: "• 심리적: 인내, 슬픔, 고난, 겸손, 포기",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: Servants, elders, figures of authority", hi: "• समाजशास्त्रीय: नौकर, बुजुर्ग, प्राधिकारी व्यक्ति", ja: "• 社会: 召使、年長者、権威者", ko: "• 사회학적: 종, 장로, 권위 있는 인물",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Delays, limitations, land, agriculture, wood, metal", hi: "• अन्य: देरी, सीमाएँ, भूमि, कृषि, लकड़ी, धातु", ja: "• その他: 遅延、制限、土地、農業、木材、金属", ko: "• 기타: 지연, 제한, 토지, 농업, 목재, 금속",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Rahu", hi: "राहु", ja: "ラーフ", ko: "라후",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Unusual illnesses", hi: "• शारीरिक: असामान्य बीमारियाँ", ja: "• 生理: 珍しい病気", ko: "• 생리: 특이한 질병",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Frustration, phobias, inertia, compulsion", hi: "• मनोवैज्ञानिक: निराशा, भय, जड़ता, मजबूरी", ja: "• 心理: 挫折感、恐怖症、惰性、強迫", ko: "• 심리적: 좌절, 공포증, 무기력, 강박",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: None (some say: paternal grandfather)", hi: "• समाजशास्त्रीय: कोई नहीं (कुछ लोग कहते हैं: पितामह)", ja: "• 社会: なし（父方の祖父とする説もある）", ko: "• 사회학적: 없음(일부는 친할아버지라고 함)",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Worldly power and gains, theft", hi: "• अन्य: सांसारिक शक्ति और लाभ, चोरी", ja: "• その他: 世俗的な力と利益、盗み", ko: "• 기타: 세속적인 권력과 이득, 절도",
      },
    },
    {
      type: "heading",
      level: 3,
      text: { en: "Ketu", hi: "केतु", ja: "ケートゥ", ko: "케투",},
    },
    {
      type: "paragraph",
      text: {
        en: "• Physiological: Unusual illnesses", hi: "• शारीरिक: असामान्य बीमारियाँ", ja: "• 生理: 珍しい病気", ko: "• 생리: 특이한 질병",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Psychological: Psychic ability, intuition, esoteric interests", hi: "• मनोवैज्ञानिक: मानसिक क्षमता, अंतर्ज्ञान, गूढ़ रुचियां", ja: "• 心理: 霊能力、直感、秘教的関心", ko: "• 심리적: 정신적 능력, 직관, 난해한 관심",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Sociological: None (some say: maternal grandfather)", hi: "• समाजशास्त्रीय: कोई नहीं (कुछ कहते हैं: नाना)", ja: "• 社会: なし（母方の祖父とする説もある）", ko: "• 사회학: 없음(일부: 외할아버지)",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "• Other: Enlightenment, unusual events, spirits and ghosts", hi: "• अन्य: आत्मज्ञान, असामान्य घटनाएँ, आत्माएँ और भूत", ja: "• その他: 悟り、異常な出来事、霊や幽霊", ko: "• 기타: 깨달음, 특이한 사건, 영혼과 유령",
      },
    },
    {
      type: "heading",
      level: 3,
      text: {
        en: "Planetary Placement Influences These Significations — Positively or Negatively", hi: "ग्रहों की स्थिति इन राशियों को प्रभावित करती है - सकारात्मक या नकारात्मक", ja: "惑星の配置が象意に与える影響 — 良い面と悪い面", ko: "행성 배치는 이러한 의미에 긍정적으로 또는 부정적으로 영향을 미칩니다",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "When a planet is \"well placed\" in a birth chart, all of its associated significations tend to manifest positively for that individual.", hi: "जब कोई ग्रह जन्म कुंडली में \"अच्छी स्थिति\" में होता है, तो उससे जुड़े सभी प्रभाव उस व्यक्ति के लिए सकारात्मक रूप से प्रकट होते हैं।", ja: "惑星が出生図で「良好な配置」にあるとき、その惑星に関連するすべての象意は、その人にとって前向きに現れる傾向があります。", ko: "행성이 출생 차트에서 \"잘 배치\"되면 관련된 모든 의미가 해당 개인에게 긍정적으로 나타나는 경향이 있습니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "When a planet is \"poorly placed,\" its associations tend to bring some level of difficulty, obstruction, or challenge.", hi: "जब कोई ग्रह \"खराब स्थिति\" में होता है, तो उसकी संगति कुछ स्तर की कठिनाई, रुकावट या चुनौती लाती है।", ja: "惑星が「不良な配置」にあるとき、その象意は困難、障害、または課題をもたらす傾向があります。", ko: "행성이 \"잘못 배치\"되면 그 연관성은 어느 정도 어려움, 방해 또는 도전을 가져오는 경향이 있습니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "\"Well placed\" means the planet sits in a favorable sign—such as its own sign or its sign of exaltation—or occupies a beneficial house (like the 5th or 9th), or receives a positive aspect from a planet that is benefic for that particular ascendant.", hi: "\"अच्छी तरह से स्थित\" का अर्थ है कि ग्रह एक अनुकूल राशि में बैठता है - जैसे कि उसकी अपनी राशि या उसकी उच्च राशि का संकेत - या एक लाभकारी घर (जैसे 5 वें या 9 वें) पर कब्जा कर लेता है, या उस ग्रह से एक सकारात्मक पहलू प्राप्त करता है जो उस विशेष लग्न के लिए फायदेमंद है।", ja: "「良好な配置」とは、惑星が有利な星座 — 自分の星座や高揚星座など — にあるか、有益なハウス（5室や9室など）を占めるか、そのアセンダントにとって吉星である惑星から良いアスペクトを受けている状態を指します。", ko: "\"잘 배치된\"이란 행성이 자신의 별자리 또는 승영 별자리와 같은 유리한 별자리에 있거나 유익한 하우스(5하우스 또는 9하우스와 같은)를 차지하거나 특정 상승점에 유익한 행성으로부터 긍정적인 측면을 받는 것을 의미합니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "\"Poorly placed\" means the planet is in an unfavorable sign (weakened or debilitated), sits in an unfavorable house (such as the 6th, 8th, or 12th), or receives an aspect from a planet that is malefic for that ascendant.", hi: "\"खराब स्थान पर\" का अर्थ है कि ग्रह प्रतिकूल राशि (कमजोर या कमजोर) में है, प्रतिकूल घर (जैसे 6 वें, 8 वें या 12 वें) में बैठता है, या उस ग्रह से एक पहलू प्राप्त करता है जो उस लग्न के लिए हानिकारक है।", ja: "「不良な配置」とは、惑星が不利な星座（弱体化または減衰）にあるか、不利なハウス（6室、8室、12室など）を占めるか、そのアセンダントにとって凶星である惑星からアスペクトを受けている状態を指します。", ko: "\"잘못 배치된\"이란 행성이 불리한 별자리(약해지거나 쇠약해진)에 있거나, 불리한 하우스(예: 6, 8, 12하우스)에 있거나, 해당 상승점에 해로운 행성으로부터 측면을 받는 것을 의미합니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "For instance, if the Sun in someone's chart is exalted (in Aries, sidereally) or placed in the 9th house (even better if both conditions apply), we would expect strong health and vitality (physiological), high self-esteem along with power and influence (psychological), a good relationship with the father (sociological), and a natural pull toward self-realization and personal growth (other significations).", hi: "उदाहरण के लिए, यदि किसी की कुंडली में सूर्य उच्च राशि में है (मेष राशि में, पार्श्व में) या 9वें घर में स्थित है (यदि दोनों स्थितियाँ लागू हों तो और भी बेहतर), हम मजबूत स्वास्थ्य और जीवन शक्ति (शारीरिक), शक्ति और प्रभाव के साथ उच्च आत्म-सम्मान (मनोवैज्ञानिक), पिता के साथ एक अच्छा रिश्ता (सामाजिक), और आत्म-प्राप्ति और व्यक्तिगत विकास (अन्य अर्थ) की ओर एक प्राकृतिक खिंचाव की उम्मीद करेंगे।", ja: "たとえば、ある人のチャートで太陽が高揚（恒星の牡羊座）にあるか、9室に配置されている場合（両方が当てはまればさらに良い）、強い健康と活力（生理）、高い自尊心と力・影響力（心理）、父親との良好な関係（社会）、自己実現と個人的成長への自然な引力（その他の象意）が期待されます。", ko: "예를 들어, 누군가의 차트에서 태양이 고조되거나(양자리, 항성으로) 9하우스에 위치한다면(두 가지 조건이 모두 적용되면 훨씬 더 좋습니다), 우리는 강한 건강과 활력(생리적), 권력과 영향력과 함께 높은 자존감(심리적), 아버지와의 좋은 관계(사회적), 자기 실현과 개인 성장을 향한 자연스러운 끌림(기타 의미)을 기대할 수 있습니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "If instead the Sun is poorly placed—say, debilitated in Libra (sidereal), or situated in the 6th, 8th, or 12th house, or under malefic influence—we might anticipate health issues, diminished self-confidence, and possible friction with the father.", hi: "इसके बजाय यदि सूर्य खराब स्थिति में है - मान लीजिए, तुला राशि (नाक्षत्र) में दुर्बल है, या 6वें, 8वें, या 12वें घर में स्थित है, या अशुभ प्रभाव में है - तो हम स्वास्थ्य समस्याओं, कम आत्मविश्वास और पिता के साथ संभावित घर्षण की आशंका कर सकते हैं।", ja: "逆に太陽が不良な配置にある場合 — たとえば減衰（恒星の天秤座）、6室・8室・12室のいずれか、または凶星の影響下 — 健康上の問題、自信の低下、父親との摩擦が予想されるかもしれません。", ko: "대신 태양이 천칭자리(항성)에서 쇠약해지거나 6, 8, 12하우스에 있거나 해로운 영향을 받는 등 나쁜 위치에 있다면 우리는 건강 문제, 자신감 감소, 아버지와의 마찰 가능성을 예상할 수 있습니다.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "Naturally, chart interpretation involves many additional layers and nuances, but this principle remains foundational to understanding any individual's chart—it's one of the cornerstones of the subject. For a more detailed discussion of planetary strength by sign placement, see: Planetary Strengths or Powers.", hi: "स्वाभाविक रूप से, चार्ट व्याख्या में कई अतिरिक्त परतें और बारीकियाँ शामिल होती हैं, लेकिन यह सिद्धांत किसी भी व्यक्ति के चार्ट को समझने के लिए मूलभूत बना हुआ है - यह विषय की आधारशिलाओं में से एक है। साइन प्लेसमेंट द्वारा ग्रहों की ताकत की अधिक विस्तृत चर्चा के लिए, देखें: ग्रहों की ताकत या शक्तियां।", ja: "もちろん、チャートの解釈にはさらに多くの層とニュアンスが関わりますが、この原則は個人のチャートを理解する上での基礎であり、この学問の柱の一つです。星座配置による惑星の強さの詳細については、「惑星の強みまたは力」を参照してください。", ko: "당연히 차트 해석에는 많은 추가 레이어와 뉘앙스가 포함되지만 이 원칙은 개인의 차트를 이해하는 데 여전히 기본이며 주제의 초석 중 하나입니다. 라시 배치에 따른 행성의 힘에 대한 더 자세한 논의는 행성의 힘 또는 힘을 참조하십시오.",
      },
    },
  ],
};
