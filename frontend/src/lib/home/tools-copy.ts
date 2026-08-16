import type { AppLanguage } from "@/lib/i18n/language";

interface HomeToolsCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  personalised: (label: string) => string;
}

export const homeToolsCopy: Record<AppLanguage, HomeToolsCopy> = {
  ja: {
    eyebrow: "無料でお使いいただけます",
    heading: "占星術ツール",
    intro:
      "出生データを一度ご入力いただければ、以下のすべてのツールがそのまま使えます。各ツールで入力し直す必要はありません。",
    personalised: (l) =>
      `${l} さんの出生データを保存済みです。以下のツールはいずれも、再入力なしでそのままご利用いただけます。`,
  },
  en: {
    eyebrow: "Free to use",
    heading: "Astrology tools",
    intro:
      "Enter your birth details once and every tool below is ready to use. No re-entering them on each page.",
    personalised: (l) =>
      `Your details for ${l} are saved. Every tool below is ready to use without entering them again.`,
  },
  hi: {
    eyebrow: "निःशुल्क उपयोग",
    heading: "ज्योतिष उपकरण",
    intro:
      "जन्म-विवरण एक बार दर्ज करें और नीचे के सभी उपकरण उपयोग के लिए तैयार हैं। हर पृष्ठ पर दोबारा दर्ज करने की आवश्यकता नहीं।",
    personalised: (l) =>
      `${l} का विवरण सहेजा जा चुका है। नीचे के सभी उपकरण बिना दोबारा दर्ज किए उपयोग के लिए तैयार हैं।`,
  },
  ko: {
    eyebrow: "무료로 이용하실 수 있습니다",
    heading: "점성술 도구",
    intro:
      "출생 정보를 한 번만 입력하면 아래 모든 도구를 바로 사용할 수 있습니다. 각 도구에서 다시 입력할 필요가 없습니다.",
    personalised: (l) =>
      `${l}님의 출생 정보가 저장되어 있습니다. 아래 도구는 모두 다시 입력하지 않고 바로 사용하실 수 있습니다.`,
  },
};
