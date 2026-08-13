import type { BilingualText } from "@/lib/education/types";

/**
 * Practitioner page copy (Phase 3.13).
 *
 * Every claim here is drawn from copy the site already publishes in
 * `welcome-content.ts` — Vedic Brahmin family tradition, training under
 * Jyotishacharya Dr. Usha Shukla. Nothing has been added or embellished:
 * on a YMYL-adjacent topic an unverifiable credential is both a 景品表示法
 * exposure and the fastest way to lose the E-E-A-T benefit the page exists for.
 *
 * The disclaimer is the same standing 娯楽・自己理解 line as the footer.
 */
export const aboutContent = {
  eyebrow: {
    en: "The practitioner",
    hi: "ज्योतिषी",
    ja: "鑑定士について",
    ko: "역술가 소개",
  },
  title: {
    en: "Om Shukla",
    hi: "ओम शुक्ला",
    ja: "オム・シュクラ",
    ko: "옴 슈클라",
  },
  lead: {
    en: "A Vedic Brahmin astrologer trained in a family tradition of Jyotish.",
    hi: "ज्योतिष की पारिवारिक परंपरा में प्रशिक्षित एक वैदिक ब्राह्मण ज्योतिषी।",
    ja: "家系に伝わるジョーティッシュを受け継ぐ、ヴェーダ・ブラーミンの占星術師です。",
    ko: "조티시의 가문 전통에서 수련한 베다 브라만 점성가입니다.",
  },
  body: {
    en: "Om Shukla was trained in Jyotish within his family tradition, with further study under Jyotishacharya Dr. Usha Shukla — a gold medalist holding a PhD in Vedic Astrology. Personal appraisals on Jyotish Life are prepared by him directly rather than generated, and the learning material on the site is written from the same practice.",
    hi: "ओम शुक्ला ने ज्योतिष की शिक्षा अपनी पारिवारिक परंपरा में प्राप्त की, और आगे ज्योतिषाचार्य डॉ. उषा शुक्ला — स्वर्ण पदक विजेता एवं वैदिक ज्योतिष में पीएचडी — के मार्गदर्शन में अध्ययन किया। ज्योतिष लाइफ़ पर व्यक्तिगत परामर्श स्वचालित रूप से नहीं, बल्कि सीधे उनके द्वारा तैयार किए जाते हैं, और साइट की अध्ययन सामग्री उसी अभ्यास से लिखी गई है।",
    ja: "オム・シュクラは、家系に伝わるジョーティッシュの伝統のなかで学び、さらにジョーティシャーチャーリヤ ウシャ・シュクラ博士（ヴェーダ占星術の博士号を持つ金メダリスト）のもとで研鑽を積みました。Jyotish Life の個人鑑定は自動生成ではなく、すべて本人が直接作成しています。サイトの学習コンテンツも同じ実践にもとづいて執筆されています。",
    ko: "옴 슈클라는 가문에 전해지는 조티시 전통 안에서 배웠고, 이후 조티샤차리야 우샤 슈클라 박사(베다 점성술 박사, 금메달리스트) 아래에서 수학했습니다. Jyotish Life의 개인 감정은 자동 생성이 아니라 본인이 직접 작성하며, 사이트의 학습 자료 또한 같은 실천에서 나온 것입니다.",
  },
  knowsAboutHeading: {
    en: "Areas of practice",
    hi: "अभ्यास के क्षेत्र",
    ja: "取り扱う領域",
    ko: "다루는 분야",
  },
  disclaimer: {
    en: "Readings are offered for entertainment and self-understanding. Results are not guaranteed, and nothing here is medical, legal, or financial advice.",
    hi: "परामर्श मनोरंजन और आत्म-बोध के उद्देश्य से दिए जाते हैं। परिणामों की गारंटी नहीं है, और यह चिकित्सा, कानूनी या वित्तीय सलाह नहीं है।",
    ja: "鑑定は娯楽および自己理解を目的としてご提供しています。結果を保証するものではなく、医療・法律・財務に関する助言ではありません。",
    ko: "감정은 오락 및 자기 이해를 목적으로 제공됩니다. 결과를 보장하지 않으며, 의료·법률·재무 조언이 아닙니다.",
  },
} as const satisfies Record<string, BilingualText>;

/** `knowsAbout` for the Person schema — the entity sets the site actually covers. */
export const ABOUT_KNOWS_ABOUT = [
  "Vedic astrology",
  "Jyotish",
  "Nakshatra",
  "Rashi",
  "Graha",
  "Vimshottari Dasha",
  "Natal chart interpretation",
];
