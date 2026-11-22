/**
 * The /horoscope readings, computed: where the planets actually are during
 * the period, read from each sign as a Moon sign (classical gochar).
 *
 * Replaces the old seeded-template generator, which gave several signs the
 * same sentences. Everything here comes from positions (lib/sky/orbits.ts):
 * each planet's house from the sign, whether the classical gochar table
 * counts that house favourable, sign changes (ingresses) inside the period,
 * Saturn's Sade Sati / 4th / 8th, and for a week the Moon day by day.
 */
import type { AppLanguage } from "@/lib/i18n/language";
import { centuries, grahaLongitudes, type Graha } from "@/lib/sky/orbits";
import { moonSidereal, moonTransitHouse, MOON_HOUSE_QUALITY } from "@/lib/daily/moon-day";

export type TransitPlanet = "Sun" | "Mars" | "Mercury" | "Venus" | "Jupiter" | "Saturn" | "Rahu";
export const TRANSIT_PLANETS: readonly TransitPlanet[] = ["Jupiter", "Saturn", "Rahu", "Sun", "Mars", "Venus", "Mercury"];

/** Classical gochar: houses (from the Moon sign) where each planet is favourable. */
const GOOD_HOUSES: Record<TransitPlanet, readonly number[]> = {
  Sun: [3, 6, 10, 11],
  Mars: [3, 6, 11],
  Mercury: [2, 4, 6, 8, 10, 11],
  Venus: [1, 2, 3, 4, 5, 8, 9, 11, 12],
  Jupiter: [2, 5, 7, 9, 11],
  Saturn: [3, 6, 11],
  Rahu: [3, 6, 11],
};

/** Slow planets weigh more in the period's overall tone. */
const WEIGHT: Record<TransitPlanet, number> = { Jupiter: 3, Saturn: 3, Rahu: 2, Sun: 1, Mars: 1, Venus: 1, Mercury: 1 };

const signOf = (lon: number) => Math.floor((((lon % 360) + 360) % 360) / 30);
const signAt = (planet: Graha, at: Date) => signOf(grahaLongitudes(centuries(at))[planet]);

export interface PlanetTransit {
  planet: TransitPlanet;
  /** House from the sign at the period's start (1–12). */
  house: number;
  good: boolean;
  /** A sign change inside the period, if any. */
  ingress: { date: Date; toSign: number; toHouse: number; toGood: boolean } | null;
}

export interface SignForecast {
  sign: number;
  tone: "good" | "mixed" | "caution";
  planets: PlanetTransit[];
  /** Saturn 12th/1st/2nd from the sign. */
  sadeSati: boolean;
  /** Saturn 4th (kantaka) or 8th (ashtama). */
  saturnHard: 4 | 8 | null;
  /** Weekly only: the Moon's quality day by day. */
  days: { date: Date; house: number; quality: "good" | "mixed" | "caution" }[];
}

const DAY = 24 * 3600_000;

/** First day in [start, end] where `planet` is in a different sign than at start. */
function findIngress(planet: Graha, start: Date, end: Date): { date: Date; toSign: number } | null {
  const s0 = signAt(planet, start);
  const step = Math.max(DAY, Math.floor((end.getTime() - start.getTime()) / 120));
  for (let t = start.getTime() + step; t <= end.getTime() + step; t += step) {
    const at = new Date(Math.min(t, end.getTime()));
    if (signAt(planet, at) !== s0) {
      let a = at.getTime() - step;
      let b = at.getTime();
      while (b - a > DAY / 4) {
        const mid = (a + b) / 2;
        if (signAt(planet, new Date(mid)) === s0) a = mid;
        else b = mid;
      }
      return { date: new Date(b), toSign: signAt(planet, new Date(b)) };
    }
    if (at.getTime() === end.getTime()) break;
  }
  return null;
}

