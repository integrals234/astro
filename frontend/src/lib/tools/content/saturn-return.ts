import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/saturn-return.
 *
 * Written Japanese-first, matching sukuyo.ts and mangal-dosha.ts. Sade Sati
 * and サターンリターン are the two Saturn topics most often written about in a
 * frightening register, so the page's job is the opposite: explain exactly
 * what the panel computes (a phase from natal Moon sign vs transiting Saturn
 * sign, and an age-based return estimate from the birth year), then reframe
 * both as periods of responsibility, review and maturing — never as a
 * forecast of misfortune.
 */
export const saturnReturnLongForm: ToolLongForm = {
  slug: "saturn-return",
  sections: [
    {
      heading: {
        ja: "使い方：入力するものと注意点",
        en: "How to use it: what to enter and what to watch for",
        hi: "उपयोग कैसे करें: क्या दर्ज करें और किन बातों का ध्यान रखें",
        ko: "사용 방법: 입력할 것과 주의할 점",
      },
      body: [
        {
          ja: "生年月日・出生時刻・出生地を入力すると、出生図とあわせて「今この瞬間の土星の位置」が計算され、結果が表示されます。サデ・サティの判定に使うのは、出生時の月がある星座（月星座）と、現在の土星がある星座の二つだけです。",
          en: "Enter your date, time and place of birth. The page calculates your birth chart together with where Saturn is right now, and shows the result. The Sade Sati check uses only two things: the sign your Moon occupied at birth (your Moon sign) and the sign Saturn occupies today.",
          hi: "अपनी जन्म तिथि, जन्म समय और जन्म स्थान दर्ज करें। यह पृष्ठ आपकी जन्म कुंडली के साथ इस समय शनि की स्थिति की गणना करके परिणाम दिखाता है। साढ़े साती की जाँच में केवल दो चीज़ें उपयोग होती हैं: जन्म के समय चंद्रमा की राशि (चंद्र राशि) और आज शनि की राशि।",
          ko: "생년월일, 출생 시각, 출생지를 입력하면 출생 차트와 함께 지금 이 순간 토성의 위치가 계산되어 결과가 표시됩니다. 사데 사티 판정에 쓰이는 것은 출생 시 달이 있던 별자리(달 별자리)와 현재 토성이 있는 별자리, 이 두 가지뿐입니다.",
        },
        {
          ja: "月は一日に約13度進み、およそ2日半で次の星座へ移ります。そのため出生時刻が不明でも多くの場合は月星座が決まりますが、月が星座の境目近くにあった日に生まれた方は、時刻によって月星座が変わり、判定がずれることがあります。時刻がわからない場合は、正午など仮の時刻で計算したうえで、出生時刻チェックで影響の有無を確かめると安心です。",
          en: "The Moon moves about 13° a day and changes sign roughly every two and a half days. So even without an exact birth time, the Moon sign is usually settled — but if you were born on a day when the Moon was near a sign boundary, the time can change your Moon sign and with it the result. If your time is unknown, calculate with a placeholder such as noon, then use the birth-time check to see whether the uncertainty matters.",
          hi: "चंद्रमा प्रतिदिन लगभग 13° चलता है और लगभग ढाई दिन में राशि बदलता है। इसलिए सटीक जन्म समय के बिना भी चंद्र राशि प्रायः तय हो जाती है, पर यदि जन्म के दिन चंद्रमा राशि की सीमा के पास था, तो समय के अनुसार चंद्र राशि और परिणाम बदल सकते हैं। समय ज्ञात न हो तो दोपहर जैसा अनुमानित समय डालें और जन्म समय जाँच से देखें कि अनिश्चितता से फ़र्क पड़ता है या नहीं।",
          ko: "달은 하루에 약 13도 움직이며 약 2일 반마다 다음 별자리로 옮겨 갑니다. 그래서 출생 시각을 몰라도 대개 달 별자리는 정해지지만, 달이 별자리 경계 근처에 있던 날 태어났다면 시각에 따라 달 별자리와 결과가 달라질 수 있습니다. 시각을 모르면 정오 같은 임시 시각으로 계산한 뒤, 출생 시각 확인 도구로 영향 여부를 확인해 보세요.",
        },
      ],
      bullets: [
        {
          ja: "出生地は市区町村まで正しく選んでください。時差（タイムゾーン）は出生地から自動で判断されるため、海外生まれの方も現地の時刻のまま入力します。",
          en: "Choose your birthplace accurately down to the city. The time zone is derived from the place, so if you were born abroad, enter the local clock time there.",
          hi: "जन्म स्थान शहर तक सही चुनें। समय क्षेत्र स्थान से तय होता है, इसलिए विदेश में जन्मे हों तो वहाँ का स्थानीय समय ही दर्ज करें।",
          ko: "출생지는 시·구 단위까지 정확히 선택하세요. 시간대는 출생지로부터 자동 판단되므로, 해외에서 태어났다면 현지 시각 그대로 입력합니다.",
        },
        {
          ja: "当サイトはインド占星術の恒星黄道（ラヒリ・アヤナムシャ、現在約24度）で計算します。西洋占星術の月星座とは一つずれることがよくありますが、計算の誤りではありません。",
          en: "This site uses the Jyotish sidereal zodiac (Lahiri ayanamsa, currently about 24°). Your Moon sign here is often one sign behind your Western Moon sign — that is not a calculation error.",
          hi: "यह साइट ज्योतिष की निरयन राशि-चक्र (लाहिड़ी अयनांश, वर्तमान में लगभग 24°) से गणना करती है। यहाँ की चंद्र राशि पश्चिमी चंद्र राशि से अक्सर एक राशि पीछे होती है — यह गणना की त्रुटि नहीं है।",
          ko: "이 사이트는 인도 점성술의 항성 황도(라히리 아야남샤, 현재 약 24도)로 계산합니다. 서양 점성술의 달 별자리와 한 별자리 어긋나는 일이 흔하지만 계산 오류가 아닙니다.",
        },
        {
          ja: "土星回帰の目安は、生まれた年だけから求めています。誕生日や出生時刻によって結果が変わることはありません。",
          en: "The Saturn return estimate is worked out from your birth year alone; your birthday and birth time do not change it.",
          hi: "शनि वापसी का अनुमान केवल जन्म वर्ष से निकाला जाता है; जन्मदिन या जन्म समय से यह नहीं बदलता।",
          ko: "토성 회귀의 기준은 태어난 해만으로 구합니다. 생일이나 출생 시각에 따라 결과가 바뀌지 않습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the result: the terms you will see",
        hi: "परिणाम कैसे पढ़ें: दिखने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어",
      },
      body: [
        {
          ja: "結果は二枚のカードで表示されます。一枚目は「今の土星が、あなたの月から数えて何番目の星座にあるか」とその呼び名、二枚目は次の土星回帰の年齢と年の目安です。",
          en: "The result appears as two cards. The first shows which sign, counted from your Moon, Saturn is in now, and what that position is called. The second shows the approximate age and year of your next Saturn return.",
          hi: "परिणाम दो कार्डों में दिखता है। पहला बताता है कि आज शनि आपके चंद्रमा से गिनकर किस राशि में है और उस स्थिति का नाम क्या है। दूसरा अगली शनि वापसी की अनुमानित आयु और वर्ष दिखाता है।",
          ko: "결과는 두 장의 카드로 표시됩니다. 첫 번째는 지금 토성이 당신의 달로부터 몇 번째 별자리에 있는지와 그 명칭, 두 번째는 다음 토성 회귀의 대략적인 나이와 연도입니다.",
        },
        {
          ja: "例えば（説明のための仮の例です）、月星座が水瓶座の方で、現在の土星が魚座にある場合、魚座は水瓶座から数えて2番目なので「サデ・サティ — 後期」と表示されます。土星が次の牡羊座へ移れば月から3番目となり、サデ・サティは終わります。",
          en: "For example (a purely illustrative case): if your Moon sign is Aquarius and Saturn is now in Pisces, Pisces is the second sign from Aquarius, so the card reads “Sade Sati — setting phase”. Once Saturn moves on into Aries it is third from the Moon, and the Sade Sati is over.",
          hi: "उदाहरण के लिए (केवल समझाने हेतु): यदि आपकी चंद्र राशि कुंभ है और शनि अभी मीन में है, तो मीन कुंभ से दूसरी राशि है, इसलिए कार्ड पर 'साढ़े साती — अंतिम चरण' दिखेगा। शनि के मेष में जाने पर वह चंद्रमा से तीसरा होगा और साढ़े साती समाप्त हो जाएगी।",
          ko: "예를 들어(설명을 위한 가상의 예): 달 별자리가 물병자리이고 현재 토성이 물고기자리에 있다면, 물고기자리는 물병자리로부터 두 번째이므로 '사데 사티 — 하강기'로 표시됩니다. 토성이 다음 양자리로 옮겨 가면 달로부터 세 번째가 되어 사데 사티는 끝납니다.",
        },
      ],
      bullets: [
        {
          ja: "サデ・サティ — 前期：土星が月星座の一つ前（月から12番目）の星座にある時期。約2年半続きます。",
          en: "Sade Sati — rising phase: Saturn is in the sign just before your Moon sign (12th from the Moon). Lasts about two and a half years.",
          hi: "साढ़े साती — प्रारंभिक चरण: शनि चंद्र राशि से ठीक पहले की राशि (चंद्र से 12वीं) में है। लगभग ढाई वर्ष चलता है।",
          ko: "사데 사티 — 상승기: 토성이 달 별자리 바로 앞(달로부터 12번째) 별자리에 있는 시기. 약 2년 반 이어집니다.",
        },
        {
          ja: "サデ・サティ — 中期（最盛期）：土星が月星座そのもの（月から1番目）にある時期。三段階のうち最も実感しやすいとされます。",
          en: "Sade Sati — peak phase: Saturn is in your Moon sign itself (1st from the Moon). Traditionally the most noticeable of the three.",
          hi: "साढ़े साती — शिखर चरण: शनि स्वयं चंद्र राशि (चंद्र से पहली) में है। परंपरागत रूप से तीनों में सबसे अधिक अनुभव होने वाला।",
          ko: "사데 사티 — 정점기: 토성이 달 별자리 자체(달로부터 1번째)에 있는 시기. 세 단계 중 가장 실감하기 쉽다고 여겨집니다.",
        },
        {
          ja: "サデ・サティ — 後期：土星が月星座の一つ後（月から2番目）にある時期。三段階を合わせて約7年半になります。",
          en: "Sade Sati — setting phase: Saturn is in the sign just after your Moon sign (2nd from the Moon). The three phases together make roughly seven and a half years.",
          hi: "साढ़े साती — अंतिम चरण: शनि चंद्र राशि के ठीक बाद की राशि (चंद्र से दूसरी) में है। तीनों चरण मिलकर लगभग साढ़े सात वर्ष होते हैं।",
          ko: "사데 사티 — 하강기: 토성이 달 별자리 바로 뒤(달로부터 2번째)에 있는 시기. 세 단계를 합쳐 약 7년 반이 됩니다.",
        },
        {
          ja: "ダイヤ（月から第4室・第8室）：サデ・サティではない、約2年半の軽めの土星期間。第4は家庭や心の落ち着き、第8は変化への向き合い方を見直す時期と読まれます。",
          en: "Dhaiya (4th or 8th from the Moon): a lighter Saturn period of about two and a half years, not Sade Sati. The 4th is read as a time to review home and inner steadiness, the 8th as a time to review how you meet change.",
          hi: "ढैया (चंद्र से चौथी या आठवीं): लगभग ढाई वर्ष का हल्का शनि काल, साढ़े साती नहीं। चौथी को घर और मन की स्थिरता, आठवीं को परिवर्तन से निपटने के तरीके की समीक्षा का समय माना जाता है।",
          ko: "다이야(달로부터 4번째·8번째): 사데 사티가 아닌 약 2년 반의 가벼운 토성 시기. 4번째는 가정과 마음의 안정을, 8번째는 변화를 대하는 방식을 돌아보는 시기로 읽힙니다.",
        },
        {
          ja: "活性化した土星期間なし：土星がそれ以外の位置にあり、古典的な土星期間に当たらない状態です。",
          en: "No active Saturn period: Saturn is elsewhere, in none of the positions classically read as a Saturn period.",
          hi: "कोई सक्रिय शनि काल नहीं: शनि अन्य स्थिति में है, जो शास्त्रीय रूप से शनि काल नहीं मानी जाती।",
          ko: "활성화된 토성 시기 없음: 토성이 그 밖의 위치에 있어 고전적인 토성 시기에 해당하지 않는 상태입니다.",
        },
        {
          ja: "土星回帰：土星が生まれた時の位置に戻ること。当ページは29歳・59歳・88歳を目安に、今の年齢から見て次に来るものを「◯歳ごろ（◯年頃）」と表示します。",
          en: "Saturn return: Saturn coming back to where it was at your birth. This page uses 29, 59 and 88 as the reference ages and shows the next one ahead of your current age as “around age X (approximately year Y)”.",
          hi: "शनि वापसी: शनि का जन्म के समय की स्थिति पर लौटना। यह पृष्ठ 29, 59 और 88 वर्ष को संदर्भ आयु मानकर आपकी वर्तमान आयु के बाद आने वाली अगली वापसी को 'लगभग X वर्ष (लगभग Y वर्ष में)' के रूप में दिखाता है।",
          ko: "토성 회귀: 토성이 태어났을 때의 위치로 돌아오는 것. 이 페이지는 29세·59세·88세를 기준으로, 현재 나이 이후 다음에 오는 회귀를 '약 X세(Y년경)'로 표시합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：インド式と西洋式で土星をどう読むか",
        en: "Background: how Vedic and Western astrology read Saturn",
        hi: "पृष्ठभूमि: वैदिक और पश्चिमी ज्योतिष शनि को कैसे पढ़ते हैं",
        ko: "배경 지식: 인도식과 서양식은 토성을 어떻게 읽는가",
      },
      body: [
        {
          ja: "土星は太陽の周りを約29.5年で一周し、一つの星座に約2年半とどまります。インド占星術では土星（シャニ）は時間・責任・忍耐・努力の積み重ねを表す惑星とされ、心を表す月との位置関係で読むのがサデ・サティです。月が「気持ちの土台」なら、サデ・サティはその土台を点検し、補強する約7年半と言えます。",
          en: "Saturn circles the Sun in about 29.5 years and stays roughly two and a half years in each sign. In Jyotish, Saturn (Shani) signifies time, responsibility, patience and steady effort, and Sade Sati reads it against the Moon, the significator of the mind. If the Moon is the foundation of your emotional life, Sade Sati is roughly seven and a half years of inspecting and reinforcing that foundation.",
          hi: "शनि लगभग 29.5 वर्ष में सूर्य की परिक्रमा करता है और प्रत्येक राशि में लगभग ढाई वर्ष रहता है। ज्योतिष में शनि समय, उत्तरदायित्व, धैर्य और निरंतर प्रयास का कारक है, और साढ़े साती उसे मन के कारक चंद्रमा के सापेक्ष पढ़ती है। यदि चंद्रमा भावनात्मक जीवन की नींव है, तो साढ़े साती उस नींव की जाँच और मज़बूती के लगभग साढ़े सात वर्ष हैं।",
          ko: "토성은 약 29.5년에 걸쳐 태양을 한 바퀴 돌고, 한 별자리에 약 2년 반 머뭅니다. 인도 점성술에서 토성(샤니)은 시간·책임·인내·꾸준한 노력을 나타내며, 마음을 나타내는 달과의 위치 관계로 읽는 것이 사데 사티입니다. 달이 감정의 토대라면, 사데 사티는 그 토대를 점검하고 보강하는 약 7년 반이라 할 수 있습니다.",
        },
        {
          ja: "一方、日本で「サターンリターン」として知られる土星回帰は、西洋占星術で広まった考え方で、土星が出生時の位置に戻る29歳前後を「大人としての自立が問われる節目」と捉えます。回帰の時期は土星が元の位置に戻るかどうかの話なので、恒星黄道でも西洋の回帰黄道でもほぼ同じ時期になります。サデ・サティは月を基準にした約30年周期の読み方、土星回帰は土星自身を基準にした読み方で、同じ惑星を別の角度から見ていると考えてください。",
          en: "Saturn return, known in Japan as サターンリターン, is a framing popularised by Western astrology: the return of Saturn to its natal position around age 29 is treated as a milestone that asks you to stand on your own as an adult. Because it is about Saturn coming back to its own starting point, the timing comes out almost the same in the sidereal and the Western tropical zodiac. Sade Sati is a roughly 30-year cycle measured from the Moon; the return is measured from Saturn itself — the same planet seen from two angles.",
          hi: "दूसरी ओर, जापान में 'सैटर्न रिटर्न' के नाम से प्रसिद्ध शनि वापसी पश्चिमी ज्योतिष की अवधारणा है, जिसमें लगभग 29 वर्ष की आयु में शनि के जन्म स्थिति पर लौटने को वयस्क आत्मनिर्भरता की परख का पड़ाव माना जाता है। क्योंकि यह शनि के अपने आरंभ बिंदु पर लौटने की बात है, इसलिए निरयन और पश्चिमी सायन दोनों राशि-चक्रों में समय लगभग एक-सा आता है। साढ़े साती चंद्रमा से मापा जाने वाला लगभग 30-वर्षीय चक्र है, जबकि वापसी स्वयं शनि से मापी जाती है।",
          ko: "한편 일본에서 '새턴 리턴'으로 알려진 토성 회귀는 서양 점성술에서 널리 퍼진 개념으로, 토성이 출생 시 위치로 돌아오는 29세 전후를 어른으로서의 자립을 묻는 전환점으로 봅니다. 토성이 자기 출발점으로 돌아오는지의 문제이므로 항성 황도든 서양의 회귀 황도든 시기는 거의 같습니다. 사데 사티는 달을 기준으로 한 약 30년 주기의 해석, 토성 회귀는 토성 자신을 기준으로 한 해석으로, 같은 행성을 다른 각도에서 보는 것입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解",
        en: "Common misconceptions",
        hi: "आम भ्रांतियाँ",
        ko: "흔한 오해",
      },
      body: [
        {
          ja: "土星の時期は怖い話として語られがちですが、伝統的な考え方に照らしても、以下のような受け止め方は行き過ぎです。",
          en: "Saturn periods are often told as frightening stories, but even by traditional reasoning the following readings go too far.",
          hi: "शनि के कालों को अक्सर डरावनी कहानियों की तरह सुनाया जाता है, पर पारंपरिक दृष्टि से भी नीचे दी गई धारणाएँ अतिशयोक्ति हैं।",
          ko: "토성의 시기는 무서운 이야기로 전해지기 쉽지만, 전통적인 관점에 비추어 봐도 다음과 같은 해석은 지나칩니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解「サデ・サティ中は必ず不幸が起こる」→ 実際は、結果は出生図の中での土星の強さや役割に大きく左右されます。土星が良い働きをするチャートでは、昇進や独立など努力が形になる時期として読まれることもあります。",
          en: "Myth: “misfortune is certain during Sade Sati.” In fact, the outcome depends heavily on Saturn's strength and role in your own chart. Where Saturn works well, the period can be read as one in which effort takes shape, such as a promotion or going independent.",
          hi: "भ्रांति: 'साढ़े साती में दुर्भाग्य निश्चित है।' वास्तव में परिणाम आपकी कुंडली में शनि की शक्ति और भूमिका पर बहुत निर्भर करता है। जहाँ शनि अच्छा काम करता है, वहाँ इसे प्रयास के फलित होने का समय भी माना जाता है, जैसे पदोन्नति या स्वतंत्र काम शुरू करना।",
          ko: "오해 '사데 사티 중에는 반드시 불행이 온다' → 실제로는 출생 차트에서 토성의 힘과 역할에 크게 좌우됩니다. 토성이 좋게 작용하는 차트에서는 승진이나 독립처럼 노력이 결실을 맺는 시기로 읽히기도 합니다.",
        },
        {
          ja: "誤解「サデ・サティは一生に一度の大災難」→ 土星は約30年で月星座に戻るため、長生きすれば人生で2〜3回は経験します。誰にでも巡ってくる、ごく普通のサイクルです。",
          en: "Myth: “Sade Sati is a once-in-a-lifetime catastrophe.” Saturn comes back to your Moon sign about every 30 years, so a long life includes two or three of them. It is an ordinary cycle that comes round for everyone.",
          hi: "भ्रांति: 'साढ़े साती जीवन में एक बार आने वाली आपदा है।' शनि लगभग हर 30 वर्ष में चंद्र राशि पर लौटता है, इसलिए लंबे जीवन में यह दो-तीन बार आती है। यह सबके लिए आने वाला सामान्य चक्र है।",
          ko: "오해 '사데 사티는 일생에 한 번 오는 대재앙' → 토성은 약 30년마다 달 별자리로 돌아오므로, 오래 살면 인생에서 2~3번 겪습니다. 누구에게나 돌아오는 평범한 주기입니다.",
        },
        {
          ja: "誤解「この時期は結婚・転職・引っ越しを避けるべき」→ 時期だけで大切な決断を止める理由にはなりません。むしろ準備を丁寧にし、無理のない計画を立てる時期と考えるほうが土星らしい使い方です。",
          en: "Myth: “avoid marriage, job changes and moving during this time.” Timing alone is no reason to put an important decision on hold. Using the period to prepare carefully and plan realistically is closer to what Saturn stands for.",
          hi: "भ्रांति: 'इस समय विवाह, नौकरी बदलना या घर बदलना टालना चाहिए।' केवल समय के आधार पर कोई महत्वपूर्ण निर्णय रोकने का कारण नहीं बनता। इस समय को सावधानी से तैयारी और व्यावहारिक योजना के लिए उपयोग करना शनि के स्वभाव के अधिक निकट है।",
          ko: "오해 '이 시기에는 결혼·이직·이사를 피해야 한다' → 시기만으로 중요한 결정을 멈출 이유는 되지 않습니다. 오히려 준비를 꼼꼼히 하고 무리 없는 계획을 세우는 시기로 삼는 것이 토성다운 활용법입니다.",
        },
        {
          ja: "誤解「29歳のサターンリターンで人生が崩れる」→ 土星回帰は、これまでの選択を見直し、自分で責任を持てる形に整え直す節目です。終わりではなく、大人としての土台を固める時期と捉えられます。",
          en: "Myth: “your life falls apart at your Saturn return at 29.” The return is a milestone for reviewing past choices and reshaping them into something you can take responsibility for. It is less an ending than a time to firm up your footing as an adult.",
          hi: "भ्रांति: '29 वर्ष की शनि वापसी पर जीवन बिखर जाता है।' शनि वापसी पिछले निर्णयों की समीक्षा करने और उन्हें ऐसा रूप देने का पड़ाव है जिसकी आप ज़िम्मेदारी ले सकें। यह अंत नहीं, बल्कि वयस्क के रूप में नींव मज़बूत करने का समय है।",
          ko: "오해 '29세 새턴 리턴에 인생이 무너진다' → 토성 회귀는 지금까지의 선택을 돌아보고 스스로 책임질 수 있는 형태로 다시 정돈하는 전환점입니다. 끝이 아니라 어른으로서의 토대를 다지는 시기로 볼 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "土星の時期に役立つ自己点検チェックリスト",
        en: "A self-reflection checklist for a Saturn period",
        hi: "शनि काल के लिए आत्म-चिंतन सूची",
        ko: "토성의 시기에 도움이 되는 자기 점검 체크리스트",
      },
      body: [
        {
          ja: "土星は「時間をかけて積み上げたもの」を映すと言われます。サデ・サティやダイヤ、土星回帰の時期にいる方は、占いの結果を待つよりも、次のような問いで自分の足元を確かめてみてください。",
          en: "Saturn is said to reflect what has been built up over time. If you are in a Sade Sati, Dhaiya or Saturn return, rather than waiting on a prediction, try checking your footing with questions like these.",
          hi: "कहा जाता है कि शनि समय के साथ बनाई गई चीज़ों को दर्शाता है। यदि आप साढ़े साती, ढैया या शनि वापसी के समय में हैं, तो किसी भविष्यवाणी की प्रतीक्षा के बजाय इन प्रश्नों से अपनी स्थिति जाँचें।",
          ko: "토성은 시간을 들여 쌓아 온 것을 비춘다고 합니다. 사데 사티나 다이야, 토성 회귀의 시기에 있다면 점의 결과를 기다리기보다 다음과 같은 질문으로 자신의 발밑을 확인해 보세요.",
        },
      ],
      bullets: [
        {
          ja: "惰性で続けている約束や習慣はないか。続けるもの・手放すものを書き出してみる。",
          en: "Are there commitments or habits you keep only out of inertia? Write down what to keep and what to let go.",
          hi: "क्या कोई वादे या आदतें केवल आदतवश चल रही हैं? लिखें कि क्या रखना है और क्या छोड़ना है।",
          ko: "관성으로 이어 가는 약속이나 습관은 없는가. 계속할 것과 내려놓을 것을 적어 본다.",
        },
        {
          ja: "睡眠・食事・運動など、体の基本的なリズムは整っているか。",
          en: "Are the basics — sleep, meals, movement — in a steady rhythm?",
          hi: "क्या नींद, भोजन और व्यायाम जैसी बुनियादी दिनचर्या संतुलित है?",
          ko: "수면·식사·운동 같은 몸의 기본 리듬은 잘 잡혀 있는가.",
        },
        {
          ja: "お金の流れ（収入・支出・貯え）を数字で把握できているか。",
          en: "Do you know your money flow — income, spending, savings — in actual numbers?",
          hi: "क्या आप अपनी आय, व्यय और बचत को वास्तविक संख्याओं में जानते हैं?",
          ko: "돈의 흐름(수입·지출·저축)을 숫자로 파악하고 있는가.",
        },
        {
          ja: "3年後の自分のために、今日少しずつ続けられることは何か。",
          en: "What could you keep doing a little each day for the sake of yourself three years from now?",
          hi: "तीन वर्ष बाद के अपने लिए आप आज से रोज़ थोड़ा-थोड़ा क्या कर सकते हैं?",
          ko: "3년 뒤의 나를 위해 오늘부터 조금씩 이어 갈 수 있는 것은 무엇인가.",
        },
        {
          ja: "一人で抱え込まず、相談できる人や専門家とつながっているか。",
          en: "Rather than carrying everything alone, are you connected to people or professionals you can talk to?",
          hi: "सब कुछ अकेले ढोने के बजाय, क्या आप ऐसे लोगों या विशेषज्ञों से जुड़े हैं जिनसे बात कर सकें?",
          ko: "혼자 끌어안지 않고, 상담할 수 있는 사람이나 전문가와 연결되어 있는가.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on this",
        hi: "उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "当ページの結果は、土星と月の位置関係という天文学的な事実と、それに対する伝統的な呼び名を示すものです。占星術は自分を振り返り、楽しむためのものであり、医療・法律・投資などの判断に代わるものではありません。体調やお金、人間関係で困っていることがあれば、それぞれの専門家にご相談ください。",
          en: "This page shows an astronomical fact — where Saturn stands relative to your Moon — and the traditional name for that position. Astrology is for self-reflection and enjoyment, not a substitute for medical, legal or financial judgement. If you are struggling with health, money or relationships, please talk to a qualified professional.",
          hi: "यह पृष्ठ एक खगोलीय तथ्य — आपके चंद्रमा के सापेक्ष शनि की स्थिति — और उस स्थिति का पारंपरिक नाम दिखाता है। ज्योतिष आत्म-चिंतन और आनंद के लिए है, चिकित्सा, कानूनी या वित्तीय निर्णय का विकल्प नहीं। स्वास्थ्य, धन या संबंधों में कठिनाई हो तो किसी योग्य विशेषज्ञ से परामर्श करें।",
          ko: "이 페이지의 결과는 토성과 달의 위치 관계라는 천문학적 사실과 그에 대한 전통적 명칭을 보여 줍니다. 점성술은 자신을 돌아보고 즐기기 위한 것이며, 의료·법률·투자 판단을 대신하지 않습니다. 건강, 돈, 인간관계로 어려움이 있다면 각 분야의 전문가와 상담하세요.",
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
          ja: "土星の動きを、ほかの惑星や時期区分とあわせて確認したい方は、次のページも参考にしてください。",
          en: "To look at Saturn's movement alongside the other planets and the timing periods, these pages may help.",
          hi: "शनि की गति को अन्य ग्रहों और काल-विभाजन के साथ देखने के लिए ये पृष्ठ उपयोगी हो सकते हैं।",
          ko: "토성의 움직임을 다른 행성이나 시기 구분과 함께 확인하고 싶다면 다음 페이지도 참고하세요.",
        },
      ],
      links: [
        {
          href: "/tools/moon-sign",
          label: { ja: "月星座（ラーシ）を調べる", en: "Find your Moon sign (rashi)", hi: "अपनी चंद्र राशि जानें", ko: "달 별자리(라시) 알아보기" },
        },
        {
          href: "/tools/transit-now",
          label: { ja: "今の惑星トランジットを見る", en: "See today's planetary transits", hi: "आज के ग्रह गोचर देखें", ko: "지금의 행성 트랜짓 보기" },
        },
        {
          href: "/tools/dasha-calculator",
          label: { ja: "ヴィムショッタリ・ダシャー計算", en: "Vimshottari dasha calculator", hi: "विंशोत्तरी दशा कैलकुलेटर", ko: "빔쇼타리 다샤 계산" },
        },
        {
          href: "/grahas/saturn",
          label: { ja: "土星（シャニ）の意味", en: "What Saturn (Shani) signifies", hi: "शनि का अर्थ", ko: "토성(샤니)의 의미" },
        },
        {
          href: "/learn-jyotish/transits/transits",
          label: { ja: "トランジット（ゴーチャラ）の基礎", en: "Transit (gochara) basics", hi: "गोचर की मूल बातें", ko: "트랜짓(고차라)의 기초" },
        },
      ],
    },
  ],
};
