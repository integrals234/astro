import type { AppLanguage } from "@/lib/i18n/language";
import type { Tara } from "@/lib/sukuyo/relations";

/**
 * Copy for the daily pages (/today and the daily sections on the rashi and
 * 宿 pages). Readings follow classical Chandra gochar (the Moon's transit
 * counted from the natal Moon sign) and tara bala, phrased as tradition.
 */
export interface DailyCopy {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  dateLabel: (date: string) => string;
  moonNow: string;
  moonInSign: (sign: string) => string;
  moonEnters: (time: string, next: string) => string;
  shukuToday: string;
  nakshatraToday: string;
  until: (time: string) => string;
  from: (time: string) => string;
  tithi: string;
  signTableTitle: string;
  signTableLead: string;
  yourMoonSign: string;
  house: (n: number) => string;
  quality: Record<"good" | "mixed" | "caution", string>;
  taraTableTitle: string;
  taraTableLead: string;
  yourNakshatra: string;
  findTitle: string;
  findLead: string;
  findDate: string;
  findTime: string;
  findResult: (sign: string, nak: string) => string;
  findExact: string;
  methodNote: string;
  sectionTitle: string;
  updated: (time: string) => string;
  tomorrow: string;
  houseText: Record<number, string>;
  taraName: Record<Tara, string>;
  taraText: Record<Tara, string>;
}