export function forecastForSign(sign: number, start: Date, end: Date, weekly: boolean): SignForecast {
  const planets = TRANSIT_PLANETS.map((planet): PlanetTransit => {
    const s = signAt(planet, start);
    const house = moonTransitHouse(sign, s);
    const ing = findIngress(planet, start, end);
    return {
      planet,
      house,
      good: GOOD_HOUSES[planet].includes(house),
      ingress: ing
        ? { date: ing.date, toSign: ing.toSign, toHouse: moonTransitHouse(sign, ing.toSign), toGood: GOOD_HOUSES[planet].includes(moonTransitHouse(sign, ing.toSign)) }
        : null,
    };
  });
  const score = planets.reduce((acc, p) => acc + (p.good ? 1 : -1) * WEIGHT[p.planet], 0);
  const saturnHouse = planets.find((p) => p.planet === "Saturn")!.house;
  const days = weekly
    ? Array.from({ length: 7 }, (_, i) => {
        const date = new Date(start.getTime() + i * DAY + DAY / 2);
        const house = moonTransitHouse(sign, signOf(moonSidereal(date)));
        return { date, house, quality: MOON_HOUSE_QUALITY[house] };
      })
    : [];
  return {
    sign,
    tone: score >= 3 ? "good" : score <= -4 ? "caution" : "mixed",
    planets,
    sadeSati: [12, 1, 2].includes(saturnHouse),
    saturnHard: saturnHouse === 4 ? 4 : saturnHouse === 8 ? 8 : null,
    days,
  };
}

export interface TransitCopy {
  intro: string;
  houseTopic: Record<number, string>;
  tone: Record<"good" | "mixed" | "caution", string>;
  favourable: string;
  challenging: string;
  planetsTitle: string;
  inHouse: (planet: string, house: number, topic: string) => string;
  ingress: (planet: string, date: string, sign: string) => string;
  sadeSati: string;
  saturn4: string;
  saturn8: string;
  daysTitle: string;
  bestDays: (days: string) => string;
  careDays: (days: string) => string;
  todayLink: string;
  method: string;
}

