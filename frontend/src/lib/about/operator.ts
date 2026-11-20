import type { BilingualText } from "@/lib/education/types";
import { TBD } from "@/lib/legal/content";

/**
 * 運営者情報 (site operator details) for /about. Server-only: kept out of
 * about/content.ts, which the footer imports into client JavaScript.
 * Every 【TO BE COMPLETED】 must be filled in by the operator.
 */
const todo: BilingualText = { en: TBD, hi: TBD, ja: TBD, ko: TBD };

export const operatorHeading: BilingualText = {
  en: "About this site",
  hi: "साइट संचालक की जानकारी",
  ja: "運営者情報",
  ko: "운영자 정보",
};

export const operatorRows: { label: BilingualText; value: BilingualText }[] = [
  {
    label: { en: "Site name", hi: "साइट का नाम", ja: "サイト名", ko: "사이트명" },
    value: { en: "Jyotish Life", hi: "Jyotish Life", ja: "Jyotish Life（ジョーティッシュ・ライフ）", ko: "Jyotish Life" },
  },
  {
    label: { en: "URL", hi: "URL", ja: "URL", ko: "URL" },
    value: { en: "https://jyotishlife.jp", hi: "https://jyotishlife.jp", ja: "https://jyotishlife.jp", ko: "https://jyotishlife.jp" },
  },
  { label: { en: "Operator", hi: "संचालक", ja: "運営者", ko: "운영자" }, value: todo },
  { label: { en: "Email", hi: "ईमेल", ja: "メールアドレス", ko: "이메일" }, value: todo },
  {
    label: { en: "Background", hi: "पृष्ठभूमि", ja: "運営の経緯", ko: "운영 경위" },
    value: todo,
  },
  {
    label: { en: "What we offer", hi: "हम क्या प्रदान करते हैं", ja: "提供内容", ko: "제공 내용" },
    value: {
      en: "Free Indian astrology (Jyotish) tools, learning articles and a course, and paid personal readings.",
      hi: "निःशुल्क भारतीय ज्योतिष उपकरण, अध्ययन लेख और पाठ्यक्रम, तथा सशुल्क व्यक्तिगत परामर्श।",
      ja: "インド占星術（ジョーティッシュ）の無料ツール、学習記事・講座、および有料の個人鑑定。",
      ko: "인도 점성술(조티시) 무료 도구, 학습 기사·강좌, 유료 개인 감정.",
    },
  },
  {
    label: { en: "Editorial policy", hi: "संपादकीय नीति", ja: "コンテンツ方針", ko: "콘텐츠 방침" },
    value: {
      en: "Articles and tool explanations are written to describe traditional Jyotish accurately and calmly, without fear-based claims. Charts are calculated in the sidereal zodiac with the Lahiri ayanamsa. Corrections are welcome via the contact page.",
      hi: "लेख और उपकरण-विवरण पारंपरिक ज्योतिष को सटीक और शांत ढंग से, भय उत्पन्न करने वाले दावों के बिना, प्रस्तुत करने हेतु लिखे जाते हैं। कुंडलियाँ लाहिड़ी अयनांश के साथ निरयण राशिचक्र में गणित की जाती हैं। सुधार संबंधी सुझाव संपर्क पृष्ठ के माध्यम से स्वागत योग्य हैं।",
      ja: "記事とツールの解説は、伝統的なジョーティッシュを正確かつ落ち着いた言葉で伝えることを方針とし、不安をあおる表現は用いません。チャートはラヒリ・アヤナムシャによるサイデリアル（恒星）黄道で計算しています。内容の誤りにお気づきの際は、お問い合わせページからお知らせください。",
      ko: "기사와 도구 설명은 전통 조티시를 정확하고 차분한 말로 전하는 것을 방침으로 하며, 불안을 부추기는 표현은 쓰지 않습니다. 차트는 라히리 아야남샤를 적용한 항성 황도로 계산합니다. 내용의 오류를 발견하시면 문의 페이지로 알려 주십시오.",
    },
  },
];
