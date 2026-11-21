import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/birth-time-check.
 *
 * Written Japanese-first, matching sukuyo.ts and birth-chart.ts. What the
 * tool actually does (BirthTimeSensitivityPanel + lib/birth-time-sensitivity):
 * it computes seven charts evenly spaced across ±30 / ±60 / ±120 minutes of
 * the entered time and compares only the ascendant (Lagna) sign, flagging
 * the sample where the sign differs from the previous one. It does not check
 * the Moon's nakshatra or the dasha, and it is not rectification — the copy
 * below is careful to say so and points to the tools that do cover those.
 *
 * Samples carry their own calendar date (generateTimeSamples), so a window
 * crossing midnight computes the far side for the adjacent day.
 */
export const birthTimeCheckLongForm: ToolLongForm = {
  slug: "birth-time-check",
  sections: [
    {
      heading: {
        ja: "このツールでわかること：感度チェックとレクティフィケーションの違い",
        en: "What this tool tells you: a sensitivity check, not rectification",
        hi: "यह टूल क्या बताता है: संवेदनशीलता जाँच, जन्म समय शोधन नहीं",
        ko: "이 도구로 알 수 있는 것: 민감도 확인과 렉티피케이션의 차이",
      },
      body: [
        {
          ja: "インド占星術では、生まれた瞬間に東の地平線から昇っていた星座「ラグナ（アセンダント）」がチャート全体の基準になります。ラグナは一日で十二星座をひと回りするため、出生時刻が少しずれるだけで別の星座になることがあります。",
          en: "In Jyotish, the sign rising on the eastern horizon at the moment of birth — the Lagna, or ascendant — anchors the whole chart. Because the Lagna moves through all twelve signs in a single day, a small error in the birth time can put it in a different sign.",
          hi: "ज्योतिष में जन्म के क्षण पूर्वी क्षितिज पर उदित राशि — लग्न — पूरी कुंडली का आधार होती है। लग्न एक ही दिन में बारहों राशियों से गुज़रता है, इसलिए जन्म समय में थोड़ी-सी भूल भी उसे दूसरी राशि में ले जा सकती है।",
          ko: "인도 점성술에서는 태어난 순간 동쪽 지평선에서 떠오르던 별자리, 즉 라그나(상승궁)가 차트 전체의 기준이 됩니다. 라그나는 하루 동안 열두 별자리를 한 바퀴 돌기 때문에, 출생 시각이 조금만 어긋나도 다른 별자리가 될 수 있습니다.",
        },
        {
          ja: "このツールは、入力した時刻を中心に前後の幅（±30分・±60分・±120分）を均等に7つの時点に分け、それぞれでチャートを計算してラグナの星座を一覧にします。そのうえで、星座が切り替わる時点に印を付けます。",
          en: "The tool takes the time you enter as the centre, splits the window around it (±30, ±60 or ±120 minutes) into seven evenly spaced moments, computes a chart at each one and lists the ascendant sign for every moment. It then marks the point where the sign switches.",
          hi: "यह टूल आपके दर्ज किए समय को केंद्र मानकर उसके आगे-पीछे की सीमा (±30, ±60 या ±120 मिनट) को सात बराबर अंतराल वाले क्षणों में बाँटता है, हर क्षण की कुंडली बनाकर लग्न राशि की सूची दिखाता है, और जहाँ राशि बदलती है वहाँ निशान लगाता है।",
          ko: "이 도구는 입력한 시각을 중심으로 앞뒤 범위(±30분, ±60분, ±120분)를 균등한 7개 시점으로 나누고, 각 시점의 차트를 계산해 상승궁 별자리를 목록으로 보여 줍니다. 그리고 별자리가 바뀌는 지점에 표시를 합니다.",
        },
        {
          ja: "大切なのは、これが「正しい出生時刻を当てる」レクティフィケーション（出生時刻修正）ではない、という点です。人生の出来事から時刻を逆算するのではなく、「今わかっている時刻の不確かさが、ラグナに影響するかどうか」を確かめるための感度チェックです。",
          en: "Importantly, this is not rectification — it does not try to work out your true birth time from life events. It is a sensitivity check: it tells you whether the uncertainty in the time you already have is large enough to affect your Lagna.",
          hi: "ध्यान दें कि यह जन्म समय शोधन (रेक्टिफ़िकेशन) नहीं है — यह जीवन की घटनाओं से सही समय निकालने की कोशिश नहीं करता। यह एक संवेदनशीलता जाँच है, जो बताती है कि आपके पास मौजूद समय की अनिश्चितता लग्न को प्रभावित करने लायक है या नहीं।",
          ko: "중요한 점은 이것이 '정확한 출생 시각을 알아내는' 렉티피케이션(출생 시각 보정)이 아니라는 것입니다. 인생의 사건으로 시각을 역산하는 것이 아니라, 지금 알고 있는 시각의 불확실성이 라그나에 영향을 주는지 확인하는 민감도 확인입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方",
        en: "How to use it",
        hi: "उपयोग कैसे करें",
        ko: "사용 방법",
      },
      body: [
        {
          ja: "生年月日・出生時刻・出生地を入力し、時刻の不確かさに合わせて幅を選んでから「この範囲でチェックする」を押してください。計算は7回続けて行うため、結果が出るまで数秒かかることがあります。",
          en: "Enter your date, time and place of birth, choose the window that matches how unsure you are, and press \"Check across this window\". The tool computes seven charts in a row, so the result may take a few seconds.",
          hi: "जन्म तिथि, जन्म समय और जन्म स्थान दर्ज करें, अपनी अनिश्चितता के अनुसार सीमा चुनें और \"इस सीमा में जाँचें\" दबाएँ। टूल लगातार सात कुंडलियाँ बनाता है, इसलिए परिणाम आने में कुछ सेकंड लग सकते हैं।",
          ko: "생년월일, 출생 시각, 출생지를 입력하고 시각의 불확실성에 맞는 범위를 고른 뒤 '이 범위로 확인하기'를 누르세요. 차트를 연속으로 일곱 번 계산하므로 결과가 나오기까지 몇 초 걸릴 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "時刻は、最も可能性が高いと思う時刻を中心に入力します。「朝の6時ごろ」と聞いているなら6:00を入れ、幅で前後をカバーします。",
          en: "Enter the most likely time as the centre. If you were told \"around 6 in the morning\", enter 6:00 and let the window cover either side.",
          hi: "सबसे संभावित समय को केंद्र के रूप में दर्ज करें। यदि आपको \"सुबह लगभग 6 बजे\" बताया गया है, तो 6:00 दर्ज करें और सीमा को दोनों ओर का ध्यान रखने दें।",
          ko: "가장 가능성이 높다고 생각하는 시각을 중심으로 입력하세요. '아침 6시쯤'이라고 들었다면 6:00을 넣고 범위로 앞뒤를 커버합니다.",
        },
        {
          ja: "幅の目安：記録が分単位で残っているなら±30分、「何時ごろ」という記憶なら±60分、「午前中」程度しかわからないなら±120分が出発点になります。",
          en: "Choosing a window: ±30 minutes if the record gives an exact minute, ±60 for an \"around such-and-such o'clock\" memory, and ±120 if all you know is \"sometime in the morning\".",
          hi: "सीमा चुनना: यदि रिकॉर्ड में मिनट तक समय है तो ±30 मिनट, \"लगभग इतने बजे\" जैसी याद हो तो ±60, और केवल \"सुबह किसी समय\" पता हो तो ±120 से शुरू करें।",
          ko: "범위 기준: 기록에 분 단위까지 남아 있다면 ±30분, '몇 시쯤'이라는 기억이라면 ±60분, '오전 중' 정도만 안다면 ±120분이 출발점입니다.",
        },
        {
          ja: "時刻は出生地の現地時刻で入力します。海外で生まれた方は、日本時間に換算せず、生まれた場所の時刻をそのまま入れてください。",
          en: "Enter the time as local time at the place of birth. If you were born abroad, do not convert it to Japan time — enter the clock time where you were born.",
          hi: "समय को जन्म स्थान के स्थानीय समय में दर्ज करें। विदेश में जन्म हुआ हो तो उसे जापान के समय में न बदलें — जहाँ जन्म हुआ वहाँ की घड़ी का समय दर्ज करें।",
          ko: "시각은 출생지의 현지 시각으로 입력합니다. 해외에서 태어났다면 일본 시간으로 환산하지 말고 태어난 곳의 시각을 그대로 넣으세요.",
        },
        {
          ja: "1948年から1951年の夏に日本で生まれた方は、当時サマータイムが実施されていたため、記録された時刻が1時間進んでいる可能性があります。迷う場合は±60分以上の幅で確かめると安心です。",
          en: "Japan observed daylight saving time in the summers of 1948 to 1951, so a birth recorded in that period may be one hour ahead of standard time. If in doubt, check with a window of at least ±60 minutes.",
          hi: "जापान में 1948 से 1951 की गर्मियों में डेलाइट सेविंग टाइम लागू था, इसलिए उस अवधि का दर्ज समय मानक समय से एक घंटा आगे हो सकता है। संदेह हो तो कम से कम ±60 मिनट की सीमा से जाँचें।",
          ko: "일본은 1948년부터 1951년 여름까지 서머타임을 실시했기 때문에, 그 시기에 기록된 출생 시각은 표준시보다 1시간 앞서 있을 수 있습니다. 확신이 없다면 ±60분 이상의 범위로 확인해 보세요.",
        },
        {
          ja: "幅が午前0時をまたぐ場合（例：23:30の±60分）は、日付をまたいだ側の時刻を自動的に翌日または前日の日付で計算し、表に「翌日」「前日」と表示します。",
          en: "If the window crosses midnight (for example 23:30 ±60 minutes), times on the far side of midnight are automatically calculated for the next or previous day and marked as such in the table.",
          hi: "यदि सीमा आधी रात को पार करती है (जैसे 23:30 ±60 मिनट), तो आधी रात के पार वाले समय स्वतः अगली या पिछली तिथि से गणना होते हैं और तालिका में चिह्नित होते हैं।",
          ko: "범위가 자정을 넘는 경우(예: 23:30 ±60분), 자정 너머의 시각은 자동으로 다음 날 또는 전날 날짜로 계산되며 표에 표시됩니다.",
        },
        {
          ja: "このサイトはインド占星術の恒星黄道（ラヒリ・アヤナムシャ）で計算します。西洋占星術の「アセンダント」とは基準が約24度ずれているため、西洋式の結果よりひとつ前の星座になることがよくあります。",
          en: "This site calculates in the sidereal zodiac with the Lahiri ayanamsa. Its reference point sits about 24° away from the tropical zodiac used in Western astrology, so the ascendant here is often one sign earlier than a Western result.",
          hi: "यह साइट लाहिड़ी अयनांश के साथ निरयन (साइडेरियल) राशिचक्र में गणना करती है। इसका संदर्भ बिंदु पश्चिमी ज्योतिष के सायन राशिचक्र से लगभग 24° अलग है, इसलिए यहाँ का लग्न अक्सर पश्चिमी परिणाम से एक राशि पहले होता है।",
          ko: "이 사이트는 라히리 아야남샤를 쓰는 항성 황도로 계산합니다. 서양 점성술의 회귀 황도와 기준이 약 24도 차이 나기 때문에, 여기의 상승궁은 서양식 결과보다 한 별자리 앞이 되는 경우가 많습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方",
        en: "How to read the result",
        hi: "परिणाम कैसे पढ़ें",
        ko: "결과 읽는 법",
      },
      body: [
        {
          ja: "結果は「時刻」と「アセンダント」の二列の表で表示されます。表の下には、範囲全体で星座が変わらなかったか、何回変わったかをまとめた一文が出ます。",
          en: "The result is a two-column table of time and ascendant. Below it, one sentence sums up whether the sign stayed the same across the whole window or how many times it changed.",
          hi: "परिणाम समय और लग्न की दो कॉलम वाली तालिका के रूप में आता है। उसके नीचे एक वाक्य बताता है कि पूरी सीमा में राशि समान रही या कितनी बार बदली।",
          ko: "결과는 '시각'과 '상승궁' 두 열의 표로 표시됩니다. 표 아래에는 범위 전체에서 별자리가 그대로였는지, 몇 번 바뀌었는지를 요약한 문장이 나옵니다.",
        },
        {
          ja: "例えば、出生時刻を「8:00ごろ」として±60分で調べたとします（説明用の架空の例です）。7:00から8:00までは獅子座、8:20から9:00までは乙女座と表示され、8:20の行に「← ここで変化」と印が付いたなら、境目は8:00から8:20のあいだにあります。この場合、記録が8:10より前か後かでラグナが変わるため、時刻をもう少し確かめる価値があります。",
          en: "For example, suppose you check \"around 8:00\" with a ±60-minute window (an illustrative, made-up case). If 7:00 to 8:00 show Leo, 8:20 to 9:00 show Virgo, and the 8:20 row carries the \"← changes here\" flag, the boundary lies somewhere between 8:00 and 8:20. Whether your record says before or after about 8:10 then decides your Lagna, so it is worth pinning the time down further.",
          hi: "उदाहरण के लिए, मान लीजिए आप \"लगभग 8:00\" को ±60 मिनट की सीमा से जाँचते हैं (यह समझाने के लिए काल्पनिक उदाहरण है)। यदि 7:00 से 8:00 तक सिंह, 8:20 से 9:00 तक कन्या दिखे और 8:20 वाली पंक्ति पर \"← यहाँ बदलता है\" लिखा हो, तो सीमा-रेखा 8:00 और 8:20 के बीच है। तब आपका समय लगभग 8:10 से पहले है या बाद में, यही लग्न तय करता है, इसलिए समय को और पक्का करना उपयोगी है।",
          ko: "예를 들어 출생 시각을 '8:00쯤'으로 하고 ±60분으로 확인했다고 합시다(설명을 위한 가상의 예입니다). 7:00부터 8:00까지는 사자자리, 8:20부터 9:00까지는 처녀자리로 나오고 8:20 행에 '← 여기서 변화' 표시가 붙었다면, 경계는 8:00과 8:20 사이에 있습니다. 이 경우 기록이 8:10쯤보다 앞인지 뒤인지에 따라 라그나가 달라지므로 시각을 더 확인해 볼 가치가 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "時刻：計算した7つの時点です。幅を等分した時刻なので、±60分なら20分おき、±120分なら40分おきになります。",
          en: "Time: the seven moments that were computed. They split the window evenly — every 20 minutes for ±60, every 40 minutes for ±120.",
          hi: "समय: जिन सात क्षणों की गणना हुई। ये सीमा को बराबर बाँटते हैं — ±60 के लिए हर 20 मिनट, ±120 के लिए हर 40 मिनट।",
          ko: "시각: 계산한 7개 시점입니다. 범위를 균등하게 나눈 것이므로 ±60분이면 20분 간격, ±120분이면 40분 간격입니다.",
        },
        {
          ja: "アセンダント（ラグナ）：その時刻に東の地平線から昇っていた星座（恒星黄道）です。チャートの第1室になり、十二の室の配置はここから決まります。",
          en: "Ascendant (Lagna): the sidereal sign rising on the eastern horizon at that moment. It becomes the first house, and the layout of all twelve houses follows from it.",
          hi: "लग्न: उस क्षण पूर्वी क्षितिज पर उदित निरयन राशि। यही पहला भाव बनती है और बारहों भावों की व्यवस्था इसी से तय होती है।",
          ko: "상승궁(라그나): 그 시각에 동쪽 지평선에서 떠오르던 별자리(항성 황도)입니다. 차트의 제1하우스가 되며, 열두 하우스의 배치가 여기서 정해집니다.",
        },
        {
          ja: "「← ここで変化」：ひとつ前の時刻と星座が違う行に付く印です。実際の境目は、その行とひとつ前の行のあいだのどこかにあります。",
          en: "\"← changes here\": the flag on a row whose sign differs from the row before. The actual boundary lies somewhere between that row and the previous one.",
          hi: "\"← यहाँ बदलता है\": उस पंक्ति पर लगा निशान जिसकी राशि पिछली पंक्ति से अलग है। वास्तविक सीमा-रेखा उस पंक्ति और पिछली पंक्ति के बीच कहीं होती है।",
          ko: "'← 여기서 변화': 바로 앞 시각과 별자리가 다른 행에 붙는 표시입니다. 실제 경계는 그 행과 앞 행 사이 어딘가에 있습니다.",
        },
        {
          ja: "まとめの一文：星座が変わらなければ「この配置に関しては時刻の不確かさは影響しない」、変わる場合はその回数と「正確な時刻が通常より重要」という旨が表示されます。",
          en: "Summary line: if the sign never changes it says the uncertainty does not affect this placement; if it does change, it gives the number of changes and notes that the exact time matters more than usual.",
          hi: "सारांश वाक्य: यदि राशि नहीं बदलती तो बताया जाता है कि अनिश्चितता इस स्थिति को प्रभावित नहीं करती; यदि बदलती है तो बदलाव की संख्या और यह कि सटीक समय सामान्य से अधिक मायने रखता है।",
          ko: "요약 문장: 별자리가 바뀌지 않으면 '이 배치에 관해서는 시각의 불확실성이 영향을 주지 않는다'고, 바뀌면 그 횟수와 함께 '정확한 시각이 평소보다 중요하다'는 내용이 표시됩니다.",
        },
      ],
    },
    {
      heading: {
        ja: "出生時刻の記録を探す方法（日本の場合）",
        en: "Where to find a recorded birth time (in Japan)",
        hi: "दर्ज जन्म समय कहाँ खोजें (जापान में)",
        ko: "출생 시각 기록을 찾는 방법(일본의 경우)",
      },
      body: [
        {
          ja: "チェックの結果、境目が範囲内にあるとわかったら、まずは記録を探すのがいちばん確実です。日本では、次のような場所に分単位の時刻が残っていることがあります。",
          en: "If the check shows a boundary inside your window, the most reliable next step is to look for a record. In Japan, the time to the minute is often written down in places like these.",
          hi: "यदि जाँच में सीमा-रेखा आपकी सीमा के भीतर दिखे, तो सबसे भरोसेमंद अगला कदम कोई रिकॉर्ड खोजना है। जापान में मिनट तक का समय अक्सर इन जगहों पर लिखा मिलता है।",
          ko: "확인 결과 경계가 범위 안에 있다면, 기록을 찾는 것이 가장 확실한 다음 단계입니다. 일본에서는 다음과 같은 곳에 분 단위 시각이 남아 있는 경우가 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "母子健康手帳（母子手帳）：出産の状態を記録する欄に、出生の日時が時・分まで書かれていることが多く、最初に確認したい資料です。",
          en: "Maternal and Child Health Handbook (boshi techō): the section recording the delivery usually gives the date and time of birth to the minute, so it is the first thing to check.",
          hi: "मातृ एवं शिशु स्वास्थ्य पुस्तिका (बोशी तेचो): प्रसव के विवरण वाले भाग में अक्सर जन्म की तिथि और समय मिनट तक लिखा होता है, इसलिए इसे सबसे पहले देखें।",
          ko: "모자건강수첩(모자수첩): 출산 상황을 기록하는 칸에 출생 일시가 시·분까지 적혀 있는 경우가 많아 가장 먼저 확인할 자료입니다.",
        },
        {
          ja: "へその緒の箱や命名書：へその緒を納めた桐箱などに、出生日時や体重が書き添えられていることがあります。",
          en: "Umbilical-cord keepsake box or naming certificate: the small wooden box many Japanese families keep for the umbilical cord sometimes has the date and time of birth written on it.",
          hi: "नाल (अम्बिलिकल कॉर्ड) की डिब्बी या नामकरण पत्र: कई जापानी परिवार नाल को लकड़ी की छोटी डिब्बी में रखते हैं, जिस पर कभी-कभी जन्म तिथि और समय लिखा होता है।",
          ko: "탯줄 상자나 명명서: 탯줄을 보관하는 오동나무 상자 등에 출생 일시나 체중이 함께 적혀 있는 경우가 있습니다.",
        },
        {
          ja: "出生届・出生証明書：出生届と一体になった出生証明書には、医師や助産師が出生の時刻を記入します。戸籍謄本には時刻が載らないため、届書の記載事項証明書を役所や法務局に問い合わせる方法もありますが、請求できる条件や保存期間には制限があります。",
          en: "Birth notification and birth certificate: the doctor or midwife writes the time of birth on the certificate attached to the birth notification. The family register (koseki) does not show the time, so you can ask the municipal office or Legal Affairs Bureau about a certified copy of the notification, though eligibility and retention periods are limited.",
          hi: "जन्म सूचना और जन्म प्रमाण पत्र: जन्म सूचना के साथ जुड़े प्रमाण पत्र पर डॉक्टर या दाई जन्म का समय लिखते हैं। पारिवारिक रजिस्टर (कोसेकी) में समय नहीं होता, इसलिए आप नगर कार्यालय या विधि मामलों के ब्यूरो से सूचना की प्रमाणित प्रति के बारे में पूछ सकते हैं, हालाँकि पात्रता और संरक्षण अवधि सीमित है।",
          ko: "출생신고서·출생증명서: 출생신고서와 한 장으로 된 출생증명서에는 의사나 조산사가 출생 시각을 기입합니다. 호적등본에는 시각이 실리지 않으므로 관공서나 법무국에 신고서 기재사항 증명서를 문의하는 방법도 있지만, 청구 조건과 보존 기간에는 제한이 있습니다.",
        },
        {
          ja: "出産した病院・産院の記録：分娩記録に時刻が残っている場合があります。ただし保存期間があるため、年数がたっていると残っていないこともあります。",
          en: "Records at the hospital or maternity clinic: the delivery record may hold the time, but such records are kept only for a limited period and may no longer exist for older births.",
          hi: "जिस अस्पताल या प्रसूति क्लिनिक में जन्म हुआ, उसके रिकॉर्ड: प्रसव रिकॉर्ड में समय हो सकता है, पर ये सीमित समय तक ही रखे जाते हैं और पुराने जन्मों के लिए शायद उपलब्ध न हों।",
          ko: "출산한 병원·산부인과 기록: 분만 기록에 시각이 남아 있을 수 있습니다. 다만 보존 기간이 있어 오래되었다면 남아 있지 않을 수도 있습니다.",
        },
        {
          ja: "家族の記憶やアルバム：記憶をたどるときは「朝食の前だった」「夜勤の交代時刻だった」など、出来事と結びつけて思い出してもらうと幅を狭めやすくなります。",
          en: "Family memories and baby albums: when asking relatives, tying the birth to an event — \"before breakfast\", \"just as the night shift changed\" — often narrows the window.",
          hi: "परिवार की यादें और एल्बम: रिश्तेदारों से पूछते समय जन्म को किसी घटना से जोड़ें — \"नाश्ते से पहले\", \"रात की पाली बदलते समय\" — इससे सीमा अक्सर छोटी हो जाती है।",
          ko: "가족의 기억이나 앨범: 기억을 떠올릴 때 '아침 식사 전이었다', '야간 근무 교대 시각이었다'처럼 사건과 연결해 떠올리면 범위를 좁히기 쉽습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ラグナ以外への影響：月のナクシャトラとダシャー",
        en: "Beyond the Lagna: the Moon's nakshatra and the dasha",
        hi: "लग्न से आगे: चंद्र नक्षत्र और दशा",
        ko: "라그나 이외의 영향: 달의 낙샤트라와 다샤",
      },
      body: [
        {
          ja: "このツールが比較するのはラグナの星座だけです。月の位置やダシャーは表示しませんが、出生時刻のずれはそれらにも少しずつ影響します。",
          en: "This tool compares only the ascendant sign. It does not show the Moon or the dasha, but an error in the birth time affects those too, just more slowly.",
          hi: "यह टूल केवल लग्न राशि की तुलना करता है। यह चंद्रमा या दशा नहीं दिखाता, पर जन्म समय की भूल उन पर भी असर डालती है, बस धीरे-धीरे।",
          ko: "이 도구가 비교하는 것은 라그나의 별자리뿐입니다. 달의 위치나 다샤는 표시하지 않지만, 출생 시각의 어긋남은 그것들에도 조금씩 영향을 줍니다.",
        },
        {
          ja: "月は1時間におよそ0.5度進み、ひとつのナクシャトラ（13度20分）を通過するのに約1日かかります。そのため、月がナクシャトラの境目近くにいる場合に限り、1〜2時間のずれで月のナクシャトラが変わることがあります。",
          en: "The Moon moves roughly half a degree an hour and takes about a day to cross one nakshatra (13°20′). Only when the Moon sits near a nakshatra boundary can an error of an hour or two change your Moon nakshatra.",
          hi: "चंद्रमा प्रति घंटे लगभग आधा अंश चलता है और एक नक्षत्र (13°20′) पार करने में लगभग एक दिन लेता है। इसलिए केवल तब जब चंद्रमा नक्षत्र की सीमा के पास हो, एक-दो घंटे की भूल चंद्र नक्षत्र बदल सकती है।",
          ko: "달은 1시간에 약 0.5도 움직이며 낙샤트라 하나(13도 20분)를 지나는 데 약 하루가 걸립니다. 그래서 달이 낙샤트라 경계 가까이에 있을 때만 1~2시간의 어긋남으로 달의 낙샤트라가 바뀔 수 있습니다.",
        },
        {
          ja: "ヴィムショッタリ・ダシャーは、月のナクシャトラの支配星から始まる120年の周期です。最初のダシャーの残り期間は月がナクシャトラのどこにいるかで決まるため、時刻が1時間ずれると、各ダシャーの切り替わり時期が数か月単位で前後することがあります。ナクシャトラ自体が変われば、始まりのダシャーそのものが変わります。",
          en: "Vimshottari dasha is a 120-year cycle that starts from the lord of the Moon's nakshatra. The balance of the first dasha depends on how far the Moon has travelled through that nakshatra, so a one-hour error can shift every dasha change by a matter of months. If the nakshatra itself changes, the starting dasha changes too.",
          hi: "विंशोत्तरी दशा 120 वर्ष का चक्र है जो चंद्र नक्षत्र के स्वामी से शुरू होता है। पहली दशा का शेष भाग इस पर निर्भर करता है कि चंद्रमा उस नक्षत्र में कितना आगे है, इसलिए एक घंटे की भूल हर दशा-परिवर्तन को कुछ महीनों तक आगे-पीछे कर सकती है। नक्षत्र ही बदल जाए तो आरंभिक दशा भी बदल जाती है।",
          ko: "빔쇼타리 다샤는 달의 낙샤트라 지배성에서 시작하는 120년 주기입니다. 첫 다샤의 남은 기간은 달이 낙샤트라의 어디쯤에 있는지로 정해지므로, 시각이 1시간 어긋나면 각 다샤의 전환 시기가 몇 개월 단위로 앞뒤로 움직일 수 있습니다. 낙샤트라 자체가 바뀌면 시작 다샤도 바뀝니다.",
        },
        {
          ja: "気になる方は、このツールで確認した範囲の最初と最後の時刻を、ナクシャトラ検索やダシャー計算機にそれぞれ入力して見比べてみてください。",
          en: "If you want to check, enter the earliest and latest times of your window into the nakshatra finder and the dasha calculator and compare the two results.",
          hi: "यदि आप जाँचना चाहें, तो अपनी सीमा का सबसे पहला और सबसे आखिरी समय नक्षत्र खोजक और दशा कैलकुलेटर में अलग-अलग दर्ज करके दोनों परिणामों की तुलना करें।",
          ko: "궁금하다면 이 도구로 확인한 범위의 처음과 마지막 시각을 낙샤트라 찾기와 다샤 계산기에 각각 입력해 비교해 보세요.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋占星術のアセンダントとの違い",
        en: "Background: how this differs from the Western ascendant",
        hi: "पृष्ठभूमि: पश्चिमी लग्न से अंतर",
        ko: "배경 지식: 서양 점성술의 어센던트와의 차이",
      },
      body: [
        {
          ja: "西洋占星術でもアセンダントは重視されますが、インド占星術ではラグナの星座がそのまま第1室となり、以降の室も星座単位で並ぶことが多いため、ラグナの星座が変わるとすべての室の意味づけがひとつずつずれます。出生時刻の正確さが、西洋式以上に結果全体を左右しやすいのです。",
          en: "Western astrology values the ascendant too, but in Jyotish the Lagna sign commonly becomes the whole first house, with the other houses following sign by sign. When the Lagna sign changes, every house shifts by one, so the accuracy of the birth time tends to sway the whole reading even more than in Western practice.",
          hi: "पश्चिमी ज्योतिष में भी लग्न महत्वपूर्ण है, पर ज्योतिष में लग्न राशि आमतौर पर पूरा पहला भाव बन जाती है और बाकी भाव राशि-दर-राशि आते हैं। लग्न राशि बदलने पर हर भाव एक स्थान खिसक जाता है, इसलिए जन्म समय की सटीकता पूरे फलादेश को पश्चिमी पद्धति से भी अधिक प्रभावित करती है।",
          ko: "서양 점성술에서도 어센던트를 중시하지만, 인도 점성술에서는 라그나의 별자리가 그대로 제1하우스가 되고 이후 하우스도 별자리 단위로 이어지는 경우가 많아, 라그나 별자리가 바뀌면 모든 하우스의 의미가 하나씩 밀립니다. 출생 시각의 정확도가 서양식보다 결과 전체를 더 크게 좌우하기 쉽습니다.",
        },
        {
          ja: "また、ラグナがひとつの星座にとどまる時間は一定ではありません。日本の緯度では、速く昇る星座で1時間半弱、ゆっくり昇る星座で2時間半近くと差があり、同じ「±60分」でも境目にかかるかどうかは人によって異なります。だからこそ、一般論ではなく自分のデータで確かめる意味があります。",
          en: "The time the Lagna spends in one sign is also not constant. At Japan's latitudes it ranges from just under an hour and a half for fast-rising signs to nearly two and a half hours for slow-rising ones, so the same ±60 minutes may or may not cross a boundary depending on the person. That is why it is worth checking your own data rather than relying on a rule of thumb.",
          hi: "लग्न एक राशि में कितना समय रहता है, यह भी स्थिर नहीं है। जापान के अक्षांश पर तेज़ी से उदित होने वाली राशियों में यह डेढ़ घंटे से कुछ कम और धीमी राशियों में लगभग ढाई घंटे तक होता है, इसलिए वही ±60 मिनट किसी के लिए सीमा पार करता है और किसी के लिए नहीं। इसीलिए सामान्य नियम के बजाय अपने डेटा से जाँचना सार्थक है।",
          ko: "또한 라그나가 한 별자리에 머무는 시간은 일정하지 않습니다. 일본의 위도에서는 빨리 떠오르는 별자리가 1시간 반 조금 못 되고, 천천히 떠오르는 별자리는 2시간 반 가까이 되어, 같은 ±60분이라도 경계에 걸리는지는 사람마다 다릅니다. 그래서 일반론이 아니라 자신의 데이터로 확인하는 의미가 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解",
        en: "Common misconceptions",
        hi: "आम भ्रांतियाँ",
        ko: "자주 하는 오해",
      },
      body: [
        {
          ja: "出生時刻の不確かさについては、次のような思い込みがよく見られます。",
          en: "A few assumptions about uncertain birth times come up again and again.",
          hi: "अनिश्चित जन्म समय के बारे में कुछ धारणाएँ बार-बार सामने आती हैं।",
          ko: "출생 시각의 불확실성에 대해서는 다음과 같은 오해가 자주 보입니다.",
        },
      ],
      bullets: [
        {
          ja: "「時刻が不明なら占星術は使えない」→ 惑星の星座や多くの場合の月のナクシャトラは時刻がなくてもほぼ決まります。影響を受けやすいのは主にラグナと室の配置です。",
          en: "\"Without a birth time, astrology is useless\" — the planets' signs, and in most cases the Moon's nakshatra, are settled even without a time. What is most exposed is the Lagna and the house layout.",
          hi: "\"जन्म समय के बिना ज्योतिष बेकार है\" — ग्रहों की राशियाँ और अधिकांश मामलों में चंद्र नक्षत्र समय के बिना भी लगभग तय रहते हैं। सबसे अधिक प्रभावित लग्न और भावों की व्यवस्था होती है।",
          ko: "'시각을 모르면 점성술을 쓸 수 없다' → 행성의 별자리와 대부분의 경우 달의 낙샤트라는 시각이 없어도 거의 정해집니다. 영향을 받기 쉬운 것은 주로 라그나와 하우스 배치입니다.",
        },
        {
          ja: "「30分くらいのずれなら関係ない」→ 境目の近くなら数分でもラグナが変わります。逆に境目から遠ければ、2時間の幅でも変わらないことがあります。",
          en: "\"Half an hour either way doesn't matter\" — near a boundary, a few minutes can change the Lagna; far from one, even a two-hour window may change nothing.",
          hi: "\"आधे घंटे का अंतर मायने नहीं रखता\" — सीमा के पास कुछ मिनट भी लग्न बदल सकते हैं; सीमा से दूर हों तो दो घंटे की सीमा में भी कुछ न बदले।",
          ko: "'30분 정도 어긋나는 건 상관없다' → 경계 근처라면 몇 분 만에도 라그나가 바뀝니다. 반대로 경계에서 멀다면 2시간 범위에서도 바뀌지 않을 수 있습니다.",
        },
        {
          ja: "「このツールで正しい時刻がわかる」→ このツールは時刻を推定しません。わかるのは「不確かさが影響するかどうか」と「境目がおおよそどこにあるか」までです。",
          en: "\"This tool finds my correct time\" — it does not estimate the time. It tells you whether the uncertainty matters and roughly where the boundary lies.",
          hi: "\"यह टूल मेरा सही समय बता देगा\" — यह समय का अनुमान नहीं लगाता। यह केवल बताता है कि अनिश्चितता मायने रखती है या नहीं और सीमा-रेखा लगभग कहाँ है।",
          ko: "'이 도구로 정확한 시각을 알 수 있다' → 이 도구는 시각을 추정하지 않습니다. 알 수 있는 것은 '불확실성이 영향을 주는지'와 '경계가 대략 어디에 있는지'까지입니다.",
        },
        {
          ja: "「西洋占星術と星座が違うのは計算ミス」→ 恒星黄道と回帰黄道の基準の違いによるもので、どちらかが誤っているわけではありません。",
          en: "\"A different sign from Western astrology means a calculation error\" — the difference comes from the sidereal and tropical zodiacs using different reference points; neither is a mistake.",
          hi: "\"पश्चिमी ज्योतिष से अलग राशि का अर्थ गणना की गलती है\" — यह अंतर निरयन और सायन राशिचक्र के अलग संदर्भ बिंदुओं से आता है; दोनों में से कोई गलत नहीं है।",
          ko: "'서양 점성술과 별자리가 다른 건 계산 실수다' → 항성 황도와 회귀 황도의 기준 차이 때문이며, 어느 쪽이 틀린 것은 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "A note before you use the results",
        hi: "परिणामों के उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "占星術は、自分を見つめ直したり、楽しんだりするためのものです。このツールの結果は、医療・法律・金融などの専門的な判断に代わるものではありません。",
          en: "Astrology is meant for self-reflection and enjoyment. The results of this tool are not a substitute for medical, legal or financial advice.",
          hi: "ज्योतिष आत्म-चिंतन और आनंद के लिए है। इस टूल के परिणाम चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं हैं।",
          ko: "점성술은 자신을 돌아보고 즐기기 위한 것입니다. 이 도구의 결과는 의료·법률·금융 등 전문적인 판단을 대신하지 않습니다.",
        },
        {
          ja: "ラグナが範囲内で変わったとしても、それは「どちらの可能性も視野に入れて読みましょう」という合図にすぎません。不安になる必要はありませんので、気軽な確認としてお使いください。",
          en: "Even if your Lagna changes within the window, it is simply a cue to keep both possibilities in view. There is no need to worry — treat it as a relaxed check.",
          hi: "यदि सीमा के भीतर आपका लग्न बदलता भी है, तो यह केवल दोनों संभावनाओं को ध्यान में रखने का संकेत है। चिंता की कोई बात नहीं — इसे एक सहज जाँच की तरह लें।",
          ko: "범위 안에서 라그나가 바뀌더라도, 그것은 '두 가능성을 모두 염두에 두고 읽자'는 신호일 뿐입니다. 걱정할 필요는 없으니 가벼운 확인으로 이용해 주세요.",
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
          ja: "ラグナが確かめられたら、次のページで出生図をさらに読み進められます。",
          en: "Once you have checked your Lagna, these pages take the reading further.",
          hi: "लग्न की जाँच हो जाने के बाद, ये पृष्ठ आगे पढ़ने में मदद करते हैं।",
          ko: "라그나를 확인했다면, 다음 페이지에서 출생 차트를 더 읽어 볼 수 있습니다.",
        },
      ],
      links: [
        {
          href: "/tools/lagna-calculator",
          label: {
            ja: "ラグナ（アセンダント）計算機",
            en: "Lagna (ascendant) calculator",
            hi: "लग्न कैलकुलेटर",
            ko: "라그나(상승궁) 계산기",
          },
        },
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ検索（月の宿）",
            en: "Nakshatra finder",
            hi: "नक्षत्र खोजक",
            ko: "낙샤트라 찾기",
          },
        },
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ダシャー計算機",
            en: "Dasha calculator",
            hi: "दशा कैलकुलेटर",
            ko: "다샤 계산기",
          },
        },
        {
          href: "/tools/birth-chart",
          label: {
            ja: "インド占星術の出生図（クンダリ）作成",
            en: "Vedic birth chart (kundli)",
            hi: "वैदिक जन्म कुंडली",
            ko: "인도 점성술 출생 차트(쿤달리)",
          },
        },
        {
          href: "/learn-jyotish/introduction/birth-time-errors",
          label: {
            ja: "出生時刻の誤差について学ぶ",
            en: "Learn about birth time errors",
            hi: "जन्म समय की त्रुटियों के बारे में जानें",
            ko: "출생 시각 오차에 대해 배우기",
          },
        },
      ],
    },
  ],
};
