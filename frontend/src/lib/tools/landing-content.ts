import type { BilingualText } from "@/lib/education/types";
import type { ChartSectionId } from "@/lib/chart-sections";
import type { ToolHandoffId } from "@/lib/tools/handoff-copy";

/**
 * Tool landing pages (Phase 3.6).
 *
 * Free tools earn links and rank for high-intent queries, and the chart
 * generator was the most underused asset on the site — one URL for everything.
 *
 * These are not doorway pages: each targets a distinct real query, carries its
 * own copy and FAQ, and renders only the chart section(s) that answer the
 * thing a visitor searched for, so the page never makes them dig through
 * eight tabs to find the one they came for.
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
  faqs: ToolFaq[];
  /**
   * A purpose-built result panel rendered above the chart sections.
   *
   * Tools that answer one specific question ("which mansion am I?") get a
   * dedicated component reading the shared birth profile, so the answer
   * appears without re-entering anything. `sukuyo` also sets `sections` to
   * show the underlying chart below its own result. `numerology` needs no
   * computed chart at all — only a birth date — and `birthTimeSensitivity`
   * needs a time *window*, not the one saved birth time — so both bring
   * their own entry form rather than using `ChartDataProvider`/
   * `ChartSectionBody` like the rest of this list. `annualForecast` and
   * `panchang` talk to backend endpoints (Phase 12) — both panels still
   * show an "unavailable" state on a 502/503 rather than failing silently,
   * since the free-tier Render service can cold-start or blip.
   */
  resultPanel?:
    | "sukuyo"
    | "compatibility"
    | "numerology"
    | "birthTimeSensitivity"
    | "annualForecast"
    | "panchang"
    | "babyNames"
    | "nakshatraFinder"
    | "gemstone"
    | "careerReport";
  /**
   * Chart section(s) this tool renders inline, stacked in this order, via
   * `ChartSectionBody` — the same component the workspace uses, so a tool
   * page never pulls in the full multi-tab workspace just to show one part
   * of it.
   */
  sections?: readonly ChartSectionId[];
  /** Which `BookingHandoff` copy the sections close with. */
  chartHandoff?: ToolHandoffId;
  /**
   * One line on what this is actually used for — shown on the homepage grid,
   * where `description` alone reads as a feature list ("draws your kundli")
   * rather than a reason to click ("check before scheduling anything
   * important").
   */
  useCase: BilingualText;
}

