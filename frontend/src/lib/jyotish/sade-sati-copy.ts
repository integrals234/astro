import type { AppLanguage } from "@/lib/i18n/language";
import type { SadeSatiPhase } from "./sade-sati";

interface PhaseMeta {
  label: string;
  description: string;
}

interface SadeSatiCopy {
  heading: string;
  intro: string;
  phases: Record<SadeSatiPhase, PhaseMeta>;
  houseFromMoon: (house: number) => string;
  saturnReturnHeading: string;
  saturnReturnUpcoming: (age: number, year: number) => string;
  saturnReturnPast: string;
}

export const sadeSatiCopy: Record<AppLanguage, SadeSatiCopy> = {
  en: {
    heading: "Sade Sati & Saturn Return",
    intro: "Two ways Vedic and Western astrology each read Saturn's slow return to significance in a life — where transiting Saturn currently stands relative to your natal Moon, and when it completes a full orbit back to your birth position.",
    phases: {
      rising: { label: "Sade Sati — rising phase", description: "Saturn transits the sign before your natal Moon. The first of the three Sade Sati phases." },
      peak: { label: "Sade Sati — peak phase", description: "Saturn transits your natal Moon sign itself. Classically the most-felt of the three phases." },
      setting: { label: "Sade Sati — setting phase", description: "Saturn transits the sign after your natal Moon. The last of the three Sade Sati phases." },
      "dhaiya-fourth": { label: "Dhaiya (4th from Moon)", description: "A lesser Saturn period, not Sade Sati proper — Saturn transits the fourth sign from your natal Moon." },
      "dhaiya-eighth": { label: "Dhaiya (8th from Moon)", description: "A lesser Saturn period, not Sade Sati proper — Saturn transits the eighth sign from your natal Moon." },
      none: { label: "No active Saturn period", description: "Transiting Saturn is not currently in a position classically read as a Sade Sati or Dhaiya period for this chart." },
    },
    houseFromMoon: (house) => `Saturn is ${house} sign(s) from your natal Moon`,
    saturnReturnHeading: "Saturn return",
    saturnReturnUpcoming: (age, year) => `Next return around age ${age} (approximately ${year})`,
    saturnReturnPast: "Saturn's charted return ages (29, 59, 88) have all passed for this birth year.",
  },
  hi: {
    heading: "साढ़े साती और शनि की वापसी",
    intro: "शनि के जीवन में क्रमिक महत्व की दो पद्धतियाँ — गोचर शनि अभी आपके जन्म चंद्रमा के सापेक्ष कहाँ है, और वह कब अपनी जन्म स्थिति पर पूरी परिक्रमा करके लौटता है।",
    phases: {
      rising: { label: "साढ़े साती — प्रारंभिक चरण", description: "शनि आपके जन्म चंद्रमा से पहली राशि में गोचर कर रहा है। तीन साढ़े साती चरणों में पहला।" },
      peak: { label: "साढ़े साती — शिखर चरण", description: "शनि आपकी जन्म चंद्र राशि में ही गोचर कर रहा है। परंपरागत रूप से तीनों में सर्वाधिक अनुभव किया जाने वाला चरण।" },
      setting: { label: "साढ़े साती — अंतिम चरण", description: "शनि आपके जन्म चंद्रमा के बाद की राशि में गोचर कर रहा है। तीन साढ़े साती चरणों में अंतिम।" },
      "dhaiya-fourth": { label: "ढैया (चंद्र से चौथा)", description: "एक लघु शनि काल, वास्तविक साढ़े साती नहीं — शनि आपके जन्म चंद्रमा से चौथी राशि में गोचर कर रहा है।" },
      "dhaiya-eighth": { label: "ढैया (चंद्र से आठवां)", description: "एक लघु शनि काल, वास्तविक साढ़े साती नहीं — शनि आपके जन्म चंद्रमा से आठवीं राशि में गोचर कर रहा है।" },
      none: { label: "कोई सक्रिय शनि काल नहीं", description: "गोचर शनि वर्तमान में इस कुंडली के लिए शास्त्रीय रूप से साढ़े साती या ढैया काल के रूप में नहीं पढ़ी जाने वाली स्थिति में है।" },
    },
    houseFromMoon: (house) => `शनि आपके जन्म चंद्रमा से ${house} राशि दूर है`,
    saturnReturnHeading: "शनि की वापसी",
    saturnReturnUpcoming: (age, year) => `अगली वापसी लगभग ${age} वर्ष की आयु में (लगभग ${year})`,
    saturnReturnPast: "इस जन्म वर्ष के लिए शनि की सभी निर्धारित वापसी आयु (29, 59, 88) बीत चुकी हैं।",
  },
  ja: {
    heading: "サデ・サティと土星回帰",
    intro: "土星が人生に及ぼす影響を読む二つの方法です。トランジットの土星が今、出生時の月に対してどこにあるか、そして出生時の位置へ一周して戻るのはいつかを示します。",
    phases: {
      rising: { label: "サデ・サティ — 前期", description: "土星が出生時の月の一つ前の星座をトランジットしています。三段階あるサデ・サティの最初の段階です。" },
      peak: { label: "サデ・サティ — 中期（最盛期）", description: "土星が出生時の月星座そのものをトランジットしています。古典的に三段階の中で最も強く感じられるとされる時期です。" },
      setting: { label: "サデ・サティ — 後期", description: "土星が出生時の月の一つ後の星座をトランジットしています。三段階あるサデ・サティの最後の段階です。" },
      "dhaiya-fourth": { label: "ダイヤ（月から第4室）", description: "本来のサデ・サティではない、軽度の土星期間です。土星が出生時の月から数えて4番目の星座をトランジットしています。" },
      "dhaiya-eighth": { label: "ダイヤ（月から第8室）", description: "本来のサデ・サティではない、軽度の土星期間です。土星が出生時の月から数えて8番目の星座をトランジットしています。" },
      none: { label: "活性化した土星期間なし", description: "トランジットの土星は現在、このチャートにおいて古典的にサデ・サティやダイヤの期間として読まれる位置にはありません。" },
    },
    houseFromMoon: (house) => `土星は出生時の月から${house}番目の星座にあります`,
    saturnReturnHeading: "土星回帰",
    saturnReturnUpcoming: (age, year) => `次の回帰はおよそ${age}歳ごろ（${year}年頃）`,
    saturnReturnPast: "この生年について、土星回帰の目安となる年齢（29歳・59歳・88歳）はすべて過ぎています。",
  },
  ko: {
    heading: "사데 사티와 토성 회귀",
    intro: "토성이 삶에 미치는 점진적 중요성을 읽는 두 가지 방식입니다. 트랜짓 토성이 지금 출생 달 대비 어디에 있는지, 그리고 출생 위치로 한 바퀴 돌아오는 시점이 언제인지를 보여줍니다.",
    phases: {
      rising: { label: "사데 사티 — 상승기", description: "토성이 출생 달의 바로 앞 별자리를 트랜짓하고 있습니다. 세 단계 사데 사티 중 첫 번째입니다." },
      peak: { label: "사데 사티 — 정점기", description: "토성이 출생 달별자리 자체를 트랜짓하고 있습니다. 고전적으로 세 단계 중 가장 강하게 느껴진다고 여겨지는 시기입니다." },
      setting: { label: "사데 사티 — 하강기", description: "토성이 출생 달의 바로 다음 별자리를 트랜짓하고 있습니다. 세 단계 사데 사티 중 마지막입니다." },
      "dhaiya-fourth": { label: "다이야(달로부터 4번째)", description: "진정한 사데 사티는 아닌 경미한 토성 시기입니다. 토성이 출생 달로부터 네 번째 별자리를 트랜짓하고 있습니다." },
      "dhaiya-eighth": { label: "다이야(달로부터 8번째)", description: "진정한 사데 사티는 아닌 경미한 토성 시기입니다. 토성이 출생 달로부터 여덟 번째 별자리를 트랜짓하고 있습니다." },
      none: { label: "활성화된 토성 시기 없음", description: "트랜짓 토성은 현재 이 차트에서 고전적으로 사데 사티나 다이야 시기로 읽히는 위치에 있지 않습니다." },
    },
    houseFromMoon: (house) => `토성이 출생 달로부터 ${house}번째 별자리에 있습니다`,
    saturnReturnHeading: "토성 회귀",
    saturnReturnUpcoming: (age, year) => `다음 회귀는 약 ${age}세 무렵(약 ${year}년)`,
    saturnReturnPast: "이 출생 연도의 토성 회귀 기준 나이(29세, 59세, 88세)가 모두 지났습니다.",
  },
};
