import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/dasha-calculator.
 *
 * Written Japanese-first, matching sukuyo.ts and birth-chart.ts. The tool
 * renders the Vimshottari tree (DashaTimeline) four levels deep — maha,
 * antar, pratyantar, sookshma — each row a planet with start and end dates,
 * the running mahadasha opened by default. Everything below describes only
 * that output. The value-add is a fully worked sequence (Moon mid-Bharani)
 * so a reader can check the arithmetic behind their own timeline.
 */
export const dashaCalculatorLongForm: ToolLongForm = {
  slug: "dasha-calculator",
  sections: [
    {
      heading: {
        ja: "ダシャー計算ツールの使い方",
        en: "How to use the dasha calculator",
        hi: "दशा कैलकुलेटर का उपयोग कैसे करें",
        ko: "다샤 계산기 사용 방법",
      },
      body: [
        {
          ja: "入力するのは、生年月日・出生時刻・出生地の三つだけです。出生地は都市名で検索して選んでください。時差（タイムゾーン）は出生地から判断されるため、海外で生まれた方も、日本時間に換算せず現地の時刻をそのまま入力します。",
          en: "You only need three things: date of birth, time of birth and place of birth. Search for the birthplace by city name and select it. The time zone is worked out from the place, so if you were born abroad, enter the local clock time as it was — don't convert it to Japan time.",
          hi: "केवल तीन चीज़ें चाहिए: जन्म तिथि, जन्म समय और जन्म स्थान। जन्म स्थान को शहर के नाम से खोजकर चुनें। समय क्षेत्र स्थान से तय होता है, इसलिए विदेश में जन्म हुआ हो तो स्थानीय समय ही डालें — उसे जापान के समय में न बदलें।",
          ko: "입력할 것은 생년월일, 출생 시각, 출생지 세 가지뿐입니다. 출생지는 도시 이름으로 검색해 선택하세요. 시간대는 출생지로부터 판단되므로, 해외에서 태어났다면 일본 시간으로 바꾸지 말고 현지 시각을 그대로 입력합니다.",
        },
        {
          ja: "ダシャーは出生時の月の位置から計算されます。月は約1日で一つのナクシャトラ（13度20分）を通過するため、出生時刻が1時間ずれると、最初の期間の残り年数が数か月単位で変わります。母子手帳などに記録された時刻があれば、それを使うのが確実です。",
          en: "The dasha is calculated from the Moon's position at birth. The Moon crosses one nakshatra (13°20′) in roughly a day, so an hour's error in birth time shifts the balance of the first period by a matter of months. If your birth time was recorded officially (in Japan, often in the maternal and child health handbook), use that.",
          hi: "दशा की गणना जन्म के समय चंद्रमा की स्थिति से होती है। चंद्रमा लगभग एक दिन में एक नक्षत्र (13°20′) पार करता है, इसलिए जन्म समय में एक घंटे की गलती पहली दशा के शेष काल को कुछ महीनों तक खिसका देती है। यदि जन्म समय कहीं दर्ज है, तो वही उपयोग करें।",
          ko: "다샤는 출생 시 달의 위치로 계산됩니다. 달은 약 하루에 낙샤트라 하나(13°20′)를 지나가므로, 출생 시각이 1시간 어긋나면 첫 주기의 남은 기간이 몇 달 단위로 달라집니다. 공식 기록된 출생 시각이 있다면 그것을 쓰는 것이 확실합니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻が不明な場合：正午などの仮の時刻でも計算はできますが、開始日・終了日には数か月以上の誤差がありうると考えてください。",
          en: "Unknown birth time: a placeholder such as noon still produces a timeline, but treat every start and end date as possibly off by several months or more.",
          hi: "जन्म समय अज्ञात हो: दोपहर जैसे अनुमानित समय से भी गणना हो जाती है, पर आरंभ और समाप्ति तिथियों में कई महीनों या अधिक की त्रुटि संभव मानें।",
          ko: "출생 시각을 모를 때: 정오 같은 임시 시각으로도 계산은 되지만, 시작일과 종료일에 몇 달 이상의 오차가 있을 수 있다고 생각하세요.",
        },
        {
          ja: "月がナクシャトラの境目にいる場合：わずかな時刻の違いで最初の支配星そのものが入れ替わり、人生全体の順番がずれます。境目付近の方は出生時刻の確認をおすすめします。",
          en: "Moon near a nakshatra boundary: a small time difference can change the very first ruling planet and shift the whole sequence. If that's you, it's worth double-checking your birth time.",
          hi: "चंद्रमा नक्षत्र की सीमा के पास हो: थोड़े से समय-अंतर से पहला दशा-स्वामी ही बदल सकता है और पूरा क्रम खिसक जाता है। ऐसे में जन्म समय की पुष्टि करना उचित है।",
          ko: "달이 낙샤트라 경계 부근에 있을 때: 약간의 시각 차이로 첫 지배 행성 자체가 바뀌어 전체 순서가 어긋납니다. 이 경우 출생 시각을 확인해 보시길 권합니다.",
        },
        {
          ja: "西洋占星術との違い：当ツールはラヒリ・アヤナムシャによるサイデリアル（恒星）黄道を使います。西洋の星座占いとは約24度ずれるため、月の星座が一つ違って見えても計算の誤りではありません。",
          en: "Versus Western astrology: this tool uses the sidereal zodiac with the Lahiri ayanamsha. It sits about 24° away from the Western tropical zodiac, so a Moon sign that differs by one from a Western horoscope is not an error.",
          hi: "पश्चिमी ज्योतिष से अंतर: यह उपकरण लाहिड़ी अयनांश वाले निरयण राशिचक्र का उपयोग करता है। यह पश्चिमी सायन राशिचक्र से लगभग 24° अलग है, इसलिए चंद्र राशि एक राशि भिन्न दिखे तो वह त्रुटि नहीं है।",
          ko: "서양 점성술과의 차이: 이 도구는 라히리 아야남샤를 적용한 항성 황도를 사용합니다. 서양의 회귀 황도와 약 24도 차이가 나므로, 달 별자리가 하나 다르게 보여도 계산 오류가 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the result: the terms you'll see",
        hi: "परिणाम कैसे पढ़ें: दिखने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어",
      },
      body: [
        {
          ja: "結果は、惑星名と「開始日｜終了日」が並ぶ入れ子の一覧で表示されます。行をタップすると、その期間の内側にある細かい期間が開きます。現在進行中のマハーダシャーは、最初から開いた状態で表示されます。",
          en: "The result is a nested list in which each row shows a planet and its start and end dates. Tap a row to open the shorter periods inside it. The mahadasha you are in right now is shown already open.",
          hi: "परिणाम एक परतदार सूची के रूप में आता है, जिसकी हर पंक्ति में एक ग्रह और उसकी आरंभ व समाप्ति तिथि होती है। पंक्ति पर टैप करने से उसके भीतर की छोटी अवधियाँ खुलती हैं। अभी चल रही महादशा पहले से खुली दिखती है।",
          ko: "결과는 각 행에 행성 이름과 시작일·종료일이 표시되는 중첩 목록으로 나타납니다. 행을 탭하면 그 안의 더 짧은 주기가 펼쳐집니다. 현재 진행 중인 마하다샤는 처음부터 펼쳐진 상태로 표시됩니다.",
        },
        {
          ja: "例えば、マハーダシャーが木星、その中のアンタルダシャーが土星であれば、「木星期の中の土星の小期間」にいる、と読みます。大きな流れのテーマは木星が、その時期ごとの色合いは土星が担う、という捉え方です。",
          en: "For example, if your mahadasha is Jupiter and the antardasha inside it is Saturn, you read it as “the Saturn sub-period of the Jupiter period”: Jupiter sets the broad theme, and Saturn colours that particular stretch.",
          hi: "उदाहरण के लिए, यदि महादशा गुरु की है और उसके भीतर अंतर्दशा शनि की, तो इसे 'गुरु महादशा में शनि की अंतर्दशा' पढ़ते हैं: व्यापक विषय गुरु तय करता है और उस खंड का रंग शनि देता है।",
          ko: "예를 들어 마하다샤가 목성이고 그 안의 안타르다샤가 토성이라면 '목성 주기 안의 토성 소주기'에 있다고 읽습니다. 큰 흐름의 주제는 목성이, 그 시기의 색채는 토성이 맡는다는 관점입니다.",
        },
      ],
      bullets: [
        {
          ja: "マハーダシャー（第1階層）：6〜20年続く大きな期間。九つの惑星（太陽・月・火星・水星・木星・金星・土星・ラーフ・ケトゥ）が決まった順番で巡ります。",
          en: "Mahadasha (level 1): a major period lasting 6 to 20 years. The nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu — take turns in a fixed order.",
          hi: "महादशा (पहला स्तर): 6 से 20 वर्ष तक चलने वाली मुख्य अवधि। नौ ग्रह — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु — एक निश्चित क्रम में आते हैं।",
          ko: "마하다샤(1단계): 6~20년 이어지는 큰 주기. 아홉 행성(태양·달·화성·수성·목성·금성·토성·라후·케투)이 정해진 순서로 돌아갑니다.",
        },
        {
          ja: "アンタルダシャー（第2階層）：マハーダシャーを九つに分けた小期間。最初はマハーダシャーと同じ惑星から始まり、同じ順番で進みます。長さは数か月から3年程度です。",
          en: "Antardasha (level 2): the nine sub-periods inside a mahadasha. The first belongs to the mahadasha's own planet, and the rest follow the same order. Each lasts from a few months to about three years.",
          hi: "अंतर्दशा (दूसरा स्तर): महादशा के भीतर की नौ उप-अवधियाँ। पहली अंतर्दशा महादशा के अपने ग्रह की होती है, बाकी उसी क्रम में चलती हैं। प्रत्येक कुछ महीनों से लगभग तीन वर्ष तक की होती है।",
          ko: "안타르다샤(2단계): 마하다샤를 아홉으로 나눈 소주기. 첫 번째는 마하다샤와 같은 행성이며 나머지는 같은 순서로 이어집니다. 길이는 몇 달에서 3년 정도입니다.",
        },
        {
          ja: "プラティヤンタルダシャー（第3階層）：アンタルダシャーをさらに九分割したもの。数日から数か月の単位です。",
          en: "Pratyantardasha (level 3): each antardasha divided into nine again, lasting from days to months.",
          hi: "प्रत्यंतर दशा (तीसरा स्तर): प्रत्येक अंतर्दशा को फिर से नौ भागों में बाँटा गया, कुछ दिनों से कुछ महीनों तक।",
          ko: "프라티얀타르다샤(3단계): 안타르다샤를 다시 아홉으로 나눈 것으로, 며칠에서 몇 달 단위입니다.",
        },
        {
          ja: "スークシュマダシャー（第4階層）：さらに細かい、数日単位の期間。出生時刻の誤差の影響を最も受けやすいため、参考程度に見るのがおすすめです。",
          en: "Sookshma dasha (level 4): finer still, measured in days. It is the level most affected by birth-time error, so treat it as a rough guide.",
          hi: "सूक्ष्म दशा (चौथा स्तर): और भी सूक्ष्म, दिनों में मापी जाने वाली अवधि। जन्म समय की त्रुटि का सबसे अधिक असर इसी पर होता है, इसलिए इसे केवल संकेत मानें।",
          ko: "수크슈마 다샤(4단계): 더 세밀한, 며칠 단위의 주기. 출생 시각 오차의 영향을 가장 많이 받으므로 참고 정도로 보세요.",
        },
        {
          ja: "開始日・終了日：その期間が始まる日と終わる日。一つの期間の終了日が、次の期間の開始日になります。",
          en: "Start and end dates: the day a period begins and the day it ends. One period's end date is the next one's start date.",
          hi: "आरंभ और समाप्ति तिथि: अवधि शुरू होने और खत्म होने का दिन। एक अवधि की समाप्ति तिथि ही अगली की आरंभ तिथि होती है।",
          ko: "시작일·종료일: 주기가 시작되는 날과 끝나는 날. 한 주기의 종료일이 다음 주기의 시작일이 됩니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：ヴィムショッタリ・ダシャーの仕組み",
        en: "Background: how Vimshottari dasha works",
        hi: "पृष्ठभूमि: विंशोत्तरी दशा कैसे काम करती है",
        ko: "배경 지식: 비쇼타리 다샤의 원리",
      },
      body: [
        {
          ja: "「ヴィムショッタリ」はサンスクリット語で「120」を意味し、九惑星の期間を合計すると120年になります。各惑星の年数は、ケトゥ7年・金星20年・太陽6年・月10年・火星7年・ラーフ18年・木星16年・土星19年・水星17年で、この順番で巡ります。",
          en: "“Vimshottari” means “120” in Sanskrit: the nine planetary periods add up to 120 years. They run in this order — Ketu 7, Venus 20, Sun 6, Moon 10, Mars 7, Rahu 18, Jupiter 16, Saturn 19 and Mercury 17 years.",
          hi: "'विंशोत्तरी' का अर्थ संस्कृत में '120' है: नौ ग्रहों की दशाओं का योग 120 वर्ष होता है। क्रम इस प्रकार है — केतु 7, शुक्र 20, सूर्य 6, चंद्र 10, मंगल 7, राहु 18, गुरु 16, शनि 19 और बुध 17 वर्ष।",
          ko: "'빔쇼타리'는 산스크리트어로 '120'을 뜻하며, 아홉 행성의 주기를 합하면 120년이 됩니다. 순서는 케투 7년, 금성 20년, 태양 6년, 달 10년, 화성 7년, 라후 18년, 목성 16년, 토성 19년, 수성 17년입니다.",
        },
        {
          ja: "どの惑星から始まるかは、出生時に月がいたナクシャトラ（27の月宿）の支配星で決まります。27のナクシャトラは上の九惑星が三巡するように割り当てられており、例えばアシュヴィニーはケトゥ、バラニーは金星、クリッティカーは太陽が支配します。",
          en: "Where the sequence starts is set by the ruler of the nakshatra — one of 27 lunar mansions — that the Moon occupied at birth. The 27 nakshatras are assigned to these nine planets three times over: Ashwini to Ketu, Bharani to Venus, Krittika to the Sun, and so on.",
          hi: "क्रम कहाँ से शुरू होगा, यह जन्म के समय चंद्रमा के नक्षत्र (27 में से एक) के स्वामी से तय होता है। 27 नक्षत्र इन नौ ग्रहों में तीन बार बँटे हैं: अश्विनी केतु का, भरणी शुक्र का, कृत्तिका सूर्य का, इत्यादि।",
          ko: "어느 행성부터 시작하는지는 출생 시 달이 머문 낙샤트라(27개 달의 별자리)의 지배 행성으로 정해집니다. 27개 낙샤트라는 이 아홉 행성에 세 번씩 배정되어, 아슈위니는 케투, 바라니는 금성, 크리티카는 태양이 지배하는 식입니다.",
        },
        {
          ja: "西洋占星術では、現在の天体の動き（トランジット）やプログレスで時期を読むのが一般的です。ダシャーはそれとは別に、生まれた瞬間に決まる「人生の時間割」のような体系で、インド占星術ではトランジットはダシャーの文脈の上で読むものとされています。",
          en: "Western astrology usually times events through current planetary movements (transits) or progressions. The dasha system is something else: a kind of life timetable fixed at the moment of birth. In Jyotish, transits are read against the backdrop of the running dasha rather than on their own.",
          hi: "पश्चिमी ज्योतिष में समय का आकलन प्रायः वर्तमान ग्रह-गोचर या प्रोग्रेशन से किया जाता है। दशा प्रणाली अलग है: जन्म के क्षण तय होने वाली जीवन की एक समय-सारणी। ज्योतिष में गोचर को चल रही दशा के संदर्भ में ही पढ़ा जाता है।",
          ko: "서양 점성술에서는 현재 행성의 움직임(트랜짓)이나 프로그레션으로 시기를 읽는 것이 일반적입니다. 다샤는 그와 별개로 태어난 순간 정해지는 '인생의 시간표' 같은 체계이며, 조티시에서는 트랜짓을 진행 중인 다샤의 맥락 위에서 읽습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "計算例：月がバラニー（金星）にある場合",
        en: "Worked example: the Moon in Bharani (Venus)",
        hi: "गणना का उदाहरण: चंद्रमा भरणी (शुक्र) में",
        ko: "계산 예시: 달이 바라니(금성)에 있는 경우",
      },
      body: [
        {
          ja: "ここでは説明用の架空の例として、出生時の月が金星の支配するバラニーのちょうど中央にいたとします。月はバラニーの半分をすでに通過しているので、金星期20年のうち残りは半分の10年です。誕生から10歳までが金星期となり、そのあとは決まった順番で次の惑星へ進みます。",
          en: "As an illustrative, made-up example, suppose the Moon at birth sat exactly halfway through Bharani, a Venus-ruled nakshatra. Half the nakshatra has already been crossed, so half of Venus's 20 years — 10 years — remain. The Venus period runs from birth to age 10, after which the planets follow in their fixed order.",
          hi: "एक काल्पनिक उदाहरण के रूप में मान लें कि जन्म के समय चंद्रमा शुक्र-शासित भरणी नक्षत्र के ठीक मध्य में था। आधा नक्षत्र पार हो चुका है, इसलिए शुक्र के 20 वर्षों में से आधे — 10 वर्ष — शेष हैं। जन्म से 10 वर्ष की आयु तक शुक्र दशा चलती है, फिर ग्रह निश्चित क्रम में आते हैं।",
          ko: "설명을 위한 가상의 예로, 출생 시 달이 금성이 지배하는 바라니의 정확히 중앙에 있었다고 해 봅시다. 낙샤트라의 절반을 이미 지났으므로 금성 주기 20년 중 절반인 10년이 남습니다. 출생부터 10세까지가 금성 주기이고, 그 뒤로는 정해진 순서대로 다음 행성으로 넘어갑니다.",
        },
      ],
      bullets: [
        {
          ja: "金星期：0〜10歳（残り10年）",
          en: "Venus: age 0–10 (10 years remaining)",
          hi: "शुक्र: 0–10 वर्ष (10 वर्ष शेष)",
          ko: "금성: 0~10세 (남은 10년)",
        },
        {
          ja: "太陽期：10〜16歳（6年）",
          en: "Sun: age 10–16 (6 years)",
          hi: "सूर्य: 10–16 वर्ष (6 वर्ष)",
          ko: "태양: 10~16세 (6년)",
        },
        {
          ja: "月期：16〜26歳（10年）",
          en: "Moon: age 16–26 (10 years)",
          hi: "चंद्र: 16–26 वर्ष (10 वर्ष)",
          ko: "달: 16~26세 (10년)",
        },
        {
          ja: "火星期：26〜33歳（7年）",
          en: "Mars: age 26–33 (7 years)",
          hi: "मंगल: 26–33 वर्ष (7 वर्ष)",
          ko: "화성: 26~33세 (7년)",
        },
        {
          ja: "ラーフ期：33〜51歳（18年）",
          en: "Rahu: age 33–51 (18 years)",
          hi: "राहु: 33–51 वर्ष (18 वर्ष)",
          ko: "라후: 33~51세 (18년)",
        },
        {
          ja: "木星期：51〜67歳（16年）",
          en: "Jupiter: age 51–67 (16 years)",
          hi: "गुरु: 51–67 वर्ष (16 वर्ष)",
          ko: "목성: 51~67세 (16년)",
        },
        {
          ja: "土星期：67〜86歳（19年）、続いて水星期：86〜103歳（17年）",
          en: "Saturn: age 67–86 (19 years), then Mercury: age 86–103 (17 years)",
          hi: "शनि: 67–86 वर्ष (19 वर्ष), फिर बुध: 86–103 वर्ष (17 वर्ष)",
          ko: "토성: 67~86세 (19년), 이어서 수성: 86~103세 (17년)",
        },
      ],
    },
    {
      heading: {
        ja: "アンタルダシャーの長さの求め方",
        en: "How antardasha lengths are worked out",
        hi: "अंतर्दशा की अवधि कैसे निकलती है",
        ko: "안타르다샤 길이를 구하는 법",
      },
      body: [
        {
          ja: "アンタルダシャーの長さは「マハーダシャーの年数 × その惑星の年数 ÷ 120」で求められます。上の例の金星期（本来20年）の中の太陽アンタルダシャーなら、20 × 6 ÷ 120 = 1年です。ラーフ期18年の最初にあたるラーフ・アンタルダシャーなら、18 × 18 ÷ 120 = 2.7年、つまり約2年8か月になります。",
          en: "An antardasha's length is the mahadasha's years × the sub-period planet's years ÷ 120. In the example above, the Sun antardasha inside a (full, 20-year) Venus period is 20 × 6 ÷ 120 = 1 year. The Rahu antardasha that opens Rahu's 18-year period is 18 × 18 ÷ 120 = 2.7 years — about two years and eight months.",
          hi: "अंतर्दशा की अवधि = महादशा के वर्ष × उप-अवधि ग्रह के वर्ष ÷ 120। ऊपर के उदाहरण में (पूर्ण 20 वर्ष की) शुक्र दशा के भीतर सूर्य अंतर्दशा 20 × 6 ÷ 120 = 1 वर्ष की होती है। राहु की 18 वर्ष की दशा की पहली, राहु अंतर्दशा 18 × 18 ÷ 120 = 2.7 वर्ष — लगभग दो वर्ष आठ महीने — की होती है।",
          ko: "안타르다샤의 길이는 '마하다샤 연수 × 해당 행성의 연수 ÷ 120'으로 구합니다. 위 예시에서 (원래 20년인) 금성 주기 안의 태양 안타르다샤는 20 × 6 ÷ 120 = 1년입니다. 18년 라후 주기의 첫 번째인 라후 안타르다샤는 18 × 18 ÷ 120 = 2.7년, 즉 약 2년 8개월입니다.",
        },
        {
          ja: "生まれたときのマハーダシャーは途中から始まるため、その中のアンタルダシャーも、すでに過ぎた分は省かれて途中から表示されます。結果の最初の期間が短く見えるのはそのためです。",
          en: "Because the mahadasha you were born into starts partway through, its antardashas also start partway: the portion already elapsed before birth is left out. That's why the first period in your result can look short.",
          hi: "चूँकि जन्म के समय की महादशा बीच से शुरू होती है, उसकी अंतर्दशाएँ भी बीच से दिखाई जाती हैं: जन्म से पहले बीता भाग छोड़ दिया जाता है। इसीलिए परिणाम की पहली अवधि छोटी दिख सकती है।",
          ko: "태어날 때의 마하다샤는 도중부터 시작하므로, 그 안의 안타르다샤도 이미 지난 부분은 빠지고 도중부터 표시됩니다. 결과의 첫 주기가 짧아 보이는 것은 그 때문입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "A note before you read your timeline",
        hi: "उपयोग से पहले एक बात",
        ko: "이용하시기 전에",
      },
      body: [
        {
          ja: "ダシャーは、人生の流れを振り返ったり、これからの過ごし方を考えたりするための一つの視点です。「土星期だから不幸になる」といった決めつけは、伝統的な読み方とも異なります。同じ惑星の期間でも、出生図全体でその惑星がどう配置されているかによって意味は大きく変わります。",
          en: "A dasha is one lens for looking back on your life and thinking about the time ahead. Conclusions like “Saturn period, so things will go badly” don't match traditional practice either: the same planet's period means very different things depending on where that planet sits in the whole chart.",
          hi: "दशा जीवन के प्रवाह पर पीछे देखने और आगे के समय पर विचार करने का एक दृष्टिकोण है। 'शनि दशा है, इसलिए बुरा होगा' जैसे निष्कर्ष परंपरागत पद्धति से भी मेल नहीं खाते: एक ही ग्रह की दशा का अर्थ पूरी कुंडली में उस ग्रह की स्थिति पर बहुत निर्भर करता है।",
          ko: "다샤는 삶의 흐름을 돌아보고 앞으로의 시간을 생각해 보기 위한 하나의 관점입니다. '토성 주기라서 불행해진다' 같은 단정은 전통적인 해석과도 다릅니다. 같은 행성의 주기라도 출생 차트 전체에서 그 행성이 어디에 있는지에 따라 의미가 크게 달라집니다.",
        },
        {
          ja: "当ツールの結果は自己理解と楽しみのための参考情報であり、医療・法律・投資などの判断に代わるものではありません。大切な決断は、必要に応じて専門家にご相談ください。",
          en: "This tool's results are for self-reflection and enjoyment. They are not a substitute for medical, legal or financial advice; for important decisions, please consult a qualified professional.",
          hi: "इस उपकरण के परिणाम आत्मचिंतन और आनंद के लिए हैं। ये चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं हैं; महत्वपूर्ण निर्णयों के लिए योग्य विशेषज्ञ से परामर्श करें।",
          ko: "이 도구의 결과는 자기 이해와 즐거움을 위한 참고 정보이며, 의료·법률·투자 판단을 대신하지 않습니다. 중요한 결정은 필요에 따라 전문가와 상의하세요.",
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
          ja: "ダシャーの起点になる月のナクシャトラや、出生時刻の確かめ方もあわせてご覧ください。",
          en: "See also the Moon nakshatra your dasha starts from, and how to check your birth time.",
          hi: "दशा के आरंभ-बिंदु चंद्र नक्षत्र और जन्म समय की जाँच के बारे में भी देखें।",
          ko: "다샤의 기점이 되는 달의 낙샤트라와 출생 시각 확인 방법도 함께 보세요.",
        },
      ],
      links: [
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ（月宿）を調べる",
            en: "Nakshatra finder",
            hi: "नक्षत्र खोजें",
            ko: "낙샤트라 찾기",
          },
        },
        {
          href: "/learn-jyotish/mahadashas/mahadashas",
          label: {
            ja: "マハーダシャーを学ぶ",
            en: "Learn about mahadashas",
            hi: "महादशा के बारे में जानें",
            ko: "마하다샤 배우기",
          },
        },
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻チェック",
            en: "Birth time check",
            hi: "जन्म समय जाँच",
            ko: "출생 시각 확인",
          },
        },
        {
          href: "/tools/transit-now",
          label: {
            ja: "現在のトランジット",
            en: "Current transits",
            hi: "वर्तमान गोचर",
            ko: "현재 트랜짓",
          },
        },
        {
          href: "/tools/birth-chart",
          label: {
            ja: "出生図（クンダリ）を作成",
            en: "Make your birth chart",
            hi: "जन्म कुंडली बनाएँ",
            ko: "출생 차트 만들기",
          },
        },
      ],
    },
  ],
};
