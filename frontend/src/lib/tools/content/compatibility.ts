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
          ja: "八つの項目は、配点の小さい順に、ヴァルナ（一点）、ヴァシャ（二点）、ターラ（三点）、ヨーニ（四点）、グラハ・マイトリ（五点）、ガナ（六点）、バクート（七点）、ナーディ（八点）です。配点が大きいほど古典的に重視される項目で、合計三十六点のうち二十四点近くをバクートとナーディが占めていることからも、この二つが特別扱いされているのが分かります。",
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
  ],
};
