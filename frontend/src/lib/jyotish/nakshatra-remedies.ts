import type { BilingualText } from "@/lib/education/types";

/**
 * Nakshatra remedies (upays), derived rather than hand-authored per
 * nakshatra — real classical practice already centers a nakshatra's
 * remedies on its ruling planet, so this keys off `NAKSHATRAS[].lord` /
 * `nakshatras[].ruler` (9 sets, reused across the 3 nakshatras that share
 * each lord) instead of inventing 27 unrelated blocks. The second remedy is
 * a deity offering — genuinely nakshatra-specific since every nakshatra has
 * its own deity already in `nakshatras-content.ts` — with a "why" keyed off
 * the nakshatra's classical `nature` (7 categories, also already in that
 * data), so the reasoning varies with the nakshatra's actual temperament
 * rather than reading as one template repeated 27 times.
 */
export interface RemedyBlock {
  title: BilingualText;
  whyItHelps: BilingualText;
  howTo: BilingualText;
}

export const PLANET_REMEDY: Record<string, RemedyBlock> = {
  Sun: {
    title: {
      en: "Offer water to the rising sun",
      hi: "उगते सूर्य को जल अर्पित करें",
      ja: "朝日に水を捧げる",
      ko: "떠오르는 해에 물을 올리세요",
    },
    whyItHelps: {
      en: "Traditionally supports vitality, confidence, and clear leadership.",
      hi: "परंपरागत रूप से यह जीवनशक्ति, आत्मविश्वास और स्पष्ट नेतृत्व का समर्थन करता है।",
      ja: "伝統的に、活力・自信・明確なリーダーシップを支えるとされます。",
      ko: "전통적으로 활력, 자신감, 명확한 리더십을 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "Each morning, offer water (Surya Arghya) facing the sunrise — Sundays especially.",
      hi: "प्रतिदिन सुबह उगते सूर्य की ओर मुख करके जल अर्पित करें (सूर्य अर्घ्य) — विशेषकर रविवार को।",
      ja: "毎朝、日の出に向かって水を捧げます（スーリヤ・アルギャ）。特に日曜日に。",
      ko: "매일 아침 해가 뜨는 방향을 향해 물을 올리세요(수리야 아르갸) — 특히 일요일에.",
    },
  },
  Moon: {
    title: {
      en: "Offer milk or white flowers, or keep water in a silver cup overnight",
      hi: "दूध या सफेद फूल अर्पित करें, या रातभर चांदी के पात्र में जल रखें",
      ja: "牛乳や白い花を捧げるか、銀の器に水を一晩置く",
      ko: "우유나 흰 꽃을 올리거나, 은잔에 물을 하룻밤 담아두세요",
    },
    whyItHelps: {
      en: "Traditionally soothes emotional volatility and supports calm.",
      hi: "परंपरागत रूप से यह भावनात्मक उतार-चढ़ाव को शांत करता है और स्थिरता का समर्थन करता है।",
      ja: "伝統的に、感情の揺れを鎮め、心の落ち着きを支えるとされます。",
      ko: "전통적으로 감정 기복을 가라앉히고 평온함을 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "On Mondays, offer milk or white flowers, or drink from the silver cup in the morning.",
      hi: "सोमवार को दूध या सफेद फूल अर्पित करें, या सुबह चांदी के पात्र से जल पिएं।",
      ja: "月曜日に牛乳や白い花を捧げるか、朝にその銀の器の水を飲みます。",
      ko: "월요일에 우유나 흰 꽃을 올리거나, 아침에 그 은잔의 물을 마시세요.",
    },
  },
  Mars: {
    title: {
      en: "Recite the Hanuman Chalisa on Tuesdays",
      hi: "मंगलवार को हनुमान चालीसा का पाठ करें",
      ja: "火曜日にハヌマーン・チャリーサを唱える",
      ko: "화요일에 하누만 찰리사를 암송하세요",
    },
    whyItHelps: {
      en: "Traditionally channels assertive energy constructively rather than impulsively.",
      hi: "परंपरागत रूप से यह आक्रामक ऊर्जा को आवेगपूर्ण के बजाय रचनात्मक दिशा देता है।",
      ja: "伝統的に、行動的なエネルギーを衝動的にではなく建設的な方向へ導くとされます。",
      ko: "전통적으로 적극적인 에너지를 충동적으로 흘리지 않고 건설적으로 이끈다고 봅니다.",
    },
    howTo: {
      en: "Recite it in the morning; donating red lentils or jaggery on Tuesdays is also traditional.",
      hi: "सुबह इसका पाठ करें; मंगलवार को मसूर दाल या गुड़ का दान करना भी परंपरागत है।",
      ja: "朝に唱えます。火曜日にマスール豆やジャガリー（黒糖）を寄付するのも伝統的です。",
      ko: "아침에 암송하세요. 화요일에 렌틸콩이나 재거리(흑설탕)를 기부하는 것도 전통적입니다.",
    },
  },
  Mercury: {
    title: {
      en: "Feed green vegetables to cows, or donate green items",
      hi: "गायों को हरी सब्जियां खिलाएं, या हरी वस्तुओं का दान करें",
      ja: "牛に青菜を与える、または緑色のものを寄付する",
      ko: "소에게 녹색 채소를 먹이거나 초록색 물건을 기부하세요",
    },
    whyItHelps: {
      en: "Traditionally supports clear communication and mental agility.",
      hi: "परंपरागत रूप से यह स्पष्ट संवाद और मानसिक चपलता का समर्थन करता है।",
      ja: "伝統的に、明晰なコミュニケーションと機敏な思考を支えるとされます。",
      ko: "전통적으로 명확한 소통과 민첩한 사고를 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "Do this on Wednesdays; wearing green that day is also traditional.",
      hi: "यह बुधवार को करें; उस दिन हरे रंग के वस्त्र पहनना भी परंपरागत है।",
      ja: "水曜日に行います。その日に緑色の服を着るのも伝統的です。",
      ko: "수요일에 하세요. 그날 초록색 옷을 입는 것도 전통적입니다.",
    },
  },
  Jupiter: {
    title: {
      en: "Donate turmeric or yellow items on Thursdays",
      hi: "गुरुवार को हल्दी या पीली वस्तुओं का दान करें",
      ja: "木曜日にターメリックや黄色いものを寄付する",
      ko: "목요일에 강황이나 노란 물건을 기부하세요",
    },
    whyItHelps: {
      en: "Traditionally supports wisdom, growth, and finding the right guidance.",
      hi: "परंपरागत रूप से यह ज्ञान, विकास और सही मार्गदर्शन पाने में सहायक है।",
      ja: "伝統的に、知恵・成長・良い導きを得ることを支えるとされます。",
      ko: "전통적으로 지혜와 성장, 좋은 가르침을 찾는 데 도움이 된다고 봅니다.",
    },
    howTo: {
      en: "Offer turmeric, chana dal, or yellow cloth to a temple or someone in need.",
      hi: "मंदिर में या किसी जरूरतमंद को हल्दी, चना दाल या पीला वस्त्र अर्पित करें।",
      ja: "寺院や困っている人にターメリック、チャナ豆、黄色い布を捧げます。",
      ko: "사원이나 도움이 필요한 이에게 강황, 병아리콩, 노란 천을 올리세요.",
    },
  },
  Venus: {
    title: {
      en: "Donate white clothes or sweets on Fridays",
      hi: "शुक्रवार को सफेद वस्त्र या मिठाई का दान करें",
      ja: "金曜日に白い衣服やお菓子を寄付する",
      ko: "금요일에 흰 옷이나 단 것을 기부하세요",
    },
    whyItHelps: {
      en: "Traditionally supports harmony in relationships and creative expression.",
      hi: "परंपरागत रूप से यह रिश्तों में सामंजस्य और रचनात्मक अभिव्यक्ति का समर्थन करता है।",
      ja: "伝統的に、人間関係の調和と創造的な表現を支えるとされます。",
      ko: "전통적으로 관계의 조화와 창의적 표현을 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "Offering to a temple of the Divine Feminine, or to women in need, is traditional on this day.",
      hi: "इस दिन देवी मंदिर में या जरूरतमंद महिलाओं को अर्पित करना परंपरागत है।",
      ja: "この日に女神を祀る寺院や困っている女性に捧げるのが伝統的です。",
      ko: "이날 여신을 모신 사원이나 도움이 필요한 여성에게 올리는 것이 전통적입니다.",
    },
  },
  Saturn: {
    title: {
      en: "Light a mustard oil lamp on Saturdays",
      hi: "शनिवार को सरसों के तेल का दीपक जलाएं",
      ja: "土曜日にからし油のランプを灯す",
      ko: "토요일에 겨자기름 등불을 켜세요",
    },
    whyItHelps: {
      en: "Traditionally eases themes of delay or restriction and supports discipline.",
      hi: "परंपरागत रूप से यह देरी या प्रतिबंध की स्थितियों को कम करता है और अनुशासन का समर्थन करता है।",
      ja: "伝統的に、遅れや制約の傾向を和らげ、規律を支えるとされます。",
      ko: "전통적으로 지연이나 제약의 경향을 완화하고 절제를 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "Light it at dusk, facing west; donating black sesame seeds or iron items is also traditional.",
      hi: "शाम को पश्चिम दिशा की ओर मुख करके दीपक जलाएं; काले तिल या लोहे की वस्तुओं का दान भी परंपरागत है।",
      ja: "夕暮れ時、西を向いて灯します。黒ごまや鉄製品を寄付するのも伝統的です。",
      ko: "해 질 무렵 서쪽을 향해 등불을 켜세요. 검은깨나 철제품을 기부하는 것도 전통적입니다.",
    },
  },
  Rahu: {
    title: {
      en: "Donate mustard oil or dark-colored items on Saturdays",
      hi: "शनिवार को सरसों का तेल या गहरे रंग की वस्तुओं का दान करें",
      ja: "土曜日にからし油や暗い色のものを寄付する",
      ko: "토요일에 겨자기름이나 어두운 색 물건을 기부하세요",
    },
    whyItHelps: {
      en: "Traditionally settles restlessness and supports more considered decisions.",
      hi: "परंपरागत रूप से यह बेचैनी को शांत करता है और अधिक विचारशील निर्णयों में सहायक है।",
      ja: "伝統的に、落ち着きのなさを鎮め、より熟慮した判断を支えるとされます。",
      ko: "전통적으로 조급함을 가라앉히고 더 신중한 결정을 뒷받침한다고 봅니다.",
    },
    howTo: {
      en: "Some also avoid starting major new ventures on this day, or keep a partial fast.",
      hi: "कुछ लोग इस दिन कोई नया बड़ा कार्य शुरू करने से बचते हैं, या आंशिक उपवास रखते हैं।",
      ja: "この日に大きな新しい事業を始めるのを避けたり、部分的な断食をする人もいます。",
      ko: "이날 큰 새 일을 시작하는 것을 피하거나 부분 단식을 하는 사람도 있습니다.",
    },
  },
  Ketu: {
    title: {
      en: "Feed stray dogs, or donate blankets",
      hi: "आवारा कुत्तों को भोजन कराएं, या कंबल दान करें",
      ja: "野良犬に食べ物を与える、または毛布を寄付する",
      ko: "떠돌이 개에게 먹이를 주거나 담요를 기부하세요",
    },
    whyItHelps: {
      en: "Traditionally supports letting go of what has already run its course.",
      hi: "परंपरागत रूप से यह उन चीजों को छोड़ने में सहायक है जिनका समय पूरा हो चुका है।",
      ja: "伝統的に、すでに役目を終えたものを手放すことを支えるとされます。",
      ko: "전통적으로 이미 다한 것을 놓아주는 데 도움이 된다고 봅니다.",
    },
    howTo: {
      en: "Doing this on Tuesdays is traditional; some also keep a small fast that day.",
      hi: "मंगलवार को यह करना परंपरागत है; कुछ लोग उस दिन छोटा उपवास भी रखते हैं।",
      ja: "火曜日に行うのが伝統的です。その日に軽い断食をする人もいます。",
      ko: "화요일에 하는 것이 전통적입니다. 그날 가벼운 단식을 하는 사람도 있습니다.",
    },
  },
};