export const dailyCopy: Record<AppLanguage, DailyCopy> = {
  ja: {
    title: "今日の運勢｜月星座とナクシャトラで見る一日",
    metaTitle: "今日の運勢（月星座・宿曜）｜インド占星術で見る今日の月",
    metaDescription:
      "今日の月がどの星座・宿（ナクシャトラ）にあるかを毎日計算し、12の月星座別の運勢と、27宿別の日運を表示します。インド占星術の古典的なチャンドラ・ゴーチャラとターラ・バラに基づく一日の目安です。",
    lead: "インド占星術では、一日の流れを月の位置で読みます。今日の月が、あなたの月星座から数えて何番目の星座にあるか、あなたの生まれの宿から数えて何番目の宿にあるかで、その日の目安がわかるとされます。",
    dateLabel: (d) => `${d}（日本時間）`,
    moonNow: "今日の月",
    moonInSign: (s) => `月は${s}に`,
    moonEnters: (t, n) => `${t}に${n}へ移ります`,
    shukuToday: "今日の宿",
    nakshatraToday: "今日のナクシャトラ",
    until: (t) => `${t}まで`,
    from: (t) => `${t}から`,
    tithi: "ティティ（月の日）",
    signTableTitle: "月星座別・今日の運勢",
    signTableLead: "あなたの月星座（生まれたときの月の星座）から、今日の月が何番目の星座にあるかで読みます。月星座は、西洋占星術の「12星座」（太陽の星座）とは異なることがあります。",
    yourMoonSign: "月星座",
    house: (n) => `第${n}室`,
    quality: { good: "好調", mixed: "普通", caution: "慎重に" },
    taraTableTitle: "生まれのナクシャトラ別・今日のターラ",
    taraTableLead: "生まれたときの月のナクシャトラ（宿）から、今日のナクシャトラまでを数える「ターラ・バラ」。宿曜の日運と同じ九つの巡りです。",
    yourNakshatra: "生まれのナクシャトラ",
    findTitle: "月星座がわからない方へ",
    findLead: "生年月日と生まれた時刻から、月星座とナクシャトラの目安を計算します（日本時間）。",
    findDate: "生年月日",
    findTime: "出生時刻",
    findResult: (s, n) => `月星座：${s}／ナクシャトラ：${n}`,
    findExact: "出生地まで入れて正確に調べる",
    methodNote: "月の位置は天文計算（ラヒリ方式のサイデリアル）による概算で、日本時間で表示しています。宿は月の実際の位置で判定しているため、宿曜暦の日付で宿を割り当てるサイトとは、日によって異なることがあります。",
    sectionTitle: "今日の運勢",
    updated: (t) => `${t} 更新`,
    tomorrow: "明日の月",
    houseText: {
      1: "月があなたの月星座に戻る日。気持ちが満ち、自分のペースで動けるとされます。体調管理も大切に。",
      2: "家計やお金、身近な人との会話に意識が向く日。出費は計画的にとされます。",
      3: "行動力が高まり、連絡や短い外出がうまくいきやすい日とされます。",
      4: "気持ちが内向きになりやすい日。家で落ち着いて過ごすとよいとされます。",
      5: "創造性や楽しみに目が向く一方、判断が揺れやすい日。勢いでの決断は控えめにとされます。",
      6: "問題を片づけ、競争や交渉に強い日とされます。体を動かすのにも向きます。",
      7: "人との縁が実りやすい日。パートナーや相手との対話に向くとされます。",
      8: "チャンドラシュタマ（月が8番目）の日。気持ちが揺れやすく、大切な決断や無理は避けるのがよいとされます。",
      9: "学びや精神的なことに向く一方、思いどおりに進みにくい日。焦らずにとされます。",
      10: "仕事や役割で成果を出しやすい日。周囲からの評価も得やすいとされます。",
      11: "望みが叶いやすく、人脈や収入に恵まれやすい日とされます。",
      12: "出費や疲れが出やすい日。休息や振り返り、静かな時間にあてるとよいとされます。",
    },
    taraName: { janma: "ジャンマ（命）", sampat: "サンパット（栄）", vipat: "ヴィパット（衰）", kshema: "クシェーマ（安）", pratyak: "プラティヤク（危）", sadhana: "サーダナ（成）", naidhana: "ナイダナ（壊）", mitra: "ミトラ（友）", paramaMitra: "パラマ・ミトラ（親）" },
    taraText: {
      janma: "生まれの星に月が戻る日。自分を整えるのによいとされます。",
      sampat: "繁栄の星。物事が順調に進みやすいとされます。",
      vipat: "障りの星。無理をせず慎重にとされます。",
      kshema: "安寧の星。穏やかで安定した日とされます。",
      pratyak: "障害の星。予定どおりに進みにくいとされます。",
      sadhana: "成就の星。努力が実を結びやすいとされます。",
      naidhana: "破壊の星。新しいことは避けるのがよいとされます。",
      mitra: "友の星。人との関わりが助けになるとされます。",
      paramaMitra: "親友の星。周囲の支えに恵まれやすいとされます。",
    },
  },
  en: {
    title: "Today's Vedic horoscope by Moon sign and nakshatra",
    metaTitle: "Today's Vedic horoscope: the Moon's sign and nakshatra today",
    metaDescription:
      "Where today's Moon is — its sign and nakshatra — computed daily, with a reading for each of the twelve Moon signs and each of the 27 nakshatras, from classical Chandra gochar and tara bala.",
    lead: "Vedic astrology reads the day from the Moon. Count from your natal Moon sign to the sign the Moon is in today, and from your birth nakshatra to today's nakshatra, and the tradition gives a reading for the day.",
    dateLabel: (d) => `${d} (Japan time)`,
    moonNow: "Today's Moon",
    moonInSign: (s) => `The Moon is in ${s}`,
    moonEnters: (t, n) => `enters ${n} at ${t}`,
    shukuToday: "Today's nakshatra",
    nakshatraToday: "Today's nakshatra",
    until: (t) => `until ${t}`,
    from: (t) => `from ${t}`,
    tithi: "Tithi (lunar day)",
    signTableTitle: "Today by Moon sign",
    signTableLead: "Read from your Moon sign (the sign the Moon was in at your birth) — which can differ from your Western Sun sign.",
    yourMoonSign: "Moon sign",
    house: (n) => `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"} house`,
    quality: { good: "Favourable", mixed: "Mixed", caution: "Take care" },
    taraTableTitle: "Today's tara by birth nakshatra",
    taraTableLead: "Tara bala counts from your birth nakshatra to today's nakshatra — nine taras in a repeating cycle.",
    yourNakshatra: "Birth nakshatra",
    findTitle: "Don't know your Moon sign?",
    findLead: "Enter your birth date and time for an estimate of your Moon sign and nakshatra (Japan time).",
    findDate: "Date of birth",
    findTime: "Time of birth",
    findResult: (s, n) => `Moon sign: ${s} · Nakshatra: ${n}`,
    findExact: "Check it exactly, with your birthplace",
    methodNote: "The Moon's position is an astronomical approximation (Lahiri sidereal), shown in Japan time.",
    sectionTitle: "Today",
    updated: (t) => `Updated ${t}`,
    tomorrow: "Tomorrow's Moon",
    houseText: {
      1: "The Moon returns to your Moon sign: a full, self-directed day. Look after your health.",
      2: "Attention turns to money and family conversations. Spend with a plan.",
      3: "Energy and initiative rise; messages and short trips go well.",
      4: "Feelings turn inward. A good day to stay close to home.",
      5: "Creative and playful, but judgement wavers. Avoid impulsive decisions.",
      6: "Strong for clearing problems, competition and negotiation; good for exercise.",
      7: "Relationships bear fruit; good for talking things through with a partner.",
      8: "Chandrashtama — the Moon in the 8th. Moods swing; avoid big decisions and strain.",
      9: "Good for study and inner work, though things may not go to plan. Don't rush.",
      10: "A day to deliver at work and in your role; recognition comes more easily.",
      11: "Wishes are more easily met; gains through people and income.",
      12: "Costs and tiredness show. Rest, reflect and keep the day quiet.",
    },
    taraName: { janma: "Janma", sampat: "Sampat", vipat: "Vipat", kshema: "Kshema", pratyak: "Pratyak", sadhana: "Sadhana", naidhana: "Naidhana", mitra: "Mitra", paramaMitra: "Parama Mitra" },
    taraText: {
      janma: "The Moon returns to your birth star: a day to steady yourself.",
      sampat: "The star of wealth: things move smoothly.",
      vipat: "The star of danger: go carefully, don't overreach.",
      kshema: "The star of well-being: calm and settled.",
      pratyak: "The star of obstacles: plans may stall.",
      sadhana: "The star of achievement: effort pays off.",
      naidhana: "The star of destruction: avoid starting anything new.",
      mitra: "The star of friendship: people help.",
      paramaMitra: "The star of the close friend: support comes easily.",
    },
  },
  hi: {
    title: "आज का राशिफल — चंद्र राशि और नक्षत्र से",
    metaTitle: "आज का वैदिक राशिफल: आज चंद्रमा की राशि और नक्षत्र",
    metaDescription:
      "आज चंद्रमा किस राशि और नक्षत्र में है — प्रतिदिन गणना, बारह चंद्र राशियों और 27 नक्षत्रों के लिए फल, शास्त्रीय चंद्र गोचर और तारा बल के आधार पर।",
    lead: "वैदिक ज्योतिष दिन को चंद्रमा से पढ़ता है। अपनी जन्म चंद्र राशि से आज की राशि तक, और जन्म नक्षत्र से आज के नक्षत्र तक गिनें — परंपरा उस दिन का फल बताती है।",
    dateLabel: (d) => `${d} (जापान समय)`,
    moonNow: "आज का चंद्रमा",
    moonInSign: (s) => `चंद्रमा ${s} में`,
    moonEnters: (t, n) => `${t} पर ${n} में प्रवेश`,
    shukuToday: "आज का नक्षत्र",
    nakshatraToday: "आज का नक्षत्र",
    until: (t) => `${t} तक`,
    from: (t) => `${t} से`,
    tithi: "तिथि",
    signTableTitle: "चंद्र राशि अनुसार आज",
    signTableLead: "अपनी चंद्र राशि (जन्म के समय चंद्रमा की राशि) से पढ़ें — यह पश्चिमी सूर्य राशि से भिन्न हो सकती है।",
    yourMoonSign: "चंद्र राशि",
    house: (n) => `${n}वाँ भाव`,
    quality: { good: "शुभ", mixed: "मिश्रित", caution: "सावधानी" },
    taraTableTitle: "जन्म नक्षत्र अनुसार आज का तारा",
    taraTableLead: "तारा बल जन्म नक्षत्र से आज के नक्षत्र तक गिनता है — नौ तारे एक चक्र में।",
    yourNakshatra: "जन्म नक्षत्र",
    findTitle: "अपनी चंद्र राशि नहीं जानते?",
    findLead: "जन्म तिथि और समय से चंद्र राशि और नक्षत्र का अनुमान (जापान समय)।",
    findDate: "जन्म तिथि",
    findTime: "जन्म समय",
    findResult: (s, n) => `चंद्र राशि: ${s} · नक्षत्र: ${n}`,
    findExact: "जन्म स्थान सहित सटीक जाँचें",
    methodNote: "चंद्रमा की स्थिति खगोलीय अनुमान (लाहिड़ी निरयन) है, जापान समय में।",
    sectionTitle: "आज",
    updated: (t) => `अद्यतन ${t}`,
    tomorrow: "कल का चंद्रमा",
    houseText: {
      1: "चंद्रमा आपकी चंद्र राशि में लौटता है: मन प्रसन्न, अपनी गति से चलें। स्वास्थ्य का ध्यान रखें।",
      2: "धन और परिवार की बातों पर ध्यान। योजना से खर्च करें।",
      3: "साहस और पहल बढ़ती है; संदेश और छोटी यात्राएँ सफल।",
      4: "मन भीतर मुड़ता है। घर के पास रहना अच्छा।",
      5: "रचनात्मक और आनंदमय, पर निर्णय डगमगाते हैं। आवेग से बचें।",
      6: "समस्याएँ सुलझाने, प्रतिस्पर्धा और बातचीत के लिए शुभ; व्यायाम के लिए अच्छा।",
      7: "संबंध फलते हैं; साथी से बात करने के लिए अच्छा।",
      8: "चंद्राष्टम — चंद्रमा आठवें में। मन अस्थिर; बड़े निर्णय और अति से बचें।",
      9: "अध्ययन और आध्यात्म के लिए अच्छा, पर काम योजना के अनुसार न चलें। धैर्य रखें।",
      10: "कार्य और भूमिका में सफलता; मान्यता आसानी से मिलती है।",
      11: "इच्छाएँ पूरी होती हैं; लोगों और आय से लाभ।",
      12: "खर्च और थकान दिखती है। विश्राम और चिंतन करें।",
    },
    taraName: { janma: "जन्म", sampat: "संपत", vipat: "विपत", kshema: "क्षेम", pratyak: "प्रत्यक", sadhana: "साधना", naidhana: "नैधन", mitra: "मित्र", paramaMitra: "परम मित्र" },
    taraText: {
      janma: "चंद्रमा जन्म तारे में लौटता है: स्वयं को स्थिर करने का दिन।",
      sampat: "संपत्ति का तारा: काम सुचारु चलते हैं।",
      vipat: "विपत्ति का तारा: सावधानी से चलें।",
      kshema: "कल्याण का तारा: शांत और स्थिर।",
      pratyak: "बाधा का तारा: योजनाएँ रुक सकती हैं।",
      sadhana: "सिद्धि का तारा: प्रयास फलते हैं।",
      naidhana: "विनाश का तारा: नया आरंभ टालें।",
      mitra: "मित्र का तारा: लोग सहायक होते हैं।",
      paramaMitra: "परम मित्र का तारा: सहयोग सहज मिलता है।",
    },
  },
  ko: {
    title: "오늘의 운세 — 달 별자리와 낙샤트라로",
    metaTitle: "오늘의 운세: 인도 점성술로 보는 오늘의 달",
    metaDescription:
      "오늘 달이 어느 별자리·낙샤트라에 있는지 매일 계산하여, 12개 달 별자리별 운세와 27낙샤트라별 운세를 보여줍니다. 고전 찬드라 고차라와 타라 발라에 근거합니다.",
    lead: "인도 점성술은 하루를 달로 읽습니다. 태어날 때의 달 별자리에서 오늘 달의 별자리까지, 태어난 낙샤트라에서 오늘의 낙샤트라까지 세면 전통적인 그날의 지침이 나옵니다.",
    dateLabel: (d) => `${d} (일본 시간)`,
    moonNow: "오늘의 달",
    moonInSign: (s) => `달은 ${s}에`,
    moonEnters: (t, n) => `${t}에 ${n}(으)로 이동`,
    shukuToday: "오늘의 낙샤트라",
    nakshatraToday: "오늘의 낙샤트라",
    until: (t) => `${t}까지`,
    from: (t) => `${t}부터`,
    tithi: "티티(음력일)",
    signTableTitle: "달 별자리별 오늘의 운세",
    signTableLead: "태어날 때 달이 있던 별자리(달 별자리)로 읽습니다. 서양 점성술의 태양 별자리와 다를 수 있습니다.",
    yourMoonSign: "달 별자리",
    house: (n) => `제${n}하우스`,
    quality: { good: "좋음", mixed: "보통", caution: "주의" },
    taraTableTitle: "태어난 낙샤트라별 오늘의 타라",
    taraTableLead: "타라 발라는 태어난 낙샤트라에서 오늘의 낙샤트라까지 셉니다 — 아홉 타라가 반복됩니다.",
    yourNakshatra: "태어난 낙샤트라",
    findTitle: "달 별자리를 모르시나요?",
    findLead: "생년월일과 태어난 시간으로 달 별자리와 낙샤트라를 추정합니다(일본 시간).",
    findDate: "생년월일",
    findTime: "태어난 시간",
    findResult: (s, n) => `달 별자리: ${s} · 낙샤트라: ${n}`,
    findExact: "출생지까지 넣어 정확히 확인",
    methodNote: "달의 위치는 천문 계산(라히리 항성식) 근사치이며 일본 시간으로 표시합니다.",
    sectionTitle: "오늘",
    updated: (t) => `${t} 업데이트`,
    tomorrow: "내일의 달",
    houseText: {
      1: "달이 당신의 달 별자리로 돌아오는 날. 마음이 충만하고 자기 속도로 움직일 수 있습니다. 건강 관리도 중요합니다.",
      2: "돈과 가족과의 대화에 관심이 가는 날. 지출은 계획적으로.",
      3: "행동력이 높아지고 연락이나 짧은 외출이 잘 풀리는 날.",
      4: "마음이 안으로 향하는 날. 집에서 차분히 보내면 좋습니다.",
      5: "창의적이고 즐겁지만 판단이 흔들리기 쉬운 날. 충동적 결정은 삼가세요.",
      6: "문제 해결, 경쟁, 협상에 강한 날. 운동에도 좋습니다.",
      7: "인연이 결실을 맺기 쉬운 날. 파트너와의 대화에 좋습니다.",
      8: "찬드라슈타마 — 달이 8번째에. 마음이 흔들리기 쉬우니 큰 결정과 무리는 피하세요.",
      9: "공부와 내면의 일에 좋지만 계획대로 되지 않을 수 있는 날. 서두르지 마세요.",
      10: "일과 역할에서 성과를 내기 쉬운 날. 인정받기 쉽습니다.",
      11: "바람이 이루어지기 쉽고 사람과 수입으로 이득을 보는 날.",
      12: "지출과 피로가 나타나는 날. 휴식과 정리에 쓰면 좋습니다.",
    },
    taraName: { janma: "잔마", sampat: "삼파트", vipat: "비파트", kshema: "크셰마", pratyak: "프라티약", sadhana: "사다나", naidhana: "나이다나", mitra: "미트라", paramaMitra: "파라마 미트라" },
    taraText: {
      janma: "달이 태어난 별로 돌아오는 날. 자신을 가다듬기 좋습니다.",
      sampat: "번영의 별. 일이 순조롭습니다.",
      vipat: "장애의 별. 무리하지 말고 신중하게.",
      kshema: "안녕의 별. 평온하고 안정적입니다.",
      pratyak: "방해의 별. 계획이 지연될 수 있습니다.",
      sadhana: "성취의 별. 노력이 결실을 맺습니다.",
      naidhana: "파괴의 별. 새로운 시작은 피하세요.",
      mitra: "친구의 별. 사람들이 도움이 됩니다.",
      paramaMitra: "절친의 별. 지지를 쉽게 얻습니다.",
    },
  },
};
