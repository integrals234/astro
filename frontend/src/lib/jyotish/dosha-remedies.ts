import type { BilingualText } from "@/lib/education/types";

/**
 * General remedy reference for the doshas/yogas `mangal-dosha` detects.
 *
 * Deliberately not personalized to which dosha a given chart actually has —
 * that detection lives inside the shared `ChartSectionBody`/yoga-computation
 * code other tools also render, and reaching into it here would risk that
 * shared behaviour. This is reference content shown the same way to every
 * visitor, same spirit as the classical-table sections already on the site
 * (e.g. Baby Names' syllable reference table).
 */
export interface RemedyBlock {
  title: BilingualText;
  whyItHelps: BilingualText;
  howTo: BilingualText;
}

export const DOSHA_REMEDIES: RemedyBlock[] = [
  {
    title: {
      en: "Mangal Dosha — Mars remedies",
      hi: "मंगल दोष — मंगल के उपाय",
      ja: "マンガル・ドーシャ — 火星のレメディ",
      ko: "망갈 도샤 — 화성 레메디",
    },
    whyItHelps: {
      en: "Traditionally channels Mars's assertive energy constructively, easing friction the placement is read for.",
      hi: "परंपरागत रूप से यह मंगल की आक्रामक ऊर्जा को रचनात्मक दिशा देता है, जिससे इस स्थिति से जुड़ा घर्षण कम होता है।",
      ja: "伝統的に、火星の行動的なエネルギーを建設的な方向へ導き、この配置が示す摩擦を和らげるとされます。",
      ko: "전통적으로 화성의 적극적인 에너지를 건설적으로 이끌어, 이 배치가 나타내는 마찰을 완화한다고 봅니다.",
    },
    howTo: {
      en: "Recite the Hanuman Chalisa on Tuesdays, and consider donating red lentils or jaggery that day.",
      hi: "मंगलवार को हनुमान चालीसा का पाठ करें, और उस दिन मसूर दाल या गुड़ का दान करने पर विचार करें।",
      ja: "火曜日にハヌマーン・チャリーサを唱え、その日にマスール豆やジャガリー（黒糖）を寄付することも考えてみてください。",
      ko: "화요일에 하누만 찰리사를 암송하고, 그날 렌틸콩이나 재거리(흑설탕)를 기부하는 것을 고려해 보세요.",
    },
  },
  {
    title: {
      en: "Kaal Sarp Dosha — Rahu-Ketu axis remedies",
      hi: "कालसर्प दोष — राहु-केतु अक्ष के उपाय",
      ja: "カーラ・サルパ・ドーシャ — ラーフ・ケートゥ軸のレメディ",
      ko: "칼 사르프 도샤 — 라후-케투 축 레메디",
    },
    whyItHelps: {
      en: "Traditionally eases the sense of being boxed in by circumstance that this configuration is read for, without needing every planet's specific placement.",
      hi: "परंपरागत रूप से यह परिस्थितियों से घिरे होने की भावना को कम करता है, जिसके लिए यह विन्यास पढ़ा जाता है — प्रत्येक ग्रह की विशिष्ट स्थिति जाने बिना भी।",
      ja: "伝統的に、この配置が示す「状況に閉じ込められている」という感覚を和らげるとされます。個々の惑星の配置を知らなくても行えます。",
      ko: "전통적으로 이 배치가 나타내는 '상황에 갇힌 듯한' 느낌을 완화한다고 보며, 개별 행성의 정확한 위치를 몰라도 행할 수 있습니다.",
    },
    howTo: {
      en: "Visit a Shiva temple on Mondays; some also recite the Maha Mrityunjaya mantra, or the Rahu/Ketu beej mantras on Saturdays.",
      hi: "सोमवार को शिव मंदिर जाएं; कुछ लोग महामृत्युंजय मंत्र, या शनिवार को राहु/केतु बीज मंत्र का जाप भी करते हैं।",
      ja: "月曜日にシヴァ寺院を訪れます。マハームリティユンジャヤ・マントラや、土曜日にラーフ・ケートゥのビージャ・マントラを唱える人もいます。",
      ko: "월요일에 시바 사원을 방문하세요. 마하 므리툰자야 만트라를 암송하거나, 토요일에 라후·케투 비자 만트라를 암송하는 사람도 있습니다.",
    },
  },
  {
    title: {
      en: "General malefic-yoga remedies",
      hi: "सामान्य अशुभ योग उपाय",
      ja: "一般的な凶ヨーガのレメディ",
      ko: "일반적인 흉 요가 레메디",
    },
    whyItHelps: {
      en: "A steady, low-key spiritual practice is the traditional response to most difficult combinations — not any single dramatic fix.",
      hi: "अधिकांश कठिन योगों के लिए पारंपरिक प्रतिक्रिया एक स्थिर, सामान्य आध्यात्मिक अभ्यास है — कोई एक नाटकीय समाधान नहीं।",
      ja: "多くの困難な組み合わせに対する伝統的な対応は、劇的な一つの解決策ではなく、地道で控えめな精神的実践です。",
      ko: "대부분의 어려운 조합에 대한 전통적인 대응은 극적인 하나의 해결책이 아니라, 꾸준하고 소박한 영적 실천입니다.",
    },
    howTo: {
      en: "Chanting your ruling planet's mantra daily, keeping a weekly fast, or regular charitable giving are all classically recommended — consistency matters more than which one you choose.",
      hi: "अपने स्वामी ग्रह के मंत्र का प्रतिदिन जाप, साप्ताहिक उपवास, या नियमित दान — ये सभी शास्त्रीय रूप से सुझाए गए हैं। आप कौन सा चुनते हैं उससे अधिक महत्वपूर्ण है निरंतरता।",
      ja: "支配星のマントラを毎日唱えること、週に一度の断食、定期的な寄付——これらはすべて古典的に推奨されています。どれを選ぶかより、続けることが大切です。",
      ko: "지배 행성의 만트라를 매일 암송하기, 주 1회 단식, 정기적인 기부 — 이 모두가 고전적으로 권장됩니다. 무엇을 선택하는지보다 꾸준함이 더 중요합니다.",
    },
  },
];
