import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/baby-names.
 *
 * Two traditions are in play here, not one — the classical nakshatra-pada
 * naming rule, and numerology — and the risk is presenting them as if they
 * were a single system that either agrees or is "wrong." This body keeps
 * them explicitly separate, the same honesty pattern `numerology-copy.ts`'s
 * `provenance` line already uses for the numerology panel on its own.
 */
export const babyNamesLongForm: ToolLongForm = {
  slug: "baby-names",
  sections: [
    {
      heading: {
        ja: "ナームカラン（命名）の仕組み",
        en: "How Naam Karan works",
        hi: "नामकरण कैसे काम करता है",
        ko: "남카란(작명)은 어떻게 작동하는가",
      },
      body: [
        {
          ja: "生まれたときの月の位置が、あなたの赤ちゃんの生まれナクシャトラを決めます。27ある月宿はそれぞれ4つのパダ（4分の1）に分かれ、合計108のパダそれぞれに、古典テキストが定める特定のサンスクリット音節（アクシャラ）が割り当てられています。赤ちゃんがどのパダに生まれたかがわかれば、名前が始まるべき伝統的な音がわかります。",
          en: "The Moon's position at the moment of birth determines your baby's Janma Nakshatra — the lunar mansion the Moon occupied. Each of the 27 nakshatras divides into 4 padas (quarters), and classical texts assign a specific Sanskrit akshara (syllable) to each of the resulting 108 padas. Knowing which pada your baby was born under gives the traditional sound a name should start with.",
          hi: "जन्म के क्षण चंद्रमा की स्थिति आपके बच्चे का जन्म नक्षत्र तय करती है — वह चंद्र भवन जिसमें चंद्रमा उस समय था। 27 नक्षत्रों में से प्रत्येक 4 पादों (चतुर्थांशों) में बंटा है, और शास्त्रीय ग्रंथ इन 108 पादों में से प्रत्येक को एक विशिष्ट संस्कृत अक्षर देते हैं। यह जानना कि आपका बच्चा किस पाद में जन्मा, नाम के लिए पारंपरिक प्रारंभिक ध्वनि बताता है।",
          ko: "출생 순간 달의 위치가 아기의 출생 낙샤트라 — 달이 머문 달의 저택 — 를 결정합니다. 27개의 낙샤트라는 각각 4개의 파다(사분면)로 나뉘며, 고전 문헌은 그렇게 생긴 108개의 파다 각각에 특정한 산스크리트 음절(악샤라)을 배정합니다. 아기가 어느 파다에서 태어났는지 알면 이름이 시작해야 할 전통적인 소리를 알 수 있습니다.",
        },
        {
          ja: "この道具が向き合っているのは、その音節を実際に使える日本人名に変えるという部分です。日本語にはサンスクリット語の子音すべてに対応する音があるわけではないため（そり舌音や有気音、L音とR音の区別などがありません）、各アクシャラは文字どおりの転写ではなく、最も自然に近い日本語の頭音に結び付けています。命名の規則そのものは変わらず適用されますが、実際に呼ぶ名前は日本で自然に使えるものになります。",
          en: "Where this tool does real work is turning that syllable into a name that's actually usable in Japan. Japanese doesn't have a sound for every Sanskrit consonant — no retroflex series, no aspirated/unaspirated distinction, no separate L and R — so each akshara is bridged to the nearest natural Japanese onset rather than transliterated literally. The naming rule still applies exactly as written; the name you'd actually call your child is one that reads naturally in Japan.",
          hi: "यह उपकरण असल में जो काम करता है वह है उस अक्षर को एक ऐसे नाम में बदलना जो जापान में वास्तव में प्रयोग हो सके। जापानी में संस्कृत के हर व्यंजन के बराबर ध्वनि नहीं है — न मूर्धन्य वर्ण, न महाप्राण-अल्पप्राण भेद, न ही ल और र के बीच अलग ध्वनि — इसलिए हर अक्षर को शाब्दिक लिप्यंतरण के बजाय निकटतम स्वाभाविक जापानी ध्वनि से जोड़ा गया है। नामकरण नियम पूरी तरह वैसे ही लागू होता है, पर असल में पुकारा जाने वाला नाम जापान में स्वाभाविक रूप से पढ़ा जा सकता है।",
          ko: "이 도구가 실제로 하는 일은 그 음절을 일본에서 실제로 쓸 수 있는 이름으로 바꾸는 것입니다. 일본어에는 산스크리트어의 모든 자음에 대응하는 소리가 없습니다 — 권설음도, 유기음·무기음 구분도, L과 R의 구별도 없습니다 — 그래서 각 악샤라는 문자 그대로 옮기는 대신 가장 자연스러운 일본어 첫소리에 연결했습니다. 작명 규칙 자체는 그대로 적용되며, 실제로 부르게 될 이름은 일본에서 자연스럽게 읽히는 이름입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "数秘術は、代わりではなく重ね合わせるものです",
        en: "Numerology is a layer, not a replacement",
        hi: "अंक ज्योतिष एक परत है, विकल्प नहीं",
        ko: "수비학은 대체가 아니라 겹쳐지는 레이어입니다",
      },
      body: [
        {
          ja: "ここで見せている数秘術スコアは、赤ちゃんの生年月日から求めたムーランク（本命数）とバギャンク（宿命数）に対して、それぞれの名前がどれだけ調和するかを示す、第二の独立した層です。ヴェーダ占星術そのものの一部ではなく、隣接する伝統として扱っています——サイトの数秘術ページと同じ立場です。表示される名前はすでにすべて正しい伝統的な音節から選ばれているため、スコアは音節の規則を上書きするものではなく、その中で名前を比べるための道具です。",
          en: "The numerology score shown here is a second, independent layer — how well each name harmonizes with the Mulank and Bhagyank derived from your baby's birth date. It's treated as a related but separate tradition, not part of Vedic astrology itself, the same stance this site's own numerology page takes. Every name shown has already been selected for starting with the correct traditional syllable, so the score never overrides that rule — it's a way of ranking names within it.",
          hi: "यहाँ दिखाया गया अंक ज्योतिष स्कोर एक दूसरी, स्वतंत्र परत है — कि हर नाम आपके बच्चे की जन्म तिथि से निकाले गए मूलांक और भाग्यांक के साथ कितना सामंजस्य रखता है। इसे वैदिक ज्योतिष का हिस्सा नहीं बल्कि एक संबंधित किंतु अलग परंपरा माना जाता है — ठीक वैसे ही जैसे इस साइट का अपना अंक ज्योतिष पृष्ठ मानता है। दिखाया गया हर नाम पहले से ही सही पारंपरिक अक्षर से शुरू होने के लिए चुना गया है, इसलिए स्कोर उस नियम को कभी अधिलेखित नहीं करता — यह उसके भीतर नामों को क्रमबद्ध करने का एक तरीका है।",
          ko: "여기 표시된 수비학 점수는 두 번째의 독립적인 층입니다 — 각 이름이 아기의 생년월일에서 도출한 물랑크·바갼크와 얼마나 조화로운지를 나타냅니다. 이는 베다 점성술 자체의 일부가 아니라 관련은 있지만 별개인 전통으로 다루며, 이 사이트의 수비학 페이지가 취하는 입장과 같습니다. 표시되는 모든 이름은 이미 올바른 전통 음절로 시작하도록 선택되었으므로, 점수가 그 규칙을 무시하는 일은 없습니다 — 그 안에서 이름의 순위를 매기는 방법일 뿐입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方：入力から候補リストまで",
        en: "How to use it: from input to shortlist",
        hi: "उपयोग कैसे करें: जानकारी भरने से शॉर्टलिस्ट तक",
        ko: "사용 방법: 입력부터 후보 목록까지",
      },
      body: [
        {
          ja: "まず、赤ちゃんの生年月日・出生時刻・出生地を入力し、性別（男の子／女の子／すべて）を選んで「名前を探す」を押します。出生地はその土地の時差（タイムゾーン）を判断するために使われるので、里帰り出産などで実家近くの病院で生まれた場合は、住んでいる場所ではなく実際に生まれた場所を選んでください。",
          en: "Enter your baby's date, time and place of birth, choose a gender filter (boy / girl / all) and press \"Find names\". The birthplace is used to determine the local time zone, so if your baby was born somewhere other than where you live — for example at a hospital near your parents' home — choose the place where the birth actually happened.",
          hi: "अपने बच्चे की जन्म तिथि, जन्म समय और जन्म स्थान भरें, लिंग फ़िल्टर (लड़का / लड़की / सभी) चुनें और \"नाम खोजें\" दबाएँ। जन्म स्थान से स्थानीय समय क्षेत्र तय होता है, इसलिए यदि बच्चे का जन्म आपके निवास से अलग जगह हुआ हो — जैसे नाना-नानी के घर के पास के अस्पताल में — तो वही स्थान चुनें जहाँ जन्म वास्तव में हुआ।",
          ko: "아기의 생년월일, 출생 시각, 출생지를 입력하고 성별 필터(남아 / 여아 / 전체)를 고른 뒤 '이름 찾기'를 누르세요. 출생지는 그 지역의 시간대를 판단하는 데 쓰이므로, 친정 근처 병원 등 사는 곳과 다른 곳에서 태어났다면 실제로 태어난 장소를 선택하세요.",
        },
        {
          ja: "出生時刻は、母子健康手帳の「出生の記録」や出生証明書に記載された時刻を使うのが確実です。月は1日におよそ13度進み、1つのパダ（3度20分）を約6時間で通過します。そのため数時間ずれるだけでパダ、つまり頭音が変わることがあります。時刻がわからない場合は「正確な出生時刻がわかりませんか？」を開き、ナクシャトラとパダを直接選んで探すこともできます。",
          en: "For the birth time, the time recorded in the Maternal and Child Health Handbook or on the birth certificate is the most reliable source. The Moon moves roughly 13° a day and crosses one pada (3°20′) in about six hours, so a few hours' difference can change the pada — and with it the starting syllable. If you don't know the time, open \"Don't know the exact birth time?\" and choose the nakshatra and pada directly.",
          hi: "जन्म समय के लिए मातृ-शिशु स्वास्थ्य पुस्तिका या जन्म प्रमाणपत्र में दर्ज समय सबसे भरोसेमंद है। चंद्रमा प्रतिदिन लगभग 13° चलता है और एक पाद (3°20′) लगभग छह घंटे में पार करता है, इसलिए कुछ घंटों का अंतर भी पाद — और उसके साथ प्रारंभिक अक्षर — बदल सकता है। समय न पता हो तो \"जन्म का सटीक समय नहीं पता?\" खोलकर सीधे नक्षत्र और पाद चुनें।",
          ko: "출생 시각은 모자건강수첩이나 출생증명서에 기록된 시각을 쓰는 것이 가장 확실합니다. 달은 하루에 약 13도 움직이며 한 파다(3도 20분)를 약 6시간에 지나갑니다. 그래서 몇 시간만 어긋나도 파다, 즉 시작 음절이 바뀔 수 있습니다. 시각을 모른다면 '정확한 출생 시각을 모르시나요?'를 열어 낙샤트라와 파다를 직접 선택하세요.",
        },
        {
          ja: "もう一つよくある戸惑いが、星座のずれです。このツールはインド占星術の恒星黄道（ラヒリ・アヤナムシャ）で計算しており、西洋占星術の回帰黄道とは現在およそ24度の差があります。そのため、雑誌などで見る西洋式の月星座とは一つ前の星座が表示されることがよくありますが、計算の誤りではありません。",
          en: "Another common surprise is a shifted sign. This tool calculates in the sidereal zodiac with the Lahiri ayanamsa, which currently differs from the tropical zodiac of Western astrology by about 24°. The Moon sign shown here is therefore often one sign earlier than the Western Moon sign you may have seen elsewhere — that is not a calculation error.",
          hi: "एक और आम उलझन राशि का खिसकना है। यह उपकरण लाहिड़ी अयनांश के साथ निरयन (साइडेरियल) राशिचक्र में गणना करता है, जो पश्चिमी ज्योतिष के सायन राशिचक्र से इस समय लगभग 24° अलग है। इसलिए यहाँ दिखने वाली चंद्र राशि अक्सर पश्चिमी चंद्र राशि से एक राशि पहले होती है — यह गणना की गलती नहीं है।",
          ko: "또 하나 흔한 혼란은 별자리가 어긋나는 것입니다. 이 도구는 인도 점성술의 항성 황도(라히리 아야남샤)로 계산하며, 서양 점성술의 회귀 황도와는 현재 약 24도 차이가 납니다. 그래서 잡지 등에서 보던 서양식 달별자리보다 한 칸 앞의 별자리가 표시되는 경우가 많지만, 계산 오류가 아닙니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻は午前・午後（24時間表記）を取り違えていないか確認する",
          en: "Check you haven't mixed up a.m. and p.m. (or the 24-hour clock)",
          hi: "जाँचें कि सुबह-शाम (या 24 घंटे की घड़ी) में गड़बड़ी तो नहीं हुई",
          ko: "오전·오후(24시간 표기)를 혼동하지 않았는지 확인하기",
        },
        {
          ja: "出生地は住所ではなく、実際に生まれた病院や助産院の所在地を選ぶ",
          en: "Choose the location of the hospital or birth centre, not your home address",
          hi: "घर का पता नहीं, बल्कि उस अस्पताल या प्रसूति केंद्र का स्थान चुनें जहाँ जन्म हुआ",
          ko: "집 주소가 아니라 실제로 태어난 병원이나 조산원의 위치를 선택하기",
        },
        {
          ja: "数秘術スコアは生年月日から計算されるため、日付は必ず正確に入力する",
          en: "The numerology score is computed from the birth date, so make sure the date is exact",
          hi: "अंक ज्योतिष स्कोर जन्म तिथि से निकलता है, इसलिए तिथि बिल्कुल सही भरें",
          ko: "수비학 점수는 생년월일로 계산되므로 날짜를 반드시 정확히 입력하기",
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
          ja: "結果画面には、生まれナクシャトラの名前と、その下にいくつかの基本情報、頭音、名前の候補が順に並びます。それぞれの意味は次のとおりです。",
          en: "The result shows the birth nakshatra's name, a few basic facts beneath it, the starting syllable, and then the list of candidate names. Here is what each item means.",
          hi: "परिणाम में जन्म नक्षत्र का नाम, उसके नीचे कुछ मूल जानकारी, प्रारंभिक अक्षर और फिर नामों की सूची दिखती है। हर चीज़ का अर्थ इस प्रकार है।",
          ko: "결과 화면에는 출생 낙샤트라의 이름, 그 아래 몇 가지 기본 정보, 시작 음절, 그리고 이름 후보가 차례로 나옵니다. 각 항목의 의미는 다음과 같습니다.",
        },
        {
          ja: "例えば、月がクリッティカーの第1パダにある日に生まれた場合、頭音は「अ（A）」と表示され、日本語では「あ」で始まる名前——明（あきら）、葵（あおい）、彩（あや）など——が候補になります。一方、ローヒニーの第2パダ（Vaa）のように日本語に近い音が少ない頭音では、「ば」行に加えて「は」行の名前も候補に含まれ、その旨が画面に表示されます。",
          en: "For example, if the Moon was in the first pada of Krittika at birth, the syllable is shown as \"अ (A)\", and names starting with あ — such as 明 (Akira), 葵 (Aoi) or 彩 (Aya) — become candidates. For a syllable with few natural Japanese equivalents, such as Rohini pada 2 (Vaa), names from the は row are offered alongside the ば row, and the page tells you so.",
          hi: "उदाहरण के लिए, यदि जन्म के समय चंद्रमा कृत्तिका के पहले पाद में था, तो अक्षर \"अ (A)\" दिखेगा, और あ से शुरू होने वाले नाम — जैसे 明 (Akira), 葵 (Aoi) या 彩 (Aya) — विकल्प बनेंगे। रोहिणी के दूसरे पाद (Vaa) जैसे अक्षर के लिए, जिसके स्वाभाविक जापानी समकक्ष कम हैं, ば पंक्ति के साथ は पंक्ति के नाम भी दिए जाते हैं और पृष्ठ यह बताता है।",
          ko: "예를 들어 태어날 때 달이 크리티카의 제1파다에 있었다면 음절은 'अ (A)'로 표시되고, あ로 시작하는 이름 — 明(아키라), 葵(아오이), 彩(아야) 등 — 이 후보가 됩니다. 반면 로히니 제2파다(Vaa)처럼 자연스러운 일본어 대응음이 적은 음절에서는 ば행과 함께 は행 이름도 후보에 포함되며, 그 사실이 화면에 표시됩니다.",
        },
      ],
      bullets: [
        {
          ja: "ナクシャトラ（月宿）：生まれた瞬間に月があった、黄道27区分のうちの一つ。日本の宿曜でいう本命宿に相当します。",
          en: "Nakshatra (lunar mansion): the one of 27 ecliptic divisions the Moon occupied at birth — the equivalent of the honmyōshuku in Japanese Sukuyō.",
          hi: "नक्षत्र: क्रांतिवृत्त के 27 भागों में से वह भाग जिसमें जन्म के समय चंद्रमा था — जापानी सुक्युō के होन्म्योशुku के समान।",
          ko: "낙샤트라(월수): 태어난 순간 달이 있던 황도 27구획 중 하나. 일본 수쿠요의 본명수에 해당합니다.",
        },
        {
          ja: "パダ：1つのナクシャトラを4等分した区分（1〜4）。108あるパダごとに頭音が決まっています。",
          en: "Pada: one of the four equal quarters (1–4) of a nakshatra; each of the 108 padas has its own syllable.",
          hi: "पाद: नक्षत्र के चार बराबर भागों (1–4) में से एक; 108 पादों में से हर एक का अपना अक्षर है।",
          ko: "파다: 하나의 낙샤트라를 4등분한 구획(1~4). 108개의 파다마다 시작 음절이 정해져 있습니다.",
        },
        {
          ja: "支配星・神格：そのナクシャトラを司るとされる惑星と、結び付けられた神。名前の意味を考えるときの連想のヒントになります。",
          en: "Ruling planet and deity: the planet said to govern the nakshatra and the deity associated with it — useful as a source of associations when thinking about a name's meaning.",
          hi: "स्वामी ग्रह और देवता: वह ग्रह जो नक्षत्र का स्वामी माना जाता है और उससे जुड़े देवता — नाम के अर्थ पर विचार करते समय प्रेरणा का स्रोत।",
          ko: "지배 행성·신격: 그 낙샤트라를 다스린다고 여겨지는 행성과 연관된 신. 이름의 의미를 생각할 때 연상의 힌트가 됩니다.",
        },
        {
          ja: "月星座：月が入っているサイン（恒星黄道）。西洋式の月星座と一つずれることがあります。",
          en: "Moon sign: the sidereal sign the Moon is in — it may be one sign off from a Western Moon sign.",
          hi: "चंद्र राशि: वह निरयन राशि जिसमें चंद्रमा है — यह पश्चिमी चंद्र राशि से एक राशि अलग हो सकती है।",
          ko: "달별자리: 달이 들어 있는 별자리(항성 황도). 서양식 달별자리와 한 칸 어긋날 수 있습니다.",
        },
        {
          ja: "頭音（アクシャラ）：デーヴァナーガリー文字とローマ字で示される、伝統的に名前の最初に置く音。",
          en: "Starting syllable (akshara): the traditional opening sound of the name, shown in Devanagari and roman letters.",
          hi: "प्रारंभिक अक्षर: नाम की पारंपरिक प्रारंभिक ध्वनि, देवनागरी और रोमन अक्षरों में।",
          ko: "시작 음절(악샤라): 전통적으로 이름 맨 앞에 두는 소리로, 데바나가리 문자와 로마자로 표시됩니다.",
        },
        {
          ja: "名前の候補：漢字・読み・ローマ字・意味の4点で表示。性別での絞り込みと、スコア順／五十音順の並べ替えができます。",
          en: "Candidate names: each shown with kanji, reading, romaji and meaning; you can filter by gender and sort by score or in kana order.",
          hi: "नामों के विकल्प: हर नाम कांजी, उच्चारण, रोमाजी और अर्थ के साथ; लिंग से फ़िल्टर और स्कोर या वर्णक्रम से क्रमबद्ध कर सकते हैं।",
          ko: "이름 후보: 한자·읽기·로마자·의미로 표시되며, 성별로 거르고 점수순·가나순으로 정렬할 수 있습니다.",
        },
        {
          ja: "数秘術スコア（1〜10）：名前のローマ字から求めた数と、生年月日から求めたムーランク（誕生日の数）・バギャンク（生年月日全体の数）との相性。8以上は強調表示されます。",
          en: "Numerology score (1–10): how the number derived from the name's romaji harmonizes with the Mulank (from the birth day) and Bhagyank (from the full birth date); scores of 8 or more are highlighted.",
          hi: "अंक ज्योतिष स्कोर (1–10): नाम की रोमाजी से निकला अंक मूलांक (जन्म दिन से) और भाग्यांक (पूरी जन्म तिथि से) के साथ कितना मेल खाता है; 8 या अधिक को हाइलाइट किया जाता है।",
          ko: "수비학 점수(1~10): 이름의 로마자에서 구한 수와 생년월일에서 구한 물랑크(태어난 날의 수)·바갼크(생년월일 전체의 수)의 조화. 8점 이상은 강조 표시됩니다.",
        },
        {
          ja: "候補リスト・音節早見表：気に入った名前を保存して家族と共有できるリストと、27ナクシャトラ×4パダの頭音一覧表です。",
          en: "Shortlist and syllable reference: a list for saving and sharing favourite names with family, and a table of the syllables for all 27 nakshatras × 4 padas.",
          hi: "शॉर्टलिस्ट और अक्षर संदर्भ: पसंदीदा नाम सहेजकर परिवार से साझा करने की सूची, और सभी 27 नक्षत्र × 4 पादों के अक्षरों की तालिका।",
          ko: "후보 목록·음절 조견표: 마음에 드는 이름을 저장해 가족과 공유하는 목록과, 27 낙샤트라 × 4 파다의 음절 일람표입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：インドの命名儀礼と西洋占星術との違い",
        en: "Background: the Indian naming rite and how it differs from Western astrology",
        hi: "पृष्ठभूमि: भारतीय नामकरण संस्कार और पश्चिमी ज्योतिष से अंतर",
        ko: "배경 지식: 인도의 작명 의례와 서양 점성술과의 차이",
      },
      body: [
        {
          ja: "インドでは、子どもに名前を授ける儀式を「ナーマカラナ（ナームカラン）」と呼び、人生の節目に行う通過儀礼の一つに数えられています。家庭や地域によって異なりますが、生後12日目前後に行うことが多いとされ、その際に生まれナクシャトラのパダから頭音を確かめるのが伝統的な方法です。",
          en: "In India, the rite of giving a child a name is called Namakarana (Naam Karan) and counts among the traditional life-cycle ceremonies. Customs vary by family and region, but it is often held around the twelfth day after birth, and checking the starting syllable from the birth nakshatra's pada is the traditional method.",
          hi: "भारत में बच्चे को नाम देने के संस्कार को नामकरण कहा जाता है और यह पारंपरिक संस्कारों में गिना जाता है। परिवार और क्षेत्र के अनुसार रीति अलग होती है, पर यह अक्सर जन्म के लगभग बारहवें दिन किया जाता है, और जन्म नक्षत्र के पाद से प्रारंभिक अक्षर देखना पारंपरिक तरीका है।",
          ko: "인도에서는 아이에게 이름을 지어 주는 의식을 '나마카라나(남카란)'라 부르며, 인생의 고비마다 행하는 통과의례 중 하나로 꼽습니다. 가정과 지역에 따라 다르지만 생후 12일 무렵에 행하는 경우가 많으며, 이때 출생 낙샤트라의 파다로 시작 음절을 확인하는 것이 전통적인 방법입니다.",
        },
        {
          ja: "西洋占星術で「何座生まれ」というときは、ふつう太陽の位置（太陽星座）を指します。これに対してインド占星術では月をとりわけ重視し、心や日々の感じ方を表す月がどのナクシャトラにあるかを、命名だけでなく相性や時期の判断にも使います。また、星座の基準が恒星黄道であるため、同じ誕生日でも西洋式とは星座が異なる場合があります。",
          en: "When Western astrology says someone is \"a Leo\", it usually means the Sun's position. Jyotish gives special weight to the Moon instead: which nakshatra the Moon — linked to the mind and how we feel day to day — occupies is used not only for naming but also for compatibility and timing. And because its zodiac is sidereal, the same birthday can fall in a different sign than in Western astrology.",
          hi: "पश्चिमी ज्योतिष में जब कहा जाता है कि कोई \"सिंह राशि\" का है, तो आमतौर पर सूर्य की स्थिति का अर्थ होता है। ज्योतिष इसके बजाय चंद्रमा को विशेष महत्व देता है: मन और दैनिक भावनाओं से जुड़ा चंद्रमा किस नक्षत्र में है, इसका उपयोग केवल नामकरण ही नहीं, बल्कि अनुकूलता और समय के निर्णय में भी होता है। और निरयन राशिचक्र के कारण एक ही जन्मदिन की राशि पश्चिमी पद्धति से अलग हो सकती है।",
          ko: "서양 점성술에서 '무슨 자리'라고 할 때는 보통 태양의 위치(태양 별자리)를 뜻합니다. 반면 인도 점성술은 달을 특히 중시하여, 마음과 일상의 감정을 나타내는 달이 어느 낙샤트라에 있는지를 작명뿐 아니라 궁합과 시기 판단에도 씁니다. 또한 항성 황도를 기준으로 하므로 같은 생일이라도 서양식과 별자리가 다를 수 있습니다.",
        },
        {
          ja: "頭音の表は、もともとサンスクリット語の音（デーヴァナーガリー文字）を前提に作られています。ヒンディー語などインドの言語では表の音をそのまま名前に使えますが、日本語の名前ではそうはいきません。このツールが「最も近い日本語の行」に置き換えているのはそのためで、伝統の規則を日本の名前に厳密に当てはめたものではなく、あくまで着想の手がかりとして橋渡ししたものだとお考えください。",
          en: "The syllable table was built around Sanskrit sounds written in Devanagari. In Hindi and other Indian languages those sounds can be used in a name as they are, but a Japanese name can't do that. That's why this tool maps each one to the nearest Japanese kana row — treat it as a bridge that offers inspiration, not a strict application of the classical rule to Japanese names.",
          hi: "अक्षर तालिका मूल रूप से देवनागरी में लिखी संस्कृत ध्वनियों पर आधारित है। हिंदी जैसी भारतीय भाषाओं में ये ध्वनियाँ सीधे नाम में प्रयोग हो सकती हैं, पर जापानी नाम में ऐसा संभव नहीं। इसीलिए यह उपकरण हर ध्वनि को निकटतम जापानी काना पंक्ति से जोड़ता है — इसे शास्त्रीय नियम का जापानी नामों पर कठोर प्रयोग नहीं, बल्कि प्रेरणा देने वाला एक सेतु मानें।",
          ko: "음절표는 본래 데바나가리 문자로 쓰인 산스크리트어 소리를 전제로 만들어졌습니다. 힌디어 등 인도 언어에서는 표의 소리를 그대로 이름에 쓸 수 있지만, 일본 이름에서는 그럴 수 없습니다. 이 도구가 '가장 가까운 일본어 행'으로 바꾸는 이유가 그것이며, 전통 규칙을 일본 이름에 엄밀히 적용한 것이 아니라 영감을 주는 다리로 이어 놓은 것이라고 생각해 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "日本の名づけと組み合わせるためのチェックリスト",
        en: "A checklist for combining it with Japanese naming customs",
        hi: "जापानी नामकरण परंपराओं के साथ जोड़ने की जाँच-सूची",
        ko: "일본식 작명과 함께 쓰기 위한 체크리스트",
      },
      body: [
        {
          ja: "日本の名づけでは、響き、漢字の意味、姓との釣り合い、画数（姓名判断）など、多くのことを考えます。頭音はそれらに取って代わるものではなく、候補を絞り込むときの「もう一つの視点」として加えるのが無理のない使い方です。次の順で確認すると、伝統と実用を両立しやすくなります。",
          en: "Japanese naming already weighs many things — sound, kanji meaning, balance with the family name, stroke counts (seimei handan). The starting syllable doesn't replace any of these; it works best as one more perspective when narrowing down candidates. Checking in the order below makes it easier to honour both tradition and practicality.",
          hi: "जापानी नामकरण में पहले से ही कई बातें देखी जाती हैं — ध्वनि, कांजी का अर्थ, उपनाम के साथ संतुलन, अक्षरों की रेखा-संख्या (सेइमेई हांदान)। प्रारंभिक अक्षर इनमें से किसी का स्थान नहीं लेता; विकल्प छाँटते समय इसे एक और दृष्टिकोण के रूप में जोड़ना सबसे स्वाभाविक है। नीचे दिए क्रम में जाँचने से परंपरा और व्यावहारिकता दोनों साथ चल सकती हैं।",
          ko: "일본식 작명에서는 이미 소리, 한자의 의미, 성과의 균형, 획수(성명 판단) 등 많은 것을 고려합니다. 시작 음절은 그것들을 대신하는 것이 아니라, 후보를 좁힐 때 '또 하나의 관점'으로 더하는 것이 무리 없는 사용법입니다. 다음 순서로 확인하면 전통과 실용을 함께 살리기 쉽습니다.",
        },
      ],
      bullets: [
        {
          ja: "頭音は「必須条件」ではなく「着想のきっかけ」と家族で共有しておく",
          en: "Agree as a family that the syllable is a source of inspiration, not a hard requirement",
          hi: "परिवार में यह तय कर लें कि अक्षर प्रेरणा का स्रोत है, अनिवार्य शर्त नहीं",
          ko: "시작 음절은 '필수 조건'이 아니라 '영감의 계기'라고 가족끼리 공유해 두기",
        },
        {
          ja: "候補の名前を姓と続けて声に出し、呼びやすさと響きを確かめる",
          en: "Say each candidate aloud together with the family name to check how it sounds and flows",
          hi: "हर विकल्प को उपनाम के साथ ज़ोर से बोलकर उसकी ध्वनि और प्रवाह जाँचें",
          ko: "후보 이름을 성과 이어서 소리 내어 읽어 부르기 쉬운지, 울림은 어떤지 확인하기",
        },
        {
          ja: "表示された漢字にこだわらず、同じ読みで意味の合う別の漢字も検討する",
          en: "Don't feel bound to the kanji shown — consider other kanji with the same reading and a meaning you like",
          hi: "दिखाए गए कांजी से बँधे न रहें — उसी उच्चारण वाले, पसंदीदा अर्थ के दूसरे कांजी पर भी विचार करें",
          ko: "표시된 한자에 얽매이지 말고, 같은 읽기로 뜻이 맞는 다른 한자도 검토하기",
        },
        {
          ja: "名前に使える漢字は常用漢字と人名用漢字に限られるため、使う字が含まれているか確認する",
          en: "Only jōyō and jinmeiyō kanji can be used in a Japanese given name, so check the characters you choose are on those lists",
          hi: "जापानी नाम में केवल जोयो और जिनमेइयो कांजी ही प्रयोग हो सकते हैं, इसलिए जाँचें कि चुने गए अक्षर उन सूचियों में हैं",
          ko: "일본 이름에 쓸 수 있는 한자는 상용한자와 인명용 한자로 한정되므로, 쓰려는 글자가 포함되어 있는지 확인하기",
        },
        {
          ja: "2025年からは戸籍に名前の読み仮名も記載されるため、一般に認められた読み方かどうかも意識する",
          en: "Since 2025 the reading of a name is also recorded in the family register, so keep in mind whether the reading is a generally accepted one",
          hi: "2025 से पारिवारिक रजिस्टर में नाम का उच्चारण भी दर्ज होता है, इसलिए ध्यान रखें कि उच्चारण आम तौर पर मान्य हो",
          ko: "2025년부터 호적에 이름의 읽는 법도 기재되므로, 일반적으로 인정되는 읽기인지도 의식하기",
        },
        {
          ja: "画数や数秘術など複数の占いを使う場合は、優先順位を先に決めて迷いすぎないようにする",
          en: "If you use several systems such as stroke counts and numerology, decide their order of priority first so you don't get stuck",
          hi: "यदि रेखा-संख्या और अंक ज्योतिष जैसी कई पद्धतियाँ अपना रहे हैं, तो उलझन से बचने के लिए पहले उनकी प्राथमिकता तय करें",
          ko: "획수나 수비학 등 여러 점술을 쓴다면 우선순위를 먼저 정해 너무 고민하지 않도록 하기",
        },
        {
          ja: "出生届の提出期限（生まれた日を含めて14日以内）を念頭に、早めに候補を共有する",
          en: "Keep the birth registration deadline in mind (within 14 days, counting the day of birth) and share candidates early",
          hi: "जन्म पंजीकरण की समय-सीमा (जन्म के दिन सहित 14 दिनों के भीतर) ध्यान में रखें और विकल्प जल्दी साझा करें",
          ko: "출생신고 기한(태어난 날을 포함해 14일 이내)을 염두에 두고 후보를 일찍 공유하기",
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
          ja: "頭音の伝統について、よく聞かれる思い込みを整理しておきます。",
          en: "A few assumptions about the syllable tradition that come up often.",
          hi: "अक्षर परंपरा के बारे में कुछ धारणाएँ जो अक्सर सामने आती हैं।",
          ko: "시작 음절 전통에 대해 자주 듣는 오해를 정리해 둡니다.",
        },
      ],
      bullets: [
        {
          ja: "「頭音に合わない名前は不運になる」——そのような決まりはありません。インドでも、呼び名とは別に頭音に合わせた名前を儀礼用に持つなど、柔軟に扱う家庭があります。",
          en: "\"A name that doesn't match the syllable brings bad luck\" — there is no such rule. Even in India some families handle it flexibly, for example by keeping a syllable-matched name for ceremonies alongside the name the child is called by.",
          hi: "\"अक्षर से मेल न खाने वाला नाम दुर्भाग्य लाता है\" — ऐसा कोई नियम नहीं है। भारत में भी कुछ परिवार इसे लचीले ढंग से अपनाते हैं, जैसे पुकारने के नाम के साथ अनुष्ठानों के लिए अक्षर से मेल खाने वाला नाम रखना।",
          ko: "'음절에 맞지 않는 이름은 불운을 부른다' — 그런 규칙은 없습니다. 인도에서도 부르는 이름과 별도로 의례용으로 음절에 맞춘 이름을 두는 등 유연하게 다루는 가정이 있습니다.",
        },
        {
          ja: "「出産予定日で頭音を決められる」——パダは月の位置で決まり、約6時間ごとに変わるため、実際に生まれた日時がわかってから確認するのが確実です。",
          en: "\"You can fix the syllable from the due date\" — the pada depends on the Moon and changes roughly every six hours, so it is safest to check once the actual date and time of birth are known.",
          hi: "\"नियत प्रसव तिथि से अक्षर तय किया जा सकता है\" — पाद चंद्रमा पर निर्भर है और लगभग हर छह घंटे में बदलता है, इसलिए वास्तविक जन्म तिथि और समय पता चलने पर ही जाँचना सबसे सुरक्षित है।",
          ko: "'출산 예정일로 음절을 정할 수 있다' — 파다는 달의 위치로 정해지고 약 6시간마다 바뀌므로, 실제 출생 일시를 안 뒤에 확인하는 것이 확실합니다.",
        },
        {
          ja: "「数秘術スコアが低い名前は避けるべき」——スコアは同じ頭音の候補どうしを比べる参考値で、名前の良し悪しを決めるものではありません。",
          en: "\"Names with a low numerology score should be avoided\" — the score is a reference for comparing candidates with the same syllable, not a verdict on whether a name is good or bad.",
          hi: "\"कम अंक ज्योतिष स्कोर वाले नामों से बचना चाहिए\" — स्कोर एक ही अक्षर वाले विकल्पों की तुलना का संदर्भ है, नाम अच्छा या बुरा होने का निर्णय नहीं।",
          ko: "'수비학 점수가 낮은 이름은 피해야 한다' — 점수는 같은 음절의 후보끼리 비교하는 참고값일 뿐, 이름의 좋고 나쁨을 정하는 것이 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you use the results",
        hi: "परिणामों के उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "このツールは、インドの命名伝統を日本のご家族が楽しみながら知り、名づけのヒントにしていただくためのものです。占星術や数秘術の結果は、名前の価値や子どもの将来を決めるものではありません。また、医療・法律・金銭に関する助言に代わるものでもありません。",
          en: "This tool is meant to help Japanese families explore the Indian naming tradition with enjoyment and use it as a source of ideas. Astrological and numerological results don't determine the worth of a name or a child's future, and they are not a substitute for medical, legal or financial advice.",
          hi: "यह उपकरण जापानी परिवारों को भारतीय नामकरण परंपरा को आनंद के साथ जानने और नाम के विचारों के स्रोत के रूप में उपयोग करने के लिए है। ज्योतिष और अंक ज्योतिष के परिणाम किसी नाम का मूल्य या बच्चे का भविष्य तय नहीं करते, और ये चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं हैं।",
          ko: "이 도구는 일본의 가정이 인도의 작명 전통을 즐겁게 알아보고 이름 짓기의 힌트로 삼기 위한 것입니다. 점성술과 수비학의 결과는 이름의 가치나 아이의 미래를 결정하지 않으며, 의료·법률·금융에 관한 조언을 대신하지도 않습니다.",
        },
        {
          ja: "名前は、ご家族が赤ちゃんへの思いを込めて選ぶものです。最終的には、呼ぶたびに嬉しくなる名前かどうかを何より大切にしてください。出生届の受理や使える文字については、お住まいの市区町村の窓口でご確認ください。",
          en: "A name is something a family chooses with their hopes for the child. In the end, what matters most is whether it's a name you'll be glad to call every day. For questions about registering the birth or which characters are accepted, please check with your local municipal office.",
          hi: "नाम वह है जिसे परिवार बच्चे के लिए अपनी शुभकामनाओं के साथ चुनता है। अंततः सबसे महत्वपूर्ण यह है कि वह ऐसा नाम हो जिसे हर दिन पुकारते हुए आपको खुशी मिले। जन्म पंजीकरण या स्वीकार्य अक्षरों के बारे में अपने स्थानीय नगरपालिका कार्यालय से पुष्टि करें।",
          ko: "이름은 가족이 아기를 향한 마음을 담아 고르는 것입니다. 결국 부를 때마다 기뻐지는 이름인지를 무엇보다 소중히 여겨 주세요. 출생신고 수리나 사용할 수 있는 글자에 대해서는 거주지 시구정촌 창구에서 확인해 주세요.",
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
          ja: "生まれナクシャトラや数秘術について、さらに詳しく知りたい方は次のページもご覧ください。",
          en: "To learn more about the birth nakshatra and numerology, see the pages below.",
          hi: "जन्म नक्षत्र और अंक ज्योतिष के बारे में और जानने के लिए नीचे दिए पृष्ठ देखें।",
          ko: "출생 낙샤트라와 수비학에 대해 더 알고 싶다면 다음 페이지도 참고하세요.",
        },
      ],
      links: [
        {
          href: "/tools/nakshatra-finder",
          label: { ja: "ナクシャトラ（月宿）を調べる", en: "Nakshatra finder", hi: "नक्षत्र खोजक", ko: "낙샤트라 찾기" },
        },
        {
          href: "/nakshatras",
          label: { ja: "二十七ナクシャトラ解説", en: "The 27 nakshatras", hi: "27 नक्षत्र", ko: "27 낙샤트라 해설" },
        },
        {
          href: "/tools/numerology",
          label: { ja: "インド数秘術（ムーランク・バギャンク）", en: "Numerology (Mulank and Bhagyank)", hi: "अंक ज्योतिष (मूलांक और भाग्यांक)", ko: "수비학(물랑크·바갼크)" },
        },
        {
          href: "/tools/moon-sign",
          label: { ja: "月星座（ラーシ）を調べる", en: "Moon sign calculator", hi: "चंद्र राशि कैलकुलेटर", ko: "달별자리 계산" },
        },
        {
          href: "/tools/birth-time-check",
          label: { ja: "出生時刻のずれをチェック", en: "Birth time check", hi: "जन्म समय जाँच", ko: "출생 시각 점검" },
        },
      ],
    },
  ],
};
