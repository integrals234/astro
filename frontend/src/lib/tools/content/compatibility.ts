import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/compatibility.
 *
 * 相性 is the highest-volume commercial intent in Japanese 占い, and it is also
 * where a scored tool most easily becomes irresponsible. The page therefore
 * spends as much space on what the score cannot decide as on how it is
 * computed — which is both the honest position and the one that makes the
 * handoff to a human reading credible rather than salesy.
 */
export const compatibilityLongForm: ToolLongForm = {
  slug: "compatibility",
  sections: [
    {
      heading: {
        ja: "相性占い（クータ・ミラン）の仕組み",
        en: "How the compatibility score works",
        hi: "अनुकूलता गणना (कूट मिलान) कैसे काम करती है",
        ko: "궁합(쿠타 밀란)의 구조",
      },
      body: [
        {
          ja: "インド占星術の相性判定は「アシュタクータ」と呼ばれ、八つの観点から合計三十六点で評価します。アシュタは八、クータは項目という意味です。北インドで結婚前の判断材料として広く用いられてきた方式で、日本では「グナ・ミラン」「三十六点法」と紹介されることもあります。",
          en: "Vedic compatibility matching is called Ashtakoot: eight criteria totalling thirty-six points. Ashta means eight, kuta means category. It has long been used in northern India as one input to a marriage decision, and appears in Japanese sources as guna milan or the thirty-six-point method.",
          hi: "वैदिक अनुकूलता मिलान को 'अष्टकूट' कहते हैं: आठ कसौटियाँ, कुल छत्तीस अंक। उत्तर भारत में विवाह के निर्णय में यह लंबे समय से एक आधार रहा है।",
          ko: "베다 점성술의 궁합 판정은 '아슈타쿠타'라 하며 여덟 관점에서 합계 36점으로 평가합니다. 아슈타는 여덟, 쿠타는 항목을 뜻합니다.",
        },
        {
          ja: "八つの項目は、配点の小さい順に、ヴァルナ（一点）、ヴァシャ（二点）、ターラ（三点）、ヨーニ（四点）、グラハ・マイトリ（五点）、ガナ（六点）、バクート（七点）、ナーディ（八点）です。配点が大きいほど古典的に重視される項目で、合計三十六点のうち十五点をバクートとナーディの二項目が占めていることからも、この二つが特別扱いされているのが分かります。",
          en: "The eight, in ascending weight: Varna (1), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7) and Nadi (8). Heavier weight means greater classical importance — Bhakoot and Nadi alone account for fifteen of the thirty-six, which is how plainly the tradition singles them out.",
          hi: "आठ कूट, बढ़ते भार के क्रम में: वर्ण (1), वश्य (2), तारा (3), योनि (4), ग्रह मैत्री (5), गण (6), भकूट (7) और नाड़ी (8)।",
          ko: "여덟 항목은 배점이 작은 순으로 바르나(1), 바샤(2), 타라(3), 요니(4), 그라하 마이트리(5), 가나(6), 바쿠타(7), 나디(8)입니다.",
        },
        {
          ja: "重要な点として、これら八項目はすべて二人の「月の位置」だけから計算されます。月の星座（ラーシ）と月宿（ナクシャトラ）が分かれば、残りは古典的な対応表に従って機械的に定まります。当ページが出生時刻を求めるのは、月宿の判定に必要だからです。",
          en: "Crucially, all eight are computed from the Moon's position alone. Once you know each person's Moon sign and Moon nakshatra, the rest follows mechanically from classical tables. This page asks for birth times because the nakshatra depends on them.",
          hi: "महत्वपूर्ण बात: ये आठों केवल चंद्रमा की स्थिति से निकलते हैं। दोनों की चंद्र राशि और नक्षत्र ज्ञात होने पर शेष शास्त्रीय तालिकाओं से यांत्रिक रूप से तय होता है।",
          ko: "중요한 점은 이 여덟 항목이 모두 두 사람의 '달의 위치'만으로 계산된다는 것입니다. 달의 별자리와 달 저택을 알면 나머지는 고전 대응표에 따라 기계적으로 정해집니다.",
        },
      ],
    },
    {
      heading: {
        ja: "各項目が見ているもの",
        en: "What each criterion looks at",
        hi: "प्रत्येक कूट क्या देखता है",
        ko: "각 항목이 보는 것",
      },
      body: [
        {
          ja: "ヴァルナは気質の階層、ヴァシャは主導権の傾き、ターラは互いの月宿の距離から見た吉凶、ヨーニは身体的・本能的な相性を動物の象徴で表したものです。グラハ・マイトリは双方の月の星座の支配星どうしが友好か中立か敵対かを見ます。ガナは神・人・羅刹という三つの気質分類、バクートは月星座の位置関係、ナーディは体質を三分類したものです。",
          en: "Varna reads temperament as a hierarchy; Vashya, where the balance of initiative sits; Tara, auspiciousness judged from the distance between the two mansions; Yoni, physical and instinctive fit, expressed through animal symbols. Graha Maitri asks whether the lords of the two Moon signs are friends, neutral or enemies. Gana sorts temperament into deva, manushya and rakshasa; Bhakoot reads the positional relationship of the Moon signs; Nadi divides constitution three ways.",
          hi: "वर्ण स्वभाव की श्रेणी देखता है, वश्य पहल का संतुलन, तारा दोनों नक्षत्रों की दूरी से शुभाशुभ, योनि शारीरिक-सहज अनुकूलता। ग्रह मैत्री दोनों चंद्र राशियों के स्वामियों की मित्रता देखती है।",
          ko: "바르나는 기질의 층위를, 바샤는 주도권의 기울기를, 타라는 두 수의 거리로 본 길흉을, 요니는 신체적·본능적 궁합을 동물 상징으로 나타냅니다.",
        },
        {
          ja: "古典的に特に重視されるのがバクートとナーディです。バクートは、二人の月星座が六と八、五と九、二と十二の関係にある場合を「バクート・ドーシャ」として零点とします。ナーディは、二人が同じナーディに属する場合を零点とします。この二つのいずれかが零点になると、合計点が高くても注意が必要とされてきました。",
          en: "Bhakoot and Nadi carry the most classical weight. Bhakoot scores zero when the two Moon signs stand in a 6–8, 5–9 or 2–12 relationship — the Bhakoot dosha. Nadi scores zero when both people share the same nadi. Traditionally, a zero in either is treated as a caution regardless of how high the total looks.",
          hi: "भकूट और नाड़ी शास्त्रीय रूप से सबसे भारी हैं। भकूट 6-8, 5-9 या 2-12 संबंध में शून्य होता है; नाड़ी दोनों की समान होने पर शून्य होती है।",
          ko: "고전적으로 특히 중시되는 것은 바쿠타와 나디입니다. 바쿠타는 두 달 별자리가 6-8, 5-9, 2-12 관계일 때 0점이 되고, 나디는 두 사람이 같은 나디일 때 0점이 됩니다.",
        },
        {
          ja: "当ページでは合計点だけでなく八項目それぞれの内訳を表示しています。これは意図的な設計です。二十四点という同じ合計でも、ヨーニで失点しているのか、ナーディで失点しているのかでは意味がまったく異なります。合計点のみを示すことは、実際には存在しない精度を装うことになります。",
          en: "This page shows all eight components, not just the total. That is deliberate: two couples can both score 24 while one lost its points on Yoni and the other on Nadi, and those are not the same situation. Showing only a total would imply a precision that does not exist.",
          hi: "यह पृष्ठ केवल कुल नहीं, आठों का विभाजन दिखाता है। 24 अंक योनि में खोए हों या नाड़ी में — अर्थ पूरी तरह भिन्न है।",
          ko: "이 페이지는 총점뿐 아니라 여덟 항목의 내역을 표시합니다. 같은 24점이라도 요니에서 잃었는지 나디에서 잃었는지에 따라 의미가 전혀 다릅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "点数をどう受け取るべきか",
        en: "How to hold the number",
        hi: "अंक को कैसे समझें",
        ko: "점수를 어떻게 받아들일 것인가",
      },
      body: [
        {
          ja: "一般には十八点以上で「適合」とされることが多いのですが、この基準を額面どおり受け取るべきではありません。アシュタクータは二人の月の配置のみを見る方式であり、ラグナ、七室（結婚を司る室）とその支配星、金星と火星の状態、そして双方が現在どのダシャー期間にあるかを一切考慮していないからです。",
          en: "Eighteen points is commonly cited as the threshold for a match, but that number should not be taken at face value. Ashtakoot looks only at two Moon positions. It does not consider the ascendant, the seventh house and its lord, the condition of Venus and Mars, or which dasha period each person is currently living through.",
          hi: "अठारह अंक को प्रायः मेल की सीमा कहा जाता है, पर इसे अक्षरशः नहीं लेना चाहिए। अष्टकूट केवल दो चंद्र स्थितियाँ देखता है।",
          ko: "일반적으로 18점 이상을 '적합'으로 보지만, 이 기준을 액면 그대로 받아들여서는 안 됩니다. 아슈타쿠타는 두 사람의 달 배치만 보는 방식입니다.",
        },
        {
          ja: "実務上は、点数が低くても問題なく続く関係も、点数が高くても難しい時期を迎える関係もあります。古典にも、バクート・ドーシャが他の配置によって相殺される（キャンセルされる）とする規定が複数あり、点数を単独で結論に用いることは想定されていません。相性の判断は、二つのチャート全体を突き合わせて初めて意味を持ちます。",
          en: "In practice, low-scoring pairs often do fine and high-scoring ones still meet hard seasons. The classical literature itself contains several rules under which a Bhakoot dosha is cancelled by other placements — the score was never meant to stand alone as a conclusion. Compatibility only means something once two whole charts are read against each other.",
          hi: "व्यवहार में कम अंक वाले संबंध भी भली-भाँति चलते हैं और अधिक अंक वाले भी कठिन दौर देखते हैं। शास्त्रों में भकूट दोष के निरस्त होने के कई नियम हैं।",
          ko: "실제로는 점수가 낮아도 문제없이 이어지는 관계도, 점수가 높아도 어려운 시기를 맞는 관계도 있습니다. 고전에도 바쿠타 도샤가 다른 배치로 상쇄된다는 규정이 여럿 있습니다.",
        },
        {
          ja: "この点数を、関係を続けるかどうかの判断材料として単独で用いることは、私たちとしてはお勧めしません。むしろ、二人のあいだで何が起きやすいかを言語化するための出発点として使っていただくのが、この道具の本来の使い方だと考えています。",
          en: "We would not recommend using this score on its own to decide whether to continue a relationship. Its proper use, as we see it, is as a starting point for putting into words what tends to happen between two people.",
          hi: "हम इस अंक को अकेले संबंध जारी रखने के निर्णय का आधार बनाने की सलाह नहीं देते। इसका उचित उपयोग यह समझने की शुरुआत के रूप में है कि दो लोगों के बीच क्या घटित होता है।",
          ko: "이 점수를 관계를 이어갈지 판단하는 유일한 근거로 쓰는 것은 권하지 않습니다. 두 사람 사이에 무엇이 일어나기 쉬운지를 언어화하는 출발점으로 쓰시길 권합니다.",
        },
      ],
      bullets: [
        {
          ja: "点数は二人の月の配置のみから算出され、ラグナや七室を含みません",
          en: "The score derives from two Moon positions only, and includes neither ascendant nor seventh house",
          hi: "अंक केवल दो चंद्र स्थितियों से निकलता है",
          ko: "점수는 두 사람의 달 배치만으로 산출됩니다",
        },
        {
          ja: "バクートとナーディの零点は、合計点より重く扱われてきました",
          en: "A zero in Bhakoot or Nadi has classically weighed more than the total",
          hi: "भकूट या नाड़ी में शून्य कुल अंक से भारी माना जाता रहा है",
          ko: "바쿠타와 나디의 0점은 총점보다 무겁게 다뤄져 왔습니다",
        },
        {
          ja: "古典にはドーシャが相殺される規定が複数あり、機械的判定には限界があります",
          en: "Classical rules cancel doshas in several cases, which mechanical scoring cannot capture",
          hi: "शास्त्रों में दोष-निरसन के नियम हैं, जिन्हें यांत्रिक गणना नहीं पकड़ती",
          ko: "고전에는 도샤가 상쇄되는 규정이 여럿 있어 기계적 판정에는 한계가 있습니다",
        },
      ],
    },
    {
      heading: {
        ja: "相性診断の使い方",
        en: "How to use the compatibility calculator",
        hi: "अनुकूलता गणक का उपयोग कैसे करें",
        ko: "궁합 계산기 사용법",
      },
      body: [
        {
          ja: "まず、お二人それぞれの生年月日・出生時刻・出生地を入力します。一度登録した方は次回から一覧で選べるので、ご家族やパートナーなど複数の組み合わせを試すときも入力は一回で済みます。",
          en: "First, enter each person's date of birth, time of birth and place of birth. Anyone you have added once can be picked from a list next time, so trying several pairings — family members or a partner — only takes one round of typing per person.",
          hi: "पहले दोनों व्यक्तियों की जन्म तिथि, जन्म समय और जन्म स्थान दर्ज करें। एक बार जोड़े गए व्यक्ति अगली बार सूची से चुने जा सकते हैं, इसलिए कई जोड़ियाँ आज़माने पर भी हर व्यक्ति का विवरण एक ही बार भरना पड़ता है।",
          ko: "먼저 두 사람 각각의 생년월일, 출생 시각, 출생지를 입력합니다. 한 번 등록한 사람은 다음부터 목록에서 고를 수 있어, 가족이나 파트너 등 여러 조합을 시험할 때도 입력은 한 번이면 됩니다.",
        },
        {
          ja: "次に、一人目（新婦の枠）と二人目（新郎の枠）を選び、「相性を算出する」を押します。古典の規則ではヴァルナとガナの二項目に向きがあるため、枠を入れ替えると合計が最大二点変わることがあります。同性のカップルや結婚以外の関係で使う場合も、両方の順番で試して差を確かめておくと安心です。",
          en: "Next, choose the first person (the bride's slot) and the second (the groom's slot) and press Calculate. Under the classical rules Varna and Gana are directional, so swapping the slots can change the total by up to two points. For same-sex couples or relationships other than marriage, it is worth running both orders and noting the difference.",
          hi: "फिर पहला व्यक्ति (वधू का स्थान) और दूसरा (वर का स्थान) चुनें और 'अनुकूलता निकालें' दबाएँ। शास्त्रीय नियमों में वर्ण और गण दिशात्मक हैं, इसलिए स्थान बदलने पर कुल दो अंक तक बदल सकता है। समलैंगिक जोड़ों या विवाह के अलावा अन्य संबंधों के लिए दोनों क्रम आज़माकर अंतर देख लेना अच्छा है।",
          ko: "다음으로 첫 번째(신부 자리)와 두 번째(신랑 자리)를 선택하고 '궁합 산출하기'를 누릅니다. 고전 규칙상 바르나와 가나에는 방향이 있어 자리를 바꾸면 총점이 최대 2점 달라질 수 있습니다. 동성 커플이나 결혼 이외의 관계라면 두 순서로 모두 시험해 차이를 확인해 두면 좋습니다.",
        },
        {
          ja: "入力でつまずきやすい点を、以下にまとめました。",
          en: "The points where input most often goes wrong are listed below.",
          hi: "जहाँ प्रविष्टि में सबसे अधिक गलती होती है, वे बिंदु नीचे दिए गए हैं।",
          ko: "입력에서 자주 실수하는 부분을 아래에 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻が分からない場合：正午で計算し、結果は暫定とお考えください。月はおよそ一日で一つの月宿を進むため、多くの場合は大きく変わりませんが、月宿の境目付近の生まれでは項目の点数が入れ替わることがあります",
          en: "Unknown birth time: calculate with noon and treat the result as provisional. The Moon crosses one nakshatra in about a day, so the result usually holds, but near a nakshatra boundary several kuta scores can change",
          hi: "जन्म समय अज्ञात हो: दोपहर 12 बजे से गणना करें और परिणाम को अस्थायी मानें। चंद्रमा लगभग एक दिन में एक नक्षत्र पार करता है, पर नक्षत्र-सीमा के निकट जन्म में कई कूटों के अंक बदल सकते हैं",
          ko: "출생 시각을 모를 때: 정오로 계산하고 결과는 잠정적인 것으로 보세요. 달은 약 하루에 한 수를 지나므로 대개 크게 바뀌지 않지만, 수의 경계 부근 출생이라면 여러 항목의 점수가 바뀔 수 있습니다",
        },
        {
          ja: "時刻があいまいな場合：母子手帳に記載された時刻があれば、それが最も確実な手がかりです。「朝方」程度しか分からない場合は、前後の時刻でも計算して結果が変わるかどうかを確かめてください",
          en: "Approximate time: the time recorded in a maternal and child health handbook is usually the most reliable source. If you only know \"early morning\", also run the times either side and check whether the result changes",
          hi: "अनुमानित समय: अस्पताल या मातृ-शिशु स्वास्थ्य पुस्तिका में लिखा समय सबसे विश्वसनीय होता है। यदि केवल 'सुबह-सुबह' पता हो, तो आगे-पीछे के समय से भी गणना करके देखें कि परिणाम बदलता है या नहीं",
          ko: "시각이 애매할 때: 모자수첩 등에 기록된 시각이 가장 확실한 단서입니다. '이른 아침' 정도만 안다면 앞뒤 시각으로도 계산해 결과가 바뀌는지 확인하세요",
        },
        {
          ja: "出生地とタイムゾーン：出生時刻は「生まれた土地の現地時刻」で入力します。海外生まれの方を日本時間に換算して入れると、月の位置がずれて別の月宿になることがあります",
          en: "Place of birth and time zone: enter the birth time as local time at the place of birth. Converting an overseas birth into Japan time before entering it shifts the Moon and can land it in a different nakshatra",
          hi: "जन्म स्थान और समय क्षेत्र: जन्म समय को जन्म स्थान के स्थानीय समय में दर्ज करें। विदेश में हुए जन्म को जापान समय में बदलकर डालने से चंद्रमा खिसक सकता है और नक्षत्र बदल सकता है",
          ko: "출생지와 시간대: 출생 시각은 '태어난 곳의 현지 시각'으로 입력합니다. 해외 출생을 일본 시간으로 환산해 넣으면 달의 위치가 어긋나 다른 수가 될 수 있습니다",
        },
        {
          ja: "星座が一つずれて見える場合：当サイトはラヒリ（チトラパクシャ）のアヤナムシャを用いたサイデリアル方式で、現在は西洋の星座（トロピカル方式）より約二十四度手前にずれます。西洋占星術の月星座と一つ違っていても、計算の誤りではありません",
          en: "If a sign looks one off: this site uses the sidereal zodiac with the Lahiri (Chitrapaksha) ayanamsa, currently about 24° behind the Western tropical zodiac. A Moon sign one sign earlier than your Western one is expected, not an error",
          hi: "राशि एक खिसकी दिखे: यह साइट लाहिड़ी (चित्रपक्ष) अयनांश के साथ निरयन (साइडेरियल) पद्धति अपनाती है, जो अभी पश्चिमी सायन राशिचक्र से लगभग 24° पीछे है। पश्चिमी चंद्र राशि से एक राशि का अंतर गलती नहीं है",
          ko: "별자리가 하나 어긋나 보일 때: 이 사이트는 라히리(치트라팍샤) 아야남샤를 쓰는 항성황도 방식이며, 현재 서양의 회귀황도보다 약 24도 뒤에 있습니다. 서양 점성술의 달 별자리와 하나 달라도 계산 오류가 아닙니다",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方と用語集",
        en: "Reading the result: a glossary",
        hi: "परिणाम कैसे पढ़ें: शब्दावली",
        ko: "결과 읽는 법과 용어집",
      },
      body: [
        {
          ja: "結果画面の一番上には「アシュタクータ合計点」が三十六点満点で表示され、その下に八項目が一行ずつ並びます。各行には項目名、得点と満点（例：3/5）、得点の割合を示すバー、そしてその項目が象徴するテーマとお二人それぞれの分類が「一人目 / 二人目」の順で表示されます。",
          en: "The top of the result shows the Ashtakoot total out of thirty-six, followed by one row for each of the eight kutas. Each row gives the kuta's name, its score over its maximum (for example 3/5), a bar showing the proportion, and the theme it stands for together with each person's classification, written \"first / second\".",
          hi: "परिणाम में सबसे ऊपर छत्तीस में से अष्टकूट कुल अंक दिखता है, उसके नीचे आठों कूट एक-एक पंक्ति में। हर पंक्ति में कूट का नाम, अंक और अधिकतम (जैसे 3/5), अनुपात दिखाने वाली पट्टी, तथा उस कूट का विषय और दोनों व्यक्तियों का वर्गीकरण 'पहला / दूसरा' क्रम में होता है।",
          ko: "결과 화면 맨 위에는 '아슈타쿠타 총점'이 36점 만점으로 표시되고, 그 아래 여덟 항목이 한 줄씩 나열됩니다. 각 줄에는 항목 이름, 점수와 만점(예: 3/5), 비율을 보여주는 막대, 그리고 그 항목의 주제와 두 사람 각각의 분류가 '첫 번째 / 두 번째' 순으로 표시됩니다.",
        },
        {
          ja: "ヴァシャ、ターラ、グラハ・マイトリでは「1.5」のような半点が出ることがあります。これは古典の配点表どおりの結果で、端数処理の誤差ではありません。また、バクートかナーディのどちらかが零点のときだけ、合計点の下に補足の注記が表示されます。",
          en: "Vashya, Tara and Graha Maitri can produce half points such as 1.5. That follows the classical scoring tables; it is not a rounding artefact. A short note appears under the total only when Bhakoot or Nadi scores zero.",
          hi: "वश्य, तारा और ग्रह मैत्री में 1.5 जैसे आधे अंक आ सकते हैं। यह शास्त्रीय अंक-तालिका के अनुसार है, गोलाई की त्रुटि नहीं। भकूट या नाड़ी में शून्य होने पर ही कुल अंक के नीचे एक टिप्पणी दिखाई देती है।",
          ko: "바샤, 타라, 그라하 마이트리에서는 '1.5' 같은 반점이 나올 수 있습니다. 고전 배점표대로의 결과이며 반올림 오차가 아닙니다. 또한 바쿠타나 나디 중 하나가 0점일 때만 총점 아래에 보충 설명이 표시됩니다.",
        },
        {
          ja: "具体例で見てみましょう（説明のための架空の組み合わせです）。例えば、一人目の月が牡羊座のアシュヴィニー、二人目の月が天秤座のスワーティだとします。この場合の合計は26.5点です。ガナは「Deva / Deva」で6/6、バクートは「7-7」（向かい合う星座）で7/7、ナーディは「Adi / Antya」で8/8と、配点の大きい項目はそろって満点です。一方、ヨーニは「Horse / Buffalo」で0/4、ターラは「6 / 5」で1.5/3でした。",
          en: "A worked illustration, using a made-up pairing: suppose the first person's Moon is in Aries in Ashwini and the second's is in Libra in Swati. The total comes to 26.5. Gana reads \"Deva / Deva\" for 6/6, Bhakoot \"7-7\" (opposite signs) for 7/7 and Nadi \"Adi / Antya\" for 8/8, so the heavy kutas are all full. Yoni, on the other hand, reads \"Horse / Buffalo\" for 0/4, and Tara \"6 / 5\" for 1.5/3.",
          hi: "एक काल्पनिक उदाहरण: मान लें पहले व्यक्ति का चंद्रमा मेष में अश्विनी में है और दूसरे का तुला में स्वाति में। कुल 26.5 आता है। गण 'Deva / Deva' से 6/6, भकूट '7-7' (आमने-सामने की राशियाँ) से 7/7 और नाड़ी 'Adi / Antya' से 8/8 — भारी कूट सभी पूर्ण हैं। वहीं योनि 'Horse / Buffalo' से 0/4 और तारा '6 / 5' से 1.5/3 है।",
          ko: "구체적인 예로 살펴보겠습니다(설명을 위한 가상의 조합입니다). 첫 번째 사람의 달이 양자리 아슈비니, 두 번째 사람의 달이 천칭자리 스바티라고 해 봅시다. 총점은 26.5점입니다. 가나는 'Deva / Deva'로 6/6, 바쿠타는 '7-7'(마주 보는 별자리)로 7/7, 나디는 'Adi / Antya'로 8/8이라 배점이 큰 항목은 모두 만점입니다. 반면 요니는 'Horse / Buffalo'로 0/4, 타라는 '6 / 5'로 1.5/3입니다.",
        },
        {
          ja: "この結果は「二十六点だから合格」と読むより、「気質や生活全体の調和を示す項目は満点で、本能的なペースの違いを示すヨーニだけが零点」と読むほうが実用的です。たとえば、休日の過ごし方やスキンシップの好みなど、ペースの違いが出やすい場面を事前に話題にしておく、といった使い方ができます。",
          en: "Rather than reading this as \"26 points, so it passes\", it is more useful to read it as \"the kutas for temperament and overall harmony are full, and only Yoni — differences in instinctive pace — is zero\". That suggests talking ahead of time about situations where pace tends to differ, such as how to spend days off or preferences around physical affection.",
          hi: "इसे '26 अंक, इसलिए उत्तीर्ण' पढ़ने के बजाय यह पढ़ना अधिक उपयोगी है कि 'स्वभाव और समग्र सामंजस्य के कूट पूर्ण हैं, केवल योनि — सहज गति का अंतर — शून्य है'। इससे छुट्टी कैसे बिताएँ या स्नेह-प्रदर्शन की पसंद जैसे विषयों पर पहले से बात करने का संकेत मिलता है।",
          ko: "이 결과는 '26점이니 합격'이라고 읽기보다 '기질과 생활 전반의 조화를 나타내는 항목은 만점이고, 본능적인 페이스 차이를 나타내는 요니만 0점'이라고 읽는 편이 실용적입니다. 예를 들어 휴일을 보내는 방식이나 스킨십 취향처럼 페이스 차이가 드러나기 쉬운 장면을 미리 이야기해 두는 식으로 활용할 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "アシュタクータ合計点：八項目の得点の合計（三十六点満点）。慣例的には十八点が目安とされますが、結論ではなく概観です",
          en: "Ashtakoot total: the sum of the eight kutas, out of 36. Eighteen is the conventional benchmark, but it is an overview, not a conclusion",
          hi: "अष्टकूट कुल अंक: आठ कूटों का योग (36 में से)। परंपरा में 18 को मानदंड माना जाता है, पर यह सार है, निष्कर्ष नहीं",
          ko: "아슈타쿠타 총점: 여덟 항목 점수의 합(36점 만점). 관례적으로 18점이 기준이지만 결론이 아니라 개관입니다",
        },
        {
          ja: "ヴァルナ（1点）：月星座による四分類。表示はBrahmin・Kshatriya・Vaishya・Shudraで、古典の規則に従い二人目の分類が一人目と同じかそれ以上なら1点です",
          en: "Varna (1 pt): a four-way grouping by Moon sign, shown as Brahmin, Kshatriya, Vaishya or Shudra. Following the classical rule, it scores 1 when the second person's group is equal to or above the first's",
          hi: "वर्ण (1 अंक): चंद्र राशि के अनुसार चार वर्ग — Brahmin, Kshatriya, Vaishya, Shudra। शास्त्रीय नियम से दूसरे व्यक्ति का वर्ग पहले के बराबर या ऊपर हो तो 1 अंक",
          ko: "바르나(1점): 달 별자리에 따른 네 분류. Brahmin·Kshatriya·Vaishya·Shudra로 표시되며, 고전 규칙에 따라 두 번째 사람의 분류가 첫 번째와 같거나 위면 1점입니다",
        },
        {
          ja: "ヴァシャ（2点）：月星座を四足獣（Chatushpada）・人（Manava）・水生（Jalachara）・野生（Vanachara）・虫（Keeta）の五群に分け、引き合う関係かどうかを見ます",
          en: "Vashya (2 pts): sorts Moon signs into five groups — quadruped (Chatushpada), human (Manava), water-dwelling (Jalachara), wild (Vanachara) and insect (Keeta) — and checks whether they draw to each other",
          hi: "वश्य (2 अंक): चंद्र राशियों को पाँच समूहों — चतुष्पद (Chatushpada), मानव (Manava), जलचर (Jalachara), वनचर (Vanachara), कीट (Keeta) — में बाँटकर परस्पर आकर्षण देखता है",
          ko: "바샤(2점): 달 별자리를 네발짐승(Chatushpada)·사람(Manava)·수생(Jalachara)·야생(Vanachara)·곤충(Keeta)의 다섯 무리로 나누어 서로 끌리는 관계인지 봅니다",
        },
        {
          ja: "ターラ（3点）：互いの月宿までの距離を九で割った余りを、両方向から見ます。表示の数字がその余りで、3・5・7は古典で避けられる数とされます",
          en: "Tara (3 pts): counts the distance from each person's nakshatra to the other's, in both directions, and takes the remainder after dividing by nine. The numbers shown are those remainders; 3, 5 and 7 are the classically unfavourable ones",
          hi: "तारा (3 अंक): दोनों दिशाओं से एक-दूसरे के नक्षत्र तक की दूरी को नौ से भाग देकर शेषफल देखता है। दिखाई गई संख्याएँ वही शेषफल हैं; 3, 5 और 7 शास्त्रीय रूप से प्रतिकूल माने जाते हैं",
          ko: "타라(3점): 서로의 수까지의 거리를 양방향으로 세어 9로 나눈 나머지를 봅니다. 표시되는 숫자가 그 나머지이며, 3·5·7은 고전에서 피하는 수입니다",
        },
        {
          ja: "ヨーニ（4点）：月宿ごとに割り当てられた動物（Horse＝馬、Elephant＝象、Serpent＝蛇など）で本能的なペースを見ます。同じ動物なら4点、古典で天敵とされる組み合わせは0点、それ以外は2点です",
          en: "Yoni (4 pts): reads instinctive pace through the animal assigned to each nakshatra (Horse, Elephant, Serpent and so on). The same animal scores 4, a classical natural-enemy pair scores 0, and anything else scores 2",
          hi: "योनि (4 अंक): हर नक्षत्र को दिए गए पशु (Horse, Elephant, Serpent आदि) से सहज गति देखता है। समान पशु पर 4, शास्त्रीय शत्रु-जोड़ी पर 0, अन्यथा 2 अंक",
          ko: "요니(4점): 수마다 배정된 동물(Horse=말, Elephant=코끼리, Serpent=뱀 등)로 본능적 페이스를 봅니다. 같은 동물이면 4점, 고전에서 천적으로 보는 조합은 0점, 그 외는 2점입니다",
        },
        {
          ja: "グラハ・マイトリ（5点）：月星座の支配星どうし（Sun・Moon・Mars・Mercury・Jupiter・Venus・Saturn）が友好・中立・敵対のどれにあたるかで、考え方の通じやすさを見ます",
          en: "Graha Maitri (5 pts): looks at whether the lords of the two Moon signs (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) are friendly, neutral or hostile, as a measure of how easily minds meet",
          hi: "ग्रह मैत्री (5 अंक): दोनों चंद्र राशियों के स्वामी (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) मित्र, सम या शत्रु हैं — इससे विचारों के मेल की सहजता देखी जाती है",
          ko: "그라하 마이트리(5점): 달 별자리 지배성끼리(Sun·Moon·Mars·Mercury·Jupiter·Venus·Saturn) 우호·중립·적대 중 어디에 해당하는지로 생각이 통하기 쉬운지를 봅니다",
        },
        {
          ja: "ガナ（6点）：月宿の気質をDeva（神）・Manushya（人）・Rakshasa（羅刹）の三つに分けます。「羅刹」は悪い人という意味ではなく、自立心が強く押しの強い気質を表す古典的な呼び名です",
          en: "Gana (6 pts): divides nakshatra temperament into Deva (divine), Manushya (human) and Rakshasa (demonic). Rakshasa does not mean a bad person; it is the classical label for an independent, forceful temperament",
          hi: "गण (6 अंक): नक्षत्र के स्वभाव को Deva (देव), Manushya (मनुष्य) और Rakshasa (राक्षस) में बाँटता है। राक्षस का अर्थ बुरा व्यक्ति नहीं, बल्कि स्वतंत्र और दृढ़ स्वभाव का शास्त्रीय नाम है",
          ko: "가나(6점): 수의 기질을 Deva(신)·Manushya(사람)·Rakshasa(나찰) 셋으로 나눕니다. '나찰'은 나쁜 사람이라는 뜻이 아니라 독립심이 강하고 추진력 있는 기질을 가리키는 고전적 명칭입니다",
        },
        {
          ja: "バクート（7点）：二人の月星座が互いに何番目にあたるかを「5-9」のように表示します。6-8、5-9、2-12の関係なら0点、それ以外は7点です",
          en: "Bhakoot (7 pts): shows how many signs apart the two Moon signs are, counted both ways, as in \"5-9\". A 6-8, 5-9 or 2-12 relationship scores 0; anything else scores 7",
          hi: "भकूट (7 अंक): दोनों चंद्र राशियाँ एक-दूसरे से कितनी दूर हैं, यह दोनों ओर से '5-9' जैसे दिखाता है। 6-8, 5-9 या 2-12 संबंध में 0, अन्यथा 7 अंक",
          ko: "바쿠타(7점): 두 달 별자리가 서로 몇 번째인지를 '5-9'처럼 표시합니다. 6-8, 5-9, 2-12 관계면 0점, 그 외는 7점입니다",
        },
        {
          ja: "ナーディ（8点）：月宿をAdi・Madhya・Antyaの三つに分けた体質の指標です。二人が異なれば8点、同じなら0点です",
          en: "Nadi (8 pts): a constitutional indicator dividing the nakshatras into Adi, Madhya and Antya. Different nadis score 8; the same nadi scores 0",
          hi: "नाड़ी (8 अंक): नक्षत्रों को Adi, Madhya और Antya में बाँटने वाला शारीरिक संकेतक। भिन्न नाड़ी पर 8, समान पर 0 अंक",
          ko: "나디(8점): 수를 Adi·Madhya·Antya 셋으로 나눈 체질 지표입니다. 두 사람이 다르면 8점, 같으면 0점입니다",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術の相性占いとの違い",
        en: "How this differs from Western synastry",
        hi: "पश्चिमी सिनैस्ट्री से अंतर",
        ko: "서양 점성술 궁합과의 차이",
      },
      body: [
        {
          ja: "西洋占星術の相性占い（シナストリー）は、太陽・金星・火星などの惑星どうしが作る角度（アスペクト）を一つずつ読み、点数ではなく文章で傾向を描くのが一般的です。基準となる星座も、春分点を起点とするトロピカル方式です。",
          en: "Western synastry usually reads the angles (aspects) formed between planets such as the Sun, Venus and Mars one by one, and describes tendencies in words rather than a score. Its signs follow the tropical zodiac, measured from the spring equinox.",
          hi: "पश्चिमी सिनैस्ट्री आम तौर पर सूर्य, शुक्र, मंगल आदि ग्रहों के बीच बनने वाले कोणों (दृष्टियों) को एक-एक कर पढ़ती है और अंक के बजाय शब्दों में प्रवृत्तियाँ बताती है। इसकी राशियाँ वसंत विषुव से मापी गई सायन पद्धति पर आधारित हैं।",
          ko: "서양 점성술의 궁합(시나스트리)은 태양·금성·화성 등 행성끼리 이루는 각도(애스펙트)를 하나씩 읽고, 점수가 아니라 문장으로 경향을 그리는 것이 일반적입니다. 기준 별자리도 춘분점을 기점으로 하는 회귀황도 방식입니다.",
        },
        {
          ja: "インド占星術のアシュタクータは、恒星を基準にしたサイデリアル方式で月の星座と月宿を求め、決まった表に当てはめて点数化します。誰が計算しても同じ結果になる再現性の高さが特徴で、その分、二人のチャート全体を読むことは最初から想定していません。インドでも、点数の確認に続けて七室や金星などを読み合わせるのが一般的な流れです。",
          en: "Vedic Ashtakoot finds the Moon sign and nakshatra in the sidereal zodiac, fixed to the stars, and scores them against set tables. Its strength is reproducibility — anyone computing it gets the same answer — and by the same token it never set out to read two whole charts. In India, too, checking the score is usually followed by comparing the seventh house, Venus and the rest.",
          hi: "वैदिक अष्टकूट तारों पर आधारित निरयन राशिचक्र में चंद्र राशि और नक्षत्र निकालकर निश्चित तालिकाओं से अंक देता है। इसकी विशेषता पुनरुत्पादकता है — कोई भी गणना करे, परिणाम समान आता है — और इसी कारण यह पूरी दो कुंडलियाँ पढ़ने का दावा नहीं करता। भारत में भी अंक देखने के बाद सप्तम भाव, शुक्र आदि का मिलान करना सामान्य क्रम है।",
          ko: "베다 점성술의 아슈타쿠타는 항성을 기준으로 한 항성황도 방식으로 달 별자리와 수를 구하고, 정해진 표에 대입해 점수화합니다. 누가 계산해도 같은 결과가 나오는 재현성이 특징이며, 그만큼 두 사람의 차트 전체를 읽는 것은 처음부터 상정하지 않습니다. 인도에서도 점수를 확인한 뒤 7궁이나 금성 등을 맞춰 읽는 것이 일반적인 흐름입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "相性診断のよくある誤解",
        en: "Common misconceptions about compatibility scores",
        hi: "अनुकूलता अंकों के बारे में आम भ्रांतियाँ",
        ko: "궁합 점수에 관한 흔한 오해",
      },
      body: [
        {
          ja: "点数を見て不安になったり、逆に安心しすぎたりしないために、よく見られる思い込みを整理しておきます。",
          en: "So that a score neither worries you nor reassures you too much, here are the assumptions people most often bring to it.",
          hi: "ताकि अंक न तो आपको चिंतित करे और न ही अत्यधिक आश्वस्त, यहाँ लोगों की सबसे आम धारणाएँ दी गई हैं।",
          ko: "점수를 보고 불안해하거나 반대로 지나치게 안심하지 않도록, 흔한 생각들을 정리해 둡니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：十八点未満は「相性が悪い」。実際：十八点は慣例的な目安にすぎず、月の配置しか見ていません。点数が低いことは、話し合っておくとよいテーマが多いという程度の意味です",
          en: "Myth: under 18 means a bad match. In fact: 18 is only a conventional benchmark, and it looks at the Moon alone. A low score means, at most, that there are more themes worth talking through",
          hi: "भ्रांति: 18 से कम मतलब खराब मेल। वास्तव में: 18 केवल पारंपरिक मानदंड है और केवल चंद्रमा को देखता है। कम अंक का अर्थ अधिक से अधिक यह है कि बात करने योग्य विषय अधिक हैं",
          ko: "오해: 18점 미만은 '궁합이 나쁘다'. 실제: 18점은 관례적 기준일 뿐이며 달의 배치만 봅니다. 점수가 낮다는 것은 이야기해 두면 좋을 주제가 많다는 정도의 의미입니다",
        },
        {
          ja: "誤解：満点に近ければ何も心配いらない。実際：アシュタクータはお互いの成長の時期（ダシャー）や生活環境を見ていません。高得点でも、すれ違う時期はどの関係にもあります",
          en: "Myth: a near-perfect score means nothing to worry about. In fact: Ashtakoot does not look at each person's life periods (dashas) or circumstances. Every relationship has seasons of friction, high score or not",
          hi: "भ्रांति: लगभग पूर्ण अंक हो तो कोई चिंता नहीं। वास्तव में: अष्टकूट दशाओं या जीवन-परिस्थितियों को नहीं देखता। अंक कितने भी हों, हर संबंध में मतभेद के दौर आते हैं",
          ko: "오해: 만점에 가까우면 걱정할 것이 없다. 실제: 아슈타쿠타는 서로의 성장 시기(다샤)나 생활 환경을 보지 않습니다. 고득점이어도 엇갈리는 시기는 어느 관계에나 있습니다",
        },
        {
          ja: "誤解：ドーシャがあると結婚できない。実際：ドーシャは古典上の注意点を指す用語で、相殺される条件も複数記されています。関係の行方を決めるのはお二人自身です",
          en: "Myth: a dosha rules out marriage. In fact: dosha is a classical term for a point of caution, and the texts list several conditions that cancel it. Where a relationship goes is decided by the two people in it",
          hi: "भ्रांति: दोष हो तो विवाह नहीं हो सकता। वास्तव में: दोष एक शास्त्रीय सावधानी-बिंदु का नाम है और ग्रंथों में इसके निरसन की कई शर्तें हैं। संबंध की दिशा दोनों व्यक्ति स्वयं तय करते हैं",
          ko: "오해: 도샤가 있으면 결혼할 수 없다. 실제: 도샤는 고전상의 주의점을 가리키는 용어이며, 상쇄되는 조건도 여럿 기록되어 있습니다. 관계의 앞날을 정하는 것은 두 사람 자신입니다",
        },
        {
          ja: "誤解：西洋占星術の星座相性と同じ結果になるはず。実際：基準となる星座の取り方も、見ている要素も異なるため、結果が食い違うのは自然なことです",
          en: "Myth: it should match Western sign compatibility. In fact: the zodiac and the factors examined both differ, so disagreement between the two is natural",
          hi: "भ्रांति: परिणाम पश्चिमी राशि-मिलान जैसा ही होना चाहिए। वास्तव में: राशिचक्र और देखे जाने वाले तत्व दोनों भिन्न हैं, इसलिए परिणामों में अंतर स्वाभाविक है",
          ko: "오해: 서양 점성술 별자리 궁합과 같은 결과가 나와야 한다. 실제: 기준 별자리를 잡는 방식도, 보는 요소도 다르기 때문에 결과가 어긋나는 것은 자연스러운 일입니다",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on this",
        hi: "उपयोग से पहले",
        ko: "이용 시 유의사항",
      },
      body: [
        {
          ja: "この相性診断は、伝統的な計算法をもとにお二人の関係を振り返るきっかけとして、楽しみながらお使いいただくためのものです。結婚や交際、同居などの重要な決定を点数だけで下すことはお勧めしません。",
          en: "This compatibility check is meant to be enjoyed as a prompt for reflecting on a relationship, based on a traditional method. We do not recommend making important decisions about marriage, dating or living together on the score alone.",
          hi: "यह अनुकूलता जाँच पारंपरिक गणना पर आधारित है और संबंध पर विचार करने के एक आनंददायक साधन के रूप में है। विवाह, संबंध या साथ रहने जैसे महत्वपूर्ण निर्णय केवल अंकों के आधार पर लेने की हम सलाह नहीं देते।",
          ko: "이 궁합 진단은 전통적인 계산법을 바탕으로 두 사람의 관계를 돌아보는 계기로 즐겁게 이용하시기 위한 것입니다. 결혼, 교제, 동거 등 중요한 결정을 점수만으로 내리는 것은 권하지 않습니다.",
        },
        {
          ja: "占星術は医療・法律・金銭に関する専門的な助言に代わるものではありません。心身の不調や法的な問題、お金の判断については、それぞれの専門家にご相談ください。",
          en: "Astrology is not a substitute for professional medical, legal or financial advice. For health concerns, legal matters or money decisions, please consult a qualified professional.",
          hi: "ज्योतिष चिकित्सा, कानूनी या वित्तीय पेशेवर सलाह का विकल्प नहीं है। स्वास्थ्य, कानूनी मामलों या धन संबंधी निर्णयों के लिए योग्य विशेषज्ञ से परामर्श करें।",
          ko: "점성술은 의료·법률·금전에 관한 전문적인 조언을 대신하지 않습니다. 심신의 불편, 법적 문제, 금전 판단은 각 분야의 전문가와 상담해 주세요.",
        },
      ],
    },
    {
      heading: {
        ja: "あわせて読みたい関連ページ",
        en: "Related pages",
        hi: "संबंधित पृष्ठ",
        ko: "함께 보면 좋은 관련 페이지",
      },
      body: [
        {
          ja: "相性の点数をきっかけに、お二人の月や結婚に関わる配置をもう少し詳しく見たい方は、次のページもご覧ください。",
          en: "If the score makes you want to look more closely at each person's Moon or the placements tied to partnership, these pages are a good next step.",
          hi: "यदि अंक देखकर आप दोनों के चंद्रमा या विवाह से जुड़ी स्थितियों को और गहराई से देखना चाहें, तो ये पृष्ठ देखें।",
          ko: "궁합 점수를 계기로 두 사람의 달이나 결혼에 관련된 배치를 더 자세히 보고 싶다면 다음 페이지도 참고하세요.",
        },
      ],
      links: [
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ（月宿）を調べる",
            en: "Find your nakshatra",
            hi: "अपना नक्षत्र जानें",
            ko: "나의 낙샤트라 찾기",
          },
        },
        {
          href: "/tools/moon-sign",
          label: {
            ja: "月星座（チャンドラ・ラーシ）計算",
            en: "Moon sign (Chandra Rashi) calculator",
            hi: "चंद्र राशि कैलकुलेटर",
            ko: "달 별자리(찬드라 라시) 계산",
          },
        },
        {
          href: "/tools/mangal-dosha",
          label: {
            ja: "マンガラ・ドーシャを確認する",
            en: "Check Mangal dosha",
            hi: "मंगल दोष जाँचें",
            ko: "망갈 도샤 확인하기",
          },
        },
        {
          href: "/tools/sukuyo",
          label: {
            ja: "宿曜占星術で二十七宿を見る",
            en: "Sukuyō: the 27 lunar mansions",
            hi: "सुकुयो: 27 चंद्र भवन",
            ko: "숙요 점성술로 27수 보기",
          },
        },
        {
          href: "/nakshatras",
          label: {
            ja: "二十七のナクシャトラ一覧",
            en: "All 27 nakshatras",
            hi: "सभी 27 नक्षत्र",
            ko: "27 낙샤트라 목록",
          },
        },
      ],
    },
  ],
};