/** Keyed by the nakshatra's classical `nature.en` string (7 categories). */
export const NATURE_WHY: Record<string, BilingualText> = {
  "Light / swift (Kshipra)": {
    en: "This nakshatra moves quickly by nature, so short, consistent practice suits it better than long or occasional ritual.",
    hi: "यह नक्षत्र स्वभाव से तेज़ गति वाला है, इसलिए लंबे या कभी-कभार किए गए अनुष्ठान की तुलना में छोटा, नियमित अभ्यास इसके लिए अधिक उपयुक्त है।",
    ja: "この宿は本来動きが速いため、長く不定期な儀式よりも、短く継続的な実践のほうが合っています。",
    ko: "이 낙샤트라는 본래 빠르게 움직이는 성질이라, 길고 간헐적인 의식보다 짧고 꾸준한 실천이 더 잘 맞습니다.",
  },
  "Fierce (Ugra)": {
    en: "This nakshatra carries an intense quality, and steady, calming practice helps direct that intensity rather than suppress it.",
    hi: "इस नक्षत्र में तीव्रता का गुण है, और स्थिर, शांत करने वाला अभ्यास उस तीव्रता को दबाने के बजाय उचित दिशा देने में मदद करता है।",
    ja: "この宿は激しい性質を帯びており、抑え込むのではなく、その激しさを方向づける穏やかで安定した実践が助けになります。",
    ko: "이 낙샤트라는 강렬한 성질을 지니며, 그 강렬함을 억누르기보다 방향을 잡아주는 꾸준하고 차분한 실천이 도움이 됩니다.",
  },
  Mixed: {
    en: "This nakshatra carries a blended temperament, so flexible, situational practice tends to suit it better than a rigid routine.",
    hi: "इस नक्षत्र का स्वभाव मिश्रित है, इसलिए कठोर दिनचर्या की तुलना में लचीला, परिस्थिति के अनुरूप अभ्यास अधिक उपयुक्त होता है।",
    ja: "この宿は複合的な気質を持つため、厳格な習慣よりも、状況に応じた柔軟な実践のほうが合う傾向があります。",
    ko: "이 낙샤트라는 혼합된 기질을 지니므로, 엄격한 루틴보다 상황에 맞춘 유연한 실천이 더 잘 맞는 경향이 있습니다.",
  },
  "Fixed (Dhruva)": {
    en: "This nakshatra favors stability, so a practice repeated on the same day each week tends to serve it well.",
    hi: "यह नक्षत्र स्थिरता को प्राथमिकता देता है, इसलिए हर सप्ताह एक ही दिन दोहराया जाने वाला अभ्यास इसके लिए बेहतर काम करता है।",
    ja: "この宿は安定を好むため、毎週同じ曜日に繰り返す実践がよく合う傾向があります。",
    ko: "이 낙샤트라는 안정을 선호하므로, 매주 같은 요일에 반복하는 실천이 잘 맞는 경향이 있습니다.",
  },
  "Soft (Mridu)": {
    en: "This nakshatra has a gentle, accommodating nature, and equally gentle, unhurried practice tends to suit it.",
    hi: "इस नक्षत्र का स्वभाव कोमल और सामंजस्यपूर्ण है, और उतना ही कोमल, बिना जल्दबाज़ी वाला अभ्यास इसके लिए उपयुक्त होता है।",
    ja: "この宿は穏やかで順応性のある性質を持ち、同じように穏やかで急がない実践が合う傾向があります。",
    ko: "이 낙샤트라는 부드럽고 잘 순응하는 성질을 지니며, 그만큼 부드럽고 서두르지 않는 실천이 잘 맞는 경향이 있습니다.",
  },
  "Sharp (Tikshna)": {
    en: "This nakshatra carries a sharp, incisive quality, and disciplined, focused practice channels that well.",
    hi: "इस नक्षत्र में तीक्ष्ण, पैनापन का गुण है, और अनुशासित, केंद्रित अभ्यास उसे अच्छी दिशा देता है।",
    ja: "この宿は鋭く切れ味のある性質を帯びており、規律ある集中した実践がそれをよく活かします。",
    ko: "이 낙샤트라는 날카롭고 예리한 성질을 지니며, 절제되고 집중된 실천이 그것을 잘 이끕니다.",
  },
  "Movable (Chara)": {
    en: "This nakshatra favors movement and change, so practice tied to travel, new starts, or the outdoors tends to resonate.",
    hi: "यह नक्षत्र गति और परिवर्तन को प्राथमिकता देता है, इसलिए यात्रा, नई शुरुआत या खुले वातावरण से जुड़ा अभ्यास अधिक प्रभावी होता है।",
    ja: "この宿は動きと変化を好むため、旅や新しい始まり、屋外に結びついた実践がよく響く傾向があります。",
    ko: "이 낙샤트라는 움직임과 변화를 선호하므로, 여행이나 새로운 시작, 야외와 연결된 실천이 잘 와닿는 경향이 있습니다.",
  },
};

export const DEITY_REMEDY_COPY = {
  title: {
    en: (deity: string) => `Offer prayers to ${deity} at sunrise or sunset`,
    hi: (deity: string) => `सूर्योदय या सूर्यास्त के समय ${deity} की पूजा करें`,
    ja: (deity: string) => `日の出か日没に${deity}へ祈りを捧げる`,
    ko: (deity: string) => `해 뜰 때나 해 질 때 ${deity}에게 기도를 올리세요`,
  },
  howTo: {
    en: "A short, consistent practice — even a few minutes — matters more than an elaborate one.",
    hi: "छोटा, नियमित अभ्यास — भले ही कुछ ही मिनटों का — किसी विस्तृत अनुष्ठान से अधिक महत्वपूर्ण है।",
    ja: "たとえ数分でも、短く継続する実践のほうが、手の込んだ儀式より意味を持ちます。",
    ko: "단 몇 분이라도 짧고 꾸준한 실천이 화려한 의식보다 더 중요합니다.",
  },
} satisfies {
  title: Record<string, (deity: string) => string>;
  howTo: BilingualText;
};
