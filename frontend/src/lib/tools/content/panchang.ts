import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/panchang.
 *
 * Japanese-first. What the panel actually shows (PanchangPanel.tsx and the
 * backend /api/v1/panchang endpoint): sunrise time, tithi with its paksha,
 * nakshatra, yoga and karana — all computed for the moment of sunrise on the
 * chosen date, at the latitude/longitude of the visitor's saved profile
 * (the birthplace), in that place's local time zone. Vara (weekday) is not a
 * separate card, and there is no sunset, rahu kalam or muhurta scoring — the
 * copy below must not claim otherwise.
 */
export const panchangLongForm: ToolLongForm = {
  slug: "panchang",
  sections: [
    {
      heading: {
        ja: "パンチャーンガの調べ方（使い方）",
        en: "How to use the panchang tool",
        hi: "पंचांग टूल का उपयोग कैसे करें",
        ko: "판창가 도구 사용 방법",
      },
      body: [
        {
          ja: "このツールが必要とするのは「日付」と「場所」の二つだけです。初めて利用される場合は、まず出生データの入力欄が表示されます。生年月日・出生時刻・出生地を入力して保存すると、そのプロフィールに登録された出生地の緯度・経度が、パンチャーンガを計算する場所として使われます。",
          en: "The tool needs only two things: a date and a place. On your first visit you will see a birth-details form. Once you save your date, time and place of birth, the latitude and longitude of that saved birthplace become the location the panchang is calculated for.",
          hi: "इस टूल को केवल दो चीज़ें चाहिए: एक तारीख और एक स्थान। पहली बार आने पर जन्म विवरण का फ़ॉर्म दिखेगा। जन्म तिथि, समय और स्थान सहेजने के बाद उसी जन्म स्थान का अक्षांश-देशांतर पंचांग की गणना का स्थान बन जाता है।",
          ko: "이 도구에 필요한 것은 날짜와 장소, 두 가지뿐입니다. 처음 이용하시면 출생 정보 입력란이 먼저 표시됩니다. 생년월일·출생 시각·출생지를 입력해 저장하면, 그 프로필에 등록된 출생지의 위도·경도가 판창가를 계산하는 장소로 쓰입니다.",
        },
        {
          ja: "次に、調べたい日付を選び「この日を確認する」を押します。初期値は今日の日付です。数秒で、その日の日の出時刻と、ティティ（パクシャ付き）、ナクシャトラ、ヨーガ、カラナが表示されます。過去や未来の日付も、1800年から2100年までの範囲で確認できます。",
          en: "Next, pick the date you want and press “Check this date”. It starts on today's date. Within a few seconds you will see that day's sunrise time along with the tithi (and its paksha), nakshatra, yoga and karana. Past and future dates between 1800 and 2100 can be checked too.",
          hi: "फिर जो तारीख देखनी है उसे चुनें और “यह तारीख जाँचें” दबाएँ। शुरुआत में आज की तारीख रहती है। कुछ ही सेकंड में उस दिन का सूर्योदय समय और तिथि (पक्ष सहित), नक्षत्र, योग तथा करण दिखाई देंगे। 1800 से 2100 तक की भूत और भविष्य की तारीखें भी देखी जा सकती हैं।",
          ko: "다음으로 확인하고 싶은 날짜를 고르고 '이 날짜 확인하기'를 누릅니다. 기본값은 오늘 날짜입니다. 몇 초 안에 그날의 일출 시각과 티티(팍샤 포함), 낙샤트라, 요가, 카라나가 표시됩니다. 1800년부터 2100년까지의 과거·미래 날짜도 확인할 수 있습니다.",
        },
        {
          ja: "パンチャーンガそのものの計算には、出生時刻は使われません。使われるのは場所だけです。そのため、出生時刻があいまいでも結果には影響しません。ただし、場所は日の出時刻とタイムゾーンを決めるため重要です。",
          en: "The panchang calculation itself does not use your birth time — only the place. An uncertain birth time therefore does not affect the result. The place does matter, though, because it sets the sunrise time and the time zone.",
          hi: "पंचांग की गणना में जन्म समय का उपयोग नहीं होता — केवल स्थान का। इसलिए जन्म समय अनिश्चित हो तब भी परिणाम पर असर नहीं पड़ता। पर स्थान महत्वपूर्ण है, क्योंकि वही सूर्योदय का समय और समय-क्षेत्र तय करता है।",
          ko: "판창가 계산 자체에는 출생 시각이 쓰이지 않고 장소만 쓰입니다. 따라서 출생 시각이 불확실해도 결과에는 영향이 없습니다. 다만 장소는 일출 시각과 시간대를 정하므로 중요합니다.",
        },
      ],
      bullets: [
        {
          ja: "計算の場所は「保存された出生地」です。いまお住まいの地域と出生地が大きく離れている場合、日の出時刻が異なるため、ティティやナクシャトラの切り替わりと重なる日は結果が一つずれることがあります",
          en: "The location is your saved birthplace. If you now live far from where you were born, sunrise differs, so on a day when a tithi or nakshatra changes near dawn the result can shift by one",
          hi: "गणना का स्थान आपका सहेजा गया जन्म स्थान है। यदि आप अब जन्म स्थान से बहुत दूर रहते हैं तो सूर्योदय अलग होगा, और जिस दिन तिथि या नक्षत्र भोर के पास बदलता है उस दिन परिणाम एक आगे-पीछे हो सकता है",
          ko: "계산 장소는 '저장된 출생지'입니다. 지금 사는 곳이 출생지와 멀리 떨어져 있으면 일출 시각이 달라, 티티나 낙샤트라가 새벽 무렵 바뀌는 날에는 결과가 하나 어긋날 수 있습니다",
        },
        {
          ja: "タイムゾーンは場所の緯度・経度から自動で判定され、日の出時刻はその土地の現地時刻で表示されます。日本時間に換算する必要はありません",
          en: "The time zone is detected automatically from the coordinates, and sunrise is shown in that place's local time. There is no need to convert to Japan time",
          hi: "समय-क्षेत्र निर्देशांकों से अपने-आप तय होता है और सूर्योदय उसी स्थान के स्थानीय समय में दिखता है। जापानी समय में बदलने की ज़रूरत नहीं",
          ko: "시간대는 위도·경도로 자동 판별되며, 일출 시각은 그 지역의 현지 시각으로 표시됩니다. 일본 시간으로 환산할 필요는 없습니다",
        },
        {
          ja: "ナクシャトラとヨーガは、ラヒリ方式のアヤナムシャ（現在およそ24度）を用いたサイデリアル（恒星基準）の黄経で計算します。西洋占星術のトロピカル方式で作られた暦とは、ナクシャトラが一つずれることがあります",
          en: "Nakshatra and yoga use sidereal longitudes with the Lahiri ayanamsa (currently about 24°). Compared with an almanac built on the Western tropical zodiac, the nakshatra can differ by one",
          hi: "नक्षत्र और योग लाहिड़ी अयनांश (वर्तमान में लगभग 24°) के साथ निरयण देशांतर से निकाले जाते हैं। पश्चिमी सायन राशिचक्र पर बने पंचांग से नक्षत्र एक भिन्न हो सकता है",
          ko: "낙샤트라와 요가는 라히리 아야남샤(현재 약 24도)를 적용한 항성 기준 황경으로 계산합니다. 서양 점성술의 회귀황도 방식으로 만든 달력과는 낙샤트라가 하나 다를 수 있습니다",
        },
        {
          ja: "「サービスに接続できませんでした」と表示された場合は、計算サーバーが一時的に応答していない状態です。少し時間をおいて、もう一度お試しください",
          en: "If you see “Could not reach the panchang service”, the calculation server is temporarily not responding. Please wait a moment and try again",
          hi: "यदि “पंचांग सेवा से संपर्क नहीं हो सका” दिखे, तो गणना सर्वर अस्थायी रूप से प्रतिक्रिया नहीं दे रहा है। थोड़ी देर बाद पुनः प्रयास करें",
          ko: "'판창가 서비스에 연결할 수 없습니다'라고 표시되면 계산 서버가 일시적으로 응답하지 않는 상태입니다. 잠시 후 다시 시도해 주세요",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される要素の用語集",
        en: "Reading the result: a glossary of what is shown",
        hi: "परिणाम कैसे पढ़ें: दिखाए गए तत्वों की शब्दावली",
        ko: "결과 읽는 법: 표시되는 요소 용어집",
      },
      body: [
        {
          ja: "インドの暦では、一日は真夜中ではなく日の出から始まると考えます。そのためこのツールは、選んだ日付の日の出の瞬間に月と太陽がどこにあるかを計算し、その時点で成立している要素を「その日の」ティティやナクシャトラとして表示します。各要素は一日の途中で切り替わることもありますが、ここに表示されるのは日の出時点の値です。",
          en: "In the Indian calendar a day begins at sunrise, not midnight. So this tool calculates where the Moon and Sun stand at the moment of sunrise on your chosen date, and shows what prevails then as that day's tithi, nakshatra and so on. Elements can change partway through the day, but the values shown here are those at sunrise.",
          hi: "भारतीय पंचांग में दिन आधी रात से नहीं, सूर्योदय से शुरू होता है। इसलिए यह टूल चुनी गई तारीख के सूर्योदय के क्षण पर चंद्रमा और सूर्य की स्थिति निकालता है, और उस समय प्रचलित तत्वों को उस दिन की तिथि, नक्षत्र आदि के रूप में दिखाता है। दिन के बीच तत्व बदल भी सकते हैं, पर यहाँ सूर्योदय के समय के मान दिखाए जाते हैं।",
          ko: "인도 달력에서는 하루가 자정이 아니라 일출에서 시작한다고 봅니다. 그래서 이 도구는 선택한 날짜의 일출 순간에 달과 태양이 어디에 있는지 계산하고, 그 시점에 성립하는 요소를 '그날의' 티티·낙샤트라 등으로 표시합니다. 요소는 하루 도중에 바뀌기도 하지만, 여기 표시되는 것은 일출 시점의 값입니다.",
        },
        {
          ja: "ティティ、ヨーガ、カラナの名称は、サンスクリット語のローマ字表記（例：Panchami、Shobhana、Bava）で表示されます。ナクシャトラはカタカナで表示されます。",
          en: "Tithi, yoga and karana names appear as Sanskrit transliterations (for example Panchami, Shobhana, Bava). The nakshatra is shown in your page language.",
          hi: "तिथि, योग और करण के नाम संस्कृत के रोमन लिप्यंतरण (जैसे Panchami, Shobhana, Bava) में दिखते हैं। नक्षत्र पृष्ठ की भाषा में दिखाया जाता है।",
          ko: "티티, 요가, 카라나의 이름은 산스크리트어 로마자 표기(예: Panchami, Shobhana, Bava)로 표시됩니다. 낙샤트라는 페이지 언어로 표시됩니다.",
        },
        {
          ja: "例えば（あくまで説明用の例です）、ある日の結果が「日の出 6:20／ティティ Panchami・シュクラ・パクシャ／ナクシャトラ ローヒニー／ヨーガ Shobhana／カラナ Bava」だったとします。これは、日の出の時点で月が新月から五番目の太陰日にあって満ちていく途中であり、月はローヒニーの区画にあり、太陽と月の黄経の和が五番目のヨーガ、ティティの前半がバヴァ・カラナにあたる、という意味になります。",
          en: "For example (purely illustrative), suppose a day shows “Sunrise 6:20 / Tithi Panchami, Shukla Paksha / Nakshatra Rohini / Yoga Shobhana / Karana Bava”. That means at sunrise the Moon was in the fifth lunar day after new moon and still waxing, it stood in the Rohini division, the sum of the Sun's and Moon's longitudes fell in the fifth yoga, and the first half of the tithi was the Bava karana.",
          hi: "उदाहरण के लिए (केवल समझाने हेतु), मान लीजिए किसी दिन का परिणाम है “सूर्योदय 6:20 / तिथि पंचमी, शुक्ल पक्ष / नक्षत्र रोहिणी / योग शोभन / करण बव”। इसका अर्थ है कि सूर्योदय पर चंद्रमा अमावस्या के बाद पाँचवीं तिथि में बढ़ रहा था, रोहिणी नक्षत्र में था, सूर्य-चंद्र देशांतर का योग पाँचवाँ योग था, और तिथि का पहला आधा बव करण था।",
          ko: "예를 들어(어디까지나 설명용 예시입니다) 어떤 날의 결과가 '일출 6:20 / 티티 Panchami·슈클라 팍샤 / 낙샤트라 로히니 / 요가 Shobhana / 카라나 Bava'라고 합시다. 이는 일출 시점에 달이 신월 후 다섯 번째 태음일에 있으며 차오르는 중이고, 로히니 구획에 있으며, 태양과 달의 황경 합이 다섯 번째 요가, 티티의 전반이 바바 카라나에 해당한다는 뜻입니다.",
        },
      ],
      bullets: [
        {
          ja: "日の出：選んだ日付の、保存された場所における日の出の現地時刻です。すべての要素はこの瞬間を基準に計算されます。極地など日の出が計算できない場合は表示されず、現地の正午を基準にします",
          en: "Sunrise: the local time of sunrise on the chosen date at your saved location. Every element is calculated for this moment. Where sunrise cannot be computed, such as polar latitudes, it is omitted and local noon is used instead",
          hi: "सूर्योदय: चुनी गई तारीख पर सहेजे गए स्थान का स्थानीय सूर्योदय समय। सभी तत्व इसी क्षण के लिए निकाले जाते हैं। जहाँ सूर्योदय की गणना संभव न हो, जैसे ध्रुवीय अक्षांश, वहाँ यह नहीं दिखता और स्थानीय दोपहर ली जाती है",
          ko: "일출: 선택한 날짜, 저장된 장소의 일출 현지 시각입니다. 모든 요소는 이 순간을 기준으로 계산됩니다. 극지처럼 일출을 계산할 수 없는 곳에서는 표시되지 않고 현지 정오를 기준으로 합니다",
        },
        {
          ja: "ティティ（太陰日）：月が太陽から12度離れるごとに一つ進む「月の日」です。一か月に30あり、満月をプールニマー（Purnima）、新月をアマーヴァーシャー（Amavasya）と呼びます",
          en: "Tithi (lunar day): advances by one each time the Moon moves 12° further from the Sun. There are 30 in a lunar month; the full moon tithi is Purnima and the new moon tithi is Amavasya",
          hi: "तिथि (चंद्र दिवस): चंद्रमा के सूर्य से हर 12° और दूर जाने पर एक तिथि आगे बढ़ती है। एक चंद्र मास में 30 तिथियाँ होती हैं; पूर्णिमा और अमावस्या इनके छोर हैं",
          ko: "티티(태음일): 달이 태양에서 12도 멀어질 때마다 하나씩 나아가는 '달의 날'입니다. 한 달에 30개가 있으며, 보름을 푸르니마(Purnima), 신월을 아마바스야(Amavasya)라고 합니다",
        },
        {
          ja: "パクシャ：ティティに添えて表示されます。新月から満月までの満ちていく半月がシュクラ・パクシャ、満月から新月までの欠けていく半月がクリシュナ・パクシャで、それぞれに15のティティがあります",
          en: "Paksha: shown with the tithi. The waxing half from new to full moon is Shukla Paksha, the waning half from full to new moon is Krishna Paksha, each holding 15 tithis",
          hi: "पक्ष: तिथि के साथ दिखाया जाता है। अमावस्या से पूर्णिमा तक बढ़ता आधा मास शुक्ल पक्ष और पूर्णिमा से अमावस्या तक घटता आधा कृष्ण पक्ष है, प्रत्येक में 15 तिथियाँ",
          ko: "팍샤: 티티와 함께 표시됩니다. 신월에서 보름까지 차오르는 반달이 슈클라 팍샤, 보름에서 신월까지 이지러지는 반달이 크리슈나 팍샤이며, 각각 15개의 티티가 있습니다",
        },
        {
          ja: "ナクシャトラ（月宿）：日の出の時点で月が位置している、黄道を27等分した区画（一つ13度20分）です。日本の宿曜の二十七宿と同じ区分にあたります",
          en: "Nakshatra (lunar mansion): the one of 27 equal divisions of the ecliptic (13°20′ each) the Moon occupies at sunrise. It is the same division as the twenty-seven mansions of Japanese sukuyō",
          hi: "नक्षत्र: क्रांतिवृत्त के 27 बराबर भागों (प्रत्येक 13°20′) में से वह भाग जिसमें सूर्योदय पर चंद्रमा होता है। यह जापानी सुकुयो पद्धति के सत्ताईस नक्षत्र-गृहों जैसा ही विभाजन है",
          ko: "낙샤트라(월수): 일출 시점에 달이 있는, 황도를 27등분한 구획(하나당 13도 20분)입니다. 일본 수쿠요의 27수와 같은 구분입니다",
        },
        {
          ja: "ヨーガ：太陽と月のサイデリアル黄経を足し合わせ、その和を13度20分ごとに区切った27の区分です。Vishkambha から Vaidhriti まであり、星座の名前ではなく、その日の性質を表す伝統的な指標です",
          en: "Yoga: the sum of the Sun's and Moon's sidereal longitudes, divided into 27 segments of 13°20′. They run from Vishkambha to Vaidhriti, and describe the quality of the day rather than any constellation",
          hi: "योग: सूर्य और चंद्रमा के निरयण देशांतरों का योग, 13°20′ के 27 खंडों में बाँटा गया। विष्कम्भ से वैधृति तक ये दिन के स्वभाव का पारंपरिक सूचक हैं, किसी तारामंडल का नाम नहीं",
          ko: "요가: 태양과 달의 항성 황경을 더한 값을 13도 20분씩 나눈 27개의 구분입니다. Vishkambha부터 Vaidhriti까지 있으며, 별자리 이름이 아니라 그날의 성질을 나타내는 전통적인 지표입니다",
        },
        {
          ja: "カラナ：ティティを半分に分けたもの（月と太陽の差6度ごと）で、一か月に60あります。Bava、Balava、Kaulava、Taitila、Garija、Vanija、Vishti の七つが繰り返され、月の初めと終わりに Kimstughna、Shakuni、Chatushpada、Naga の四つが固定で入ります",
          en: "Karana: half a tithi (every 6° of Moon–Sun separation), 60 in a lunar month. Seven movable karanas — Bava, Balava, Kaulava, Taitila, Garija, Vanija, Vishti — repeat, and four fixed ones, Kimstughna, Shakuni, Chatushpada and Naga, sit at the start and end of the month",
          hi: "करण: तिथि का आधा भाग (चंद्र-सूर्य अंतर के हर 6°), एक मास में 60। बव, बालव, कौलव, तैतिल, गर, वणिज, विष्टि — ये सात चर करण दोहराते हैं, और किंस्तुघ्न, शकुनि, चतुष्पद, नाग — ये चार स्थिर करण मास के आरंभ और अंत में आते हैं",
          ko: "카라나: 티티를 절반으로 나눈 것(달과 태양의 차 6도마다)으로 한 달에 60개입니다. Bava, Balava, Kaulava, Taitila, Garija, Vanija, Vishti 일곱 개가 반복되고, 달의 처음과 끝에 Kimstughna, Shakuni, Chatushpada, Naga 네 개가 고정으로 들어갑니다",
        },
        {
          ja: "ヴァーラ（曜日）：古典的な「五つの肢体」の一つですが、このツールでは別枠では表示しません。選んだ日付の曜日がそのままヴァーラにあたります（ただしインドの暦では日の出で日が変わります）",
          en: "Vara (weekday): one of the classical five limbs, but not shown as a separate card here. It is simply the weekday of the date you chose (keeping in mind that the Indian day turns over at sunrise)",
          hi: "वार: शास्त्रीय पाँच अंगों में से एक, पर यहाँ अलग कार्ड के रूप में नहीं दिखाया जाता। चुनी गई तारीख का सप्ताह-दिवस ही वार है (ध्यान रहे, भारतीय दिन सूर्योदय पर बदलता है)",
          ko: "바라(요일): 고전적인 '다섯 지체' 중 하나지만, 이 도구에서는 별도 카드로 표시하지 않습니다. 선택한 날짜의 요일이 그대로 바라에 해당합니다(단, 인도 달력에서는 일출에 날이 바뀝니다)",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：パンチャーンガと西洋の暦・占星術の違い",
        en: "Background: how the panchang differs from Western calendars and astrology",
        hi: "पृष्ठभूमि: पंचांग पश्चिमी कैलेंडर और ज्योतिष से कैसे अलग है",
        ko: "배경 지식: 판창가와 서양 달력·점성술의 차이",
      },
      body: [
        {
          ja: "パンチャーンガ（Panchanga）はサンスクリット語で「五つの肢体」を意味し、古典的にはティティ、ヴァーラ（曜日）、ナクシャトラ、ヨーガ、カラナの五つで一日を記述します。インドでは今も、祭日や儀式の日取りを決める暦として広く用いられています。",
          en: "Panchanga is Sanskrit for “five limbs”. Classically a day is described by five elements: tithi, vara (weekday), nakshatra, yoga and karana. In India it is still widely used as the calendar for fixing festivals and the dates of ceremonies.",
          hi: "पंचांग संस्कृत में “पाँच अंग” है। शास्त्रीय रूप से दिन का वर्णन पाँच तत्वों से होता है: तिथि, वार, नक्षत्र, योग और करण। भारत में आज भी त्योहारों और संस्कारों की तिथियाँ तय करने के लिए इसका व्यापक उपयोग होता है।",
          ko: "판창가(Panchanga)는 산스크리트어로 '다섯 지체'를 뜻하며, 고전적으로는 티티, 바라(요일), 낙샤트라, 요가, 카라나 다섯 가지로 하루를 기술합니다. 인도에서는 지금도 축제일이나 의식의 날짜를 정하는 달력으로 널리 쓰입니다.",
        },
        {
          ja: "西洋占星術の多くは、春分点を起点とするトロピカル（回帰）黄道を使い、個人の出生図を中心に扱います。一方パンチャーンガは、恒星を基準とするサイデリアル黄道の上で、太陽と月の関係から「日そのものの性質」を記述する暦です。主役は個人ではなく、その日です。",
          en: "Most Western astrology uses the tropical zodiac anchored to the spring equinox and centres on the individual birth chart. The panchang instead works on the star-anchored sidereal zodiac and describes the quality of the day itself from the relationship between Sun and Moon. Its subject is the day, not the person.",
          hi: "अधिकांश पश्चिमी ज्योतिष वसंत विषुव से जुड़े सायन राशिचक्र का उपयोग करता है और व्यक्ति की जन्म कुंडली पर केंद्रित होता है। पंचांग तारों पर आधारित निरयण राशिचक्र पर, सूर्य और चंद्रमा के संबंध से स्वयं दिन के स्वभाव का वर्णन करता है। इसका विषय व्यक्ति नहीं, दिन है।",
          ko: "서양 점성술의 상당수는 춘분점을 기점으로 하는 회귀황도를 쓰며 개인의 출생 차트를 중심으로 다룹니다. 반면 판창가는 항성을 기준으로 하는 항성황도 위에서, 태양과 달의 관계로 '그날 자체의 성질'을 기술하는 달력입니다. 주인공은 개인이 아니라 그날입니다.",
        },
        {
          ja: "興味深いことに、ティティとカラナは月と太陽の「差」だけで決まるため、トロピカルかサイデリアルかの違いの影響を受けません。影響を受けるのは、月の絶対位置を使うナクシャトラと、太陽と月の和を使うヨーガです。日本の曜日名（日・月・火・水・木・金・土）が七つの天体に対応しているのも、インドを含む古代の天文学に共通する考え方に由来しています。",
          en: "Interestingly, tithi and karana depend only on the difference between Moon and Sun, so the tropical–sidereal question does not affect them. It does affect the nakshatra, which uses the Moon's absolute position, and the yoga, which uses the sum of the two. The Japanese weekday names, matched to seven celestial bodies, likewise trace back to a planetary-week idea shared with ancient Indian astronomy.",
          hi: "रोचक बात यह है कि तिथि और करण केवल चंद्रमा और सूर्य के अंतर से तय होते हैं, इसलिए सायन-निरयण का अंतर इन पर असर नहीं डालता। असर पड़ता है नक्षत्र पर, जो चंद्रमा की निरपेक्ष स्थिति लेता है, और योग पर, जो दोनों का योग लेता है। जापानी सप्ताह-दिवसों के नाम भी सात ग्रहों से जुड़े हैं, जो प्राचीन भारतीय खगोल से साझा विचार है।",
          ko: "흥미롭게도 티티와 카라나는 달과 태양의 '차이'만으로 정해지므로 회귀황도냐 항성황도냐의 영향을 받지 않습니다. 영향을 받는 것은 달의 절대 위치를 쓰는 낙샤트라와 태양·달의 합을 쓰는 요가입니다. 일본의 요일 이름(일·월·화·수·목·금·토)이 일곱 천체에 대응하는 것도 인도를 포함한 고대 천문학에 공통된 발상에서 비롯되었습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "文化的背景：パンチャーンガと日取り（ムフールタ）",
        en: "Cultural background: the panchang and choosing dates (muhurta)",
        hi: "सांस्कृतिक पृष्ठभूमि: पंचांग और मुहूर्त",
        ko: "문화적 배경: 판창가와 날짜 선택(무후르타)",
      },
      body: [
        {
          ja: "インドでは、結婚式、新居への入居、開業などの日取りを決める際に、パンチャーンガを参照する習慣があります。この日取りの技法をムフールタと呼びます。日本で大安や友引を気にする感覚に少し似ていますが、ムフールタは天体の実際の位置から導かれる複数の要素を組み合わせて判断する点が異なります。",
          en: "In India it is customary to consult the panchang when fixing the date of a wedding, moving into a new home or opening a business. This art of choosing a time is called muhurta. It is a little like the Japanese habit of minding taian or tomobiki, but muhurta combines several elements derived from the actual positions of the Sun and Moon.",
          hi: "भारत में विवाह, गृह-प्रवेश या व्यवसाय आरंभ की तिथि तय करते समय पंचांग देखने की परंपरा है। समय चुनने की इस विद्या को मुहूर्त कहते हैं। यह जापान में ताइआन या तोमोबिकी देखने जैसा कुछ है, पर मुहूर्त सूर्य-चंद्र की वास्तविक स्थिति से निकले कई तत्वों को मिलाकर देखा जाता है।",
          ko: "인도에서는 결혼식, 새집 입주, 개업 등의 날짜를 정할 때 판창가를 참고하는 관습이 있습니다. 이 날짜 선택의 기법을 무후르타라고 합니다. 일본에서 대안이나 우인을 신경 쓰는 감각과 조금 비슷하지만, 무후르타는 천체의 실제 위치에서 도출한 여러 요소를 조합해 판단한다는 점이 다릅니다.",
        },
        {
          ja: "以下は、伝統の中で語られてきた代表的な考え方の一部です。文化的な背景としてご紹介するもので、「この日にしなければならない」「この日は避けるべきだ」という指示ではありません。実際のムフールタは、本人の生まれナクシャトラとの関係なども含めて総合的に見るもので、このツールはその判定までは行いません。",
          en: "Below are a few of the ideas commonly found in the tradition. They are offered as cultural background, not as instructions to do or avoid anything on a given day. A real muhurta also weighs things such as the relationship to the person's own birth nakshatra, and this tool does not make that judgement.",
          hi: "नीचे परंपरा में प्रचलित कुछ विचार दिए गए हैं। ये सांस्कृतिक पृष्ठभूमि के रूप में हैं, किसी दिन कुछ करने या न करने का निर्देश नहीं। वास्तविक मुहूर्त में व्यक्ति के जन्म नक्षत्र से संबंध जैसी बातें भी देखी जाती हैं, और यह टूल वह निर्णय नहीं करता।",
          ko: "아래는 전통 속에서 이야기되어 온 대표적인 생각의 일부입니다. 문화적 배경으로 소개하는 것이며, '이날 해야 한다', '이날은 피해야 한다'는 지시가 아닙니다. 실제 무후르타는 본인의 출생 낙샤트라와의 관계 등도 함께 종합적으로 보며, 이 도구는 그 판정까지는 하지 않습니다.",
        },
      ],
      bullets: [
        {
          ja: "シュクラ・パクシャ（満ちていく月）の期間は、新しいことを始める時期として好まれる傾向があります",
          en: "The waxing Shukla Paksha has tended to be preferred as a time for beginning new things",
          hi: "शुक्ल पक्ष को नए कार्य आरंभ करने के लिए प्रायः पसंद किया जाता रहा है",
          ko: "슈클라 팍샤(차오르는 달) 기간은 새로운 일을 시작하는 시기로 선호되는 경향이 있습니다",
        },
        {
          ja: "第4・第9・第14ティティ（Chaturthi、Navami、Chaturdashi）は「リクタ（空の）ティティ」と呼ばれ、始まりの日取りには伝統的に選ばれにくいとされます",
          en: "The 4th, 9th and 14th tithis (Chaturthi, Navami, Chaturdashi) are called rikta, “empty”, tithis and are traditionally less favoured for beginnings",
          hi: "चतुर्थी, नवमी और चतुर्दशी को रिक्ता तिथियाँ कहा जाता है और परंपरा में शुभारंभ के लिए इन्हें कम चुना जाता है",
          ko: "제4·제9·제14 티티(Chaturthi, Navami, Chaturdashi)는 '릭타(빈) 티티'라 불리며, 시작하는 날로는 전통적으로 잘 선택되지 않습니다",
        },
        {
          ja: "カラナの Vishti（バドラとも呼ばれます）は、祝い事の日取りでは避けられることが多い時間帯です",
          en: "The Vishti karana (also called Bhadra) is a span often avoided when timing celebrations",
          hi: "विष्टि करण (जिसे भद्रा भी कहते हैं) को मांगलिक कार्यों के समय प्रायः टाला जाता है",
          ko: "카라나 중 Vishti(바드라라고도 함)는 경사의 날짜를 정할 때 피하는 경우가 많은 시간대입니다",
        },
        {
          ja: "ヨーガの Vyatipata と Vaidhriti は、古典の中で慎重に扱われるヨーガとして知られています",
          en: "The Vyatipata and Vaidhriti yogas are known in the classical texts as yogas treated with caution",
          hi: "व्यतीपात और वैधृति योग शास्त्रों में सावधानी से देखे जाने वाले योगों के रूप में प्रसिद्ध हैं",
          ko: "요가 중 Vyatipata와 Vaidhriti는 고전에서 신중하게 다루는 요가로 알려져 있습니다",
        },
        {
          ja: "どの要素も一日の途中で切り替わるため、伝統的な日取りでは「日付」だけでなく「時間帯」まで見るのが一般的です",
          en: "Because every element can change during the day, traditional date-setting usually looks at the time window, not just the date",
          hi: "चूँकि हर तत्व दिन के बीच बदल सकता है, पारंपरिक मुहूर्त में केवल तारीख नहीं, समय-खंड भी देखा जाता है",
          ko: "어떤 요소든 하루 도중에 바뀌므로, 전통적인 날짜 선택에서는 '날짜'뿐 아니라 '시간대'까지 보는 것이 일반적입니다",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって（免責）",
        en: "Before you use this (disclaimer)",
        hi: "उपयोग से पहले (अस्वीकरण)",
        ko: "이용 시 안내(면책)",
      },
      body: [
        {
          ja: "パンチャーンガは、インドの文化と暦の伝統を知り、日々の暮らしを振り返るきっかけとして楽しんでいただくためのものです。医療・法律・金融などの判断の代わりになるものではありません。大切な予定は、ご自身やご家族の事情、専門家の助言を優先して決めてください。",
          en: "The panchang is offered as a way to explore Indian calendrical tradition and as a prompt for reflection in daily life. It is not a substitute for medical, legal or financial advice. Please decide important plans on the basis of your own and your family's circumstances and professional advice.",
          hi: "पंचांग भारतीय संस्कृति और कालगणना की परंपरा को जानने तथा दैनिक जीवन पर विचार करने के आनंद के लिए है। यह चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है। महत्वपूर्ण योजनाएँ अपनी और परिवार की परिस्थितियों तथा विशेषज्ञ सलाह को प्राथमिकता देकर तय करें।",
          ko: "판창가는 인도의 문화와 달력 전통을 알고, 일상을 돌아보는 계기로 즐기시기 위한 것입니다. 의료·법률·금융 등의 판단을 대신하지 않습니다. 중요한 일정은 본인과 가족의 사정, 전문가의 조언을 우선해 정해 주세요.",
        },
        {
          ja: "どの日にも、伝統的に好まれる要素とそうでない要素が混ざっています。特定の日を「悪い日」として恐れる必要はありません。暦は、その日の流れに少し意識を向けるための道具として、気軽にお使いください。",
          en: "Every day mixes elements the tradition favours with ones it does not. There is no need to fear any particular day as a “bad day”. Use the calendar lightly, as a tool for paying a little attention to the flow of the day.",
          hi: "हर दिन में परंपरा द्वारा पसंद और कम पसंद किए जाने वाले तत्व मिले-जुले होते हैं। किसी विशेष दिन को “बुरा दिन” मानकर डरने की ज़रूरत नहीं। पंचांग को दिन की लय पर थोड़ा ध्यान देने के साधन की तरह सहजता से उपयोग करें।",
          ko: "어떤 날에도 전통적으로 선호되는 요소와 그렇지 않은 요소가 섞여 있습니다. 특정한 날을 '나쁜 날'로 두려워할 필요는 없습니다. 달력은 그날의 흐름에 조금 주의를 기울이는 도구로 가볍게 사용해 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "関連ページ",
        en: "Related pages",
        hi: "संबंधित पृष्ठ",
        ko: "관련 페이지",
      },
      body: [
        {
          ja: "その日のナクシャトラに興味を持たれた方は、ご自身の生まれナクシャトラや月の星座もあわせて調べてみてください。",
          en: "If the day's nakshatra caught your interest, try looking up your own birth nakshatra and Moon sign as well.",
          hi: "यदि दिन के नक्षत्र में आपकी रुचि जगी है, तो अपना जन्म नक्षत्र और चंद्र राशि भी देखें।",
          ko: "그날의 낙샤트라에 관심이 생기셨다면, 본인의 출생 낙샤트라와 달 별자리도 함께 알아보세요.",
        },
      ],
      links: [
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ診断（生まれナクシャトラを調べる）",
            en: "Nakshatra finder (your birth nakshatra)",
            hi: "नक्षत्र खोजक (आपका जन्म नक्षत्र)",
            ko: "낙샤트라 찾기(출생 낙샤트라)",
          },
        },
        {
          href: "/nakshatras",
          label: {
            ja: "27ナクシャトラ一覧",
            en: "All 27 nakshatras",
            hi: "सभी 27 नक्षत्र",
            ko: "27 낙샤트라 목록",
          },
        },
        {
          href: "/tools/moon-sign",
          label: {
            ja: "月星座（ラーシ）を調べる",
            en: "Find your Moon sign",
            hi: "अपनी चंद्र राशि जानें",
            ko: "달 별자리 확인하기",
          },
        },
        {
          href: "/tools/sukuyo",
          label: {
            ja: "宿曜占星術で本命宿を調べる",
            en: "Find your sukuyō birth mansion",
            hi: "सुकुयो जन्म नक्षत्र जानें",
            ko: "수쿠요 본명수 확인하기",
          },
        },
        {
          href: "/tools/transit-now",
          label: {
            ja: "現在の惑星の配置（トランジット）",
            en: "Current planetary transits",
            hi: "वर्तमान ग्रह गोचर",
            ko: "현재 행성 트랜싯",
          },
        },
      ],
    },
  ],
};
