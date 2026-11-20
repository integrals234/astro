import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/lagna-calculator.
 *
 * Written Japanese-first for 「ラグナ」「アセンダント」「上昇宮」 searches. The
 * page is about the ascendant itself — why it needs the birth time, what each
 * rising sign emphasises, and how it differs from the Western ascendant — so
 * it stays distinct from /tools/birth-chart (the whole chart and every planet)
 * and /tools/moon-sign (the Moon's sign).
 *
 * The tool renders only the D1 chart (North Indian layout): sign numbers per
 * house, an "ASC" marker with the ascendant's whole degree in its sign, and
 * planets as two-character abbreviations with their whole degree and `*` for
 * retrograde. The glossary below describes exactly that and nothing more.
 *
 * Rising-time figures for Tokyo were computed for latitude ≈35.7°N with the
 * sidereal (Lahiri, ≈24°) zodiac; they are rounded and stated as approximate.
 */
export const lagnaCalculatorLongForm: ToolLongForm = {
  slug: "lagna-calculator",
  sections: [
    {
      heading: {
        ja: "ラグナ（上昇宮）とは何か",
        en: "What the Lagna (ascendant) is",
        hi: "लग्न क्या है",
        ko: "라그나(상승궁)란 무엇인가",
      },
      body: [
        {
          ja: "ラグナとは、生まれた瞬間に東の地平線と黄道が交わっていた点のことで、その点が入っている星座を「ラグナの星座」や「上昇宮」と呼びます。西洋占星術でいうアセンダントにあたる考え方です。",
          en: "The Lagna is the point where the ecliptic met the eastern horizon at the moment of birth, and the sign containing that point is called the Lagna sign or rising sign. It corresponds to what Western astrology calls the ascendant.",
          hi: "लग्न वह बिंदु है जहाँ जन्म के क्षण क्रांतिवृत्त पूर्वी क्षितिज से मिल रहा था, और जिस राशि में यह बिंदु होता है उसे लग्न राशि कहते हैं। यह पश्चिमी ज्योतिष के 'असेंडेंट' के समान अवधारणा है।",
          ko: "라그나는 태어난 순간 동쪽 지평선과 황도가 만나던 지점이며, 그 지점이 들어 있는 별자리를 '라그나 별자리' 또는 '상승궁'이라고 부릅니다. 서양 점성술의 어센던트에 해당하는 개념입니다.",
        },
        {
          ja: "インド占星術（ジョーティッシュ）では、ラグナの星座がそのまま第1室になり、そこから星座一つずつ第2室、第3室……と十二の室が決まります。つまりラグナが一つずれると、すべての惑星の「室」が一つずつずれます。チャートを読むうえで最初に確かめるべき土台がラグナだといわれるのはこのためです。",
          en: "In Jyotish, the Lagna sign itself becomes the first house, and the twelve houses follow one sign at a time from there. If the Lagna shifts by one sign, every planet's house shifts by one too. That is why the Lagna is called the foundation to check before reading anything else in a chart.",
          hi: "ज्योतिष में लग्न राशि ही प्रथम भाव बनती है, और वहाँ से एक-एक राशि करके बारह भाव तय होते हैं। यदि लग्न एक राशि खिसक जाए, तो हर ग्रह का भाव भी एक खिसक जाता है। इसीलिए लग्न को कुंडली की नींव कहा जाता है, जिसे सबसे पहले जाँचना चाहिए।",
          ko: "조티시에서는 라그나 별자리가 그대로 1궁이 되고, 거기서부터 별자리 하나씩 2궁, 3궁…으로 12개의 하우스가 정해집니다. 라그나가 하나 어긋나면 모든 행성의 하우스도 하나씩 어긋납니다. 그래서 라그나를 차트를 읽기 전에 먼저 확인해야 할 토대라고 합니다.",
        },
        {
          ja: "第1室は、体質や外見の印象、物事への取り組み方など「その人が世界にどう現れるか」を表す室とされます。心の動きを表す月の星座（ムーン・サイン）とは役割が異なり、両方を並べて見ることで人物像が立体的になります。",
          en: "The first house is read as how a person meets the world — constitution, the impression they give, their way of approaching things. That is a different role from the Moon sign, which describes the inner, emotional life; reading the two side by side gives a fuller picture.",
          hi: "प्रथम भाव यह दर्शाता है कि व्यक्ति संसार के सामने कैसे प्रकट होता है — शरीर-प्रकृति, बाहरी छाप और काम करने का ढंग। मन को दर्शाने वाली चंद्र राशि की भूमिका इससे अलग है; दोनों को साथ देखने पर व्यक्तित्व अधिक स्पष्ट होता है।",
          ko: "1궁은 체질이나 외적 인상, 일에 임하는 방식 등 '그 사람이 세상에 어떻게 드러나는가'를 나타냅니다. 마음의 움직임을 나타내는 달 별자리와는 역할이 다르며, 둘을 나란히 보면 인물상이 입체적으로 보입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ラグナに正確な出生時刻が欠かせない理由",
        en: "Why the Lagna depends so heavily on birth time",
        hi: "लग्न के लिए सटीक जन्म समय क्यों अनिवार्य है",
        ko: "라그나에 정확한 출생 시각이 꼭 필요한 이유",
      },
      body: [
        {
          ja: "地球は約24時間で一回転するため、東の地平線から昇る星座も一日で十二星座をひと巡りします。平均すると一つの星座が昇り切るのにおよそ2時間、度数でいえば約4分で1度進む計算です。同じ日に生まれた人でも、朝と夜ではラグナがまったく違うことは珍しくありません。",
          en: "Because the Earth turns once in about 24 hours, the sign rising in the east cycles through all twelve signs in a day. On average a sign takes about two hours to rise, which works out to roughly one degree every four minutes. Two people born on the same day can easily have completely different Lagnas if one was born in the morning and the other at night.",
          hi: "पृथ्वी लगभग 24 घंटे में एक बार घूमती है, इसलिए पूर्व में उदय होने वाली राशि एक दिन में बारहों राशियों का चक्र पूरा करती है। औसतन एक राशि के उदय में लगभग 2 घंटे लगते हैं, यानी लगभग हर 4 मिनट में 1 अंश। एक ही दिन जन्मे दो लोगों का लग्न सुबह और रात के जन्म के कारण बिल्कुल अलग हो सकता है।",
          ko: "지구는 약 24시간에 한 바퀴 돌기 때문에 동쪽에서 떠오르는 별자리도 하루에 12별자리를 한 바퀴 돕니다. 평균적으로 한 별자리가 다 떠오르는 데 약 2시간, 도수로는 약 4분에 1도씩 나아가는 셈입니다. 같은 날 태어나도 아침과 밤의 라그나가 전혀 다른 경우가 흔합니다.",
        },
        {
          ja: "ただし「2時間」はあくまで平均です。黄道は天の赤道に対して傾いているため、星座によって昇る速さが違い、その差は緯度が高いほど大きくなります。例えば東京付近の緯度で計算すると、水瓶座や魚座はおよそ1時間20分ほどで昇り切る一方、蟹座から天秤座あたりは約2時間半かかります。赤道に近い地域では、どの星座もほぼ2時間前後にそろいます。",
          en: "“Two hours” is only an average. Because the ecliptic is tilted against the celestial equator, signs rise at different speeds, and the difference grows with latitude. At roughly Tokyo's latitude, for example, Aquarius and Pisces rise in about 1 hour 20 minutes, while the signs from Cancer to Libra take about two and a half hours. Near the equator, every sign takes close to two hours.",
          hi: "पर “2 घंटे” केवल औसत है। क्रांतिवृत्त खगोलीय विषुवत् से झुका हुआ है, इसलिए राशियाँ अलग-अलग गति से उदय होती हैं, और अक्षांश बढ़ने पर यह अंतर बढ़ता है। उदाहरण के लिए टोक्यो के अक्षांश पर कुंभ और मीन लगभग 1 घंटा 20 मिनट में उदय हो जाती हैं, जबकि कर्क से तुला तक की राशियों में लगभग ढाई घंटे लगते हैं। विषुवत् रेखा के पास हर राशि लगभग 2 घंटे लेती है।",
          ko: "다만 '2시간'은 어디까지나 평균입니다. 황도가 천구 적도에 대해 기울어져 있어 별자리마다 떠오르는 속도가 다르고, 그 차이는 위도가 높을수록 커집니다. 예를 들어 도쿄 부근 위도에서 계산하면 물병자리와 물고기자리는 약 1시간 20분 만에 다 떠오르는 반면, 게자리부터 천칭자리까지는 약 2시간 반이 걸립니다. 적도 부근에서는 어느 별자리나 2시간 안팎으로 비슷합니다.",
        },
        {
          ja: "大切なのは、生まれた時刻が星座の境目にどれだけ近いかです。ラグナが星座の真ん中にあれば30分程度の誤差でも結果は変わりませんが、境目のすぐそばなら数分の違いで隣の星座になります。結果に表示されるラグナの度数が0度台や29度台なら、境目に近いサインと考えてください。",
          en: "What really matters is how close the birth moment sits to a sign boundary. If the Lagna is mid-sign, even a 30-minute error won't change it; right next to a boundary, a few minutes can tip it into the neighbouring sign. If the Lagna degree in your result is in the 0s or the 29s, treat that as a sign you are near the edge.",
          hi: "असल महत्व इस बात का है कि जन्म का क्षण राशि की सीमा के कितना पास है। लग्न राशि के बीच में हो तो 30 मिनट की त्रुटि भी परिणाम नहीं बदलती, पर सीमा के ठीक पास हो तो कुछ मिनट का अंतर इसे पड़ोसी राशि में ले जा सकता है। यदि परिणाम में लग्न का अंश 0 या 29 के आसपास है, तो समझें कि आप सीमा के निकट हैं।",
          ko: "중요한 것은 태어난 시각이 별자리 경계에 얼마나 가까운가입니다. 라그나가 별자리 한가운데라면 30분 정도의 오차로도 결과가 바뀌지 않지만, 경계 바로 옆이라면 몇 분 차이로 이웃 별자리가 됩니다. 결과에 표시된 라그나 도수가 0도대나 29도대라면 경계에 가깝다는 신호로 보세요.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方：入力の手順と、よくある入力ミス",
        en: "How to use it: the steps, and common input mistakes",
        hi: "उपयोग कैसे करें: चरण, और आम गलतियाँ",
        ko: "사용 방법: 입력 순서와 흔한 입력 실수",
      },
      body: [
        {
          ja: "入力は生年月日、出生時刻、出生地の三つです。一度入力すると、このサイトの他のツールでも同じデータが使われるため、再入力の必要はありません。",
          en: "You enter three things: birth date, birth time and birthplace. Once entered, the same details are used by the other tools on this site, so you won't need to type them again.",
          hi: "तीन चीज़ें दर्ज करनी होती हैं: जन्म तिथि, जन्म समय और जन्म स्थान। एक बार दर्ज करने पर साइट के अन्य उपकरण भी यही विवरण उपयोग करते हैं, इसलिए दोबारा लिखने की ज़रूरत नहीं।",
          ko: "입력은 생년월일, 출생 시각, 출생지 세 가지입니다. 한 번 입력하면 이 사이트의 다른 도구에서도 같은 데이터를 쓰므로 다시 입력할 필요가 없습니다.",
        },
      ],
      bullets: [
        {
          ja: "手順1：生年月日を入力します",
          en: "Step 1: enter your date of birth",
          hi: "चरण 1: जन्म तिथि दर्ज करें",
          ko: "1단계: 생년월일을 입력합니다",
        },
        {
          ja: "手順2：出生時刻を、母子手帳や出生証明書など記録に残る時刻で入力します。ラグナにとって最も重要な項目です",
          en: "Step 2: enter your birth time as written in a record such as a maternal health handbook or birth certificate — the single most important input for the Lagna",
          hi: "चरण 2: जन्म समय किसी अभिलेख (जैसे जन्म प्रमाणपत्र) में लिखे अनुसार दर्ज करें — लग्न के लिए यही सबसे महत्वपूर्ण जानकारी है",
          ko: "2단계: 출생 시각을 산모수첩이나 출생증명서 등 기록에 남은 시각으로 입력합니다. 라그나에 가장 중요한 항목입니다",
        },
        {
          ja: "手順3：出生地を検索して候補から選びます。緯度・経度と、その土地のタイムゾーンは出生地から自動で判定されるので、時刻は現地の時計の時刻のまま入力してください",
          en: "Step 3: search for your birthplace and pick it from the list. Latitude, longitude and the local time zone are worked out from the place, so enter the time as the local clock showed it",
          hi: "चरण 3: जन्म स्थान खोजें और सूची से चुनें। अक्षांश, देशांतर और स्थानीय समय-क्षेत्र स्थान से अपने-आप तय होते हैं, इसलिए समय वही दर्ज करें जो स्थानीय घड़ी में था",
          ko: "3단계: 출생지를 검색해 후보에서 고릅니다. 위도·경도와 그 지역의 시간대는 출생지로 자동 판정되므로, 시각은 현지 시계 시각 그대로 입력하세요",
        },
        {
          ja: "よくあるミス：時刻がわからず「正午」などで仮入力したまま結果を信じてしまう。時刻が不明なときは、ラグナは参考程度にとどめましょう",
          en: "Common mistake: filling in a placeholder such as noon when the time is unknown, then trusting the result. With an unknown time, treat the Lagna as a rough guide only",
          hi: "आम गलती: समय न पता होने पर “दोपहर 12 बजे” जैसा अनुमान भरकर परिणाम पर भरोसा कर लेना। समय अज्ञात हो तो लग्न को केवल संकेत मानें",
          ko: "흔한 실수: 시각을 몰라 '정오' 등으로 임시 입력한 채 결과를 믿어 버리는 것. 시각을 모를 때 라그나는 참고 정도로만 보세요",
        },
        {
          ja: "よくあるミス：海外生まれなのに日本時間に換算して入力する。出生地の現地時刻をそのまま入れるのが正解です",
          en: "Common mistake: converting a foreign birth time into Japan time before entering it. The correct input is the local time at the birthplace",
          hi: "आम गलती: विदेश में जन्म होने पर समय को जापान के समय में बदलकर भरना। सही तरीका जन्म स्थान का स्थानीय समय ही दर्ज करना है",
          ko: "흔한 실수: 해외에서 태어났는데 일본 시간으로 환산해 입력하는 것. 출생지의 현지 시각을 그대로 넣는 것이 맞습니다",
        },
        {
          ja: "注意点：このツールは恒星を基準にするサイデリアル方式（ラヒリ・アヤナムシャ、現在約24度）で計算します。西洋式のトロピカル方式で出したアセンダントとは、星座が一つずれることがよくあります",
          en: "Note: this tool calculates with the sidereal zodiac (Lahiri ayanamsha, currently about 24°). It often lands one sign away from an ascendant calculated with the Western tropical zodiac",
          hi: "ध्यान दें: यह उपकरण निरयन (साइडेरियल) राशिचक्र और लाहिड़ी अयनांश (वर्तमान में लगभग 24°) से गणना करता है। पश्चिमी सायन पद्धति से निकले असेंडेंट से यह अक्सर एक राशि अलग आता है",
          ko: "주의: 이 도구는 항성을 기준으로 하는 사이데리얼 방식(라히리 아야남샤, 현재 약 24도)으로 계산합니다. 서양식 트로피컬 방식의 어센던트와는 별자리가 하나 어긋나는 일이 흔합니다",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：図に表示される記号と数字",
        en: "Reading the result: the marks and numbers in the chart",
        hi: "परिणाम कैसे पढ़ें: कुंडली के चिह्न और अंक",
        ko: "결과 읽는 법: 차트에 표시되는 기호와 숫자",
      },
      body: [
        {
          ja: "結果は北インド式と呼ばれるひし形の図（ネイタルチャート）で表示されます。見慣れない形ですが、押さえるべき点は多くありません。",
          en: "The result is drawn as a North Indian–style diamond chart (the natal chart). The shape may be unfamiliar, but there are only a few things to know.",
          hi: "परिणाम उत्तर भारतीय शैली की हीरे के आकार वाली जन्म कुंडली में दिखता है। आकार अपरिचित लग सकता है, पर समझने योग्य बातें कम ही हैं।",
          ko: "결과는 북인도식이라 불리는 마름모꼴 차트(네이탈 차트)로 표시됩니다. 낯선 모양이지만 알아야 할 점은 많지 않습니다.",
        },
        {
          ja: "例えば、上中央のひし形に「5」とあり、その横に「ASC」と小さな「12」が見えたとします。これは、ラグナが5番目の星座である獅子座の12度台にあるという意味です。この場合、左隣の区画（第2室）は6＝乙女座、その次（第3室）は7＝天秤座……と続きます（数字は説明のための例です）。",
          en: "Say, for example, the top-centre diamond shows “5”, with “ASC” and a small “12” beside it. That means the Lagna is in the twelfth degree of the fifth sign, Leo. The next cell to the left (house 2) is then 6 = Virgo, the one after it (house 3) is 7 = Libra, and so on. (These numbers are an illustration only.)",
          hi: "उदाहरण के लिए, मान लें ऊपर बीच वाले खाने में “5” लिखा है और उसके पास “ASC” तथा छोटा “12” है। इसका अर्थ है कि लग्न पाँचवीं राशि सिंह के 12वें अंश में है। तब बाईं ओर का अगला खाना (भाव 2) 6 = कन्या होगा, उसके बाद (भाव 3) 7 = तुला, और इसी तरह आगे। (ये अंक केवल उदाहरण हैं।)",
          ko: "예를 들어 위쪽 가운데 마름모에 '5'가 있고, 그 옆에 'ASC'와 작은 '12'가 보인다고 합시다. 이는 라그나가 다섯 번째 별자리인 사자자리의 12도대에 있다는 뜻입니다. 이 경우 왼쪽 옆 칸(2궁)은 6 = 처녀자리, 그다음(3궁)은 7 = 천칭자리…로 이어집니다(숫자는 설명을 위한 예입니다).",
        },
      ],
      bullets: [
        {
          ja: "第1室（ラグナ）：上中央のひし形です。北インド式では区画の位置が室を表し、ここから反時計回りに第2室、第3室……と進みます",
          en: "House 1 (the Lagna): the top-centre diamond. In the North Indian layout, a cell's position marks the house, and houses 2, 3 and onward run anticlockwise from here",
          hi: "भाव 1 (लग्न): ऊपर बीच का हीरे जैसा खाना। उत्तर भारतीय शैली में खाने की जगह भाव बताती है, और यहाँ से वामावर्त भाव 2, 3 आदि चलते हैं",
          ko: "1궁(라그나): 위쪽 가운데 마름모입니다. 북인도식에서는 칸의 위치가 하우스를 나타내며, 여기서부터 시계 반대 방향으로 2궁, 3궁…으로 이어집니다",
        },
        {
          ja: "各区画の数字：その室に入っている星座の番号です。1＝牡羊座、2＝牡牛座、3＝双子座、4＝蟹座、5＝獅子座、6＝乙女座、7＝天秤座、8＝蠍座、9＝射手座、10＝山羊座、11＝水瓶座、12＝魚座",
          en: "The number in each cell: the sign occupying that house. 1 = Aries, 2 = Taurus, 3 = Gemini, 4 = Cancer, 5 = Leo, 6 = Virgo, 7 = Libra, 8 = Scorpio, 9 = Sagittarius, 10 = Capricorn, 11 = Aquarius, 12 = Pisces",
          hi: "हर खाने का अंक: उस भाव में स्थित राशि की संख्या। 1 = मेष, 2 = वृषभ, 3 = मिथुन, 4 = कर्क, 5 = सिंह, 6 = कन्या, 7 = तुला, 8 = वृश्चिक, 9 = धनु, 10 = मकर, 11 = कुंभ, 12 = मीन",
          ko: "각 칸의 숫자: 그 하우스에 들어 있는 별자리 번호입니다. 1 = 양자리, 2 = 황소자리, 3 = 쌍둥이자리, 4 = 게자리, 5 = 사자자리, 6 = 처녀자리, 7 = 천칭자리, 8 = 전갈자리, 9 = 사수자리, 10 = 염소자리, 11 = 물병자리, 12 = 물고기자리",
        },
        {
          ja: "ASCと右上の小さな数字：ラグナ（アセンダント）の位置と、その星座内での度数（0〜29、小数点以下は切り捨て）です",
          en: "“ASC” and the small raised number: the position of the Lagna (ascendant) and its degree within the sign (0–29, rounded down)",
          hi: "“ASC” और ऊपर छोटा अंक: लग्न की स्थिति और राशि के भीतर उसका अंश (0–29, दशमलव हटाकर)",
          ko: "ASC와 오른쪽 위의 작은 숫자: 라그나(어센던트)의 위치와 그 별자리 안에서의 도수(0~29, 소수점 이하 버림)입니다",
        },
        {
          ja: "惑星の略記：太陽、月、火星、水星、木星、金星、土星、ラーフ、ケトゥの九つが、名前の先頭2文字（ラーフは「ラー」、ケトゥは「ケト」など）で表示され、右上の数字はその星座内での度数です",
          en: "Planet abbreviations: the nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu — appear as the first two letters of their names, with the raised number giving the degree within the sign",
          hi: "ग्रहों के संक्षिप्त नाम: सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु — नौ ग्रह अपने नाम के पहले दो अक्षरों से दिखते हैं, और ऊपर का अंक राशि के भीतर अंश बताता है",
          ko: "행성 약칭: 태양, 달, 화성, 수성, 목성, 금성, 토성, 라후, 케투의 아홉 행성이 이름 앞 두 글자로 표시되고, 오른쪽 위 숫자는 그 별자리 안에서의 도수입니다",
        },
        {
          ja: "＊（アスタリスク）：その惑星が逆行中であることを示します。地球から見た見かけの動きで、惑星が後ろに下がっているわけではありません",
          en: "* (asterisk): the planet is retrograde — an apparent motion as seen from Earth, not the planet actually moving backwards",
          hi: "* (तारांकन): ग्रह वक्री है — यह पृथ्वी से दिखने वाली आभासी गति है, ग्रह वास्तव में पीछे नहीं जाता",
          ko: "*(별표): 그 행성이 역행 중임을 나타냅니다. 지구에서 본 겉보기 운동이며 행성이 실제로 뒤로 가는 것은 아닙니다",
        },
        {
          ja: "室の数え方：ラグナの星座全体を第1室とし、星座一つを一室として数えるホールサイン方式です",
          en: "How houses are counted: whole-sign houses — the entire Lagna sign is house 1, and each following sign is one house",
          hi: "भाव गिनने का तरीका: पूर्ण-राशि पद्धति — पूरी लग्न राशि भाव 1 है, और आगे की हर राशि एक भाव",
          ko: "하우스 세는 법: 라그나 별자리 전체를 1궁으로 하고 별자리 하나를 한 하우스로 세는 홀 사인 방식입니다",
        },
      ],
    },
    {
      heading: {
        ja: "12のラグナがそれぞれ強調するもの",
        en: "What each of the twelve Lagnas emphasises",
        hi: "बारह लग्न किन बातों पर ज़ोर देते हैं",
        ko: "12가지 라그나가 각각 강조하는 것",
      },
      body: [
        {
          ja: "ラグナの星座は、その人が物事に向かうときの「入り口の雰囲気」を表すと考えられています。また、ラグナの星座を支配する惑星は「ラグナ・ロード（ラグネーシャ）」と呼ばれ、チャート全体の要となる惑星として重視されます。以下は伝統的な解釈の要点で、性格を決めつけるものではありません。",
          en: "The Lagna sign is thought to describe the tone with which a person approaches life. The planet ruling the Lagna sign — the Lagna lord (lagnesha) — is treated as a key planet for the whole chart. The points below summarise traditional readings; they are not a fixed verdict on anyone's character.",
          hi: "लग्न राशि यह दर्शाती है कि व्यक्ति जीवन की ओर किस भाव से बढ़ता है। लग्न राशि का स्वामी ग्रह — लग्नेश — पूरी कुंडली का प्रमुख ग्रह माना जाता है। नीचे पारंपरिक व्याख्या का सार है; यह किसी के स्वभाव पर अंतिम निर्णय नहीं है।",
          ko: "라그나 별자리는 그 사람이 일에 다가갈 때의 '입구의 분위기'를 나타낸다고 봅니다. 또 라그나 별자리를 지배하는 행성은 '라그나 로드(라그네샤)'라 불리며 차트 전체의 핵심 행성으로 중시됩니다. 아래는 전통적 해석의 요점이며 성격을 단정하는 것이 아닙니다.",
        },
      ],
      bullets: [
        {
          ja: "牡羊座（支配星：火星）：行動の速さ、率直さ、自分から始める力",
          en: "Aries (ruled by Mars): quick action, directness, the drive to start things",
          hi: "मेष (स्वामी: मंगल): तेज़ कर्म, स्पष्टता, स्वयं शुरुआत करने की शक्ति",
          ko: "양자리(지배성: 화성): 빠른 행동, 솔직함, 스스로 시작하는 힘",
        },
        {
          ja: "牡牛座（支配星：金星）：安定、五感の豊かさ、着実に積み上げる粘り強さ",
          en: "Taurus (ruled by Venus): stability, richness of the senses, patient step-by-step building",
          hi: "वृषभ (स्वामी: शुक्र): स्थिरता, इंद्रियों की समृद्धि, धैर्य से निर्माण",
          ko: "황소자리(지배성: 금성): 안정, 풍부한 오감, 꾸준히 쌓아 가는 끈기",
        },
        {
          ja: "双子座（支配星：水星）：好奇心、言葉と情報の扱い、軽やかな適応力",
          en: "Gemini (ruled by Mercury): curiosity, a way with words and information, light-footed adaptability",
          hi: "मिथुन (स्वामी: बुध): जिज्ञासा, शब्दों और सूचना का कौशल, सहज अनुकूलन",
          ko: "쌍둥이자리(지배성: 수성): 호기심, 말과 정보를 다루는 능력, 가벼운 적응력",
        },
        {
          ja: "蟹座（支配星：月）：感受性、身近な人を守る気持ち、居場所を大切にする姿勢",
          en: "Cancer (ruled by the Moon): sensitivity, protectiveness toward those close by, valuing a place to belong",
          hi: "कर्क (स्वामी: चंद्र): संवेदनशीलता, अपनों की रक्षा का भाव, अपने स्थान को महत्व देना",
          ko: "게자리(지배성: 달): 감수성, 가까운 사람을 지키려는 마음, 머물 곳을 소중히 하는 자세",
        },
        {
          ja: "獅子座（支配星：太陽）：存在感、誇り、周囲を照らし導く役割",
          en: "Leo (ruled by the Sun): presence, pride, a role of lighting the way for others",
          hi: "सिंह (स्वामी: सूर्य): प्रभावशाली उपस्थिति, आत्मगौरव, दूसरों का मार्गदर्शन",
          ko: "사자자리(지배성: 태양): 존재감, 자부심, 주위를 비추고 이끄는 역할",
        },
        {
          ja: "乙女座（支配星：水星）：分析力、細部への目配り、役に立つことへの喜び",
          en: "Virgo (ruled by Mercury): analysis, an eye for detail, satisfaction in being useful",
          hi: "कन्या (स्वामी: बुध): विश्लेषण, बारीकियों पर ध्यान, उपयोगी होने का संतोष",
          ko: "처녀자리(지배성: 수성): 분석력, 세부에 대한 눈, 쓸모 있음에서 오는 기쁨",
        },
        {
          ja: "天秤座（支配星：金星）：調和、公平さ、人との関係を整える感覚",
          en: "Libra (ruled by Venus): harmony, fairness, a feel for balancing relationships",
          hi: "तुला (स्वामी: शुक्र): सामंजस्य, निष्पक्षता, संबंधों में संतुलन की समझ",
          ko: "천칭자리(지배성: 금성): 조화, 공정함, 사람 사이의 관계를 조율하는 감각",
        },
        {
          ja: "蠍座（支配星：火星）：集中力、物事の深部を見抜く力、変化を受け止める強さ",
          en: "Scorpio (ruled by Mars): focus, the ability to see beneath the surface, strength through change",
          hi: "वृश्चिक (स्वामी: मंगल): एकाग्रता, गहराई तक देखने की क्षमता, परिवर्तन सहने की शक्ति",
          ko: "전갈자리(지배성: 화성): 집중력, 깊은 곳을 꿰뚫어 보는 힘, 변화를 받아들이는 강인함",
        },
        {
          ja: "射手座（支配星：木星）：理想、学びや旅への意欲、大らかな楽観性",
          en: "Sagittarius (ruled by Jupiter): ideals, an appetite for learning and travel, generous optimism",
          hi: "धनु (स्वामी: गुरु): आदर्श, ज्ञान और यात्रा की चाह, उदार आशावाद",
          ko: "사수자리(지배성: 목성): 이상, 배움과 여행에 대한 의욕, 너그러운 낙관성",
        },
        {
          ja: "山羊座（支配星：土星）：責任感、計画性、時間をかけて成果を出す力",
          en: "Capricorn (ruled by Saturn): responsibility, planning, results earned over time",
          hi: "मकर (स्वामी: शनि): ज़िम्मेदारी, योजना, समय लेकर फल प्राप्त करना",
          ko: "염소자리(지배성: 토성): 책임감, 계획성, 시간을 들여 성과를 내는 힘",
        },
        {
          ja: "水瓶座（支配星：土星）：独自の視点、社会や仲間への関心、型にとらわれない発想",
          en: "Aquarius (ruled by Saturn): an independent viewpoint, concern for society and community, unconventional ideas",
          hi: "कुंभ (स्वामी: शनि): स्वतंत्र दृष्टि, समाज और साथियों की चिंता, लीक से हटकर सोच",
          ko: "물병자리(지배성: 토성): 독자적 시각, 사회와 동료에 대한 관심, 틀에 얽매이지 않는 발상",
        },
        {
          ja: "魚座（支配星：木星）：共感力、想像力、目に見えないものへの感受性",
          en: "Pisces (ruled by Jupiter): empathy, imagination, sensitivity to what cannot be seen",
          hi: "मीन (स्वामी: गुरु): सहानुभूति, कल्पनाशीलता, अदृश्य के प्रति संवेदनशीलता",
          ko: "물고기자리(지배성: 목성): 공감력, 상상력, 보이지 않는 것에 대한 감수성",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術のアセンダントとの違い",
        en: "How it differs from the Western ascendant",
        hi: "पश्चिमी असेंडेंट से अंतर",
        ko: "서양 점성술 어센던트와의 차이",
      },
      body: [
        {
          ja: "実は、ラグナと西洋のアセンダントが指しているのは、空の上では同じ一点です。違うのは、その点に「何座」という名前をつけるための物差し（黄道十二星座の起点）です。西洋占星術の多くは春分点を起点とするトロピカル方式、インド占星術は恒星を基準とするサイデリアル方式を使い、歳差運動によって両者の起点は現在約24度離れています。",
          en: "The Lagna and the Western ascendant actually point to the same spot in the sky. What differs is the ruler used to name that spot — where the zodiac starts. Most Western astrology uses the tropical zodiac, anchored to the spring equinox; Jyotish uses the sidereal zodiac, anchored to the stars. Precession has pulled the two starting points about 24 degrees apart.",
          hi: "वास्तव में लग्न और पश्चिमी असेंडेंट आकाश में एक ही बिंदु को दर्शाते हैं। अंतर उस पैमाने में है जिससे उस बिंदु को राशि का नाम दिया जाता है — राशिचक्र कहाँ से शुरू होता है। अधिकांश पश्चिमी ज्योतिष वसंत विषुव से शुरू होने वाला सायन राशिचक्र, और ज्योतिष तारों पर आधारित निरयन राशिचक्र उपयोग करता है। अयन-चलन के कारण दोनों के आरंभ बिंदु अब लगभग 24 अंश अलग हैं।",
          ko: "사실 라그나와 서양의 어센던트가 가리키는 것은 하늘에서 같은 한 점입니다. 다른 것은 그 점에 '무슨 자리'라는 이름을 붙이는 잣대, 즉 황도 12궁의 기점입니다. 서양 점성술 대부분은 춘분점을 기점으로 하는 트로피컬 방식, 인도 점성술은 항성을 기준으로 하는 사이데리얼 방식을 쓰며, 세차 운동으로 두 기점은 현재 약 24도 떨어져 있습니다.",
        },
        {
          ja: "目安として、西洋式のアセンダントが星座の0〜24度あたりにある人は、インド式では一つ前の星座がラグナになることが多く、24度以降にある人は同じ星座のままのことが多くなります。例えば西洋式で「獅子座10度」なら、インド式では蟹座のラグナになる計算です。",
          en: "As a rule of thumb, if your Western ascendant falls between about 0° and 24° of a sign, your Vedic Lagna is usually the previous sign; if it falls after about 24°, it usually stays in the same sign. A Western ascendant of 10° Leo, for example, works out as a Cancer Lagna.",
          hi: "मोटे नियम के रूप में, यदि पश्चिमी असेंडेंट किसी राशि के लगभग 0° से 24° के बीच है, तो वैदिक लग्न प्रायः पिछली राशि होता है; 24° के बाद हो तो प्रायः वही राशि रहती है। उदाहरण के लिए पश्चिमी गणना में “सिंह 10°” का असेंडेंट वैदिक में कर्क लग्न बनता है।",
          ko: "기준으로, 서양식 어센던트가 별자리의 0~24도 부근에 있는 사람은 인도식에서 하나 앞 별자리가 라그나가 되는 경우가 많고, 24도 이후에 있는 사람은 같은 별자리 그대로인 경우가 많습니다. 예를 들어 서양식으로 '사자자리 10도'라면 인도식에서는 게자리 라그나가 됩니다.",
        },
        {
          ja: "もう一つの違いは室の分け方です。西洋占星術ではプラシーダス法など、アセンダントの度数を起点に室を不均等に分ける方式がよく使われますが、このツールはラグナの星座全体を第1室とするホールサイン方式です。そのため、同じ惑星でも西洋式とは違う室に入ることがあります。",
          en: "The other difference is how houses are divided. Western astrology often uses systems such as Placidus, which divide houses unevenly from the ascendant degree; this tool uses whole-sign houses, with the entire Lagna sign as house 1. The same planet can therefore land in a different house from the Western chart.",
          hi: "दूसरा अंतर भाव-विभाजन का है। पश्चिमी ज्योतिष में प्लासिडस जैसी पद्धतियाँ आम हैं, जो असेंडेंट के अंश से असमान भाव बनाती हैं; यह उपकरण पूर्ण-राशि पद्धति उपयोग करता है, जिसमें पूरी लग्न राशि भाव 1 है। इसलिए एक ही ग्रह पश्चिमी कुंडली से अलग भाव में आ सकता है।",
          ko: "또 하나의 차이는 하우스를 나누는 방식입니다. 서양 점성술에서는 플라시두스법처럼 어센던트 도수를 기점으로 하우스를 불균등하게 나누는 방식이 흔하지만, 이 도구는 라그나 별자리 전체를 1궁으로 하는 홀 사인 방식입니다. 그래서 같은 행성이라도 서양식과 다른 하우스에 들어갈 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ラグナについてのよくある誤解",
        en: "Common misunderstandings about the Lagna",
        hi: "लग्न के बारे में आम भ्रांतियाँ",
        ko: "라그나에 관한 흔한 오해",
      },
      body: [
        {
          ja: "ラグナを調べた方からよく聞かれる疑問を、誤解と実際の形で整理しました。",
          en: "Here are the questions people most often raise after looking up their Lagna, set out as myth and reality.",
          hi: "लग्न देखने के बाद लोग जो प्रश्न सबसे अधिक पूछते हैं, उन्हें भ्रांति और वास्तविकता के रूप में रखा गया है।",
          ko: "라그나를 확인한 분들이 자주 묻는 의문을 오해와 실제로 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：「同じ誕生日なら同じラグナ」→ ラグナは一日で十二星座をひと巡りするので、生まれた時刻が違えば別のラグナになります",
          en: "Myth: “Same birthday, same Lagna” → the Lagna passes through all twelve signs in a day, so a different birth time gives a different Lagna",
          hi: "भ्रांति: “एक ही जन्मदिन तो एक ही लग्न” → लग्न एक दिन में बारहों राशियों से गुज़रता है, इसलिए अलग जन्म समय पर लग्न अलग होगा",
          ko: "오해: '생일이 같으면 라그나도 같다' → 라그나는 하루에 12별자리를 한 바퀴 돌므로, 태어난 시각이 다르면 다른 라그나가 됩니다",
        },
        {
          ja: "誤解：「ラグナはどの星座も2時間ずつ」→ 昇る速さは星座と緯度によって違い、日本の緯度では短い星座と長い星座で1時間以上の差があります",
          en: "Myth: “Every Lagna lasts exactly two hours” → rising speed depends on the sign and the latitude; at Japan's latitudes the shortest and longest signs differ by over an hour",
          hi: "भ्रांति: “हर लग्न ठीक 2 घंटे का होता है” → उदय की गति राशि और अक्षांश पर निर्भर है; जापान के अक्षांश पर सबसे छोटी और सबसे लंबी राशि में एक घंटे से अधिक का अंतर है",
          ko: "오해: '라그나는 어느 별자리나 2시간씩' → 떠오르는 속도는 별자리와 위도에 따라 다르며, 일본 위도에서는 짧은 별자리와 긴 별자리의 차이가 1시간 이상입니다",
        },
        {
          ja: "誤解：「西洋式と星座が違うから、どちらかが間違い」→ 同じ点を別の物差しで呼んでいるだけで、計算としてはどちらも成り立っています",
          en: "Myth: “The sign differs from the Western one, so one of them is wrong” → it is the same point named with a different ruler, and both calculations are sound",
          hi: "भ्रांति: “पश्चिमी से राशि अलग है, तो एक गलत है” → यह एक ही बिंदु को अलग पैमाने से नाम देना है, और दोनों गणनाएँ सही हैं",
          ko: "오해: '서양식과 별자리가 다르니 어느 한쪽이 틀렸다' → 같은 점을 다른 잣대로 부를 뿐이며, 계산으로서는 둘 다 성립합니다",
        },
        {
          ja: "誤解：「ラグナの星座が良い・悪い」→ 十二のラグナに優劣はなく、ラグナ・ロードの状態や他の惑星との関係を含めて読むものです",
          en: "Myth: “Some Lagna signs are good and some bad” → none of the twelve ranks above another; the Lagna is read together with the condition of its lord and the other planets",
          hi: "भ्रांति: “कुछ लग्न अच्छे, कुछ बुरे होते हैं” → बारह लग्नों में कोई ऊँच-नीच नहीं; लग्न को लग्नेश की स्थिति और अन्य ग्रहों के साथ पढ़ा जाता है",
          ko: "오해: '라그나 별자리에 좋고 나쁨이 있다' → 12가지 라그나에 우열은 없으며, 라그나 로드의 상태와 다른 행성과의 관계를 함께 읽습니다",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on the result",
        hi: "उपयोग से पहले",
        ko: "이용에 앞서",
      },
      body: [
        {
          ja: "ラグナをはじめとする占星術の結果は、自分を見つめ直すきっかけや楽しみとしてお使いください。医療・法律・金融などの判断の代わりになるものではありません。大切な決断は、必要に応じて専門家にご相談ください。",
          en: "Please use the Lagna, like any astrological result, as a prompt for self-reflection and for enjoyment. It is not a substitute for medical, legal or financial advice; for important decisions, consult a qualified professional where appropriate.",
          hi: "लग्न सहित ज्योतिषीय परिणामों को आत्मचिंतन और आनंद के साधन के रूप में उपयोग करें। यह चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है; महत्वपूर्ण निर्णयों के लिए आवश्यकता होने पर विशेषज्ञ से परामर्श करें।",
          ko: "라그나를 비롯한 점성술 결과는 자신을 돌아보는 계기나 즐거움으로 활용해 주세요. 의료·법률·금융 등의 판단을 대신하지 않습니다. 중요한 결정은 필요에 따라 전문가와 상담하세요.",
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
          ja: "ラグナがわかったら、出生時刻の確かさを点検したり、月の星座やチャート全体と合わせて読んだりしてみてください。",
          en: "Once you know your Lagna, try checking how reliable your birth time is, or reading it alongside your Moon sign and the full chart.",
          hi: "लग्न जानने के बाद अपने जन्म समय की विश्वसनीयता जाँचें, या इसे चंद्र राशि और पूरी कुंडली के साथ पढ़ें।",
          ko: "라그나를 알았다면 출생 시각이 얼마나 확실한지 점검하거나, 달 별자리와 차트 전체와 함께 읽어 보세요.",
        },
      ],
      links: [
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻チェック",
            en: "Birth-time check",
            hi: "जन्म-समय जाँच",
            ko: "출생 시각 점검",
          },
        },
        {
          href: "/tools/moon-sign",
          label: {
            ja: "月星座（ムーン・サイン）計算",
            en: "Moon sign calculator",
            hi: "चंद्र राशि कैलकुलेटर",
            ko: "달 별자리 계산기",
          },
        },
        {
          href: "/tools/birth-chart",
          label: {
            ja: "出生図（クンダリ）作成",
            en: "Birth chart (kundli) generator",
            hi: "जन्म कुंडली बनाएँ",
            ko: "출생 차트(쿤달리) 만들기",
          },
        },
        {
          href: "/learn-jyotish/houses/twelve-houses",
          label: {
            ja: "十二の室（ハウス）の意味",
            en: "The meaning of the twelve houses",
            hi: "बारह भावों का अर्थ",
            ko: "12하우스의 의미",
          },
        },
        {
          href: "/rashis",
          label: {
            ja: "12星座（ラーシ）の解説",
            en: "Guide to the twelve rashis",
            hi: "बारह राशियों की जानकारी",
            ko: "12라시(별자리) 해설",
          },
        },
      ],
    },
  ],
};