export const transitCopy: Record<AppLanguage, TransitCopy> = {
  ja: {
    intro: "各星座を月星座として、その期間に惑星が実際にどこを運行しているかを計算し、インド占星術の古典的なゴーチャラ（トランジット）で読んでいます。生まれたときの月の星座（月星座）でお読みください。",
    houseTopic: { 1: "自分・心身", 2: "お金・家族", 3: "行動・連絡", 4: "家庭・心の安定", 5: "恋愛・創造・子ども", 6: "仕事の課題・健康管理", 7: "パートナー・対人", 8: "変化・試練", 9: "学び・幸運・遠方", 10: "仕事・社会的立場", 11: "収入・願望・仲間", 12: "出費・休息・内省" },
    tone: { good: "好調な期間", mixed: "穏やかな期間", caution: "慎重に過ごしたい期間" },
    favourable: "吉",
    challenging: "注意",
    planetsTitle: "この期間の惑星",
    inHouse: (p, h, topic) => `${p}：第${h}室（${topic}）`,
    ingress: (p, d, s) => `${d}に${p}が${s}へ移ります`,
    sadeSati: "土星が月星座の前後にある「サデサティ」の時期です。責任や見直しが増えやすく、着実さが鍵とされます。",
    saturn4: "土星が第4室にある時期（カンタカ・シャニ）。家庭や心の落ち着きを大切にとされます。",
    saturn8: "土星が第8室にある時期（アシュタマ・シャニ）。無理をせず、健康と生活の土台を守ることが大切とされます。",
    daysTitle: "今週の月（日ごと）",
    bestDays: (d) => `好調な日：${d}`,
    careDays: (d) => `慎重にしたい日（チャンドラシュタマ）：${d}`,
    todayLink: "今日の運勢を詳しく見る",
    method: "惑星の位置は天文計算（ラヒリ方式のサイデリアル）による概算です。",
  },
  en: {
    intro: "Each sign is read as a Moon sign: where the planets actually are during the period, interpreted by classical Vedic gochar (transits). Read the sign the Moon was in at your birth.",
    houseTopic: { 1: "self and body", 2: "money and family", 3: "initiative and messages", 4: "home and peace of mind", 5: "romance, creativity and children", 6: "work problems and health", 7: "partners and others", 8: "change and trials", 9: "study, luck and travel", 10: "career and standing", 11: "income, wishes and friends", 12: "spending, rest and reflection" },
    tone: { good: "A favourable period", mixed: "A steady period", caution: "A period to move carefully" },
    favourable: "Favourable",
    challenging: "Challenging",
    planetsTitle: "The planets this period",
    inHouse: (p, h, topic) => `${p}: house ${h} (${topic})`,
    ingress: (p, d, s) => `${p} enters ${s} on ${d}`,
    sadeSati: "Saturn is around your Moon sign — Sade Sati. Responsibilities and reassessment grow; steadiness is the key.",
    saturn4: "Saturn in the 4th (kantaka Shani): protect home life and inner calm.",
    saturn8: "Saturn in the 8th (ashtama Shani): don't overreach; guard health and foundations.",
    daysTitle: "The Moon this week, day by day",
    bestDays: (d) => `Best days: ${d}`,
    careDays: (d) => `Take care (chandrashtama): ${d}`,
    todayLink: "Today's reading in detail",
    method: "Planetary positions are astronomical approximations (Lahiri sidereal).",
  },
  hi: {
    intro: "प्रत्येक राशि को चंद्र राशि मानकर: अवधि में ग्रह वास्तव में कहाँ हैं, शास्त्रीय गोचर से पढ़ा गया। अपनी जन्म चंद्र राशि पढ़ें।",
    houseTopic: { 1: "स्वयं और शरीर", 2: "धन और परिवार", 3: "पराक्रम और संवाद", 4: "घर और मन की शांति", 5: "प्रेम, सृजन और संतान", 6: "कार्य की बाधाएँ और स्वास्थ्य", 7: "साथी और संबंध", 8: "परिवर्तन और परीक्षा", 9: "अध्ययन, भाग्य और यात्रा", 10: "करियर और प्रतिष्ठा", 11: "आय, इच्छाएँ और मित्र", 12: "व्यय, विश्राम और चिंतन" },
    tone: { good: "शुभ अवधि", mixed: "स्थिर अवधि", caution: "सावधानी की अवधि" },
    favourable: "शुभ",
    challenging: "चुनौतीपूर्ण",
    planetsTitle: "इस अवधि के ग्रह",
    inHouse: (p, h, topic) => `${p}: ${h}वाँ भाव (${topic})`,
    ingress: (p, d, s) => `${d} को ${p} ${s} में प्रवेश`,
    sadeSati: "शनि आपकी चंद्र राशि के आसपास — साढ़ेसाती। ज़िम्मेदारियाँ बढ़ती हैं; धैर्य कुंजी है।",
    saturn4: "चौथे भाव में शनि (कंटक शनि): घर और मन की शांति की रक्षा करें।",
    saturn8: "आठवें भाव में शनि (अष्टम शनि): अति न करें; स्वास्थ्य और आधार की रक्षा करें।",
    daysTitle: "इस सप्ताह चंद्रमा, दिन-प्रतिदिन",
    bestDays: (d) => `शुभ दिन: ${d}`,
    careDays: (d) => `सावधानी (चंद्राष्टम): ${d}`,
    todayLink: "आज का विस्तृत फल",
    method: "ग्रहों की स्थिति खगोलीय अनुमान (लाहिड़ी निरयन) है।",
  },
  ko: {
    intro: "각 별자리를 달 별자리로 보고, 그 기간에 행성이 실제로 어디를 지나는지 계산하여 고전 고차라(트랜짓)로 읽습니다. 태어날 때의 달 별자리로 읽으세요.",
    houseTopic: { 1: "자신·몸", 2: "돈·가족", 3: "행동·연락", 4: "가정·마음의 안정", 5: "연애·창작·자녀", 6: "일의 과제·건강", 7: "파트너·대인관계", 8: "변화·시련", 9: "배움·행운·여행", 10: "일·사회적 지위", 11: "수입·소망·동료", 12: "지출·휴식·성찰" },
    tone: { good: "좋은 기간", mixed: "평온한 기간", caution: "신중하게 보낼 기간" },
    favourable: "길",
    challenging: "주의",
    planetsTitle: "이 기간의 행성",
    inHouse: (p, h, topic) => `${p}: 제${h}하우스 (${topic})`,
    ingress: (p, d, s) => `${d}에 ${p}이(가) ${s}(으)로 이동`,
    sadeSati: "토성이 달 별자리 주변에 있는 '사데사티' 시기입니다. 책임과 재검토가 늘어나며 꾸준함이 열쇠입니다.",
    saturn4: "토성이 제4하우스에 있는 시기(칸타카 샤니). 가정과 마음의 평안을 지키세요.",
    saturn8: "토성이 제8하우스에 있는 시기(아슈타마 샤니). 무리하지 말고 건강과 기반을 지키세요.",
    daysTitle: "이번 주 달 (날짜별)",
    bestDays: (d) => `좋은 날: ${d}`,
    careDays: (d) => `주의할 날 (찬드라슈타마): ${d}`,
    todayLink: "오늘의 운세 자세히 보기",
    method: "행성 위치는 천문 계산(라히리 항성식) 근사치입니다.",
  },
};
