import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/career-report.
 *
 * Written Japanese-first, matching sukuyo.ts and birth-chart.ts. Describes
 * only what CareerReportPanel actually shows: the D10 (Dashamsha) diagram
 * (North Indian style), the D10 Lagna sign with its temperament blurb, and
 * each of the nine grahas with its D10 house (counted from the D10 Lagna)
 * and a general career-inclination blurb. It does NOT analyse the D1 10th
 * house, its lord, the Amatyakaraka or dashas — the copy says so honestly
 * and points to the tools that do cover the wider picture. Framed as a lens
 * for reflecting on strengths and interests, never as career advice.
 */
export const careerReportLongForm: ToolLongForm = {
  slug: "career-report",
  sections: [
    {
      heading: {
        ja: "このキャリアレポートでわかること",
        en: "What this career report shows you",
        hi: "यह करियर रिपोर्ट आपको क्या दिखाती है",
        ko: "이 커리어 리포트로 알 수 있는 것",
      },
      body: [
        {
          ja: "インド占星術では、人生全体を表す出生図（D1）とは別に、テーマごとの「分割図（ヴァルガ）」を作って読みます。仕事や社会的な役割を見るための分割図がD10、ダシャムシャです。各星座30度を3度ずつ10等分し、それぞれの惑星やラグナがどの区分に入るかで、新しいチャートを組み立てます。",
          en: "Alongside the main birth chart (D1), which describes life as a whole, Jyotish builds topic-specific divisional charts (vargas). The one read for work and social role is the D10, or Dashamsha. Each 30° sign is split into ten 3° parts, and a new chart is assembled from which part each planet and the ascendant falls into.",
          hi: "पूरे जीवन को दर्शाने वाली मुख्य जन्म-कुंडली (D1) के अलावा, ज्योतिष विषय-विशेष के लिए वर्ग कुंडलियां बनाता है। काम और सामाजिक भूमिका के लिए पढ़ी जाने वाली वर्ग कुंडली D10 या दशमांश है। हर 30° की राशि को 3° के दस भागों में बांटा जाता है, और हर ग्रह व लग्न किस भाग में पड़ता है, उससे एक नई कुंडली बनती है।",
          ko: "삶 전체를 나타내는 출생 차트(D1)와 별도로, 조티시는 주제별 분할 차트(바르가)를 만들어 읽습니다. 일과 사회적 역할을 보는 분할 차트가 D10, 다샴샤입니다. 각 별자리 30도를 3도씩 10등분하고, 각 행성과 라그나가 어느 구간에 들어가는지로 새로운 차트를 구성합니다.",
        },
        {
          ja: "このツールが表示するのは三つです。D10チャートの図、D10ラグナ（キャリアチャートの上昇宮）とその気質の説明、そして九つの惑星それぞれがD10のどの室（ハウス）に入っているかと、その惑星が仕事に加える傾向の説明です。",
          en: "The tool shows three things: the D10 chart diagram, your D10 Lagna (the ascendant of the career chart) with a description of its temperament, and, for each of the nine planets, the D10 house it occupies plus the tendency that planet adds to work.",
          hi: "यह उपकरण तीन चीजें दिखाता है: D10 कुंडली का आरेख, आपका D10 लग्न (करियर कुंडली का लग्न) और उसके स्वभाव का विवरण, तथा नौ ग्रहों में से प्रत्येक किस D10 भाव में है और वह ग्रह काम में कौन-सी प्रवृत्ति जोड़ता है।",
          ko: "이 도구가 보여주는 것은 세 가지입니다. D10 차트 도표, D10 라그나(커리어 차트의 상승궁)와 그 기질 설명, 그리고 아홉 행성 각각이 D10의 어느 하우스에 있는지와 그 행성이 일에 더하는 경향에 대한 설명입니다.",
        },
        {
          ja: "「自分はどんな場面で力を発揮しやすいのか」「何に自然と関心が向くのか」を言葉にしてみたい方、出生図をもう一歩深く読んでみたい方に向いています。結果は職業を決めるものではなく、自分の強みや関心を振り返るための一つの視点としてお使いください。",
          en: "It suits anyone who wants to put into words where they tend to do their best work and what naturally draws their interest, or who wants to read their birth chart one layer deeper. The result does not decide a profession for you; use it as one lens for reflecting on your strengths and interests.",
          hi: "यह उन लोगों के लिए उपयुक्त है जो शब्दों में समझना चाहते हैं कि वे किन परिस्थितियों में अपना सर्वश्रेष्ठ देते हैं और उनकी रुचि स्वाभाविक रूप से किस ओर जाती है, या जो अपनी जन्म-कुंडली को एक स्तर गहराई से पढ़ना चाहते हैं। परिणाम आपका पेशा तय नहीं करता; इसे अपनी क्षमताओं और रुचियों पर विचार करने के एक दृष्टिकोण के रूप में उपयोग करें।",
          ko: "내가 어떤 상황에서 힘을 잘 발휘하는지, 무엇에 자연스럽게 관심이 가는지를 말로 정리해 보고 싶은 분, 출생 차트를 한 단계 더 깊이 읽고 싶은 분께 맞습니다. 결과는 직업을 정해 주는 것이 아니라, 자신의 강점과 관심사를 돌아보는 하나의 관점으로 활용해 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方と入力時の注意点",
        en: "How to use it, and what to watch when entering details",
        hi: "उपयोग कैसे करें और विवरण भरते समय किन बातों का ध्यान रखें",
        ko: "사용 방법과 입력 시 주의할 점",
      },
      body: [
        {
          ja: "D10は出生時刻の影響をとても強く受けるチャートです。3度という細かい区分で作るため、D10ラグナは出生時刻が数分から十数分ずれるだけで別の星座に変わることがあります。できるだけ母子手帳などの記録にある時刻を使ってください。",
          en: "The D10 is extremely sensitive to birth time. Because it works in fine 3° divisions, the D10 Lagna can move to a different sign if the birth time is off by anywhere from a few minutes to a little over ten. Use a recorded time wherever possible, such as one from a maternity record or birth certificate.",
          hi: "D10 जन्म समय के प्रति अत्यंत संवेदनशील है। 3° के बारीक भागों से बनने के कारण, जन्म समय कुछ मिनट से लेकर दस-पंद्रह मिनट तक भी अलग होने पर D10 लग्न दूसरी राशि में जा सकता है। जहां तक संभव हो, जन्म प्रमाणपत्र जैसे किसी दर्ज रिकॉर्ड का समय उपयोग करें।",
          ko: "D10은 출생 시각의 영향을 매우 크게 받는 차트입니다. 3도라는 세밀한 구간으로 만들기 때문에, 출생 시각이 몇 분에서 십여 분만 어긋나도 D10 라그나가 다른 별자리로 바뀔 수 있습니다. 가능하면 모자수첩이나 출생 기록에 남아 있는 시각을 사용해 주세요.",
        },
      ],
      bullets: [
        {
          ja: "手順1：生年月日と出生時刻（24時間表記）を入力します。保存済みのプロフィールがある場合は、そのデータで自動的に計算されます。",
          en: "Step 1: Enter your date of birth and birth time (24-hour format). If you already have a saved profile, the report is calculated from it automatically.",
          hi: "चरण 1: अपनी जन्म तिथि और जन्म समय (24-घंटे के प्रारूप में) दर्ज करें। यदि आपकी कोई सहेजी गई प्रोफ़ाइल है, तो रिपोर्ट उसी से अपने-आप गणना हो जाती है।",
          ko: "1단계: 생년월일과 출생 시각(24시간 표기)을 입력합니다. 저장된 프로필이 있으면 그 데이터로 자동 계산됩니다.",
        },
        {
          ja: "手順2：出生地を検索して選びます。時刻は「生まれた場所の現地時間」で入力してください。海外で生まれた方が日本時間に換算して入力すると、チャートが大きくずれます。",
          en: "Step 2: Search for and select your place of birth. Enter the time as local time at the place of birth; if you were born abroad, converting it to Japan time first will shift the chart badly.",
          hi: "चरण 2: अपना जन्म स्थान खोजकर चुनें। समय जन्म स्थान के स्थानीय समय में दर्ज करें; यदि आप विदेश में जन्मे हैं, तो उसे पहले जापान के समय में बदलकर दर्ज करने से कुंडली काफी गलत हो जाएगी।",
          ko: "2단계: 출생지를 검색해 선택합니다. 시각은 '태어난 곳의 현지 시간'으로 입력하세요. 해외에서 태어난 분이 일본 시간으로 환산해 입력하면 차트가 크게 어긋납니다.",
        },
        {
          ja: "手順3：「キャリアレポートを見る」を押すと、D10の図、D10ラグナ、各惑星の配置が表示されます。別の人や別の時刻で試すときは「もう一度計算する」を使います。",
          en: "Step 3: Press the button to see your career report: the D10 diagram, your D10 Lagna and each planet's placement appear. To try another person or another time, use “Calculate Again”.",
          hi: "चरण 3: करियर रिपोर्ट देखने के लिए बटन दबाएं — D10 आरेख, D10 लग्न और हर ग्रह की स्थिति दिखाई देगी। किसी और व्यक्ति या दूसरे समय के लिए “फिर से गणना करें” का उपयोग करें।",
          ko: "3단계: 커리어 리포트 보기 버튼을 누르면 D10 도표, D10 라그나, 각 행성의 배치가 표시됩니다. 다른 사람이나 다른 시각으로 시험할 때는 '다시 계산하기'를 사용합니다.",
        },
        {
          ja: "出生時刻がおおよそしかわからない場合は、前後15分ほどずらして計算し、D10ラグナが変わるかどうかを確かめてみてください。変わる場合、D10ラグナの解釈は参考程度にとどめるのが安全です。",
          en: "If you only know your birth time roughly, recalculate with the time shifted about 15 minutes either way and see whether the D10 Lagna changes. If it does, treat the D10 Lagna reading as tentative.",
          hi: "यदि आपको जन्म समय केवल अनुमानित पता है, तो समय को लगभग 15 मिनट आगे-पीछे करके दोबारा गणना करें और देखें कि D10 लग्न बदलता है या नहीं। यदि बदलता है, तो D10 लग्न की व्याख्या को केवल संकेत मात्र मानें।",
          ko: "출생 시각을 대략만 안다면 앞뒤로 15분 정도 옮겨 다시 계산해 보고, D10 라그나가 바뀌는지 확인해 보세요. 바뀐다면 D10 라그나 해석은 참고 정도로만 받아들이는 것이 안전합니다.",
        },
        {
          ja: "当サイトはサイデリアル（恒星）黄道とラヒリ・アヤナムシャで計算しています。西洋占星術のトロピカル黄道と比べて約24度の差があるため、星座が一つずれて見えることがありますが、計算の誤りではありません。",
          en: "This site calculates with the sidereal zodiac and the Lahiri ayanamsha. That sits about 24° away from the tropical zodiac of Western astrology, so signs may look shifted by one; this is not a calculation error.",
          hi: "यह साइट निरयण (सायडेरियल) राशिचक्र और लाहिड़ी अयनांश से गणना करती है। यह पश्चिमी ज्योतिष के सायन राशिचक्र से लगभग 24° अलग है, इसलिए राशियां एक आगे-पीछे दिख सकती हैं; यह गणना की गलती नहीं है।",
          ko: "이 사이트는 항성(사이더리얼) 황도와 라히리 아야남샤로 계산합니다. 서양 점성술의 회귀 황도와 약 24도 차이가 있어 별자리가 하나 어긋나 보일 수 있지만, 계산 오류가 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the result: the terms you will see",
        hi: "परिणाम कैसे पढ़ें: दिखाई देने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어",
      },
      body: [
        {
          ja: "結果画面に出てくる言葉は多くありません。次の四つを押さえておけば、レポート全体を無理なく読めます。",
          en: "The result screen uses only a handful of terms. With the four below in hand, you can read the whole report comfortably.",
          hi: "परिणाम स्क्रीन पर कुछ ही शब्द आते हैं। नीचे दिए चार शब्द समझ लेने पर आप पूरी रिपोर्ट आराम से पढ़ सकते हैं।",
          ko: "결과 화면에 나오는 용어는 많지 않습니다. 아래 네 가지만 알아 두면 리포트 전체를 무리 없이 읽을 수 있습니다.",
        },
        {
          ja: "例えば、D10ラグナが山羊座で、土星がD10の第1室、水星が第10室に表示されたとします（あくまで説明のための例です）。この場合、山羊座の「構造と長い時間軸を好む気質」が土台にあり、そこに土星の「着実に築く仕事」への傾向が重なります。さらに水星が加わることで、分析や伝える役割にも関心が向きやすい、と読めます。「自分は時間をかけて仕組みを整えることにやりがいを感じるだろうか」と、実際の経験と照らし合わせてみるのが活かし方です。",
          en: "For example, suppose the D10 Lagna is Capricorn, with Saturn shown in the 1st house of the D10 and Mercury in the 10th (purely an illustration). The foundation is Capricorn's preference for structure and long time horizons; Saturn adds a tendency towards work that is built steadily; Mercury adds an interest in analysis and communication. The way to use this is to hold it against real experience: do I actually find meaning in patiently putting systems in order?",
          hi: "उदाहरण के लिए, मान लीजिए D10 लग्न मकर है, शनि D10 के पहले भाव में और बुध दसवें भाव में दिखाया गया है (केवल समझाने के लिए उदाहरण)। आधार में मकर का संरचना और लंबी समय-सीमा को पसंद करने वाला स्वभाव है; शनि धीरे-धीरे स्थिरता से बनने वाले काम की प्रवृत्ति जोड़ता है; और बुध विश्लेषण व संप्रेषण में रुचि जोड़ता है। इसका उपयोग यह है कि इसे वास्तविक अनुभव से मिलाकर देखें: क्या मुझे सचमुच धैर्य से व्यवस्थाएं सुधारने में संतोष मिलता है?",
          ko: "예를 들어 D10 라그나가 염소자리이고, 토성이 D10의 1하우스, 수성이 10하우스에 표시되었다고 해 봅시다(어디까지나 설명을 위한 예입니다). 이 경우 염소자리의 '구조와 긴 시간 축을 좋아하는 기질'이 바탕에 있고, 거기에 토성의 '꾸준히 쌓아 가는 일'에 대한 경향이 겹칩니다. 여기에 수성이 더해져 분석이나 전달하는 역할에도 관심이 가기 쉽다고 읽을 수 있습니다. '나는 시간을 들여 체계를 정비하는 일에서 보람을 느끼는가'를 실제 경험과 비추어 보는 것이 활용법입니다.",
        },
      ],
      bullets: [
        {
          ja: "D10（ダシャムシャ）チャート：各星座を3度ずつ10分割して作る、仕事と社会的役割のための分割図です。図は北インド式（菱形）で描かれ、上部中央が第1室です。",
          en: "D10 (Dashamsha) chart: the divisional chart for work and social role, built by splitting each sign into ten 3° parts. It is drawn in the North Indian (diamond) style, with the 1st house at the top centre.",
          hi: "D10 (दशमांश) कुंडली: काम और सामाजिक भूमिका के लिए वर्ग कुंडली, जो हर राशि को 3° के दस भागों में बांटकर बनती है। इसे उत्तर भारतीय (हीरा) शैली में बनाया गया है, जिसमें पहला भाव ऊपर बीच में होता है।",
          ko: "D10(다샴샤) 차트: 각 별자리를 3도씩 10등분해 만드는, 일과 사회적 역할을 위한 분할 차트입니다. 도표는 북인도식(마름모)으로 그려지며, 위쪽 가운데가 1하우스입니다.",
        },
        {
          ja: "D10ラグナ：キャリアチャートの上昇宮です。仕事に向き合うときの基本的な気質やスタイルとして読みます。通常の出生図のラグナとは別物で、違う星座になるのが普通です。",
          en: "D10 Lagna: the ascendant of the career chart, read as your basic temperament and style when approaching work. It is separate from the ascendant of your ordinary birth chart and is usually a different sign.",
          hi: "D10 लग्न: करियर कुंडली का लग्न, जिसे काम के प्रति आपके मूल स्वभाव और शैली के रूप में पढ़ा जाता है। यह आपकी सामान्य जन्म-कुंडली के लग्न से अलग है और आमतौर पर अलग राशि होता है।",
          ko: "D10 라그나: 커리어 차트의 상승궁입니다. 일을 대할 때의 기본 기질과 스타일로 읽습니다. 일반 출생 차트의 라그나와는 별개이며, 다른 별자리가 되는 것이 보통입니다.",
        },
        {
          ja: "室（ハウス）：各惑星の横に「第○室」と表示されます。これは通常のアセンダントではなく、D10ラグナを第1室として数えた位置です。伝統的にはD10の第1室と第10室が特に重視されますが、このツールは室番号を示すのみで、室ごとの解釈文は表示しません。",
          en: "House: shown as “House N” beside each planet. It is counted from the D10 Lagna as the 1st house, not from your regular ascendant. Tradition gives particular weight to the 1st and 10th houses of the D10, but this tool shows the house number only, without a per-house interpretation.",
          hi: "भाव: हर ग्रह के पास “भाव N” दिखाया जाता है। इसे आपके सामान्य लग्न से नहीं, बल्कि D10 लग्न को पहला भाव मानकर गिना जाता है। परंपरा में D10 के पहले और दसवें भाव को विशेष महत्व दिया जाता है, पर यह उपकरण केवल भाव संख्या दिखाता है, हर भाव की अलग व्याख्या नहीं।",
          ko: "하우스: 각 행성 옆에 '○하우스'로 표시됩니다. 일반 상승궁이 아니라 D10 라그나를 1하우스로 삼아 센 위치입니다. 전통적으로 D10의 1하우스와 10하우스를 특히 중시하지만, 이 도구는 하우스 번호만 보여 주고 하우스별 해석문은 표시하지 않습니다.",
        },
        {
          ja: "惑星の傾向：太陽・月・火星・水星・木星・金星・土星・ラーフ・ケートゥの九つについて、それぞれが仕事に加える傾向（例：太陽なら権威や責任ある立場、水星ならコミュニケーションや分析）を短く示します。",
          en: "Planet tendencies: for each of the nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu — a short note on the tendency it adds to work (the Sun towards authority and responsible positions, Mercury towards communication and analysis, and so on).",
          hi: "ग्रहों की प्रवृत्तियां: सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु — इन नौ ग्रहों में से प्रत्येक काम में कौन-सी प्रवृत्ति जोड़ता है, इसका छोटा विवरण (जैसे सूर्य अधिकार और ज़िम्मेदारी वाले पद की ओर, बुध संप्रेषण और विश्लेषण की ओर)।",
          ko: "행성의 경향: 태양·달·화성·수성·목성·금성·토성·라후·케투 아홉 행성 각각이 일에 더하는 경향(예: 태양은 권위와 책임 있는 자리, 수성은 커뮤니케이션과 분석)을 짧게 보여 줍니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋占星術の「仕事の読み方」との違い",
        en: "Background: how this differs from career reading in Western astrology",
        hi: "पृष्ठभूमि: पश्चिमी ज्योतिष में करियर पढ़ने से यह कैसे अलग है",
        ko: "배경 지식: 서양 점성술의 '일 읽기'와의 차이",
      },
      body: [
        {
          ja: "西洋占星術で仕事を見るときは、主に一枚のホロスコープの中で、MC（天頂）や第10ハウス、そこにある天体を読みます。インド占星術でも出生図（D1）の第10室とその支配星は重要ですが、それに加えて、同じ出生データから作るD10という別のチャートを重ねて読むのが特徴です。",
          en: "Western astrology usually reads career within a single horoscope, looking at the MC (Midheaven), the 10th house and the planets in it. Jyotish also treats the 10th house of the birth chart (D1) and its lord as important, but its distinctive step is to layer on a separate chart, the D10, built from the same birth data.",
          hi: "पश्चिमी ज्योतिष आमतौर पर एक ही कुंडली के भीतर MC (मध्य आकाश), दसवें भाव और उसमें स्थित ग्रहों को देखकर करियर पढ़ता है। ज्योतिष में भी जन्म-कुंडली (D1) का दसवां भाव और उसका स्वामी महत्वपूर्ण हैं, पर इसकी विशेषता यह है कि उसी जन्म विवरण से बनी एक अलग कुंडली, D10, को साथ रखकर पढ़ा जाता है।",
          ko: "서양 점성술에서 일을 볼 때는 주로 한 장의 호로스코프 안에서 MC(천정)와 10하우스, 그곳에 있는 천체를 읽습니다. 인도 점성술에서도 출생 차트(D1)의 10하우스와 그 지배성은 중요하지만, 여기에 같은 출생 데이터로 만든 D10이라는 별도의 차트를 겹쳐 읽는 것이 특징입니다.",
        },
        {
          ja: "古典的な鑑定では、D1の第10室やその支配星、アートマカーラカ・アマーティヤカーラカといった指標、さらにダシャー（運気の時期）まで総合して判断します。このツールが扱うのはそのうちD10の部分だけです。全体像を見たい場合は、出生図やダシャーのツールと合わせてお読みください。",
          en: "A classical reading weighs everything together: the D1 10th house and its lord, indicators such as the Atmakaraka and Amatyakaraka, and the dasha periods as well. This tool covers only the D10 part of that. For the wider picture, read it together with the birth chart and dasha tools.",
          hi: "शास्त्रीय विश्लेषण सबको साथ तौलता है: D1 का दसवां भाव और उसका स्वामी, आत्मकारक और अमात्यकारक जैसे संकेतक, और दशा काल भी। यह उपकरण उनमें से केवल D10 वाले भाग को कवर करता है। व्यापक चित्र के लिए इसे जन्म-कुंडली और दशा उपकरणों के साथ पढ़ें।",
          ko: "고전적인 감정에서는 D1의 10하우스와 그 지배성, 아트마카라카·아마티야카라카 같은 지표, 나아가 다샤(운의 시기)까지 종합해 판단합니다. 이 도구가 다루는 것은 그중 D10 부분뿐입니다. 전체 그림을 보고 싶다면 출생 차트와 다샤 도구와 함께 읽어 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解",
        en: "Common misunderstandings",
        hi: "आम गलतफहमियां",
        ko: "흔한 오해",
      },
      body: [
        {
          ja: "キャリアに関わる占いは、結果を重く受け止めすぎてしまいがちです。読む前に、次の点を心に留めておいてください。",
          en: "Career-related readings are easy to take too seriously. Before reading yours, keep the following points in mind.",
          hi: "करियर से जुड़े ज्योतिषीय परिणामों को ज़रूरत से ज़्यादा गंभीरता से लेना आसान है। अपना परिणाम पढ़ने से पहले इन बातों को ध्यान में रखें।",
          ko: "커리어에 관한 점은 결과를 지나치게 무겁게 받아들이기 쉽습니다. 읽기 전에 다음 사항을 기억해 두세요.",
        },
      ],
      bullets: [
        {
          ja: "誤解：表示された分野以外の仕事は向いていない。→ 実際：説明文は傾向を示す例であり、職業の一覧でも制限でもありません。同じ気質はさまざまな仕事で活かせます。",
          en: "Myth: work outside the fields mentioned doesn't suit me. Reality: the descriptions are examples of tendencies, not a list of permitted jobs. The same temperament can be put to use in many kinds of work.",
          hi: "भ्रम: बताए गए क्षेत्रों के बाहर का काम मेरे लिए ठीक नहीं। वास्तविकता: विवरण प्रवृत्तियों के उदाहरण हैं, अनुमत नौकरियों की सूची नहीं। एक ही स्वभाव कई तरह के कामों में उपयोगी हो सकता है।",
          ko: "오해: 표시된 분야 외의 일은 맞지 않는다. → 실제: 설명문은 경향을 보여 주는 예일 뿐, 직업 목록도 제한도 아닙니다. 같은 기질은 다양한 일에서 살릴 수 있습니다.",
        },
        {
          ja: "誤解：D10が良ければ成功が約束される／悪ければ失敗する。→ 実際：チャートは結果を保証も否定もしません。経験、学び、環境、人とのつながりのほうがはるかに大きな要素です。",
          en: "Myth: a good D10 guarantees success and a bad one means failure. Reality: a chart neither guarantees nor rules out any outcome. Experience, learning, circumstances and relationships matter far more.",
          hi: "भ्रम: अच्छा D10 सफलता की गारंटी है और खराब D10 असफलता। वास्तविकता: कुंडली किसी परिणाम की न गारंटी देती है न उसे खारिज करती है। अनुभव, सीख, परिस्थितियां और संबंध कहीं अधिक मायने रखते हैं।",
          ko: "오해: D10이 좋으면 성공이 보장되고, 나쁘면 실패한다. → 실제: 차트는 결과를 보장하지도 부정하지도 않습니다. 경험, 배움, 환경, 사람과의 관계가 훨씬 큰 요소입니다.",
        },
        {
          ja: "誤解：D10ラグナは出生図のラグナと同じはず。→ 実際：別々に計算するため、違う星座になるのが普通です。どちらかが間違っているわけではありません。",
          en: "Myth: the D10 Lagna should match my birth-chart ascendant. Reality: they are calculated separately and are usually different signs. Neither one is wrong.",
          hi: "भ्रम: D10 लग्न मेरी जन्म-कुंडली के लग्न जैसा ही होना चाहिए। वास्तविकता: दोनों की गणना अलग होती है और आमतौर पर वे अलग राशियां होते हैं। दोनों में से कोई गलत नहीं है।",
          ko: "오해: D10 라그나는 출생 차트의 라그나와 같아야 한다. → 실제: 따로 계산하므로 다른 별자리가 되는 것이 보통입니다. 어느 쪽이 틀린 것이 아닙니다.",
        },
        {
          ja: "誤解：D10だけでキャリアのすべてがわかる。→ 実際：D10は多くの指標の一つにすぎません。出生時刻の誤差にも敏感なので、単独で結論を出さないことが大切です。",
          en: "Myth: the D10 alone tells the whole career story. Reality: it is only one indicator among many, and it is sensitive to birth-time errors, so it should never be used to draw conclusions on its own.",
          hi: "भ्रम: अकेला D10 करियर की पूरी कहानी बता देता है। वास्तविकता: यह कई संकेतकों में से केवल एक है, और जन्म समय की त्रुटि के प्रति संवेदनशील है, इसलिए इससे अकेले निष्कर्ष नहीं निकालने चाहिए।",
          ko: "오해: D10만으로 커리어의 모든 것을 알 수 있다. → 실제: D10은 여러 지표 중 하나일 뿐입니다. 출생 시각 오차에도 민감하므로 단독으로 결론을 내리지 않는 것이 중요합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "自分の強みを振り返るためのチェックリスト",
        en: "A checklist for reflecting on your strengths",
        hi: "अपनी क्षमताओं पर विचार करने के लिए एक चेकलिस्ट",
        ko: "나의 강점을 돌아보기 위한 체크리스트",
      },
      body: [
        {
          ja: "レポートを読んだら、当てはまるかどうかを判定するより、次の問いを自分に投げかけてみてください。ノートに書き出すと、考えが整理しやすくなります。",
          en: "After reading the report, rather than judging whether it is right, try asking yourself the questions below. Writing the answers down makes your thoughts easier to sort out.",
          hi: "रिपोर्ट पढ़ने के बाद, यह तय करने के बजाय कि वह सही है या नहीं, खुद से नीचे दिए प्रश्न पूछकर देखें। उत्तर लिख लेने से विचार सुलझाना आसान होता है।",
          ko: "리포트를 읽은 뒤에는 맞는지 틀린지 판정하기보다, 다음 질문을 스스로에게 던져 보세요. 노트에 적어 보면 생각을 정리하기 쉬워집니다.",
        },
      ],
      bullets: [
        {
          ja: "D10ラグナの説明のうち、これまでの経験で「確かにそうだった」と思える場面はありますか。",
          en: "Is there a moment in your past experience where the D10 Lagna description rings true?",
          hi: "क्या आपके पिछले अनुभव में कोई ऐसा पल है जब D10 लग्न का विवरण सही लगता है?",
          ko: "D10 라그나 설명 중 지금까지의 경험에서 '정말 그랬다'고 느껴지는 장면이 있나요?",
        },
        {
          ja: "惑星の説明の中で、時間を忘れて取り組めた活動と重なるものはどれですか。",
          en: "Which of the planet descriptions overlaps with activities you have lost track of time doing?",
          hi: "ग्रहों के विवरण में से कौन-सा उन गतिविधियों से मेल खाता है जिनमें आप समय भूल जाते हैं?",
          ko: "행성 설명 중 시간 가는 줄 모르고 몰두했던 활동과 겹치는 것은 무엇인가요?",
        },
        {
          ja: "逆に、まったくピンとこない説明はありますか。それはなぜでしょうか。",
          en: "Conversely, is there a description that doesn't resonate at all? Why might that be?",
          hi: "इसके विपरीत, क्या कोई विवरण बिल्कुल मेल नहीं खाता? ऐसा क्यों हो सकता है?",
          ko: "반대로 전혀 와닿지 않는 설명이 있나요? 그 이유는 무엇일까요?",
        },
        {
          ja: "身近な人から「得意だね」と言われることは、レポートのどの部分と関係していそうですか。",
          en: "What do people close to you say you are good at, and which part of the report might that relate to?",
          hi: "आपके करीबी लोग कहते हैं कि आप किसमें अच्छे हैं, और वह रिपोर्ट के किस भाग से जुड़ा हो सकता है?",
          ko: "가까운 사람들에게서 '잘한다'는 말을 듣는 것은 리포트의 어느 부분과 관련이 있을 것 같나요?",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって（免責事項）",
        en: "Before you use it (disclaimer)",
        hi: "उपयोग से पहले (अस्वीकरण)",
        ko: "이용 시 안내(면책 사항)",
      },
      body: [
        {
          ja: "このキャリアレポートは、インド占星術の伝統的な考え方にもとづく、自己理解と楽しみのための読み物です。就職・転職・進学・独立などの判断や、投資・収入に関する判断を代わりに行うものではなく、キャリアや金融に関する助言でもありません。",
          en: "This career report is reading material for self-understanding and enjoyment, based on the traditional ideas of Jyotish. It does not make decisions for you about job hunting, changing jobs, education, going independent, investment or income, and it is not career or financial advice.",
          hi: "यह करियर रिपोर्ट ज्योतिष की पारंपरिक अवधारणाओं पर आधारित, आत्म-समझ और आनंद के लिए पढ़ने की सामग्री है। यह नौकरी खोजने, नौकरी बदलने, शिक्षा, स्वतंत्र काम शुरू करने, निवेश या आय से जुड़े निर्णय आपकी जगह नहीं लेती, और यह करियर या वित्तीय सलाह नहीं है।",
          ko: "이 커리어 리포트는 인도 점성술의 전통적인 사고방식에 바탕을 둔, 자기 이해와 즐거움을 위한 읽을거리입니다. 취업·이직·진학·독립 등의 판단이나 투자·수입에 관한 판단을 대신하지 않으며, 커리어나 금융에 관한 조언도 아닙니다.",
        },
        {
          ja: "実際に進路や働き方を考えるときは、キャリアコンサルタントや学校・職場の相談窓口など、専門家に相談することをおすすめします。結果に不安を感じる必要はありません。チャートはあなたの可能性を狭めるものではなく、考えるきっかけの一つです。",
          en: "When you are actually weighing a path or a way of working, we recommend talking to a professional such as a career counsellor or the advisory service at your school or workplace. There is no need to feel anxious about the result: a chart does not narrow your possibilities; it is simply one prompt for thinking.",
          hi: "जब आप वास्तव में किसी राह या काम करने के तरीके पर विचार कर रहे हों, तो करियर काउंसलर या अपने विद्यालय या कार्यस्थल की परामर्श सेवा जैसे पेशेवर से बात करने की सलाह दी जाती है। परिणाम को लेकर चिंतित होने की ज़रूरत नहीं: कुंडली आपकी संभावनाओं को सीमित नहीं करती; यह सोचने का केवल एक प्रारंभ बिंदु है।",
          ko: "실제로 진로나 일하는 방식을 고민할 때는 커리어 컨설턴트나 학교·직장의 상담 창구 등 전문가와 상담하시기를 권합니다. 결과에 불안을 느낄 필요는 없습니다. 차트는 당신의 가능성을 좁히는 것이 아니라 생각의 계기 중 하나입니다.",
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
          ja: "D10と合わせて読むと理解が深まるページです。出生図の全体像や、運気の時期もあわせて確かめてみてください。",
          en: "These pages deepen your understanding when read alongside the D10. Check the full birth chart and the timing of your periods as well.",
          hi: "ये पृष्ठ D10 के साथ पढ़ने पर समझ को गहरा करते हैं। पूरी जन्म-कुंडली और अपनी दशाओं का समय भी देखें।",
          ko: "D10과 함께 읽으면 이해가 깊어지는 페이지입니다. 출생 차트의 전체 그림과 운의 시기도 함께 확인해 보세요.",
        },
      ],
      links: [
        {
          href: "/tools/birth-chart",
          label: {
            ja: "出生図（ホロスコープ）作成ツール",
            en: "Birth chart calculator",
            hi: "जन्म कुंडली कैलकुलेटर",
            ko: "출생 차트 계산기",
          },
        },
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ダシャー（運気の時期）計算ツール",
            en: "Dasha period calculator",
            hi: "दशा कैलकुलेटर",
            ko: "다샤 계산기",
          },
        },
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻チェック",
            en: "Birth time check",
            hi: "जन्म समय जांच",
            ko: "출생 시각 확인",
          },
        },
        {
          href: "/learn-jyotish/houses/twelve-houses",
          label: {
            ja: "12の室（ハウス）の意味",
            en: "The meaning of the twelve houses",
            hi: "बारह भावों का अर्थ",
            ko: "12하우스의 의미",
          },
        },
        {
          href: "/learn-jyotish/planets/planetary-karakas",
          label: {
            ja: "惑星のカーラカ（象意）",
            en: "Planetary karakas (significators)",
            hi: "ग्रहों के कारक",
            ko: "행성의 카라카(상징)",
          },
        },
      ],
    },
  ],
};
