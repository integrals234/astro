import type { AppLanguage } from "@/lib/i18n/language";
import type { YogaId } from "./yogas";

interface YogaMeta {
  name: string;
  description: string;
}

interface YogasCopy {
  heading: string;
  intro: string;
  empty: string;
  evidenceHouse: (planet: string, house: number) => string;
  severityLabels: { positive: string; caution: string; neutral: string };
  evidenceSign: (planet: string, sign: string) => string;
  yogas: Record<YogaId, YogaMeta>;
}

export const yogasCopy: Record<AppLanguage, YogasCopy> = {
  en: {
    heading: "Yogas & Doshas",
    intro: "Planetary combinations classical Jyotish reads as distinct from an ordinary placement — each one shown with the exact planet and house that triggered it.",
    empty: "This chart doesn't carry any of the combinations checked here. That's a legitimate result, not a gap in the reading.",
    evidenceHouse: (planet, house) => `${planet} — house ${house}`,
    evidenceSign: (planet, sign) => `${planet} in ${sign}`,
    severityLabels: { positive: "Favourable", caution: "Worth noting", neutral: "Neutral" },
    yogas: {
      mangalDosha: {
        name: "Mangal Dosha (Kuja Dosha)",
        description: "Mars sits in the 1st, 2nd, 4th, 7th, 8th or 12th house from the Lagna — traditionally weighed before marriage, and traditionally cancelled by several conditions this check doesn't evaluate.",
      },
      kaalSarp: {
        name: "Kaal Sarp Dosha",
        description: "All seven classical planets fall on one side of the Rahu–Ketu axis, hemmed between the two nodes.",
      },
      gajaKesari: {
        name: "Gaja Kesari Yoga",
        description: "Jupiter stands in a kendra (1st, 4th, 7th or 10th house) from the Moon — a classical combination for steadiness and public standing.",
      },
      budhaditya: {
        name: "Budhaditya Yoga",
        description: "Sun and Mercury share a sign — read for sharp intellect, though close conjunctions can also combust Mercury.",
      },
      chandraMangala: {
        name: "Chandra-Mangala Yoga",
        description: "Moon and Mars share a sign — classically a wealth-generating combination.",
      },
      neechaBhangaRuchaka: {
        name: "Neecha Bhanga Raja Yoga",
        description: "A debilitated planet's own sign lord stands in a kendra from the Lagna — one classical condition that offsets a debilitation, not the full set of cancellation rules.",
      },
      panchamahapurushaRuchaka: {
        name: "Ruchaka Yoga",
        description: "Mars in a kendra from the Lagna, in its own sign or exalted — one of the five Panchamahapurusha yogas, read for courage and initiative.",
      },
      panchamahapurushaBhadra: {
        name: "Bhadra Yoga",
        description: "Mercury in a kendra from the Lagna, in its own sign or exalted — read for intellect and communication.",
      },
      panchamahapurushaHamsa: {
        name: "Hamsa Yoga",
        description: "Jupiter in a kendra from the Lagna, in its own sign or exalted — read for wisdom and ethical standing.",
      },
      panchamahapurushaMalavya: {
        name: "Malavya Yoga",
        description: "Venus in a kendra from the Lagna, in its own sign or exalted — read for comfort, beauty and refinement.",
      },
      panchamahapurushaSasha: {
        name: "Sasha Yoga",
        description: "Saturn in a kendra from the Lagna, in its own sign or exalted — read for discipline and authority.",
      },
    },
  },
  hi: {
    heading: "योग और दोष",
    intro: "शास्त्रीय ज्योतिष जिन ग्रह-संयोगों को सामान्य स्थिति से अलग मानता है — प्रत्येक के साथ उसे बनाने वाला ठीक ग्रह और भाव दिखाया गया है।",
    empty: "इस कुंडली में यहाँ जाँचे गए संयोगों में से कोई नहीं मिला। यह भी एक वैध परिणाम है, कोई कमी नहीं।",
    evidenceHouse: (planet, house) => `${planet} — भाव ${house}`,
    evidenceSign: (planet, sign) => `${planet}, ${sign} में`,
    severityLabels: { positive: "अनुकूल", caution: "ध्यान देने योग्य", neutral: "तटस्थ" },
    yogas: {
      mangalDosha: {
        name: "मंगल दोष (कुज दोष)",
        description: "मंगल लग्न से पहले, दूसरे, चौथे, सातवें, आठवें या बारहवें भाव में है — परंपरागत रूप से विवाह से पहले जाँचा जाता है, और कई शर्तों से निरस्त भी होता है जो यहाँ नहीं जाँची गईं।",
      },
      kaalSarp: {
        name: "कालसर्प दोष",
        description: "सभी सात शास्त्रीय ग्रह राहु-केतु अक्ष के एक ही ओर, दोनों के बीच घिरे हुए हैं।",
      },
      gajaKesari: {
        name: "गजकेसरी योग",
        description: "गुरु चंद्रमा से केंद्र (पहले, चौथे, सातवें या दसवें भाव) में है — स्थिरता और सम्मान के लिए शास्त्रीय संयोग।",
      },
      budhaditya: {
        name: "बुधादित्य योग",
        description: "सूर्य और बुध एक ही राशि में हैं — तीक्ष्ण बुद्धि के लिए पढ़ा जाता है, हालाँकि निकट युति बुध को अस्त भी कर सकती है।",
      },
      chandraMangala: {
        name: "चंद्र-मंगल योग",
        description: "चंद्रमा और मंगल एक ही राशि में हैं — परंपरागत रूप से धन-संयोग।",
      },
      neechaBhangaRuchaka: {
        name: "नीच भंग राजयोग",
        description: "नीच ग्रह की राशि का स्वामी लग्न से केंद्र में है — नीचता को संतुलित करने वाली एक शास्त्रीय शर्त, निरसन के पूर्ण नियमों में से एक मात्र।",
      },
      panchamahapurushaRuchaka: {
        name: "रुचक योग",
        description: "मंगल लग्न से केंद्र में, स्वराशि या उच्च में है — पंचमहापुरुष योगों में से एक, साहस और पहल के लिए पढ़ा जाता है।",
      },
      panchamahapurushaBhadra: {
        name: "भद्र योग",
        description: "बुध लग्न से केंद्र में, स्वराशि या उच्च में है — बुद्धि और संप्रेषण के लिए पढ़ा जाता है।",
      },
      panchamahapurushaHamsa: {
        name: "हंस योग",
        description: "गुरु लग्न से केंद्र में, स्वराशि या उच्च में है — ज्ञान और नैतिक प्रतिष्ठा के लिए पढ़ा जाता है।",
      },
      panchamahapurushaMalavya: {
        name: "मालव्य योग",
        description: "शुक्र लग्न से केंद्र में, स्वराशि या उच्च में है — सुख, सौंदर्य और परिष्कार के लिए पढ़ा जाता है।",
      },
      panchamahapurushaSasha: {
        name: "शश योग",
        description: "शनि लग्न से केंद्र में, स्वराशि या उच्च में है — अनुशासन और अधिकार के लिए पढ़ा जाता है।",
      },
    },
  },
  ja: {
    heading: "ヨーガとドーシャ",
    intro: "インド占星術が通常の配置とは別に読む惑星の組み合わせです。それぞれ、根拠となる惑星とハウスを示しています。",
    empty: "このチャートには、ここで確認した組み合わせは見つかりませんでした。これは不足ではなく、正当な結果です。",
    evidenceHouse: (planet, house) => `${planet} — 第${house}室`,
    evidenceSign: (planet, sign) => `${planet}が${sign}`,
    severityLabels: { positive: "好意的", caution: "留意点", neutral: "中立" },
    yogas: {
      mangalDosha: {
        name: "マンガル・ドーシャ（クジャ・ドーシャ）",
        description: "火星がラグナから第1・2・4・7・8・12室のいずれかにあります。伝統的に結婚前に確認される配置で、いくつかの条件により相殺されることもありますが、ここでは判定していません。",
      },
      kaalSarp: {
        name: "カーラ・サルパ・ドーシャ",
        description: "七つの古典的な惑星すべてが、ラーフとケートゥの軸の片側に挟まれています。",
      },
      gajaKesari: {
        name: "ガジャ・ケサリ・ヨーガ",
        description: "木星が月からケンドラ（第1・4・7・10室）にあります。安定と社会的信望を示す古典的な組み合わせです。",
      },
      budhaditya: {
        name: "ブダーディティヤ・ヨーガ",
        description: "太陽と水星が同じ星座にあります。鋭い知性を示しますが、近すぎる合は水星の光を弱めることもあります。",
      },
      chandraMangala: {
        name: "チャンドラ・マンガラ・ヨーガ",
        description: "月と火星が同じ星座にあります。伝統的に財運を生む組み合わせとされます。",
      },
      neechaBhangaRuchaka: {
        name: "ニーチャ・バンガ・ラージャ・ヨーガ",
        description: "減衰した惑星の支配星がラグナからケンドラにあります。減衰を相殺する古典的な条件の一つであり、相殺条件のすべてではありません。",
      },
      panchamahapurushaRuchaka: {
        name: "ルチャカ・ヨーガ",
        description: "火星がラグナからケンドラにあり、自身の星座または高揚にあります。五大人物ヨーガの一つで、勇気と行動力を示します。",
      },
      panchamahapurushaBhadra: {
        name: "バドラ・ヨーガ",
        description: "水星がラグナからケンドラにあり、自身の星座または高揚にあります。知性とコミュニケーション力を示します。",
      },
      panchamahapurushaHamsa: {
        name: "ハンサ・ヨーガ",
        description: "木星がラグナからケンドラにあり、自身の星座または高揚にあります。知恵と高潔さを示します。",
      },
      panchamahapurushaMalavya: {
        name: "マラヴィヤ・ヨーガ",
        description: "金星がラグナからケンドラにあり、自身の星座または高揚にあります。快適さ、美しさ、洗練を示します。",
      },
      panchamahapurushaSasha: {
        name: "シャシャ・ヨーガ",
        description: "土星がラグナからケンドラにあり、自身の星座または高揚にあります。規律と権威を示します。",
      },
    },
  },
  ko: {
    heading: "요가와 도샤",
    intro: "고전 조티시가 일반적인 배치와 구분해서 읽는 행성 조합입니다. 각각 그것을 만든 정확한 행성과 하우스를 함께 보여줍니다.",
    empty: "이 차트에는 여기서 확인한 조합이 없습니다. 이는 부족함이 아니라 정당한 결과입니다.",
    evidenceHouse: (planet, house) => `${planet} — ${house}하우스`,
    evidenceSign: (planet, sign) => `${planet}, ${sign}`,
    severityLabels: { positive: "긍정적", caution: "주목할 점", neutral: "중립" },
    yogas: {
      mangalDosha: {
        name: "망갈 도샤(쿠자 도샤)",
        description: "화성이 라그나로부터 1, 2, 4, 7, 8, 12번째 하우스에 있습니다. 전통적으로 결혼 전에 확인하며, 여기서 판정하지 않은 여러 조건에 의해 상쇄되기도 합니다.",
      },
      kaalSarp: {
        name: "칼 사르프 도샤",
        description: "일곱 고전 행성 모두가 라후-케투 축의 한쪽에, 두 노드 사이에 갇혀 있습니다.",
      },
      gajaKesari: {
        name: "가자 케사리 요가",
        description: "목성이 달로부터 켄드라(1, 4, 7, 10번째 하우스)에 있습니다. 안정과 사회적 명망을 나타내는 고전적 조합입니다.",
      },
      budhaditya: {
        name: "부다디티야 요가",
        description: "태양과 수성이 같은 별자리에 있습니다. 예리한 지성을 나타내지만, 너무 가까운 합은 수성을 약화시킬 수도 있습니다.",
      },
      chandraMangala: {
        name: "찬드라 망갈라 요가",
        description: "달과 화성이 같은 별자리에 있습니다. 전통적으로 부를 만드는 조합으로 여겨집니다.",
      },
      neechaBhangaRuchaka: {
        name: "니차 방가 라자 요가",
        description: "쇠약한 행성의 별자리 지배성이 라그나로부터 켄드라에 있습니다. 쇠약을 상쇄하는 고전적 조건 중 하나이며, 전체 상쇄 규칙은 아닙니다.",
      },
      panchamahapurushaRuchaka: {
        name: "루차카 요가",
        description: "화성이 라그나로부터 켄드라에 있고, 자신의 별자리이거나 고양되어 있습니다. 판차마하푸루샤 요가 중 하나로 용기와 추진력을 나타냅니다.",
      },
      panchamahapurushaBhadra: {
        name: "바드라 요가",
        description: "수성이 라그나로부터 켄드라에 있고, 자신의 별자리이거나 고양되어 있습니다. 지성과 소통 능력을 나타냅니다.",
      },
      panchamahapurushaHamsa: {
        name: "함사 요가",
        description: "목성이 라그나로부터 켄드라에 있고, 자신의 별자리이거나 고양되어 있습니다. 지혜와 도덕적 명망을 나타냅니다.",
      },
      panchamahapurushaMalavya: {
        name: "말라비야 요가",
        description: "금성이 라그나로부터 켄드라에 있고, 자신의 별자리이거나 고양되어 있습니다. 안락함, 아름다움, 세련됨을 나타냅니다.",
      },
      panchamahapurushaSasha: {
        name: "샤샤 요가",
        description: "토성이 라그나로부터 켄드라에 있고, 자신의 별자리이거나 고양되어 있습니다. 규율과 권위를 나타냅니다.",
      },
    },
  },
};
