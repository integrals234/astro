import type { PageGuide } from "./types";

/**
 * Explanatory guide + FAQ under the /chart workspace.
 *
 * Written Japanese-first. Deliberately distinct from /tools/birth-chart
 * (a focused single-section landing that explains what a kundli is): this
 * page is the full workspace, so the guide is about using its sections
 * together — entry, navigating the section rail, the shared display
 * controls, saving and PDF — plus a reading order across sections.
 * Only features ChartWorkspace actually renders are described: D1, D9,
 * Chalit, Chandra, Gochar, planet details, aspects, Vimshottari dasha,
 * yogas and ashtakavarga.
 */
export const chartPageGuide: PageGuide = {
  meta: {
    title: {
      ja: "ホロスコープ作成・出生図の無料計算｜インド占星術",
      en: "Free Vedic Birth Chart Calculator (Kundli)",
      hi: "मुफ़्त जन्म कुंडली बनाएं — वैदिक ज्योतिष",
      ko: "무료 출생 차트(호로스코프) 작성 — 인도 점성술",
    },
    description: {
      ja: "生年月日・出生時刻・出生地からインド占星術の出生図を無料で作成。ラグナ、D9、惑星の詳細、ダシャー、ヨーガ、アシュタカヴァルガを一画面で確認でき、北インド式・南インド式の切替やPDF保存にも対応。",
      en: "Create your Vedic birth chart free from date, time and place of birth. See Lagna, D9, planet details, dasha, yogas and ashtakavarga on one screen, switch North/South Indian style and save as PDF.",
      hi: "जन्म तिथि, समय और स्थान से मुफ़्त वैदिक जन्म कुंडली बनाएं। लग्न, D9, ग्रह विवरण, दशा, योग और अष्टकवर्ग एक ही स्क्रीन पर देखें, उत्तर/दक्षिण भारतीय शैली बदलें और PDF सहेजें।",
      ko: "생년월일, 출생 시각, 출생지로 인도 점성술 출생 차트를 무료로 작성하세요. 라그나, D9, 행성 세부, 다샤, 요가, 아슈타카바르가를 한 화면에서 보고 북인도식·남인도식 전환과 PDF 저장도 가능합니다.",
    },
  },
  sections: [
    {
      heading: {
        ja: "チャート作成ワークスペースでできること",
        en: "What the chart workspace does",
        hi: "चार्ट वर्कस्पेस क्या करता है",
        ko: "차트 작업 공간에서 할 수 있는 것",
      },
      body: [
        {
          ja: "このページは、インド占星術（ジョーティシュ）の出生図を作り、その中身を一か所でじっくり読むための作業スペースです。生年月日・出生時刻・出生地を一度入力するだけで、出生図（ラグナ・チャート）から惑星期（ダシャー）、惑星の組み合わせ（ヨーガ）まで、十のセクションが縦に並んで表示されます。",
          en: "This page is a workspace for creating a Jyotish (Vedic astrology) birth chart and reading it in depth in one place. Enter your date, time and place of birth once, and ten sections appear in a single column — from the birth chart itself (the Lagna chart) through planetary periods (dasha) to planetary combinations (yogas).",
          hi: "यह पृष्ठ ज्योतिष (वैदिक ज्योतिष) की जन्म कुंडली बनाने और उसे एक ही जगह गहराई से पढ़ने का वर्कस्पेस है। जन्म तिथि, समय और स्थान एक बार दर्ज करें, और दस खंड एक कॉलम में दिखाई देते हैं — लग्न कुंडली से लेकर दशा और योग तक।",
          ko: "이 페이지는 인도 점성술(조티시) 출생 차트를 만들고 그 내용을 한곳에서 차분히 읽기 위한 작업 공간입니다. 생년월일, 출생 시각, 출생지를 한 번만 입력하면 출생 차트(라그나 차트)부터 행성 주기(다샤), 행성 조합(요가)까지 열 개의 섹션이 세로로 나란히 표시됩니다.",
        },
        {
          ja: "一つの項目だけを手早く知りたい場合は個別のツールが便利ですが、ここでは図・惑星の詳細・時期の流れを行き来しながら、全体を組み合わせて読むことができます。初めての方は「どの順番で読むか」の章から、学習中の方は用語の章から読み進めてみてください。",
          en: "The individual tools are handy when you want one answer quickly; here, you can move back and forth between the charts, the planet details and the timing of periods, and read them together as a whole. If you are new, start with the section on reading order; if you are studying, the glossary is a good place to begin.",
          hi: "किसी एक बात का उत्तर जल्दी चाहिए तो अलग-अलग टूल उपयोगी हैं; यहाँ आप चार्ट, ग्रह विवरण और दशाओं के समय के बीच आ-जा कर सबको मिलाकर पढ़ सकते हैं। नए हैं तो \"किस क्रम में पढ़ें\" खंड से, और सीख रहे हैं तो शब्दावली से शुरू करें।",
          ko: "한 가지 항목만 빠르게 알고 싶다면 개별 도구가 편리하지만, 여기서는 차트, 행성 세부, 시기의 흐름을 오가며 전체를 함께 읽을 수 있습니다. 처음이라면 '어떤 순서로 읽을까' 장부터, 공부 중이라면 용어 장부터 읽어 보세요.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方：入力からチャート作成まで",
        en: "How to use it: from entry to chart",
        hi: "उपयोग कैसे करें: प्रविष्टि से कुंडली तक",
        ko: "사용 방법: 입력부터 차트 작성까지",
      },
      body: [
        {
          ja: "入力は四つだけです。順番に進めれば一分ほどで出生図ができあがります。",
          en: "There are only four inputs. Follow them in order and the chart is ready in about a minute.",
          hi: "केवल चार प्रविष्टियाँ हैं। क्रम से भरें तो लगभग एक मिनट में कुंडली तैयार हो जाती है।",
          ko: "입력 항목은 네 가지뿐입니다. 순서대로 진행하면 1분 정도면 출생 차트가 완성됩니다.",
        },
      ],
      bullets: [
        {
          ja: "1. 出生地：欄をタップして都市名を検索し、候補から選びます。緯度・経度とタイムゾーンはここから自動で決まるため、必ず「生まれた場所」を選んでください（現在の住所ではありません）。",
          en: "1. Place of birth: tap the field, search for the city and pick it from the list. Latitude, longitude and time zone are all derived from it, so choose where you were born, not where you live now.",
          hi: "1. जन्म स्थान: फ़ील्ड पर टैप करके शहर खोजें और सूची से चुनें। अक्षांश, देशांतर और समय क्षेत्र इसी से तय होते हैं, इसलिए जन्म का स्थान चुनें, वर्तमान पता नहीं।",
          ko: "1. 출생지: 칸을 눌러 도시 이름을 검색하고 후보에서 고릅니다. 위도, 경도, 시간대가 여기서 자동으로 정해지므로 현재 주소가 아니라 '태어난 곳'을 선택하세요.",
        },
        {
          ja: "2. お名前：このページでは必須です。複数の人のチャートを作るときに見分ける目印になります。ニックネームでも構いません。",
          en: "2. Name: required on this page. It is how you tell several people's charts apart later; a nickname is fine.",
          hi: "2. नाम: इस पृष्ठ पर आवश्यक है। बाद में कई लोगों की कुंडलियाँ पहचानने में यही काम आता है; उपनाम भी चलेगा।",
          ko: "2. 이름: 이 페이지에서는 필수입니다. 여러 사람의 차트를 만들 때 구분하는 표시가 됩니다. 닉네임도 괜찮습니다.",
        },
        {
          ja: "3. 生年月日と出生時刻：出生時刻は母子手帳や出生証明書など記録に基づく時刻が理想です。現地時刻のまま入力してください（日本時間などへの換算は不要です）。",
          en: "3. Date and time of birth: ideally a recorded time, such as from a birth certificate. Enter it as local time at the birthplace — no need to convert it to another time zone.",
          hi: "3. जन्म तिथि और समय: आदर्श रूप से जन्म प्रमाणपत्र जैसा दर्ज समय। इसे जन्म स्थान के स्थानीय समय में ही दर्ज करें — किसी अन्य समय क्षेत्र में बदलने की ज़रूरत नहीं।",
          ko: "3. 생년월일과 출생 시각: 출생 증명서 등 기록에 근거한 시각이 가장 좋습니다. 출생지의 현지 시각 그대로 입력하세요(다른 시간대로 환산할 필요는 없습니다).",
        },
        {
          ja: "4. トランジット基準日：最初は今日の日付が入っています。過去や未来の日付に変えると、その日の惑星配置がトランジットチャートに反映されます。最後に「チャートを作成」を押します。",
          en: "4. Transit date: today's date by default. Change it to a past or future date and the transit chart shows the planets for that day. Then press \"Create chart\".",
          hi: "4. गोचर तिथि: डिफ़ॉल्ट रूप से आज की तारीख। इसे अतीत या भविष्य की तारीख में बदलें तो गोचर कुंडली उस दिन के ग्रह दिखाती है। फिर \"कुंडली बनाएं\" दबाएँ।",
          ko: "4. 트랜짓 기준일: 처음에는 오늘 날짜가 들어 있습니다. 과거나 미래 날짜로 바꾸면 그날의 행성 배치가 트랜짓 차트에 반영됩니다. 마지막으로 '차트 작성'을 누릅니다.",
        },
        {
          ja: "よくある注意点：出生時刻が不明・おおよその場合、ラグナ（上昇宮）は約2時間で一つ進むため、星座の境目付近では図全体が変わることがあります。惑星の星座や月のナクシャトラは比較的変わりにくいので、そちらを中心に読むと安心です。",
          en: "A common pitfall: if your birth time is unknown or approximate, remember the Lagna moves roughly one sign every two hours, so near a sign boundary the whole chart can change. Planet signs and the Moon's nakshatra change more slowly, so lean on those.",
          hi: "एक आम गलती: जन्म समय अज्ञात या अनुमानित हो तो याद रखें कि लग्न लगभग हर दो घंटे में एक राशि आगे बढ़ता है, इसलिए राशि-सीमा के पास पूरी कुंडली बदल सकती है। ग्रहों की राशियाँ और चंद्र नक्षत्र धीरे बदलते हैं, उन पर अधिक भरोसा करें।",
          ko: "흔한 주의점: 출생 시각을 모르거나 대략적이라면, 라그나(상승궁)는 약 2시간마다 한 별자리씩 움직이므로 별자리 경계 부근에서는 차트 전체가 달라질 수 있습니다. 행성의 별자리나 달의 낙샤트라는 비교적 잘 바뀌지 않으니 그쪽을 중심으로 읽으면 안심입니다.",
        },
        {
          ja: "西洋占星術の星座と一つずれて見えることがありますが、これは計算ミスではありません。当サイトはサイデリアル（恒星）黄道とラヒリ・アヤナムシャを用いており、春分点基準のトロピカル黄道とは現在約24度の差があるためです。",
          en: "Your signs may look one off from Western astrology. That is not an error: this site uses the sidereal zodiac with the Lahiri ayanamsha, which currently differs from the equinox-based tropical zodiac by about 24 degrees.",
          hi: "आपकी राशियाँ पश्चिमी ज्योतिष से एक आगे-पीछे दिख सकती हैं। यह त्रुटि नहीं है: यह साइट लाहिड़ी अयनांश के साथ निरयण राशिचक्र का उपयोग करती है, जो विषुव-आधारित सायन राशिचक्र से इस समय लगभग 24 डिग्री भिन्न है।",
          ko: "서양 점성술의 별자리와 하나씩 어긋나 보일 수 있지만 계산 오류가 아닙니다. 이 사이트는 라히리 아야남샤를 적용한 항성(사이더리얼) 황도를 사용하며, 춘분점 기준의 회귀 황도와는 현재 약 24도 차이가 나기 때문입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "画面の構成とセクションの移動",
        en: "How the screen is laid out and how to move between sections",
        hi: "स्क्रीन की बनावट और खंडों के बीच आना-जाना",
        ko: "화면 구성과 섹션 이동",
      },
      body: [
        {
          ja: "チャートができると、入力フォームは上部に小さく折りたたまれ、結果に画面の幅が使われます。フォームの見出しをタップすればいつでも開き直して、時刻や場所を直して作り直せます。その下には、タイムゾーン、日の出・日の入り、アセンダント（ラグナ）の正確な度数が一列に表示されます。",
          en: "Once the chart is ready, the entry form folds into a compact bar at the top so the results get the full width. Tap that bar at any time to reopen the form, correct the time or place and recalculate. Below it, a strip shows the time zone, sunrise and sunset, and the exact degree of the ascendant (Lagna).",
          hi: "कुंडली बनते ही प्रविष्टि फ़ॉर्म ऊपर एक छोटी पट्टी में सिमट जाता है ताकि परिणामों को पूरी चौड़ाई मिले। समय या स्थान सुधारने के लिए उस पट्टी पर कभी भी टैप करके फ़ॉर्म फिर खोलें। उसके नीचे समय क्षेत्र, सूर्योदय-सूर्यास्त और लग्न का सटीक अंश दिखता है।",
          ko: "차트가 완성되면 입력 폼은 위쪽에 작게 접히고 결과가 화면 폭을 모두 사용합니다. 폼 제목을 누르면 언제든 다시 열어 시각이나 장소를 고친 뒤 다시 만들 수 있습니다. 그 아래에는 시간대, 일출·일몰, 어센던트(라그나)의 정확한 도수가 한 줄로 표시됩니다.",
        },
        {
          ja: "パソコンでは左側に、スマートフォンでは上部にセクションの一覧（目次）があり、項目を選ぶとその場所へ移動します。各セクションは画面に近づいたときに読み込まれるので、長いページでも動作が重くなりにくい作りです。",
          en: "A list of sections sits on the left on desktop and at the top on phones; pick an entry to jump straight to it. Each section loads as it approaches the screen, so the long page stays responsive.",
          hi: "खंडों की सूची डेस्कटॉप पर बाईं ओर और फ़ोन पर ऊपर रहती है; किसी प्रविष्टि को चुनें और सीधे वहाँ पहुँचें। हर खंड स्क्रीन के पास आने पर लोड होता है, इसलिए लंबा पृष्ठ भी सुचारु रहता है।",
          ko: "PC에서는 왼쪽, 스마트폰에서는 위쪽에 섹션 목록(목차)이 있어 항목을 고르면 그 위치로 이동합니다. 각 섹션은 화면에 가까워질 때 불러오므로 긴 페이지에서도 동작이 무거워지지 않습니다.",
        },
      ],
      bullets: [
        {
          ja: "表示の切り替え：「北インド式／南インド式」「テキスト／記号」の切り替えは、ページ内のすべての図にまとめて反映されます。一度選べば、ラグナからトランジットまで同じ形式で見比べられます。",
          en: "Display toggles: North/South Indian style and text/symbols apply to every chart figure on the page at once, so you can compare the Lagna chart through the transit chart in the same format.",
          hi: "प्रदर्शन टॉगल: उत्तर/दक्षिण भारतीय शैली और पाठ/चिह्न एक साथ पृष्ठ के हर चार्ट पर लागू होते हैं, ताकि लग्न से गोचर तक सब एक ही रूप में तुलना हो सके।",
          ko: "표시 전환: '북인도식/남인도식', '텍스트/기호' 전환은 페이지의 모든 차트 그림에 한꺼번에 반영됩니다. 한 번 고르면 라그나부터 트랜짓까지 같은 형식으로 비교할 수 있습니다.",
        },
        {
          ja: "トランジットの基準：トランジットチャートでは「ラグナ基準」と「チャンドラ（月）基準」を切り替えられます。月基準はインドで日々の運勢を見るときに伝統的によく使われる見方です。",
          en: "Transit base: the transit chart can be read from the Lagna or from the Moon (Chandra). The Moon-based view is the one traditionally used in India for day-to-day forecasts.",
          hi: "गोचर का आधार: गोचर कुंडली को लग्न से या चंद्र से पढ़ा जा सकता है। भारत में दैनिक फल के लिए परंपरागत रूप से चंद्र-आधारित दृष्टि अधिक प्रयोग होती है।",
          ko: "트랜짓 기준: 트랜짓 차트는 '라그나 기준'과 '찬드라(달) 기준'으로 바꿔 볼 수 있습니다. 달 기준은 인도에서 일상의 운세를 볼 때 전통적으로 자주 쓰이는 관점입니다.",
        },
        {
          ja: "保存とライブラリ：ログインしていると、作成したチャートが「最近」（直近5件）に残り、「保存」を押したものはライブラリに保管されます。家族や友人のチャートも名前で呼び出せます。",
          en: "Saving and library: when signed in, charts you create appear under Recent (the last five), and those you mark Save are kept in your library, so family and friends' charts can be reopened by name.",
          hi: "सहेजना और लाइब्रेरी: साइन इन होने पर बनाई गई कुंडलियाँ \"हाल की\" (अंतिम पाँच) में दिखती हैं, और \"सहेजें\" दबाई गई लाइब्रेरी में रहती हैं, ताकि परिवार-मित्रों की कुंडलियाँ नाम से फिर खोली जा सकें।",
          ko: "저장과 라이브러리: 로그인하면 만든 차트가 '최근'(최근 5개)에 남고, '저장'을 누른 차트는 라이브러리에 보관됩니다. 가족이나 친구의 차트도 이름으로 다시 열 수 있습니다.",
        },
        {
          ja: "PDFと新規作成：結果の見出しにある「PDFをダウンロード」で手元に残せます。「新しいチャート」を押すと、別の人のチャートを最初から作れます。",
          en: "PDF and new chart: \"Download PDF\" in the results header gives you a copy to keep, and \"New chart\" starts over for someone else.",
          hi: "PDF और नई कुंडली: परिणाम शीर्षक में \"PDF डाउनलोड करें\" से एक प्रति रख सकते हैं, और \"नई कुंडली\" से किसी और के लिए फिर से शुरू करें।",
          ko: "PDF와 새 차트: 결과 제목의 'PDF 다운로드'로 사본을 보관할 수 있고, '새 차트'를 누르면 다른 사람의 차트를 처음부터 만들 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：各セクションの用語",
        en: "Reading the results: terms in each section",
        hi: "परिणाम पढ़ना: हर खंड के शब्द",
        ko: "결과 읽는 법: 각 섹션의 용어",
      },
      body: [
        {
          ja: "ワークスペースに並ぶ十のセクションと、そこに出てくる主な用語を順に整理します。",
          en: "Here are the ten sections in the workspace, in order, with the main terms you will see in each.",
          hi: "यहाँ वर्कस्पेस के दस खंड क्रम से, और उनमें दिखने वाले मुख्य शब्द दिए गए हैं।",
          ko: "작업 공간에 나열된 열 개의 섹션과 그 안에 나오는 주요 용어를 순서대로 정리합니다.",
        },
        {
          ja: "例えば、ラグナが獅子座、月が牡牛座のローヒニー第3パダ、現在のダシャーが木星期だとします（説明のための架空の例です）。この場合、まずネイタルチャートで獅子座を第1室として配置を眺め、惑星の詳細で月が高揚していることを確かめます。次にダシャーで木星期がいつまで続くかを見て、木星がどの室にあり、どの室にアスペクトしているかを読み合わせると、「今の時期にどの分野が話題になりやすいか」の見通しが立てやすくなります。",
          en: "For example, suppose the Lagna is Leo, the Moon is in Taurus in Rohini pada 3, and the current dasha is Jupiter's (a made-up example for illustration). You would first view the natal chart with Leo as the first house, then confirm in the planet details that the Moon is exalted. Next, check in the dasha section how long the Jupiter period runs, and read it against which house Jupiter occupies and which houses it aspects — that gives a clearer sense of which areas of life tend to come up in this period.",
          hi: "उदाहरण के लिए, मान लें लग्न सिंह है, चंद्र वृषभ में रोहिणी के तीसरे पाद में है, और वर्तमान दशा गुरु की है (समझाने के लिए काल्पनिक उदाहरण)। पहले जन्म कुंडली में सिंह को पहला भाव मानकर स्थिति देखें, फिर ग्रह विवरण में पुष्टि करें कि चंद्र उच्च का है। फिर दशा खंड में देखें कि गुरु की दशा कब तक चलेगी, और गुरु किस भाव में है व किन भावों पर दृष्टि डालता है, यह साथ पढ़ें — इससे पता चलता है कि इस अवधि में जीवन के कौन से क्षेत्र प्रमुख हो सकते हैं।",
          ko: "예를 들어 라그나가 사자자리, 달이 황소자리의 로히니 제3파다, 현재 다샤가 목성기라고 해 봅시다(설명을 위한 가상의 예입니다). 먼저 네이탈 차트에서 사자자리를 제1하우스로 두고 배치를 살피고, 행성 세부에서 달이 고양 상태임을 확인합니다. 이어서 다샤에서 목성기가 언제까지인지 보고, 목성이 어느 하우스에 있으며 어느 하우스에 애스펙트하는지 함께 읽으면 '지금 시기에 어떤 분야가 화제가 되기 쉬운지' 짐작하기 쉬워집니다.",
        },
      ],
      bullets: [
        {
          ja: "ネイタルチャート（ラグナ／D1）：基本の出生図。ラグナ（上昇宮）を第1室とし、12の室に9つの惑星（太陽・月・火星・水星・木星・金星・土星・ラーフ・ケトゥ）を配置した図です。",
          en: "Natal chart (Lagna / D1): the core birth chart, with the Lagna (ascendant) as the first house and the nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu — placed in the twelve houses.",
          hi: "जन्म कुंडली (लग्न / D1): मूल कुंडली, जिसमें लग्न पहला भाव है और नौ ग्रह — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु — बारह भावों में रखे जाते हैं।",
          ko: "네이탈 차트(라그나/D1): 기본 출생 차트. 라그나(상승궁)를 제1하우스로 하고 12개 하우스에 아홉 행성(태양, 달, 화성, 수성, 목성, 금성, 토성, 라후, 케투)을 배치한 그림입니다.",
        },
        {
          ja: "D9チャート（ナヴァムシャ）：各星座を9分割（1区分は3度20分）して作る分割図。結婚・パートナーシップや、惑星の本当の強さを確かめるために伝統的に重視されます。",
          en: "D9 chart (Navamsha): a divisional chart made by splitting each sign into nine parts of 3°20′. Traditionally given weight for marriage and partnership, and for checking a planet's underlying strength.",
          hi: "D9 कुंडली (नवांश): हर राशि को 3°20′ के नौ भागों में बाँटकर बनी वर्ग कुंडली। विवाह-साझेदारी और ग्रह के वास्तविक बल की जाँच के लिए परंपरागत रूप से महत्वपूर्ण।",
          ko: "D9 차트(나밤샤): 각 별자리를 9등분(한 구간 3도 20분)해서 만든 분할 차트. 결혼·파트너십과 행성의 실제 힘을 확인할 때 전통적으로 중시됩니다.",
        },
        {
          ja: "チャリットチャート：ラグナの度数を基準に室の境界を引き直した図です。星座の境目近くにある惑星は、ネイタルチャートとは一つ隣の室に移ることがあります。",
          en: "Chalit chart: the houses redrawn from the exact degree of the Lagna. A planet close to a sign boundary may move into the neighbouring house compared with the natal chart.",
          hi: "चलित कुंडली: लग्न के सटीक अंश से भावों की सीमाएँ फिर से खींची गई कुंडली। राशि-सीमा के पास का ग्रह जन्म कुंडली की तुलना में पड़ोसी भाव में जा सकता है।",
          ko: "찰리트 차트: 라그나의 도수를 기준으로 하우스 경계를 다시 그은 차트입니다. 별자리 경계 근처에 있는 행성은 네이탈 차트와 비교해 이웃 하우스로 옮겨질 수 있습니다.",
        },
        {
          ja: "チャンドラチャート：月のある星座を第1室として並べ直した図。心や日々の感じ方を読むときの補助線になります。",
          en: "Chandra chart: the chart rearranged with the Moon's sign as the first house — a second viewpoint for reading the mind and day-to-day experience.",
          hi: "चंद्र कुंडली: चंद्र की राशि को पहला भाव मानकर फिर से सजाई गई कुंडली — मन और दैनिक अनुभव पढ़ने का दूसरा दृष्टिकोण।",
          ko: "찬드라 차트: 달이 있는 별자리를 제1하우스로 다시 배열한 차트. 마음과 일상의 감각을 읽을 때 보조선이 됩니다.",
        },
        {
          ja: "トランジットチャート（ゴーチャラ）：基準日の惑星の位置を出生図に重ねたもの。「トランジット」の印が付いた惑星が、その日の空の位置です。",
          en: "Transit chart (Gochar): the planets' positions on the transit date laid over the birth chart. Planets marked \"Transit\" are where they stand in the sky on that day.",
          hi: "गोचर कुंडली: गोचर तिथि पर ग्रहों की स्थिति जन्म कुंडली पर रखी गई। \"गोचर\" चिह्न वाले ग्रह उस दिन आकाश में उनकी स्थिति हैं।",
          ko: "트랜짓 차트(고차라): 기준일의 행성 위치를 출생 차트에 겹친 것. '트랜짓' 표시가 붙은 행성이 그날 하늘의 위치입니다.",
        },
        {
          ja: "惑星の詳細：各惑星の星座と度数、在室（何室にあるか）、支配星（その星座の主）、ナクシャトラ（27の月宿）とパダ（ナクシャトラの4分の1）、逆行の有無、品位（高揚・減衰・本来の座・中立）が一覧になります。",
          en: "Planet details: each planet's sign and degree, the house it occupies, its sign lord, its nakshatra (one of 27 lunar mansions) and pada (a quarter of a nakshatra), whether it is retrograde, and its dignity — exalted, debilitated, own sign or neutral.",
          hi: "ग्रह विवरण: हर ग्रह की राशि और अंश, भाव, राशि स्वामी, नक्षत्र (27 में से एक) और पाद (नक्षत्र का चौथाई भाग), वक्री है या नहीं, और गरिमा — उच्च, नीच, स्वराशि या सम।",
          ko: "행성 세부: 각 행성의 별자리와 도수, 위치한 하우스, 지배성(그 별자리의 주인), 낙샤트라(27개 월숙 중 하나)와 파다(낙샤트라의 4분의 1), 역행 여부, 품위(고양·쇠약·본래 자리·중립)가 정리됩니다.",
        },
        {
          ja: "アスペクト（ドリシュティ）：各惑星が視線を向けている室の一覧です。インド占星術では星座単位で数え、すべての惑星が7番目の室を見るほか、火星・木星・土星には特別なアスペクトがあります。",
          en: "Aspects (Drishti): the houses each planet casts its gaze on. In Jyotish these are counted by whole signs: every planet aspects the seventh house from itself, and Mars, Jupiter and Saturn have additional special aspects.",
          hi: "दृष्टि: हर ग्रह किन भावों पर दृष्टि डालता है उनकी सूची। ज्योतिष में यह पूरी राशियों से गिनी जाती है: हर ग्रह अपने से सातवें भाव को देखता है, और मंगल, गुरु, शनि की विशेष दृष्टियाँ भी होती हैं।",
          ko: "애스펙트(드리슈티): 각 행성이 시선을 보내는 하우스 목록입니다. 인도 점성술에서는 별자리 단위로 세며, 모든 행성이 자신으로부터 7번째 하우스를 보고, 화성·목성·토성에는 특별 애스펙트가 더 있습니다.",
        },
        {
          ja: "ヴィムショッタリ・ダシャー：人生を惑星ごとの期間に区切る120年周期の時期区分。大きな期間（マハー）の中に、アンタル、プラティヤンタル、スークシュマと細かい期間が入れ子になっています。現在の期間は最初から開いて表示されます。",
          en: "Vimshottari dasha: a 120-year cycle that divides life into periods ruled by each planet. Inside each major period (maha) sit progressively finer periods — antar, pratyantar and sukshma. The current period is shown already opened.",
          hi: "विंशोत्तरी दशा: 120 वर्ष का चक्र जो जीवन को ग्रहों की अवधियों में बाँटता है। हर महादशा के भीतर अंतर, प्रत्यंतर और सूक्ष्म दशाएँ क्रमशः छोटी अवधियों के रूप में होती हैं। वर्तमान अवधि पहले से खुली दिखती है।",
          ko: "빔쇼타리 다샤: 인생을 행성별 기간으로 나누는 120년 주기의 시기 구분. 큰 기간(마하) 안에 안타르, 프라티얀타르, 수크슈마라는 더 작은 기간이 차례로 들어 있습니다. 현재 기간은 처음부터 펼쳐져 표시됩니다.",
        },
        {
          ja: "ヨーガとドーシャ：特定の惑星の組み合わせです。ガジャ・ケサリ・ヨーガやブダーディティヤ・ヨーガ、五つのマハープルシャ・ヨーガ、マンガル・ドーシャなどを確認し、根拠となる惑星と室を添えて「好意的」「留意点」「中立」で示します。何も見つからないのも正常な結果です。",
          en: "Yogas and doshas: specific planetary combinations. The workspace checks for ones such as Gaja Kesari, Budhaditya, the five Mahapurusha yogas and Mangal Dosha, shows the planets and houses behind each, and labels them positive, caution or neutral. Finding none is a perfectly normal result.",
          hi: "योग और दोष: विशिष्ट ग्रह संयोजन। वर्कस्पेस गजकेसरी, बुधादित्य, पाँच महापुरुष योग और मंगल दोष जैसे संयोजन जाँचता है, हर एक के पीछे के ग्रह और भाव दिखाता है, और उन्हें शुभ, सावधानी या तटस्थ बताता है। कोई न मिलना भी सामान्य परिणाम है।",
          ko: "요가와 도샤: 특정한 행성 조합입니다. 가자 케사리 요가, 부다디티야 요가, 다섯 마하푸루샤 요가, 망갈 도샤 등을 확인하고 근거가 되는 행성과 하우스를 함께 '긍정적', '유의점', '중립'으로 표시합니다. 아무것도 없는 것도 정상적인 결과입니다.",
        },
        {
          ja: "アシュタカヴァルガ：七惑星とラグナの8つの基準点が、各星座をいくつ支持しているかを点数（ビンドゥ）で示す表です。惑星ごとの表と、その合計（サルヴァ）があり、点数が多い星座ほど古典的に強いとされます。",
          en: "Ashtakavarga: a table scoring how many of eight reference points — the seven planets and the Lagna — support each sign, in points (bindus). There is a table per planet and a combined total (Sarva); signs with more points are classically considered stronger.",
          hi: "अष्टकवर्ग: एक तालिका जो दिखाती है कि आठ संदर्भ बिंदुओं — सात ग्रह और लग्न — में से कितने हर राशि का समर्थन करते हैं, बिंदुओं में। हर ग्रह की तालिका और कुल योग (सर्व) होता है; अधिक बिंदु वाली राशियाँ शास्त्रीय रूप से अधिक बलवान मानी जाती हैं।",
          ko: "아슈타카바르가: 일곱 행성과 라그나라는 8개의 기준점 중 몇 개가 각 별자리를 지지하는지를 점수(빈두)로 보여 주는 표입니다. 행성별 표와 합계(사르바)가 있으며, 점수가 많은 별자리일수록 고전적으로 강하다고 봅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋占星術のホロスコープとの違い",
        en: "Background: how this differs from a Western horoscope",
        hi: "पृष्ठभूमि: पश्चिमी होरोस्कोप से अंतर",
        ko: "배경 지식: 서양 점성술 호로스코프와의 차이",
      },
      body: [
        {
          ja: "最も大きな違いは黄道の基準です。西洋占星術の多くは春分点を牡羊座0度とするトロピカル黄道を使いますが、インド占星術は実際の恒星を基準にするサイデリアル黄道を使います。歳差運動によって両者は少しずつ離れ、現在は約24度の差があります。",
          en: "The biggest difference is the reference for the zodiac. Most Western astrology uses the tropical zodiac, which fixes 0° Aries at the spring equinox; Jyotish uses the sidereal zodiac, anchored to the actual stars. Precession has slowly pulled the two apart, and they now differ by about 24 degrees.",
          hi: "सबसे बड़ा अंतर राशिचक्र के आधार का है। अधिकांश पश्चिमी ज्योतिष सायन राशिचक्र का उपयोग करता है, जो मेष 0° को वसंत विषुव पर रखता है; ज्योतिष वास्तविक तारों पर आधारित निरयण राशिचक्र का उपयोग करता है। पुरस्सरण से दोनों धीरे-धीरे अलग हुए हैं और अब लगभग 24 डिग्री का अंतर है।",
          ko: "가장 큰 차이는 황도의 기준입니다. 서양 점성술 대부분은 춘분점을 양자리 0도로 하는 회귀 황도를 쓰지만, 인도 점성술은 실제 항성을 기준으로 하는 항성 황도를 씁니다. 세차운동으로 두 황도는 조금씩 멀어져 현재 약 24도 차이가 납니다.",
        },
        {
          ja: "また、インド占星術では太陽星座よりも、ラグナ（上昇宮）と月を重視します。月のナクシャトラ（27の月宿）は性格の読み解きだけでなく、ヴィムショッタリ・ダシャーの起点にもなり、「いつ何が起こりやすいか」という時期の読みにつながります。天王星・海王星・冥王星は使わず、代わりに月の交点であるラーフとケトゥを含む9つの惑星で読むのも特徴です。",
          en: "Jyotish also gives more weight to the Lagna and the Moon than to the Sun sign. The Moon's nakshatra is used not only for temperament but as the starting point of the Vimshottari dasha, which links the chart to questions of timing. It reads nine grahas — including Rahu and Ketu, the lunar nodes — and does not use Uranus, Neptune or Pluto.",
          hi: "ज्योतिष सूर्य राशि की अपेक्षा लग्न और चंद्र को अधिक महत्व देता है। चंद्र का नक्षत्र स्वभाव के साथ विंशोत्तरी दशा का आरंभ बिंदु भी है, जो कुंडली को समय के प्रश्नों से जोड़ता है। यह नौ ग्रहों से पढ़ता है — चंद्र के पात राहु और केतु सहित — और यूरेनस, नेपच्यून, प्लूटो का उपयोग नहीं करता।",
          ko: "또한 인도 점성술은 태양 별자리보다 라그나(상승궁)와 달을 중시합니다. 달의 낙샤트라는 성격 해석뿐 아니라 빔쇼타리 다샤의 기점이 되어 '언제 무엇이 일어나기 쉬운가'라는 시기 읽기로 이어집니다. 천왕성·해왕성·명왕성은 쓰지 않고, 대신 달의 교점인 라후와 케투를 포함한 아홉 행성으로 읽는 것도 특징입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "どの順番で読むか：はじめての読み解きチェックリスト",
        en: "What order to read in: a first-reading checklist",
        hi: "किस क्रम में पढ़ें: पहली बार पढ़ने की सूची",
        ko: "어떤 순서로 읽을까: 첫 해석 체크리스트",
      },
      body: [
        {
          ja: "十のセクションを上から順に全部読む必要はありません。次の順番で少しずつ確かめていくと、情報に圧倒されずに全体像がつかめます。",
          en: "You don't need to read all ten sections top to bottom. Checking them in the following order lets you build the overall picture without being overwhelmed.",
          hi: "दसों खंड ऊपर से नीचे पढ़ना ज़रूरी नहीं। नीचे दिए क्रम से थोड़ा-थोड़ा जाँचें तो बिना उलझे पूरी तस्वीर बनती है।",
          ko: "열 개 섹션을 위에서부터 모두 읽을 필요는 없습니다. 다음 순서로 조금씩 확인하면 정보에 압도되지 않고 전체 그림을 잡을 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "□ 1. 入力の確認：上部のアセンダント度数を見て、星座の境目（0度付近や29度付近）でないかを確認します。境目に近ければ、出生時刻の数分の差でラグナが変わる可能性を頭に置きます。",
          en: "□ 1. Check the input: look at the ascendant degree at the top. If it sits near a sign boundary (around 0° or 29°), keep in mind that a few minutes' difference in birth time could change the Lagna.",
          hi: "□ 1. प्रविष्टि जाँचें: ऊपर लग्न का अंश देखें। यदि वह राशि-सीमा (लगभग 0° या 29°) के पास है, तो ध्यान रखें कि जन्म समय में कुछ मिनट का अंतर लग्न बदल सकता है।",
          ko: "□ 1. 입력 확인: 위쪽의 어센던트 도수를 보고 별자리 경계(0도 부근이나 29도 부근)가 아닌지 확인합니다. 경계에 가깝다면 출생 시각 몇 분 차이로 라그나가 바뀔 수 있음을 염두에 둡니다.",
        },
        {
          ja: "□ 2. 三本柱をつかむ：ネイタルチャートと惑星の詳細から、ラグナの星座、月の星座とナクシャトラ、ラグナの支配星がどの室にあるかの三つを書き出します。",
          en: "□ 2. Find the three pillars: from the natal chart and planet details, note the Lagna sign, the Moon's sign and nakshatra, and which house the Lagna's lord sits in.",
          hi: "□ 2. तीन स्तंभ पहचानें: जन्म कुंडली और ग्रह विवरण से लग्न राशि, चंद्र की राशि व नक्षत्र, और लग्नेश किस भाव में है — ये तीन बातें लिखें।",
          ko: "□ 2. 세 기둥 잡기: 네이탈 차트와 행성 세부에서 라그나의 별자리, 달의 별자리와 낙샤트라, 라그나 지배성이 어느 하우스에 있는지 세 가지를 적어 둡니다.",
        },
        {
          ja: "□ 3. 強さを補う：高揚・減衰・逆行の惑星に印を付け、D9チャートで同じ惑星がどう配置されているかを見比べます。アシュタカヴァルガの点数も参考になります。",
          en: "□ 3. Add strength: mark exalted, debilitated and retrograde planets, then compare how the same planets fall in the D9 chart. Ashtakavarga scores are a useful cross-check.",
          hi: "□ 3. बल जोड़ें: उच्च, नीच और वक्री ग्रहों को चिह्नित करें, फिर D9 कुंडली में वही ग्रह कैसे हैं, तुलना करें। अष्टकवर्ग के बिंदु भी उपयोगी जाँच हैं।",
          ko: "□ 3. 힘 보완하기: 고양·쇠약·역행 행성에 표시를 하고, D9 차트에서 같은 행성이 어떻게 배치되어 있는지 비교합니다. 아슈타카바르가 점수도 참고가 됩니다.",
        },
        {
          ja: "□ 4. 時期を重ねる：ダシャーで現在のマハー期とアンタル期の惑星を確認し、その惑星の在室とアスペクト先を見ます。",
          en: "□ 4. Layer on timing: in the dasha section, identify the planets of the current maha and antar periods, then look at their houses and the houses they aspect.",
          hi: "□ 4. समय जोड़ें: दशा खंड में वर्तमान महादशा और अंतर्दशा के ग्रह पहचानें, फिर उनके भाव और दृष्टि वाले भाव देखें।",
          ko: "□ 4. 시기 겹치기: 다샤에서 현재 마하기와 안타르기의 행성을 확인하고, 그 행성의 하우스와 애스펙트 대상을 봅니다.",
        },
        {
          ja: "□ 5. 今の空と比べる：最後にトランジットチャートで、土星や木星が今どの室を通過しているかを確認します。ヨーガは単独で判断せず、ここまでの流れの中で補足として読みます。",
          en: "□ 5. Compare with today's sky: finally, use the transit chart to see which houses Saturn and Jupiter are passing through now. Read yogas as a supplement within this flow rather than on their own.",
          hi: "□ 5. आज के आकाश से तुलना करें: अंत में गोचर कुंडली में देखें कि शनि और गुरु अभी किन भावों से गुज़र रहे हैं। योगों को अकेले नहीं, इसी प्रवाह में पूरक के रूप में पढ़ें।",
          ko: "□ 5. 지금의 하늘과 비교하기: 마지막으로 트랜짓 차트에서 토성과 목성이 지금 어느 하우스를 지나고 있는지 확인합니다. 요가는 단독으로 판단하지 말고 지금까지의 흐름 속에서 보충으로 읽습니다.",
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
          ja: "このワークスペースの結果は、天文計算にもとづく伝統的なインド占星術の読み方を紹介するもので、自分を見つめ直すきっかけや楽しみとしてご利用ください。健康・法律・お金に関わる判断の代わりにはなりません。そうした判断は医師や弁護士、ファイナンシャルプランナーなどの専門家にご相談ください。",
          en: "The results in this workspace present traditional Jyotish interpretations based on astronomical calculation. Please use them for self-reflection and enjoyment. They are not a substitute for medical, legal or financial decisions, which should be discussed with a qualified professional such as a doctor, lawyer or financial adviser.",
          hi: "इस वर्कस्पेस के परिणाम खगोलीय गणना पर आधारित पारंपरिक ज्योतिषीय व्याख्याएँ प्रस्तुत करते हैं। इन्हें आत्म-चिंतन और आनंद के लिए उपयोग करें। ये चिकित्सा, कानूनी या वित्तीय निर्णयों का विकल्प नहीं हैं; ऐसे निर्णयों के लिए डॉक्टर, वकील या वित्तीय सलाहकार जैसे योग्य विशेषज्ञ से परामर्श करें।",
          ko: "이 작업 공간의 결과는 천문 계산에 기초한 전통적인 인도 점성술 해석을 소개하는 것으로, 자신을 돌아보는 계기나 즐거움으로 이용해 주세요. 건강, 법률, 금전에 관한 판단을 대신하지 않습니다. 그런 판단은 의사, 변호사, 재무 설계사 등 전문가와 상담하세요.",
        },
        {
          ja: "「ドーシャ」や「減衰」といった言葉は、伝統的な分類の名前にすぎず、不運が決まっていることを意味するものではありません。一つの配置だけで良し悪しを決めつけず、全体のバランスの中で穏やかに受け止めてください。",
          en: "Words such as \"dosha\" or \"debilitated\" are simply names of traditional categories and do not mean misfortune is fixed. Please don't judge anything good or bad from one placement alone; take it calmly as part of the whole chart.",
          hi: "\"दोष\" या \"नीच\" जैसे शब्द केवल पारंपरिक श्रेणियों के नाम हैं और इनका अर्थ यह नहीं कि दुर्भाग्य तय है। किसी एक स्थिति से अच्छा-बुरा तय न करें; उसे पूरी कुंडली के संदर्भ में शांति से समझें।",
          ko: "'도샤'나 '쇠약' 같은 말은 전통적 분류의 이름일 뿐, 불운이 정해져 있다는 뜻이 아닙니다. 한 가지 배치만으로 좋고 나쁨을 단정하지 말고 전체 균형 속에서 편안하게 받아들여 주세요.",
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
          ja: "ワークスペースの各セクションをさらに深く知りたいときは、次のページも参考にしてください。",
          en: "To go deeper into individual sections of the workspace, these pages may help.",
          hi: "वर्कस्पेस के अलग-अलग खंडों को और गहराई से समझने के लिए ये पृष्ठ सहायक हो सकते हैं।",
          ko: "작업 공간의 각 섹션을 더 깊이 알고 싶다면 다음 페이지도 참고하세요.",
        },
      ],
      links: [
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻チェック：時刻の誤差でラグナが変わるか確かめる",
            en: "Birth time check: see whether a time error would change your Lagna",
            hi: "जन्म समय जाँच: देखें कि समय की त्रुटि से लग्न बदलेगा या नहीं",
            ko: "출생 시각 확인: 시각 오차로 라그나가 바뀌는지 확인",
          },
        },
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ダシャー計算：惑星期の流れを詳しく見る",
            en: "Dasha calculator: explore your planetary periods in detail",
            hi: "दशा कैलकुलेटर: ग्रह दशाओं को विस्तार से देखें",
            ko: "다샤 계산기: 행성 주기의 흐름을 자세히 보기",
          },
        },
        {
          href: "/learn-jyotish/houses/chart-formats",
          label: {
            ja: "北インド式と南インド式の図の読み方",
            en: "How to read North and South Indian chart formats",
            hi: "उत्तर और दक्षिण भारतीय कुंडली प्रारूप कैसे पढ़ें",
            ko: "북인도식·남인도식 차트 읽는 법",
          },
        },
        {
          href: "/learn-jyotish/houses/twelve-houses",
          label: {
            ja: "12の室（ハウス）が表すもの",
            en: "What the twelve houses represent",
            hi: "बारह भाव क्या दर्शाते हैं",
            ko: "12개 하우스가 나타내는 것",
          },
        },
        {
          href: "/learn-jyotish/aspects/planetary-aspects",
          label: {
            ja: "惑星のアスペクト（ドリシュティ）の基本",
            en: "The basics of planetary aspects (drishti)",
            hi: "ग्रह दृष्टि की मूल बातें",
            ko: "행성 애스펙트(드리슈티)의 기본",
          },
        },
      ],
    },
  ],
  faqs: [
    {
      question: {
        ja: "出生時刻がわからなくてもチャートは作れますか？",
        en: "Can I create a chart without knowing my birth time?",
        hi: "क्या जन्म समय जाने बिना कुंडली बन सकती है?",
        ko: "출생 시각을 몰라도 차트를 만들 수 있나요?",
      },
      answer: {
        ja: "作成はできますが、ラグナ（上昇宮）と室の配置は出生時刻に強く左右されます。時刻が不明な場合は正午などの仮の時刻で作り、惑星の星座や月のナクシャトラなど時刻の影響を受けにくい部分を中心に読むのがおすすめです。",
        en: "Yes, but the Lagna and the house placements depend heavily on birth time. If you don't know it, use a placeholder such as noon and focus on the parts less affected by time, like planet signs and the Moon's nakshatra.",
        hi: "हाँ, पर लग्न और भाव-स्थिति जन्म समय पर बहुत निर्भर करते हैं। समय न पता हो तो दोपहर जैसा अनुमानित समय डालें और ग्रहों की राशियों व चंद्र नक्षत्र जैसे समय से कम प्रभावित हिस्सों पर ध्यान दें।",
        ko: "만들 수는 있지만 라그나(상승궁)와 하우스 배치는 출생 시각에 크게 좌우됩니다. 시각을 모른다면 정오 같은 임시 시각으로 만들고, 행성의 별자리나 달의 낙샤트라처럼 시각의 영향을 덜 받는 부분을 중심으로 읽는 것을 권합니다.",
      },
    },
    {
      question: {
        ja: "西洋占星術の星座と違うのはなぜですか？",
        en: "Why are my signs different from Western astrology?",
        hi: "मेरी राशियाँ पश्चिमी ज्योतिष से अलग क्यों हैं?",
        ko: "왜 서양 점성술의 별자리와 다른가요?",
      },
      answer: {
        ja: "インド占星術は恒星を基準にしたサイデリアル黄道（ラヒリ・アヤナムシャ）を使い、西洋占星術の多くは春分点基準のトロピカル黄道を使うためです。両者には現在約24度の差があるので、太陽や月の星座が一つ前にずれることがよくあります。どちらかが誤りというわけではありません。",
        en: "Jyotish uses the star-based sidereal zodiac (with the Lahiri ayanamsha), while most Western astrology uses the equinox-based tropical zodiac. They currently differ by about 24 degrees, so your Sun or Moon sign often shifts back by one. Neither is a mistake.",
        hi: "ज्योतिष तारों पर आधारित निरयण राशिचक्र (लाहिड़ी अयनांश) का उपयोग करता है, जबकि अधिकांश पश्चिमी ज्योतिष विषुव-आधारित सायन राशिचक्र का। दोनों में अभी लगभग 24 डिग्री का अंतर है, इसलिए सूर्य या चंद्र राशि अक्सर एक पीछे हो जाती है। कोई भी गलत नहीं है।",
        ko: "인도 점성술은 항성을 기준으로 한 항성 황도(라히리 아야남샤)를, 서양 점성술 대부분은 춘분점 기준의 회귀 황도를 쓰기 때문입니다. 두 황도는 현재 약 24도 차이가 나서 태양이나 달의 별자리가 하나 앞으로 밀리는 경우가 많습니다. 어느 쪽이 틀린 것은 아닙니다.",
      },
    },
    {
      question: {
        ja: "北インド式と南インド式はどちらを選べばよいですか？",
        en: "Should I choose the North Indian or South Indian style?",
        hi: "उत्तर भारतीय या दक्षिण भारतीय शैली में से कौन चुनें?",
        ko: "북인도식과 남인도식 중 무엇을 골라야 하나요?",
      },
      answer: {
        ja: "どちらも同じ計算結果を別の形で描いたもので、内容は変わりません。北インド式は室の位置が固定され、南インド式は星座の位置が固定されています。切り替えはページ内のすべての図に反映されるので、読みやすい方を選んでください。",
        en: "Both draw the same calculation in different shapes, so the content is identical. The North Indian style fixes the houses; the South Indian style fixes the signs. The toggle applies to every chart on the page, so pick whichever you find easier to read.",
        hi: "दोनों एक ही गणना को अलग आकार में दिखाते हैं, इसलिए विषय-वस्तु समान है। उत्तर भारतीय शैली में भाव स्थिर रहते हैं; दक्षिण भारतीय में राशियाँ। टॉगल पृष्ठ के हर चार्ट पर लागू होता है, इसलिए जो पढ़ने में आसान लगे वही चुनें।",
        ko: "둘 다 같은 계산 결과를 다른 모양으로 그린 것이라 내용은 같습니다. 북인도식은 하우스 위치가, 남인도식은 별자리 위치가 고정되어 있습니다. 전환은 페이지의 모든 차트에 반영되니 읽기 쉬운 쪽을 고르세요.",
      },
    },
    {
      question: {
        ja: "作成したチャートを保存するにはどうすればよいですか？",
        en: "How do I save a chart I've created?",
        hi: "बनाई गई कुंडली को कैसे सहेजें?",
        ko: "만든 차트를 저장하려면 어떻게 하나요?",
      },
      answer: {
        ja: "ログインした状態でチャートを作ると、「最近」に直近5件が残り、結果の見出しにある「保存」を押すとライブラリに保管されます。ログインしていない場合でも、「PDFをダウンロード」で結果を手元に残せます。",
        en: "If you create a chart while signed in, your last five appear under Recent, and pressing Save in the results header keeps it in your library. Without signing in, you can still keep the results with \"Download PDF\".",
        hi: "साइन इन रहकर कुंडली बनाएँ तो अंतिम पाँच \"हाल की\" में दिखती हैं, और परिणाम शीर्षक में \"सहेजें\" दबाने पर वह लाइब्रेरी में रहती है। साइन इन किए बिना भी \"PDF डाउनलोड करें\" से परिणाम रख सकते हैं।",
        ko: "로그인한 상태로 차트를 만들면 '최근'에 최근 5개가 남고, 결과 제목의 '저장'을 누르면 라이브러리에 보관됩니다. 로그인하지 않아도 'PDF 다운로드'로 결과를 보관할 수 있습니다.",
      },
    },
    {
      question: {
        ja: "チャリットチャートとネイタルチャートで惑星の室が違うのはなぜですか？",
        en: "Why is a planet in a different house in the Chalit chart than in the natal chart?",
        hi: "चलित कुंडली में ग्रह जन्म कुंडली से अलग भाव में क्यों है?",
        ko: "찰리트 차트와 네이탈 차트에서 행성의 하우스가 다른 이유는 무엇인가요?",
      },
      answer: {
        ja: "ネイタルチャートは星座一つを一つの室とみなしますが、チャリットチャートはラグナの度数を基準に室の境界を引き直します。そのため星座の境目近くにある惑星は、隣の室に移ることがあります。どちらも伝統的な見方で、両方を見比べることで惑星がどの分野に働きやすいかを丁寧に読めます。",
        en: "The natal chart treats each sign as one house, while the Chalit chart redraws the house boundaries from the Lagna's exact degree. A planet near a sign boundary can therefore shift into the neighbouring house. Both are traditional views, and comparing them helps you read more carefully where a planet's effects tend to show.",
        hi: "जन्म कुंडली हर राशि को एक भाव मानती है, जबकि चलित कुंडली लग्न के सटीक अंश से भाव-सीमाएँ फिर खींचती है। इसलिए राशि-सीमा के पास का ग्रह पड़ोसी भाव में जा सकता है। दोनों पारंपरिक दृष्टियाँ हैं, और तुलना से ग्रह के प्रभाव का क्षेत्र अधिक ध्यान से पढ़ा जा सकता है।",
        ko: "네이탈 차트는 별자리 하나를 하나의 하우스로 보지만, 찰리트 차트는 라그나의 도수를 기준으로 하우스 경계를 다시 긋습니다. 그래서 별자리 경계 근처의 행성은 이웃 하우스로 옮겨질 수 있습니다. 둘 다 전통적인 관점이며, 함께 비교하면 행성이 어떤 분야에 작용하기 쉬운지 더 세심하게 읽을 수 있습니다.",
      },
    },
    {
      question: {
        ja: "ヨーガが一つも表示されないのは悪いことですか？",
        en: "Is it bad if no yogas are shown?",
        hi: "क्या कोई योग न दिखना बुरा है?",
        ko: "요가가 하나도 표시되지 않으면 나쁜 건가요?",
      },
      answer: {
        ja: "いいえ、悪いことではありません。ここで確認しているのは代表的な組み合わせの一部で、該当しないのはごく普通の結果です。チャートの特徴は、ラグナや月、惑星の品位、ダシャーなど全体から読むものです。",
        en: "No. The workspace checks a selection of well-known combinations, and not matching any of them is a perfectly ordinary result. A chart's character comes from the whole — the Lagna, the Moon, planetary dignity, the dasha and more.",
        hi: "नहीं। वर्कस्पेस कुछ प्रसिद्ध संयोजनों की जाँच करता है, और किसी का न मिलना बिल्कुल सामान्य परिणाम है। कुंडली का स्वभाव पूरी तस्वीर से पढ़ा जाता है — लग्न, चंद्र, ग्रहों की गरिमा, दशा आदि।",
        ko: "아니요, 나쁜 것이 아닙니다. 여기서 확인하는 것은 대표적인 조합의 일부이며, 해당하지 않는 것은 아주 흔한 결과입니다. 차트의 특징은 라그나, 달, 행성의 품위, 다샤 등 전체에서 읽는 것입니다.",
      },
    },
    {
      question: {
        ja: "トランジット基準日を変えると何がわかりますか？",
        en: "What does changing the transit date show?",
        hi: "गोचर तिथि बदलने से क्या पता चलता है?",
        ko: "트랜짓 기준일을 바꾸면 무엇을 알 수 있나요?",
      },
      answer: {
        ja: "日付を変えてもう一度「チャートを作成」を押すと、トランジットチャートに表示される惑星が、指定した日の位置に変わります。例えば一年後の日付にすると、土星や木星が出生図のどの室を通過しているかを先取りして確認できます。出生図そのものは変わりません。",
        en: "Change the date and press \"Create chart\" again, and the planets in the transit chart move to their positions on that date. Set a date a year ahead, for example, to preview which houses of your birth chart Saturn and Jupiter will be passing through. The birth chart itself stays the same.",
        hi: "तिथि बदलकर फिर से \"कुंडली बनाएं\" दबाएँ तो गोचर कुंडली के ग्रह चुनी तिथि की स्थिति में आ जाते हैं। उदाहरण के लिए एक वर्ष आगे की तिथि रखें तो देख सकते हैं कि शनि और गुरु जन्म कुंडली के किन भावों से गुज़रेंगे। जन्म कुंडली स्वयं नहीं बदलती।",
        ko: "날짜를 바꾸고 다시 '차트 작성'을 누르면 트랜짓 차트에 표시되는 행성이 지정한 날의 위치로 바뀝니다. 예를 들어 1년 뒤 날짜로 하면 토성이나 목성이 출생 차트의 어느 하우스를 지나고 있을지 미리 확인할 수 있습니다. 출생 차트 자체는 바뀌지 않습니다.",
      },
    },
  ],
};
