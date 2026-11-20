import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/gemstone-recommendation.
 *
 * Japanese-first. What the tool actually computes (GemstonePanel.tsx +
 * lib/jyotish/gemstones.ts): the sidereal ascendant sign → its classical lord
 * → that planet's stone; and, separately, the first planet (in a fixed order)
 * whose dignity is "Debilitated" → that planet's stone. Each card lists a
 * primary stone, a cheaper substitute (uparatna), metal, finger and day.
 * It does NOT assess functional benefics/malefics, dasha, or stone quality —
 * the copy says so rather than implying a fuller analysis.
 *
 * Commercial-adjacent topic: no promises of outcomes, health or wealth, and
 * no nudging towards purchase.
 */
export const gemstoneRecommendationLongForm: ToolLongForm = {
  slug: "gemstone-recommendation",
  sections: [
    {
      heading: {
        ja: "使い方：入力のしかたと注意点",
        en: "How to use it: what to enter and what to watch for",
        hi: "उपयोग कैसे करें: क्या दर्ज करें और किन बातों का ध्यान रखें",
        ko: "사용 방법: 입력 방법과 주의할 점",
      },
      body: [
        {
          ja: "生年月日・出生時刻・出生地の三つを入力し、ボタンを押すだけです。プロフィールを保存済みの方は、自動的にその情報で計算されます。結果には、ラグナ（上昇宮）の支配星に対応する石と、チャート内で「減衰」している惑星があればその惑星に対応する石が、カード形式で表示されます。",
          en: "Enter your date, time and place of birth and press the button. If you have a saved profile, the calculation runs on it automatically. The results appear as cards: one for the stone linked to the lord of your Lagna (ascendant), and — if your chart has one — one for a planet that is debilitated.",
          hi: "जन्म तिथि, जन्म समय और जन्म स्थान दर्ज करें और बटन दबाएँ। यदि आपकी प्रोफ़ाइल सहेजी हुई है, तो गणना अपने आप उसी से होती है। परिणाम कार्ड के रूप में दिखते हैं: एक लग्न स्वामी से जुड़े रत्न का, और यदि कुंडली में कोई नीच ग्रह हो तो उसके रत्न का।",
          ko: "생년월일, 출생 시각, 출생지를 입력하고 버튼을 누르면 됩니다. 저장된 프로필이 있으면 그 정보로 자동 계산됩니다. 결과는 카드로 표시되며, 라그나(상승궁) 지배 행성에 대응하는 보석과, 차트에 쇠약한 행성이 있다면 그 행성에 대응하는 보석이 나옵니다.",
        },
        {
          ja: "いちばん大切なのは出生時刻です。ラグナはおよそ2時間ごとに次の星座へ移るため、時刻が1〜2時間ずれると支配星が変わり、提案される石もまったく別のものになることがあります。母子手帳などで記録を確認し、時刻が分からない場合は結果を参考程度にとどめてください。",
          en: "Birth time matters most. The Lagna moves into the next sign roughly every two hours, so an error of an hour or two can change the ruling planet — and with it, the stone suggested. Check a written record such as a maternity handbook; if you don't know your time, treat the result as a rough reference only.",
          hi: "सबसे महत्वपूर्ण है जन्म समय। लग्न लगभग हर दो घंटे में अगली राशि में चला जाता है, इसलिए एक-दो घंटे की गलती से स्वामी ग्रह और सुझाया गया रत्न बदल सकता है। किसी लिखित रिकॉर्ड से समय जाँचें; समय पता न हो तो परिणाम को केवल मोटा संदर्भ मानें।",
          ko: "가장 중요한 것은 출생 시각입니다. 라그나는 약 2시간마다 다음 별자리로 넘어가므로, 한두 시간의 오차로 지배 행성과 추천 보석이 완전히 바뀔 수 있습니다. 출생 기록을 확인하고, 시각을 모르면 결과를 대략적인 참고로만 보세요.",
        },
      ],
      bullets: [
        {
          ja: "出生地は市区町村まで選んでください。経度と緯度、そしてタイムゾーンの計算に使われます。",
          en: "Choose your birthplace down to the city or town — it supplies the longitude, latitude and time zone.",
          hi: "जन्म स्थान शहर या कस्बे तक चुनें — इससे देशांतर, अक्षांश और समय क्षेत्र मिलते हैं।",
          ko: "출생지는 시·군·구 단위까지 선택하세요. 경도·위도와 시간대 계산에 쓰입니다.",
        },
        {
          ja: "時刻は出生地の現地時刻で入力します。海外生まれの方は、日本時間に直さないようご注意ください。",
          en: "Enter the time as local time at the birthplace. If you were born abroad, do not convert it to Japan time.",
          hi: "समय जन्म स्थान के स्थानीय समय में दर्ज करें। विदेश में जन्मे हों तो उसे जापान समय में न बदलें।",
          ko: "시각은 출생지의 현지 시각으로 입력합니다. 해외에서 태어났다면 일본 시간으로 바꾸지 마세요.",
        },
        {
          ja: "インド占星術は恒星黄道（ラヒリ・アヤナムシャ、現在約24度）を使うため、西洋占星術でのアセンダントとは星座が一つずれることがよくあります。西洋式の結果と違っても誤りではありません。",
          en: "Jyotish uses the sidereal zodiac (Lahiri ayanamsa, currently about 24°), so your Lagna is often one sign earlier than your Western rising sign. A different result from a Western chart is not an error.",
          hi: "ज्योतिष निरयन राशिचक्र (लाहिड़ी अयनांश, वर्तमान में लगभग 24°) का उपयोग करता है, इसलिए लग्न अक्सर पश्चिमी राइजिंग साइन से एक राशि पीछे होता है। यह त्रुटि नहीं है।",
          ko: "조티시는 항성 황도(라히리 아야남샤, 현재 약 24도)를 쓰므로 라그나가 서양식 상승궁보다 한 별자리 앞서는 경우가 많습니다. 서양식 결과와 달라도 오류가 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the results: the terms on the cards",
        hi: "परिणाम कैसे पढ़ें: कार्ड पर दिखने वाले शब्द",
        ko: "결과 읽는 법: 카드에 표시되는 용어",
      },
      body: [
        {
          ja: "結果のカードには、次の項目が並びます。どれも古典的なジョーティッシュの対応表に基づくもので、あなた個人の運勢を数値化したものではありません。",
          en: "Each result card lists the items below. All of them come from the classical Jyotish correspondence tables; none is a score of your personal fortune.",
          hi: "हर परिणाम कार्ड में नीचे दिए गए विषय होते हैं। ये सभी शास्त्रीय ज्योतिष की तालिकाओं पर आधारित हैं; इनमें से कोई भी आपके भाग्य का अंक नहीं है।",
          ko: "각 결과 카드에는 아래 항목이 표시됩니다. 모두 고전 조티시의 대응표에 따른 것이며, 개인의 운세를 점수로 매긴 것이 아닙니다.",
        },
        {
          ja: "例えば、ラグナが獅子座の場合、支配星は太陽です。カードには主な石としてルビー、安価な代替石としてレッドガーネットまたはサンストーン、金属は金または銅、指は薬指、身につけ始める曜日は日曜日と表示されます。さらに金星が乙女座にあれば金星は減衰と判定され、二枚目のカードにダイヤモンドと、代替石のホワイトサファイアまたはジルコンが示されます（あくまで説明のための例です）。",
          en: "For example, if your Lagna is Leo, its lord is the Sun. The card shows ruby as the primary stone, red garnet or sunstone as the cheaper substitute, gold or copper as the metal, the ring finger, and Sunday as the day to begin. If Venus also sits in Virgo, it reads as debilitated, and a second card shows diamond with white sapphire or zircon as the substitute. (This is an illustration only.)",
          hi: "उदाहरण के लिए, यदि लग्न सिंह है तो स्वामी सूर्य है। कार्ड में मुख्य रत्न माणिक, सस्ता विकल्प लाल गार्नेट या सनस्टोन, धातु सोना या तांबा, अनामिका उंगली और आरंभ का दिन रविवार दिखेगा। यदि शुक्र कन्या में हो तो वह नीच माना जाता है, और दूसरे कार्ड में हीरा तथा विकल्प के रूप में सफेद पुखराज या जिरकॉन दिखेगा। (यह केवल उदाहरण है।)",
          ko: "예를 들어 라그나가 사자자리라면 지배 행성은 태양입니다. 카드에는 주 보석 루비, 저렴한 대체 보석 레드 가넷 또는 선스톤, 금속은 금 또는 구리, 약지, 착용 시작 요일은 일요일로 표시됩니다. 금성이 처녀자리에 있으면 쇠약으로 판정되어, 두 번째 카드에 다이아몬드와 대체 보석 화이트 사파이어 또는 지르콘이 나옵니다(설명을 위한 예시입니다).",
        },
      ],
      bullets: [
        {
          ja: "ラグナの支配星：生まれた瞬間に東の地平線に昇っていた星座（ラグナ）を支配する惑星です。チャート全体の「主」とされ、その石は古典的に最も無難な提案とされます。",
          en: "Lagna lord: the planet that rules the sign rising on the eastern horizon at birth. It is treated as the ruler of the whole chart, and its stone is classically the most conservative suggestion.",
          hi: "लग्न स्वामी: जन्म के समय पूर्वी क्षितिज पर उदित राशि का स्वामी ग्रह। इसे पूरी कुंडली का स्वामी माना जाता है, और इसका रत्न शास्त्रीय रूप से सबसे सुरक्षित सुझाव है।",
          ko: "라그나 지배 행성: 태어난 순간 동쪽 지평선에 떠오르던 별자리를 다스리는 행성입니다. 차트 전체의 주인으로 여겨지며, 그 보석은 고전적으로 가장 무난한 추천입니다.",
        },
        {
          ja: "減衰（ニーチャ）：惑星が力を発揮しにくいとされる星座にある状態です。例：太陽は天秤座、月は蠍座、火星は蟹座、水星は魚座、木星は山羊座、金星は乙女座、土星は牡羊座。複数ある場合、このツールは決まった順序で最初の一つだけを表示します。",
          en: "Debilitation (neecha): a planet placed in the sign where it is held to function weakest — e.g. Sun in Libra, Moon in Scorpio, Mars in Cancer, Mercury in Pisces, Jupiter in Capricorn, Venus in Virgo, Saturn in Aries. If there are several, the tool shows only the first in a fixed order.",
          hi: "नीच: वह स्थिति जब ग्रह उस राशि में हो जहाँ वह सबसे कमजोर माना जाता है — जैसे सूर्य तुला में, चंद्र वृश्चिक में, मंगल कर्क में, बुध मीन में, गुरु मकर में, शुक्र कन्या में, शनि मेष में। कई हों तो उपकरण एक निश्चित क्रम में केवल पहला दिखाता है।",
          ko: "쇠약(니차): 행성이 힘을 가장 발휘하기 어렵다고 여겨지는 별자리에 있는 상태입니다. 예: 태양은 천칭자리, 달은 전갈자리, 화성은 게자리, 수성은 물고기자리, 목성은 염소자리, 금성은 처녀자리, 토성은 양자리. 여러 개라면 정해진 순서로 첫 번째만 표시합니다.",
        },
        {
          ja: "主な石：その惑星に古典的に対応する宝石（ルビー、真珠、レッドコーラル、エメラルド、イエローサファイア、ダイヤモンド、ブルーサファイア、ヘソナイト、キャッツアイの九種）です。",
          en: "Primary stone: the gem classically assigned to that planet — one of nine: ruby, pearl, red coral, emerald, yellow sapphire, diamond, blue sapphire, hessonite or cat's eye.",
          hi: "मुख्य रत्न: उस ग्रह का शास्त्रीय रत्न — नौ में से एक: माणिक, मोती, मूंगा, पन्ना, पुखराज, हीरा, नीलम, गोमेद या लहसुनिया।",
          ko: "주 보석: 그 행성에 고전적으로 대응하는 보석으로, 루비·진주·레드 코랄·에메랄드·옐로 사파이어·다이아몬드·블루 사파이어·헤소나이트·캣츠아이의 아홉 가지 중 하나입니다.",
        },
        {
          ja: "安価な代替石：伝統的に「ウパラトナ（副宝石）」と呼ばれる、同じ惑星に結びつけられた手頃な石です。主な石より穏やかな働きと考えられています。",
          en: "Cheaper substitute: what tradition calls an uparatna (secondary gem) — a more affordable stone linked to the same planet, generally regarded as gentler than the primary stone.",
          hi: "सस्ता विकल्प: परंपरा में जिसे उपरत्न कहा जाता है — उसी ग्रह से जुड़ा अधिक किफ़ायती रत्न, जिसे सामान्यतः मुख्य रत्न से सौम्य माना जाता है।",
          ko: "저렴한 대체 보석: 전통적으로 '우파라트나(부보석)'라 불리는, 같은 행성과 연결된 저렴한 보석입니다. 주 보석보다 온건하게 작용한다고 여겨집니다.",
        },
        {
          ja: "金属・指・曜日：石を留める金属、はめる指、身につけ始める曜日の伝統的な目安です。曜日は各惑星が司る曜日（日曜＝太陽、月曜＝月など）に対応しています。",
          en: "Metal, finger and day: the traditional guidance on the setting, the finger to wear it on, and the weekday to begin — each weekday corresponding to its planet (Sunday for the Sun, Monday for the Moon, and so on).",
          hi: "धातु, उंगली और दिन: रत्न जड़ने की धातु, पहनने की उंगली और आरंभ के दिन का पारंपरिक मार्गदर्शन — हर दिन अपने ग्रह से जुड़ा है (रविवार सूर्य, सोमवार चंद्र, आदि)।",
          ko: "금속·손가락·요일: 보석을 물리는 금속, 끼는 손가락, 착용을 시작할 요일의 전통적 기준입니다. 요일은 각 행성이 다스리는 요일(일요일=태양, 월요일=달 등)에 대응합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：インド占星術の宝石と「誕生石」の違い",
        en: "Background: Jyotish gemstones versus birthstones",
        hi: "पृष्ठभूमि: ज्योतिष रत्न और जन्म-माह के रत्न में अंतर",
        ko: "배경 지식: 조티시 보석과 '탄생석'의 차이",
      },
      body: [
        {
          ja: "日本でなじみのある「誕生石」は、生まれた月ごとに石を割り当てる近代の慣習で、占星術の計算とは別のものです。西洋占星術にも星座ごとの石を挙げる考え方はありますが、個人のチャートから石を選ぶ体系が中心にあるわけではありません。",
          en: "The birthstones familiar in Japan assign a stone to each birth month — a modern custom separate from any astrological calculation. Western astrology does sometimes list stones per zodiac sign, but choosing a stone from an individual chart is not central to it.",
          hi: "जापान में परिचित 'जन्म-माह रत्न' हर महीने के लिए एक रत्न तय करने की आधुनिक परंपरा है, जो ज्योतिषीय गणना से अलग है। पश्चिमी ज्योतिष में कभी-कभी राशि के अनुसार रत्न बताए जाते हैं, पर व्यक्तिगत कुंडली से रत्न चुनना उसका केंद्र नहीं है।",
          ko: "일본에서 익숙한 '탄생석'은 태어난 달마다 보석을 정하는 근대의 관습으로, 점성술 계산과는 별개입니다. 서양 점성술에도 별자리별 보석을 드는 경우가 있지만, 개인 차트로 보석을 고르는 체계가 중심은 아닙니다.",
        },
        {
          ja: "インド占星術では、九つの惑星（ナヴァグラハ）それぞれに一つの宝石を対応させ、九種をまとめて「ナヴァラトナ」と呼びます。宝石は、マントラ（真言）や布施、儀礼と並ぶ伝統的なレメディ（緩和策）の一つとして位置づけられてきました。同じ月に生まれた人でも、ラグナや惑星の配置が違えば提案される石は異なります。",
          en: "Jyotish pairs each of the nine grahas with one gem; the full set is called the navaratna. Gems sit alongside mantras, charity and ritual as one of the traditional remedial practices. Two people born in the same month may be pointed to different stones, because their Lagna and planetary placements differ.",
          hi: "ज्योतिष नौ ग्रहों में से प्रत्येक को एक रत्न से जोड़ता है; पूरे समूह को नवरत्न कहते हैं। रत्न मंत्र, दान और अनुष्ठान के साथ पारंपरिक उपायों में से एक हैं। एक ही महीने में जन्मे दो लोगों को अलग-अलग रत्न सुझाए जा सकते हैं, क्योंकि उनके लग्न और ग्रह-स्थितियाँ भिन्न होती हैं।",
          ko: "조티시는 아홉 행성(나바그라하) 각각에 보석 하나를 대응시키며, 아홉 가지를 통틀어 '나바라트나'라 부릅니다. 보석은 만트라, 보시, 의례와 함께 전통적인 레메디(완화책) 중 하나로 자리해 왔습니다. 같은 달에 태어나도 라그나와 행성 배치가 다르면 추천 보석이 달라집니다.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解と、購入前のチェックリスト",
        en: "Common misconceptions, and a checklist before buying",
        hi: "आम भ्रांतियाँ, और खरीदने से पहले की जाँच-सूची",
        ko: "흔한 오해와 구매 전 체크리스트",
      },
      body: [
        {
          ja: "宝石は「身につければ運が開ける」お守りとして語られがちですが、ジョーティッシュの伝統でも、石は人生の結果を約束するものではなく、惑星の象意を意識するための補助的な実践とされています。また、このツールは機能的吉凶星（ラグナから見てその惑星が吉か凶か）やダシャーの時期までは判定していません。減衰した惑星を強めることが望ましいかどうかは、チャート全体を見て判断が分かれる点です。",
          en: "Gems are often sold as charms that open up your luck, but even within Jyotish a stone promises no outcome; it is a supporting practice for keeping a planet's significations in mind. This tool also does not assess functional benefics and malefics (whether a planet is favourable for your particular Lagna) or dasha timing. Whether strengthening a debilitated planet is wise is something practitioners judge differently after reading the whole chart.",
          hi: "रत्नों को अक्सर भाग्य खोलने वाले ताबीज़ की तरह बेचा जाता है, पर ज्योतिष परंपरा में भी रत्न किसी परिणाम का वादा नहीं करता; यह ग्रह के कारकत्व को ध्यान में रखने का सहायक अभ्यास है। यह उपकरण कार्यात्मक शुभ-अशुभ ग्रह (आपके लग्न के लिए ग्रह अनुकूल है या नहीं) या दशा-काल का आकलन नहीं करता। नीच ग्रह को बल देना उचित है या नहीं, इस पर पूरी कुंडली देखकर विद्वानों के मत भिन्न होते हैं।",
          ko: "보석은 '끼면 운이 트이는' 부적처럼 이야기되곤 하지만, 조티시 전통에서도 보석은 결과를 약속하지 않으며 행성의 상징을 의식하기 위한 보조적 실천으로 여겨집니다. 또한 이 도구는 기능적 길흉성(라그나 기준으로 그 행성이 길한지 흉한지)이나 다샤 시기까지는 판정하지 않습니다. 쇠약한 행성을 강화하는 것이 바람직한지는 차트 전체를 보고 판단이 갈리는 부분입니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：高価な石ほど良い。→ 値段と占星術上の適否は別の問題です。伝統的には、まず石が自分のチャートに合うかどうかが先に問われます。",
          en: "Misconception: the more expensive the stone, the better. Price and astrological suitability are separate questions; tradition asks first whether the stone suits your chart at all.",
          hi: "भ्रांति: जितना महँगा रत्न, उतना अच्छा। कीमत और ज्योतिषीय उपयुक्तता अलग प्रश्न हैं; परंपरा पहले यह पूछती है कि रत्न आपकी कुंडली के अनुकूल है या नहीं।",
          ko: "오해: 비싼 보석일수록 좋다. 가격과 점성학적 적합성은 별개이며, 전통적으로는 먼저 그 보석이 내 차트에 맞는지를 묻습니다.",
        },
        {
          ja: "誤解：九つの石を全部つければ万全。→ 伝統的には、互いに相性の悪い惑星の石（例：太陽のルビーと土星のブルーサファイア）を同時に身につけるのは避けるとする考え方があります。",
          en: "Misconception: wearing all nine stones covers everything. Tradition generally advises against combining stones of mutually unfriendly planets, such as the Sun's ruby with Saturn's blue sapphire.",
          hi: "भ्रांति: सभी नौ रत्न पहनने से सब ठीक हो जाता है। परंपरा सामान्यतः शत्रु ग्रहों के रत्न साथ पहनने से बचने की सलाह देती है, जैसे सूर्य का माणिक और शनि का नीलम।",
          ko: "오해: 아홉 보석을 모두 끼면 만전이다. 전통적으로는 서로 상성이 나쁜 행성의 보석(예: 태양의 루비와 토성의 블루 사파이어)을 함께 착용하지 말라는 견해가 있습니다.",
        },
        {
          ja: "購入前に：出生時刻が正確か、チャート全体を見た専門家の意見を聞いたかを確認しましょう。特に土星・火星・ラーフ・ケートゥの石は慎重に。",
          en: "Before buying: confirm your birth time is accurate and that a practitioner has looked at the whole chart — especially for the Saturn, Mars, Rahu and Ketu stones.",
          hi: "खरीदने से पहले: पुष्टि करें कि जन्म समय सही है और किसी विशेषज्ञ ने पूरी कुंडली देखी है — विशेषकर शनि, मंगल, राहु और केतु के रत्नों के लिए।",
          ko: "구매 전에: 출생 시각이 정확한지, 차트 전체를 본 전문가의 의견을 들었는지 확인하세요. 특히 토성·화성·라후·케투 보석은 신중하게.",
        },
        {
          ja: "購入前に：高価な石を急いで買う必要はありません。まずは代替石や、マントラ・布施など費用のかからない伝統的な方法から試すという選択肢もあります。",
          en: "Before buying: there is no need to rush into an expensive stone. You can start with a substitute, or with traditional practices that cost nothing, such as mantra or charity.",
          hi: "खरीदने से पहले: महँगा रत्न जल्दबाज़ी में खरीदने की आवश्यकता नहीं है। आप उपरत्न से, या मंत्र और दान जैसी निःशुल्क पारंपरिक विधियों से शुरुआत कर सकते हैं।",
          ko: "구매 전에: 비싼 보석을 서둘러 살 필요는 없습니다. 대체 보석이나, 만트라·보시처럼 비용이 들지 않는 전통적 방법부터 시작하는 선택지도 있습니다.",
        },
        {
          ja: "購入前に：鑑別書の有無、加熱などの処理の有無を販売元に確認しましょう。宝石としての品質は占星術とは別に、専門の鑑別機関が判断する事柄です。",
          en: "Before buying: ask the seller whether the stone has a gemological report and whether it has been treated (heated, for example). Gem quality is a matter for a gemological laboratory, separate from astrology.",
          hi: "खरीदने से पहले: विक्रेता से पूछें कि रत्न का प्रमाणपत्र है या नहीं और क्या उसे उपचारित (जैसे गर्म) किया गया है। रत्न की गुणवत्ता ज्योतिष से अलग, प्रयोगशाला का विषय है।",
          ko: "구매 전에: 감별서가 있는지, 가열 등 처리가 되었는지 판매처에 확인하세요. 보석의 품질은 점성술과 별개로 전문 감별 기관이 판단할 문제입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "免責事項",
        en: "Disclaimer",
        hi: "अस्वीकरण",
        ko: "면책 사항",
      },
      body: [
        {
          ja: "このページの内容は、インド占星術の伝統的な考え方を紹介するもので、自己理解や楽しみのための参考情報です。宝石を身につけることで健康・金運・人間関係などの結果が変わることを保証するものではなく、医療・法律・金融上の助言の代わりにもなりません。体調やお金に関わる判断は、それぞれの専門家にご相談ください。",
          en: "This page introduces traditional Jyotish ideas as reference for self-reflection and enjoyment. It does not promise that wearing a gem will change your health, finances, relationships or any other outcome, and it is no substitute for medical, legal or financial advice. Please consult the relevant professional for decisions about health or money.",
          hi: "यह पृष्ठ ज्योतिष की पारंपरिक अवधारणाओं को आत्म-चिंतन और आनंद के संदर्भ के रूप में प्रस्तुत करता है। यह वादा नहीं करता कि रत्न पहनने से स्वास्थ्य, धन, संबंध या कोई अन्य परिणाम बदलेगा, और यह चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है। स्वास्थ्य या धन से जुड़े निर्णयों के लिए संबंधित विशेषज्ञ से परामर्श करें।",
          ko: "이 페이지는 조티시의 전통적인 생각을 자기 이해와 즐거움을 위한 참고 정보로 소개합니다. 보석 착용으로 건강·재물·인간관계 등의 결과가 바뀐다고 보장하지 않으며, 의료·법률·금융 조언을 대신하지 않습니다. 건강이나 돈과 관련된 판단은 해당 분야 전문가와 상담하세요.",
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
          ja: "ラグナの確認や、惑星の強さ・吉凶の考え方をさらに知りたい方は、次のページもご覧ください。",
          en: "To confirm your Lagna or read more about planetary strength and benefic or malefic roles, see these pages.",
          hi: "अपना लग्न जाँचने या ग्रहों की शक्ति और शुभ-अशुभ भूमिका के बारे में और जानने के लिए ये पृष्ठ देखें।",
          ko: "라그나를 확인하거나 행성의 힘과 길흉 개념을 더 알고 싶다면 다음 페이지를 참고하세요.",
        },
      ],
      links: [
        {
          href: "/tools/lagna-calculator",
          label: { ja: "ラグナ（上昇宮）計算", en: "Lagna (ascendant) calculator", hi: "लग्न कैलकुलेटर", ko: "라그나(상승궁) 계산" },
        },
        {
          href: "/tools/birth-chart",
          label: { ja: "インド占星術のホロスコープ作成", en: "Vedic birth chart", hi: "वैदिक जन्म कुंडली", ko: "베다 출생 차트" },
        },
        {
          href: "/learn-jyotish/remedies/gemstones",
          label: { ja: "学ぶ：レメディとしての宝石", en: "Learn: gemstones as a remedy", hi: "सीखें: उपाय के रूप में रत्न", ko: "배우기: 레메디로서의 보석" },
        },
        {
          href: "/learn-jyotish/planets/functional-benefics-malefics",
          label: { ja: "学ぶ：機能的吉星と凶星", en: "Learn: functional benefics and malefics", hi: "सीखें: कार्यात्मक शुभ और अशुभ ग्रह", ko: "배우기: 기능적 길성과 흉성" },
        },
        {
          href: "/learn-jyotish/planets/planetary-strengths",
          label: { ja: "学ぶ：惑星の強さ（品位）", en: "Learn: planetary strengths", hi: "सीखें: ग्रहों की शक्ति", ko: "배우기: 행성의 힘" },
        },
      ],
    },
  ],
};
