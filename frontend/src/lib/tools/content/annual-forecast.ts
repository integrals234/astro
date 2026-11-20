import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/annual-forecast (Varshaphala / sidereal solar
 * return).
 *
 * Written Japanese-first, matching sukuyo.ts and birth-chart.ts. Scope is
 * deliberately limited to what AnnualForecastPanel + the backend endpoint
 * actually return: the return moment (local time at the birth location's
 * timezone), the return chart's ascendant, and the per-planet grid (whole-sign
 * house from the ascendant, sign + degree, sign lord, dignity, retrograde,
 * nakshatra + pada). No Muntha, year lord or Mudda dasha is computed, so the
 * copy says so plainly rather than describing them as outputs.
 *
 * Framing throughout: a yearly chart offers themes for reflection and
 * planning, not fixed predictions.
 */
export const annualForecastLongForm: ToolLongForm = {
  slug: "annual-forecast",
  sections: [
    {
      heading: {
        ja: "年運チャート（ヴァルシャファラ）でわかること",
        en: "What the annual chart (Varshaphala) shows",
        hi: "वार्षिक कुंडली (वर्षफल) से क्या पता चलता है",
        ko: "연간 차트(바르샤팔라)로 알 수 있는 것",
      },
      body: [
        {
          ja: "ヴァルシャファラは、毎年の誕生日前後に太陽が出生時とまったく同じ位置へ戻ってくる瞬間を基準に作る「その一年のためのチャート」です。インドではタージク占星術の流れをくむ方法として知られ、出生図が人生全体の設計図だとすれば、年運チャートはその中の一年分の章立てにあたります。",
          en: "Varshaphala is a chart made for one year, cast for the moment around each birthday when the Sun returns to exactly the position it held at birth. In India it is known as a method from the Tajik tradition. If the birth chart is the plan of a whole life, the annual chart is one year's chapter within it.",
          hi: "वर्षफल एक वर्ष के लिए बनाई गई कुंडली है, जो हर जन्मदिन के आसपास उस क्षण के लिए बनती है जब सूर्य ठीक उसी स्थान पर लौटता है जहाँ वह जन्म के समय था। भारत में यह ताजिक परंपरा की पद्धति के रूप में जानी जाती है। यदि जन्म कुंडली पूरे जीवन का नक्शा है, तो वार्षिक कुंडली उसमें एक वर्ष का अध्याय है।",
          ko: "바르샤팔라는 매년 생일 즈음 태양이 출생 당시와 정확히 같은 위치로 돌아오는 순간을 기준으로 작성하는 '그 한 해를 위한 차트'입니다. 인도에서는 타지크 점성술 계열의 방법으로 알려져 있습니다. 출생 차트가 인생 전체의 설계도라면, 연간 차트는 그 안의 한 해 분량의 장(章)에 해당합니다.",
        },
        {
          ja: "このツールが表示するのは、回帰の瞬間の日時、その瞬間のアセンダント（ラグナ）、そして九つの惑星それぞれのハウス・星座と度数・支配星・品位・逆行の有無・ナクシャトラとパダです。今年を含む三年分から年を選べるので、誕生日を迎える前に次の一年の傾向を眺めたり、これまでの一年を振り返ったりするのに向いています。",
          en: "The tool shows the date and time of the return, the ascendant (Lagna) at that moment, and for each of the nine grahas its house, sign and degree, sign lord, dignity, retrograde status, and nakshatra with pada. You can choose from three years starting with the current one, so it suits looking at the themes of the coming year before your birthday, or looking back over the year just passed.",
          hi: "यह उपकरण वापसी की तिथि और समय, उस क्षण का लग्न, और नौ ग्रहों में से प्रत्येक का भाव, राशि और अंश, राशि स्वामी, बल (उच्च/नीच आदि), वक्री स्थिति तथा नक्षत्र और पाद दिखाता है। चालू वर्ष सहित तीन वर्षों में से चुन सकते हैं, इसलिए जन्मदिन से पहले आने वाले वर्ष के विषयों को देखने या बीते वर्ष पर विचार करने के लिए यह उपयुक्त है।",
          ko: "이 도구는 회귀 순간의 날짜와 시각, 그 순간의 상승궁(라그나), 그리고 아홉 행성 각각의 하우스, 별자리와 도수, 지배성, 품위, 역행 여부, 낙샤트라와 파다를 보여 줍니다. 올해를 포함한 3년 중에서 연도를 고를 수 있어, 생일 전에 다가올 한 해의 흐름을 살펴보거나 지난 한 해를 되돌아보는 데 알맞습니다.",
        },
        {
          ja: "大切なのは、年運チャートを「当たり外れを確かめる予言」ではなく、「この一年、どのテーマに意識を向けるとよいか」を考えるための材料として使うことです。計画を立てるときの一つの視点として、気軽にお役立てください。",
          en: "The key is to use the annual chart not as a prophecy to check off, but as material for thinking about which themes deserve your attention this year. Treat it lightly, as one perspective when making plans.",
          hi: "मुख्य बात यह है कि वार्षिक कुंडली को जाँचने वाली भविष्यवाणी नहीं, बल्कि इस बात पर विचार करने की सामग्री मानें कि इस वर्ष किन विषयों पर ध्यान देना उपयोगी होगा। योजना बनाते समय इसे एक दृष्टिकोण के रूप में सहजता से लें।",
          ko: "중요한 것은 연간 차트를 '맞았는지 확인하는 예언'이 아니라 '올해 어떤 주제에 관심을 두면 좋을지' 생각하는 재료로 쓰는 것입니다. 계획을 세울 때 하나의 관점으로 가볍게 활용해 보세요.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方と、よくある入力ミス",
        en: "How to use it, and common input mistakes",
        hi: "उपयोग कैसे करें, और आम गलतियाँ",
        ko: "사용 방법과 흔한 입력 실수",
      },
      body: [
        {
          ja: "年運チャートは出生図をもとに計算するため、まず出生データが必要です。手順は次のとおりです。",
          en: "Because the annual chart is calculated from the birth chart, your birth details come first. The steps are as follows.",
          hi: "वार्षिक कुंडली जन्म कुंडली के आधार पर बनती है, इसलिए पहले जन्म विवरण आवश्यक है। चरण इस प्रकार हैं।",
          ko: "연간 차트는 출생 차트를 바탕으로 계산하므로 먼저 출생 정보가 필요합니다. 순서는 다음과 같습니다.",
        },
      ],
      bullets: [
        {
          ja: "手順1：生年月日・出生時刻・出生地を入力して保存します（すでにチャートを作成済みなら、その情報がそのまま使われます）。",
          en: "Step 1: Enter and save your date, time and place of birth (if you have already made a chart, those details are used as they are).",
          hi: "चरण 1: जन्म तिथि, समय और स्थान दर्ज करके सहेजें (यदि आप पहले ही कुंडली बना चुके हैं, तो वही विवरण उपयोग होगा)।",
          ko: "1단계: 생년월일, 출생 시각, 출생지를 입력해 저장합니다(이미 차트를 만들었다면 그 정보가 그대로 사용됩니다).",
        },
        {
          ja: "手順2：見たい年を選びます。今年・来年・再来年の三つから選べます。",
          en: "Step 2: Choose the year you want to see — this year, next year, or the year after.",
          hi: "चरण 2: देखने के लिए वर्ष चुनें — इस वर्ष, अगले वर्ष या उसके बाद का वर्ष।",
          ko: "2단계: 보고 싶은 연도를 고릅니다. 올해, 내년, 내후년 중에서 선택할 수 있습니다.",
        },
        {
          ja: "手順3：「この年のチャートを作成」を押すと、回帰の瞬間とその時点の惑星配置が表示されます。",
          en: "Step 3: Press \"Compute this year's chart\" to see the return moment and the planetary positions at that time.",
          hi: "चरण 3: \"इस वर्ष की कुंडली बनाएं\" दबाएँ, वापसी का क्षण और उस समय की ग्रह स्थिति दिखाई देगी।",
          ko: "3단계: '이 연도의 차트 계산하기'를 누르면 회귀 순간과 그 시점의 행성 배치가 표시됩니다.",
        },
        {
          ja: "出生時刻が不明・おおよその場合：太陽は一日に約1度しか動かないため、回帰の日付はほぼ変わりません。ただし回帰の時刻は出生時刻のずれとほぼ同じだけずれ、アセンダントは約2時間で星座が変わるので、ラグナとハウスは参考程度にとどめてください。",
          en: "If your birth time is unknown or approximate: the Sun moves only about one degree a day, so the return date barely changes. But the return time shifts by roughly as much as your birth-time error, and the ascendant changes sign about every two hours, so treat the Lagna and houses as indicative only.",
          hi: "यदि जन्म समय अज्ञात या अनुमानित है: सूर्य दिन में लगभग एक अंश ही चलता है, इसलिए वापसी की तिथि लगभग नहीं बदलती। पर वापसी का समय लगभग उतना ही खिसकता है जितनी जन्म समय में त्रुटि है, और लग्न लगभग हर दो घंटे में राशि बदलता है, इसलिए लग्न और भावों को केवल संकेत मानें।",
          ko: "출생 시각을 모르거나 대략적인 경우: 태양은 하루에 약 1도만 움직이므로 회귀 날짜는 거의 바뀌지 않습니다. 다만 회귀 시각은 출생 시각의 오차만큼 거의 그대로 어긋나고, 상승궁은 약 2시간마다 별자리가 바뀌므로 라그나와 하우스는 참고 정도로만 보세요.",
        },
        {
          ja: "出生地とタイムゾーン：出生時刻は「生まれた土地の現地時刻」で入力してください。海外生まれの方が日本時間に換算して入力すると、計算がずれます。表示される回帰の日時も、出生地のタイムゾーンでの現地時刻です。",
          en: "Place of birth and time zone: enter your birth time as local time at the place you were born. If you were born abroad and convert it to Japan time, the calculation will be off. The return date and time shown are also local time in your birthplace's time zone.",
          hi: "जन्म स्थान और समय क्षेत्र: जन्म समय जन्म स्थान के स्थानीय समय में दर्ज करें। विदेश में जन्मे लोग इसे किसी दूसरे देश के समय में बदलकर दर्ज करें तो गणना गलत होगी। दिखाई गई वापसी की तिथि और समय भी जन्म स्थान के समय क्षेत्र का स्थानीय समय है।",
          ko: "출생지와 시간대: 출생 시각은 '태어난 곳의 현지 시각'으로 입력하세요. 해외에서 태어난 분이 일본 시간 등으로 환산해 입력하면 계산이 어긋납니다. 표시되는 회귀 날짜와 시각도 출생지 시간대의 현지 시각입니다.",
        },
        {
          ja: "サイデリアル方式であること：このツールはラヒリ・アヤナムシャを用いた恒星黄道で計算します。西洋占星術のトロピカル方式とは約24度の差があるため、惑星の星座が西洋式の表示より一つ前にずれて見えることがありますが、計算の誤りではありません。",
          en: "It uses the sidereal zodiac: the tool calculates in the sidereal zodiac with the Lahiri ayanamsa. Because there is a gap of about 24 degrees from the tropical zodiac of Western astrology, a planet's sign may look one sign earlier than in a Western chart. This is not a calculation error.",
          hi: "निरयण पद्धति: यह उपकरण लाहिड़ी अयनांश के साथ निरयण राशिचक्र में गणना करता है। पश्चिमी ज्योतिष के सायन राशिचक्र से लगभग 24 अंश का अंतर होने के कारण किसी ग्रह की राशि पश्चिमी कुंडली से एक राशि पीछे दिख सकती है। यह गणना की गलती नहीं है।",
          ko: "사이더리얼 방식: 이 도구는 라히리 아야남샤를 적용한 항성 황도로 계산합니다. 서양 점성술의 트로피컬 방식과 약 24도 차이가 있어 행성의 별자리가 서양식보다 하나 앞쪽으로 보일 수 있지만, 계산 오류가 아닙니다.",
        },
        {
          ja: "「接続できません」と表示されたら：計算後に「予測サービスに接続できませんでした」と表示された場合は、計算サーバーが一時的に応答していない状態です。入力内容の誤りではないので、少し時間をおいてからもう一度お試しください。",
          en: "If you see a connection error: if you see \"Could not reach the forecast service\" after computing, the calculation server is temporarily not responding. It is not a problem with your input, so please wait a moment and try again.",
          hi: "संपर्क त्रुटि दिखे तो: गणना के बाद यदि \"पूर्वानुमान सेवा से संपर्क नहीं हो सका\" दिखे, तो गणना सर्वर अस्थायी रूप से उत्तर नहीं दे रहा है। यह आपके विवरण की गलती नहीं है, कृपया थोड़ी देर बाद पुनः प्रयास करें।",
          ko: "연결 오류가 나올 때: 계산 후 '예측 서비스에 연결할 수 없습니다'라는 메시지가 나오면 계산 서버가 일시적으로 응답하지 않는 상태입니다. 입력 오류가 아니므로 잠시 후 다시 시도해 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語の解説",
        en: "Reading the result: the terms you will see",
        hi: "परिणाम कैसे पढ़ें: दिखने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어 해설",
      },
      body: [
        {
          ja: "結果には次の項目が並びます。まずは用語の意味をつかんでおくと、出生図と見比べやすくなります。",
          en: "The result lists the following items. Understanding the terms first makes it easier to compare with your birth chart.",
          hi: "परिणाम में निम्नलिखित बातें दिखती हैं। पहले शब्दों का अर्थ समझ लेने से जन्म कुंडली से तुलना आसान होती है।",
          ko: "결과에는 다음 항목이 표시됩니다. 먼저 용어의 뜻을 알아 두면 출생 차트와 비교하기 쉬워집니다.",
        },
        {
          ja: "例えば、ある年の回帰チャートでラグナが獅子座、木星が第10ハウスにあったとします。これは「仕事や社会での役割というテーマに、前向きな関心が集まりやすい一年」と読む一つのきっかけになります。ただし、ここで「昇進が決まる」と断定はできません。出生図で第10ハウスや木星がどのような状態か、いまどのダシャーの時期にあるかと合わせて、あくまで考える材料として受け止めます（この例は説明のための架空のものです）。",
          en: "For example, suppose one year's return chart has a Leo ascendant with Jupiter in the 10th house. That can prompt a reading such as \"a year in which constructive attention tends to gather around work and one's role in society.\" It cannot, however, be taken to mean \"a promotion is certain.\" It is weighed together with the state of the 10th house and Jupiter in the birth chart and the dasha period you are in, purely as material for reflection. (This example is hypothetical, for illustration.)",
          hi: "उदाहरण के लिए, मान लें किसी वर्ष की वापसी कुंडली में लग्न सिंह है और बृहस्पति दसवें भाव में है। इसे \"ऐसा वर्ष जिसमें काम और समाज में अपनी भूमिका पर रचनात्मक ध्यान केंद्रित होने की प्रवृत्ति हो\" पढ़ने का एक संकेत माना जा सकता है। पर इसका अर्थ \"पदोन्नति निश्चित है\" नहीं लिया जा सकता। इसे जन्म कुंडली में दसवें भाव और बृहस्पति की स्थिति तथा चल रही दशा के साथ, केवल विचार की सामग्री के रूप में देखें। (यह उदाहरण केवल समझाने के लिए काल्पनिक है।)",
          ko: "예를 들어 어느 해의 회귀 차트에서 라그나가 사자자리이고 목성이 10하우스에 있다고 합시다. 이는 '일과 사회적 역할이라는 주제에 긍정적인 관심이 모이기 쉬운 한 해'로 읽어 보는 하나의 계기가 됩니다. 하지만 '승진이 확정된다'고 단정할 수는 없습니다. 출생 차트에서 10하우스와 목성의 상태, 현재 어떤 다샤 시기인지와 함께, 어디까지나 생각할 재료로 받아들입니다(이 예는 설명을 위한 가상의 것입니다).",
        },
      ],
      bullets: [
        {
          ja: "回帰の瞬間：太陽が出生時の恒星黄道上の度数に戻る日時です。誕生日当日とは限らず、前後に一日程度ずれることがあります。",
          en: "Return moment: the date and time when the Sun returns to its natal sidereal degree. It is not always on your birthday itself and can fall about a day before or after.",
          hi: "वापसी का क्षण: वह तिथि और समय जब सूर्य अपने जन्म के निरयण अंश पर लौटता है। यह हमेशा जन्मदिन पर ही नहीं होता, एक दिन आगे-पीछे हो सकता है।",
          ko: "회귀 순간: 태양이 출생 시 항성 황도상의 도수로 돌아오는 날짜와 시각입니다. 꼭 생일 당일은 아니며 하루 정도 앞뒤로 어긋날 수 있습니다.",
        },
        {
          ja: "アセンダント（ラグナ）：回帰の瞬間に出生地の東の地平線に昇っていた星座です。その一年のチャートの起点で、一年の雰囲気をつかむ手がかりとされます。",
          en: "Ascendant (Lagna): the sign rising on the eastern horizon at your birthplace at the return moment. It is the starting point of that year's chart and is taken as a clue to the year's overall tone.",
          hi: "लग्न: वापसी के क्षण जन्म स्थान के पूर्वी क्षितिज पर उदय हो रही राशि। यह उस वर्ष की कुंडली का आरंभ बिंदु है और वर्ष के समग्र स्वर का संकेत माना जाता है।",
          ko: "상승궁(라그나): 회귀 순간 출생지의 동쪽 지평선에 떠오르던 별자리입니다. 그해 차트의 기점으로, 한 해의 분위기를 파악하는 실마리로 여겨집니다.",
        },
        {
          ja: "ハウス：ラグナの星座を第1ハウスとして数えた、各惑星の位置です（星座単位で数えるホールサイン方式）。第4ハウスは住まいや家族、第7ハウスはパートナーシップ、第10ハウスは仕事というように、生活の領域を表します。",
          en: "House: each planet's position counted with the Lagna's sign as the 1st house (whole-sign houses). Houses represent areas of life — the 4th home and family, the 7th partnership, the 10th work, and so on.",
          hi: "भाव: लग्न की राशि को पहला भाव मानकर गिनी गई प्रत्येक ग्रह की स्थिति (पूर्ण राशि पद्धति)। भाव जीवन के क्षेत्र दर्शाते हैं — चौथा घर और परिवार, सातवाँ साझेदारी, दसवाँ कार्य, आदि।",
          ko: "하우스: 라그나의 별자리를 1하우스로 세어 본 각 행성의 위치입니다(별자리 단위로 세는 홀사인 방식). 4하우스는 집과 가족, 7하우스는 파트너십, 10하우스는 일처럼 생활 영역을 나타냅니다.",
        },
        {
          ja: "星座と度数：回帰の瞬間に各惑星がある恒星黄道上の星座と、その中での度・分です。",
          en: "Sign and degree: the sidereal sign each planet occupies at the return moment, and its degree and minute within that sign.",
          hi: "राशि और अंश: वापसी के क्षण प्रत्येक ग्रह की निरयण राशि, और उस राशि के भीतर उसका अंश और कला।",
          ko: "별자리와 도수: 회귀 순간 각 행성이 있는 항성 황도상의 별자리와 그 안에서의 도·분입니다.",
        },
        {
          ja: "支配星（ロード）：その星座を治める惑星です。例えば獅子座の支配星は太陽、山羊座の支配星は土星です。",
          en: "Lord: the planet that rules that sign. For example, the Sun rules Leo and Saturn rules Capricorn.",
          hi: "स्वामी: वह ग्रह जो उस राशि का स्वामी है। जैसे सिंह का स्वामी सूर्य और मकर का स्वामी शनि है।",
          ko: "지배성(로드): 그 별자리를 다스리는 행성입니다. 예를 들어 사자자리의 지배성은 태양, 염소자리의 지배성은 토성입니다.",
        },
        {
          ja: "品位：惑星が力を発揮しやすい星座にあるかどうかの目安です。「高揚」「自室（自分の星座）」は持ち味が出やすく、「減衰」は表れ方が不器用になりやすいとされます。良し悪しの判定ではなく、表れ方の違いと考えてください。",
          en: "Dignity: a guide to whether a planet sits in a sign where it expresses itself easily. \"Exalted\" and \"own sign\" are said to let its qualities show readily, while \"debilitated\" tends to make its expression less smooth. Think of it as a difference in how it shows up, not a verdict of good or bad.",
          hi: "बल (गरिमा): यह संकेत कि ग्रह ऐसी राशि में है या नहीं जहाँ वह सहजता से अभिव्यक्त होता है। \"उच्च\" और \"स्वराशि\" में गुण आसानी से प्रकट होते हैं, जबकि \"नीच\" में अभिव्यक्ति कम सहज मानी जाती है। इसे अच्छे-बुरे का निर्णय नहीं, अभिव्यक्ति का अंतर समझें।",
          ko: "품위: 행성이 힘을 발휘하기 쉬운 별자리에 있는지를 보는 기준입니다. '고양'과 '자기 별자리'는 특성이 잘 드러나고, '쇠약'은 표현이 서툴러지기 쉽다고 봅니다. 좋고 나쁨의 판정이 아니라 드러나는 방식의 차이로 생각하세요.",
        },
        {
          ja: "逆行：地球から見て惑星が後退しているように見える状態です。その惑星のテーマを見直したり、内面で深めたりする時期と解釈されることが多い表示です。",
          en: "Retrograde: when a planet appears to move backward as seen from Earth. It is often interpreted as a time for revisiting or inwardly deepening that planet's themes.",
          hi: "वक्री: जब पृथ्वी से देखने पर ग्रह पीछे चलता प्रतीत होता है। इसे प्रायः उस ग्रह के विषयों पर पुनर्विचार या आंतरिक रूप से गहराई में जाने का समय माना जाता है।",
          ko: "역행: 지구에서 볼 때 행성이 뒤로 가는 것처럼 보이는 상태입니다. 그 행성의 주제를 다시 살피거나 내면에서 깊게 하는 시기로 해석되는 경우가 많습니다.",
        },
        {
          ja: "ナクシャトラとパダ：黄道を27等分した月宿のうち、惑星がどこにあるかを示します。一つのナクシャトラは13度20分で、さらに4つのパダ（各3度20分）に分かれます。",
          en: "Nakshatra and pada: which of the 27 lunar mansions dividing the ecliptic the planet is in. Each nakshatra spans 13°20′ and is further divided into four padas of 3°20′ each.",
          hi: "नक्षत्र और पाद: क्रांतिवृत्त को 27 भागों में बाँटने वाले नक्षत्रों में से ग्रह किसमें है। प्रत्येक नक्षत्र 13°20′ का होता है और चार पादों (प्रत्येक 3°20′) में बँटता है।",
          ko: "낙샤트라와 파다: 황도를 27등분한 월숙 가운데 행성이 어디에 있는지를 나타냅니다. 하나의 낙샤트라는 13도 20분이며, 다시 4개의 파다(각 3도 20분)로 나뉩니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋のソーラーリターンとの違い",
        en: "Background: how it differs from the Western solar return",
        hi: "पृष्ठभूमि: पश्चिमी सोलर रिटर्न से अंतर",
        ko: "배경 지식: 서양 솔라 리턴과의 차이",
      },
      body: [
        {
          ja: "西洋占星術にも、太陽が出生時の位置に戻る瞬間のチャートを読む「ソーラーリターン」があります。考え方はよく似ていますが、西洋式は春分点を基準にしたトロピカル黄道で太陽の位置を測るのに対し、このツールは恒星を基準にしたサイデリアル黄道（ラヒリ・アヤナムシャ）で測ります。",
          en: "Western astrology also has the \"solar return,\" a chart for the moment the Sun returns to its birth position. The idea is very similar, but the Western version measures the Sun's position in the tropical zodiac anchored to the equinox, while this tool measures it in the sidereal zodiac anchored to the stars (Lahiri ayanamsa).",
          hi: "पश्चिमी ज्योतिष में भी \"सोलर रिटर्न\" है, जो सूर्य के जन्म स्थिति पर लौटने के क्षण की कुंडली है। विचार बहुत मिलता-जुलता है, पर पश्चिमी पद्धति विषुव पर आधारित सायन राशिचक्र में सूर्य की स्थिति मापती है, जबकि यह उपकरण तारों पर आधारित निरयण राशिचक्र (लाहिड़ी अयनांश) में मापता है।",
          ko: "서양 점성술에도 태양이 출생 위치로 돌아오는 순간의 차트를 읽는 '솔라 리턴'이 있습니다. 개념은 매우 비슷하지만, 서양식은 춘분점 기준의 트로피컬 황도로 태양의 위치를 재는 반면 이 도구는 항성 기준의 사이더리얼 황도(라히리 아야남샤)로 잽니다.",
        },
        {
          ja: "春分点は歳差運動によって星々に対してゆっくり移動しているため、二つの方式で求めた回帰の瞬間は年齢とともに少しずつ離れていきます。その差は一年あたりおよそ20分で、数十年たつと半日から一日ほどになります。そのため、同じ年でも西洋式とインド式とでアセンダントやハウスが変わることがあります。",
          en: "Because precession makes the equinox drift slowly against the stars, the return moments found by the two methods drift apart little by little with age. The difference grows by roughly 20 minutes a year, reaching half a day to a full day after several decades. As a result, the same year can give a different ascendant and houses in the Western and Indian methods.",
          hi: "पुरस्सरण के कारण विषुव बिंदु तारों के सापेक्ष धीरे-धीरे खिसकता है, इसलिए दोनों पद्धतियों से निकले वापसी के क्षण उम्र के साथ थोड़ा-थोड़ा अलग होते जाते हैं। यह अंतर प्रति वर्ष लगभग 20 मिनट बढ़ता है और कुछ दशकों में आधे से पूरे दिन तक हो जाता है। इसलिए एक ही वर्ष के लिए पश्चिमी और भारतीय पद्धति में लग्न और भाव भिन्न हो सकते हैं।",
          ko: "춘분점은 세차운동으로 별들에 대해 천천히 이동하므로, 두 방식으로 구한 회귀 순간은 나이가 들수록 조금씩 벌어집니다. 그 차이는 1년에 약 20분씩 커져 수십 년이 지나면 반나절에서 하루 정도가 됩니다. 그래서 같은 해라도 서양식과 인도식의 상승궁과 하우스가 달라질 수 있습니다.",
        },
        {
          ja: "また、インドの伝統的なヴァルシャファラには、ムンタ（年の進行点）、年の支配星、ムッダ・ダシャー（年単位の時期区分）といった独自の技法があります。このツールは現在、年運チャートの惑星配置（D1）の計算に絞っており、これらの技法は表示していません。人生全体の時期の流れは、出生図にもとづくヴィムショッタリ・ダシャーで確認できます。",
          en: "Traditional Indian Varshaphala also has its own techniques, such as the Muntha (the year's progressed point), the year lord, and Mudda dasha (periods within the year). This tool currently focuses on the planetary positions of the annual chart (D1) and does not show these techniques. For the timing of life as a whole, you can check the Vimshottari dasha based on your birth chart.",
          hi: "पारंपरिक भारतीय वर्षफल की अपनी विधियाँ भी हैं, जैसे मुंथा, वर्षेश और मुद्दा दशा। यह उपकरण फिलहाल वार्षिक कुंडली की ग्रह स्थिति (D1) की गणना तक सीमित है और ये विधियाँ नहीं दिखाता। पूरे जीवन के काल-क्रम के लिए जन्म कुंडली पर आधारित विंशोत्तरी दशा देखी जा सकती है।",
          ko: "또한 인도의 전통적인 바르샤팔라에는 문타(해의 진행점), 해의 지배성, 무다 다샤(연 단위 시기 구분) 같은 고유한 기법이 있습니다. 이 도구는 현재 연간 차트의 행성 배치(D1) 계산에 집중하고 있어 이러한 기법은 표시하지 않습니다. 인생 전체의 시기 흐름은 출생 차트를 바탕으로 한 빔쇼타리 다샤에서 확인할 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "一年のテーマを整理するためのチェックリスト",
        en: "A checklist for sorting out the year's themes",
        hi: "वर्ष के विषयों को व्यवस्थित करने की जाँच-सूची",
        ko: "한 해의 주제를 정리하기 위한 체크리스트",
      },
      body: [
        {
          ja: "年運チャートを見たら、次の順に確認すると、情報に振り回されずに一年の計画へつなげやすくなります。",
          en: "After viewing your annual chart, going through the following in order makes it easier to connect it to your plans for the year without being overwhelmed by information.",
          hi: "वार्षिक कुंडली देखने के बाद निम्न क्रम में जाँच करने से जानकारी में उलझे बिना उसे वर्ष की योजना से जोड़ना आसान होता है।",
          ko: "연간 차트를 본 뒤 다음 순서로 확인하면 정보에 휘둘리지 않고 한 해의 계획으로 연결하기 쉬워집니다.",
        },
      ],
      bullets: [
        {
          ja: "□ 回帰チャートのラグナは、出生図のラグナから数えて何番目の星座か（出生図のどの領域が一年の入口になっているか）。",
          en: "□ Counting from your natal Lagna, which sign is the return chart's Lagna? (Which area of the birth chart becomes the entrance to the year?)",
          hi: "□ जन्म लग्न से गिनने पर वापसी कुंडली का लग्न कौन-सी राशि है? (जन्म कुंडली का कौन-सा क्षेत्र वर्ष का प्रवेश द्वार बन रहा है?)",
          ko: "□ 회귀 차트의 라그나는 출생 차트의 라그나에서 세어 몇 번째 별자리인가(출생 차트의 어느 영역이 한 해의 입구가 되는가).",
        },
        {
          ja: "□ 太陽は何番目のハウスにあるか（その一年、意識やエネルギーが向かいやすい生活の領域）。",
          en: "□ Which house is the Sun in? (The area of life your attention and energy may tend toward that year.)",
          hi: "□ सूर्य किस भाव में है? (वह क्षेत्र जिसकी ओर उस वर्ष आपका ध्यान और ऊर्जा जाने की प्रवृत्ति हो सकती है।)",
          ko: "□ 태양은 몇 번째 하우스에 있는가(그해 의식과 에너지가 향하기 쉬운 생활 영역).",
        },
        {
          ja: "□ 木星と土星のハウス（広げたい分野と、腰を据えて取り組みたい分野の目安）。",
          en: "□ The houses of Jupiter and Saturn. (A guide to areas you may want to expand and areas to work on steadily.)",
          hi: "□ बृहस्पति और शनि के भाव। (उन क्षेत्रों का संकेत जिन्हें आप बढ़ाना चाहें और जिन पर धैर्य से काम करना चाहें।)",
          ko: "□ 목성과 토성의 하우스(넓히고 싶은 분야와 차분히 공들이고 싶은 분야의 기준).",
        },
        {
          ja: "□ 逆行している惑星はあるか（見直しや練り直しに向くテーマ）。",
          en: "□ Are any planets retrograde? (Themes suited to review and reworking.)",
          hi: "□ क्या कोई ग्रह वक्री है? (पुनर्विचार और सुधार के लिए उपयुक्त विषय।)",
          ko: "□ 역행 중인 행성이 있는가(재검토와 다듬기에 어울리는 주제).",
        },
        {
          ja: "□ 現在のダシャー（大運）とテーマが重なっているか。重なる部分ほど、その年に意識しやすいテーマと考えます。",
          en: "□ Do the themes overlap with your current dasha? Where they overlap, consider them the themes most worth keeping in mind that year.",
          hi: "□ क्या विषय वर्तमान दशा से मेल खाते हैं? जहाँ मेल हो, उन्हें उस वर्ष ध्यान रखने योग्य मुख्य विषय मानें।",
          ko: "□ 현재 다샤(대운)와 주제가 겹치는가. 겹치는 부분일수록 그해 의식하기 좋은 주제로 봅니다.",
        },
        {
          ja: "□ 最後に、気づいたテーマを2〜3個だけ書き出し、具体的な行動や目標に置き換えてみる。",
          en: "□ Finally, write down just two or three themes you noticed and turn them into concrete actions or goals.",
          hi: "□ अंत में, ध्यान में आए केवल दो-तीन विषय लिखें और उन्हें ठोस कार्यों या लक्ष्यों में बदलें।",
          ko: "□ 마지막으로 눈에 띈 주제를 두세 개만 적어 보고, 구체적인 행동이나 목표로 바꿔 봅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって（免責事項）",
        en: "Before you use it (disclaimer)",
        hi: "उपयोग से पहले (अस्वीकरण)",
        ko: "이용 시 유의 사항(면책)",
      },
      body: [
        {
          ja: "年運チャートは、一年を振り返ったり計画したりするための自己理解のヒントとして、楽しみながらご活用ください。未来の出来事を確定させるものではなく、良い年・悪い年を決めつけるものでもありません。",
          en: "Please enjoy the annual chart as a hint for self-understanding when reviewing or planning your year. It does not fix future events, nor does it label a year as good or bad.",
          hi: "वार्षिक कुंडली को वर्ष पर विचार करने या योजना बनाने के लिए आत्म-समझ के संकेत के रूप में आनंद से उपयोग करें। यह भविष्य की घटनाएँ तय नहीं करती, न ही किसी वर्ष को अच्छा या बुरा ठहराती है।",
          ko: "연간 차트는 한 해를 돌아보거나 계획할 때 자기 이해의 힌트로 즐겁게 활용해 주세요. 미래의 일을 확정하는 것이 아니며, 좋은 해나 나쁜 해를 단정하는 것도 아닙니다.",
        },
        {
          ja: "健康・法律・お金・進学や就職などの大切な判断は、医師・弁護士・税理士やファイナンシャルプランナーなど、それぞれの専門家にご相談ください。占星術の結果を理由に、必要な治療や手続きを先延ばしにすることはおすすめしません。",
          en: "For important decisions about health, legal matters, money, education or employment, please consult the relevant professionals, such as doctors, lawyers, tax accountants or financial planners. We do not recommend postponing necessary treatment or procedures because of an astrological result.",
          hi: "स्वास्थ्य, कानूनी मामलों, धन, शिक्षा या नौकरी से जुड़े महत्वपूर्ण निर्णयों के लिए डॉक्टर, वकील, कर सलाहकार या वित्तीय योजनाकार जैसे संबंधित विशेषज्ञों से परामर्श करें। ज्योतिषीय परिणाम के कारण आवश्यक उपचार या प्रक्रियाओं को टालने की सलाह हम नहीं देते।",
          ko: "건강, 법률, 돈, 진학이나 취업 등 중요한 판단은 의사, 변호사, 세무사, 재무 설계사 등 각 분야의 전문가와 상담하세요. 점성술 결과를 이유로 필요한 치료나 절차를 미루는 것은 권하지 않습니다.",
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
          ja: "年運チャートは出生図やダシャーと合わせて読むと、より立体的に理解できます。",
          en: "The annual chart becomes clearer when read together with your birth chart and dasha.",
          hi: "वार्षिक कुंडली को जन्म कुंडली और दशा के साथ पढ़ने पर वह अधिक स्पष्ट होती है।",
          ko: "연간 차트는 출생 차트와 다샤를 함께 읽으면 더 입체적으로 이해할 수 있습니다.",
        },
      ],
      links: [
        {
          href: "/tools/birth-chart",
          label: {
            ja: "出生図（クンダリ）を作成する",
            en: "Make your birth chart (kundli)",
            hi: "अपनी जन्म कुंडली बनाएं",
            ko: "출생 차트(쿤달리) 만들기",
          },
        },
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ヴィムショッタリ・ダシャー計算",
            en: "Vimshottari dasha calculator",
            hi: "विंशोत्तरी दशा कैलकुलेटर",
            ko: "빔쇼타리 다샤 계산기",
          },
        },
        {
          href: "/tools/transit-now",
          label: {
            ja: "現在のトランジット（惑星の運行）",
            en: "Current transits",
            hi: "वर्तमान गोचर",
            ko: "현재 트랜짓(행성 운행)",
          },
        },
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻の確かさをチェック",
            en: "Check how reliable your birth time is",
            hi: "अपने जन्म समय की विश्वसनीयता जाँचें",
            ko: "출생 시각의 정확도 확인하기",
          },
        },
        {
          href: "/learn-jyotish/transits",
          label: {
            ja: "トランジット（ゴーチャラ）の基礎を学ぶ",
            en: "Learn the basics of transits (gochara)",
            hi: "गोचर की मूल बातें सीखें",
            ko: "트랜짓(고차라)의 기초 배우기",
          },
        },
      ],
    },
  ],
};
