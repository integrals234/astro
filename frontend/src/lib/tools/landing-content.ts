import type { BilingualText } from "@/lib/education/types";
import type { ChartTab } from "@/lib/chart-types";

/**
 * Tool landing pages (Phase 3.6).
 *
 * Free tools earn links and rank for high-intent queries, and the chart
 * generator was the most underused asset on the site — one URL for everything.
 *
 * These are not doorway pages: each targets a distinct real query, carries its
 * own copy and FAQ, and opens the working tool on a *different* default tab, so
 * the page a visitor lands on actually answers the thing they searched for.
 *
 * Script variation matters here (Phase 3.10). `インド占星術`, `ヴェーダ占星術`
 * and `ジョーティッシュ` are three different searches with different volumes and
 * intents, so each page leads with a different dominant notation rather than
 * repeating one.
 */
export interface ToolFaq {
  question: BilingualText;
  answer: BilingualText;
}

export interface ToolLanding {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  lead: BilingualText;
  /** Tab the embedded workspace opens on. */
  defaultTab: ChartTab;
  faqs: ToolFaq[];
}

export const TOOL_LANDINGS: ToolLanding[] = [
  {
    slug: "free-horoscope",
    defaultTab: "D1",
    title: {
      en: "Free Vedic horoscope generator",
      hi: "निःशुल्क वैदिक कुंडली जनरेटर",
      ja: "無料ホロスコープ作成",
      ko: "무료 베다 호로스코프 생성",
    },
    description: {
      en: "Generate a precise Vedic birth chart from your date, time, and place of birth. Free, no account required.",
      hi: "अपनी जन्म तिथि, समय और स्थान से सटीक वैदिक जन्म कुंडली बनाएँ। निःशुल्क, खाते की आवश्यकता नहीं।",
      ja: "生年月日・出生時刻・出生地から、精密なヴェーダ式ホロスコープを作成します。無料、登録不要です。",
      ko: "생년월일, 출생 시각, 출생지로 정확한 베다 출생 차트를 생성합니다. 무료이며 가입이 필요 없습니다.",
    },
    lead: {
      en: "Enter your birth details below to draw a full Vedic birth chart. The calculation uses the sidereal zodiac and real ephemeris data, and nothing is stored unless you sign in.",
      hi: "पूर्ण वैदिक जन्म कुंडली बनाने के लिए नीचे अपना जन्म विवरण दर्ज करें। गणना निरयण राशिचक्र और वास्तविक ऐफ़ेमेरिस डेटा पर आधारित है, और साइन इन किए बिना कुछ भी संग्रहीत नहीं होता।",
      ja: "以下に出生データを入力すると、ヴェーダ式の出生図を作成します。計算にはサイデリアル黄道と実測の天体暦データを用います。ログインしない限り、データは保存されません。",
      ko: "아래에 출생 정보를 입력하면 베다 출생 차트를 작성합니다. 계산에는 항성 황도와 실제 천체력 데이터를 사용하며, 로그인하지 않으면 아무것도 저장되지 않습니다.",
    },
    faqs: [
      {
        question: {
          en: "Is the chart generator really free?",
          hi: "क्या कुंडली जनरेटर वास्तव में निःशुल्क है?",
          ja: "ホロスコープ作成は本当に無料ですか？",
          ko: "차트 생성기는 정말 무료인가요?",
        },
        answer: {
          en: "Yes. Generating and viewing a chart is free and does not require an account. Signing in only adds the ability to save charts to your library.",
          hi: "हाँ। कुंडली बनाना और देखना निःशुल्क है और इसके लिए खाते की आवश्यकता नहीं है। साइन इन करने पर केवल कुंडलियाँ सहेजने की सुविधा मिलती है।",
          ja: "はい。チャートの作成と閲覧は無料で、アカウントも不要です。ログインすると、作成したチャートを保存できるようになります。",
          ko: "네. 차트 생성과 열람은 무료이며 계정이 필요하지 않습니다. 로그인하면 차트를 저장할 수 있습니다.",
        },
      },
      {
        question: {
          en: "What if I do not know my exact birth time?",
          hi: "यदि मुझे अपना सटीक जन्म समय नहीं पता तो क्या करूँ?",
          ja: "正確な出生時刻がわからない場合はどうすればよいですか？",
          ko: "정확한 출생 시각을 모르면 어떻게 하나요?",
        },
        answer: {
          en: "The ascendant and house positions depend on birth time, so an approximate time gives approximate houses. Planetary sign positions other than the Moon change slowly and stay broadly reliable.",
          hi: "लग्न और भाव जन्म समय पर निर्भर करते हैं, इसलिए अनुमानित समय से भाव भी अनुमानित होंगे। चंद्रमा को छोड़कर अन्य ग्रहों की राशि-स्थिति धीरे बदलती है और मोटे तौर पर विश्वसनीय रहती है।",
          ja: "アセンダントとハウスの位置は出生時刻に依存するため、時刻が概算であればハウスも概算になります。月以外の惑星の星座位置はゆっくり変化するため、おおむね信頼できます。",
          ko: "상승궁과 하우스 위치는 출생 시각에 좌우되므로, 시각이 대략적이면 하우스도 대략적입니다. 달을 제외한 행성의 별자리 위치는 천천히 변하므로 대체로 신뢰할 수 있습니다.",
        },
      },
    ],
  },
  {
    slug: "birth-chart",
    defaultTab: "D1",
    title: {
      en: "Vedic birth chart (kundli) calculator",
      hi: "वैदिक जन्म कुंडली कैलकुलेटर",
      ja: "インド占星術 出生図（クンダリ）作成",
      ko: "베다 출생 차트(쿤달리) 계산기",
    },
    description: {
      en: "Draw your kundli in North or South Indian format, with planetary degrees, nakshatras, and house positions.",
      hi: "उत्तर या दक्षिण भारतीय प्रारूप में अपनी कुंडली बनाएँ — ग्रह अंश, नक्षत्र और भाव स्थिति सहित।",
      ja: "北インド式・南インド式の出生図を作成。惑星の度数、ナクシャトラ、ハウス配置まで表示します。",
      ko: "북인도식 또는 남인도식으로 쿤달리를 작성하고, 행성 도수·낙샤트라·하우스 위치를 확인하세요.",
    },
    lead: {
      en: "A kundli is the Vedic birth chart: a map of the sky at the moment you were born. This tool draws it in both the North Indian diamond and South Indian square layouts.",
      hi: "कुंडली वैदिक जन्म चार्ट है — आपके जन्म के क्षण आकाश का मानचित्र। यह उपकरण इसे उत्तर भारतीय हीरा और दक्षिण भारतीय वर्ग दोनों प्रारूपों में बनाता है।",
      ja: "クンダリとは、あなたが生まれた瞬間の天空を写したヴェーダ式の出生図です。北インド式のひし形と南インド式の方形、両方の様式で作成できます。",
      ko: "쿤달리는 태어난 순간의 하늘을 담은 베다 출생 차트입니다. 이 도구는 북인도식 마름모와 남인도식 사각형 두 형식으로 그려줍니다.",
    },
    faqs: [
      {
        question: {
          en: "What is the difference between North and South Indian chart formats?",
          hi: "उत्तर और दक्षिण भारतीय चार्ट प्रारूपों में क्या अंतर है?",
          ja: "北インド式と南インド式のチャートは何が違いますか？",
          ko: "북인도식과 남인도식 차트 형식은 무엇이 다른가요?",
        },
        answer: {
          en: "They show the same chart in different layouts. In the North Indian format the houses stay fixed and the signs move; in the South Indian format the signs stay fixed and the ascendant is marked.",
          hi: "दोनों एक ही कुंडली को अलग विन्यास में दिखाते हैं। उत्तर भारतीय प्रारूप में भाव स्थिर रहते हैं और राशियाँ बदलती हैं; दक्षिण भारतीय में राशियाँ स्थिर रहती हैं और लग्न चिह्नित होता है।",
          ja: "同じチャートを異なる配置で表したものです。北インド式ではハウスが固定され星座が動き、南インド式では星座が固定されアセンダントが印で示されます。",
          ko: "같은 차트를 다른 배치로 보여줍니다. 북인도식은 하우스가 고정되고 별자리가 움직이며, 남인도식은 별자리가 고정되고 상승궁을 표시합니다.",
        },
      },
    ],
  },
  {
    slug: "dasha-calculator",
    defaultTab: "Dasha",
    title: {
      en: "Vimshottari dasha calculator",
      hi: "विंशोत्तरी दशा कैलकुलेटर",
      ja: "ダシャー計算（ヴィムショッタリ）",
      ko: "비쇼타리 다샤 계산기",
    },
    description: {
      en: "See your Vimshottari dasha timeline — mahadasha, antardasha, and deeper levels with start and end dates.",
      hi: "अपनी विंशोत्तरी दशा समयरेखा देखें — महादशा, अंतर्दशा और गहरे स्तर, आरंभ व अंत तिथियों सहित।",
      ja: "ヴィムショッタリ・ダシャーの周期を表示します。マハーダシャー、アンタルダシャー、さらに細かい階層まで開始日と終了日つきで確認できます。",
      ko: "비쇼타리 다샤 타임라인을 확인하세요. 마하다샤, 안타르다샤 및 더 깊은 단계를 시작일·종료일과 함께 보여줍니다.",
    },
    lead: {
      en: "Vimshottari dasha divides a life into planetary periods, calculated from the Moon's nakshatra at birth. This tool computes the full timeline down to four levels.",
      hi: "विंशोत्तरी दशा जीवन को ग्रह-कालों में विभाजित करती है, जिसकी गणना जन्म के समय चंद्रमा के नक्षत्र से होती है। यह उपकरण चार स्तरों तक पूरी समयरेखा निकालता है।",
      ja: "ヴィムショッタリ・ダシャーは、出生時の月のナクシャトラをもとに人生を惑星の期間に分けるものです。本ツールでは4階層までの周期を計算します。",
      ko: "비쇼타리 다샤는 출생 시 달의 낙샤트라를 기준으로 삶을 행성 주기로 나눕니다. 이 도구는 4단계까지 전체 타임라인을 계산합니다.",
    },
    faqs: [
      {
        question: {
          en: "What decides which dasha you are born into?",
          hi: "यह किससे तय होता है कि आपका जन्म किस दशा में हुआ?",
          ja: "生まれたときのダシャーは何で決まりますか？",
          ko: "태어날 때의 다샤는 무엇으로 정해지나요?",
        },
        answer: {
          en: "The nakshatra the Moon occupied at birth. Each nakshatra is ruled by a planet, and how far the Moon had travelled through it sets how much of that planet's period remained.",
          hi: "जन्म के समय चंद्रमा जिस नक्षत्र में था, वही। प्रत्येक नक्षत्र का एक स्वामी ग्रह होता है, और चंद्रमा उसमें कितना आगे बढ़ चुका था, इससे उस ग्रह की शेष अवधि तय होती है।",
          ja: "出生時に月が在泊していたナクシャトラです。各ナクシャトラには支配星があり、月がその中をどれだけ進んでいたかによって、その惑星の期間の残りが決まります。",
          ko: "출생 시 달이 머문 낙샤트라입니다. 각 낙샤트라에는 지배 행성이 있으며, 달이 그 안을 얼마나 지나왔는지에 따라 해당 행성 주기의 남은 기간이 정해집니다.",
        },
      },
    ],
  },
  {
    slug: "nakshatra-finder",
    defaultTab: "Details",
    title: {
      en: "Nakshatra finder",
      hi: "नक्षत्र खोजें",
      ja: "ナクシャトラ（月宿）を調べる",
      ko: "낙샤트라 찾기",
    },
    description: {
      en: "Find your birth nakshatra and pada from your birth details, with the ruler, deity, and symbolism of each.",
      hi: "अपने जन्म विवरण से अपना जन्म नक्षत्र और पाद जानें — प्रत्येक का स्वामी, देवता और प्रतीक सहित।",
      ja: "出生データから、生まれた月宿（ナクシャトラ）とパダを調べます。支配星・神格・象徴もあわせて確認できます。",
      ko: "출생 정보로 태어난 낙샤트라와 파다를 찾고, 각각의 지배 행성·신격·상징을 확인하세요.",
    },
    lead: {
      en: "Your birth nakshatra is the lunar mansion the Moon occupied when you were born — one of 27 divisions of the zodiac, each with its own ruler and character.",
      hi: "आपका जन्म नक्षत्र वह चंद्र-भवन है जिसमें जन्म के समय चंद्रमा था — राशिचक्र के 27 विभागों में से एक, प्रत्येक का अपना स्वामी और स्वभाव।",
      ja: "生まれたときに月が在泊していた月宿が、あなたの生まれナクシャトラです。黄道を27に分けたそれぞれに、固有の支配星と性質があります。",
      ko: "출생 시 달이 머문 달의 별자리가 당신의 낙샤트라입니다. 황도를 27개로 나눈 각각에는 고유한 지배 행성과 성격이 있습니다.",
    },
    faqs: [
      {
        question: {
          en: "How many nakshatras are there?",
          hi: "नक्षत्र कितने होते हैं?",
          ja: "ナクシャトラはいくつありますか？",
          ko: "낙샤트라는 몇 개인가요?",
        },
        answer: {
          en: "Twenty-seven, each spanning 13°20′ of the zodiac and subdivided into four padas.",
          hi: "सत्ताईस, प्रत्येक राशिचक्र के 13°20′ में फैला और चार पादों में विभाजित।",
          ja: "27あります。それぞれ黄道の13度20分を占め、さらに4つのパダに分かれます。",
          ko: "스물일곱 개이며, 각각 황도의 13°20′를 차지하고 네 개의 파다로 나뉩니다.",
        },
      },
    ],
  },
];

export function findToolLanding(slug: string): ToolLanding | undefined {
  return TOOL_LANDINGS.find((tool) => tool.slug === slug);
}
