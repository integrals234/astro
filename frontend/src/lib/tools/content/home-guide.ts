import type { PageGuide } from "./types";

/**
 * Explanatory guide + FAQ under the home page's story sections.
 *
 * Written Japanese-first. The home page is the site's top-traffic entry for
 * "インド占星術 出生図 無料" searches, so this guide orients a first-time
 * visitor: what a Jyotish birth chart is, how the form above works, how to
 * read the handful of terms the result shows, and how it differs from the
 * Western astrology most Japanese readers already know.
 */
export const homeGuide: PageGuide = {
  sections: [
    {
      heading: {
        ja: "インド占星術（ジョーティッシュ）の出生図とは",
        en: "What an Indian astrology (Jyotish) birth chart is",
        hi: "भारतीय ज्योतिष की जन्म कुंडली क्या है",
        ko: "인도 점성술(조티시)의 출생 차트란",
      },
      body: [
        {
          ja: "インド占星術は、サンスクリット語で「ジョーティッシュ（光の学問）」と呼ばれる、インドで受け継がれてきた占星術です。その中心にあるのが出生図（クンダリ、ホロスコープ）で、生まれた瞬間に空のどこに太陽・月・惑星があったかを、一枚の図にまとめたものです。",
          en: "Indian astrology is known in Sanskrit as Jyotish, \"the science of light\", a tradition handed down in India for many centuries. At its centre is the birth chart (kundli, or horoscope): a single diagram recording where the Sun, the Moon and the planets stood in the sky at the moment you were born.",
          hi: "भारतीय ज्योतिष को संस्कृत में \"ज्योतिष\" — प्रकाश का विज्ञान — कहा जाता है, जो भारत में पीढ़ियों से चली आ रही परंपरा है। इसके केंद्र में जन्म कुंडली है: एक चित्र जो दर्शाता है कि आपके जन्म के क्षण सूर्य, चंद्रमा और ग्रह आकाश में कहाँ थे।",
          ko: "인도 점성술은 산스크리트어로 '조티시(빛의 학문)'라 불리며, 인도에서 오랫동안 이어져 온 점성술입니다. 그 중심에는 출생 차트(쿤달리, 호로스코프)가 있습니다. 태어난 순간 태양·달·행성이 하늘의 어디에 있었는지를 한 장의 그림으로 정리한 것입니다.",
        },
        {
          ja: "Jyotish Life では、この出生図を無料で作成できます。生年月日・出生時刻・出生地を入力すると、ラグナ（上昇宮）、月のナクシャトラ、太陽の星座、いま巡っているダシャー（運気の時期）がすぐに表示され、さらに詳しいチャートでは惑星の位置やヨーガ、ダシャーの年表まで確認できます。",
          en: "Jyotish Life lets you create this chart for free. Enter your date, time and place of birth, and you immediately see your Lagna (ascendant), the Moon's nakshatra, your Sun sign and the dasha (planetary period) you are in now; the full chart goes further, with planetary positions, yogas and a dasha timeline.",
          hi: "Jyotish Life पर आप यह कुंडली निःशुल्क बना सकते हैं। जन्म तिथि, समय और स्थान दर्ज करते ही आपका लग्न, चंद्रमा का नक्षत्र, सूर्य राशि और वर्तमान दशा तुरंत दिखाई देती है; पूरी कुंडली में ग्रहों की स्थिति, योग और दशा की समय-रेखा भी देख सकते हैं।",
          ko: "Jyotish Life에서는 이 출생 차트를 무료로 만들 수 있습니다. 생년월일·출생 시각·출생지를 입력하면 라그나(상승궁), 달의 낙샤트라, 태양 별자리, 지금 지나고 있는 다샤(행성 시기)가 바로 표시되고, 상세 차트에서는 행성 위치, 요가, 다샤 연표까지 확인할 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方：出生図を作成する3つのステップ",
        en: "How to use it: three steps to your birth chart",
        hi: "उपयोग कैसे करें: कुंडली बनाने के तीन चरण",
        ko: "사용 방법: 출생 차트를 만드는 세 단계",
      },
      body: [
        {
          ja: "ページ上部のフォームに入力するだけで始められます。会員登録は必要なく、ログインしない限り入力したデータは保存されません。",
          en: "You can start with nothing more than the form at the top of this page. No registration is needed, and nothing you enter is saved unless you sign in.",
          hi: "इस पृष्ठ के ऊपर दिए फ़ॉर्म से ही शुरुआत हो जाती है। पंजीकरण की आवश्यकता नहीं है, और साइन इन किए बिना आपका डेटा सहेजा नहीं जाता।",
          ko: "페이지 위쪽의 양식에 입력하는 것만으로 시작할 수 있습니다. 회원 가입은 필요 없으며, 로그인하지 않으면 입력한 데이터는 저장되지 않습니다.",
        },
        {
          ja: "生年月日を入れた時点で、その日の月の星座とナクシャトラの概算がプレビューとして現れます。ボタンを押すと正確な計算が行われ、結果のカードの先から、全体を見渡せるチャートページ（/chart）へ進めます。",
          en: "As soon as you enter a date, an approximate preview of that day's Moon sign and nakshatra appears. Pressing the button runs the exact calculation, and from the result cards you can continue to the chart page (/chart) for the complete picture.",
          hi: "तिथि दर्ज करते ही उस दिन की चंद्र राशि और नक्षत्र का अनुमानित पूर्वावलोकन दिखता है। बटन दबाने पर सटीक गणना होती है, और परिणाम कार्डों से आप पूरी तस्वीर के लिए कुंडली पृष्ठ (/chart) पर जा सकते हैं।",
          ko: "날짜를 입력하는 순간 그날 달의 별자리와 낙샤트라의 대략적인 미리보기가 나타납니다. 버튼을 누르면 정확한 계산이 이루어지고, 결과 카드에서 전체를 볼 수 있는 차트 페이지(/chart)로 이어집니다.",
        },
      ],
      bullets: [
        {
          ja: "ステップ1：生年月日を入力します（西暦）。",
          en: "Step 1: enter your date of birth.",
          hi: "चरण 1: अपनी जन्म तिथि दर्ज करें।",
          ko: "1단계: 생년월일을 입력합니다.",
        },
        {
          ja: "ステップ2：出生時刻を、生まれた土地の現地時刻で入力します。母子手帳などで確認できると精度が上がります。時刻欄は初期値が12:00なので、わかる場合は必ず書き換えてください。",
          en: "Step 2: enter your time of birth in the local time of your birthplace. Checking a birth record improves accuracy. The time field starts at 12:00, so be sure to change it if you know your time.",
          hi: "चरण 2: जन्म का समय जन्मस्थान के स्थानीय समय में दर्ज करें। जन्म प्रमाण पत्र से पुष्टि करने पर सटीकता बढ़ती है। समय का प्रारंभिक मान 12:00 है, इसलिए यदि आपको समय पता है तो उसे अवश्य बदलें।",
          ko: "2단계: 출생 시각을 태어난 곳의 현지 시각으로 입력합니다. 출생 기록으로 확인하면 정확도가 높아집니다. 시각 칸의 초기값은 12:00이므로, 알고 있다면 꼭 바꿔 주세요.",
        },
        {
          ja: "ステップ3：出生地を検索して候補から選びます。緯度・経度とタイムゾーンの判断に使うため、今住んでいる場所ではなく生まれた場所を選びます。お名前は任意です。",
          en: "Step 3: search for your birthplace and pick it from the suggestions. It sets the latitude, longitude and time zone, so choose where you were born, not where you live now. Adding a name is optional.",
          hi: "चरण 3: जन्मस्थान खोजें और सुझावों में से चुनें। इससे अक्षांश, देशांतर और समय क्षेत्र तय होते हैं, इसलिए वर्तमान निवास नहीं, बल्कि जन्मस्थान चुनें। नाम जोड़ना वैकल्पिक है।",
          ko: "3단계: 출생지를 검색해 후보에서 고릅니다. 위도·경도와 시간대 판단에 쓰이므로, 지금 사는 곳이 아니라 태어난 곳을 선택하세요. 이름은 선택 사항입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：最初に覚えたい6つの用語",
        en: "Reading the result: six terms to learn first",
        hi: "परिणाम कैसे पढ़ें: पहले सीखने योग्य छह शब्द",
        ko: "결과 읽는 법: 먼저 알아 둘 여섯 가지 용어",
      },
      body: [
        {
          ja: "結果には耳慣れないサンスクリット語が並びますが、基本は次の6つで十分です。",
          en: "The result is full of unfamiliar Sanskrit words, but these six are enough to begin with.",
          hi: "परिणाम में कई संस्कृत शब्द होते हैं, पर शुरुआत के लिए ये छह पर्याप्त हैं।",
          ko: "결과에는 낯선 산스크리트어가 많지만, 처음에는 다음 여섯 가지면 충분합니다.",
        },
        {
          ja: "例えば、ラグナが獅子座、月が蟹座のプシュヤ、いまのダシャーが金星期と表示されたとします（あくまで説明用の例です）。この場合、獅子座が第1室となって十二の室の並びが決まり、蟹座はその一つ手前の第12室にあたります。月は心の在り方を表すので、プシュヤの「育む」性質が感情面のテーマとして読まれ、金星期は人間関係や美しいものとの縁が意識されやすい時期、というように組み合わせて読んでいきます。",
          en: "Say, purely as an illustration, the result shows a Leo Lagna, the Moon in Cancer in Pushya, and a current Venus dasha. Leo then becomes the 1st house and fixes the order of all twelve houses, so Cancer falls in the 12th. Because the Moon describes the mind, Pushya's nurturing quality is read as an emotional theme, and a Venus period is one in which relationships and beauty tend to come to the fore. The chart is read by combining pieces like these.",
          hi: "मान लीजिए, केवल उदाहरण के लिए, परिणाम में सिंह लग्न, कर्क राशि में पुष्य नक्षत्र का चंद्रमा, और वर्तमान शुक्र दशा दिखती है। तब सिंह पहला भाव बनकर बारह भावों का क्रम तय करता है, और कर्क बारहवें भाव में आता है। चंद्रमा मन का सूचक है, इसलिए पुष्य का पोषण करने वाला स्वभाव भावनात्मक विषय के रूप में पढ़ा जाता है, और शुक्र दशा में संबंध और सौंदर्य प्रमुख होते हैं — इसी तरह अंशों को जोड़कर कुंडली पढ़ी जाती है।",
          ko: "예를 들어(설명을 위한 예시일 뿐입니다) 라그나가 사자자리, 달이 게자리의 푸쉬야, 현재 다샤가 금성기로 나왔다고 합시다. 이 경우 사자자리가 1하우스가 되어 열두 하우스의 순서가 정해지고, 게자리는 그 바로 앞인 12하우스에 해당합니다. 달은 마음을 나타내므로 푸쉬야의 '돌보는' 성질이 감정의 주제로 읽히고, 금성기는 인간관계나 아름다운 것과의 인연이 두드러지기 쉬운 시기로 봅니다. 이렇게 조각들을 조합해 읽어 갑니다.",
        },
      ],
      bullets: [
        {
          ja: "ラグナ（上昇宮）：生まれた瞬間に東の地平線から昇っていた星座。図全体の基準となり、第一印象や人生への向き合い方を表します。約2時間ごとに変わるため、出生時刻の影響を最も受けます。",
          en: "Lagna (ascendant): the sign rising on the eastern horizon at birth. It anchors the whole chart and describes first impressions and your approach to life. It changes roughly every two hours, so it is the most sensitive to birth time.",
          hi: "लग्न: जन्म के क्षण पूर्वी क्षितिज पर उदित राशि। यह पूरी कुंडली का आधार है और पहली छाप तथा जीवन के प्रति दृष्टिकोण दर्शाता है। लगभग हर दो घंटे में बदलने के कारण यह जन्म समय से सबसे अधिक प्रभावित होता है।",
          ko: "라그나(상승궁): 태어난 순간 동쪽 지평선에서 떠오르던 별자리. 차트 전체의 기준이 되며 첫인상과 삶을 대하는 방식을 나타냅니다. 약 2시간마다 바뀌므로 출생 시각의 영향을 가장 크게 받습니다.",
        },
        {
          ja: "ラーシ（星座）：黄道を30度ずつ12に分けた区画。牡羊座から魚座まで、名前は西洋と同じですが基準点が異なります。",
          en: "Rashi (sign): one of twelve 30-degree divisions of the zodiac. The names, Aries to Pisces, match the Western ones, but the starting point differs.",
          hi: "राशि: राशिचक्र के 30-30 अंश के बारह भाग। मेष से मीन तक नाम पश्चिमी के समान हैं, पर आरंभ बिंदु भिन्न है।",
          ko: "라시(별자리): 황도를 30도씩 12개로 나눈 구역. 양자리부터 물고기자리까지 이름은 서양과 같지만 기준점이 다릅니다.",
        },
        {
          ja: "ナクシャトラ（月宿）：黄道を27に分けた区画で、一つは13度20分。特に月が入っているナクシャトラは、心の細やかな傾向を表すものとして重視されます。日本の宿曜占星術の二十七宿もここから生まれました。",
          en: "Nakshatra (lunar mansion): one of 27 divisions of the zodiac, each 13°20'. The nakshatra holding the Moon is given special weight as a picture of the mind's finer tendencies. Japan's Sukuyo astrology and its 27 mansions grew from this system.",
          hi: "नक्षत्र: राशिचक्र के 27 भाग, प्रत्येक 13°20'। विशेषकर चंद्रमा जिस नक्षत्र में हो, उसे मन की सूक्ष्म प्रवृत्तियों का सूचक माना जाता है। जापान का सुकुयो ज्योतिष और उसके 27 भवन इसी से विकसित हुए।",
          ko: "낙샤트라(월숙): 황도를 27개로 나눈 구역으로 하나가 13도 20분입니다. 특히 달이 들어 있는 낙샤트라는 마음의 섬세한 경향을 나타내는 것으로 중시됩니다. 일본의 스쿠요 점성술의 27수도 여기서 비롯되었습니다.",
        },
        {
          ja: "グラハ（天体）：太陽・月・火星・水星・木星・金星・土星の7つに、月の軌道の交点であるラーフとケートゥを加えた9つ。天王星・海王星・冥王星は伝統的には使いません。",
          en: "Graha (planet): nine bodies — the Sun, Moon, Mars, Mercury, Jupiter, Venus and Saturn, plus Rahu and Ketu, the nodes of the Moon's orbit. Uranus, Neptune and Pluto are not used traditionally.",
          hi: "ग्रह: नौ ग्रह — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, तथा चंद्र कक्षा के पात राहु और केतु। परंपरा में यूरेनस, नेपच्यून और प्लूटो का उपयोग नहीं होता।",
          ko: "그라하(천체): 태양·달·화성·수성·목성·금성·토성의 일곱에 달 궤도의 교점인 라후와 케투를 더한 아홉. 천왕성·해왕성·명왕성은 전통적으로 사용하지 않습니다.",
        },
        {
          ja: "バーヴァ（室・ハウス）：ラグナを第1室として並ぶ12の区画。仕事、家庭、結婚など人生の領域を表し、どの室にどの天体があるかで重点が見えてきます。",
          en: "Bhava (house): the twelve divisions counted from the Lagna as the 1st house. They stand for areas of life such as work, home and marriage, and which planets occupy which houses shows where the emphasis lies.",
          hi: "भाव: लग्न को पहला भाव मानकर गिने जाने वाले बारह भाग। ये कार्य, घर, विवाह जैसे जीवन क्षेत्रों के सूचक हैं, और कौन-सा ग्रह किस भाव में है, इससे ज़ोर का पता चलता है।",
          ko: "바바(하우스): 라그나를 1하우스로 하여 이어지는 12개 구역. 일, 가정, 결혼 같은 삶의 영역을 나타내며, 어느 하우스에 어떤 천체가 있는지로 중점이 보입니다.",
        },
        {
          ja: "ダシャー（運気の時期）：人生を天体ごとの時期に区切る、インド占星術独自の時間の読み方。代表的なヴィムショッタリ・ダシャーは120年で一巡し、生まれたときの月のナクシャトラによって最初の時期が決まります。",
          en: "Dasha (planetary period): Jyotish's own way of reading time, dividing life into periods ruled by each planet. The standard Vimshottari dasha runs a 120-year cycle, and its first period is set by the Moon's nakshatra at birth.",
          hi: "दशा: ज्योतिष की समय पढ़ने की अपनी पद्धति, जो जीवन को ग्रहों के कालखंडों में बाँटती है। प्रचलित विंशोत्तरी दशा का चक्र 120 वर्ष का है, और पहली दशा जन्म के समय चंद्र नक्षत्र से तय होती है।",
          ko: "다샤(행성 시기): 삶을 천체별 시기로 나누는 인도 점성술 고유의 시간 읽기. 대표적인 빔쇼타리 다샤는 120년 주기로 돌며, 첫 시기는 태어날 때 달의 낙샤트라로 정해집니다.",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術との違い",
        en: "How it differs from Western astrology",
        hi: "पश्चिमी ज्योतिष से अंतर",
        ko: "서양 점성술과의 차이",
      },
      body: [
        {
          ja: "雑誌の星占いでなじみのある西洋占星術は、多くの場合、春分点を牡羊座0度とする「トロピカル黄道」を使います。一方インド占星術は、実際の星々を基準にした「サイデリアル黄道」を使います。地球の歳差運動によって両者の基準点は少しずつ離れ、現在は約24度の差（アヤナムシャ）があります。当サイトはインドで標準的なラヒリ・アヤナムシャで計算しています。",
          en: "The Western astrology familiar from magazine horoscopes usually uses the tropical zodiac, which puts 0° Aries at the spring equinox. Jyotish uses the sidereal zodiac, anchored to the actual stars. Because of the Earth's precession the two starting points drift apart, and today they are about 24 degrees apart — the ayanamsa. This site calculates with the Lahiri ayanamsa, the standard in India.",
          hi: "पत्रिकाओं के राशिफल वाला पश्चिमी ज्योतिष प्रायः सायन राशिचक्र का उपयोग करता है, जो वसंत विषुव को मेष 0° मानता है। भारतीय ज्योतिष वास्तविक तारों पर आधारित निरयण राशिचक्र का उपयोग करता है। पृथ्वी के अयन-चलन से दोनों के आरंभ बिंदु धीरे-धीरे दूर हुए हैं और आज लगभग 24 अंश का अंतर (अयनांश) है। यह साइट भारत में मानक लाहिड़ी अयनांश से गणना करती है।",
          ko: "잡지 별자리 운세로 익숙한 서양 점성술은 대개 춘분점을 양자리 0도로 삼는 '회귀 황도'를 씁니다. 반면 인도 점성술은 실제 별을 기준으로 한 '항성 황도'를 씁니다. 지구의 세차운동으로 두 기준점은 조금씩 멀어져 현재 약 24도 차이(아야남샤)가 납니다. 이 사이트는 인도에서 표준인 라히리 아야남샤로 계산합니다.",
        },
        {
          ja: "そのため、西洋の星占いで「牡羊座」だった人の太陽が、ここでは一つ手前の「魚座」と表示されることがよくあります。これは計算の誤りではなく、物差しの違いによるものです。",
          en: "That is why someone whose Western Sun sign is Aries often sees the Sun in Pisces, one sign earlier, here. It is a difference of yardstick, not a calculation error.",
          hi: "इसीलिए पश्चिमी राशिफल में जिनकी सूर्य राशि मेष है, उन्हें यहाँ प्रायः एक राशि पहले मीन दिखती है। यह गणना की त्रुटि नहीं, मापदंड का अंतर है।",
          ko: "그래서 서양 별자리 운세에서 '양자리'였던 사람의 태양이 여기서는 한 칸 앞의 '물고기자리'로 표시되는 경우가 많습니다. 계산 오류가 아니라 잣대의 차이입니다.",
        },
      ],
      bullets: [
        {
          ja: "黄道：西洋はトロピカル（春分点基準）、インドはサイデリアル（恒星基準・ラヒリ）。",
          en: "Zodiac: Western uses tropical (equinox-based); Indian uses sidereal (star-based, Lahiri).",
          hi: "राशिचक्र: पश्चिमी — सायन (विषुव आधारित); भारतीय — निरयण (तारा आधारित, लाहिड़ी)।",
          ko: "황도: 서양은 회귀 황도(춘분점 기준), 인도는 항성 황도(별 기준·라히리).",
        },
        {
          ja: "重視する天体：西洋は太陽星座が中心、インドは月とラグナを特に重んじます。",
          en: "Emphasis: Western centres on the Sun sign; Indian gives special weight to the Moon and the Lagna.",
          hi: "महत्व: पश्चिमी में सूर्य राशि केंद्र में है; भारतीय में चंद्रमा और लग्न को विशेष महत्व दिया जाता है।",
          ko: "중시하는 천체: 서양은 태양 별자리 중심, 인도는 달과 라그나를 특히 중시합니다.",
        },
        {
          ja: "使う天体：西洋は天王星・海王星・冥王星も使い、インドはラーフとケートゥを含む9天体を使います。",
          en: "Bodies used: Western includes Uranus, Neptune and Pluto; Indian uses the nine grahas, including Rahu and Ketu.",
          hi: "प्रयुक्त ग्रह: पश्चिमी में यूरेनस, नेपच्यून, प्लूटो भी; भारतीय में राहु-केतु सहित नौ ग्रह।",
          ko: "사용하는 천체: 서양은 천왕성·해왕성·명왕성도 쓰고, 인도는 라후와 케투를 포함한 9천체를 씁니다.",
        },
        {
          ja: "時期の読み方：西洋はトランジットやプログレスが中心、インドはダシャーという時期区分を軸にします。",
          en: "Timing: Western relies mainly on transits and progressions; Indian is built around the dasha system of periods.",
          hi: "समय-निर्धारण: पश्चिमी मुख्यतः गोचर और प्रोग्रेशन पर; भारतीय दशा पद्धति पर आधारित है।",
          ko: "시기 읽기: 서양은 트랜짓과 프로그레스 중심, 인도는 다샤라는 시기 구분을 축으로 합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "初めての方のチェックリスト",
        en: "A checklist for first-timers",
        hi: "पहली बार आने वालों के लिए जाँच-सूची",
        ko: "처음 이용하는 분을 위한 체크리스트",
      },
      body: [
        {
          ja: "出生図を作る前と、結果を見た後に、次の点を確認しておくと安心です。",
          en: "It helps to check these points before you create a chart and after you see the result.",
          hi: "कुंडली बनाने से पहले और परिणाम देखने के बाद इन बातों की जाँच करना उपयोगी है।",
          ko: "출생 차트를 만들기 전과 결과를 본 뒤에 다음 사항을 확인해 두면 안심입니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻は記録で確かめましたか。記憶や「だいたい」の時刻だと、ラグナや室の配置が変わることがあります。",
          en: "Have you confirmed your birth time from a record? A remembered or rough time can change the Lagna and the house layout.",
          hi: "क्या आपने जन्म समय रिकॉर्ड से पुष्ट किया है? याद से या अनुमानित समय से लग्न और भावों की स्थिति बदल सकती है।",
          ko: "출생 시각을 기록으로 확인했나요? 기억이나 '대략'의 시각이면 라그나와 하우스 배치가 달라질 수 있습니다.",
        },
        {
          ja: "時刻が不明なら、ラグナや室よりも、月の星座・ナクシャトラ・惑星の星座を中心に読みましょう。月がナクシャトラの境目近くにある場合は、それも変わることがあります。",
          en: "If your time is unknown, read the Moon sign, the nakshatra and the planets' signs rather than the Lagna and houses. If the Moon is near a nakshatra boundary, even that can change.",
          hi: "यदि समय अज्ञात है, तो लग्न और भावों के बजाय चंद्र राशि, नक्षत्र और ग्रहों की राशियाँ पढ़ें। यदि चंद्रमा नक्षत्र की सीमा के पास हो, तो वह भी बदल सकता है।",
          ko: "시각을 모른다면 라그나나 하우스보다 달의 별자리·낙샤트라·행성의 별자리를 중심으로 읽으세요. 달이 낙샤트라 경계 가까이에 있으면 그것도 바뀔 수 있습니다.",
        },
        {
          ja: "出生地は生まれた病院や市町村を選びましたか。海外生まれの場合も、その土地の現地時刻で入力します。",
          en: "Did you choose the town or hospital where you were born? If you were born abroad, enter the local time of that place.",
          hi: "क्या आपने वह नगर या अस्पताल चुना जहाँ आपका जन्म हुआ? विदेश में जन्म हुआ हो तो भी उस स्थान का स्थानीय समय दर्ज करें।",
          ko: "태어난 병원이나 시·군을 선택했나요? 해외에서 태어났다면 그곳의 현지 시각으로 입력합니다.",
        },
        {
          ja: "星座が西洋の星占いと違っても慌てないでください。サイデリアル黄道では一つずれるのが普通です。",
          en: "Don't worry if your signs differ from Western horoscopes; a one-sign shift is normal in the sidereal zodiac.",
          hi: "यदि राशियाँ पश्चिमी राशिफल से भिन्न हों तो चिंता न करें; निरयण राशिचक्र में एक राशि का अंतर सामान्य है।",
          ko: "별자리가 서양 운세와 달라도 당황하지 마세요. 항성 황도에서는 한 칸 밀리는 것이 보통입니다.",
        },
        {
          ja: "一つの配置だけで良し悪しを決めつけず、ラグナ・月・ダシャーを組み合わせて全体を眺めましょう。",
          en: "Don't judge from a single placement; look at the whole by combining the Lagna, the Moon and the dasha.",
          hi: "किसी एक स्थिति से अच्छा-बुरा तय न करें; लग्न, चंद्रमा और दशा को मिलाकर समग्र रूप से देखें।",
          ko: "하나의 배치만으로 좋고 나쁨을 단정하지 말고, 라그나·달·다샤를 조합해 전체를 바라보세요.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you use the results",
        hi: "परिणामों का उपयोग करने से पहले",
        ko: "이용하시기 전에",
      },
      body: [
        {
          ja: "インド占星術は、自分を見つめ直したり、時の流れについて考えたりするためのひとつの手がかりです。当サイトの結果は自己理解と楽しみのための参考情報であり、医療・法律・投資などの判断に代わるものではありません。健康やお金、法的な問題については、必ず専門家にご相談ください。",
          en: "Jyotish is one lens for reflecting on yourself and on the rhythm of time. The results on this site are offered for self-understanding and enjoyment; they are not a substitute for medical, legal or financial advice. For questions of health, money or law, please consult a qualified professional.",
          hi: "ज्योतिष स्वयं पर चिंतन करने और समय की लय को समझने का एक माध्यम है। इस साइट के परिणाम आत्म-समझ और आनंद के लिए हैं; ये चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं हैं। स्वास्थ्य, धन या कानून से जुड़े प्रश्नों के लिए कृपया योग्य विशेषज्ञ से परामर्श करें।",
          ko: "인도 점성술은 자신을 돌아보고 시간의 흐름을 생각해 보기 위한 하나의 실마리입니다. 이 사이트의 결과는 자기 이해와 즐거움을 위한 참고 정보이며, 의료·법률·투자 판단을 대신하지 않습니다. 건강, 돈, 법적 문제는 반드시 전문가와 상담하세요.",
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
          ja: "出生図を作ったら、次は気になるテーマから読み進めてみてください。",
          en: "Once you have your chart, carry on with whichever theme interests you.",
          hi: "कुंडली बनाने के बाद, जिस विषय में रुचि हो वहाँ से आगे पढ़ें।",
          ko: "출생 차트를 만들었다면, 관심 있는 주제부터 읽어 나가 보세요.",
        },
      ],
      links: [
        {
          href: "/chart",
          label: {
            ja: "詳しい出生図（チャート）を見る",
            en: "Open the full birth chart",
            hi: "पूरी जन्म कुंडली देखें",
            ko: "상세 출생 차트 보기",
          },
        },
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ダシャー計算：いまの運気の時期を調べる",
            en: "Dasha calculator: find your current period",
            hi: "दशा कैलकुलेटर: अपनी वर्तमान दशा जानें",
            ko: "다샤 계산기: 지금의 시기 알아보기",
          },
        },
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ診断：月の宿を調べる",
            en: "Nakshatra finder: discover your Moon's mansion",
            hi: "नक्षत्र खोजक: अपने चंद्र नक्षत्र को जानें",
            ko: "낙샤트라 찾기: 달의 숙 알아보기",
          },
        },
        {
          href: "/learn-jyotish/introduction/western-differences",
          label: {
            ja: "インド占星術と西洋占星術の違いを詳しく",
            en: "More on how Jyotish differs from Western astrology",
            hi: "ज्योतिष और पश्चिमी ज्योतिष के अंतर पर विस्तार से",
            ko: "인도 점성술과 서양 점성술의 차이 자세히",
          },
        },
        {
          href: "/learn-jyotish",
          label: {
            ja: "ジョーティッシュを基礎から学ぶ",
            en: "Learn Jyotish from the basics",
            hi: "ज्योतिष को मूल से सीखें",
            ko: "조티시를 기초부터 배우기",
          },
        },
      ],
    },
  ],
  faqs: [
    {
      question: {
        ja: "本当に無料で出生図を作成できますか？",
        en: "Can I really create a birth chart for free?",
        hi: "क्या मैं सच में निःशुल्क जन्म कुंडली बना सकता हूँ?",
        ko: "정말 무료로 출생 차트를 만들 수 있나요?",
      },
      answer: {
        ja: "はい、出生図の作成は無料で、会員登録も不要です。生年月日・出生時刻・出生地を入力するだけで、ラグナや月のナクシャトラ、ダシャーなどを確認できます。さらに詳しいチャートや、ダシャー・ナクシャトラなどの個別ツールも無料で利用できます。",
        en: "Yes. Creating a birth chart is free and needs no registration. Just enter your date, time and place of birth to see your Lagna, Moon nakshatra, dasha and more. The full chart and individual tools such as the dasha and nakshatra calculators are free as well.",
        hi: "हाँ। जन्म कुंडली बनाना निःशुल्क है और पंजीकरण की आवश्यकता नहीं। केवल जन्म तिथि, समय और स्थान दर्ज करके लग्न, चंद्र नक्षत्र, दशा आदि देख सकते हैं। पूरी कुंडली और दशा, नक्षत्र जैसे अलग उपकरण भी निःशुल्क हैं।",
        ko: "네. 출생 차트 작성은 무료이며 회원 가입도 필요 없습니다. 생년월일·출생 시각·출생지만 입력하면 라그나, 달의 낙샤트라, 다샤 등을 확인할 수 있습니다. 상세 차트와 다샤·낙샤트라 같은 개별 도구도 무료로 이용할 수 있습니다.",
      },
    },
    {
      question: {
        ja: "出生時刻がわからなくても使えますか？",
        en: "Can I use it if I don't know my birth time?",
        hi: "क्या जन्म समय न पता हो तब भी उपयोग कर सकता हूँ?",
        ko: "출생 시각을 몰라도 사용할 수 있나요?",
      },
      answer: {
        ja: "使えますが、ラグナと室（ハウス）の配置は時刻によって大きく変わるため、参考程度にとどめてください。月の星座や惑星の星座は一日の中で変わりにくいので、時刻不明のときはそちらを中心に読むのがおすすめです。母子手帳などで時刻を確認できれば、精度が上がります。",
        en: "Yes, but treat the Lagna and house layout as tentative, since they change a lot with time. The Moon's sign and the planets' signs change little within a day, so focus on those when the time is unknown. Confirming your time from a birth record improves accuracy.",
        hi: "हाँ, पर लग्न और भावों की स्थिति को अनिश्चित मानें, क्योंकि वे समय के साथ बहुत बदलते हैं। चंद्र राशि और ग्रहों की राशियाँ एक दिन में कम बदलती हैं, इसलिए समय अज्ञात हो तो उन पर ध्यान दें। जन्म रिकॉर्ड से समय की पुष्टि सटीकता बढ़ाती है।",
        ko: "네, 다만 라그나와 하우스 배치는 시각에 따라 크게 바뀌므로 참고 정도로만 보세요. 달의 별자리나 행성의 별자리는 하루 안에 잘 바뀌지 않으므로, 시각을 모를 때는 그쪽을 중심으로 읽기를 권합니다. 출생 기록으로 시각을 확인하면 정확도가 높아집니다.",
      },
    },
    {
      question: {
        ja: "西洋占星術と星座が違うのはなぜですか？",
        en: "Why is my sign different from Western astrology?",
        hi: "मेरी राशि पश्चिमी ज्योतिष से अलग क्यों है?",
        ko: "왜 서양 점성술과 별자리가 다른가요?",
      },
      answer: {
        ja: "インド占星術は実際の星を基準にしたサイデリアル黄道を、西洋占星術の多くは春分点を基準にしたトロピカル黄道を使うためです。両者には現在約24度の差があり、多くの人で星座が一つ手前にずれます。どちらかが間違っているのではなく、基準の取り方の違いです。",
        en: "Jyotish uses the sidereal zodiac, based on the actual stars, while most Western astrology uses the tropical zodiac, based on the spring equinox. They are currently about 24 degrees apart, so for many people the sign moves back by one. Neither is wrong; they simply measure from different starting points.",
        hi: "भारतीय ज्योतिष वास्तविक तारों पर आधारित निरयण राशिचक्र और अधिकांश पश्चिमी ज्योतिष वसंत विषुव पर आधारित सायन राशिचक्र का उपयोग करता है। दोनों में अभी लगभग 24 अंश का अंतर है, इसलिए बहुत से लोगों की राशि एक पीछे हो जाती है। कोई गलत नहीं है; बस आरंभ बिंदु अलग है।",
        ko: "인도 점성술은 실제 별을 기준으로 한 항성 황도를, 서양 점성술 대부분은 춘분점을 기준으로 한 회귀 황도를 쓰기 때문입니다. 둘은 현재 약 24도 차이가 나서 많은 사람의 별자리가 한 칸 앞으로 밀립니다. 어느 쪽이 틀린 것이 아니라 기준을 잡는 방식의 차이입니다.",
      },
    },
    {
      question: {
        ja: "インド占星術でいちばん大切なのは何ですか？",
        en: "What matters most in Indian astrology?",
        hi: "भारतीय ज्योतिष में सबसे महत्वपूर्ण क्या है?",
        ko: "인도 점성술에서 가장 중요한 것은 무엇인가요?",
      },
      answer: {
        ja: "一般に、ラグナ（上昇宮）と月が特に重視されます。ラグナは図全体の基準と本人のあり方を、月は心や感情の傾向を表します。そこにダシャー（運気の時期）を重ねることで、「いまどんなテーマの時期か」を読み取っていきます。",
        en: "In general, the Lagna (ascendant) and the Moon carry the most weight. The Lagna sets the frame of the chart and describes the person, while the Moon describes the mind and emotions. Layering the dasha on top shows what theme the current period carries.",
        hi: "सामान्यतः लग्न और चंद्रमा को सबसे अधिक महत्व दिया जाता है। लग्न कुंडली का ढाँचा और व्यक्ति का स्वभाव दर्शाता है, जबकि चंद्रमा मन और भावनाओं को। इन पर दशा को जोड़कर वर्तमान कालखंड का विषय समझा जाता है।",
        ko: "일반적으로 라그나(상승궁)와 달이 특히 중시됩니다. 라그나는 차트 전체의 틀과 그 사람의 모습을, 달은 마음과 감정의 경향을 나타냅니다. 여기에 다샤(행성 시기)를 겹쳐 '지금 어떤 주제의 시기인지'를 읽어 냅니다.",
      },
    },
    {
      question: {
        ja: "ダシャーとは何ですか？",
        en: "What is a dasha?",
        hi: "दशा क्या है?",
        ko: "다샤란 무엇인가요?",
      },
      answer: {
        ja: "ダシャーは、人生を天体ごとの時期に区切って読むインド占星術の方法です。よく使われるヴィムショッタリ・ダシャーは120年で一巡し、ケートゥ7年、金星20年、太陽6年、月10年、火星7年、ラーフ18年、木星16年、土星19年、水星17年の順に巡ります。どこから始まるかは、生まれたときの月のナクシャトラで決まります。",
        en: "A dasha is Jyotish's way of dividing life into periods, each ruled by a planet. The widely used Vimshottari dasha completes a 120-year cycle in this order: Ketu 7 years, Venus 20, Sun 6, Moon 10, Mars 7, Rahu 18, Jupiter 16, Saturn 19 and Mercury 17. Where it starts is set by the Moon's nakshatra at birth.",
        hi: "दशा ज्योतिष की वह पद्धति है जो जीवन को ग्रहों के कालखंडों में बाँटती है। प्रचलित विंशोत्तरी दशा 120 वर्ष का चक्र इस क्रम में पूरा करती है: केतु 7 वर्ष, शुक्र 20, सूर्य 6, चंद्र 10, मंगल 7, राहु 18, गुरु 16, शनि 19 और बुध 17। आरंभ जन्म के समय चंद्र नक्षत्र से तय होता है।",
        ko: "다샤는 삶을 천체별 시기로 나누어 읽는 인도 점성술의 방법입니다. 널리 쓰이는 빔쇼타리 다샤는 케투 7년, 금성 20년, 태양 6년, 달 10년, 화성 7년, 라후 18년, 목성 16년, 토성 19년, 수성 17년의 순서로 120년에 한 바퀴를 돕니다. 어디서 시작하는지는 태어날 때 달의 낙샤트라로 정해집니다.",
      },
    },
    {
      question: {
        ja: "入力した生年月日は保存されますか？",
        en: "Is the birth data I enter saved?",
        hi: "क्या मेरे दर्ज किए जन्म विवरण सहेजे जाते हैं?",
        ko: "입력한 생년월일은 저장되나요?",
      },
      answer: {
        ja: "ログインしない限り、入力したデータは保存されません。ログインすると、作成した出生図をプロフィールとして保存し、あとから呼び出せるようになります。",
        en: "Nothing you enter is saved unless you sign in. When you are signed in, the charts you create can be saved as profiles and opened again later.",
        hi: "साइन इन किए बिना आपका दर्ज किया डेटा सहेजा नहीं जाता। साइन इन करने पर बनाई गई कुंडलियाँ प्रोफ़ाइल के रूप में सहेजकर बाद में फिर खोली जा सकती हैं।",
        ko: "로그인하지 않으면 입력한 데이터는 저장되지 않습니다. 로그인하면 만든 출생 차트를 프로필로 저장해 나중에 다시 불러올 수 있습니다.",
      },
    },
    {
      question: {
        ja: "宿曜占星術とインド占星術は関係がありますか？",
        en: "Is Sukuyo astrology related to Indian astrology?",
        hi: "क्या सुकुयो ज्योतिष का भारतीय ज्योतिष से संबंध है?",
        ko: "스쿠요 점성술과 인도 점성술은 관계가 있나요?",
      },
      answer: {
        ja: "はい。日本の宿曜占星術の二十七宿は、インド占星術のナクシャトラ（27の月宿）に由来するとされています。どちらも生まれたときの月の位置を重視する点が共通しています。当サイトには宿曜診断のツールもあります。",
        en: "Yes. The 27 mansions of Japan's Sukuyo astrology are understood to derive from the nakshatras, the 27 lunar mansions of Jyotish. Both place great weight on the Moon's position at birth. This site also has a Sukuyo tool.",
        hi: "हाँ। जापान के सुकुयो ज्योतिष के 27 भवन भारतीय ज्योतिष के नक्षत्रों (27 चंद्र भवन) से उत्पन्न माने जाते हैं। दोनों जन्म के समय चंद्रमा की स्थिति को विशेष महत्व देते हैं। इस साइट पर सुकुयो उपकरण भी है।",
        ko: "네. 일본 스쿠요 점성술의 27수는 인도 점성술의 낙샤트라(27개의 월숙)에서 유래한 것으로 알려져 있습니다. 둘 다 태어날 때 달의 위치를 중시한다는 공통점이 있습니다. 이 사이트에는 스쿠요 진단 도구도 있습니다.",
      },
    },
  ],
};