export const TOOL_LANDINGS: ToolLanding[] = [
  {
    slug: "birth-chart",
    sections: ["lagna", "planets"],
    chartHandoff: "generic",
    title: {
      en: "Free Vedic birth chart (kundli) calculator",
      hi: "निःशुल्क वैदिक जन्म कुंडली कैलकुलेटर",
      ja: "無料インド占星術 出生図（クンダリ）作成",
      ko: "무료 베다 출생 차트(쿤달리) 계산기",
    },
    description: {
      en: "Create your Vedic birth chart (kundli) free from your birth date, time and place: Lagna, the nine planets' signs and degrees, nakshatras and houses, calculated sidereally with the Lahiri ayanamsha.",
      hi: "जन्म तिथि, समय और स्थान से अपनी वैदिक जन्म कुंडली निःशुल्क बनाएँ — लग्न, नौ ग्रहों की राशि व अंश, नक्षत्र और भाव, लाहिड़ी अयनांश के साथ निरयण गणना।",
      ja: "生年月日・出生時刻・出生地から、インド占星術の出生図（クンダリ）を無料で作成。ラグナ、9惑星の星座と度数、ナクシャトラ、ハウスをラヒリ方式のサイデリアルで表示します。",
      ko: "생년월일·출생 시각·출생지로 베다 출생 차트(쿤달리)를 무료로 작성하세요. 라그나, 아홉 행성의 별자리와 도수, 낙샤트라, 하우스를 라히리 방식 항성 황도로 표시합니다.",
    },
    useCase: {
      en: "Your reference chart — pull it up any time you want to check a placement before a conversation or a decision.",
      hi: "आपकी संदर्भ कुंडली — किसी बातचीत या निर्णय से पहले कोई स्थिति जाँचने के लिए कभी भी खोलें।",
      ja: "基準となる出生図。会話や決断の前に、惑星の配置をいつでも確認できます。",
      ko: "기준이 되는 출생 차트. 대화나 결정을 앞두고 언제든 배치를 확인하세요.",
    },
    lead: {
      en: "A kundli is the Vedic birth chart: a map of the sky at the moment you were born. Enter your birth date, time and place, and this page draws your Lagna chart in the North Indian layout, with a card for each of the nine planets showing its sign, degree, house, dignity, nakshatra and pada. It's for anyone starting out in Jyotish as well as anyone who wants a reliable reference chart; the full workspace linked below the result also offers the South Indian layout.",
      hi: "कुंडली वैदिक जन्म चार्ट है — आपके जन्म के क्षण आकाश का मानचित्र। जन्म तिथि, समय और स्थान भरें, और यह पृष्ठ उत्तर भारतीय प्रारूप में आपकी लग्न कुंडली बनाता है, साथ में नौ ग्रहों में से प्रत्येक का कार्ड — राशि, अंश, भाव, गरिमा, नक्षत्र और पद। यह ज्योतिष सीखना शुरू करने वालों और एक भरोसेमंद संदर्भ कुंडली चाहने वालों, दोनों के लिए है; परिणाम के नीचे दिए लिंक वाले पूर्ण वर्कस्पेस में दक्षिण भारतीय प्रारूप भी उपलब्ध है।",
      ja: "クンダリとは、あなたが生まれた瞬間の天空を写したインド占星術（ヴェーダ占星術）の出生図です。生年月日・出生時刻・出生地を入力すると、北インド式のラグナ・チャートと、九つの惑星それぞれの星座・度数・室・品位・ナクシャトラ・パダをその場で表示します。これからインド占星術を学びたい方にも、手元に正確な基準の図を持っておきたい方にもお使いいただけます。結果の下から開くワークスペースでは南インド式の表示にも切り替えられます。",
      ko: "쿤달리는 태어난 순간의 하늘을 담은 베다 출생 차트입니다. 생년월일·출생 시각·출생지를 입력하면, 북인도식 라그나 차트와 아홉 행성 각각의 별자리·도수·하우스·품위·낙샤트라·파다를 바로 보여줍니다. 조티시를 처음 배우는 분에게도, 정확한 기준 차트를 갖고 싶은 분에게도 알맞습니다. 결과 아래 링크로 여는 전체 워크스페이스에서는 남인도식으로도 볼 수 있습니다.",
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
      {
        question: {
          en: "Why is my sign different from my Western astrology sign?",
          hi: "मेरी राशि पश्चिमी ज्योतिष की राशि से अलग क्यों है?",
          ja: "西洋占星術の星座と違うのはなぜですか？",
          ko: "서양 점성술의 별자리와 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Western astrology mostly uses the tropical zodiac, anchored to the spring equinox, while Indian astrology uses the sidereal zodiac, anchored to the stars. The two are now about 24° apart, so planets often fall one sign earlier here. This tool uses the Lahiri ayanamsha, the standard in India.",
          hi: "पश्चिमी ज्योतिष प्रायः वसंत विषुव पर आधारित सायन राशिचक्र का उपयोग करता है, जबकि भारतीय ज्योतिष तारों पर आधारित निरयण राशिचक्र का। दोनों में अब लगभग 24° का अंतर है, इसलिए ग्रह यहाँ अक्सर एक राशि पहले आते हैं। यह उपकरण भारत में मानक लाहिड़ी अयनांश का उपयोग करता है।",
          ja: "西洋占星術の多くは春分点を基準にしたトロピカル方式、インド占星術は恒星を基準にしたサイデリアル方式を使っています。両者には現在約24度の差があるため、ここでは惑星が一つ前の星座に入ることがよくあります。当ツールはインドで標準的なラヒリ・アヤナムシャを採用しています。",
          ko: "서양 점성술은 대개 춘분점 기준의 회귀 황도를, 인도 점성술은 항성 기준의 항성 황도를 사용합니다. 두 황도는 현재 약 24° 차이가 나므로 여기서는 행성이 한 칸 앞 별자리에 오는 일이 흔합니다. 이 도구는 인도의 표준인 라히리 아야남샤를 사용합니다.",
        },
      },
      {
        question: {
          en: "I was born abroad. Should I convert my birth time to Japan time?",
          hi: "मेरा जन्म विदेश में हुआ। क्या जन्म समय को जापान समय में बदलना चाहिए?",
          ja: "海外で生まれた場合、出生時刻を日本時間に直す必要はありますか？",
          ko: "해외에서 태어났다면 출생 시각을 일본 시간으로 바꿔야 하나요?",
        },
        answer: {
          en: "No. Enter the local clock time at your place of birth as it is. The time zone is determined automatically from the birthplace's coordinates, so selecting the right place is what matters.",
          hi: "नहीं। जन्म स्थान का स्थानीय समय जैसा है वैसा ही भरें। समय क्षेत्र जन्म स्थान के निर्देशांकों से स्वतः तय होता है, इसलिए सही स्थान चुनना ही महत्वपूर्ण है।",
          ja: "必要ありません。生まれた土地の現地時刻をそのまま入力してください。タイムゾーンは出生地の緯度・経度から自動で判定されるため、出生地を正しく選ぶことが大切です。",
          ko: "필요 없습니다. 태어난 곳의 현지 시각을 그대로 입력하세요. 시간대는 출생지의 좌표로 자동 판정되므로, 출생지를 정확히 고르는 것이 중요합니다.",
        },
      },
      {
        question: {
          en: "What is the Lagna, and how is it different from the Sun sign?",
          hi: "लग्न क्या है, और यह सूर्य राशि से कैसे अलग है?",
          ja: "ラグナとは何ですか？太陽星座とはどう違いますか？",
          ko: "라그나란 무엇이며, 태양 별자리와 어떻게 다른가요?",
        },
        answer: {
          en: "The Lagna is the sign rising on the eastern horizon at the moment of birth, and it becomes the first house of the chart. The Sun sign stays the same for about a month, but the Lagna changes roughly every two hours, which makes it far more personal. In Indian astrology the Lagna and the Moon's sign are generally given more weight than the Sun sign.",
          hi: "लग्न जन्म के क्षण पूर्वी क्षितिज पर उदित राशि है, और यही कुंडली का पहला भाव बनती है। सूर्य राशि लगभग एक महीने तक वही रहती है, पर लग्न लगभग हर दो घंटे में बदलता है, इसलिए यह कहीं अधिक व्यक्तिगत है। भारतीय ज्योतिष में सामान्यतः लग्न और चंद्र राशि को सूर्य राशि से अधिक महत्व दिया जाता है।",
          ja: "ラグナは生まれた瞬間に東の地平線から昇っていた星座で、出生図の第1室になります。太陽星座は約1か月同じですが、ラグナはおよそ2時間ごとに変わるため、より個人的な指標といえます。インド占星術では一般に、太陽星座よりラグナと月の星座が重視されます。",
          ko: "라그나는 태어난 순간 동쪽 지평선에서 떠오르던 별자리로, 출생 차트의 제1하우스가 됩니다. 태양 별자리는 약 한 달간 같지만 라그나는 약 2시간마다 바뀌므로 훨씬 개인적인 지표입니다. 인도 점성술에서는 일반적으로 태양 별자리보다 라그나와 달의 별자리를 더 중시합니다.",
        },
      },
      {
        question: {
          en: "Why don't Uranus, Neptune and Pluto appear in the chart?",
          hi: "कुंडली में यूरेनस, नेपच्यून और प्लूटो क्यों नहीं दिखते?",
          ja: "天王星・海王星・冥王星が表示されないのはなぜですか？",
          ko: "천왕성·해왕성·명왕성이 표시되지 않는 이유는 무엇인가요?",
        },
        answer: {
          en: "Classical Indian astrology works with nine grahas: the seven visible planets from the Sun to Saturn, plus Rahu and Ketu, the Moon's nodes. The outer planets are not part of the traditional system, so this tool, like most Jyotish software, doesn't show them.",
          hi: "शास्त्रीय भारतीय ज्योतिष नौ ग्रहों से काम करता है: सूर्य से शनि तक सात दृश्य ग्रह, तथा चंद्र-पात राहु और केतु। बाहरी ग्रह पारंपरिक पद्धति का भाग नहीं हैं, इसलिए यह उपकरण, अधिकांश ज्योतिष सॉफ़्टवेयर की तरह, उन्हें नहीं दिखाता।",
          ja: "古典的なインド占星術では、太陽から土星までの肉眼で見える七つの惑星に、月の交点であるラーフとケトゥを加えた九つの天体（ナヴァグラハ）を用います。外惑星は伝統的な体系に含まれないため、当ツールでも表示していません。",
          ko: "고전 인도 점성술은 태양부터 토성까지 맨눈으로 보이는 일곱 행성에 달의 교점인 라후와 케투를 더한 아홉 천체(나바그라하)를 사용합니다. 외행성은 전통 체계에 포함되지 않으므로 이 도구에서도 표시하지 않습니다.",
        },
      },
    ],
  },
  {
    // The ascendant alone, as its own answer to its own search intent —
    // distinct from `birth-chart`, which shows the Lagna diagram alongside
    // every planet. Someone searching "lagna calculator" specifically wants
    // just this.
    slug: "lagna-calculator",
    sections: ["lagna"],
    title: {
      en: "Lagna calculator: find your Vedic ascendant (rising sign)",
      hi: "लग्न कैलकुलेटर: वैदिक ज्योतिष में अपना लग्न जानें",
      ja: "ラグナ計算｜インド占星術のアセンダント（上昇宮）を調べる",
      ko: "라그나 계산기: 인도 점성술의 어센던트(상승궁) 확인",
    },
    description: {
      en: "Calculate your Lagna (rising sign) in Vedic astrology from birth date, time and place. Learn why it changes about every two hours, what each rising sign emphasises, and how it differs from the Western ascendant.",
      hi: "जन्म तिथि, समय और स्थान से वैदिक ज्योतिष में अपना लग्न निकालें। जानें यह लगभग हर दो घंटे में क्यों बदलता है, हर लग्न किन बातों पर ज़ोर देता है, और यह पश्चिमी असेंडेंट से कैसे अलग है।",
      ja: "生年月日・出生時刻・出生地から、インド占星術のラグナ（上昇宮）を計算します。約2時間ごとに変わる理由、12星座別の特徴、西洋式アセンダントとの違いもやさしく解説します。",
      ko: "생년월일·출생 시각·출생지로 인도 점성술의 라그나(상승궁)를 계산합니다. 약 2시간마다 바뀌는 이유, 12별자리별 특징, 서양식 어센던트와의 차이도 쉽게 설명합니다.",
    },
    useCase: {
      en: "The starting point before reading anything else in a Vedic chart — houses, planetary strength, and yogas are all counted from here.",
      hi: "वैदिक कुंडली में कुछ भी पढ़ने से पहले का प्रारंभिक बिंदु — भाव, ग्रह बल और योग सभी यहीं से गिने जाते हैं।",
      ja: "ヴェーダ・チャートで他の何かを読む前の出発点です。ハウス、惑星の強さ、ヨーガはすべてここから数えられます。",
      ko: "베다 차트에서 다른 무엇을 읽기 전의 출발점입니다. 하우스, 행성의 힘, 요가 모두 여기서부터 셉니다.",
    },
    lead: {
      en: "Your Lagna (ascendant) is the zodiac sign that was rising on the eastern horizon at the exact moment and place of your birth. It sets house 1 — the self as presented to the world — and every other house in the chart is counted from it. This tool calculates it with the sidereal zodiac used in Jyotish and shows it, with its degree, in a North Indian–style chart. It's for anyone who wants to know their rising sign, or to check how it differs from a Western ascendant.",
      hi: "आपका लग्न वह राशि है जो आपके जन्म के ठीक समय और स्थान पर पूर्वी क्षितिज पर उदय हो रही थी। यह भाव-1 — संसार के सामने प्रस्तुत स्वयं — तय करता है, और कुंडली के अन्य सभी भाव इसी से गिने जाते हैं। यह उपकरण ज्योतिष के निरयन राशिचक्र से इसकी गणना करता है और इसे अंश सहित उत्तर भारतीय शैली की कुंडली में दिखाता है। यह उन सभी के लिए है जो अपना लग्न जानना चाहते हैं या पश्चिमी असेंडेंट से इसका अंतर देखना चाहते हैं।",
      ja: "ラグナ（アセンダント）は、あなたが生まれた正確な時刻と場所において東の地平線から昇っていた星座です。これが第1室——世界に示す自己——を定め、チャートの他のすべてのハウスはここから数えられます。本ツールでは、インド占星術で使われるサイデリアル方式でラグナを計算し、その度数とともに北インド式のチャートで表示します。自分の上昇宮を知りたい方、西洋占星術のアセンダントとの違いを確かめたい方におすすめです。",
      ko: "라그나(상승궁)는 당신이 태어난 정확한 시각과 장소에서 동쪽 지평선으로 떠오르고 있던 별자리입니다. 이것이 1궁 — 세상에 드러나는 자아 — 을 정하며, 차트의 다른 모든 하우스는 여기서부터 셉니다. 이 도구는 인도 점성술의 사이데리얼 방식으로 라그나를 계산해, 그 도수와 함께 북인도식 차트로 보여 줍니다. 자신의 상승궁을 알고 싶은 분, 서양 점성술 어센던트와의 차이를 확인하고 싶은 분께 추천합니다.",
    },
    faqs: [
      {
        question: {
          en: "Why does the Lagna need an exact birth time?",
          hi: "लग्न के लिए सटीक जन्म समय क्यों आवश्यक है?",
          ja: "ラグナに正確な出生時刻が必要なのはなぜですか？",
          ko: "라그나에 정확한 출생 시각이 필요한 이유는 무엇인가요?",
        },
        answer: {
          en: "The ascendant moves through the entire zodiac roughly once every 24 hours — about one degree every four minutes — so even a 15-20 minute error can shift it into a neighbouring sign. If your birth time is uncertain, the Birth Time Sensitivity checker shows exactly where that uncertainty matters.",
          hi: "लग्न लगभग हर 24 घंटे में पूरे राशिचक्र से गुजरता है — लगभग हर चार मिनट में एक अंश — इसलिए 15-20 मिनट की त्रुटि भी इसे पड़ोसी राशि में बदल सकती है। यदि आपका जन्म समय अनिश्चित है, तो जन्म समय संवेदनशीलता जाँच बताती है कि यह अनिश्चितता कहाँ मायने रखती है।",
          ja: "アセンダントはおよそ24時間で黄道を一周します——約4分で1度——そのため15〜20分の誤差でも隣の星座にずれることがあります。出生時刻が不確かな場合は、出生時刻感度チェックで、その不確かさがどこで問題になるかを確認できます。",
          ko: "상승궁은 약 24시간마다 황도 전체를 한 바퀴 돕니다 — 약 4분마다 1도 — 그래서 15~20분의 오차만으로도 이웃 별자리로 바뀔 수 있습니다. 출생 시각이 불확실하다면, 출생 시각 민감도 확인에서 그 불확실성이 어디서 문제가 되는지 볼 수 있습니다.",
        },
      },
      {
        question: {
          en: "Is the Lagna the same as my zodiac sign?",
          hi: "क्या लग्न मेरी राशि के समान है?",
          ja: "ラグナは自分の星座（サン・サイン）と同じですか？",
          ko: "라그나는 제 별자리(태양궁)와 같은가요?",
        },
        answer: {
          en: "No — what most people call their \"sign\" in casual conversation is usually their Sun sign, which changes once a month. The Lagna is a different, faster-moving point tied to the exact time of day you were born, not just the date.",
          hi: "नहीं — सामान्य बातचीत में लोग जिसे अपनी 'राशि' कहते हैं वह प्रायः सूर्य राशि होती है, जो महीने में एक बार बदलती है। लग्न एक भिन्न, तेज़ी से बदलने वाला बिंदु है जो केवल तिथि नहीं बल्कि जन्म के सटीक समय से जुड़ा है।",
          ja: "いいえ——日常会話で「自分の星座」と呼ばれるものは通常、太陽星座（サン・サイン）であり、月に一度変わります。ラグナは別の、より速く動く点で、日付だけでなく生まれた正確な時刻に結びついています。",
          ko: "아니요 — 일상 대화에서 흔히 말하는 '별자리'는 보통 태양궁이며, 한 달에 한 번씩 바뀝니다. 라그나는 날짜뿐 아니라 태어난 정확한 시각에 연결된, 더 빠르게 움직이는 다른 지점입니다.",
        },
      },
      {
        question: {
          en: "What should I do if I don't know my birth time?",
          hi: "यदि मुझे अपना जन्म समय पता न हो तो क्या करूँ?",
          ja: "出生時刻がわからない場合、ラグナは調べられますか？",
          ko: "출생 시각을 모르면 라그나를 알 수 있나요?",
        },
        answer: {
          en: "The calculation needs a time, but with an unknown time the result is only a guess. First check records such as a maternal health handbook or birth certificate, or ask family. If you only know a rough window, the Birth Time Sensitivity checker shows whether the Lagna stays the same across it.",
          hi: "गणना के लिए समय चाहिए, पर अज्ञात समय पर परिणाम केवल अनुमान होगा। पहले जन्म प्रमाणपत्र जैसे अभिलेख देखें या परिवार से पूछें। यदि केवल मोटा समय-अंतराल पता है, तो जन्म समय संवेदनशीलता जाँच बताती है कि उस अंतराल में लग्न वही रहता है या नहीं।",
          ja: "計算には時刻が必要ですが、時刻が不明なまま出した結果は推測にすぎません。まずは母子手帳や出生証明書などの記録を確認するか、ご家族に尋ねてみてください。おおよその時間帯しかわからない場合は、出生時刻チェックでその幅の中でラグナが変わるかどうかを確かめられます。",
          ko: "계산에는 시각이 필요하지만, 시각을 모르는 채로 낸 결과는 추측에 불과합니다. 먼저 산모수첩이나 출생증명서 같은 기록을 확인하거나 가족에게 물어보세요. 대략적인 시간대만 안다면 출생 시각 점검에서 그 범위 안에서 라그나가 바뀌는지 확인할 수 있습니다.",
        },
      },
      {
        question: {
          en: "Why is my Lagna different from my Western ascendant?",
          hi: "मेरा लग्न पश्चिमी असेंडेंट से अलग क्यों है?",
          ja: "西洋占星術のアセンダントと星座が違うのはなぜですか？",
          ko: "서양 점성술의 어센던트와 별자리가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Both point to the same spot on the horizon, but Western astrology usually names it with the tropical zodiac and Jyotish with the sidereal zodiac, which currently sit about 24 degrees apart. If your Western ascendant is in roughly the first 24 degrees of a sign, the Vedic Lagna is usually the previous sign. Neither is a calculation error.",
          hi: "दोनों क्षितिज के एक ही बिंदु को दर्शाते हैं, पर पश्चिमी ज्योतिष प्रायः सायन और ज्योतिष निरयन राशिचक्र से उसका नाम देता है, जिनमें अभी लगभग 24 अंश का अंतर है। यदि पश्चिमी असेंडेंट किसी राशि के लगभग पहले 24 अंशों में है, तो वैदिक लग्न प्रायः पिछली राशि होता है। दोनों में से कोई गणना की गलती नहीं है।",
          ja: "どちらも地平線上の同じ点を指していますが、西洋占星術の多くはトロピカル方式、インド占星術はサイデリアル方式でその点に星座名をつけ、両者の起点は現在約24度ずれています。西洋式のアセンダントが星座のおよそ0〜24度にある場合、インド式では一つ前の星座になるのが一般的です。どちらかの計算ミスではありません。",
          ko: "둘 다 지평선 위의 같은 점을 가리키지만, 서양 점성술 대부분은 트로피컬 방식, 인도 점성술은 사이데리얼 방식으로 그 점에 별자리 이름을 붙이며 두 기점은 현재 약 24도 어긋나 있습니다. 서양식 어센던트가 별자리의 약 0~24도에 있으면 인도식에서는 하나 앞 별자리가 되는 것이 일반적입니다. 어느 쪽의 계산 실수도 아닙니다.",
        },
      },
      {
        question: {
          en: "My Lagna degree is close to 0° or 29°. What does that mean?",
          hi: "मेरे लग्न का अंश 0° या 29° के पास है। इसका क्या अर्थ है?",
          ja: "ラグナの度数が0度や29度に近いと言われました。どういう意味ですか？",
          ko: "라그나 도수가 0도나 29도에 가까우면 무슨 뜻인가요?",
        },
        answer: {
          en: "It means the Lagna is near the boundary with the neighbouring sign, so a birth-time error of just a few minutes could change it. In that case, double-check the recorded time and keep the neighbouring sign in mind as a possibility.",
          hi: "इसका अर्थ है कि लग्न पड़ोसी राशि की सीमा के पास है, इसलिए जन्म समय में कुछ मिनट की त्रुटि भी इसे बदल सकती है। ऐसे में दर्ज समय दोबारा जाँचें और पड़ोसी राशि की संभावना भी ध्यान में रखें।",
          ja: "ラグナが隣の星座との境目に近いことを意味し、出生時刻が数分ずれるだけで星座が変わる可能性があります。その場合は記録の時刻をもう一度確認し、隣の星座の可能性も念頭に置いて読むと安心です。",
          ko: "라그나가 이웃 별자리와의 경계에 가깝다는 뜻으로, 출생 시각이 몇 분만 어긋나도 별자리가 바뀔 수 있습니다. 이 경우 기록된 시각을 다시 확인하고 이웃 별자리의 가능성도 염두에 두고 읽으세요.",
        },
      },
      {
        question: {
          en: "Which matters more, the Lagna or the Moon sign?",
          hi: "लग्न और चंद्र राशि में कौन अधिक महत्वपूर्ण है?",
          ja: "ラグナと月星座（ムーン・サイン）はどちらが重要ですか？",
          ko: "라그나와 달 별자리 중 어느 쪽이 더 중요한가요?",
        },
        answer: {
          en: "In Jyotish they have different jobs, so neither replaces the other. The Lagna sets the houses and describes how you meet the world; the Moon sign describes the mind and feelings, and is also used for transits and the dasha. If your birth time is uncertain, the Moon sign is usually the more reliable of the two.",
          hi: "ज्योतिष में दोनों की भूमिकाएँ अलग हैं, इसलिए कोई एक दूसरे का स्थान नहीं लेता। लग्न भाव तय करता है और बताता है कि आप संसार से कैसे मिलते हैं; चंद्र राशि मन और भावनाएँ दर्शाती है और गोचर व दशा में भी उपयोग होती है। जन्म समय अनिश्चित हो तो प्रायः चंद्र राशि अधिक विश्वसनीय रहती है।",
          ja: "インド占星術では役割が異なるため、どちらか一方で代用することはできません。ラグナは室の配置を決め、世界への向き合い方を表します。月星座は心や感情を表し、トランジットやダシャーの基準にもなります。出生時刻が不確かな場合は、一般に月星座のほうが信頼しやすいといえます。",
          ko: "인도 점성술에서는 역할이 다르므로 어느 한쪽으로 대신할 수 없습니다. 라그나는 하우스 배치를 정하고 세상을 대하는 방식을 나타내며, 달 별자리는 마음과 감정을 나타내고 트랜짓과 다샤의 기준도 됩니다. 출생 시각이 불확실하다면 일반적으로 달 별자리 쪽이 더 믿을 만합니다.",
        },
      },
      {
        question: {
          en: "I was born abroad. Which time should I enter?",
          hi: "मेरा जन्म विदेश में हुआ। कौन-सा समय दर्ज करूँ?",
          ja: "海外で生まれた場合、どの時刻を入力すればよいですか？",
          ko: "해외에서 태어났다면 어떤 시각을 입력해야 하나요?",
        },
        answer: {
          en: "Enter the local clock time at your birthplace, exactly as recorded, without converting it to Japan time. When you choose the birthplace from the search results, its time zone is determined from the location automatically.",
          hi: "जन्म स्थान का स्थानीय समय, जैसा दर्ज है वैसा ही, जापान के समय में बदले बिना दर्ज करें। खोज परिणामों से जन्म स्थान चुनने पर उसका समय-क्षेत्र स्थान से अपने-आप तय हो जाता है।",
          ja: "日本時間に換算せず、出生地の現地時刻を記録どおりに入力してください。出生地を検索候補から選ぶと、その土地のタイムゾーンは位置から自動で判定されます。",
          ko: "일본 시간으로 환산하지 말고 출생지의 현지 시각을 기록 그대로 입력하세요. 출생지를 검색 후보에서 고르면 그 지역의 시간대는 위치로 자동 판정됩니다.",
        },
      },
    ],
  },
  {
    slug: "dasha-calculator",
    sections: ["dasha"],
    title: {
      en: "Vimshottari dasha calculator: find your current planetary period",
      hi: "विंशोत्तरी दशा कैलकुलेटर: अपनी वर्तमान ग्रह दशा जानें",
      ja: "ダシャー計算（ヴィムショッタリ）｜今の惑星期間がわかる",
      ko: "비쇼타리 다샤 계산기: 지금의 행성 주기 확인",
    },
    description: {
      en: "Calculate your Vimshottari dasha from your birth date, time and place. See four levels of planetary periods, from mahadasha and antardasha down, with start and end dates — and which one you're in now.",
      hi: "जन्म तिथि, समय और स्थान से अपनी विंशोत्तरी दशा निकालें। महादशा, अंतर्दशा सहित चार स्तरों की ग्रह दशाएँ आरंभ व समाप्ति तिथियों के साथ देखें — और जानें कि अभी कौन-सी चल रही है।",
      ja: "生年月日・出生時刻・出生地からヴィムショッタリ・ダシャーを計算。マハーダシャー、アンタルダシャーなど4階層の惑星期間を開始日・終了日つきで表示し、今どの時期にいるかがわかります。",
      ko: "생년월일·출생 시각·출생지로 비쇼타리 다샤를 계산합니다. 마하다샤, 안타르다샤 등 4단계 행성 주기를 시작일·종료일과 함께 보여 주고, 지금 어느 시기에 있는지 알려 줍니다.",
    },
    useCase: {
      en: "Check which period you're in before reading too much into a hard month — dasha context changes how a season should be read.",
      hi: "किसी कठिन महीने को अधिक गंभीरता से लेने से पहले देखें आप किस दशा में हैं — दशा का संदर्भ यह बदल देता है कि किसी दौर को कैसे समझा जाए।",
      ja: "調子の悪い月を過度に受け止める前に、今どの期間にいるか確認を。ダシャーの文脈で季節の読み方が変わります。",
      ko: "힘든 한 달을 너무 무겁게 받아들이기 전에 지금이 어느 시기인지 확인하세요. 다샤의 맥락이 그 시기를 읽는 방식을 바꿉니다.",
    },
    lead: {
      en: "Vimshottari dasha divides a life into planetary periods, calculated from the Moon's nakshatra at birth. This tool computes the full timeline down to four levels, with the period you're in now opened automatically. It's for anyone who wants to know which planetary period they are living through, or to look back at how past turning points line up with the dasha changes.",
      hi: "विंशोत्तरी दशा जीवन को ग्रह-कालों में विभाजित करती है, जिसकी गणना जन्म के समय चंद्रमा के नक्षत्र से होती है। यह उपकरण चार स्तरों तक पूरी समयरेखा निकालता है और अभी चल रही दशा को अपने-आप खोलकर दिखाता है। यह उन सभी के लिए है जो जानना चाहते हैं कि वे किस ग्रह-काल से गुज़र रहे हैं, या पिछले मोड़ों को दशा-परिवर्तन से मिलाकर देखना चाहते हैं।",
      ja: "ヴィムショッタリ・ダシャーは、出生時の月のナクシャトラをもとに人生を惑星の期間に分けるものです。土星期やラーフ期など、九惑星それぞれの期間を含め、本ツールでは4階層までの周期を計算し、現在進行中の期間を自動で開いて表示します。「今の自分はどの惑星の時期にいるのか」を知りたい方や、過去の転機とダシャーの切り替わりを照らし合わせてみたい方におすすめです。",
      ko: "비쇼타리 다샤는 출생 시 달의 낙샤트라를 기준으로 삶을 행성 주기로 나눕니다. 이 도구는 4단계까지 전체 타임라인을 계산하고, 현재 진행 중인 주기를 자동으로 펼쳐 보여 줍니다. 지금 내가 어느 행성의 시기에 있는지 알고 싶은 분, 과거의 전환점과 다샤의 변화를 맞춰 보고 싶은 분께 추천합니다.",
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
      {
        question: {
          en: "What is the difference between a mahadasha and an antardasha?",
          hi: "महादशा और अंतर्दशा में क्या अंतर है?",
          ja: "マハーダシャーとアンタルダシャーの違いは何ですか？",
          ko: "마하다샤와 안타르다샤의 차이는 무엇인가요?",
        },
        answer: {
          en: "A mahadasha is the major period of 6 to 20 years ruled by one planet. An antardasha is one of the nine sub-periods it is divided into, lasting from a few months to about three years. The mahadasha sets the broad theme, and the antardasha adds the colour of each stretch within it.",
          hi: "महादशा एक ग्रह द्वारा शासित 6 से 20 वर्ष की मुख्य अवधि है। अंतर्दशा उसकी नौ उप-अवधियों में से एक है, जो कुछ महीनों से लगभग तीन वर्ष तक की होती है। महादशा व्यापक विषय तय करती है और अंतर्दशा उसके भीतर हर खंड को अपना रंग देती है।",
          ja: "マハーダシャーは、一つの惑星が支配する6〜20年の大きな期間です。アンタルダシャーはそれを九つに分けた小期間で、数か月から3年ほど続きます。大きなテーマをマハーダシャーが、その中の時期ごとの色合いをアンタルダシャーが表すと考えます。",
          ko: "마하다샤는 한 행성이 지배하는 6~20년의 큰 주기입니다. 안타르다샤는 이를 아홉으로 나눈 소주기로, 몇 달에서 3년 정도 이어집니다. 큰 주제는 마하다샤가, 그 안의 시기별 색채는 안타르다샤가 나타낸다고 봅니다.",
        },
      },
      {
        question: {
          en: "Can I calculate my dasha without knowing my birth time?",
          hi: "क्या जन्म समय जाने बिना दशा निकाली जा सकती है?",
          ja: "出生時刻がわからなくてもダシャーは計算できますか？",
          ko: "출생 시각을 몰라도 다샤를 계산할 수 있나요?",
        },
        answer: {
          en: "Yes — enter an approximate time such as noon and a timeline will still be produced. But the Moon moves through roughly one nakshatra a day, so the dates can be off by months, and if the Moon was near a nakshatra boundary even the order of periods can change. Treat the result as a rough guide.",
          hi: "हाँ — दोपहर जैसा अनुमानित समय डालने पर भी समयरेखा बन जाती है। पर चंद्रमा लगभग एक दिन में एक नक्षत्र पार करता है, इसलिए तिथियाँ महीनों तक खिसक सकती हैं, और यदि चंद्रमा नक्षत्र की सीमा के पास था तो दशाओं का क्रम भी बदल सकता है। परिणाम को केवल अनुमान मानें।",
          ja: "はい、正午などのおおよその時刻を入れれば計算はできます。ただし月は約1日で一つのナクシャトラを進むため、日付が数か月ずれることがあり、月がナクシャトラの境目付近にいた場合は期間の順番そのものが変わることもあります。結果はあくまで目安としてご覧ください。",
          ko: "네, 정오 같은 대략적인 시각을 넣으면 계산은 됩니다. 다만 달은 약 하루에 낙샤트라 하나를 지나므로 날짜가 몇 달씩 어긋날 수 있고, 달이 낙샤트라 경계 근처에 있었다면 주기의 순서 자체가 바뀔 수도 있습니다. 결과는 어디까지나 참고로 보세요.",
        },
      },
      {
        question: {
          en: "Why are my dasha dates different from another site or app?",
          hi: "मेरी दशा की तिथियाँ किसी दूसरी साइट या ऐप से अलग क्यों हैं?",
          ja: "他のサイトやアプリとダシャーの日付が違うのはなぜですか？",
          ko: "다른 사이트나 앱과 다샤 날짜가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "The usual causes are a different ayanamsha (this tool uses Lahiri), a different convention for the length of a dasha year, or slightly different birth time or place input. Even a small change in the Moon's position shifts the balance of the first period, and every later date moves with it. Check that the birth details match first.",
          hi: "सामान्य कारण हैं — अलग अयनांश (यह उपकरण लाहिड़ी का उपयोग करता है), दशा-वर्ष की लंबाई की अलग परिपाटी, या जन्म समय व स्थान के इनपुट में थोड़ा अंतर। चंद्रमा की स्थिति में छोटा-सा बदलाव भी पहली दशा के शेष काल को खिसका देता है और बाद की सभी तिथियाँ उसके साथ खिसकती हैं। पहले जन्म विवरण मिलाकर देखें।",
          ja: "主な原因は、アヤナムシャの違い（当ツールはラヒリ方式）、ダシャーの1年の長さの取り方の違い、そして出生時刻や出生地の入力の違いです。月の位置がわずかに違うだけで最初の期間の残り年数が変わり、その後の日付もすべて連動してずれます。まずは入力した出生情報が同じかを確認してみてください。",
          ko: "주된 원인은 아야남샤의 차이(이 도구는 라히리 방식), 다샤 1년의 길이를 잡는 방식의 차이, 그리고 출생 시각이나 출생지 입력의 차이입니다. 달의 위치가 조금만 달라도 첫 주기의 남은 기간이 바뀌고, 이후 날짜도 모두 함께 어긋납니다. 먼저 입력한 출생 정보가 같은지 확인해 보세요.",
        },
      },
      {
        question: {
          en: "Is a Saturn or Rahu period a bad time?",
          hi: "क्या शनि या राहु की दशा बुरा समय होती है?",
          ja: "土星期やラーフ期は悪い時期なのですか？",
          ko: "토성 주기나 라후 주기는 나쁜 시기인가요?",
        },
        answer: {
          en: "Not automatically. How a period unfolds depends on where that planet sits in your birth chart, which house it rules and which planets it connects with. Saturn periods are often described as times of steady effort and taking on responsibility, and many people find them productive.",
          hi: "अपने-आप नहीं। कोई दशा कैसी रहेगी, यह इस पर निर्भर करता है कि वह ग्रह आपकी कुंडली में कहाँ है, किस भाव का स्वामी है और किन ग्रहों से जुड़ा है। शनि दशा को प्रायः स्थिर परिश्रम और ज़िम्मेदारी उठाने का समय कहा जाता है, और बहुत से लोग इसे उपयोगी पाते हैं।",
          ja: "一概にそうとは言えません。その期間がどう表れるかは、出生図の中でその惑星がどこにあり、どの室を支配し、どの惑星と関わっているかによって変わります。土星期は地道な努力や責任を引き受ける時期と説明されることが多く、実りのある時期として過ごす人も少なくありません。",
          ko: "꼭 그렇지는 않습니다. 그 주기가 어떻게 나타날지는 출생 차트에서 그 행성이 어디에 있고, 어느 하우스를 지배하며, 어떤 행성과 연결되는지에 따라 달라집니다. 토성 주기는 꾸준한 노력과 책임을 맡는 시기로 설명되는 경우가 많고, 이를 결실 있는 시기로 보내는 사람도 적지 않습니다.",
        },
      },
      {
        question: {
          en: "Will I go through all 120 years of the cycle in one lifetime?",
          hi: "क्या एक जीवन में पूरे 120 वर्ष का चक्र पूरा होता है?",
          ja: "120年の周期を一生のうちにすべて経験するのですか？",
          ko: "120년 주기를 평생 모두 경험하게 되나요?",
        },
        answer: {
          en: "Usually not. The cycle starts partway through the period of your Moon's nakshatra lord, and an ordinary lifespan covers only some of the nine periods. That's why the periods that fall in your own lifetime differ from person to person.",
          hi: "प्रायः नहीं। चक्र आपके चंद्र नक्षत्र के स्वामी की दशा के बीच से शुरू होता है, और सामान्य जीवनकाल में नौ में से कुछ ही दशाएँ आती हैं। इसीलिए हर व्यक्ति के जीवन में आने वाली दशाएँ अलग होती हैं।",
          ja: "通常はすべてを経験するわけではありません。周期は月のナクシャトラの支配星の期間の途中から始まり、一般的な寿命の中では九つの期間のうち一部だけを過ごすことになります。そのため、人生で巡ってくる期間の組み合わせは人によって異なります。",
          ko: "보통은 모두 경험하지 않습니다. 주기는 달의 낙샤트라 지배 행성 주기의 도중부터 시작되며, 일반적인 수명 안에서는 아홉 주기 중 일부만 지나게 됩니다. 그래서 삶에서 만나는 주기의 조합은 사람마다 다릅니다.",
        },
      },
      {
        question: {
          en: "How do I find the period I'm in right now?",
          hi: "अभी मैं किस दशा में हूँ, यह कैसे पता करूँ?",
          ja: "今どのダシャーにいるかはどこで確認できますか？",
          ko: "지금 어느 다샤에 있는지 어디서 확인하나요?",
        },
        answer: {
          en: "After you enter your birth details, the mahadasha running today is shown already open. Find the antardasha inside it whose start and end dates include today's date, and tap it to see the finer levels.",
          hi: "जन्म विवरण डालने के बाद, आज चल रही महादशा पहले से खुली दिखती है। उसके भीतर वह अंतर्दशा देखें जिसकी आरंभ और समाप्ति तिथियों के बीच आज की तारीख आती है, और सूक्ष्म स्तर देखने के लिए उस पर टैप करें।",
          ja: "出生情報を入力すると、現在進行中のマハーダシャーが最初から開いた状態で表示されます。その中から、開始日と終了日の間に今日の日付が入るアンタルダシャーを探し、タップするとさらに細かい階層を確認できます。",
          ko: "출생 정보를 입력하면 현재 진행 중인 마하다샤가 처음부터 펼쳐진 상태로 표시됩니다. 그 안에서 시작일과 종료일 사이에 오늘 날짜가 들어가는 안타르다샤를 찾아 탭하면 더 세밀한 단계를 볼 수 있습니다.",
        },
      },
    ],
  },
  {
    slug: "nakshatra-finder",
    resultPanel: "nakshatraFinder",
    title: {
      en: "Nakshatra finder",
      hi: "नक्षत्र खोजें",
      ja: "ナクシャトラ診断｜生まれの月宿とパダを無料で調べる",
      ko: "낙샤트라 찾기",
    },
    description: {
      en: "Calculate the nakshatra the Moon occupied at your birth, with its pada, ruling planet, deity and Moon sign — plus what it means and how it starts your Vimshottari dasha.",
      hi: "जन्म तिथि, समय और स्थान से जन्म नक्षत्र, पाद, स्वामी ग्रह, देवता और चंद्र राशि जानें — साथ ही इसका अर्थ और विंशोत्तरी दशा से संबंध।",
      ja: "生年月日・出生時刻・出生地から、生まれたときの月のナクシャトラ（27宿）とパダ、支配星、神格、月星座を計算。意味やヴィムショッタリ・ダシャーとの関係も解説します。",
      ko: "생년월일·출생 시각·출생지로 탄생 낙샤트라와 파다, 지배 행성, 신격, 달별자리를 계산하고, 그 의미와 빔쇼타리 다샤와의 관계도 설명합니다.",
    },
    useCase: {
      en: "The starting point for reading anything else about the Moon — temperament, timing, and the mansion your Sukuyō sign comes from.",
      hi: "चंद्रमा से जुड़ी हर बात पढ़ने का प्रारंभिक बिंदु — स्वभाव, समय और आपके नक्षत्र का आधार।",
      ja: "月にまつわるすべての読み解きの出発点。気質、タイミング、そして宿曜の宿の元になる情報です。",
      ko: "달과 관련된 모든 것을 읽는 출발점 — 기질, 시기, 그리고 수쿠요 본명수의 근거입니다.",
    },
    lead: {
      en: "Your birth nakshatra is the lunar mansion the Moon occupied when you were born — one of 27 divisions of the zodiac, each with its own ruler and character. This tool calculates the Moon's position from your birth details using the Lahiri ayanamsa and shows your nakshatra, pada, ruling planet, deity and Moon sign. It is a first step whether you are new to Jyotish or want to confirm where your dasha sequence begins.",
      hi: "आपका जन्म नक्षत्र वह चंद्र-भवन है जिसमें जन्म के समय चंद्रमा था — राशिचक्र के 27 विभागों में से एक, प्रत्येक का अपना स्वामी और स्वभाव। यह उपकरण लाहिड़ी अयनांश से चंद्रमा की स्थिति निकालकर आपका नक्षत्र, पाद, स्वामी ग्रह, देवता और चंद्र राशि दिखाता है — ज्योतिष सीखने वालों और अपनी दशा का आरंभ-बिंदु जानना चाहने वालों, दोनों के लिए पहला कदम।",
      ja: "生まれたときに月が在泊していた月宿が、あなたの生まれナクシャトラです。黄道を27に分けたそれぞれに、固有の支配星と性質があります。このツールでは出生データから月の位置をラヒリ方式で計算し、ナクシャトラ・パダ・支配星・神格・月星座を表示します。インド占星術を初めて学ぶ方にも、ダシャーの起点を確かめたい方にも役立つ、読み解きの第一歩です。",
      ko: "출생 시 달이 머문 달의 별자리가 당신의 낙샤트라입니다. 황도를 27개로 나눈 각각에는 고유한 지배 행성과 성격이 있습니다. 이 도구는 출생 정보로 달의 위치를 라히리 방식으로 계산해 낙샤트라·파다·지배 행성·신격·달별자리를 보여줍니다. 인도 점성술 입문자에게도, 다샤의 출발점을 확인하고 싶은 분에게도 유용한 첫걸음입니다.",
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
      {
        question: {
          en: "Can I find my nakshatra without knowing my birth time?",
          hi: "क्या जन्म समय के बिना नक्षत्र पता चल सकता है?",
          ja: "出生時刻がわからなくてもナクシャトラはわかりますか？",
          ko: "출생 시각을 몰라도 낙샤트라를 알 수 있나요?",
        },
        answer: {
          en: "In most cases, yes. The Moon spends about a day in each nakshatra, so the date usually settles it; tick the box and the tool calculates with noon as a placeholder. The pada, however, is not shown, and if the Moon changed nakshatra on your birth day the result could be the neighbouring one.",
          hi: "अधिकांश मामलों में हाँ। चंद्रमा एक नक्षत्र में लगभग एक दिन रहता है, इसलिए तिथि से प्रायः पता चल जाता है; बॉक्स पर टिक करने पर गणना दोपहर 12 बजे के अस्थायी समय से होती है। पर पाद नहीं दिखता, और यदि जन्म के दिन नक्षत्र बदला हो तो परिणाम पड़ोसी नक्षत्र हो सकता है।",
          ja: "多くの場合はわかります。月は一つのナクシャトラに約一日とどまるため、日付だけでほぼ決まります。チェックを入れると正午を仮の時刻として計算します。ただしパダは表示されず、生まれた日に月がナクシャトラの境目を越えていた場合は、隣のナクシャトラになる可能性があります。",
          ko: "대부분은 알 수 있습니다. 달은 한 낙샤트라에 약 하루 머물기 때문에 날짜만으로 거의 정해집니다. 체크하면 정오를 임시 시각으로 계산합니다. 다만 파다는 표시되지 않으며, 태어난 날 달이 경계를 넘었다면 이웃 낙샤트라일 수도 있습니다.",
        },
      },
      {
        question: {
          en: "What is a pada?",
          hi: "पाद क्या है?",
          ja: "パダとは何ですか？",
          ko: "파다란 무엇인가요?",
        },
        answer: {
          en: "A pada is one quarter of a nakshatra, 3°20′ wide, so there are 108 in all. It adds finer nuance within the same nakshatra. Because the Moon crosses a pada in only a few hours, an accurate birth time is needed to fix it.",
          hi: "पाद नक्षत्र का एक-चौथाई भाग है, 3°20′ चौड़ा, इसलिए कुल 108 पाद होते हैं। यह एक ही नक्षत्र के भीतर सूक्ष्म अंतर दिखाता है। चंद्रमा कुछ ही घंटों में एक पाद पार करता है, इसलिए सटीक जन्म समय आवश्यक है।",
          ja: "パダはナクシャトラを四等分した一区画で、幅は3度20分、全部で108あります。同じナクシャトラの中でも、より細かな違いを読むために使われます。月は数時間で一つのパダを通過するため、確定には正確な出生時刻が必要です。",
          ko: "파다는 낙샤트라를 4등분한 구획으로 폭은 3°20′, 모두 108개입니다. 같은 낙샤트라 안에서 더 세밀한 차이를 읽는 데 쓰입니다. 달은 몇 시간 만에 파다 하나를 지나므로 정확한 출생 시각이 필요합니다.",
        },
      },
      {
        question: {
          en: "Why does my Moon sign differ from Western astrology?",
          hi: "मेरी चंद्र राशि पाश्चात्य ज्योतिष से अलग क्यों है?",
          ja: "西洋占星術の月星座と結果が違うのはなぜですか？",
          ko: "서양 점성술의 달별자리와 결과가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Western astrology uses the tropical zodiac, while Jyotish uses the sidereal zodiac with the Lahiri ayanamsa, which currently sits about 24° behind. That gap often moves the Moon back by one sign. Neither is a calculation error; they simply measure from different starting points.",
          hi: "पाश्चात्य ज्योतिष सायन राशि-चक्र का उपयोग करता है, जबकि ज्योतिष लाहिड़ी अयनांश के साथ निरयण राशि-चक्र, जो वर्तमान में लगभग 24° पीछे है। इस अंतर से चंद्रमा प्रायः एक राशि पीछे आ जाता है। यह गणना की त्रुटि नहीं, बस अलग आरंभ-बिंदु है।",
          ja: "西洋占星術は回帰黄道、インド占星術はラヒリ方式の恒星黄道を使い、両者には現在およそ24度の差があります。この差によって、月星座が一つ前の星座になることがよくあります。どちらかの計算が間違っているわけではなく、基準点が異なるためです。",
          ko: "서양 점성술은 회귀 황도를, 인도 점성술은 라히리 방식의 항성 황도를 쓰며 현재 약 24도 차이가 있습니다. 이 차이로 달별자리가 한 별자리 앞이 되는 경우가 많습니다. 어느 쪽의 계산 오류도 아니며 기준점이 다를 뿐입니다.",
        },
      },
      {
        question: {
          en: "How is my nakshatra related to the dasha?",
          hi: "मेरे नक्षत्र का दशा से क्या संबंध है?",
          ja: "ナクシャトラとダシャーにはどんな関係がありますか？",
          ko: "낙샤트라와 다샤는 어떤 관계가 있나요?",
        },
        answer: {
          en: "The Vimshottari dasha, a 120-year cycle, begins with the period of your birth nakshatra's ruling planet. How far the Moon had travelled through the nakshatra sets how much of that first period remains at birth. You can see the full timeline in the dasha calculator.",
          hi: "120 वर्ष का विंशोत्तरी दशा-चक्र आपके जन्म नक्षत्र के स्वामी ग्रह की दशा से आरंभ होता है। चंद्रमा नक्षत्र में कितना आगे था, इससे पहली दशा का शेष भाग तय होता है। पूरी समयरेखा दशा कैलकुलेटर में देखें।",
          ja: "120年周期のヴィムショッタリ・ダシャーは、生まれのナクシャトラの支配星の期間から始まります。月がそのナクシャトラをどこまで進んでいたかで、最初の期間の残り年数が決まります。全体の流れはダシャー計算ツールで確認できます。",
          ko: "120년 주기의 빔쇼타리 다샤는 탄생 낙샤트라 지배 행성의 주기에서 시작됩니다. 달이 그 낙샤트라를 얼마나 지났는지로 첫 주기의 남은 기간이 정해집니다. 전체 흐름은 다샤 계산기에서 확인할 수 있습니다.",
        },
      },
      {
        question: {
          en: "Is the nakshatra the same as the Sukuyō birth mansion?",
          hi: "क्या नक्षत्र और सुक्युō जन्म-भवन एक ही हैं?",
          ja: "ナクシャトラは宿曜の本命宿と同じですか？",
          ko: "낙샤트라는 수쿠요의 본명수와 같은가요?",
        },
        answer: {
          en: "Both come from the same 27 lunar divisions, so they correspond one to one. The interpretation traditions differ, however: Sukuyō reads mainly relationships between mansions, while Jyotish combines the nakshatra with the whole chart and the dashas. The Sukuyō page covers the birth mansion.",
          hi: "दोनों एक ही 27 चंद्र विभाजनों से आते हैं, इसलिए एक-दूसरे से मेल खाते हैं। पर व्याख्या की परंपरा अलग है: सुक्युō मुख्यतः भवनों के आपसी संबंध पढ़ता है, जबकि ज्योतिष नक्षत्र को पूरी कुंडली और दशा के साथ पढ़ता है।",
          ja: "どちらも同じ27の区分に由来するため、一対一で対応しています。ただし解釈の伝統は異なり、宿曜は主に宿どうしの関係を読み、インド占星術はナクシャトラをチャート全体やダシャーと合わせて読みます。本命宿については宿曜のページをご覧ください。",
          ko: "둘 다 같은 27구분에서 유래하므로 일대일로 대응합니다. 다만 해석 전통은 달라서, 수쿠요는 주로 수 사이의 관계를 읽고 인도 점성술은 낙샤트라를 전체 차트와 다샤와 함께 읽습니다. 본명수는 수쿠요 페이지를 참고하세요.",
        },
      },
      {
        question: {
          en: "Is there a bad nakshatra to be born in?",
          hi: "क्या कोई नक्षत्र जन्म के लिए बुरा होता है?",
          ja: "生まれると良くないナクシャトラはありますか？",
          ko: "태어나면 좋지 않은 낙샤트라가 있나요?",
        },
        answer: {
          en: "No. Each of the 27 nakshatras has its own character and strengths, and none decides by itself whether a life goes well. A nakshatra is read together with the rest of the chart, so please treat the result as material for self-reflection.",
          hi: "नहीं। 27 नक्षत्रों में से प्रत्येक का अपना स्वभाव और शक्ति है, और कोई भी अकेले जीवन का अच्छा-बुरा तय नहीं करता। नक्षत्र को पूरी कुंडली के साथ पढ़ा जाता है, इसलिए परिणाम को आत्म-चिंतन की सामग्री मानें।",
          ja: "ありません。27のナクシャトラはそれぞれ固有の性質と長所を持ち、どれか一つで人生の良し悪しが決まることはありません。ナクシャトラはチャートの他の要素と合わせて読むものなので、結果は自分を見つめるヒントとしてお使いください。",
          ko: "없습니다. 27개 낙샤트라는 각자 고유한 성격과 장점이 있으며, 어느 하나로 인생의 길흉이 정해지지 않습니다. 낙샤트라는 차트의 다른 요소와 함께 읽으므로, 결과는 자신을 돌아보는 힌트로 활용해 주세요.",
        },
      },
    ],
  },
  {
    // High-intent search term across all four markets — the question
    // usually arrives before marriage, driven by a family member or a
    // previous reading rather than idle curiosity. The panel checks the
    // other classical yogas too, but this page leads with Mangal Dosha
    // since that's the specific query it answers.
    slug: "mangal-dosha",
    sections: ["yogas"],
    chartHandoff: "generic",
    title: {
      en: "Mangal Dosha (Kuja Dosha) checker",
      hi: "मंगल दोष (कुज दोष) जाँच",
      ja: "マンガル・ドーシャ（クジャ・ドーシャ）無料チェック",
      ko: "망갈 도샤(쿠자 도샤) 확인",
    },
    description: {
      en: "Check whether Mars sits in a Mangal Dosha house in your chart, with the exact house shown — plus every other classical yoga this chart carries.",
      hi: "जानें कि आपकी कुंडली में मंगल दोष है या नहीं, ठीक भाव के साथ — और इस कुंडली के अन्य सभी शास्त्रीय योग भी।",
      ja: "火星がラグナから第1・2・4・7・8・12室のどこにあるかを出生データから無料で確認。該当する室、表示される相殺条件の読み方、他のヨーガまで、不安をあおらず落ち着いて解説します。",
      ko: "화성이 차트에서 망갈 도샤 하우스에 있는지 정확한 하우스와 함께 확인하고, 이 차트가 가진 다른 고전 요가도 함께 확인하세요.",
    },
    useCase: {
      en: "Run this before a marriage conversation starts — it's usually raised by someone else first, and it helps to already know what your own chart actually shows.",
      hi: "विवाह की बातचीत शुरू होने से पहले इसे आज़माएँ — यह प्रश्न प्रायः कोई और पहले उठाता है, और पहले से अपनी कुंडली की वास्तविक स्थिति जानना मददगार होता है।",
      ja: "結婚の話が始まる前に。この質問は多くの場合、先に他の誰かから出されるもので、自分のチャートが実際に何を示しているかを前もって知っておくと安心です。",
      ko: "결혼 이야기가 시작되기 전에 확인해 보세요. 이 질문은 대개 다른 사람이 먼저 꺼내며, 자신의 차트가 실제로 무엇을 보여주는지 미리 아는 것이 도움이 됩니다.",
    },
    lead: {
      en: "Mangal Dosha is read when Mars occupies one of six specific houses from the Lagna. This page shows whether your chart carries it, in which house, and what classical texts say cancels it — alongside every other yoga this chart shows evidence for.",
      hi: "मंगल दोष तब पढ़ा जाता है जब मंगल लग्न से छह विशेष भावों में से किसी एक में हो। यह पृष्ठ बताता है कि आपकी कुंडली में यह है या नहीं, किस भाव में, और शास्त्रों के अनुसार इसका निरसन कैसे होता है — साथ ही अन्य सभी योग भी जिनके प्रमाण इस कुंडली में मिलते हैं।",
      ja: "マンガル・ドーシャは、火星がラグナから特定の六つのハウスのいずれかにあるときに読まれる、インド占星術の伝統的な考え方です。生年月日・出生時刻・出生地を入力すると、あなたのチャートにこの配置があるか、火星がどのハウスにあるかを表示し、あわせて根拠が見つかった他のヨーガもすべて示します。結婚の話が出る前に自分の配置を知っておきたい方や、家族から言われて気になっている方に向けて、古典が挙げる相殺条件や流派による違いも、落ち着いて読めるように解説しています。",
      ko: "망갈 도샤는 화성이 라그나로부터 여섯 개의 특정 하우스 중 하나에 있을 때 읽습니다. 이 페이지는 당신의 차트에 이것이 있는지, 어느 하우스인지, 고전에서 무엇을 상쇄 조건으로 보는지 보여주며, 이 차트에서 근거가 발견된 다른 모든 요가도 함께 보여줍니다.",
    },
    faqs: [
      {
        question: {
          en: "Does Mangal Dosha always need to be cancelled before marriage?",
          hi: "क्या विवाह से पहले मंगल दोष का निरसन हमेशा आवश्यक है?",
          ja: "結婚前にマンガル・ドーシャは必ず相殺しなければなりませんか？",
          ko: "결혼 전에 망갈 도샤를 반드시 상쇄해야 하나요?",
        },
        answer: {
          en: "No — classical texts list several conditions that cancel or weaken it (Mars in its own sign, aspects from benefics, both charts carrying it), and traditions vary in how strictly they weigh it. This page shows the placement itself; what it means for a specific match is what a full reading covers.",
          hi: "नहीं — शास्त्रों में इसके निरसन या कमजोर होने की कई शर्तें बताई गई हैं (मंगल का स्वराशि में होना, शुभ ग्रहों की दृष्टि, दोनों कुंडलियों में इसका होना), और परंपराएँ इसे कितनी सख्ती से मानती हैं यह भिन्न होता है।",
          ja: "いいえ。古典には相殺・軽減の条件がいくつも挙げられており（火星が自身の星座にある、吉星からのアスペクトがある、双方のチャートにある、など）、これをどれほど厳格に見るかは流派によっても異なります。当ページは配置そのものを示すものです。",
          ko: "아니요. 고전에는 상쇄 또는 약화 조건이 여러 가지 있으며(화성이 자신의 별자리에 있음, 길성의 아스펙트, 양쪽 차트 모두에 있음 등), 이를 얼마나 엄격하게 보는지는 전통마다 다릅니다. 이 페이지는 배치 자체를 보여줍니다.",
        },
      },
      {
        question: {
          en: "What other combinations does this page check?",
          hi: "यह पृष्ठ और कौन-कौन से संयोग जाँचता है?",
          ja: "このページは他にどのような組み合わせを確認しますか？",
          ko: "이 페이지는 다른 어떤 조합을 확인하나요?",
        },
        answer: {
          en: "Kaal Sarp Dosha, Gaja Kesari, Budhaditya, Chandra-Mangala, Neecha Bhanga Raja Yoga, and the five Panchamahapurusha yogas — each shown only when your chart carries evidence for it, with the exact planet and house.",
          hi: "कालसर्प दोष, गजकेसरी, बुधादित्य, चंद्र-मंगल, नीच भंग राजयोग, और पाँच पंचमहापुरुष योग — प्रत्येक केवल तभी दिखाया जाता है जब आपकी कुंडली में इसका प्रमाण मिलता है, ठीक ग्रह और भाव सहित।",
          ja: "カーラ・サルパ・ドーシャ、ガジャ・ケサリ、ブダーディティヤ、チャンドラ・マンガラ、ニーチャ・バンガ・ラージャ・ヨーガ、そして五つのパンチャマハープルシャ・ヨーガです。それぞれ、あなたのチャートに根拠がある場合のみ、正確な惑星とハウスとともに表示されます。",
          ko: "칼 사르프 도샤, 가자 케사리, 부다디티야, 찬드라 망갈라, 니차 방가 라자 요가, 그리고 다섯 판차마하푸루샤 요가입니다. 각각 당신의 차트에 근거가 있을 때만 정확한 행성과 하우스와 함께 표시됩니다.",
        },
      },
      {
        question: {
          en: "Does having Mangal Dosha mean I can't marry or that a marriage will go badly?",
          hi: "क्या मंगल दोष होने का अर्थ है कि विवाह नहीं हो सकता या विवाह असफल होगा?",
          ja: "マンガル・ドーシャがあると結婚できない、うまくいかないのですか？",
          ko: "망갈 도샤가 있으면 결혼할 수 없거나 결혼이 잘 안 되나요?",
        },
        answer: {
          en: "No. Six of the twelve houses qualify, so roughly half of all people carry it from the Lagna alone — it's a very ordinary placement. A single placement doesn't decide anyone's suitability for marriage or how a relationship turns out; please read it as one facet of your chart.",
          hi: "नहीं। बारह में से छह भाव इसमें आते हैं, इसलिए केवल लग्न के आधार पर लगभग आधे लोगों में यह होता है — यह बहुत सामान्य स्थिति है। कोई एक ग्रह-स्थिति किसी की विवाह-योग्यता या रिश्ते का परिणाम तय नहीं करती; इसे कुंडली के एक पहलू के रूप में पढ़ें।",
          ja: "いいえ。十二室のうち六室が該当するため、ラグナ基準だけでも単純計算でおよそ半数の人に当てはまる、ありふれた配置です。配置ひとつで結婚の適性や関係の行方が決まることはありません。チャートの一側面として、落ち着いて受け止めてください。",
          ko: "아니요. 열두 하우스 중 여섯이 해당하므로 라그나 기준만으로도 약 절반의 사람에게 해당하는 흔한 배치입니다. 배치 하나로 결혼 적합성이나 관계의 향방이 정해지지 않습니다. 차트의 한 측면으로 차분히 받아들여 주세요.",
        },
      },
      {
        question: {
          en: "Can I check it if I don't know my exact birth time?",
          hi: "यदि सटीक जन्म समय पता न हो तो क्या जाँच कर सकते हैं?",
          ja: "出生時刻がわからなくても調べられますか？",
          ko: "출생 시각을 정확히 몰라도 확인할 수 있나요?",
        },
        answer: {
          en: "You can enter an approximate time, but treat the result as tentative. The check counts houses from the Lagna, which changes sign roughly every two hours, so an hour's difference can move Mars by one house. Try times an hour or two either side — if the result stays the same, it's more dependable.",
          hi: "अनुमानित समय डाल सकते हैं, पर परिणाम को केवल संकेत मानें। जाँच लग्न से भाव गिनती है, जो लगभग हर दो घंटे में राशि बदलता है, इसलिए एक घंटे का अंतर मंगल को एक भाव खिसका सकता है। एक-दो घंटे आगे-पीछे के समय भी आज़माएँ — परिणाम वही रहे तो अधिक भरोसेमंद है।",
          ja: "おおよその時刻でも計算はできますが、結果は参考程度にとどめてください。判定はラグナから室を数えるため、ラグナが約二時間ごとに星座を移る以上、一時間の差で火星の室が変わることがあります。前後一〜二時間の時刻でも試し、結果が変わらなければ信頼度は高いと言えます。",
          ko: "대략적인 시각으로도 계산할 수 있지만 결과는 참고로만 보세요. 판정은 라그나에서 하우스를 세는데, 라그나는 약 두 시간마다 별자리가 바뀌므로 한 시간 차이로 화성의 하우스가 달라질 수 있습니다. 앞뒤 1~2시간도 시험해 보고 결과가 같다면 신뢰도가 높습니다.",
        },
      },
      {
        question: {
          en: "Why is Mars in a different house here than in my Western horoscope?",
          hi: "पाश्चात्य कुंडली की तुलना में यहाँ मंगल अलग भाव में क्यों है?",
          ja: "西洋占星術のホロスコープと火星のハウスが違うのはなぜですか？",
          ko: "서양 점성술 호로스코프와 화성의 하우스가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "This site uses the sidereal zodiac with Lahiri ayanamsa (about 24° from the Western tropical zodiac) and whole-sign houses, while Western charts usually use the tropical zodiac and systems such as Placidus. Signs and houses can therefore shift by one. Neither is an error; they measure differently.",
          hi: "यह साइट लाहिड़ी अयनांश (पाश्चात्य सायन राशि-चक्र से लगभग 24°) वाली निरयण राशि और पूर्ण-राशि भाव अपनाती है, जबकि पाश्चात्य कुंडलियाँ प्रायः सायन राशि और प्लेसिडस जैसी पद्धतियाँ। इसलिए राशि और भाव एक खिसक सकते हैं। कोई गलती नहीं, मापने का तरीका अलग है।",
          ja: "当サイトはラーヒリー・アヤナムシャ（西洋の回帰黄道と約24度の差）を用いる恒星黄道とホールサイン方式で計算し、西洋式は回帰黄道とプラシーダス法などを使うことが多いためです。そのため星座や室が一つずれることがあります。どちらかの誤りではなく、物差しの違いです。",
          ko: "이 사이트는 라히리 아야남샤(서양 회귀 황도와 약 24도 차이)를 쓰는 항성 황도와 홀사인 방식으로 계산하고, 서양식은 회귀 황도와 플라시두스 방식 등을 쓰는 경우가 많기 때문입니다. 그래서 별자리와 하우스가 하나 밀릴 수 있습니다. 어느 쪽의 오류가 아니라 잣대의 차이입니다.",
        },
      },
      {
        question: {
          en: "Ruchaka Yoga appeared alongside Mangal Dosha. What does that mean?",
          hi: "मंगल दोष के साथ रुचक योग भी दिखा। इसका क्या अर्थ है?",
          ja: "マンガル・ドーシャと一緒にルチャカ・ヨーガが表示されました。どういう意味ですか？",
          ko: "망갈 도샤와 함께 루차카 요가가 표시되었습니다. 무슨 뜻인가요?",
        },
        answer: {
          en: "Ruchaka Yoga appears when Mars is in house 1, 4, 7 or 10 in its own sign (Aries, Scorpio) or exalted (Capricorn). Mars in its own or exaltation sign is one of the classical cancellation conditions for Mangal Dosha, so seeing both means that condition is met. Other conditions aren't evaluated by this check.",
          hi: "रुचक योग तब दिखता है जब मंगल भाव 1, 4, 7 या 10 में स्वराशि (मेष, वृश्चिक) या उच्च (मकर) में हो। मंगल का स्वराशि या उच्च में होना मंगल दोष की एक शास्त्रीय निरसन शर्त है, इसलिए दोनों दिखें तो वह शर्त पूरी होती है। अन्य शर्तें यह जाँच नहीं देखती।",
          ja: "ルチャカ・ヨーガは、火星が第1・4・7・10室で自身の星座（牡羊座・蠍座）か高揚（山羊座）にあるときに表示されます。火星が自身の星座や高揚にあることはマンガル・ドーシャの古典的な相殺条件の一つなので、両方が出ていればその条件を満たしています。なお、それ以外の相殺条件はこのチェックでは判定していません。",
          ko: "루차카 요가는 화성이 1·4·7·10하우스에서 자신의 별자리(양자리, 전갈자리)나 고양(염소자리)에 있을 때 표시됩니다. 화성이 자신의 별자리나 고양에 있는 것은 망갈 도샤의 고전적 상쇄 조건 중 하나이므로, 둘 다 나왔다면 그 조건을 충족한 것입니다. 그 밖의 상쇄 조건은 이 확인에서 판정하지 않습니다.",
        },
      },
      {
        question: {
          en: "Do I have to perform the suggested remedies?",
          hi: "क्या सुझाए गए उपाय करना ज़रूरी है?",
          ja: "表示される対処法（ウパーヤ）は必ず行うべきですか？",
          ko: "표시되는 레메디(우파야)는 반드시 해야 하나요?",
        },
        answer: {
          en: "No. The remedies shown below the result are general reference, not chosen for your specific chart. If you find them meaningful, modest, sustainable practices such as prayer or charity are the traditional approach — there's no need to feel pressured into anything costly.",
          hi: "नहीं। परिणाम के नीचे दिखाए गए उपाय सामान्य संदर्भ हैं, आपकी विशेष कुंडली के लिए नहीं चुने गए। यदि आपको अर्थपूर्ण लगें, तो प्रार्थना या दान जैसे सरल, नियमित अभ्यास ही पारंपरिक तरीका है — किसी महँगे उपाय का दबाव महसूस करने की ज़रूरत नहीं।",
          ja: "いいえ。結果の下に表示される対処法は一般的な参考情報で、あなたのチャートに合わせて選ばれたものではありません。意味を感じる場合は、祈りや寄付など無理なく続けられる控えめな実践が伝統的なやり方です。高額なものを勧められても、急いで決める必要はありません。",
          ko: "아니요. 결과 아래에 표시되는 레메디는 일반 참고 정보이며 당신의 차트에 맞춰 고른 것이 아닙니다. 의미를 느낀다면 기도나 기부처럼 무리 없이 이어갈 수 있는 소박한 실천이 전통적인 방법입니다. 비싼 것을 권유받더라도 서둘러 결정할 필요는 없습니다.",
        },
      },
    ],
  },
  {
    // Adjacent to Jyotish, not part of it — its own page says so rather
    // than presenting it as Vedic astrology. 数秘術 carries real Japanese
    // search volume this site ranks nothing for today, and it needs only
    // the birth date already on file, no ephemeris call.
    slug: "numerology",
    resultPanel: "numerology",
    title: {
      en: "Numerology: Mulank, Bhagyank & name number",
      hi: "अंक ज्योतिष: मूलांक, भाग्यांक और नाम अंक",
      ja: "数秘術 無料計算｜誕生数・運命数・名前の数（インド式）",
      ko: "수비학: 물랑크, 바갼크, 이름 수",
    },
    description: {
      en: "Your birth number, destiny number, and — for Latin-script names — a Chaldean name number, each with its ruling planet.",
      hi: "आपका जन्म अंक, भाग्य अंक, और — रोमन लिपि नामों के लिए — एक कैल्डियन नाम अंक, प्रत्येक के स्वामी ग्रह सहित।",
      ja: "数秘術の無料計算ツール。生年月日からインド式の誕生数（ムーランク）と運命数（バギャーンク）を求め、ローマ字のお名前があればカルデア式の名前の数も支配星つきで表示します。",
      ko: "생년월일로 계산하는 물랑크(출생수)와 바갼크(운명수), 로마자 이름이 있다면 칼데아식 이름 수까지, 각각의 지배 행성과 함께 확인하세요.",
    },
    useCase: {
      en: "A quick second read alongside your chart — the birth date you've already entered is all this needs.",
      hi: "आपकी कुंडली के साथ एक त्वरित अतिरिक्त दृष्टिकोण — इसके लिए बस वही जन्म तिथि चाहिए जो आपने पहले ही दर्ज की है।",
      ja: "チャートと合わせて手軽に見られる、もう一つの視点です。すでに入力した生年月日があれば十分です。",
      ko: "차트와 함께 가볍게 볼 수 있는 또 하나의 관점입니다. 이미 입력한 생년월일만 있으면 충분합니다.",
    },
    lead: {
      en: "Numerology reduces a birth date — and optionally a name — to single-digit numbers, each read through a ruling planet. This tool calculates, in the style common in India, your Mulank (birth number) from the day you were born, your Bhagyank (destiny number) from the full birth date, and a name number from your name in Latin letters. It's a related tradition, not part of Vedic astrology itself, but a good way to see your temperament from another angle — and the birth date you've entered elsewhere already answers it.",
      hi: "अंक ज्योतिष जन्म तिथि — और वैकल्पिक रूप से नाम — को एकल अंकों में बदलता है, प्रत्येक को एक स्वामी ग्रह के माध्यम से पढ़ा जाता है। यह टूल भारत में प्रचलित पद्धति से जन्म के दिनांक से मूलांक, पूरी जन्म तिथि से भाग्यांक, और रोमन अक्षरों में लिखे नाम से नाम अंक निकालता है। यह वैदिक ज्योतिष का हिस्सा नहीं, एक संबंधित परंपरा है, पर अपने स्वभाव को दूसरे कोण से देखने का अच्छा तरीका है।",
      ja: "数秘術は、生年月日（および任意でお名前）を一桁の数に還元し、それぞれを支配星を通じて読み解くものです。このツールでは、生まれた日から求めるムーランク（誕生数）、生年月日全体から求めるバギャーンク（運命数）、ローマ字のお名前から求める名前の数を、インドで親しまれている方式で計算します。インド占星術そのものではなく隣接する伝統ですが、自分の気質を別の角度から眺めたい方におすすめです。他の場所ですでに入力した生年月日があれば、すぐに算出できます。",
      ko: "수비학은 생년월일(선택적으로 이름)을 한 자리 숫자로 환원하여 각각을 지배 행성을 통해 읽는 것입니다. 이 도구는 인도에서 친숙한 방식으로 태어난 날에서 물랑크(출생수), 생년월일 전체에서 바갼크(운명수), 로마자 이름에서 이름 수를 계산합니다. 베다 점성술 자체는 아닌 관련 전통이지만, 자신의 기질을 다른 각도에서 보고 싶은 분께 권합니다. 다른 곳에서 이미 입력한 생년월일이 있으면 바로 계산할 수 있습니다.",
    },
    faqs: [
      {
        question: {
          en: "Is numerology part of Vedic astrology?",
          hi: "क्या अंक ज्योतिष वैदिक ज्योतिष का हिस्सा है?",
          ja: "数秘術はインド占星術の一部ですか？",
          ko: "수비학은 베다 점성술의 일부인가요?",
        },
        answer: {
          en: "No — they're related traditions that share the idea of planetary rulership, but numerology works from a birth date's digits rather than the sky at the moment of birth. This page keeps them separate rather than presenting one as the other.",
          hi: "नहीं — ये संबंधित परंपराएँ हैं जो ग्रह-स्वामित्व का विचार साझा करती हैं, पर अंक ज्योतिष जन्म तिथि के अंकों से काम करता है, जन्म के समय आकाश से नहीं।",
          ja: "いいえ。両者は支配星という考え方を共有する関連伝統ですが、数秘術は出生時の天空ではなく、生年月日の数字から算出します。当ページは両者を混同せず、別のものとして扱います。",
          ko: "아니요. 두 전통은 지배 행성이라는 개념을 공유하지만, 수비학은 출생 순간의 하늘이 아니라 생년월일의 숫자로 계산합니다. 이 페이지는 둘을 혼동하지 않고 별개로 다룹니다.",
        },
      },
      {
        question: {
          en: "Why is there no name number for some names?",
          hi: "कुछ नामों के लिए नाम अंक क्यों नहीं दिखता?",
          ja: "名前の数が表示されない場合があるのはなぜですか？",
          ko: "일부 이름에는 왜 이름 수가 표시되지 않나요?",
        },
        answer: {
          en: "The Chaldean name-number table assigns values to Latin letters only. Running a name written in kana or hangul through it would produce a number that's wrong under every numerology system, not an approximation of a real one — so this page asks for a Latin spelling instead of guessing.",
          hi: "कैल्डियन नाम-अंक तालिका केवल रोमन अक्षरों को मान देती है। कोई भी अन्य लिपि गलत परिणाम देगी, इसलिए यह पृष्ठ अनुमान लगाने के बजाय रोमन वर्तनी माँगता है।",
          ja: "カルデア式の名前の数表は、ラテン文字にのみ数値を割り当てます。かなやハングルの名前をそのまま計算すると、どの数秘術方式でも誤った数になってしまうため、当ページは推測せずローマ字表記を求めます。",
          ko: "칼데아식 이름 수 표는 라틴 문자에만 값을 부여합니다. 가나나 한글 이름을 그대로 계산하면 어떤 수비학 방식으로도 잘못된 숫자가 나오므로, 이 페이지는 추측 대신 로마자 표기를 요청합니다.",
        },
      },
      {
        question: {
          en: "What's the difference between the birth number and the destiny number?",
          hi: "जन्म अंक और भाग्य अंक में क्या अंतर है?",
          ja: "誕生数（ムーランク）と運命数（バギャーンク）の違いは何ですか？",
          ko: "출생수(물랑크)와 운명수(바갼크)의 차이는 무엇인가요?",
        },
        answer: {
          en: "The Mulank uses only the day of the month you were born — the 23rd gives 2 + 3 = 5. The Bhagyank adds every digit of the year, month and day together. The first is traditionally read as your everyday temperament, the second as the broader direction of your life.",
          hi: "मूलांक केवल जन्म के दिनांक का उपयोग करता है — 23 तारीख से 2 + 3 = 5। भाग्यांक वर्ष, माह और दिन के सभी अंकों को जोड़ता है। पहले को परंपरागत रूप से दैनिक स्वभाव और दूसरे को जीवन की व्यापक दिशा के रूप में पढ़ा जाता है।",
          ja: "ムーランクは生まれた「日」だけを使い、例えば23日生まれなら2＋3＝5です。バギャーンクは年・月・日のすべての数字を足して求めます。伝統的には、前者がふだんの気質、後者が人生全体の方向性を表すと読まれます。",
          ko: "물랑크는 태어난 '일'만 사용하며, 예를 들어 23일생이면 2+3=5입니다. 바갼크는 연·월·일의 모든 숫자를 더해 구합니다. 전통적으로 전자는 평소의 기질, 후자는 인생 전체의 방향성을 나타낸다고 읽습니다.",
        },
      },
      {
        question: {
          en: "Why are there no master numbers such as 11 or 22?",
          hi: "11 या 22 जैसे मास्टर नंबर क्यों नहीं हैं?",
          ja: "11や22などのマスターナンバーが出ないのはなぜですか？",
          ko: "11이나 22 같은 마스터 넘버가 나오지 않는 이유는 무엇인가요?",
        },
        answer: {
          en: "Master numbers belong to the Western, Pythagorean school. The Indian-style numerology this tool follows reduces every total all the way to 1–9 so each number can be paired with one of the nine planets. A total of 29, for example, becomes 11 and then 2.",
          hi: "मास्टर नंबर पश्चिमी, पाइथागोरियन शैली के हैं। यह टूल भारतीय पद्धति का पालन करता है, जो हर योग को 1–9 तक घटाती है ताकि हर अंक को नवग्रहों में से एक से जोड़ा जा सके। उदाहरण के लिए, 29 पहले 11 और फिर 2 बनता है।",
          ja: "マスターナンバーは、西洋のピタゴラス式数秘術の考え方です。当ツールが採用するインド式では、各数を九つの惑星に対応させるため、合計を必ず1〜9まで還元します。例えば合計29は11を経て2になります。",
          ko: "마스터 넘버는 서양 피타고라스식 수비학의 개념입니다. 이 도구가 따르는 인도식은 각 수를 아홉 행성에 대응시키기 위해 합계를 반드시 1~9까지 환원합니다. 예를 들어 합계 29는 11을 거쳐 2가 됩니다.",
        },
      },
      {
        question: {
          en: "Does the name number change with spelling, a maiden name or a nickname?",
          hi: "क्या वर्तनी, विवाह से पहले के नाम या उपनाम से नाम अंक बदलता है?",
          ja: "名前の数は、ローマ字の綴りや旧姓・通称で変わりますか？",
          ko: "이름 수는 로마자 철자나 옛 성, 통칭에 따라 달라지나요?",
        },
        answer: {
          en: "Yes. The number is calculated from the exact letters you enter, so Sato and Satou, or a maiden name and a married name, give different results. Enter the spelling you actually use day to day, and try others if you're curious.",
          hi: "हाँ। अंक ठीक उन्हीं अक्षरों से निकलता है जो आप दर्ज करते हैं, इसलिए Sato और Satou, या विवाह से पहले और बाद के नाम, अलग परिणाम देते हैं। वह वर्तनी दर्ज करें जो आप रोज़ उपयोग करते हैं, और जिज्ञासा हो तो अन्य भी आज़माएँ।",
          ja: "はい、変わります。入力した文字そのものから計算するため、「Sato」と「Satou」、旧姓と現在の姓では結果が異なります。ふだん実際に使っている綴りで入力し、気になる方は別の表記も試してみてください。",
          ko: "네, 달라집니다. 입력한 글자 그대로 계산하므로 Sato와 Satou, 옛 성과 현재 성은 결과가 다릅니다. 평소 실제로 쓰는 철자로 입력하고, 궁금하다면 다른 표기도 시험해 보세요.",
        },
      },
      {
        question: {
          en: "Do I need my birth time or birthplace for numerology?",
          hi: "क्या अंक ज्योतिष के लिए जन्म समय या जन्म स्थान चाहिए?",
          ja: "数秘術に出生時刻や出生地は必要ですか？",
          ko: "수비학에 출생 시각이나 출생지가 필요한가요?",
        },
        answer: {
          en: "No. The calculation uses only the birth date and, optionally, your name. The entry form asks for time and place because it's shared with the site's chart tools, so an approximate time is fine if you don't know it.",
          hi: "नहीं। गणना केवल जन्म तिथि और वैकल्पिक रूप से नाम का उपयोग करती है। प्रविष्टि फ़ॉर्म समय और स्थान इसलिए पूछता है क्योंकि वह साइट के कुंडली टूल के साथ साझा है, इसलिए समय ज्ञात न हो तो अनुमानित समय पर्याप्त है।",
          ja: "いいえ、計算に使うのは生年月日と（任意で）お名前だけです。入力フォームはサイトのホロスコープ系ツールと共通のため時刻と場所もたずねますが、時刻が不明ならおおよその時刻で問題ありません。",
          ko: "아니요. 계산에 쓰는 것은 생년월일과 (선택적으로) 이름뿐입니다. 입력 양식이 사이트의 차트 도구와 공통이라 시각과 장소도 묻지만, 시각을 모르면 대략적인 시각이어도 문제없습니다.",
        },
      },
      {
        question: {
          en: "Why does my result differ from other numerology sites?",
          hi: "मेरा परिणाम अन्य अंक ज्योतिष साइटों से अलग क्यों है?",
          ja: "ほかの数秘術サイトと結果が違うのはなぜですか？",
          ko: "다른 수비학 사이트와 결과가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Most Japanese sites use the Western method, which keeps master numbers and converts names with the Pythagorean A-to-I table. This tool uses the Indian approach and the Chaldean letter table, so the name number in particular can differ. Neither is a calculation error — they're different traditions.",
          hi: "अधिकांश जापानी साइटें पश्चिमी पद्धति का उपयोग करती हैं, जो मास्टर नंबर रखती है और नामों को पाइथागोरियन तालिका से बदलती है। यह टूल भारतीय पद्धति और कैल्डियन अक्षर तालिका का उपयोग करता है, इसलिए विशेषकर नाम अंक अलग हो सकता है। यह गणना की गलती नहीं, अलग परंपराएँ हैं।",
          ja: "日本の多くのサイトは、マスターナンバーを残し、AからIを1〜9とするピタゴラス式の表で名前を数に換える西洋式を使っています。当ツールはインド式とカルデア式の文字表を使うため、特に名前の数が異なることがあります。どちらかの計算ミスではなく、流派の違いです。",
          ko: "일본의 많은 사이트는 마스터 넘버를 남기고 A부터 I를 1~9로 매기는 피타고라스식 표로 이름을 바꾸는 서양식을 씁니다. 이 도구는 인도식과 칼데아식 문자표를 쓰기 때문에 특히 이름 수가 다를 수 있습니다. 어느 쪽의 계산 착오가 아니라 유파의 차이입니다.",
        },
      },
      {
        question: {
          en: "Are some numbers unlucky?",
          hi: "क्या कुछ अंक अशुभ होते हैं?",
          ja: "悪い数字や不吉な数はありますか？",
          ko: "나쁜 숫자나 불길한 수가 있나요?",
        },
        answer: {
          en: "No number is simply bad. Each of 1–9 is read through its planet's qualities, and even 4 (Rahu) or 8 (Saturn) carry strengths such as originality and perseverance. Treat the result as a lens for reflection rather than a verdict.",
          hi: "कोई अंक केवल बुरा नहीं होता। 1–9 में से हर अंक अपने ग्रह के गुणों से पढ़ा जाता है, और 4 (राहु) या 8 (शनि) में भी मौलिकता और धैर्य जैसी शक्तियाँ हैं। परिणाम को निर्णय नहीं, आत्म-चिंतन का माध्यम मानें।",
          ja: "単純に「悪い」数字はありません。1〜9はそれぞれ支配星の性質を通して読まれ、4（ラーフ）や8（土星）にも独自性や忍耐力といった長所があります。結果は判定ではなく、自分を見つめるためのレンズとしてお使いください。",
          ko: "단순히 '나쁜' 숫자는 없습니다. 1~9는 각각 지배 행성의 성질을 통해 읽히며, 4(라후)나 8(토성)에도 독창성이나 인내력 같은 장점이 있습니다. 결과는 판정이 아니라 자신을 들여다보는 렌즈로 활용하세요.",
        },
      },
    ],
  },
  {
    /*
     * 宿曜 is the strategic page on this site.
     *
     * It is a native Japanese search term for a Japanese Buddhist tradition
     * that descends from the same 27 nakshatras Jyotish uses — so it is a
     * question Japanese searchers already ask, that a Vedic engine is uniquely
     * placed to answer well, and that an India-focused competitor has no reason
     * to build. Most Japanese sukuyō sites derive the mansion from a
     * lunar-calendar date; this derives it from the Moon's actual longitude.
     */
    slug: "sukuyo",
    resultPanel: "sukuyo",
    sections: ["lagna"],
    title: {
      en: "Sukuyō: find your birth mansion (27 nakshatras)",
      hi: "सुक्युō: अपना जन्म नक्षत्र जानें (27 नक्षत्र)",
      ja: "宿曜占星術｜本命宿を調べる（二十七宿）",
      ko: "수쿠요(宿曜) 본명수 찾기 (27수)",
    },
    description: {
      en: "Find your Sukuyō birth mansion from the Moon's real position, not a calendar date. All 27 mansions, with the nakshatra each one comes from.",
      hi: "चंद्रमा की वास्तविक स्थिति से अपना सुक्युō जन्म नक्षत्र जानें। सभी 27 नक्षत्र और उनका स्रोत।",
      ja: "生年月日と出生時刻から、本命宿を正確に算出します。旧暦の日付ではなく月の実際の位置に基づくため、境界日でも判定がぶれません。二十七宿とインド占星術のナクシャトラの対応も示します。",
      ko: "달의 실제 위치에서 수쿠요 본명수를 산출합니다. 음력 날짜가 아니라 실제 황경 기준입니다.",
    },
    useCase: {
      en: "For anyone raised on Japanese fortune-telling terms who has never seen where their sign actually comes from.",
      hi: "उन सभी के लिए जो जापानी भविष्यफल की शब्दावली से परिचित हैं पर कभी नहीं जाना कि उनका चिह्न वास्तव में कहाँ से आता है।",
      ja: "日本の占い用語には親しんでいても、自分の宿がどこから来ているのかは知らなかった方に。",
      ko: "일본식 점술 용어는 익숙하지만 자신의 별자리가 실제로 어디서 왔는지는 몰랐던 분들께.",
    },
    lead: {
      en: "Sukuyō is Japan's system of 27 lunar mansions, carried from India through Tang-dynasty China. It uses the same divisions Jyotish calls nakshatras. Enter your birth details once and this page will find your mansion from the Moon's sidereal longitude, along with its nakshatra, pada, ruling planet and gana. It is for anyone who wants to know their mansion accurately, including people born on a day when the Moon changed mansions.",
      hi: "सुक्युō जापान की सत्ताईस नक्षत्रों की पद्धति है, जो भारत से चीन होते हुए जापान पहुँची। यह वही विभाजन प्रयोग करती है जिन्हें ज्योतिष नक्षत्र कहता है। जन्म-विवरण दर्ज करने पर यह पृष्ठ चंद्रमा के निरयण देशांतर से आपका शुku, नक्षत्र, पाद, स्वामी ग्रह और गण बताता है।",
      ja: "宿曜（すくよう）は、インドの二十七宿が唐代の中国を経て日本に伝わった体系で、インド占星術のナクシャトラと同じ月の分割を用います。出生データを一度ご入力いただければ、月の実際の黄経から本命宿を算出し、対応するナクシャトラ・パダ・支配星・ガナもあわせて表示します。自分の宿を正確に知りたい方、宿の変わり目の日に生まれた方に特におすすめです。",
      ko: "수쿠요는 인도의 27수가 당나라를 거쳐 일본에 전해진 체계로, 조티시의 낙샤트라와 같은 달의 분할을 사용합니다. 출생 정보를 입력하면 달의 실제 황경에서 본명수를 산출하고, 대응하는 낙샤트라·파다·지배성·가나도 함께 보여 줍니다.",
    },
    faqs: [
      {
        question: {
          en: "What is Sukuyō astrology?",
          hi: "सुक्युō ज्योतिष क्या है?",
          ja: "宿曜占星術とは何ですか？",
          ko: "수쿠요 점성술이란 무엇인가요?",
        },
        answer: {
          en: "Sukuyō is a Japanese astrological system based on 27 lunar mansions. It arrived in Japan in the ninth century via the Chinese translation of an Indian text, and its 27 mansions are the same divisions of the Moon's path that Vedic astrology calls nakshatras.",
          hi: "सुक्युō जापान की एक ज्योतिष पद्धति है जो 27 चंद्र नक्षत्रों पर आधारित है। यह नौवीं शताब्दी में एक भारतीय ग्रंथ के चीनी अनुवाद के माध्यम से जापान पहुँची।",
          ja: "宿曜占星術は、二十七の月宿に基づく日本の占術です。九世紀に空海が『宿曜経』を持ち帰ったことで伝わりました。その二十七宿は、インド占星術がナクシャトラと呼ぶ月の通り道の分割と同じものです。",
          ko: "수쿠요는 27개의 달 저택에 기반한 일본의 점성 체계입니다. 9세기에 인도 문헌의 한역본을 통해 일본에 전해졌으며, 27수는 베다 점성술의 낙샤트라와 같은 분할입니다.",
        },
      },
      {
        question: {
          en: "Why does my mansion differ from other Sukuyō sites?",
          hi: "मेरा नक्षत्र अन्य साइटों से भिन्न क्यों है?",
          ja: "他の宿曜サイトと本命宿が違うのはなぜですか？",
          ko: "다른 사이트와 본명수가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Most Sukuyō sites assign a mansion from the lunar-calendar date, which is accurate for most days but wrong near boundaries. This page computes the Moon's actual sidereal longitude at your birth time from the Swiss Ephemeris, so a birth close to a mansion change resolves correctly. Birth time matters for exactly this reason.",
          hi: "अधिकांश साइटें पंचांग तिथि से नक्षत्र निर्धारित करती हैं, जो सीमावर्ती दिनों में गलत हो सकता है। यह पृष्ठ जन्म समय पर चंद्रमा के वास्तविक निरयण देशांतर की गणना करता है।",
          ja: "多くの宿曜サイトは旧暦の日付から本命宿を割り当てます。ほとんどの日は一致しますが、宿の境目にあたる日はずれます。当ページはスイス天体暦を用いて出生時刻における月の実際の黄経を計算するため、境界付近の生まれでも正しく判定できます。出生時刻が重要なのはこのためです。",
          ko: "대부분의 사이트는 음력 날짜로 본명수를 배정하는데, 경계일에는 어긋날 수 있습니다. 이 페이지는 출생 시각의 실제 황경을 계산합니다.",
        },
      },
      {
        question: {
          en: "Is Sukuyō the same as Vedic astrology?",
          hi: "क्या सुक्युō वैदिक ज्योतिष के समान है?",
          ja: "宿曜とインド占星術は同じものですか？",
          ko: "수쿠요와 베다 점성술은 같은 것인가요?",
        },
        answer: {
          en: "They share an origin and the 27-mansion framework, but not the whole system. Sukuyō developed its own interpretive tradition in Japan and works mainly with the mansions and their relationships. Vedic astrology also reads the ascendant, all nine grahas, the houses, and the dasha periods, which is why a full reading says considerably more than a mansion alone.",
          hi: "इनका मूल और 27-नक्षत्र ढाँचा साझा है, पर पूरी पद्धति नहीं। ज्योतिष लग्न, नौ ग्रह, भाव और दशाओं को भी पढ़ता है।",
          ja: "起源と二十七宿という枠組みは共通していますが、体系全体が同じわけではありません。宿曜は日本で独自の解釈伝統を発展させ、主に宿とその相互関係を扱います。インド占星術はこれに加えてラグナ、九つの惑星、十二の室、そしてダシャー期間を読むため、本命宿だけよりはるかに多くのことが分かります。",
          ko: "기원과 27수 체계는 공유하지만 전체 체계가 같지는 않습니다. 조티시는 라그나, 아홉 행성, 12궁, 다샤까지 함께 읽습니다.",
        },
      },
      {
        question: {
          en: "Can I find my mansion without knowing my birth time?",
          hi: "क्या जन्म समय जाने बिना नक्षत्र पता चल सकता है?",
          ja: "出生時刻が分からなくても本命宿は調べられますか？",
          ko: "출생 시각을 몰라도 본명수를 알 수 있나요?",
        },
        answer: {
          en: "Yes, approximately. The Moon spends about a day in each mansion, so most dates give one answer whatever the hour. Calculate with noon as a placeholder; if the Moon is near a boundary, read the neighbouring mansion as a candidate too.",
          hi: "हाँ, लगभग। चंद्रमा प्रत्येक नक्षत्र में लगभग एक दिन रहता है, इसलिए अधिकांश तिथियों पर उत्तर एक ही होता है। दोपहर मानकर गणना करें; सीमा के निकट हो तो पड़ोसी नक्षत्र को भी देखें।",
          ja: "おおよそであれば調べられます。月は一つの宿におよそ一日とどまるため、多くの日は時刻にかかわらず同じ結果になります。正午を仮の時刻として計算し、月が宿の境目に近い場合は前後の宿も候補として読んでみてください。",
          ko: "대략적으로는 가능합니다. 달은 한 수에 약 하루 머무르므로 대부분의 날은 시각과 관계없이 결과가 같습니다. 정오로 계산하고, 경계에 가깝다면 앞뒤 수도 후보로 읽어 보세요.",
        },
      },
      {
        question: {
          en: "What is the difference between a birth mansion and a Moon sign?",
          hi: "जन्म नक्षत्र और चंद्र राशि में क्या अंतर है?",
          ja: "本命宿と月星座（ラーシ）はどう違いますか？",
          ko: "본명수와 달 별자리는 어떻게 다른가요?",
        },
        answer: {
          en: "Both come from the Moon's position at birth, but they divide the zodiac differently. A Moon sign is one of twelve 30° signs; a mansion is one of twenty-seven 13°20′ divisions. A sign therefore contains two and a quarter mansions, and the mansion is the finer description.",
          hi: "दोनों जन्म के समय चंद्रमा की स्थिति से आते हैं, पर राशिचक्र को अलग-अलग बाँटते हैं। चंद्र राशि बारह 30° भागों में से एक है, नक्षत्र सत्ताईस 13°20′ भागों में से एक। इसलिए नक्षत्र अधिक सूक्ष्म विवरण है।",
          ja: "どちらも出生時の月の位置から決まりますが、黄道の分け方が異なります。月星座は30度ずつの十二区分、本命宿は13度20分ずつの二十七区分です。一つの星座に宿が二つと四分の一入る計算になり、本命宿のほうがより細かな描写になります。",
          ko: "둘 다 출생 시 달의 위치에서 정해지지만 황도를 나누는 방식이 다릅니다. 달 별자리는 30도씩 12구획, 본명수는 13도 20분씩 27구획입니다. 한 별자리에 수가 2와 4분의 1개 들어가므로 본명수가 더 세밀한 묘사입니다.",
        },
      },
      {
        question: {
          en: "Does this tool also show compatibility between mansions?",
          hi: "क्या यह टूल नक्षत्रों के बीच अनुकूलता भी दिखाता है?",
          ja: "このツールで宿曜の相性も分かりますか？",
          ko: "이 도구로 수쿠요 궁합도 알 수 있나요?",
        },
        answer: {
          en: "This page shows only your own birth mansion and its Jyotish details. Sukuyō judges compatibility from the distance between two people's mansions, so knowing both mansions is the first step. For a calculated score, the Vedic compatibility tool compares two Moon positions using the 36-point Ashtakoota method.",
          hi: "यह पृष्ठ केवल आपका जन्म नक्षत्र और उसका ज्योतिषीय विवरण दिखाता है। सुक्युō दो व्यक्तियों के नक्षत्रों की दूरी से अनुकूलता देखता है। गणना किए गए अंकों के लिए वैदिक अनुकूलता टूल 36-अंकीय अष्टकूट पद्धति प्रयोग करता है।",
          ja: "当ページで表示するのは、ご本人の本命宿とインド占星術での詳細のみです。宿曜の相性は二人の本命宿の距離から判断するため、まずはお二人それぞれの本命宿を調べることが第一歩になります。点数で相性を見たい場合は、二人の月の位置を三十六点満点のアシュタクータで比べる相性診断ツールをご利用ください。",
          ko: "이 페이지는 본인의 본명수와 조티시 상세만 표시합니다. 수쿠요 궁합은 두 사람의 본명수 사이 거리로 판단하므로, 먼저 각자의 본명수를 아는 것이 첫걸음입니다. 점수로 보고 싶다면 36점 만점의 아슈타쿠타로 비교하는 궁합 도구를 이용해 주세요.",
        },
      },
      {
        question: {
          en: "Why does Gyū (牛宿) not appear among the 27 mansions?",
          hi: "सत्ताईस शुku में 牛宿 क्यों नहीं है?",
          ja: "二十七宿に牛宿が入っていないのはなぜですか？",
          ko: "27수에 牛宿(우수)가 없는 이유는 무엇인가요?",
        },
        answer: {
          en: "Chinese astronomy counts twenty-eight lunar lodges, and Japanese sukuyō uses twenty-seven of them, leaving out 牛宿. This matches Jyotish, which normally calculates with twenty-seven nakshatras and leaves the twenty-eighth division, Abhijit, aside.",
          hi: "चीनी खगोल अट्ठाईस नक्षत्र गिनता है, और जापानी सुक्युō 牛宿 को छोड़कर सत्ताईस प्रयोग करता है। यह ज्योतिष से मेल खाता है, जो सामान्यतः अभिजित को छोड़कर सत्ताईस नक्षत्रों से गणना करता है।",
          ja: "中国の星宿は二十八ありますが、日本の宿曜ではそのうち牛宿を除いた二十七宿を用います。これは、インド占星術が通常は二十七のナクシャトラで計算し、二十八番目のアビジットを外すことと対応しています。",
          ko: "중국의 성수는 28개지만 일본의 수쿠요는 牛宿를 뺀 27수를 씁니다. 이는 조티시가 보통 27개 낙샤트라로 계산하고 28번째인 아비지트를 제외하는 것과 대응합니다.",
        },
      },
    ],
  },
  {
    /*
     * 相性 is the highest-volume commercial intent in Japanese fortune-telling,
     * and the paid compatibility reading is the natural next step from it. The
     * scoring is a pure function of two Moon positions, so no backend work.
     */
    slug: "compatibility",
    resultPanel: "compatibility",
    title: {
      en: "Vedic compatibility calculator (Ashtakoot, 36 points)",
      hi: "वैदिक अनुकूलता गणक (अष्टकूट, 36 अंक)",
      ja: "インド占星術 相性診断｜アシュタクータ三十六点",
      ko: "베다 궁합 계산기 (아슈타쿠타 36점)",
    },
    description: {
      en: "Score compatibility between two birth charts across the eight classical kutas, with the full breakdown rather than a single number.",
      hi: "दो कुंडलियों के बीच आठ शास्त्रीय कूटों पर अनुकूलता, पूर्ण विभाजन के साथ।",
      ja: "お二人の生年月日・出生時刻・出生地から、インド占星術の古典的な八項目・三十六点法（アシュタクータ）で相性を算出。合計点だけでなく、ヴァルナからナーディまで各項目の内訳を表示します。",
      ko: "두 사람의 출생 차트로 여덟 개 고전 쿠타에 걸쳐 궁합을 산출하고, 총점이 아닌 전체 내역을 보여줍니다.",
    },
    useCase: {
      en: "Run before a serious conversation about marriage or moving in together — as a starting point for what to actually talk about, not a verdict.",
      hi: "विवाह या साथ रहने जैसी गंभीर बातचीत से पहले आज़माएँ — निर्णय के रूप में नहीं, बल्कि यह समझने के लिए कि किन बातों पर चर्चा करनी चाहिए।",
      ja: "結婚や同居について真剣に話す前に。結論としてではなく、何を話し合うべきかの出発点として。",
      ko: "결혼이나 동거처럼 진지한 대화를 나누기 전에. 결론이 아니라 무엇을 이야기해야 할지 짚어보는 출발점으로.",
    },
    lead: {
      en: "Ashtakoot scores eight criteria totalling thirty-six points, all derived from the two Moon positions. This page shows every component, because a total on its own hides which part of the relationship it is describing. It is written for anyone curious about a partner, or couples considering marriage who want a starting point for conversation, and explains how to read the result.",
      hi: "अष्टकूट आठ कसौटियों पर छत्तीस अंक देता है, सभी दो चंद्र स्थितियों से। यह पृष्ठ हर घटक दिखाता है, और साथी के साथ अनुकूलता जानने या विवाह पर बातचीत शुरू करने वालों के लिए परिणाम पढ़ने का तरीका भी समझाता है।",
      ja: "アシュタクータは八つの観点を合計三十六点で評価する、インドで古くから使われてきた相性判定法です。すべてお二人の月の位置から算出されます。当ページが合計点だけでなく各項目の内訳を表示するのは、同じ点数でもどの項目で失点しているかによって意味がまったく異なるためです。パートナーとの相性を知りたい方、結婚を考えているお二人が話し合うきっかけを探している方に向けて、結果の読み方までご案内します。",
      ko: "아슈타쿠타는 여덟 관점을 합계 36점으로 평가하는 고전적 궁합 판정법이며, 모두 두 사람의 달 위치에서 산출됩니다.",
    },
    faqs: [
      {
        question: {
          en: "How many points are considered a good match?",
          hi: "कितने अंक अच्छा मेल माने जाते हैं?",
          ja: "何点あれば相性が良いといえますか？",
          ko: "몇 점이면 궁합이 좋다고 하나요?",
        },
        answer: {
          en: "Eighteen out of thirty-six is the figure usually quoted, but it should not be read as a verdict. Ashtakoot uses only the two Moon positions, and ignores the ascendant, the seventh house and its lord, and the dasha period each person is in. Low scores frequently work out and high ones still meet difficulty.",
          hi: "छत्तीस में से अठारह प्रायः उद्धृत आँकड़ा है, पर इसे निर्णय नहीं मानना चाहिए। अष्टकूट केवल दो चंद्र स्थितियाँ देखता है।",
          ja: "一般には三十六点中十八点以上とされますが、これを結論として読むべきではありません。アシュタクータはお二人の月の位置のみを用い、ラグナ、七室とその支配星、現在のダシャー期間を考慮していないためです。点数が低くても続く関係も、高くても難しい時期を迎える関係もあります。",
          ko: "일반적으로 36점 중 18점 이상이라고 하지만, 이를 결론으로 읽어서는 안 됩니다. 아슈타쿠타는 두 사람의 달 위치만 사용합니다.",
        },
      },
      {
        question: {
          en: "What are Bhakoot and Nadi dosha?",
          hi: "भकूट और नाड़ी दोष क्या हैं?",
          ja: "バクート・ドーシャとナーディ・ドーシャとは何ですか？",
          ko: "바쿠타 도샤와 나디 도샤란 무엇인가요?",
        },
        answer: {
          en: "They are the two heaviest zero-scores. Bhakoot dosha occurs when the two Moon signs stand in a 6–8, 5–9 or 2–12 relationship; Nadi dosha when both people share the same nadi. Classical texts also list several conditions under which each is cancelled, so a zero is a prompt to look closer rather than a conclusion.",
          hi: "ये दो सबसे भारी शून्य हैं। भकूट दोष 6-8, 5-9 या 2-12 संबंध में होता है; नाड़ी दोष समान नाड़ी होने पर। शास्त्रों में इनके निरसन के नियम भी हैं।",
          ja: "配点の大きい二項目が零点になる状態を指します。バクート・ドーシャは二人の月星座が六と八、五と九、二と十二の関係にある場合、ナーディ・ドーシャは二人が同じナーディに属する場合です。ただし古典には、それぞれが他の配置によって相殺される条件が複数記されています。零点は結論ではなく、詳しく見るべき合図と考えるのが適切です。",
          ko: "가장 무거운 두 개의 0점입니다. 바쿠타 도샤는 두 달 별자리가 6-8, 5-9, 2-12 관계일 때, 나디 도샤는 같은 나디일 때 발생합니다.",
        },
      },
      {
        question: {
          en: "Do we both need exact birth times?",
          hi: "क्या दोनों का सटीक जन्म समय आवश्यक है?",
          ja: "二人とも正確な出生時刻が必要ですか？",
          ko: "두 사람 모두 정확한 출생 시각이 필요한가요?",
        },
        answer: {
          en: "Birth time matters because it fixes the Moon's nakshatra, and five of the eight kutas depend on it. The Moon moves through one nakshatra in roughly a day, so an hour or two rarely changes the result — but a birth near a boundary can. If a time is unknown, calculate with noon and treat the result as provisional.",
          hi: "जन्म समय चंद्र नक्षत्र तय करता है, और आठ में से पाँच कूट उस पर निर्भर हैं। सीमा के निकट जन्म में अंतर पड़ सकता है।",
          ja: "出生時刻は月のナクシャトラを確定するために必要で、八項目のうち五項目がこれに依存します。月は一つのナクシャトラをおよそ一日で通過するため、一、二時間の違いで結果が変わることは多くありませんが、境界付近の生まれでは変わり得ます。時刻が不明な場合は正午で計算し、結果は暫定的なものとお考えください。",
          ko: "출생 시각은 달의 낙샤트라를 확정하므로 필요하며, 여덟 항목 중 다섯이 이에 의존합니다. 경계 부근 출생은 결과가 달라질 수 있습니다.",
        },
      },
      {
        question: {
          en: "Why does the score change when I swap the two people?",
          hi: "दोनों व्यक्तियों को बदलने पर अंक क्यों बदलता है?",
          ja: "一人目と二人目を入れ替えると点数が変わるのはなぜですか？",
          ko: "첫 번째와 두 번째를 바꾸면 점수가 달라지는 이유는 무엇인가요?",
        },
        answer: {
          en: "Two of the eight kutas, Varna and Gana, are directional in the classical rules, which assume the first person is the bride and the second the groom. Swapping them can therefore move the total by up to two points. For same-sex couples or other relationships, run both orders and read the two results side by side.",
          hi: "आठ में से दो कूट, वर्ण और गण, शास्त्रीय नियमों में दिशात्मक हैं, जो पहले व्यक्ति को वधू और दूसरे को वर मानते हैं। इसलिए क्रम बदलने पर कुल दो अंक तक बदल सकता है। समलैंगिक जोड़ों या अन्य संबंधों में दोनों क्रम आज़माकर परिणाम साथ-साथ देखें।",
          ja: "八項目のうちヴァルナとガナの二つは、一人目を新婦、二人目を新郎とする古典の規則に向きがあるためです。そのため入れ替えると、合計が最大二点変わることがあります。同性のカップルやその他の関係でお使いの場合は、両方の順番で計算して見比べてみてください。",
          ko: "여덟 항목 중 바르나와 가나는 첫 번째를 신부, 두 번째를 신랑으로 보는 고전 규칙상 방향이 있기 때문입니다. 그래서 바꾸면 총점이 최대 2점 달라질 수 있습니다. 동성 커플이나 다른 관계라면 두 순서로 계산해 비교해 보세요.",
        },
      },
      {
        question: {
          en: "Can I use this for friends, family or a work relationship?",
          hi: "क्या इसे मित्रों, परिवार या कार्य-संबंधों के लिए उपयोग कर सकते हैं?",
          ja: "恋人以外（友人・家族・仕事仲間）との相性にも使えますか？",
          ko: "연인 외에 친구·가족·직장 동료와의 궁합에도 쓸 수 있나요?",
        },
        answer: {
          en: "Ashtakoot was designed for marriage matching, so some kutas, such as Yoni and Nadi, are framed around married life. Graha Maitri and Gana, which describe how easily minds and temperaments meet, can still be a useful prompt for other relationships. Treat the total as a loose reference in those cases.",
          hi: "अष्टकूट विवाह-मिलान के लिए बना है, इसलिए योनि और नाड़ी जैसे कुछ कूट वैवाहिक जीवन पर केंद्रित हैं। फिर भी ग्रह मैत्री और गण, जो विचार और स्वभाव के मेल को दर्शाते हैं, अन्य संबंधों के लिए उपयोगी संकेत हो सकते हैं। ऐसे में कुल अंक को केवल ढीला संदर्भ मानें।",
          ja: "アシュタクータは本来結婚相手との相性を見るための方法なので、ヨーニやナーディのように夫婦生活を前提にした項目も含まれます。ただ、考え方の通じやすさを見るグラハ・マイトリや、気質の噛み合いを見るガナは、ほかの関係を振り返るヒントにもなります。その場合、合計点はゆるい参考程度にとどめてください。",
          ko: "아슈타쿠타는 본래 결혼 상대와의 궁합을 보는 방법이라 요니나 나디처럼 부부 생활을 전제로 한 항목도 포함됩니다. 다만 생각이 통하는지를 보는 그라하 마이트리와 기질의 맞물림을 보는 가나는 다른 관계를 돌아보는 힌트가 될 수 있습니다. 이때 총점은 느슨한 참고 정도로 보세요.",
        },
      },
      {
        question: {
          en: "Why does my result differ from other compatibility sites?",
          hi: "मेरा परिणाम अन्य अनुकूलता साइटों से भिन्न क्यों है?",
          ja: "他の相性占いサイトと結果が違うのはなぜですか？",
          ko: "다른 궁합 사이트와 결과가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Western sites use the tropical zodiac and planetary aspects, so their results are not comparable. Among Vedic calculators, differences usually come from the ayanamsa, from how the Vashya split within Sagittarius and Capricorn is handled, or from the birth time and place entered. This site uses the Lahiri ayanamsa and shows every kuta, so you can see exactly where the difference arises.",
          hi: "पश्चिमी साइटें सायन राशिचक्र और ग्रह-दृष्टियाँ उपयोग करती हैं, इसलिए उनकी तुलना नहीं हो सकती। वैदिक गणकों में अंतर प्रायः अयनांश, धनु और मकर में वश्य-विभाजन के व्यवहार, या दर्ज जन्म समय-स्थान से आता है। यह साइट लाहिड़ी अयनांश उपयोग करती है और हर कूट दिखाती है, ताकि अंतर का स्रोत दिख सके।",
          ja: "西洋占星術のサイトはトロピカル方式の星座と惑星の角度を使うため、そもそも比較できません。インド占星術の計算サイトどうしでは、アヤナムシャの違い、射手座と山羊座の途中で分かれるヴァシャの扱い、入力した出生時刻や出生地の違いが主な原因です。当サイトはラヒリのアヤナムシャを用い、八項目すべてを表示しているので、どこで差が出ているかを確かめられます。",
          ko: "서양 점성술 사이트는 회귀황도 별자리와 행성 각도를 쓰므로 애초에 비교할 수 없습니다. 베다 점성술 계산 사이트끼리는 아야남샤의 차이, 궁수자리와 염소자리 중간에서 나뉘는 바샤의 처리, 입력한 출생 시각·출생지의 차이가 주된 원인입니다. 이 사이트는 라히리 아야남샤를 쓰고 여덟 항목을 모두 표시하므로 어디서 차이가 나는지 확인할 수 있습니다.",
        },
      },
      {
        question: {
          en: "If our score is low, should we reconsider the relationship?",
          hi: "यदि हमारे अंक कम हैं, तो क्या संबंध पर पुनर्विचार करना चाहिए?",
          ja: "点数が低かったら、関係を見直したほうがよいですか？",
          ko: "점수가 낮으면 관계를 다시 생각해야 하나요?",
        },
        answer: {
          en: "No — a score from two Moon positions cannot decide that. Look at which kutas lost points and use them as themes to talk about together, such as pace of life or how you handle disagreements. Relationships are shaped by how two people communicate and support each other, far more than by a number.",
          hi: "नहीं — दो चंद्र स्थितियों से निकला अंक यह तय नहीं कर सकता। देखें किन कूटों में अंक कम हुए और उन्हें साथ बात करने के विषय बनाएँ, जैसे जीवन की गति या मतभेद सँभालने का तरीका। संबंध किसी संख्या से कहीं अधिक दोनों के संवाद और सहयोग से बनते हैं।",
          ja: "いいえ、二人の月の位置だけから出した点数で、それを決めることはできません。どの項目で点数が低かったかを確認し、生活のペースや意見が分かれたときの向き合い方など、お二人で話し合うテーマとして活かしてください。関係を形づくるのは、点数よりもお互いの対話と支え合いです。",
          ko: "아니요. 두 사람의 달 위치만으로 낸 점수로 그것을 정할 수는 없습니다. 어느 항목에서 점수가 낮았는지 확인하고, 생활의 페이스나 의견이 갈릴 때의 대처 방식 등 두 사람이 이야기할 주제로 활용하세요. 관계를 만드는 것은 점수보다 서로의 대화와 지지입니다.",
        },
      },
    ],
  },
  {
    // A different chart than birth-chart's D1: house 1 is the Moon sign, not
    // the ascendant. Reads mood, instinct and reaction rather than identity
    // and life direction — the chart most Western-astrology-literate visitors
    // are actually used to, since tropical Sun-sign astrology is closer in
    // spirit to a Moon-anchored reading than to Vedic Lagna.
    slug: "moon-sign",
    sections: ["moon"],
    chartHandoff: "moonSign",
    title: {
      en: "Vedic Moon sign (Chandra Rashi) calculator",
      hi: "वैदिक चंद्र राशि कैलकुलेटर",
      ja: "月星座（チャンドラ・ラーシ）計算｜インド占星術",
      ko: "베다 달별자리(찬드라 라시) 계산기",
    },
    description: {
      en: "Calculate your sidereal Vedic Moon sign from your birth date, time and place, and see the Chandra chart with the Moon in house 1 — plus why it differs from Western results.",
      hi: "जन्म-तिथि, समय और स्थान से अपनी निरयन वैदिक चंद्र राशि निकालें और चंद्रमा को पहले भाव में रखने वाली चंद्र कुंडली देखें — पश्चिमी परिणाम से अंतर का कारण भी जानें।",
      ja: "生年月日・時刻・出生地から、インド占星術（サイデリアル方式）の月星座を計算し、月を第1室に置くチャンドラ・チャートを表示。西洋式とずれる理由や読み方も解説します。",
      ko: "생년월일·시각·출생지로 인도 점성술(항성 황도)의 달별자리를 계산하고, 달을 1궁에 둔 찬드라 차트를 표시합니다. 서양식과 어긋나는 이유와 읽는 법도 해설합니다.",
    },
    useCase: {
      en: "Start here if you already know Western Sun-sign astrology — this is the closer Vedic equivalent, not the ascendant chart.",
      hi: "यदि आप पश्चिमी सूर्य-राशि ज्योतिष जानते हैं तो यहीं से शुरू करें — यह उसके निकटतम वैदिक समकक्ष है, लग्न कुंडली नहीं।",
      ja: "西洋の太陽星座占星術をご存じの方は、まずこちらから。ラグナ・チャートよりも近いヴェーダ式の対応物です。",
      ko: "서양 태양별자리 점성술을 아신다면 여기서 시작하세요 — 상승궁 차트보다 더 가까운 베다식 대응입니다.",
    },
    lead: {
      en: "In Jyotish, 'your rashi' means your Moon sign, not your Sun sign. The Moon is the graha of the mind, and the Chandra chart — with the Moon's sign as house 1 — is the reference for reading temperament and emotional response. Enter your birth date, time and place to see your sidereal Moon sign and where every planet sits counted from the Moon. This page also explains why the result can differ from a Western moon sign, and how to read the chart.",
      hi: "ज्योतिष में 'आपकी राशि' का अर्थ चंद्र राशि है, सूर्य राशि नहीं। चंद्रमा मन का कारक है, और चंद्र राशि को पहला भाव मानने वाली चंद्र कुंडली स्वभाव और भावनात्मक प्रतिक्रिया पढ़ने का आधार है। जन्म-तिथि, समय और स्थान दर्ज करें और निरयन पद्धति से अपनी चंद्र राशि तथा चंद्रमा से गिनी गई ग्रह-स्थितियाँ देखें। यह पृष्ठ यह भी बताता है कि परिणाम पश्चिमी मून साइन से अलग क्यों हो सकता है और कुंडली कैसे पढ़ें।",
      ja: "インド占星術で「あなたのラーシ（星座）」といえば、太陽星座ではなく月星座のことです。月は心を司る天体とされ、月を第1室に置くチャンドラ・チャートは、気質や感情の反応を読む基準になります。生年月日・出生時刻・出生地を入力すると、サイデリアル方式で計算した月星座と、月から数えた各惑星の配置がわかります。西洋占星術の月星座と違う結果が出る理由や、チャートの読み方もこのページで解説しています。",
      ko: "인도 점성술에서 '당신의 라시(별자리)'라고 하면 태양별자리가 아니라 달별자리를 뜻합니다. 달은 마음을 관장하는 행성이며, 달을 1궁에 둔 찬드라 차트는 기질과 감정적 반응을 읽는 기준이 됩니다. 생년월일·출생 시각·출생지를 입력하면 항성 황도로 계산한 달별자리와 달에서 센 각 행성의 배치를 알 수 있습니다. 서양 점성술의 달별자리와 결과가 다른 이유와 차트 읽는 법도 이 페이지에서 해설합니다.",
    },
    faqs: [
      {
        question: {
          en: "What is the difference between the Moon sign and the ascendant?",
          hi: "चंद्र राशि और लग्न में क्या अंतर है?",
          ja: "月星座とラグナは何が違いますか？",
          ko: "달별자리와 상승궁은 무엇이 다른가요?",
        },
        answer: {
          en: "The ascendant (Lagna) is the sign rising on the eastern horizon at birth and anchors the whole chart — house 1 is the self as presented to the world. The Moon sign re-anchors house 1 on wherever the Moon was instead, which is read for temperament and emotional instinct rather than outward identity.",
          hi: "लग्न जन्म के समय पूर्वी क्षितिज पर उदय होने वाली राशि है और पूरी कुंडली का आधार है। चंद्र राशि भाव-1 को चंद्रमा की स्थिति पर पुनः केंद्रित करती है, जो स्वभाव और भावनात्मक प्रवृत्ति के लिए पढ़ी जाती है।",
          ja: "ラグナ（上昇宮）は出生時に東の地平線から昇る星座で、チャート全体の基準です。第1室は世界に示す自己を表します。月星座は第1室を月の位置に置き換え、外面的な自己像ではなく気質と感情的な本能を読みます。",
          ko: "라그나(상승궁)는 태어난 순간 동쪽 지평선에서 떠오르는 별자리로 차트 전체의 기준이 됩니다. 달별자리는 1궁을 달의 위치로 다시 설정하여, 외적 정체성이 아닌 기질과 감정적 본능을 읽습니다.",
        },
      },
      {
        question: {
          en: "Is this the same as a Western Sun sign?",
          hi: "क्या यह पश्चिमी सूर्य राशि जैसा ही है?",
          ja: "西洋の太陽星座と同じですか？",
          ko: "서양의 태양별자리와 같은가요?",
        },
        answer: {
          en: "Not exactly, but it is the closer comparison. Western tropical astrology reads the Sun sign as the core of a personality profile; Vedic astrology, using the sidereal zodiac, tends to give that role to the Moon instead. Because of the roughly 24-degree gap between the sidereal and tropical zodiacs, the same body often falls one sign earlier in the Vedic system than in the Western one.",
          hi: "बिल्कुल नहीं, पर यह निकटतम तुलना है। पश्चिमी ज्योतिष सूर्य राशि को व्यक्तित्व का केंद्र मानता है; वैदिक ज्योतिष यह भूमिका प्रायः चंद्रमा को देता है।",
          ja: "完全に同じではありませんが、より近い比較対象です。西洋のトロピカル占星術は太陽星座を性格の核として読みますが、サイデリアル黄道を用いるインド占星術では、その役割はしばしば月に与えられます。なお、サイデリアルとトロピカルの黄道には約24度のずれがあるため、同じ天体でもインド式の星座は西洋式より一つ前になることがよくあります。",
          ko: "정확히는 아니지만 더 가까운 비교입니다. 서양의 트로피컬 점성술은 태양별자리를 성격의 핵심으로 읽지만, 항성 황도를 쓰는 베다 점성술은 그 역할을 대개 달에 부여합니다.",
        },
      },
      {
        question: {
          en: "Why is my result different from the moon sign a Western astrology site gave me?",
          hi: "मेरा परिणाम पश्चिमी ज्योतिष साइट की मून साइन से अलग क्यों है?",
          ja: "西洋占星術で調べた月星座と結果が違うのはなぜですか？",
          ko: "서양 점성술에서 찾은 달별자리와 결과가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Western astrology uses the tropical zodiac, while this site uses the sidereal zodiac with the Lahiri ayanamsa, as is standard in Jyotish. The two are currently about 24° apart, so the Vedic Moon sign is often one sign earlier. Neither is a calculation error — they measure from different starting points.",
          hi: "पश्चिमी ज्योतिष सायन राशिचक्र का उपयोग करता है, जबकि यह साइट ज्योतिष में मानक निरयन (लाहिड़ी अयनांश) पद्धति का। दोनों में अभी लगभग 24° का अंतर है, इसलिए वैदिक चंद्र राशि अक्सर एक राशि पहले आती है। यह गणना की गलती नहीं, अलग आरंभ-बिंदु का परिणाम है।",
          ja: "西洋占星術はトロピカル黄道を、当サイトはインド占星術で標準的なサイデリアル黄道（ラヒリ・アヤナムシャ）を使っています。両者には現在約24度のずれがあるため、インド式の月星座は一つ前の星座になることがよくあります。どちらも計算の誤りではなく、基準点の違いによるものです。",
          ko: "서양 점성술은 트로피컬 황도를, 이 사이트는 인도 점성술의 표준인 항성 황도(라히리 아야남샤)를 씁니다. 현재 두 황도는 약 24도 차이가 나므로 인도식 달별자리는 하나 앞의 별자리가 되는 경우가 많습니다. 어느 쪽도 계산 오류가 아니라 기준점의 차이입니다.",
        },
      },
      {
        question: {
          en: "How often does the Moon change sign?",
          hi: "चंद्रमा कितनी बार राशि बदलता है?",
          ja: "月星座はどのくらいの頻度で変わりますか？",
          ko: "달별자리는 얼마나 자주 바뀌나요?",
        },
        answer: {
          en: "The Moon moves through one sign in about 2.25 days, so it enters a new sign roughly every two to two and a half days. That means people born a day apart can have different Moon signs, and on the day the Moon changes sign, the birth time decides which one applies.",
          hi: "चंद्रमा लगभग 2.25 दिन में एक राशि पार करता है, यानी हर दो से ढाई दिन में नई राशि में प्रवेश करता है। इसलिए एक दिन के अंतर से जन्मे लोगों की चंद्र राशि अलग हो सकती है, और राशि बदलने वाले दिन जन्म-समय ही निर्णय करता है।",
          ja: "月は約2.25日で一つの星座を通過するため、およそ2日から2日半ごとに次の星座へ移ります。そのため一日違いの誕生日でも月星座が異なることがあり、月が星座を移る当日に生まれた方は、出生時刻によってどちらの星座になるかが決まります。",
          ko: "달은 약 2.25일에 한 별자리를 지나므로 대략 2일에서 2일 반마다 다음 별자리로 옮겨 갑니다. 그래서 하루 차이로 태어나도 달별자리가 다를 수 있고, 달이 별자리를 옮기는 날 태어났다면 출생 시각이 어느 별자리인지를 결정합니다.",
        },
      },
      {
        question: {
          en: "Can I find my Moon sign without knowing my birth time?",
          hi: "क्या जन्म-समय जाने बिना चंद्र राशि पता चल सकती है?",
          ja: "出生時刻がわからなくても月星座はわかりますか？",
          ko: "출생 시각을 몰라도 달별자리를 알 수 있나요?",
        },
        answer: {
          en: "In most cases, yes. Calculate with noon and check the Moon's degree: if it sits roughly between 8° and 22°, the sign stays the same all day. If it is near 0° or 29°, try 00:00 and 23:59 too; if the sign changes, you will need an accurate birth time to be sure.",
          hi: "अधिकतर मामलों में हाँ। दोपहर 12 बजे मानकर गणना करें और चंद्रमा का अंश देखें: यदि वह लगभग 8° से 22° के बीच है तो पूरे दिन राशि वही रहती है। 0° या 29° के पास हो तो 00:00 और 23:59 से भी जाँचें; राशि बदले तो निश्चित होने के लिए सटीक जन्म-समय चाहिए।",
          ja: "多くの場合はわかります。正午で計算して月の度数を確認し、およそ8度から22度の間であれば、その日は一日中同じ星座です。0度や29度に近い場合は0:00と23:59でも試し、星座が変わるようであれば、確定には正確な出生時刻が必要です。",
          ko: "대부분의 경우 알 수 있습니다. 정오로 계산해 달의 도수를 확인하고, 대략 8도에서 22도 사이라면 그날은 하루 종일 같은 별자리입니다. 0도나 29도에 가깝다면 0:00과 23:59로도 시험해 보고, 별자리가 바뀐다면 확정하려면 정확한 출생 시각이 필요합니다.",
        },
      },
      {
        question: {
          en: "What is the difference between the Moon sign and the nakshatra?",
          hi: "चंद्र राशि और नक्षत्र में क्या अंतर है?",
          ja: "月星座とナクシャトラ（本命宿）の違いは何ですか？",
          ko: "달별자리와 낙샤트라(본명수)는 무엇이 다른가요?",
        },
        answer: {
          en: "Both come from the Moon's position at birth, but at different scales. The Moon sign divides the zodiac into twelve 30° signs, while the nakshatra divides it into twenty-seven segments of 13°20′ — the same divisions as the 27 mansions of Japanese sukuyō. Each sign contains two and a quarter nakshatras.",
          hi: "दोनों जन्म के समय चंद्रमा की स्थिति से निकलते हैं, पर अलग पैमाने पर। चंद्र राशि राशिचक्र को 30° की बारह राशियों में बाँटती है, जबकि नक्षत्र उसे 13°20′ के सत्ताईस भागों में — वही विभाजन जो जापानी सुक्युō के 27 शुku हैं। हर राशि में सवा दो नक्षत्र आते हैं।",
          ja: "どちらも出生時の月の位置から求めますが、区切りの細かさが違います。月星座は黄道を30度ずつの十二星座に分け、ナクシャトラは13度20分ずつの二十七の区画に分けます。後者は日本の宿曜でいう二十七宿と同じ区分で、一つの星座には二つと四分の一のナクシャトラが含まれます。",
          ko: "둘 다 태어날 때 달의 위치에서 구하지만 나누는 단위가 다릅니다. 달별자리는 황도를 30도씩 열두 별자리로, 낙샤트라는 13도 20분씩 스물일곱 구획으로 나눕니다. 후자는 일본 수쿠요의 27수와 같은 구분이며, 한 별자리에는 낙샤트라가 2와 4분의 1개 들어갑니다.",
        },
      },
      {
        question: {
          en: "What is the Moon sign used for in Jyotish?",
          hi: "ज्योतिष में चंद्र राशि का उपयोग किसलिए होता है?",
          ja: "インド占星術で月星座は何に使われますか？",
          ko: "인도 점성술에서 달별자리는 어디에 쓰이나요?",
        },
        answer: {
          en: "Besides describing temperament and emotional tendencies, it is the reference for several calculations: Sade Sati is counted from the Moon sign, transits are often read from it, and compatibility scoring compares both people's Moon signs and nakshatras. It is best read together with the ascendant and the rest of the chart rather than on its own.",
          hi: "स्वभाव और भावनात्मक प्रवृत्तियों के अलावा यह कई गणनाओं का आधार है: साढ़े साती चंद्र राशि से गिनी जाती है, गोचर प्रायः इससे पढ़ा जाता है, और गुण-मिलान में दोनों की चंद्र राशि व नक्षत्र की तुलना होती है। इसे अकेले के बजाय लग्न और पूरी कुंडली के साथ पढ़ना सबसे अच्छा है।",
          ja: "気質や感情の傾向を読むほか、いくつもの計算の基準になります。サディ・サティは月星座から数え、トランジットも月星座から読むことが多く、相性診断では二人の月星座とナクシャトラを比べます。月星座だけで判断せず、ラグナやチャート全体とあわせて読むのがおすすめです。",
          ko: "기질과 감정적 경향을 읽는 것 외에도 여러 계산의 기준이 됩니다. 사데 사티는 달별자리에서 세고, 트랜짓도 달별자리에서 읽는 경우가 많으며, 궁합에서는 두 사람의 달별자리와 낙샤트라를 비교합니다. 달별자리만으로 판단하지 말고 라그나와 차트 전체와 함께 읽기를 권합니다.",
        },
      },
    ],
  },
  {
    // The transit (Gochar) chart, anchored on the ascendant by default —
    // where the sky is right now, laid over the birth chart's houses.
    slug: "transit-now",
    sections: ["gochar"],
    chartHandoff: "saturn",
    title: {
      en: "Current planetary transits (Gochar) over your chart",
      hi: "आपकी कुंडली पर वर्तमान ग्रह गोचर",
      ja: "今の惑星トランジット（ゴーチャラ）を出生図で無料確認",
      ko: "내 차트 위의 현재 행성 트랜짓(고차라)",
    },
    description: {
      en: "See free which sign and house today's nine grahas occupy, laid over your own birth chart — plus how to count from the Lagna and the Moon and combine transits with your dasha.",
      hi: "आज के नौ ग्रह किस राशि और भाव में हैं, यह आपकी कुंडली पर निःशुल्क देखें — साथ ही लग्न और चंद्र से गिनने तथा गोचर को दशा के साथ पढ़ने का तरीका।",
      ja: "今日の九つの惑星がどの星座・どの室にあるかを、あなたの出生図に重ねて無料で表示。ラグナと月からの数え方、ダシャーとの組み合わせ方まで、インド占星術のゴーチャラの読み方を解説します。",
      ko: "오늘 아홉 행성이 어느 별자리·하우스에 있는지 내 출생 차트에 겹쳐 무료로 보여 줍니다. 라그나와 달에서 세는 법, 다샤와 함께 읽는 법도 설명합니다.",
    },
    useCase: {
      en: "Check this when something notable is happening in your life and you want to see what the sky is doing to explain it — not to predict, to orient.",
      hi: "जब जीवन में कुछ उल्लेखनीय हो रहा हो और आप देखना चाहें कि आकाश क्या कर रहा है — भविष्यवाणी के लिए नहीं, समझने के लिए।",
      ja: "人生で何か特筆すべきことが起きているとき、空が何をしているか確認するために。予測のためではなく、状況を理解するために。",
      ko: "삶에서 특별한 일이 일어나고 있을 때 하늘이 무엇을 하고 있는지 확인하려고 — 예측이 아니라 상황을 파악하기 위해서입니다.",
    },
    lead: {
      en: "Gochar is how Vedic astrology reads the present moment: where each planet is right now, seen through the houses of your birth chart. Enter your birth details and this page lays today's nine grahas — Sun to Saturn plus Rahu and Ketu — over your birth chart, counting houses from your Lagna. It is for anyone who wants to see which areas of life the sky is touching now, and to read that alongside the Moon sign and the running dasha rather than as a generic forecast.",
      hi: "गोचर वैदिक ज्योतिष का वर्तमान क्षण पढ़ने का तरीका है — अभी हर ग्रह कहाँ है, आपकी कुंडली के भावों के माध्यम से देखा गया। जन्म विवरण दर्ज करने पर यह पृष्ठ आज के नौ ग्रहों — सूर्य से शनि तक और राहु-केतु — को आपकी कुंडली पर, लग्न से भाव गिनकर दिखाता है। यह उनके लिए है जो जानना चाहते हैं कि अभी आकाश जीवन के किन क्षेत्रों को छू रहा है, और इसे सामान्य राशिफल के बजाय चंद्र राशि और चल रही दशा के साथ पढ़ना चाहते हैं।",
      ja: "ゴーチャラは、ヴェーダ占星術が「今」を読む方法です。いま各惑星がどこにあるかを、あなたの出生図のハウスを通して見ます。生年月日・出生時刻・出生地を入力すると、太陽から土星までの七惑星とラーフ・ケートゥを合わせた今日の九つの惑星を、ラグナから数えたハウスで出生図に重ねて表示します。空が今あなたの人生のどの分野に触れているかを知り、一般的な星占いではなく、月星座や今のダシャーと合わせて落ち着いて読みたい方に向けたツールです。",
      ko: "고차라는 베다 점성술이 현재를 읽는 방식입니다. 지금 각 행성이 어디에 있는지를 당신의 출생 차트 하우스를 통해 봅니다. 출생 정보를 입력하면 태양부터 토성까지 일곱 행성과 라후·케투를 합친 오늘의 아홉 행성을, 라그나에서 센 하우스로 출생 차트에 겹쳐 표시합니다. 하늘이 지금 삶의 어느 분야에 닿아 있는지 알고, 일반적인 운세가 아니라 달 별자리와 현재 다샤와 함께 차분히 읽고 싶은 분을 위한 도구입니다.",
    },
    faqs: [
      {
        question: {
          en: "What is Gochar (transit)?",
          hi: "गोचर (ट्रांज़िट) क्या है?",
          ja: "ゴーチャラ（トランジット）とは何ですか？",
          ko: "고차라(트랜짓)란 무엇인가요?",
        },
        answer: {
          en: "Gochar is the current position of the planets, read against the houses of your birth chart rather than in isolation. The same transit lands differently for two people because it activates whichever house it falls in for each individual chart — which is why a generic 'Saturn is in Pisces' forecast means very little without a birth chart to place it against.",
          hi: "गोचर ग्रहों की वर्तमान स्थिति है, जिसे अकेले नहीं बल्कि आपकी कुंडली के भावों के संदर्भ में पढ़ा जाता है। एक ही गोचर दो व्यक्तियों के लिए अलग असर डालता है।",
          ja: "ゴーチャラとは、惑星の現在位置を単独でではなく、出生図のハウスに照らして読むものです。同じトランジットでも、それが各人のチャートのどの室に落ちるかによって作用が異なります。だからこそ「土星が魚座にある」という一般的な予測は、出生図と照らし合わせなければほとんど意味を持ちません。",
          ko: "고차라는 행성의 현재 위치를 단독이 아니라 출생 차트의 하우스에 비추어 읽는 것입니다. 같은 트랜짓이라도 각자의 차트에서 어느 하우스에 떨어지느냐에 따라 작용이 다릅니다.",
        },
      },
      {
        question: {
          en: "Which chart does the transit use as its anchor?",
          hi: "गोचर किस कुंडली को आधार बनाकर दिखाया जाता है?",
          ja: "トランジットはどのチャートを基準にしますか？",
          ko: "트랜짓은 어느 차트를 기준으로 하나요?",
        },
        answer: {
          en: "This page counts houses from your ascendant (Lagna) by default. Classical gochara judgement is usually made from the Moon sign instead; use the Lagna / Chandra buttons above the chart to switch to the Moon base. The deeper interpretation of what a given transit means for you is what a live reading covers.",
          hi: "यह पृष्ठ गोचर को आपकी लग्न कुंडली पर आधारित दिखाता है और वहीं से राशि-दर-राशि भाव गिनता है। शास्त्रीय गोचर-फल प्रायः चंद्र राशि से देखा जाता है; चार्ट के ऊपर लग्न / चंद्र बटन से चंद्र आधार चुना जा सकता है।",
          ja: "このページは初期設定では、ラグナの星座から順に数えたハウスでトランジットを表示します。インドの古典的なゴーチャラ判断は月星座を基準にすることが多く、チャート上の「ラグナ基準／チャンドラ基準」ボタンで切り替えられます。特定のトランジットがあなたにとって何を意味するかという深い解釈は、ライブ鑑定で扱う内容です。",
          ko: "이 페이지는 라그나 차트를 기준으로, 라그나의 별자리부터 차례로 센 하우스로 트랜짓을 표시합니다. 인도의 고전적인 고차라 판단은 달 별자리를 기준으로 하는 경우가 많으며, 차트 위의 '라그나 기준 / 찬드라 기준' 버튼으로 전환할 수 있습니다.",
        },
      },
      {
        question: {
          en: "How is Gochar different from a daily horoscope?",
          hi: "गोचर दैनिक राशिफल से कैसे अलग है?",
          ja: "ゴーチャラと毎日の星占いはどう違いますか？",
          ko: "고차라는 매일의 운세와 어떻게 다른가요?",
        },
        answer: {
          en: "A daily horoscope groups everyone by a single sign. Gochar places today's planets in the houses of your own birth chart, counted from your Lagna or Moon, so the same sky reads differently for each person. Slow planets such as Jupiter, Saturn, Rahu and Ketu matter far more than the day-to-day Moon.",
          hi: "दैनिक राशिफल सबको एक राशि के आधार पर समूहित करता है। गोचर आज के ग्रहों को आपकी अपनी कुंडली के भावों में, लग्न या चंद्र से गिनकर रखता है, इसलिए एक ही आकाश हर व्यक्ति के लिए अलग पढ़ा जाता है। गुरु, शनि, राहु, केतु जैसे धीमे ग्रह दैनिक चंद्रमा से कहीं अधिक महत्वपूर्ण हैं।",
          ja: "毎日の星占いは、一つの星座で全員をまとめて占います。ゴーチャラは今日の惑星を、ラグナや月から数えたあなた自身の出生図のハウスに置くため、同じ空でも人によって読み方が変わります。また、日々動く月よりも、木星・土星・ラーフ・ケートゥといった動きの遅い惑星のほうがはるかに重視されます。",
          ko: "매일의 운세는 하나의 별자리로 모든 사람을 묶어 봅니다. 고차라는 오늘의 행성을 라그나나 달에서 센 본인 출생 차트의 하우스에 놓으므로, 같은 하늘도 사람마다 다르게 읽힙니다. 또 매일 움직이는 달보다 목성·토성·라후·케투 같은 느린 행성이 훨씬 중요합니다.",
        },
      },
      {
        question: {
          en: "What if I don't know my exact birth time?",
          hi: "यदि मुझे सटीक जन्म समय पता न हो तो?",
          ja: "出生時刻が正確にわからない場合はどうすればよいですか？",
          ko: "정확한 출생 시각을 모르면 어떻게 하나요?",
        },
        answer: {
          en: "The positions of today's planets are unaffected, but the Lagna changes sign about every two hours, so the house numbers on this page may be off by one. The Moon sign rarely depends on the time, so reading transits from the Moon is the safer choice; the birth-time check can show whether your uncertainty matters.",
          hi: "आज के ग्रहों की स्थिति पर कोई असर नहीं पड़ता, पर लग्न लगभग हर दो घंटे में राशि बदलता है, इसलिए इस पृष्ठ के भाव एक आगे-पीछे हो सकते हैं। चंद्र राशि शायद ही समय पर निर्भर करती है, इसलिए चंद्रमा से गोचर पढ़ना अधिक सुरक्षित है; जन्म समय जाँच से पता चल सकता है कि अनिश्चितता से फ़र्क पड़ता है या नहीं।",
          ja: "今日の惑星の位置そのものは変わりませんが、ラグナは約2時間ごとに星座が変わるため、このページのハウス番号が一つずれる可能性があります。月星座は時刻に左右されにくいので、月から数えて読むほうが安心です。出生時刻チェックで、時刻の不確かさが結果に影響するかを確かめることもできます。",
          ko: "오늘 행성의 위치 자체는 변하지 않지만, 라그나는 약 2시간마다 별자리가 바뀌므로 이 페이지의 하우스 번호가 하나 어긋날 수 있습니다. 달 별자리는 시각의 영향을 덜 받으므로 달에서 세어 읽는 편이 안전합니다. 출생 시각 확인 도구로 불확실성이 결과에 영향을 주는지 확인할 수도 있습니다.",
        },
      },
      {
        question: {
          en: "How do transits and the dasha work together?",
          hi: "गोचर और दशा साथ में कैसे काम करते हैं?",
          ja: "トランジットとダシャーはどう組み合わせて読みますか？",
          ko: "트랜짓과 다샤는 어떻게 함께 읽나요?",
        },
        answer: {
          en: "The Vimshottari dasha shows which planet's themes are active in this period of your life, and transits show when and in which house they tend to surface. A common method is to check where your current dasha lord is transiting and whether Jupiter or Saturn is crossing the house it occupies at birth. When both point to the same house, that area is read as the theme of the moment.",
          hi: "विंशोत्तरी दशा बताती है कि जीवन के इस काल में किस ग्रह के विषय सक्रिय हैं, और गोचर बताता है कि वे कब और किस भाव में प्रकट होते हैं। एक सामान्य तरीका है देखना कि वर्तमान दशा-स्वामी कहाँ गोचर कर रहा है और क्या गुरु या शनि जन्म में उसके भाव से गुज़र रहे हैं। दोनों एक ही भाव की ओर संकेत करें तो वह क्षेत्र इस समय का विषय माना जाता है।",
          ja: "ヴィムショッタリ・ダシャーは人生の今の時期にどの惑星のテーマが働いているかを示し、トランジットはそれがいつ、どの室で表に出やすいかを示します。よく使われるのは、今のダシャーの支配星がどこをトランジットしているか、出生図でその支配星がいる室を木星や土星が通っているかを見る方法です。両方が同じ室を指していれば、その分野が今のテーマだと読みます。",
          ko: "빔쇼타리 다샤는 지금 인생의 시기에 어느 행성의 주제가 작용하는지를, 트랜짓은 그것이 언제 어느 하우스에서 드러나기 쉬운지를 보여 줍니다. 흔히 쓰는 방법은 현재 다샤 지배 행성이 어디를 트랜짓하는지, 출생 차트에서 그 행성이 있는 하우스를 목성이나 토성이 지나는지 보는 것입니다. 둘이 같은 하우스를 가리키면 그 분야를 지금의 주제로 읽습니다.",
        },
      },
      {
        question: {
          en: "Why are Rahu and Ketu always shown as retrograde?",
          hi: "राहु और केतु हमेशा वक्री क्यों दिखाए जाते हैं?",
          ja: "ラーフとケートゥがいつも逆行と表示されるのはなぜですか？",
          ko: "라후와 케투는 왜 항상 역행으로 표시되나요?",
        },
        answer: {
          en: "Rahu and Ketu are not physical bodies but the two points where the Moon's orbit crosses the Sun's apparent path. These nodes move backwards through the zodiac, staying in each sign for about a year and a half, so Jyotish always treats them as retrograde. They are always exactly opposite each other, six signs apart.",
          hi: "राहु और केतु भौतिक पिंड नहीं, बल्कि वे दो बिंदु हैं जहाँ चंद्रमा की कक्षा सूर्य के दृश्य पथ को काटती है। ये बिंदु राशि-चक्र में उल्टी दिशा में चलते हैं और हर राशि में लगभग डेढ़ वर्ष रहते हैं, इसलिए ज्योतिष इन्हें सदा वक्री मानता है। ये सदा एक-दूसरे के ठीक सामने, छह राशि दूर रहते हैं।",
          ja: "ラーフとケートゥは実体のある天体ではなく、月の軌道が太陽の見かけの通り道と交わる二つの点（月の交点）です。この交点は黄道を逆向きに進み、一つの星座に約1年半とどまるため、インド占星術では常に逆行として扱います。二つは必ず正反対、つまり六つ離れた星座に位置します。",
          ko: "라후와 케투는 실체가 있는 천체가 아니라, 달의 궤도가 태양의 겉보기 경로와 만나는 두 점(달의 교점)입니다. 이 교점은 황도를 거꾸로 움직이며 한 별자리에 약 1년 반 머물기 때문에 인도 점성술에서는 항상 역행으로 다룹니다. 둘은 언제나 정반대, 곧 여섯 별자리 떨어진 곳에 있습니다.",
        },
      },
      {
        question: {
          en: "Can I see transits for a date other than today?",
          hi: "क्या मैं आज के अलावा किसी और तिथि का गोचर देख सकता हूँ?",
          ja: "今日以外の日付のトランジットは見られますか？",
          ko: "오늘이 아닌 날짜의 트랜짓도 볼 수 있나요?",
        },
        answer: {
          en: "Yes. The page opens on today; change the transit date above the chart to see the positions for any other day, and use the Today button to come back.",
          hi: "हाँ। पृष्ठ आज की तिथि से खुलता है; चार्ट के ऊपर गोचर तिथि बदलकर किसी भी अन्य दिन की स्थिति देखें, और “आज” बटन से वापस आएँ।",
          ja: "はい。このページは今日の日付で開きます。チャート上の「トランジットの日付」を変えると、その日の惑星配置を確認できます。「今日」ボタンでいつでも今日に戻れます。",
          ko: "네. 이 페이지는 오늘 날짜로 열립니다. 차트 위의 ‘트랜짓 날짜’를 바꾸면 그날의 행성 배치를 볼 수 있고, ‘오늘’ 버튼으로 언제든 돌아올 수 있습니다.",
        },
      },
    ],
  },
  {
    // サターンリターン has real Japanese search volume as a Western-astrology
    // loanword, and 30歳の壁/厄年-adjacent life-transition searches cluster
    // around the same ages this computes. Sade Sati is the Vedic-native
    // framing of the same planet; showing both on one page is the honest
    // answer to "what is Saturn doing to me right now."
    slug: "saturn-return",
    sections: ["sadeSati"],
    chartHandoff: "saturn",
    title: {
      en: "Saturn return & Sade Sati calculator",
      hi: "शनि की वापसी और साढ़े साती कैलकुलेटर",
      ja: "土星回帰（サターンリターン）・サデサティ無料計算",
      ko: "토성 회귀 및 사데 사티 계산기",
    },
    description: {
      en: "Check free from your natal Moon sign whether Saturn is now in a Sade Sati phase (rising, peak or setting) or a Dhaiya period, plus the approximate age and year of your next Saturn return.",
      hi: "अपनी जन्म चंद्र राशि से निःशुल्क जानें कि शनि अभी साढ़े साती (प्रारंभिक, शिखर या अंतिम चरण) या ढैया काल में है या नहीं, साथ ही अगली शनि वापसी की अनुमानित आयु और वर्ष।",
      ja: "出生時の月星座から、今の土星がサデ・サティ（前期・中期・後期）やダイヤの期間にあるかを無料で確認。次のサターンリターン（土星回帰）の年齢と年の目安もわかります。",
      ko: "출생 달 별자리로 지금 토성이 사데 사티(상승기·정점기·하강기)나 다이야 시기에 있는지 무료로 확인하고, 다음 토성 회귀의 대략적인 나이와 연도도 알아보세요.",
    },
    useCase: {
      en: "Check this during a difficult stretch, or ahead of a milestone birthday — Saturn's periods are long, and knowing which one you're in changes how a season should be read.",
      hi: "किसी कठिन दौर में या किसी विशेष जन्मदिन से पहले इसे देखें — शनि के काल लंबे होते हैं, और आप किस काल में हैं यह जानने से किसी दौर को समझने का तरीका बदल जाता है।",
      ja: "つらい時期や、節目の誕生日を前にして確認を。土星の周期は長く、今どの期間にいるかを知ることで、その時期の読み方が変わります。",
      ko: "힘든 시기나 특별한 생일을 앞두고 확인해 보세요. 토성의 주기는 길며, 지금이 어느 시기인지 아는 것이 그 계절을 읽는 방식을 바꿉니다.",
    },
    lead: {
      en: "Saturn moves slowly — about two and a half years per sign — so its periods are read as long chapters rather than single events. This page shows two readings of the same planet: Sade Sati, the Vedic three-sign passage centred on your natal Moon, and Saturn return, the Western framing of Saturn's ~29.5-year orbit completing. Enter your birth details to see which Saturn period you are in now and roughly when your next return falls — useful for anyone wanting to read a long stretch of life as a time of responsibility, review and maturing rather than something to fear.",
      hi: "शनि धीरे चलता है — प्रति राशि लगभग ढाई वर्ष — इसलिए इसके काल एकल घटनाओं के बजाय लंबे अध्यायों के रूप में पढ़े जाते हैं। यह पृष्ठ एक ही ग्रह की दो पद्धतियाँ दिखाता है: साढ़े साती, जन्म चंद्रमा पर केंद्रित तीन-राशि पद्धति, और शनि की वापसी, शनि की लगभग 29.5 वर्षीय परिक्रमा। जन्म विवरण दर्ज करके देखें कि आप अभी किस शनि काल में हैं और अगली वापसी लगभग कब है — यह उन सभी के लिए उपयोगी है जो जीवन के लंबे दौर को डर के बजाय उत्तरदायित्व, समीक्षा और परिपक्वता के समय के रूप में पढ़ना चाहते हैं।",
      ja: "土星の動きは遅く、一つの星座を通過するのに約2年半かかるため、その周期は単発の出来事ではなく長い章として読まれます。当ページは同じ惑星の二つの読み方を示します。出生時の月を中心とした三星座にわたるヴェーダ式のサデ・サティ（サディサティ）と、約29.5年で一周する土星の公転という西洋式の土星回帰（サターンリターン）です。生年月日・出生時刻・出生地を入力すると、今どの土星期間にいるのか、次の回帰がおよそ何歳・何年ごろかがわかります。土星の時期を怖がるのではなく、責任・見直し・成熟の時期として落ち着いて読みたい方に向けたツールです。",
      ko: "토성은 천천히 움직이며 — 한 별자리를 지나는 데 약 2년 반이 걸립니다 — 그래서 그 주기는 단일 사건이 아니라 긴 장(章)으로 읽힙니다. 이 페이지는 같은 행성의 두 가지 해석을 보여줍니다. 출생 달을 중심으로 한 세 별자리에 걸친 베다식 사데 사티와, 약 29.5년 만에 한 바퀴 도는 토성의 공전이라는 서양식 토성 회귀입니다. 출생 정보를 입력하면 지금 어느 토성 시기에 있는지, 다음 회귀가 대략 몇 살·몇 년경인지 알 수 있습니다. 토성의 시기를 두려워하기보다 책임·재점검·성숙의 시기로 차분히 읽고 싶은 분을 위한 도구입니다.",
    },
    faqs: [
      {
        question: {
          en: "Is Sade Sati always a difficult period?",
          hi: "क्या साढ़े साती हमेशा एक कठिन काल होता है?",
          ja: "サデ・サティは必ず困難な時期になりますか？",
          ko: "사데 사티는 항상 힘든 시기인가요?",
        },
        answer: {
          en: "No — classical texts describe it as a period of restructuring and consequence rather than uniform hardship, and its effect depends heavily on Saturn's condition and role in the individual chart, not the phase alone. Everyone experiences three Sade Sati passages roughly every 30 years; treating each as automatically difficult overstates what the placement alone says.",
          hi: "नहीं — शास्त्रों में इसे पुनर्गठन और परिणाम का काल बताया गया है, समान रूप से कठिनाई का नहीं, और इसका प्रभाव कुंडली में शनि की स्थिति और भूमिका पर बहुत निर्भर करता है।",
          ja: "いいえ。古典はこれを、一様な困難というより再編成と結果の時期として描写しており、その影響は個々のチャートにおける土星の状態と役割に大きく左右され、この段階だけで決まるものではありません。",
          ko: "아니요. 고전에서는 이를 균일한 고난이 아니라 재편성과 결과의 시기로 설명하며, 그 영향은 개인 차트에서 토성의 상태와 역할에 크게 좌우되고 이 단계만으로 결정되지 않습니다.",
        },
      },
      {
        question: {
          en: "Why do the Saturn return ages shown here not account for my exact birth date?",
          hi: "यहाँ दिखाई गई शनि वापसी की आयु मेरी सटीक जन्म तिथि को ध्यान में क्यों नहीं रखती?",
          ja: "ここに表示される土星回帰の年齢は、なぜ正確な生年月日を考慮していないのですか？",
          ko: "여기 표시된 토성 회귀 나이는 왜 정확한 생년월일을 반영하지 않나요?",
        },
        answer: {
          en: "29, 59 and 88 are the commonly cited approximate ages, since Saturn's orbit isn't a round number of years and its apparent speed varies. The precise date a natal Saturn degree is met again requires solving for Saturn's actual position, which is closer to a full transit chart than a single age.",
          hi: "29, 59 और 88 सामान्यतः उद्धृत अनुमानित आयु हैं, क्योंकि शनि की परिक्रमा वर्षों की पूर्ण संख्या नहीं है और इसकी आभासी गति भिन्न होती है।",
          ja: "土星の公転は年数としてきりのよい数字ではなく、見かけの速度も変化するため、29歳・59歳・88歳は一般的に引用される目安の年齢です。出生時の土星度数に正確に再び到達する日付を求めるには、単一の年齢よりも実際の土星位置を解く、完全なトランジットチャートに近い計算が必要です。",
          ko: "토성의 공전은 딱 떨어지는 연수가 아니고 겉보기 속도도 달라지므로, 29세·59세·88세는 일반적으로 인용되는 대략적인 나이입니다. 출생 시 토성 도수에 정확히 다시 도달하는 날짜를 구하려면 단일 나이보다 실제 토성 위치를 계산하는, 완전한 트랜짓 차트에 가까운 계산이 필요합니다.",
        },
      },
      {
        question: {
          en: "How long does Sade Sati last?",
          hi: "साढ़े साती कितने समय तक चलती है?",
          ja: "サデ・サティの期間はどのくらい続きますか？",
          ko: "사데 사티는 얼마나 지속되나요?",
        },
        answer: {
          en: "About seven and a half years in total. Saturn spends roughly two and a half years in each of three signs — the one before your Moon sign, your Moon sign itself, and the one after. Because Saturn sometimes appears to move backwards (retrograde), it can cross a sign boundary and return, so the start and end can shift a little.",
          hi: "कुल मिलाकर लगभग साढ़े सात वर्ष। शनि तीन राशियों — चंद्र राशि से पहले की, स्वयं चंद्र राशि और उसके बाद की — में से प्रत्येक में लगभग ढाई वर्ष रहता है। शनि कभी-कभी वक्री होकर राशि की सीमा पार करके लौट आता है, इसलिए आरंभ और अंत थोड़ा खिसक सकते हैं।",
          ja: "合計でおよそ7年半です。土星は月星座の一つ前、月星座そのもの、一つ後の三つの星座にそれぞれ約2年半ずつとどまります。土星は逆行によって星座の境目を行き来することがあるため、始まりと終わりの時期は多少前後します。",
          ko: "모두 합쳐 약 7년 반입니다. 토성은 달 별자리 바로 앞, 달 별자리 자체, 바로 뒤의 세 별자리에 각각 약 2년 반씩 머뭅니다. 토성은 역행으로 별자리 경계를 오갈 수 있어 시작과 끝 시기는 다소 앞뒤로 달라질 수 있습니다.",
        },
      },
      {
        question: {
          en: "What is a Saturn return?",
          hi: "शनि वापसी क्या है?",
          ja: "サターンリターン（土星回帰）とは何ですか？",
          ko: "새턴 리턴(토성 회귀)이란 무엇인가요?",
        },
        answer: {
          en: "It is the moment Saturn, which takes about 29.5 years to orbit, comes back to the position it held when you were born. In Western astrology the first return, around age 29, is seen as a milestone for taking stock of your choices and standing on your own as an adult. It is best read as a time of review and maturing, not as a crisis.",
          hi: "लगभग 29.5 वर्ष में परिक्रमा पूरी करने वाला शनि जब जन्म के समय वाली स्थिति पर लौटता है, उसे शनि वापसी कहते हैं। पश्चिमी ज्योतिष में लगभग 29 वर्ष की पहली वापसी को अपने निर्णयों की समीक्षा और वयस्क के रूप में आत्मनिर्भर होने का पड़ाव माना जाता है। इसे संकट नहीं, समीक्षा और परिपक्वता का समय समझना बेहतर है।",
          ja: "約29.5年で太陽の周りを一周する土星が、生まれた時と同じ位置に戻ってくることです。西洋占星術では、29歳前後の最初の回帰を、これまでの選択を見直し大人として自立する節目と捉えます。危機ではなく、見直しと成熟の時期として読むのがおすすめです。",
          ko: "약 29.5년에 걸쳐 태양을 한 바퀴 도는 토성이 태어났을 때와 같은 위치로 돌아오는 것입니다. 서양 점성술에서는 29세 전후의 첫 회귀를 지금까지의 선택을 돌아보고 어른으로 자립하는 전환점으로 봅니다. 위기가 아니라 재점검과 성숙의 시기로 읽기를 권합니다.",
        },
      },
      {
        question: {
          en: "Can I use this if I don't know my exact birth time?",
          hi: "क्या सटीक जन्म समय न पता हो तो भी इसका उपयोग कर सकते हैं?",
          ja: "出生時刻がわからなくても使えますか？",
          ko: "출생 시각을 몰라도 사용할 수 있나요?",
        },
        answer: {
          en: "Usually, yes. The Sade Sati check needs only your Moon sign, and the Moon stays in one sign for about two and a half days, so the result often holds whatever the time. If the Moon was near a sign boundary on your birthday, though, the time can change your Moon sign — try the birth-time check to see whether that applies to you.",
          hi: "प्रायः हाँ। साढ़े साती की जाँच के लिए केवल चंद्र राशि चाहिए, और चंद्रमा लगभग ढाई दिन एक राशि में रहता है, इसलिए परिणाम अक्सर समय से नहीं बदलता। पर यदि जन्मदिन पर चंद्रमा राशि की सीमा के पास था, तो समय से चंद्र राशि बदल सकती है — जन्म समय जाँच से देखें कि यह आप पर लागू होता है या नहीं।",
          ja: "多くの場合は使えます。サデ・サティの判定に必要なのは月星座だけで、月は一つの星座に約2日半とどまるため、時刻が多少違っても結果は変わらないことがほとんどです。ただし誕生日に月が星座の境目近くにあった場合は時刻で月星座が変わるので、出生時刻チェックで確認してみてください。",
          ko: "대부분은 사용할 수 있습니다. 사데 사티 판정에 필요한 것은 달 별자리뿐이고, 달은 한 별자리에 약 2일 반 머물기 때문에 시각이 조금 달라도 결과는 거의 바뀌지 않습니다. 다만 생일에 달이 별자리 경계 근처에 있었다면 시각에 따라 달 별자리가 바뀌므로 출생 시각 확인 도구로 확인해 보세요.",
        },
      },
      {
        question: {
          en: "Why is my Moon sign different from Western astrology sites?",
          hi: "मेरी चंद्र राशि पश्चिमी ज्योतिष साइटों से अलग क्यों है?",
          ja: "西洋占星術のサイトと月星座が違うのはなぜですか？",
          ko: "서양 점성술 사이트와 달 별자리가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "This page uses the sidereal zodiac of Indian astrology with the Lahiri ayanamsa, while Western astrology uses the tropical zodiac tied to the seasons. The two currently differ by about 24°, so your Moon sign here is often one sign earlier. The Sade Sati phase is always counted from the sidereal Moon sign.",
          hi: "यह पृष्ठ भारतीय ज्योतिष की निरयन राशि-चक्र (लाहिड़ी अयनांश) का उपयोग करता है, जबकि पश्चिमी ज्योतिष ऋतुओं से जुड़ी सायन राशि-चक्र का। दोनों में अभी लगभग 24° का अंतर है, इसलिए यहाँ चंद्र राशि अक्सर एक राशि पहले आती है। साढ़े साती का चरण हमेशा निरयन चंद्र राशि से गिना जाता है।",
          ja: "当ページはインド占星術の恒星黄道（ラヒリ・アヤナムシャ）を使い、西洋占星術は季節を基準にした回帰黄道を使うためです。両者は現在約24度ずれているので、ここでの月星座は一つ前の星座になることがよくあります。サデ・サティの段階は、恒星黄道の月星座から数えます。",
          ko: "이 페이지는 인도 점성술의 항성 황도(라히리 아야남샤)를 쓰고, 서양 점성술은 계절을 기준으로 한 회귀 황도를 쓰기 때문입니다. 둘은 현재 약 24도 차이가 나므로 여기서의 달 별자리는 한 별자리 앞이 되는 경우가 많습니다. 사데 사티 단계는 항성 황도의 달 별자리로부터 셉니다.",
        },
      },
      {
        question: {
          en: "Should I avoid marriage or a job change during Sade Sati?",
          hi: "क्या साढ़े साती में विवाह या नौकरी बदलने से बचना चाहिए?",
          ja: "サデ・サティ中は結婚や転職を避けたほうがいいですか？",
          ko: "사데 사티 중에는 결혼이나 이직을 피해야 하나요?",
        },
        answer: {
          en: "The period alone is no reason to postpone an important decision. Saturn is associated with responsibility and careful preparation, so it can be a good time to plan realistically and lay solid groundwork. For decisions involving money, law or health, rely on the relevant professionals rather than astrology.",
          hi: "केवल यह काल किसी महत्वपूर्ण निर्णय को टालने का कारण नहीं है। शनि उत्तरदायित्व और सावधान तैयारी से जुड़ा है, इसलिए यह व्यावहारिक योजना और मज़बूत नींव रखने का अच्छा समय हो सकता है। धन, कानून या स्वास्थ्य से जुड़े निर्णयों के लिए ज्योतिष के बजाय संबंधित विशेषज्ञों पर भरोसा करें।",
          ja: "時期だけを理由に大切な決断を先送りする必要はありません。土星は責任と丁寧な準備を象徴するため、無理のない計画を立て、しっかり土台を作るのに向いた時期とも読めます。お金・法律・健康に関わる判断は、占星術ではなくそれぞれの専門家に相談してください。",
          ko: "시기만을 이유로 중요한 결정을 미룰 필요는 없습니다. 토성은 책임과 꼼꼼한 준비를 상징하므로, 무리 없는 계획을 세우고 탄탄한 토대를 만들기에 알맞은 시기로도 읽힙니다. 돈·법률·건강에 관련된 판단은 점성술이 아니라 각 분야의 전문가와 상담하세요.",
        },
      },
      {
        question: {
          en: "What is Dhaiya, and how is it different from Sade Sati?",
          hi: "ढैया क्या है और यह साढ़े साती से कैसे अलग है?",
          ja: "ダイヤとは何ですか？サデ・サティとの違いは？",
          ko: "다이야란 무엇이며 사데 사티와 어떻게 다른가요?",
        },
        answer: {
          en: "Dhaiya is the roughly two-and-a-half-year period when Saturn passes through the 4th or 8th sign from your Moon sign. It is traditionally treated as a lighter Saturn period than the seven-and-a-half-year Sade Sati. The 4th is read as a time to tend home and inner steadiness, the 8th as a time to review how you handle change.",
          hi: "ढैया लगभग ढाई वर्ष का वह काल है जब शनि चंद्र राशि से चौथी या आठवीं राशि से गुज़रता है। परंपरागत रूप से इसे साढ़े सात वर्ष की साढ़े साती से हल्का शनि काल माना जाता है। चौथी को घर और मन की स्थिरता सँभालने, आठवीं को परिवर्तन से निपटने के तरीके की समीक्षा का समय माना जाता है।",
          ja: "ダイヤは、土星が月星座から数えて4番目または8番目の星座を通過する約2年半の期間です。伝統的には、7年半続くサデ・サティより軽めの土星期間とされます。第4は家庭や心の落ち着きを整える時期、第8は変化への向き合い方を見直す時期と読まれます。",
          ko: "다이야는 토성이 달 별자리로부터 4번째 또는 8번째 별자리를 지나는 약 2년 반의 기간입니다. 전통적으로 7년 반 이어지는 사데 사티보다 가벼운 토성 시기로 여겨집니다. 4번째는 가정과 마음의 안정을 가꾸는 시기, 8번째는 변화를 대하는 방식을 돌아보는 시기로 읽힙니다.",
        },
      },
    ],
  },
  {
    // The honest answer to "I don't know my exact birth time" isn't a
    // disclaimer, it's showing whether that uncertainty actually changes
    // anything — for some birth-date/place combinations it doesn't.
    slug: "birth-time-check",
    resultPanel: "birthTimeSensitivity",
    title: {
      en: "Birth time sensitivity checker",
      hi: "जन्म समय संवेदनशीलता जाँचकर्ता",
      ja: "出生時刻チェック｜時刻があいまいでもラグナを確認",
      ko: "출생 시각 확인: 시각이 애매해도 라그나를 점검",
    },
    description: {
      en: "When your birth time is uncertain, compute your chart across a time window and see at which time, if any, your Vedic Lagna (ascendant) moves to another sign. Includes tips for finding a recorded birth time.",
      hi: "जब जन्म समय अनिश्चित हो, तो एक समय सीमा में कुंडली की गणना करें और देखें कि आपका वैदिक लग्न किस समय, यदि कहीं, दूसरी राशि में जाता है। दर्ज जन्म समय खोजने के सुझाव भी शामिल हैं।",
      ja: "出生時刻があいまいなとき、前後の幅でチャートを計算し、インド占星術のラグナ（アセンダント）がどの時刻で別の星座に変わるかを確認できるツールです。母子手帳など記録の探し方も解説。",
      ko: "출생 시각이 애매할 때 앞뒤 범위로 차트를 계산해, 인도 점성술의 라그나(상승궁)가 어느 시각에 다른 별자리로 바뀌는지 확인하는 도구입니다. 모자수첩 등 기록 찾는 법도 안내합니다.",
    },
    useCase: {
      en: "Use this before treating an approximate birth time as exact — a two-hour uncertainty window sometimes changes nothing, and sometimes changes everything.",
      hi: "किसी अनुमानित जन्म समय को सटीक मानने से पहले इसे आज़माएँ — दो घंटे की अनिश्चितता कभी कुछ नहीं बदलती, तो कभी सब कुछ बदल देती है।",
      ja: "概算の出生時刻を正確なものとして扱う前に。2時間の不確かさが何も変えないこともあれば、すべてを変えてしまうこともあります。",
      ko: "대략적인 출생 시각을 정확한 것으로 다루기 전에. 두 시간의 불확실성이 아무것도 바꾸지 않을 때도 있고, 모든 것을 바꿀 때도 있습니다.",
    },
    lead: {
      en: "A birth certificate rounded to the nearest half hour, or a family member's best recollection, is common — and the ascendant changes roughly every two hours, so whether that uncertainty matters depends entirely on how close it sits to a sign boundary. This tool computes seven charts across your stated window (±30 to ±120 minutes) and shows exactly where, if anywhere, the ascendant sign moves. It is a sensitivity check on the time you already have, not rectification that estimates the correct time.",
      hi: "जन्म प्रमाण पत्र में निकटतम आधे घंटे तक पूर्णांकित समय, या परिवार के किसी सदस्य की स्मृति सामान्य है — और लग्न लगभग हर दो घंटे में बदलता है, इसलिए वह अनिश्चितता मायने रखती है या नहीं, यह पूरी तरह इस पर निर्भर है कि वह राशि की सीमा के कितने पास है। यह टूल आपकी बताई सीमा में सात कुंडलियाँ बनाता है और ठीक-ठीक दिखाता है कि लग्न राशि कहाँ, यदि कहीं, बदलती है। यह सही समय का अनुमान लगाने वाला शोधन नहीं, बल्कि संवेदनशीलता जाँच है।",
      ja: "「朝6時ごろと聞いている」「記録が30分単位でしかない」など、出生時刻があいまいな方は少なくありません。ラグナ（アセンダント）はおよそ2時間ごとに次の星座へ移るため、その不確かさが影響するかどうかは、星座の境目にどれだけ近いかで決まります。このツールは、入力した時刻の前後±30〜120分を7つの時点に分けてチャートを計算し、ラグナの星座がどこで（もしあれば）切り替わるかを一覧で示します。正しい時刻を推定するレクティフィケーションではなく、今わかっている時刻で十分かどうかを確かめるための感度チェックです。",
      ko: "출생 증명서가 가장 가까운 30분 단위로 반올림되어 있거나, 가족의 기억에 의존하는 경우는 흔합니다. 상승궁은 대략 두 시간마다 바뀌므로, 그 불확실성이 영향을 미치는지는 별자리 경계에 얼마나 가까운지에 전적으로 달려 있습니다. 이 도구는 지정된 범위(±30~120분) 내에서 일곱 개의 차트를 계산하여 상승궁 별자리가 실제로 어디서(있다면) 움직이는지 정확히 보여줍니다. 정확한 시각을 추정하는 렉티피케이션이 아니라, 지금 알고 있는 시각으로 충분한지 확인하는 민감도 확인입니다.",
    },
    faqs: [
      {
        question: {
          en: "What should I do if the ascendant sign does change within my window?",
          hi: "यदि मेरी सीमा के भीतर लग्न राशि बदलती है तो मुझे क्या करना चाहिए?",
          ja: "範囲内でアセンダントの星座が変わる場合、どうすればよいですか？",
          ko: "범위 내에서 상승궁 별자리가 바뀌면 어떻게 해야 하나요?",
        },
        answer: {
          en: "That's a sign your uncertainty genuinely matters, and narrowing the birth time further — a hospital record, a birth certificate, a family member who remembers more precisely — is worth doing before treating any single chart's house placements as settled. A live reading can also work through birth-time rectification using life events.",
          hi: "यह इस बात का संकेत है कि आपकी अनिश्चितता वास्तव में मायने रखती है, और किसी भी एक कुंडली की भाव स्थिति को निश्चित मानने से पहले जन्म समय को और सीमित करना उचित है।",
          ja: "それは、あなたの不確かさが実際に重要であることを示すサインです。どれか一つのチャートのハウス配置を確定したものとして扱う前に、病院の記録や出生証明書、より正確に覚えている家族など、出生時刻をさらに絞り込む価値があります。ライブ鑑定では、人生の出来事を用いた出生時刻の推定（レクティフィケーション）も行えます。",
          ko: "이는 당신의 불확실성이 실제로 중요하다는 신호이며, 병원 기록이나 출생 증명서, 더 정확히 기억하는 가족 등으로 출생 시각을 더 좁히는 것이 어느 한 차트의 하우스 배치를 확정된 것으로 다루기 전에 해볼 가치가 있습니다. 라이브 감정에서는 인생 사건을 이용한 출생 시각 보정(렉티피케이션)도 다룹니다.",
        },
      },
      {
        question: {
          en: "Can this tool tell me my correct birth time?",
          hi: "क्या यह टूल मेरा सही जन्म समय बता सकता है?",
          ja: "このツールで正しい出生時刻がわかりますか？",
          ko: "이 도구로 정확한 출생 시각을 알 수 있나요?",
        },
        answer: {
          en: "No. It does not estimate the time from life events (rectification). It only shows whether your Lagna sign changes within the window you choose and roughly where the boundary lies, so you can judge whether the time you have is precise enough.",
          hi: "नहीं। यह जीवन की घटनाओं से समय का अनुमान (शोधन) नहीं लगाता। यह केवल दिखाता है कि आपकी चुनी सीमा में लग्न राशि बदलती है या नहीं और सीमा-रेखा लगभग कहाँ है, ताकि आप तय कर सकें कि आपका समय पर्याप्त सटीक है या नहीं।",
          ja: "いいえ。人生の出来事から時刻を推定するレクティフィケーションは行いません。選んだ幅の中でラグナの星座が変わるかどうかと、境目がおおよそどこにあるかを示すことで、手元の時刻で十分かどうかを判断する材料を提供します。",
          ko: "아니요. 인생의 사건으로 시각을 추정하는 렉티피케이션은 하지 않습니다. 고른 범위 안에서 라그나 별자리가 바뀌는지와 경계가 대략 어디인지를 보여 주어, 가지고 있는 시각으로 충분한지 판단할 재료를 제공합니다.",
        },
      },
      {
        question: {
          en: "Where can I find my birth time in Japan?",
          hi: "जापान में अपना जन्म समय कहाँ खोजें?",
          ja: "自分の出生時刻はどこで調べられますか？",
          ko: "일본에서 출생 시각은 어디서 확인할 수 있나요?",
        },
        answer: {
          en: "Start with your Maternal and Child Health Handbook (boshi techō), where the delivery section usually records the time to the minute. The umbilical-cord keepsake box, the birth certificate attached to the birth notification, and the hospital's records are other places to look. The family register (koseki) does not show the time.",
          hi: "सबसे पहले मातृ एवं शिशु स्वास्थ्य पुस्तिका (बोशी तेचो) देखें, जिसके प्रसव वाले भाग में अक्सर मिनट तक समय दर्ज होता है। नाल की डिब्बी, जन्म सूचना से जुड़ा प्रमाण पत्र और अस्पताल के रिकॉर्ड भी देखे जा सकते हैं। पारिवारिक रजिस्टर (कोसेकी) में समय नहीं होता।",
          ja: "まずは母子健康手帳（母子手帳）を確認してください。出産の状態を記録する欄に、時・分まで書かれていることが多いです。ほかに、へその緒の箱、出生届に付いている出生証明書、出産した病院の記録も手がかりになります。戸籍謄本には時刻は載っていません。",
          ko: "먼저 모자건강수첩(모자수첩)을 확인하세요. 출산 상황을 기록하는 칸에 시·분까지 적혀 있는 경우가 많습니다. 그 밖에 탯줄 상자, 출생신고서에 딸린 출생증명서, 출산한 병원의 기록도 단서가 됩니다. 호적등본에는 시각이 나오지 않습니다.",
        },
      },
      {
        question: {
          en: "Which window should I choose: ±30, ±60 or ±120 minutes?",
          hi: "कौन-सी सीमा चुनूँ: ±30, ±60 या ±120 मिनट?",
          ja: "±30分・±60分・±120分のどれを選べばよいですか？",
          ko: "±30분, ±60분, ±120분 중 무엇을 골라야 하나요?",
        },
        answer: {
          en: "Use ±30 minutes if a record gives the exact minute, ±60 for an \"around such-and-such o'clock\" memory, and ±120 if you only know the part of the day. If you are unsure, start wide; if nothing changes even at ±120, the uncertainty does not affect your Lagna sign.",
          hi: "यदि रिकॉर्ड में मिनट तक समय है तो ±30 मिनट, \"लगभग इतने बजे\" जैसी याद हो तो ±60, और केवल दिन का हिस्सा पता हो तो ±120 चुनें। संदेह हो तो चौड़ी सीमा से शुरू करें; ±120 पर भी कुछ न बदले तो अनिश्चितता आपकी लग्न राशि को प्रभावित नहीं करती।",
          ja: "記録に分まで残っているなら±30分、「何時ごろ」という記憶なら±60分、「午前中」程度しかわからないなら±120分が目安です。迷ったら広めの幅から試し、±120分でも変化がなければ、時刻の不確かさはラグナの星座に影響しないと考えられます。",
          ko: "기록에 분까지 남아 있다면 ±30분, '몇 시쯤'이라는 기억이라면 ±60분, '오전 중' 정도만 안다면 ±120분이 기준입니다. 망설여지면 넓은 범위부터 시도하고, ±120분에서도 변화가 없다면 시각의 불확실성은 라그나 별자리에 영향을 주지 않는다고 볼 수 있습니다.",
        },
      },
      {
        question: {
          en: "Does this also check the Moon's nakshatra and the dasha?",
          hi: "क्या यह चंद्र नक्षत्र और दशा की भी जाँच करता है?",
          ja: "月のナクシャトラやダシャーも確認できますか？",
          ko: "달의 낙샤트라와 다샤도 확인할 수 있나요?",
        },
        answer: {
          en: "No, this tool compares only the ascendant sign. The Moon takes about a day to cross one nakshatra, so it changes only when the Moon sits near a boundary, but dasha dates can shift by months with a one-hour error. To check, enter the earliest and latest times of your window into the nakshatra finder and dasha calculator.",
          hi: "नहीं, यह टूल केवल लग्न राशि की तुलना करता है। चंद्रमा को एक नक्षत्र पार करने में लगभग एक दिन लगता है, इसलिए नक्षत्र तभी बदलता है जब चंद्रमा सीमा के पास हो, पर एक घंटे की भूल से दशा की तिथियाँ कुछ महीने खिसक सकती हैं। जाँचने के लिए अपनी सीमा का पहला और आखिरी समय नक्षत्र खोजक और दशा कैलकुलेटर में दर्ज करें।",
          ja: "このツールが比較するのはラグナの星座だけです。月はひとつのナクシャトラを約1日かけて通過するため、変わるのは境目近くにいる場合に限られますが、ダシャーの切り替わり時期は1時間のずれで数か月前後することがあります。確かめたい場合は、範囲の最初と最後の時刻をナクシャトラ検索とダシャー計算機に入力して比べてください。",
          ko: "이 도구가 비교하는 것은 라그나 별자리뿐입니다. 달은 낙샤트라 하나를 약 하루에 걸쳐 지나므로 경계 근처에 있을 때만 바뀌지만, 다샤 전환 시기는 1시간 어긋남으로 몇 개월 앞뒤로 움직일 수 있습니다. 확인하려면 범위의 처음과 마지막 시각을 낙샤트라 찾기와 다샤 계산기에 입력해 비교하세요.",
        },
      },
      {
        question: {
          en: "Why is my ascendant different from a Western astrology site?",
          hi: "मेरा लग्न पश्चिमी ज्योतिष साइट से अलग क्यों है?",
          ja: "西洋占星術のサイトとアセンダントの星座が違うのはなぜですか？",
          ko: "서양 점성술 사이트와 상승궁 별자리가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "This site uses the sidereal zodiac with the Lahiri ayanamsa, whose reference point is currently about 24° from the tropical zodiac used in Western astrology. The ascendant here is therefore often one sign earlier. Neither result is a mistake; they measure from different starting points.",
          hi: "यह साइट लाहिड़ी अयनांश वाला निरयन राशिचक्र उपयोग करती है, जिसका संदर्भ बिंदु इस समय पश्चिमी ज्योतिष के सायन राशिचक्र से लगभग 24° अलग है। इसलिए यहाँ का लग्न अक्सर एक राशि पहले होता है। कोई भी परिणाम गलत नहीं है; दोनों अलग आरंभ बिंदुओं से मापते हैं।",
          ja: "このサイトはラヒリ・アヤナムシャを用いる恒星黄道で計算しており、西洋占星術の回帰黄道とは基準点が現在約24度ずれています。そのため、ここでのアセンダントは西洋式よりひとつ前の星座になることがよくあります。どちらかが誤りなのではなく、測る起点が違うためです。",
          ko: "이 사이트는 라히리 아야남샤를 쓰는 항성 황도로 계산하며, 서양 점성술의 회귀 황도와 기준점이 현재 약 24도 차이 납니다. 그래서 여기의 상승궁은 서양식보다 한 별자리 앞이 되는 경우가 많습니다. 어느 쪽이 틀린 것이 아니라 측정의 기점이 다를 뿐입니다.",
        },
      },
      {
        question: {
          en: "I was born abroad or close to midnight. What should I watch out for?",
          hi: "मेरा जन्म विदेश में या आधी रात के आसपास हुआ। किन बातों का ध्यान रखूँ?",
          ja: "海外生まれや深夜0時前後の生まれの場合、注意点はありますか？",
          ko: "해외에서 태어났거나 자정 무렵에 태어났다면 주의할 점이 있나요?",
        },
        answer: {
          en: "Enter the local clock time at the place of birth, without converting it to Japan time. If your window crosses midnight, the times past midnight are calculated for the next day (and before midnight for the previous day) automatically, and marked in the table.",
          hi: "जन्म स्थान की स्थानीय घड़ी का समय दर्ज करें, उसे जापान के समय में न बदलें। यदि आपकी सीमा आधी रात पार करती है, तो आधी रात के बाद के समय स्वतः अगली तिथि से गणना होते हैं और तालिका में चिह्नित होते हैं।",
          ja: "時刻は日本時間に換算せず、出生地の現地時刻をそのまま入力してください。幅が午前0時をまたぐ場合は、日付をまたいだ側の時刻を自動的に翌日（または前日）の日付で計算し、表にもその旨を表示します。",
          ko: "시각은 일본 시간으로 환산하지 말고 출생지의 현지 시각을 그대로 입력하세요. 범위가 자정을 넘으면 자정 너머의 시각은 자동으로 다음 날(또는 전날) 날짜로 계산되며, 표에도 표시됩니다.",
        },
      },
    ],
  },
  {
    // Tajik-system annual chart — a genuine second computation (a
    // solar-return ephemeris solve), not a rehash of the birth chart, and
    // the natural yearly-return reason to come back once a year.
    slug: "annual-forecast",
    resultPanel: "annualForecast",
    title: {
      en: "Indian astrology annual chart: Varshaphala calculator",
      hi: "वार्षिक कुंडली: वर्षफल कैलकुलेटर",
      ja: "インド占星術の年運チャート｜ヴァルシャファラ計算",
      ko: "인도 점성술 연간 차트: 바르샤팔라 계산",
    },
    description: {
      en: "Calculates the moment around your birthday when the Sun returns to its birth position and shows that year's ascendant and planets. Sidereal (Lahiri), free, read with your birth chart to reflect on and plan the year.",
      hi: "जन्मदिन के आसपास सूर्य के जन्म स्थिति पर लौटने का क्षण निकालकर उस वर्ष का लग्न और ग्रह स्थिति दिखाता है। लाहिड़ी निरयण गणना, निःशुल्क — जन्म कुंडली के साथ वर्ष पर विचार और योजना के लिए।",
      ja: "誕生日前後に太陽が出生時の位置へ戻る瞬間を計算し、その年のラグナと惑星配置を表示します。ラヒリ方式のサイデリアル計算で、出生図と合わせて一年のテーマを振り返り、計画に役立てられる無料ツールです。",
      ko: "생일 즈음 태양이 출생 위치로 돌아오는 순간을 계산해 그해의 상승궁과 행성 배치를 보여 줍니다. 라히리 방식 사이더리얼 계산의 무료 도구로, 출생 차트와 함께 한 해의 주제를 돌아보고 계획하는 데 활용하세요.",
    },
    useCase: {
      en: "Run this once a year, around your birthday, for a fresh read on the twelve months ahead rather than relying on the natal chart alone.",
      hi: "अपने जन्मदिन के आसपास वर्ष में एक बार इसे आज़माएँ — केवल जन्म कुंडली पर निर्भर रहने के बजाय आगामी बारह महीनों की एक ताज़ा दृष्टि के लिए।",
      ja: "誕生日の頃、年に一度お試しください。出生図だけに頼らず、これからの12か月を新たな視点で見ることができます。",
      ko: "생일 즈음에 매년 한 번씩 사용해 보세요. 출생 차트에만 의존하지 않고 앞으로의 12개월을 새롭게 살펴볼 수 있습니다.",
    },
    lead: {
      en: "Varshaphala is the Tajik system's annual chart, cast for the precise moment the transiting Sun returns to the exact degree it held at birth. It doesn't replace the birth chart — it's read alongside it, as a separate lens on the year ahead. This tool shows the return date and time for the year you choose, the ascendant at that moment, and the house, sign and nakshatra of each of the nine grahas. It suits anyone who wants to sort out the year's themes before a birthday, or who is just starting to learn Jyotish.",
      hi: "वर्षफल ताजिक पद्धति की वार्षिक कुंडली है, जो उस ठीक क्षण के लिए बनाई जाती है जब गोचर सूर्य जन्म के समय के अंश पर लौटता है। यह जन्म कुंडली की जगह नहीं लेती — इसे उसके साथ, आगामी वर्ष पर एक अलग दृष्टिकोण के रूप में पढ़ा जाता है। यह उपकरण चुने गए वर्ष की वापसी की तिथि और समय, उस क्षण का लग्न, और नौ ग्रहों के भाव, राशि और नक्षत्र दिखाता है। यह जन्मदिन से पहले वर्ष के विषयों को व्यवस्थित करना चाहने वालों और ज्योतिष सीखना शुरू करने वालों के लिए उपयुक्त है।",
      ja: "ヴァルシャファラは、タージク方式の年間チャートで、トランジットの太陽が出生時と全く同じ度数に戻る正確な瞬間のために作成されます。出生図に取って代わるものではなく、これからの一年を見るもう一つの視点として、出生図と合わせて読みます。このツールでは、選んだ年の回帰の日時、その瞬間のラグナ、九つの惑星のハウス・星座・ナクシャトラを表示します。誕生日を前に一年のテーマを整理したい方や、インド占星術を学び始めた方に向いています。",
      ko: "바르샤팔라는 타지크 체계의 연간 차트로, 트랜짓 태양이 출생 시와 정확히 같은 도수로 돌아오는 순간을 위해 작성됩니다. 출생 차트를 대체하지 않으며, 다가오는 한 해를 보는 또 다른 관점으로 출생 차트와 함께 읽습니다. 이 도구는 선택한 연도의 회귀 날짜와 시각, 그 순간의 상승궁, 아홉 행성의 하우스·별자리·낙샤트라를 보여 줍니다. 생일을 앞두고 한 해의 주제를 정리하고 싶은 분이나 인도 점성술을 막 배우기 시작한 분께 알맞습니다.",
    },
    faqs: [
      {
        question: {
          en: "How is Varshaphala different from the birth chart itself?",
          hi: "वर्षफल जन्म कुंडली से किस प्रकार भिन्न है?",
          ja: "ヴァルシャファラは出生図とどう違いますか？",
          ko: "바르샤팔라는 출생 차트와 어떻게 다른가요?",
        },
        answer: {
          en: "The birth chart is cast once, for the moment of birth, and describes the whole life. Varshaphala is cast fresh each year, for the moment the Sun returns to its natal degree, and describes that specific year — its own ascendant and planetary placements, read as a chapter within the larger chart rather than apart from it.",
          hi: "जन्म कुंडली केवल एक बार, जन्म के क्षण के लिए बनती है और पूरे जीवन का वर्णन करती है। वर्षफल हर वर्ष नए सिरे से, सूर्य के जन्म अंश पर लौटने के क्षण के लिए बनता है, और उस विशिष्ट वर्ष का वर्णन करता है — अपना लग्न, अपनी ग्रह स्थिति, जिसे बड़ी कुंडली से अलग नहीं बल्कि उसके भीतर एक अध्याय के रूप में पढ़ा जाता है।",
          ja: "出生図は誕生の瞬間に一度だけ作成され、生涯全体を描きます。ヴァルシャファラは毎年新たに、太陽が出生時の度数に戻る瞬間のために作成され、その特定の一年を描きます——独自のアセンダントと惑星配置を持ち、大きな出生図から切り離してではなく、その中の一章として読まれます。",
          ko: "출생 차트는 태어난 순간에 단 한 번 작성되며 생애 전체를 설명합니다. 바르샤팔라는 매년 새롭게, 태양이 출생 시 도수로 돌아오는 순간을 위해 작성되며, 그 특정한 해를 설명합니다 — 고유한 상승궁과 행성 배치를 가지며, 큰 출생 차트와 별개가 아니라 그 안의 한 장(章)으로 읽힙니다.",
        },
      },
      {
        question: {
          en: "Why does the exact moment of the return matter?",
          hi: "वापसी के ठीक क्षण का महत्व क्यों है?",
          ja: "回帰の正確な瞬間が重要なのはなぜですか？",
          ko: "회귀의 정확한 순간이 왜 중요한가요?",
        },
        answer: {
          en: "The ascendant changes roughly every two hours, so the annual chart's houses depend on solving for the precise minute the Sun crosses its natal degree, not an approximate date. This tool searches for that exact moment using the same Swiss Ephemeris calculation behind the birth chart, rather than approximating from the calendar date alone.",
          hi: "लग्न लगभग हर दो घंटे में बदलता है, इसलिए वार्षिक कुंडली के भाव सूर्य के जन्म अंश को पार करने के ठीक मिनट पर निर्भर करते हैं, केवल अनुमानित तिथि पर नहीं। यह उपकरण जन्म कुंडली के पीछे उसी स्विस एफिमेरिस गणना का उपयोग करके उस ठीक क्षण को खोजता है।",
          ja: "アセンダントはおよそ2時間ごとに変わるため、年間チャートのハウスは、太陽が出生時の度数を通過する正確な分に依存し、おおよその日付だけでは決まりません。このツールは、出生図の背後にあるのと同じスイス天体暦計算を用いて、その正確な瞬間を探索します。",
          ko: "상승궁은 대략 두 시간마다 바뀌므로, 연간 차트의 하우스는 태양이 출생 시 도수를 통과하는 정확한 분에 좌우되며 대략적인 날짜만으로는 정해지지 않습니다. 이 도구는 출생 차트의 배경이 되는 것과 동일한 스위스 에페메리스 계산을 사용하여 그 정확한 순간을 찾습니다.",
        },
      },
      {
        question: {
          en: "Why doesn't the return fall exactly on my birthday?",
          hi: "वापसी ठीक मेरे जन्मदिन पर क्यों नहीं होती?",
          ja: "回帰の日が誕生日と一致しないのはなぜですか？",
          ko: "회귀일이 생일과 정확히 일치하지 않는 이유는 무엇인가요?",
        },
        answer: {
          en: "A calendar year and the time the Sun takes to come back to the same sidereal degree do not match exactly, and leap years shift the calendar too. So the return can fall about a day before or after your birthday. The tool searches the days around your birthday for the exact moment, so a slight gap is normal.",
          hi: "कैलेंडर वर्ष और सूर्य के उसी निरयण अंश पर लौटने में लगने वाला समय बिल्कुल बराबर नहीं होते, और लीप वर्ष भी कैलेंडर को खिसकाते हैं। इसलिए वापसी जन्मदिन से लगभग एक दिन पहले या बाद हो सकती है। उपकरण जन्मदिन के आसपास के दिनों में ठीक क्षण खोजता है, इसलिए थोड़ा अंतर सामान्य है।",
          ja: "暦の一年と、太陽が恒星黄道上の同じ度数に戻るまでの時間はぴったり同じではなく、うるう年による暦のずれもあります。そのため、回帰は誕生日の前後一日ほどにずれることがあります。このツールは誕生日の前後の期間から正確な瞬間を探しているので、多少のずれは正常です。",
          ko: "달력의 1년과 태양이 항성 황도상의 같은 도수로 돌아오는 데 걸리는 시간은 정확히 같지 않고, 윤년에 의한 달력의 어긋남도 있습니다. 그래서 회귀가 생일 전후 하루 정도 어긋날 수 있습니다. 이 도구는 생일 전후 기간에서 정확한 순간을 찾으므로 약간의 차이는 정상입니다.",
        },
      },
      {
        question: {
          en: "Is this the same as a Western solar return?",
          hi: "क्या यह पश्चिमी सोलर रिटर्न जैसा ही है?",
          ja: "西洋占星術のソーラーリターンと同じですか？",
          ko: "서양 점성술의 솔라 리턴과 같은가요?",
        },
        answer: {
          en: "The idea is the same — a chart for the moment the Sun returns to its birth position — but the zodiac differs. Western solar returns use the tropical zodiac, while this tool uses the sidereal zodiac with the Lahiri ayanamsa. The two return moments drift apart by roughly 20 minutes per year of age, so the ascendant can differ between them.",
          hi: "विचार वही है — सूर्य के जन्म स्थिति पर लौटने के क्षण की कुंडली — पर राशिचक्र अलग है। पश्चिमी सोलर रिटर्न सायन राशिचक्र का उपयोग करता है, जबकि यह उपकरण लाहिड़ी अयनांश के साथ निरयण राशिचक्र का। दोनों क्षण उम्र के प्रति वर्ष लगभग 20 मिनट अलग होते जाते हैं, इसलिए लग्न भिन्न हो सकता है।",
          ja: "「太陽が出生時の位置に戻る瞬間のチャート」という考え方は同じですが、使う黄道が異なります。西洋式はトロピカル黄道、このツールはラヒリ・アヤナムシャによるサイデリアル黄道で計算します。二つの回帰の瞬間は年齢一年につき約20分ずつ離れていくため、アセンダントが異なることがあります。",
          ko: "'태양이 출생 위치로 돌아오는 순간의 차트'라는 개념은 같지만 사용하는 황도가 다릅니다. 서양식은 트로피컬 황도, 이 도구는 라히리 아야남샤를 적용한 사이더리얼 황도로 계산합니다. 두 회귀 순간은 나이 1년당 약 20분씩 벌어지므로 상승궁이 다를 수 있습니다.",
        },
      },
      {
        question: {
          en: "Can I use it if I don't know my exact birth time?",
          hi: "क्या सटीक जन्म समय न पता हो तो भी उपयोग कर सकते हैं?",
          ja: "出生時刻が正確にわからなくても使えますか？",
          ko: "출생 시각을 정확히 몰라도 사용할 수 있나요?",
        },
        answer: {
          en: "Yes. The return date and the signs of the planets barely change. However, the return time shifts by about as much as your birth-time error, so the ascendant and houses may change. If your time is uncertain, focus on which signs and nakshatras the planets are in.",
          hi: "हाँ। वापसी की तिथि और ग्रहों की राशियाँ लगभग नहीं बदलतीं। पर वापसी का समय जन्म समय की त्रुटि जितना ही खिसकता है, इसलिए लग्न और भाव बदल सकते हैं। समय अनिश्चित हो तो ग्रहों की राशि और नक्षत्र पर ध्यान दें।",
          ja: "使えます。回帰の日付や惑星の星座はほとんど変わりません。ただし、回帰の時刻は出生時刻の誤差とほぼ同じだけずれるため、アセンダントやハウスは変わる可能性があります。時刻が不確かな場合は、惑星がどの星座・ナクシャトラにあるかを中心にご覧ください。",
          ko: "사용할 수 있습니다. 회귀 날짜와 행성의 별자리는 거의 바뀌지 않습니다. 다만 회귀 시각은 출생 시각의 오차만큼 어긋나므로 상승궁과 하우스는 달라질 수 있습니다. 시각이 불확실하다면 행성이 어느 별자리와 낙샤트라에 있는지를 중심으로 보세요.",
        },
      },
      {
        question: {
          en: "Which location is the annual chart cast for?",
          hi: "वार्षिक कुंडली किस स्थान के लिए बनती है?",
          ja: "年運チャートはどの場所で計算されますか？",
          ko: "연간 차트는 어느 장소를 기준으로 계산되나요?",
        },
        answer: {
          en: "This tool casts the annual chart for your place of birth, and the return time is shown in that place's local time zone. Some practitioners cast it for where you live at the time of the return instead, which gives a different ascendant. Keep in mind that the method varies by tradition.",
          hi: "यह उपकरण वार्षिक कुंडली आपके जन्म स्थान के लिए बनाता है, और वापसी का समय उसी स्थान के स्थानीय समय क्षेत्र में दिखाता है। कुछ ज्योतिषी इसे वापसी के समय आपके निवास स्थान के लिए बनाते हैं, जिससे लग्न भिन्न होता है। ध्यान रखें कि यह परंपरा के अनुसार बदलता है।",
          ja: "このツールは出生地を基準に年運チャートを作成し、回帰の時刻も出生地のタイムゾーンで表示します。流派によっては、回帰の時点で住んでいる場所を基準にする考え方もあり、その場合はアセンダントが変わります。方法には流派による違いがあることを踏まえてご覧ください。",
          ko: "이 도구는 출생지를 기준으로 연간 차트를 작성하며, 회귀 시각도 출생지 시간대로 표시합니다. 학파에 따라서는 회귀 시점에 사는 곳을 기준으로 삼기도 하며, 그 경우 상승궁이 달라집니다. 방법에는 학파마다 차이가 있다는 점을 염두에 두세요.",
        },
      },
      {
        question: {
          en: "Does it show the Muntha or Mudda dasha?",
          hi: "क्या यह मुंथा या मुद्दा दशा दिखाता है?",
          ja: "ムンタやムッダ・ダシャーは表示されますか？",
          ko: "문타나 무다 다샤도 표시되나요?",
        },
        answer: {
          en: "Not at present. This tool focuses on the return moment, the ascendant and the planetary positions (D1) of the annual chart. For the timing of life as a whole, please use the Vimshottari dasha calculator, which works from your birth chart.",
          hi: "फिलहाल नहीं। यह उपकरण वापसी के क्षण, लग्न और वार्षिक कुंडली की ग्रह स्थिति (D1) पर केंद्रित है। पूरे जीवन के काल-क्रम के लिए जन्म कुंडली पर आधारित विंशोत्तरी दशा कैलकुलेटर का उपयोग करें।",
          ja: "現在は表示していません。このツールは、回帰の瞬間・アセンダント・年運チャートの惑星配置（D1）の計算に絞っています。人生全体の時期の流れを知りたい場合は、出生図にもとづくヴィムショッタリ・ダシャー計算をご利用ください。",
          ko: "현재는 표시하지 않습니다. 이 도구는 회귀 순간, 상승궁, 연간 차트의 행성 배치(D1) 계산에 집중합니다. 인생 전체의 시기 흐름을 알고 싶다면 출생 차트를 바탕으로 한 빔쇼타리 다샤 계산기를 이용하세요.",
        },
      },
      {
        question: {
          en: "Will my year turn out as the chart says?",
          hi: "क्या मेरा वर्ष कुंडली के अनुसार ही बीतेगा?",
          ja: "年運チャートのとおりに一年が進むのですか？",
          ko: "연간 차트대로 한 해가 흘러가나요?",
        },
        answer: {
          en: "No. The annual chart shows themes and tendencies, not fixed events. It is best used as a prompt for reflection and planning — for example, noting which areas of life to give attention to this year — while your own choices and actions shape what actually happens.",
          hi: "नहीं। वार्षिक कुंडली विषय और प्रवृत्तियाँ दिखाती है, निश्चित घटनाएँ नहीं। इसे विचार और योजना के संकेत के रूप में उपयोग करना सबसे अच्छा है — जैसे इस वर्ष जीवन के किन क्षेत्रों पर ध्यान देना है — जबकि वास्तव में क्या होता है, वह आपके निर्णयों और कर्मों से बनता है।",
          ja: "いいえ。年運チャートが示すのは、確定した出来事ではなく、テーマや傾向です。「今年はどの生活領域に意識を向けるか」といった振り返りや計画のきっかけとして使うのがおすすめです。実際の一年をかたちづくるのは、ご自身の選択と行動です。",
          ko: "아닙니다. 연간 차트가 보여 주는 것은 확정된 사건이 아니라 주제와 경향입니다. '올해는 어떤 생활 영역에 관심을 둘까'처럼 돌아보고 계획하는 계기로 쓰는 것을 권합니다. 실제 한 해를 만들어 가는 것은 자신의 선택과 행동입니다.",
        },
      },
    ],
  },
  {
    // Native calendar-almanac search intent across all four markets — the
    // day-selection question that precedes a move, an opening, or a
    // ceremony. Computed from real angular positions, not a printed table.
    slug: "panchang",
    resultPanel: "panchang",
    title: {
      en: "Panchang: tithi, nakshatra, yoga & karana for any date",
      hi: "पंचांग: किसी भी तिथि के लिए तिथि, नक्षत्र, योग और करण",
      ja: "パンチャーンガ計算｜インド暦のティティ・ナクシャトラ",
      ko: "판창가: 원하는 날짜의 티티·낙샤트라·요가·카라나",
    },
    description: {
      en: "Pick a date to calculate the Indian panchang — tithi, nakshatra, yoga, karana and paksha — for sunrise at your saved location, from the actual positions of the Sun and Moon.",
      hi: "तारीख चुनें और अपने सहेजे गए स्थान के सूर्योदय के लिए भारतीय पंचांग — तिथि, नक्षत्र, योग, करण और पक्ष — सूर्य और चंद्रमा की वास्तविक स्थिति से निकालें।",
      ja: "日付を選ぶだけで、インドの暦パンチャーンガ（ティティ・ナクシャトラ・ヨーガ・カラナ・パクシャ）を、保存した場所の日の出時刻を基準に計算。月と太陽の実際の位置から求めます。",
      ko: "날짜를 고르면 저장된 장소의 일출을 기준으로 인도 달력 판창가(티티·낙샤트라·요가·카라나·팍샤)를 태양과 달의 실제 위치로 계산합니다.",
    },
    useCase: {
      en: "Check before scheduling something that traditionally wants a favourable day — a move, an opening, a ceremony — rather than guessing from a printed calendar alone.",
      hi: "किसी ऐसे कार्य को निर्धारित करने से पहले जाँचें जिसके लिए परंपरागत रूप से शुभ दिन चाहिए — जैसे स्थानांतरण, उद्घाटन, या समारोह — केवल छपे कैलेंडर से अनुमान लगाने के बजाय।",
      ja: "引っ越し、開業、儀式など、伝統的に吉日を選ぶべき予定を立てる前に。印刷されたカレンダーだけで推測するのではなく。",
      ko: "이사, 개업, 의식처럼 전통적으로 길일을 고려하는 일정을 잡기 전에 확인하세요. 인쇄된 달력만으로 추측하는 대신에요.",
    },
    lead: {
      en: "Panchang means ‘five limbs’: the classical elements that describe a day in the Indian calendar — tithi (lunar day), vara (weekday), nakshatra, yoga and karana. Choose a date and this tool calculates the tithi with its paksha, the nakshatra, yoga and karana prevailing at sunrise at your saved location, from the actual positions of the Sun and Moon rather than a printed table. It is for anyone curious about Indian calendrical tradition or how dates have traditionally been chosen there.",
      hi: "पंचांग का अर्थ है 'पाँच अंग': भारतीय पंचांग में दिन का वर्णन करने वाले शास्त्रीय तत्व — तिथि, वार, नक्षत्र, योग और करण। तारीख चुनें, और यह टूल आपके सहेजे गए स्थान पर सूर्योदय के समय प्रचलित तिथि (पक्ष सहित), नक्षत्र, योग और करण की गणना सूर्य और चंद्रमा की वास्तविक स्थिति से करता है, किसी छपी तालिका से नहीं। यह भारतीय कालगणना की परंपरा और मुहूर्त में रुचि रखने वाले सभी के लिए है।",
      ja: "パンチャーンガとは「五つの肢体」を意味し、インドの暦で一日を表す古典的な要素——ティティ（太陰日）、ヴァーラ（曜日）、ナクシャトラ、ヨーガ、カラナ——を指します。このツールでは日付を選ぶだけで、保存した場所の日の出の時点におけるティティ（パクシャ付き）、ナクシャトラ、ヨーガ、カラナを、印刷された表ではなく月と太陽の実際の位置から計算します。インドの暦の伝統や、日取りの考え方に興味のある方におすすめです。",
      ko: "판창가는 '다섯 지체'를 뜻하며, 인도 달력에서 하루를 나타내는 고전적인 요소인 티티(태음일), 바라(요일), 낙샤트라, 요가, 카라나를 가리킵니다. 이 도구는 날짜만 고르면 저장된 장소의 일출 시점의 티티(팍샤 포함), 낙샤트라, 요가, 카라나를 인쇄된 표가 아닌 달과 태양의 실제 위치로 계산합니다. 인도 달력의 전통이나 날짜 선택의 사고방식에 관심 있는 분께 추천합니다.",
    },
    faqs: [
      {
        question: {
          en: "What is a tithi?",
          hi: "तिथि क्या है?",
          ja: "ティティとは何ですか？",
          ko: "티티란 무엇인가요?",
        },
        answer: {
          en: "A tithi is a lunar day — the time it takes the Moon to gain twelve degrees on the Sun, close to but not exactly one calendar day. A lunar month holds thirty tithis: fifteen in the waxing Shukla Paksha, fifteen in the waning Krishna Paksha, each with its own classical character and use.",
          hi: "तिथि एक चंद्र दिवस है — वह समय जो चंद्रमा को सूर्य पर बारह अंश की बढ़त बनाने में लगता है, जो लगभग किंतु ठीक एक कैलेंडर दिन के बराबर नहीं होता। एक चंद्र मास में तीस तिथियाँ होती हैं: शुक्ल पक्ष में पंद्रह और कृष्ण पक्ष में पंद्रह, प्रत्येक का अपना शास्त्रीय स्वभाव और उपयोग है।",
          ja: "ティティとは太陰日のことで、月が太陽に対して十二度進むのにかかる時間を指し、暦の一日にほぼ近いものの正確には一致しません。太陰月には三十のティティがあり、上弦のシュクラ・パクシャに十五、下弦のクリシュナ・パクシャに十五あります。それぞれに固有の古典的性質と用途があります。",
          ko: "티티는 태음일로, 달이 태양보다 12도 앞서 나가는 데 걸리는 시간을 말하며 달력의 하루와 거의 비슷하지만 정확히 일치하지는 않습니다. 태음월에는 서른 개의 티티가 있으며, 상현의 슈클라 팍샤에 열다섯, 하현의 크리슈나 팍샤에 열다섯 개가 있고, 각각 고유한 고전적 성격과 용도를 지닙니다.",
        },
      },
      {
        question: {
          en: "Why doesn't this show Rokuyō (六曜)?",
          hi: "इसमें रोकुयो (六曜) क्यों नहीं दिखाया गया है?",
          ja: "六曜（ろくよう）が表示されないのはなぜですか？",
          ko: "왜 로쿠요(六曜)는 표시되지 않나요?",
        },
        answer: {
          en: "Rokuyō is a Japanese lunisolar calendar cycle with its own counting rules, not derived from the Sun and Moon's angular positions the way tithi and nakshatra are. Showing it correctly needs a lunisolar calendar implementation rather than the ephemeris-based angular math this tool is built on — so it's left out here rather than approximated and risk being wrong.",
          hi: "रोकुयो एक जापानी चंद्र-सौर कैलेंडर चक्र है जिसके अपने गणना नियम हैं, यह सूर्य और चंद्रमा की कोणीय स्थितियों से व्युत्पन्न नहीं है जैसे तिथि और नक्षत्र होते हैं। इसे सही ढंग से दिखाने के लिए एक चंद्र-सौर कैलेंडर कार्यान्वयन चाहिए — इसलिए इसे गलत अनुमान लगाने के बजाय यहाँ छोड़ दिया गया है।",
          ja: "六曜は独自の数え方を持つ日本の太陰太陽暦の周期であり、ティティやナクシャトラのように太陽と月の角度位置から導かれるものではありません。正しく表示するには太陰太陽暦の実装が必要であり、このツールが基盤とする天体暦ベースの角度計算とは異なるため、誤って近似するのではなく、ここでは扱っていません。",
          ko: "로쿠요는 고유한 계산 규칙을 가진 일본의 태음태양력 주기로, 티티나 낙샤트라처럼 태양과 달의 각도 위치에서 도출되지 않습니다. 이를 올바르게 표시하려면 태음태양력 구현이 필요하며, 이 도구가 기반으로 하는 에페메리스 기반 각도 계산과는 다르기 때문에 잘못 근사하기보다 여기서는 다루지 않습니다.",
        },
      },
      {
        question: {
          en: "What does panchang mean, and what are its five limbs?",
          hi: "पंचांग का क्या अर्थ है और इसके पाँच अंग कौन-से हैं?",
          ja: "パンチャーンガとはどういう意味ですか？五つの要素とは？",
          ko: "판창가는 무슨 뜻이며 다섯 요소는 무엇인가요?",
        },
        answer: {
          en: "Panchanga is Sanskrit for “five limbs”, and classically refers to tithi, vara (weekday), nakshatra, yoga and karana. This tool shows the tithi with its paksha, the nakshatra, yoga and karana; the vara is simply the weekday of the date you choose, so it is not shown as a separate card.",
          hi: "पंचांग संस्कृत में “पाँच अंग” है और शास्त्रीय रूप से तिथि, वार, नक्षत्र, योग और करण को दर्शाता है। यह टूल पक्ष सहित तिथि, नक्षत्र, योग और करण दिखाता है; वार चुनी गई तारीख का सप्ताह-दिवस ही है, इसलिए उसे अलग से नहीं दिखाया जाता।",
          ja: "パンチャーンガはサンスクリット語で「五つの肢体」を意味し、古典的にはティティ、ヴァーラ（曜日）、ナクシャトラ、ヨーガ、カラナの五つを指します。このツールでは、パクシャ付きのティティ、ナクシャトラ、ヨーガ、カラナを表示します。ヴァーラは選んだ日付の曜日そのものなので、別枠では表示していません。",
          ko: "판창가는 산스크리트어로 '다섯 지체'를 뜻하며, 고전적으로는 티티, 바라(요일), 낙샤트라, 요가, 카라나를 가리킵니다. 이 도구는 팍샤를 포함한 티티, 낙샤트라, 요가, 카라나를 표시합니다. 바라는 선택한 날짜의 요일 그대로이므로 별도로 표시하지 않습니다.",
        },
      },
      {
        question: {
          en: "Why is the panchang calculated for sunrise?",
          hi: "पंचांग की गणना सूर्योदय के लिए क्यों होती है?",
          ja: "なぜ日の出の時刻を基準に計算するのですか？",
          ko: "왜 일출 시각을 기준으로 계산하나요?",
        },
        answer: {
          en: "In the Indian calendar a day begins at sunrise rather than midnight, so the elements prevailing at sunrise are treated as that day's elements. Tithi, nakshatra, yoga and karana can each change during the day, but this tool shows the values at the moment of sunrise.",
          hi: "भारतीय पंचांग में दिन आधी रात से नहीं, सूर्योदय से शुरू होता है, इसलिए सूर्योदय पर प्रचलित तत्व उस दिन के तत्व माने जाते हैं। तिथि, नक्षत्र, योग और करण दिन में बदल सकते हैं, पर यह टूल सूर्योदय के क्षण के मान दिखाता है।",
          ja: "インドの暦では一日が真夜中ではなく日の出から始まるため、日の出の時点で成立している要素をその日の要素とみなします。ティティ、ナクシャトラ、ヨーガ、カラナはそれぞれ一日の途中で切り替わることがありますが、このツールが表示するのは日の出の瞬間の値です。",
          ko: "인도 달력에서는 하루가 자정이 아니라 일출에서 시작하므로, 일출 시점에 성립하는 요소를 그날의 요소로 봅니다. 티티, 낙샤트라, 요가, 카라나는 하루 도중에 바뀔 수 있지만, 이 도구가 표시하는 것은 일출 순간의 값입니다.",
        },
      },
      {
        question: {
          en: "Can the same date give different results in different places?",
          hi: "क्या एक ही तारीख के अलग-अलग स्थानों पर अलग परिणाम हो सकते हैं?",
          ja: "同じ日付でも場所によって結果が変わりますか？",
          ko: "같은 날짜라도 장소에 따라 결과가 달라지나요?",
        },
        answer: {
          en: "Yes, it can. Sunrise happens at different moments in different places, so on a day when a tithi or nakshatra changes around dawn, two cities can show different values. This tool uses the coordinates of your saved birthplace and its local time zone.",
          hi: "हाँ, हो सकते हैं। अलग-अलग स्थानों पर सूर्योदय अलग क्षण पर होता है, इसलिए जिस दिन तिथि या नक्षत्र भोर के आसपास बदलता है, दो शहरों में अलग मान दिख सकते हैं। यह टूल आपके सहेजे गए जन्म स्थान के निर्देशांक और उसके स्थानीय समय-क्षेत्र का उपयोग करता है।",
          ja: "はい、変わることがあります。日の出の瞬間は場所ごとに異なるため、ティティやナクシャトラが明け方前後に切り替わる日には、都市によって表示が異なる場合があります。このツールは、保存された出生地の緯度・経度と、その土地のタイムゾーンを使って計算します。",
          ko: "네, 달라질 수 있습니다. 일출 순간은 장소마다 다르기 때문에 티티나 낙샤트라가 새벽 무렵 바뀌는 날에는 도시마다 표시가 다를 수 있습니다. 이 도구는 저장된 출생지의 위도·경도와 그 지역의 시간대를 사용해 계산합니다.",
        },
      },
      {
        question: {
          en: "What is the difference between yoga and karana?",
          hi: "योग और करण में क्या अंतर है?",
          ja: "ヨーガとカラナはどう違うのですか？",
          ko: "요가와 카라나는 어떻게 다른가요?",
        },
        answer: {
          en: "Yoga comes from the sum of the Sun's and Moon's sidereal longitudes, divided into 27 segments of 13°20′. Karana is half a tithi — every 6° of separation between Moon and Sun — giving 60 in a lunar month. The yoga here has nothing to do with the physical practice of the same name.",
          hi: "योग सूर्य और चंद्रमा के निरयण देशांतरों के योग से निकलता है, जिसे 13°20′ के 27 खंडों में बाँटा जाता है। करण तिथि का आधा है — चंद्र-सूर्य के हर 6° अंतर पर — जिससे एक चंद्र मास में 60 करण होते हैं। यहाँ का योग शारीरिक योगाभ्यास से संबंधित नहीं है।",
          ja: "ヨーガは、太陽と月のサイデリアル黄経を足した値を13度20分ずつ27に区切ったものです。カラナはティティを半分に分けたもの（月と太陽の差6度ごと）で、一か月に60あります。なお、ここでいうヨーガは、体を動かす健康法のヨガとは別のものです。",
          ko: "요가는 태양과 달의 항성 황경을 더한 값을 13도 20분씩 27개로 나눈 것입니다. 카라나는 티티를 절반으로 나눈 것(달과 태양의 차 6도마다)으로 한 달에 60개가 있습니다. 참고로 여기서 말하는 요가는 몸을 움직이는 수련법인 요가와는 다른 것입니다.",
        },
      },
      {
        question: {
          en: "Can I use this to decide an auspicious day for an event?",
          hi: "क्या मैं इससे किसी आयोजन के लिए शुभ दिन तय कर सकता हूँ?",
          ja: "このツールで結婚式や引っ越しの吉日を決めてもよいですか？",
          ko: "이 도구로 결혼식이나 이사의 길일을 정해도 되나요?",
        },
        answer: {
          en: "It is a good way to see the elements traditionally consulted when choosing dates, but it does not judge whether a day is auspicious. Traditional muhurta also weighs time windows and the relationship to each person's birth nakshatra. Please treat the result as cultural reference, and give priority to your own circumstances when deciding.",
          hi: "पारंपरिक रूप से मुहूर्त में देखे जाने वाले तत्वों को जानने के लिए यह उपयोगी है, पर यह टूल किसी दिन के शुभ-अशुभ का निर्णय नहीं करता। पारंपरिक मुहूर्त में समय-खंड और व्यक्ति के जन्म नक्षत्र से संबंध भी देखे जाते हैं। परिणाम को सांस्कृतिक संदर्भ मानें और निर्णय में अपनी परिस्थितियों को प्राथमिकता दें।",
          ja: "日取りの際に伝統的に参照される要素を知る目安にはなりますが、このツールはその日が吉日かどうかを判定するものではありません。伝統的なムフールタでは、時間帯や本人の生まれナクシャトラとの関係なども総合的に見ます。結果は文化的な参考としてご覧いただき、実際の予定はご自身の事情を優先して決めてください。",
          ko: "날짜를 정할 때 전통적으로 참고하는 요소를 알아보는 기준은 되지만, 이 도구는 그날이 길일인지 판정하지 않습니다. 전통적인 무후르타에서는 시간대와 본인의 출생 낙샤트라와의 관계 등도 종합적으로 봅니다. 결과는 문화적 참고로 보시고, 실제 일정은 본인의 사정을 우선해 정해 주세요.",
        },
      },
    ],
  },
  {
    // Naam Karan (nakshatra-pada naming) carries real search volume across
    // the Hindi/English markets, but this site's audience is Japanese —
    // so the naming *rule* stays classical while the candidate names are
    // real, current Japanese given names bridged to the nearest Japanese
    // onset for each pada's akshara (see `naam-akshar.ts`).
    slug: "baby-names",
    resultPanel: "babyNames",
    title: {
      en: "Baby names by Vedic astrology: nakshatra syllable",
      hi: "वैदिक ज्योतिष से बच्चे का नाम: नक्षत्र अक्षर",
      ja: "インド占星術で選ぶ赤ちゃんの名前｜ナクシャトラ頭音",
      ko: "인도 점성술로 고르는 아기 이름 | 낙샤트라 음절",
    },
    description: {
      en: "Find the traditional Vedic starting syllable from your baby's birth nakshatra and pada, and see Japanese given names close to that sound, with a numerology score. Free, and usable even without an exact birth time.",
      hi: "अपने बच्चे के जन्म नक्षत्र और पाद से पारंपरिक वैदिक प्रारंभिक अक्षर जानें, और उस ध्वनि के निकट जापानी नाम अंक ज्योतिष स्कोर के साथ देखें। निःशुल्क, और सटीक जन्म समय के बिना भी उपयोगी।",
      ja: "赤ちゃんの生まれナクシャトラとパダから、インド占星術の伝統的な頭音を調べ、その音に近い日本人名の候補を数秘術スコア付きで表示します。出生時刻が不明でも月宿を選んで探せる無料ツールです。",
      ko: "아기의 출생 낙샤트라와 파다로 인도 점성술의 전통 시작 음절을 확인하고, 그 소리에 가까운 일본 이름 후보를 수비학 점수와 함께 보여줍니다. 출생 시각을 몰라도 쓸 수 있는 무료 도구입니다.",
    },
    useCase: {
      en: "For a Japanese family naming a child under a Vedic birth star — a way to bring the traditional syllable rule and a real, usable Japanese name together, rather than choosing one system and ignoring the other.",
      hi: "वैदिक जन्म नक्षत्र के अनुसार बच्चे का नामकरण करने वाले जापानी परिवार के लिए — पारंपरिक अक्षर नियम और एक वास्तविक, प्रयोग योग्य जापानी नाम को एक साथ लाने का तरीका।",
      ja: "ヴェーダの生まれ星のもとで子どもに名前をつける日本のご家族のために。どちらか一方の体系だけに頼るのではなく、伝統的な音節の規則と実際に使える日本人名を両立させる方法です。",
      ko: "베다 출생성 아래 아이 이름을 짓는 일본 가정을 위해 — 한 체계만 따르는 대신 전통 음절 규칙과 실제로 쓸 수 있는 일본 이름을 함께 고려하는 방법입니다.",
    },
    lead: {
      en: "Naam Karan is the classical Hindu naming tradition: your baby's Janma Nakshatra and pada determine a specific starting syllable. This tool finds that syllable from your baby's birth details, then shows real Japanese given names built around it, each scored for numerology harmony with the Mulank and Bhagyank derived from the same birth date. The syllables come from Sanskrit, so for Japanese families the results work best as one source of inspiration alongside Japanese naming customs — sound, kanji meaning and stroke counts.",
      hi: "नामकरण एक शास्त्रीय हिंदू नामकरण परंपरा है: आपके बच्चे का जन्म नक्षत्र और पाद एक विशिष्ट प्रारंभिक अक्षर निर्धारित करते हैं। यह उपकरण आपके बच्चे के जन्म विवरण से वह अक्षर खोजता है, फिर उसी जन्म तिथि से निकाले गए मूलांक और भाग्यांक के साथ अंक ज्योतिष सामंजस्य के अनुसार स्कोर किए गए, उसके इर्द-गिर्द बने वास्तविक जापानी नाम दिखाता है। अक्षर संस्कृत से आते हैं, इसलिए जापानी परिवारों के लिए परिणाम जापानी नामकरण परंपराओं — ध्वनि, कांजी का अर्थ और रेखा-संख्या — के साथ प्रेरणा के एक स्रोत के रूप में सबसे उपयोगी हैं।",
      ja: "ナームカランは古典的なヒンドゥーの命名伝統です。赤ちゃんの生まれナクシャトラとパダによって、特定の頭音が決まります。このツールは赤ちゃんの出生データからその音節を求め、同じ生年月日から導いたムーランクとバギャンクとの数秘術的な相性でスコア付けした、実在の日本人名を表示します。頭音はもともとサンスクリット語の音なので、日本のご家族には、響きや漢字の意味、画数といった日本の名づけの考え方と並べて使う「ひとつの着想の手がかり」としてお役立ていただけます。",
      ko: "남카란은 고전 힌두 작명 전통입니다. 아기의 출생 낙샤트라와 파다가 특정한 시작 음절을 정합니다. 이 도구는 아기의 출생 정보로 그 음절을 찾은 뒤, 같은 생년월일에서 도출한 물랑크·바갼크와의 수비학적 조화로 점수를 매긴 실제 일본 이름을 보여줍니다. 음절은 본래 산스크리트어 소리이므로, 일본 가정에서는 소리·한자의 의미·획수 같은 일본식 작명 관점과 나란히 쓰는 '하나의 영감'으로 활용하시면 좋습니다.",
    },
    faqs: [
      {
        question: {
          en: "How does the nakshatra naming rule actually work?",
          hi: "नक्षत्र नामकरण नियम वास्तव में कैसे काम करता है?",
          ja: "ナクシャトラの命名規則は実際どのように機能しますか？",
          ko: "낙샤트라 작명 규칙은 실제로 어떻게 작동하나요?",
        },
        answer: {
          en: "Each of the 27 nakshatras is divided into 4 padas, and classical Jyotish assigns a specific Sanskrit akshara (syllable) to each of the 108 resulting padas. Your baby's Moon position at birth determines which pada applies, which in turn gives the traditional starting sound for the name.",
          hi: "27 नक्षत्रों में से प्रत्येक को 4 पादों में बांटा गया है, और शास्त्रीय ज्योतिष इन 108 पादों में से प्रत्येक को एक विशिष्ट संस्कृत अक्षर देता है। जन्म के समय आपके बच्चे की चंद्र स्थिति तय करती है कि कौन-सा पाद लागू होता है, जो बदले में नाम के लिए पारंपरिक प्रारंभिक ध्वनि देता है।",
          ja: "27のナクシャトラはそれぞれ4つのパダに分かれ、古典ジョーティッシュはこの108のパダそれぞれに特定のサンスクリット音節（アクシャラ）を割り当てます。出生時の赤ちゃんの月の位置によってどのパダに当たるかが決まり、それが名前の伝統的な頭音になります。",
          ko: "27개의 낙샤트라는 각각 4개의 파다로 나뉘며, 고전 조티시는 이렇게 생긴 108개의 파다 각각에 특정한 산스크리트 음절(악샤라)을 배정합니다. 출생 시 아기의 달 위치가 어느 파다에 해당하는지를 정하고, 이것이 이름의 전통적인 시작 소리가 됩니다.",
        },
      },
      {
        question: {
          en: "What if I don't know the exact birth time?",
          hi: "अगर मुझे सटीक जन्म समय नहीं पता तो?",
          ja: "正確な出生時刻がわからない場合はどうすればよいですか？",
          ko: "정확한 출생 시각을 모른다면 어떻게 하나요?",
        },
        answer: {
          en: "Pada needs a precise Moon position, which needs a birth time. Without one, this tool lets you choose the nakshatra and pada directly instead of blocking you — you lose the precision of a computed chart, but the naming rule itself still applies exactly the same way.",
          hi: "पाद के लिए चंद्रमा की सटीक स्थिति चाहिए, जिसके लिए जन्म समय आवश्यक है। समय के बिना, यह उपकरण आपको रोकने के बजाय सीधे नक्षत्र और पाद चुनने देता है — आप गणना की गई कुंडली की सटीकता खो देते हैं, पर नामकरण नियम पूरी तरह वैसे ही लागू होता है।",
          ja: "パダを求めるには月の正確な位置が必要で、それには出生時刻が要ります。時刻がわからない場合、このツールは進行を止める代わりに、ナクシャトラとパダを直接選べるようにします。計算されたチャートの精度は失われますが、命名規則そのものは同じように適用されます。",
          ko: "파다를 구하려면 달의 정확한 위치가 필요하고, 이를 위해서는 출생 시각이 필요합니다. 시각을 모른다면 이 도구는 진행을 막는 대신 낙샤트라와 파다를 직접 선택하게 해줍니다. 계산된 차트의 정밀함은 잃지만, 작명 규칙 자체는 동일하게 적용됩니다.",
        },
      },
      {
        question: {
          en: "Why Japanese names for a Sanskrit naming rule?",
          hi: "संस्कृत नामकरण नियम के लिए जापानी नाम क्यों?",
          ja: "サンスクリットの命名規則に、なぜ日本人名を使うのですか？",
          ko: "산스크리트 작명 규칙에 왜 일본 이름을 쓰나요?",
        },
        answer: {
          en: "This tool is built for families naming a child who will carry a Japanese name. Japanese has no letter-for-letter match for every Sanskrit consonant, so each pada's akshara is bridged to the nearest natural Japanese onset rather than transliterated literally — the naming rule is followed in spirit, with a name that's actually usable in Japan.",
          hi: "यह उपकरण उन परिवारों के लिए बनाया गया है जो अपने बच्चे का जापानी नाम रखना चाहते हैं। जापानी में हर संस्कृत व्यंजन का अक्षर-दर-अक्षर मेल नहीं है, इसलिए हर पाद के अक्षर को शाब्दिक लिप्यंतरण के बजाय निकटतम स्वाभाविक जापानी ध्वनि से जोड़ा गया है — नामकरण नियम की भावना का पालन होता है, साथ ही एक ऐसा नाम मिलता है जो जापान में वास्तव में प्रयोग हो सके।",
          ja: "このツールは、日本人名を持つことになる子どもに名前をつけるご家族のために作られています。日本語にはサンスクリット語のすべての子音に一致する音があるわけではないため、各パダのアクシャラは文字どおりの転写ではなく、最も自然に近い日本語の頭音に結び付けています。命名規則の趣旨を保ちながら、実際に日本で使える名前になります。",
          ko: "이 도구는 일본 이름을 갖게 될 아이의 이름을 짓는 가정을 위해 만들어졌습니다. 일본어에는 산스크리트어의 모든 자음과 정확히 일치하는 소리가 없으므로, 각 파다의 악샤라는 문자 그대로 옮기는 대신 가장 자연스러운 일본어 첫소리에 연결했습니다. 작명 규칙의 취지를 지키면서 실제로 일본에서 쓸 수 있는 이름이 됩니다.",
        },
      },
      {
        question: {
          en: "Can the nakshatra rule and the numerology score disagree?",
          hi: "क्या नक्षत्र नियम और अंक ज्योतिष स्कोर असहमत हो सकते हैं?",
          ja: "ナクシャトラの規則と数秘術のスコアが食い違うことはありますか？",
          ko: "낙샤트라 규칙과 수비학 점수가 서로 다를 수 있나요?",
        },
        answer: {
          en: "Yes, and that's expected — they're two separate traditions read together, not one system. Every name shown already starts with the correct traditional syllable; the numerology score is a second, complementary layer ranking those names against each other, not a filter that overrides the syllable rule.",
          hi: "हां, और यह अपेक्षित है — ये एक साथ पढ़ी जाने वाली दो अलग परंपराएं हैं, एक प्रणाली नहीं। दिखाया गया हर नाम पहले से ही सही पारंपरिक अक्षर से शुरू होता है; अंक ज्योतिष स्कोर एक दूसरी, पूरक परत है जो इन नामों को एक-दूसरे के मुकाबले क्रमबद्ध करती है, अक्षर नियम को अधिलेखित करने वाला फ़िल्टर नहीं है।",
          ja: "はい、それは想定内です。これらは一つの体系ではなく、併せて読む二つの別々の伝統だからです。表示される名前はすでにすべて正しい伝統的な音節で始まっており、数秘術のスコアはそれらの名前を互いに比較して並べる第二の補完的なレイヤーであって、音節の規則を上書きするフィルターではありません。",
          ko: "네, 그것은 예상된 일입니다. 이는 하나의 체계가 아니라 함께 읽는 두 개의 별개 전통이기 때문입니다. 표시되는 모든 이름은 이미 올바른 전통 음절로 시작하며, 수비학 점수는 그 이름들을 서로 비교해 순위를 매기는 보조적인 층일 뿐, 음절 규칙을 무시하는 필터가 아닙니다.",
        },
      },
      {
        question: {
          en: "Can I share the shortlist with family?",
          hi: "क्या मैं शॉर्टलिस्ट परिवार के साथ साझा कर सकता/सकती हूं?",
          ja: "候補リストを家族と共有できますか？",
          ko: "후보 목록을 가족과 공유할 수 있나요?",
        },
        answer: {
          en: "Yes — the shortlist has a WhatsApp share button that prefills the baby's nakshatra, pada, syllable, and every shortlisted name with its meaning and score, plus a copy-to-clipboard fallback for anywhere WhatsApp isn't the right channel.",
          hi: "हां — शॉर्टलिस्ट में एक व्हाट्सएप शेयर बटन है जो बच्चे के नक्षत्र, पाद, अक्षर, और हर शॉर्टलिस्ट किए गए नाम को उसके अर्थ और स्कोर के साथ पहले से भर देता है, साथ ही जहां व्हाट्सएप सही माध्यम न हो वहां के लिए कॉपी-टू-क्लिपबोर्ड विकल्प भी है।",
          ja: "はい。候補リストにはWhatsApp共有ボタンがあり、赤ちゃんのナクシャトラ、パダ、音節、そして候補に入れた各名前をその意味とスコアとともに自動入力します。WhatsAppが適さない場合のために、クリップボードへのコピー機能もあります。",
          ko: "네 — 후보 목록에는 WhatsApp 공유 버튼이 있어 아기의 낙샤트라, 파다, 음절, 그리고 후보에 추가한 각 이름을 의미와 점수와 함께 미리 채워 넣습니다. WhatsApp이 적절하지 않은 경우를 위한 클립보드 복사 기능도 있습니다.",
        },
      },
      {
        question: {
          en: "Can I use this alongside kanji stroke-count name fortune (seimei handan)?",
          hi: "क्या इसे कांजी रेखा-संख्या आधारित नाम भविष्य (सेइमेई हांदान) के साथ उपयोग कर सकते हैं?",
          ja: "漢字の画数（姓名判断）と一緒に使えますか？",
          ko: "한자 획수(성명 판단)와 함께 쓸 수 있나요?",
        },
        answer: {
          en: "Yes. This tool only deals with the opening sound of the name, so the choice of kanji — and therefore the stroke count — is left entirely to you. A practical approach is to narrow the reading with the syllable first, then compare kanji with that reading by meaning and stroke count.",
          hi: "हाँ। यह उपकरण केवल नाम की प्रारंभिक ध्वनि से संबंधित है, इसलिए कांजी का चुनाव — और इसलिए रेखा-संख्या — पूरी तरह आप पर है। एक व्यावहारिक तरीका है पहले अक्षर से उच्चारण छाँटना, फिर उस उच्चारण वाले कांजी की अर्थ और रेखा-संख्या से तुलना करना।",
          ja: "はい、併用できます。このツールが扱うのは名前の最初の音（読み）だけなので、どの漢字を当てるか、つまり画数はご家族が自由に選べます。まず頭音で読みの候補を絞り、その読みに合う漢字を意味と画数で比べる、という順番がおすすめです。",
          ko: "네, 함께 쓸 수 있습니다. 이 도구는 이름의 첫소리(읽기)만 다루므로 어떤 한자를 쓸지, 즉 획수는 가족이 자유롭게 정할 수 있습니다. 먼저 시작 음절로 읽기 후보를 좁힌 뒤, 그 읽기에 맞는 한자를 의미와 획수로 비교하는 순서를 권합니다.",
        },
      },
      {
        question: {
          en: "Does the name have to start with the traditional syllable?",
          hi: "क्या नाम का पारंपरिक अक्षर से शुरू होना ज़रूरी है?",
          ja: "必ず頭音どおりの名前にしなければいけませんか？",
          ko: "반드시 시작 음절대로 이름을 지어야 하나요?",
        },
        answer: {
          en: "No. The syllable table was designed for Sanskrit sounds, and this tool only bridges it to the nearest Japanese kana row, so it is best treated as inspiration rather than a rule. Choosing a name that doesn't match it does not bring bad luck — what matters most is a name your family feels good about.",
          hi: "नहीं। अक्षर तालिका संस्कृत ध्वनियों के लिए बनी थी, और यह उपकरण उसे केवल निकटतम जापानी काना पंक्ति से जोड़ता है, इसलिए इसे नियम के बजाय प्रेरणा मानना बेहतर है। मेल न खाने वाला नाम चुनने से दुर्भाग्य नहीं आता — सबसे महत्वपूर्ण वह नाम है जिससे आपका परिवार संतुष्ट हो।",
          ja: "いいえ、その必要はありません。頭音の表はサンスクリット語の音を前提にしたもので、このツールはそれを最も近い日本語の行に置き換えているにすぎないため、決まりではなく着想のヒントとして使うのがおすすめです。頭音に合わない名前を選んでも不運になるわけではなく、ご家族が納得できる名前であることがいちばん大切です。",
          ko: "아니요, 그럴 필요는 없습니다. 음절표는 산스크리트어 소리를 전제로 한 것이고, 이 도구는 그것을 가장 가까운 일본어 행에 연결했을 뿐이므로 규칙이 아니라 영감의 힌트로 쓰는 것을 권합니다. 음절에 맞지 않는 이름을 골라도 불운해지는 것이 아니며, 가족이 납득할 수 있는 이름인 것이 가장 중요합니다.",
        },
      },
      {
        question: {
          en: "Can I find the syllable before the baby is born, from the due date?",
          hi: "क्या जन्म से पहले, नियत प्रसव तिथि से अक्षर जाना जा सकता है?",
          ja: "生まれる前に、出産予定日で頭音を調べられますか？",
          ko: "태어나기 전에 출산 예정일로 시작 음절을 알 수 있나요?",
        },
        answer: {
          en: "Only roughly. The Moon moves through one pada in about six hours and through a whole nakshatra in about a day, so the syllable can't be fixed until the actual date and time of birth are known. You can use the Nakshatra Finder to see which nakshatras are possible around the due date, start a shortlist from their syllables, and confirm after the birth.",
          hi: "केवल मोटे तौर पर। चंद्रमा एक पाद लगभग छह घंटे में और पूरा नक्षत्र लगभग एक दिन में पार करता है, इसलिए वास्तविक जन्म तिथि और समय पता होने तक अक्षर तय नहीं हो सकता। आप नक्षत्र खोजक से नियत तिथि के आसपास संभावित नक्षत्र देखकर उनके अक्षरों से शॉर्टलिस्ट शुरू कर सकते हैं, फिर जन्म के बाद पुष्टि करें।",
          ja: "おおまかな目安にとどまります。月は1つのパダを約6時間、1つのナクシャトラを約1日で通過するため、実際の出生日時がわかるまで頭音は確定しません。ナクシャトラ（月宿）を調べるツールで予定日前後にありうるナクシャトラを確かめ、その頭音から候補を考えておき、生まれてから確認する方法がおすすめです。",
          ko: "대략적인 기준에 그칩니다. 달은 한 파다를 약 6시간, 한 낙샤트라를 약 하루에 지나가므로 실제 출생 일시를 알기 전에는 음절이 확정되지 않습니다. 낙샤트라 찾기 도구로 예정일 전후에 가능한 낙샤트라를 확인하고 그 음절로 후보를 생각해 둔 뒤, 태어난 뒤에 확인하는 방법을 권합니다.",
        },
      },
    ],
  },
  {
    // Gemstone therapy is one of the more consequential traditional
    // remedies — a wrong stone is classically believed to backfire, not
    // just do nothing — so this page leans harder into caution and the
    // escalation-to-a-human path than any other free tool on the site.
    slug: "gemstone-recommendation",
    resultPanel: "gemstone",
    title: {
      en: "Gemstone recommendation",
      hi: "रत्न सुझाव",
      ja: "インド占星術の宝石診断｜ラグナ支配星と代替石",
      ko: "보석 추천",
    },
    description: {
      en: "Find the classical gemstone recommendation for your Lagna lord and your chart's weakest placement, with a cheaper substitute stone for each — and a clear caution to consult before wearing anything.",
      hi: "अपने लग्न स्वामी और कुंडली की सबसे कमजोर स्थिति के लिए शास्त्रीय रत्न सुझाव जानें, प्रत्येक के लिए सस्ता विकल्प सहित — साथ ही कुछ भी पहनने से पहले परामर्श की स्पष्ट सलाह।",
      ja: "出生データから、インド占星術の古典に基づきラグナの支配星と減衰惑星に対応する宝石・代替石・金属・指・曜日を表示。購入前の下調べとして、専門家への相談とあわせてお使いください。",
      ko: "당신의 라그나 지배 행성과 차트에서 가장 약한 배치에 대한 고전적 보석 추천을, 각각의 저렴한 대체 보석과 함께 확인하세요. 착용 전 상담에 대한 명확한 안내도 포함합니다.",
    },
    useCase: {
      en: "A starting point before buying or wearing a gemstone on someone's advice — see the classical reasoning first, then confirm it with a professional.",
      hi: "किसी की सलाह पर रत्न खरीदने या पहनने से पहले का प्रारंभिक बिंदु — पहले शास्त्रीय तर्क देखें, फिर किसी विशेषज्ञ से इसकी पुष्टि करें।",
      ja: "誰かの助言で宝石を購入・着用する前の出発点として。まず古典的な根拠を確認し、その上で専門家に確認してください。",
      ko: "누군가의 조언으로 보석을 사거나 착용하기 전의 출발점으로. 먼저 고전적 근거를 확인한 뒤 전문가에게 확인받으세요.",
    },
    lead: {
      en: "In Jyotish each of the nine planets has a corresponding gem, and wearing a stone has long been treated as one of the traditional remedial practices. From your date, time and place of birth, this tool shows the stone for your Lagna (ascendant) lord — classically the most conservative choice — and, if your chart has a debilitated planet, that planet's stone, each with a cheaper substitute, metal, finger and day. Use it as background reading on the classical reasoning before you consider buying anything.",
      hi: "ज्योतिष में नौ ग्रहों में से प्रत्येक का एक रत्न है, और रत्न धारण करना लंबे समय से पारंपरिक उपायों में से एक माना गया है। जन्म तिथि, समय और स्थान से यह उपकरण आपके लग्न स्वामी का रत्न — शास्त्रीय रूप से सबसे सुरक्षित विकल्प — और यदि कुंडली में कोई नीच ग्रह हो तो उसका रत्न दिखाता है, प्रत्येक के साथ सस्ता विकल्प, धातु, उंगली और दिन। कुछ भी खरीदने से पहले शास्त्रीय तर्क समझने के लिए इसका उपयोग करें।",
      ja: "インド占星術（ジョーティッシュ）では、九つの惑星それぞれに対応する宝石があり、身につける石を伝統的なレメディ（緩和策）の一つとして扱ってきました。このツールは、生年月日・出生時刻・出生地から、最も無難とされるラグナ（アセンダント）の支配星の石と、チャートで「減衰」している惑星があればその石を、安価な代替石・金属・指・曜日とともに示します。宝石の購入を考えている方が、まず古典的な根拠を知るための下調べとしてお使いください。",
      ko: "조티시에서는 아홉 행성마다 대응하는 보석이 있으며, 보석 착용을 전통적인 레메디(완화책) 중 하나로 다뤄 왔습니다. 이 도구는 생년월일·출생 시각·출생지로부터, 가장 무난하다고 여겨지는 라그나(상승궁) 지배 행성의 보석과, 차트에 쇠약한 행성이 있다면 그 보석을 저렴한 대체 보석·금속·손가락·요일과 함께 보여줍니다. 보석 구매를 고민하는 분이 먼저 고전적 근거를 알아보는 사전 조사로 활용하세요.",
    },
    faqs: [
      {
        question: {
          en: "Is it safe to wear any gemstone this page recommends?",
          hi: "क्या इस पृष्ठ द्वारा सुझाया गया कोई भी रत्न पहनना सुरक्षित है?",
          ja: "このページが提案する宝石を身につけても安全ですか？",
          ko: "이 페이지가 추천하는 보석을 착용해도 안전한가요?",
        },
        answer: {
          en: "Treat this as a starting point, not a prescription. Classical practice holds that the wrong stone — worn for the wrong planet, in the wrong metal, or without accounting for the rest of the chart — can do more harm than good, especially for Saturn, Mars, Rahu, and Ketu. Consult a professional before buying or wearing anything shown here.",
          hi: "इसे नुस्खा नहीं बल्कि एक शुरुआती बिंदु मानें। शास्त्रीय मान्यता है कि गलत ग्रह के लिए, गलत धातु में, या कुंडली के बाकी हिस्से को ध्यान में रखे बिना पहना गया गलत रत्न लाभ के बजाय हानि कर सकता है — विशेषकर शनि, मंगल, राहु और केतु के लिए। यहाँ दिखाई गई किसी भी चीज़ को खरीदने या पहनने से पहले किसी विशेषज्ञ से परामर्श करें।",
          ja: "これは処方ではなく出発点として捉えてください。誤った惑星のために、誤った金属で、あるいはチャート全体を考慮せずに身につけた誤った石は、益より害になり得ると古典では考えられています。特に土星・火星・ラーフ・ケートゥについては注意が必要です。ここに示すものを購入・着用する前に、必ず専門家にご相談ください。",
          ko: "이것을 처방이 아닌 출발점으로 여기세요. 잘못된 행성을 위해, 잘못된 금속으로, 또는 차트 전체를 고려하지 않고 착용한 잘못된 보석은 이로움보다 해로움이 클 수 있다고 고전에서는 봅니다 — 특히 토성, 화성, 라후, 케투의 경우 더욱 그렇습니다. 여기 표시된 것을 구매하거나 착용하기 전에 반드시 전문가와 상담하세요.",
        },
      },
      {
        question: {
          en: "Why are there cheaper substitute stones listed?",
          hi: "सस्ते विकल्प रत्न क्यों सूचीबद्ध हैं?",
          ja: "なぜ安価な代替石が掲載されているのですか？",
          ko: "왜 저렴한 대체 보석이 나와 있나요?",
        },
        answer: {
          en: "The classical primary stones (ruby, blue sapphire, and similar) can be genuinely expensive at the quality traditionally required. Substitute stones are the traditional lower-cost alternative believed to carry a lighter version of the same planetary association.",
          hi: "पारंपरिक रूप से आवश्यक गुणवत्ता में शास्त्रीय मुख्य रत्न (माणिक, नीलम आदि) वास्तव में महंगे हो सकते हैं। विकल्प रत्न पारंपरिक रूप से कम लागत वाला विकल्प है जिसे उसी ग्रह संबंध का हल्का रूप माना जाता है।",
          ja: "伝統的に求められる品質での古典的な主要石（ルビー、ブルーサファイアなど）は、実際に高価になり得ます。代替石は、同じ惑星との結びつきの軽い形を持つと考えられている、伝統的な低コストの選択肢です。",
          ko: "전통적으로 요구되는 품질의 고전적 주 보석(루비, 블루 사파이어 등)은 실제로 매우 비쌀 수 있습니다. 대체 보석은 같은 행성과의 연관성을 더 약하게 지닌다고 여겨지는, 전통적인 저비용 대안입니다.",
        },
      },
      {
        question: {
          en: "How is this different from birthstones?",
          hi: "यह जन्म-माह के रत्नों से कैसे अलग है?",
          ja: "誕生石とは何が違うのですか？",
          ko: "탄생석과 무엇이 다른가요?",
        },
        answer: {
          en: "Birthstones assign a stone to each birth month, a modern custom unrelated to astrological calculation. Jyotish links a gem to each of the nine planets and chooses from your own chart — here, from your Lagna lord and any debilitated planet. Two people born in the same month can therefore get different suggestions.",
          hi: "जन्म-माह रत्न हर महीने के लिए एक रत्न तय करने की आधुनिक परंपरा है, जिसका ज्योतिषीय गणना से संबंध नहीं है। ज्योतिष नौ ग्रहों में से प्रत्येक को एक रत्न से जोड़ता है और आपकी अपनी कुंडली से चुनता है — यहाँ लग्न स्वामी और किसी नीच ग्रह से। इसलिए एक ही महीने में जन्मे दो लोगों को अलग सुझाव मिल सकते हैं।",
          ja: "誕生石は生まれた月ごとに石を割り当てる近代の慣習で、占星術の計算とは関係がありません。インド占星術では九つの惑星それぞれに宝石を対応させ、あなた自身のチャート（このツールではラグナの支配星と減衰惑星）から石を選びます。そのため、同じ月生まれでも提案が異なることがあります。",
          ko: "탄생석은 태어난 달마다 보석을 정하는 근대의 관습으로, 점성술 계산과는 관계가 없습니다. 조티시는 아홉 행성 각각에 보석을 대응시키고, 본인의 차트(이 도구에서는 라그나 지배 행성과 쇠약한 행성)에서 보석을 고릅니다. 그래서 같은 달에 태어나도 추천이 다를 수 있습니다.",
        },
      },
      {
        question: {
          en: "I don't know my exact birth time. Can I still use it?",
          hi: "मुझे सही जन्म समय नहीं पता। क्या मैं फिर भी इसका उपयोग कर सकता हूँ?",
          ja: "出生時刻が分からなくても使えますか？",
          ko: "정확한 출생 시각을 몰라도 쓸 수 있나요?",
        },
        answer: {
          en: "You can run it, but the first recommendation depends on your Lagna, which changes sign roughly every two hours. With an unknown or approximate time, the Lagna lord — and so the stone — may be wrong. Treat the result as a reference only, and avoid buying an expensive stone on that basis.",
          hi: "आप इसे चला सकते हैं, पर पहला सुझाव लग्न पर निर्भर है, जो लगभग हर दो घंटे में राशि बदलता है। अज्ञात या अनुमानित समय से लग्न स्वामी — और इसलिए रत्न — गलत हो सकता है। परिणाम को केवल संदर्भ मानें और उसके आधार पर महँगा रत्न न खरीदें।",
          ja: "計算はできますが、一つ目の提案はラグナに基づいており、ラグナはおよそ2時間ごとに星座が変わります。時刻が不明または曖昧な場合、支配星とそれに対応する石が実際と異なる可能性があります。結果は参考程度にとどめ、それを根拠に高価な石を購入するのは避けてください。",
          ko: "계산은 가능하지만, 첫 번째 추천은 라그나에 근거하며 라그나는 약 2시간마다 별자리가 바뀝니다. 시각이 불분명하면 지배 행성과 보석이 실제와 다를 수 있습니다. 결과는 참고로만 보고, 이를 근거로 비싼 보석을 사는 것은 피하세요.",
        },
      },
      {
        question: {
          en: "Why does the page sometimes show no second recommendation?",
          hi: "पृष्ठ कभी-कभी दूसरा सुझाव क्यों नहीं दिखाता?",
          ja: "二つ目の提案が表示されないのはなぜですか？",
          ko: "두 번째 추천이 표시되지 않는 이유는 무엇인가요?",
        },
        answer: {
          en: "The second card appears only when a planet in your chart is classically debilitated — placed in the sign where it is held to be weakest. If none is, the tool says so rather than inventing a recommendation. That is not a bad sign; it simply means this rule does not apply to your chart.",
          hi: "दूसरा कार्ड तभी दिखता है जब आपकी कुंडली में कोई ग्रह शास्त्रीय रूप से नीच हो — यानी उस राशि में हो जहाँ उसे सबसे कमजोर माना जाता है। ऐसा न हो तो उपकरण सुझाव गढ़ने के बजाय यही बताता है। यह बुरा संकेत नहीं है; बस यह नियम आपकी कुंडली पर लागू नहीं होता।",
          ja: "二枚目のカードは、チャート内に古典的に「減衰」している惑星（最も力を発揮しにくいとされる星座にある惑星）がある場合にだけ表示されます。該当する惑星がなければ、無理に提案を作らずその旨を表示します。悪い意味ではなく、この基準があなたのチャートには当てはまらないというだけです。",
          ko: "두 번째 카드는 차트에 고전적으로 쇠약한 행성(가장 힘을 발휘하기 어렵다고 여겨지는 별자리에 있는 행성)이 있을 때만 나타납니다. 해당 행성이 없으면 억지로 추천을 만들지 않고 그렇게 안내합니다. 나쁜 의미가 아니라, 이 기준이 당신의 차트에 해당하지 않을 뿐입니다.",
        },
      },
      {
        question: {
          en: "Will wearing the recommended stone improve my luck or health?",
          hi: "क्या सुझाया गया रत्न पहनने से मेरा भाग्य या स्वास्थ्य सुधरेगा?",
          ja: "提案された石を身につければ、運気や健康が良くなりますか？",
          ko: "추천된 보석을 착용하면 운이나 건강이 좋아지나요?",
        },
        answer: {
          en: "We can't promise that, and no one honestly can. In Jyotish, gems are a traditional remedial practice for keeping a planet's themes in mind, not a guarantee of any outcome. For health, money or legal matters, please rely on the appropriate professional.",
          hi: "हम इसका वादा नहीं कर सकते, और ईमानदारी से कोई नहीं कर सकता। ज्योतिष में रत्न ग्रह के विषयों को ध्यान में रखने का पारंपरिक उपाय हैं, किसी परिणाम की गारंटी नहीं। स्वास्थ्य, धन या कानूनी मामलों के लिए उपयुक्त विशेषज्ञ पर भरोसा करें।",
          ja: "そのような約束はできませんし、誠実に約束できる人もいません。インド占星術において宝石は、惑星の象意を意識するための伝統的なレメディであり、結果を保証するものではありません。健康・お金・法律に関わることは、それぞれの専門家にご相談ください。",
          ko: "그런 약속은 할 수 없으며, 정직하게 약속할 수 있는 사람도 없습니다. 조티시에서 보석은 행성의 상징을 의식하기 위한 전통적 레메디이지 결과를 보장하지 않습니다. 건강·돈·법률 문제는 해당 분야 전문가와 상담하세요.",
        },
      },
      {
        question: {
          en: "Can I wear several gemstones at the same time?",
          hi: "क्या मैं एक साथ कई रत्न पहन सकता हूँ?",
          ja: "複数の宝石を同時に身につけてもよいですか？",
          ko: "여러 보석을 동시에 착용해도 되나요?",
        },
        answer: {
          en: "Traditionally, some combinations are avoided — stones of planets regarded as mutual enemies, such as the Sun's ruby and Saturn's blue sapphire, are generally not worn together. Because this depends on the whole chart, ask a practitioner before combining stones.",
          hi: "परंपरा में कुछ संयोजनों से बचा जाता है — शत्रु माने जाने वाले ग्रहों के रत्न, जैसे सूर्य का माणिक और शनि का नीलम, सामान्यतः साथ नहीं पहने जाते। चूँकि यह पूरी कुंडली पर निर्भर है, रत्न मिलाने से पहले किसी विशेषज्ञ से पूछें।",
          ja: "伝統的には避けるべき組み合わせがあるとされ、互いに敵対するとされる惑星の石（例：太陽のルビーと土星のブルーサファイア）は一般に一緒に身につけません。チャート全体によって判断が変わるため、組み合わせる前に専門家にご相談ください。",
          ko: "전통적으로 피하는 조합이 있어, 서로 적대한다고 여겨지는 행성의 보석(예: 태양의 루비와 토성의 블루 사파이어)은 보통 함께 착용하지 않습니다. 차트 전체에 따라 판단이 달라지므로, 조합하기 전에 전문가와 상담하세요.",
        },
      },
    ],
  },
  {
    // D10 (Dashamsha) — the divisional chart classically read for career and
    // profession specifically, distinct from D1's general life picture.
    slug: "career-report",
    resultPanel: "careerReport",
    title: {
      en: "Career Reading: Your Work Aptitudes in the Vedic D10 Chart",
      hi: "करियर ज्योतिष: वैदिक D10 कुंडली में काम की प्रवृत्तियां",
      ja: "キャリア占い｜インド占星術D10で見る仕事の適性",
      ko: "커리어 점: 인도 점성술 D10으로 보는 일의 적성",
    },
    description: {
      en: "Calculate your Vedic D10 (Dashamsha) chart for free. Read the temperament and interests you tend to bring to work from your D10 Lagna and nine planets — a prompt for reflecting on your strengths.",
      hi: "अपनी वैदिक D10 (दशमांश) कुंडली मुफ़्त में बनाएं। D10 लग्न और नौ ग्रहों की स्थिति से काम में दिखने वाले स्वभाव और रुचियों की प्रवृत्ति पढ़ें — अपनी क्षमताओं पर विचार करने का एक संकेत।",
      ja: "インド占星術のD10（ダシャムシャ）チャートを無料で計算。D10ラグナと九つの惑星の配置から、仕事で発揮しやすい気質や関心の傾向を読み解き、自分の強みを振り返るヒントにできます。",
      ko: "인도 점성술의 D10(다샴샤) 차트를 무료로 계산합니다. D10 라그나와 아홉 행성의 배치로 일에서 발휘하기 쉬운 기질과 관심의 경향을 읽고, 자신의 강점을 돌아보는 힌트로 삼을 수 있습니다.",
    },
    useCase: {
      en: "Read this alongside your main birth chart when weighing a career direction — it's a different lens than the general D1 picture, not a replacement for it.",
      hi: "करियर की दिशा तय करते समय इसे अपनी मुख्य जन्म-कुंडली के साथ पढ़ें — यह सामान्य D1 चित्र से एक अलग दृष्टिकोण है, इसका विकल्प नहीं।",
      ja: "キャリアの方向性を検討する際は、メインの出生チャートと合わせて読んでください。一般的なD1の見方とは異なる視点であり、それに代わるものではありません。",
      ko: "커리어 방향을 고민할 때 메인 출생 차트와 함께 읽으세요. 일반적인 D1 관점과는 다른 시각이며, 그것을 대체하는 것은 아닙니다.",
    },
    lead: {
      en: "Vedic astrology reads career through its own divisional chart — the D10 (Dashamsha), built by dividing each sign into ten parts. Enter your date, time and place of birth and this tool computes your D10 chart, describes the temperament of your D10 Lagna, and shows which D10 house each of the nine planets occupies and the tendency it adds to work. It is a lens for anyone who wants to reflect on their strengths and interests — not a verdict on which job to choose.",
      hi: "वैदिक ज्योतिष करियर को अपनी स्वयं की वर्ग कुंडली — D10 (दशमांश) — के माध्यम से पढ़ता है, जो प्रत्येक राशि को दस भागों में बांटकर बनाई जाती है। अपनी जन्म तिथि, समय और स्थान दर्ज करें, और यह उपकरण आपकी D10 कुंडली बनाकर D10 लग्न का स्वभाव बताता है, तथा नौ ग्रहों में से प्रत्येक किस D10 भाव में है और काम में कौन-सी प्रवृत्ति जोड़ता है, यह दिखाता है। यह अपनी क्षमताओं और रुचियों पर विचार करने का एक दृष्टिकोण है — कौन-सी नौकरी चुनें, इसका निर्णय नहीं।",
      ja: "インド占星術（ジョーティッシュ）では、仕事や社会での役割を、各星座を10分割して作る分割図D10（ダシャムシャ）で読みます。このツールは生年月日・出生時刻・出生地からD10チャートを計算し、D10ラグナの気質と、九つの惑星がD10のどの室に入り、仕事にどんな傾向を加えるかを図とともに表示します。自分の強みや関心を振り返りたい方のための視点であり、職業を決めつけるものではありません。",
      ko: "베다 점성술은 커리어를 자체 분할 차트 — 각 별자리를 10등분하여 만드는 D10(다샴샤) — 를 통해 읽습니다. 생년월일·출생 시각·출생지를 입력하면 이 도구가 D10 차트를 계산해 D10 라그나의 기질을 설명하고, 아홉 행성이 각각 D10의 어느 하우스에 들어가 일에 어떤 경향을 더하는지 도표와 함께 보여줍니다. 자신의 강점과 관심사를 돌아보고 싶은 분을 위한 관점이며, 직업을 단정하는 것이 아닙니다.",
    },
    faqs: [
      {
        question: {
          en: "What is a D10 (Dashamsha) chart?",
          hi: "D10 (दशमांश) कुंडली क्या है?",
          ja: "D10（ダシャムシャ）チャートとは何ですか？",
          ko: "D10(다샴샤) 차트란 무엇인가요?",
        },
        answer: {
          en: "It's one of the classical divisional (varga) charts, built by dividing each zodiac sign into 10 equal 3° parts. Where your main birth chart (D1) reads the whole life, the D10 is read specifically for career, profession, and public standing.",
          hi: "यह शास्त्रीय वर्ग कुंडलियों में से एक है, जो प्रत्येक राशि को दस बराबर 3° भागों में बांटकर बनाई जाती है। जहां आपकी मुख्य जन्म-कुंडली (D1) पूरे जीवन को पढ़ती है, वहीं D10 विशेष रूप से करियर, पेशे और सार्वजनिक प्रतिष्ठा के लिए पढ़ी जाती है।",
          ja: "これは古典的な分割図（ヴァルガ）の一つで、各星座を10等分（各3度）して作られます。メインの出生チャート（D1）が人生全体を読むのに対し、D10はキャリア、職業、社会的地位を特に読むために用いられます。",
          ko: "이는 고전 분할 차트(바르가) 중 하나로, 각 별자리를 10등분(각 3도)하여 만듭니다. 메인 출생 차트(D1)가 삶 전체를 읽는다면, D10은 커리어, 직업, 사회적 지위를 특별히 읽기 위한 것입니다.",
        },
      },
      {
        question: {
          en: "Should the D10 agree with my main birth chart?",
          hi: "क्या D10 को मेरी मुख्य जन्म-कुंडली से सहमत होना चाहिए?",
          ja: "D10はメインの出生チャートと一致すべきですか？",
          ko: "D10이 메인 출생 차트와 일치해야 하나요?",
        },
        answer: {
          en: "Not necessarily — the two charts are different lenses on the same life, not two answers to the same question. Classical practice reads them together: the D1 for general life themes, the D10 for how those themes specifically play out in career.",
          hi: "जरूरी नहीं — दोनों कुंडलियां एक ही जीवन पर अलग-अलग दृष्टिकोण हैं, एक ही प्रश्न के दो उत्तर नहीं। शास्त्रीय अभ्यास दोनों को साथ पढ़ता है: सामान्य जीवन विषयों के लिए D1, और करियर में वे विषय विशेष रूप से कैसे सामने आते हैं इसके लिए D10।",
          ja: "必ずしもそうとは限りません。二つのチャートは同じ人生に対する異なる視点であり、同じ問いへの二つの答えではありません。古典的な実践では両方を併せて読みます——一般的な人生のテーマにはD1を、それがキャリアにおいて具体的にどう表れるかにはD10を用います。",
          ko: "반드시 그럴 필요는 없습니다 — 두 차트는 같은 삶을 보는 서로 다른 렌즈이지, 같은 질문에 대한 두 개의 답이 아닙니다. 고전적 관행은 둘을 함께 읽습니다: 일반적인 삶의 주제는 D1로, 그 주제가 커리어에서 구체적으로 어떻게 나타나는지는 D10으로요.",
        },
      },
      {
        question: {
          en: "Can I use it if I don't know my exact birth time?",
          hi: "अगर मुझे सटीक जन्म समय नहीं पता तो क्या मैं इसका उपयोग कर सकता/सकती हूं?",
          ja: "出生時刻が正確にわからなくても使えますか？",
          ko: "출생 시각을 정확히 몰라도 사용할 수 있나요?",
        },
        answer: {
          en: "You can calculate it, but treat the result with care. The D10 works in 3° divisions, so a difference of a few minutes to a little over ten can change the D10 Lagna. Try the time shifted about 15 minutes either way; if the D10 Lagna changes, read it as tentative.",
          hi: "गणना तो हो जाएगी, पर परिणाम को सावधानी से लें। D10 3° के भागों से बनता है, इसलिए कुछ मिनट से लेकर दस-पंद्रह मिनट का अंतर भी D10 लग्न बदल सकता है। समय को लगभग 15 मिनट आगे-पीछे करके देखें; यदि D10 लग्न बदलता है, तो उसे केवल संकेत मानें।",
          ja: "計算はできますが、結果の扱いには注意が必要です。D10は3度という細かい区分で作るため、数分から十数分の違いでD10ラグナが変わることがあります。前後15分ほどずらして試し、D10ラグナが変わる場合は参考程度に読んでください。",
          ko: "계산은 가능하지만 결과를 다룰 때 주의가 필요합니다. D10은 3도라는 세밀한 구간으로 만들기 때문에 몇 분에서 십여 분의 차이로 D10 라그나가 바뀔 수 있습니다. 앞뒤로 15분 정도 옮겨 시험해 보고, D10 라그나가 바뀐다면 참고 정도로 읽어 주세요.",
        },
      },
      {
        question: {
          en: "Why is my D10 Lagna different from my regular ascendant?",
          hi: "मेरा D10 लग्न मेरे सामान्य लग्न से अलग क्यों है?",
          ja: "D10ラグナが通常のラグナ（上昇宮）と違うのはなぜですか？",
          ko: "D10 라그나가 일반 라그나(상승궁)와 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Because the D10 is a separate chart. The ascendant's exact degree is mapped into one of ten 3° parts of its sign, and that part points to its own sign. A different sign is the normal outcome, not an error.",
          hi: "क्योंकि D10 एक अलग कुंडली है। लग्न की सटीक डिग्री उसकी राशि के 3° के दस भागों में से एक में आती है, और वह भाग अपनी एक अलग राशि दर्शाता है। अलग राशि आना सामान्य बात है, कोई त्रुटि नहीं।",
          ja: "D10は別に計算されるチャートだからです。通常のラグナの正確な度数が、その星座を3度ずつ10分割したどの区分に入るかで、D10ラグナの星座が決まります。違う星座になるのはごく普通のことで、誤りではありません。",
          ko: "D10은 별도로 계산하는 차트이기 때문입니다. 일반 라그나의 정확한 도수가 그 별자리를 3도씩 10등분한 어느 구간에 들어가는지에 따라 D10 라그나의 별자리가 정해집니다. 다른 별자리가 되는 것은 아주 흔한 일이며 오류가 아닙니다.",
        },
      },
      {
        question: {
          en: "How is this different from the 10th house or MC in Western astrology?",
          hi: "यह पश्चिमी ज्योतिष के दसवें भाव या MC से कैसे अलग है?",
          ja: "西洋占星術の第10ハウスやMCで見る仕事運とは何が違いますか？",
          ko: "서양 점성술의 10하우스나 MC로 보는 직업운과 무엇이 다른가요?",
        },
        answer: {
          en: "Western astrology mainly reads career from the MC and 10th house within one horoscope. Jyotish also looks at the birth chart's 10th house, but adds a separate divisional chart, the D10, and uses the sidereal zodiac, so signs can sit about one sign apart. This tool shows the D10 part only.",
          hi: "पश्चिमी ज्योतिष मुख्य रूप से एक ही कुंडली के MC और दसवें भाव से करियर पढ़ता है। ज्योतिष भी जन्म-कुंडली का दसवां भाव देखता है, पर साथ में एक अलग वर्ग कुंडली D10 जोड़ता है और निरयण राशिचक्र का उपयोग करता है, इसलिए राशियां लगभग एक राशि अलग हो सकती हैं। यह उपकरण केवल D10 वाला भाग दिखाता है।",
          ja: "西洋占星術は主に一枚のホロスコープのMCと第10ハウスから仕事を読みます。インド占星術も出生図の第10室を見ますが、さらにD10という別の分割図を重ね、サイデリアル黄道を使うため星座が一つずれることもあります。このツールが表示するのはD10の部分です。",
          ko: "서양 점성술은 주로 한 장의 호로스코프에서 MC와 10하우스로 일을 읽습니다. 인도 점성술도 출생 차트의 10하우스를 보지만, 여기에 D10이라는 별도의 분할 차트를 겹치고 항성 황도를 쓰기 때문에 별자리가 하나 어긋날 수도 있습니다. 이 도구가 보여주는 것은 D10 부분입니다.",
        },
      },
      {
        question: {
          en: "Does the result mean I'm unsuited to jobs it doesn't mention?",
          hi: "क्या परिणाम का अर्थ है कि जिन नौकरियों का उल्लेख नहीं है, वे मेरे लिए उपयुक्त नहीं?",
          ja: "結果に出てこない職業は向いていないということですか？",
          ko: "결과에 나오지 않은 직업은 맞지 않는다는 뜻인가요?",
        },
        answer: {
          en: "No. The descriptions are examples of tendencies, not a list of permitted jobs. The same temperament can be put to use in many fields, and experience and learning matter far more than any chart.",
          hi: "नहीं। विवरण प्रवृत्तियों के उदाहरण हैं, अनुमत नौकरियों की सूची नहीं। एक ही स्वभाव कई क्षेत्रों में उपयोगी हो सकता है, और अनुभव व सीख किसी भी कुंडली से कहीं अधिक मायने रखते हैं।",
          ja: "いいえ。説明文は傾向を示す例であり、向いている職業の一覧ではありません。同じ気質はさまざまな分野で活かせますし、経験や学びのほうがチャートよりはるかに大きな意味を持ちます。",
          ko: "아니요. 설명문은 경향을 보여주는 예일 뿐, 맞는 직업의 목록이 아닙니다. 같은 기질은 다양한 분야에서 살릴 수 있으며, 경험과 배움이 차트보다 훨씬 큰 의미를 가집니다.",
        },
      },
      {
        question: {
          en: "Can I use this to decide on a new job or a career change?",
          hi: "क्या मैं नई नौकरी या करियर बदलने का निर्णय इससे ले सकता/सकती हूं?",
          ja: "就職や転職を決めるときに、この結果を使ってもよいですか？",
          ko: "취업이나 이직을 결정할 때 이 결과를 써도 되나요?",
        },
        answer: {
          en: "Please use it only as a prompt for reflecting on your strengths and interests, not as the basis for the decision itself. For real choices about work, we recommend talking to a professional such as a career counsellor. This report is not career or financial advice.",
          hi: "कृपया इसे केवल अपनी क्षमताओं और रुचियों पर विचार करने के संकेत के रूप में उपयोग करें, निर्णय के आधार के रूप में नहीं। काम से जुड़े वास्तविक निर्णयों के लिए करियर काउंसलर जैसे पेशेवर से बात करने की सलाह दी जाती है। यह रिपोर्ट करियर या वित्तीय सलाह नहीं है।",
          ja: "自分の強みや関心を振り返るきっかけとしてお使いいただき、判断そのものの根拠にはしないでください。実際の進路や働き方の決定には、キャリアコンサルタントなどの専門家への相談をおすすめします。このレポートはキャリアや金融に関する助言ではありません。",
          ko: "자신의 강점과 관심사를 돌아보는 계기로만 활용하시고, 판단 자체의 근거로 삼지는 말아 주세요. 실제 진로나 일하는 방식을 결정할 때는 커리어 컨설턴트 등 전문가와 상담하시기를 권합니다. 이 리포트는 커리어나 금융에 관한 조언이 아닙니다.",
        },
      },
    ],
  },
];

export function findToolLanding(slug: string): ToolLanding | undefined {
  return TOOL_LANDINGS.find((tool) => tool.slug === slug);
}

/** Client-safe tile data for one language (see tool-summary.ts). Server-side only. */
export function toolSummaries(language: import("@/lib/i18n/language").AppLanguage): import("@/lib/tools/tool-summary").ToolSummary[] {
  return TOOL_LANDINGS.map((tool) => ({
    slug: tool.slug,
    title: tool.title[language],
    description: tool.description[language],
    useCase: tool.useCase[language],
    ...(tool.resultPanel ? { resultPanel: tool.resultPanel } : {}),
    ...(tool.sections ? { sections: tool.sections } : {}),
  }));
}
