import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Search titles and descriptions for pages whose menu label is too short
 * to rank on ("ホロスコープ", "個人鑑定"). The menu keeps its short label
 * (`getSharedCopy().navigation`); only <title> and the meta description
 * use these. Each line describes what the page actually contains.
 *
 * Japanese titles lead with the phrase people search for (12星座 運勢,
 * インド占星術 入門, 個人鑑定), then the site's angle.
 */
export type SeoPageId = "horoscope" | "learn" | "course" | "appraisals";

export const seoPageCopy: Record<AppLanguage, Record<SeoPageId, { title: string; description: string }>> = {
  ja: {
    horoscope: {
      title: "12星座の運勢（今週・今月・今年）｜インド占星術のラーシ占い",
      description:
        "インド占星術（ジョーティッシュ）で読む12星座（ラーシ）の今週・今月・今年の運勢。恋愛・仕事・健康と、その期間の指針を、週・月・年ごとに自動で更新してお届けします。",
    },
    learn: {
      title: "インド占星術入門｜ジョーティッシュの基礎を学ぶ無料ガイド",
      description:
        "インド占星術（ヴェーダ占星術・ジョーティッシュ）を基礎から学べる無料ガイド。西洋占星術との違い、12星座（ラーシ）、ナクシャトラ、惑星、ハウス、カルマの考え方まで、順番に解説します。",
    },
    course: {
      title: "インド占星術講座（無料）｜19章で学ぶヴェーダ占星術コース",
      description:
        "インド占星術（ヴェーダ占星術）を19章で順番に学べる無料のオンライン講座。惑星・12星座・ナクシャトラから、ダシャー、トランジット、チャート読解の練習まで。各章に確認ゲーム付き。",
    },
    appraisals: {
      title: "インド占星術の個人鑑定｜出生図の書面鑑定・オンラインセッション",
      description:
        "経験ある鑑定士によるインド占星術（ジョーティッシュ）の個人鑑定。書面による出生図鑑定、ビデオ・音声での個人セッション、相性鑑定、吉日選び（ムフルタ）。すべて手作業で、守秘義務を守ってお届けします。",
    },
  },
  en: {
    horoscope: {
      title: "Weekly, monthly and yearly horoscope for all 12 signs (Vedic)",
      description:
        "Vedic (Jyotish) horoscopes for all twelve rashis — this week, this month and this year — with love, career, health and guidance for the period, updated automatically.",
    },
    learn: {
      title: "Learn Vedic astrology (Jyotish): a free beginner's guide",
      description:
        "A free guide to Vedic astrology from the ground up: how Jyotish differs from Western astrology, the twelve rashis, the nakshatras, the planets, the houses and karma, explained in order.",
    },
    course: {
      title: "Free Vedic astrology course: 19 chapters, beginner to chart reading",
      description:
        "A free online course in Vedic astrology, nineteen chapters in order: planets, signs and nakshatras through dashas, transits and chart-reading practice, with a short game after each chapter.",
    },
    appraisals: {
      title: "Personal Vedic astrology reading: written report or live session",
      description:
        "Personal Jyotish readings by an experienced astrologer: a written birth-chart reading, a live video or audio session, compatibility and muhurta (auspicious timing). Prepared by hand, kept confidential.",
    },
  },
  hi: {
    horoscope: {
      title: "12 राशियों का साप्ताहिक, मासिक और वार्षिक राशिफल (वैदिक)",
      description:
        "वैदिक ज्योतिष से सभी बारह राशियों का इस सप्ताह, इस माह और इस वर्ष का राशिफल — प्रेम, करियर, स्वास्थ्य और मार्गदर्शन के साथ, अपने-आप अद्यतन।",
    },
    learn: {
      title: "वैदिक ज्योतिष सीखें: शुरुआती लोगों के लिए निःशुल्क मार्गदर्शिका",
      description:
        "वैदिक ज्योतिष को शुरू से सीखने की निःशुल्क मार्गदर्शिका: पश्चिमी ज्योतिष से अंतर, बारह राशियाँ, नक्षत्र, ग्रह, भाव और कर्म — क्रम से समझाए गए।",
    },
    course: {
      title: "निःशुल्क वैदिक ज्योतिष पाठ्यक्रम: 19 अध्याय, शुरुआत से कुंडली पढ़ने तक",
      description:
        "वैदिक ज्योतिष का निःशुल्क ऑनलाइन पाठ्यक्रम, उन्नीस अध्याय क्रम से: ग्रह, राशियाँ और नक्षत्र से लेकर दशा, गोचर और कुंडली पढ़ने के अभ्यास तक, हर अध्याय के बाद एक छोटा खेल।",
    },
    appraisals: {
      title: "व्यक्तिगत वैदिक ज्योतिष परामर्श: लिखित रिपोर्ट या लाइव सत्र",
      description:
        "अनुभवी ज्योतिषी द्वारा व्यक्तिगत ज्योतिष परामर्श: लिखित जन्म कुंडली विश्लेषण, वीडियो या ऑडियो सत्र, अनुकूलता और मुहूर्त। हाथ से तैयार, पूर्णतः गोपनीय।",
    },
  },
  ko: {
    horoscope: {
      title: "12별자리 주간·월간·연간 운세 (인도 점성술)",
      description:
        "인도 점성술(조티시)로 읽는 열두 라시의 이번 주·이번 달·올해 운세. 연애·일·건강과 그 기간의 지침을 주·월·연 단위로 자동 업데이트합니다.",
    },
    learn: {
      title: "인도 점성술 입문: 조티시 기초를 배우는 무료 가이드",
      description:
        "인도 점성술(베다 점성술·조티시)을 기초부터 배우는 무료 가이드. 서양 점성술과의 차이, 열두 라시, 낙샤트라, 행성, 하우스, 카르마까지 차례로 설명합니다.",
    },
    course: {
      title: "무료 인도 점성술 강좌: 19장으로 배우는 베다 점성술",
      description:
        "인도 점성술을 19장에 걸쳐 차례로 배우는 무료 온라인 강좌. 행성·별자리·낙샤트라부터 다샤, 트랜짓, 차트 읽기 연습까지, 각 장마다 확인 게임이 있습니다.",
    },
    appraisals: {
      title: "인도 점성술 개인 감정: 서면 출생 차트 감정·온라인 세션",
      description:
        "경험 있는 점성가의 조티시 개인 감정. 서면 출생 차트 감정, 화상·음성 개인 세션, 궁합 감정, 길일 선택(무후르타). 모두 수작업으로 준비하며 비밀을 지킵니다.",
    },
  },
};
