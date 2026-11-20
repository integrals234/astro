import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/numerology.
 *
 * Japanese-first. 「数秘術」 searches in Japan mostly mean the Western
 * (Pythagorean) life-path style, so the page has to say plainly what this
 * calculator does differently: Indian/Chaldean-style Mulank and Bhagyank
 * reduced all the way to 1–9 (no master numbers), planetary rulers with
 * Rahu at 4 and Ketu at 7, and a name number that only accepts Latin
 * letters. Everything described here mirrors src/lib/numerology.ts.
 */
export const numerologyLongForm: ToolLongForm = {
  slug: "numerology",
  sections: [
    {
      heading: {
        ja: "数秘術の使い方",
        en: "How to use the numerology calculator",
        hi: "अंक ज्योतिष कैलकुलेटर का उपयोग कैसे करें",
        ko: "수비학 계산기 사용법",
      },
      body: [
        {
          ja: "このツールが計算に使うのは、生年月日と（任意で）ローマ字のお名前だけです。天体の位置は使わないため、ほかのツールのようなチャート計算は行いません。",
          en: "This tool uses only your birth date and, optionally, your name in Latin letters. It does not use planetary positions, so no chart is calculated the way the other tools do.",
          hi: "यह टूल केवल आपकी जन्म तिथि और, वैकल्पिक रूप से, रोमन अक्षरों में आपका नाम उपयोग करता है। यह ग्रहों की स्थिति का उपयोग नहीं करता, इसलिए अन्य टूल की तरह कोई कुंडली नहीं बनती।",
          ko: "이 도구가 계산에 쓰는 것은 생년월일과 (선택적으로) 로마자 이름뿐입니다. 천체 위치를 쓰지 않으므로 다른 도구처럼 차트를 계산하지 않습니다.",
        },
      ],
      bullets: [
        {
          ja: "1. 出生データを入力します。フォームはサイト共通のため出生時刻と出生地もたずねますが、数秘術の結果に影響するのは生年月日だけです。時刻がわからなければ、おおよその時刻で構いません。",
          en: "1. Enter your birth details. The form is shared across the site, so it also asks for birth time and place, but only the birth date affects the numerology result. If you don't know the time, an approximate one is fine.",
          hi: "1. अपना जन्म विवरण दर्ज करें। फ़ॉर्म पूरी साइट में साझा है, इसलिए यह जन्म समय और स्थान भी पूछता है, पर अंक ज्योतिष के परिणाम पर केवल जन्म तिथि का प्रभाव पड़ता है। समय ज्ञात न हो तो अनुमानित समय पर्याप्त है।",
          ko: "1. 출생 정보를 입력합니다. 사이트 공통 양식이라 출생 시각과 장소도 묻지만, 수비학 결과에 영향을 주는 것은 생년월일뿐입니다. 시각을 모르면 대략적인 시각이어도 괜찮습니다.",
        },
        {
          ja: "2. 生年月日は、出生地の現地の日付（母子手帳や戸籍に記載された日付）をそのまま入力してください。海外生まれの方も、日本時間に換算する必要はありません。",
          en: "2. Enter the local calendar date of your birthplace, as written on your birth record. If you were born abroad, there's no need to convert it to Japan time.",
          hi: "2. जन्म स्थान की स्थानीय तिथि वैसी ही दर्ज करें जैसी जन्म प्रमाण-पत्र में लिखी है। विदेश में जन्मे हों तो उसे जापान समय में बदलने की आवश्यकता नहीं है।",
          ko: "2. 출생지의 현지 날짜를 출생 기록에 적힌 그대로 입력하세요. 해외에서 태어났더라도 일본 시간으로 환산할 필요는 없습니다.",
        },
        {
          ja: "3. 登録したお名前がローマ字なら、名前の数は自動で表示されます。漢字やかなで登録している場合は、表示される入力欄にローマ字でお名前を入れてください。",
          en: "3. If the name you saved is in Latin letters, the name number appears automatically. If it's in kanji or kana, type your name in Latin letters into the field that appears.",
          hi: "3. यदि सहेजा गया नाम रोमन अक्षरों में है, तो नाम अंक अपने आप दिखता है। यदि वह कांजी या काना में है, तो दिखने वाले फ़ील्ड में रोमन अक्षरों में नाम लिखें।",
          ko: "3. 저장한 이름이 로마자라면 이름 수가 자동으로 표시됩니다. 한자나 가나로 저장했다면 나타나는 입력란에 로마자로 이름을 입력하세요.",
        },
        {
          ja: "よくある間違い：「ō」「ū」のような長音記号付きの文字は計算対象外のため、名前の数が表示されません。「Sato」「Satou」「Satoh」のように、ふだんパスポートなどで使っている綴りで入力しましょう。綴りが違えば結果も変わります。",
          en: "Common mistake: letters with macrons such as ō or ū aren't accepted, so no name number will appear. Use the spelling you normally use, for example on your passport — Sato, Satou and Satoh each give a different result.",
          hi: "आम गलती: ō या ū जैसे दीर्घ-चिह्न वाले अक्षर स्वीकार नहीं होते, इसलिए नाम अंक नहीं दिखेगा। वही वर्तनी लिखें जो आप सामान्यतः उपयोग करते हैं, जैसे पासपोर्ट पर — Sato, Satou और Satoh के परिणाम अलग-अलग आते हैं।",
          ko: "흔한 실수: ō, ū처럼 장음 기호가 붙은 문자는 계산 대상이 아니어서 이름 수가 표시되지 않습니다. 여권 등에서 평소 쓰는 철자로 입력하세요. Sato, Satou, Satoh는 각각 결과가 다릅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される3つの数",
        en: "Reading the result: the three numbers shown",
        hi: "परिणाम कैसे पढ़ें: दिखाए गए तीन अंक",
        ko: "결과 읽는 법: 표시되는 세 가지 수",
      },
      body: [
        {
          ja: "結果には最大で3つの数が、それぞれの「支配星」とともに表示されます。どの数も1〜9の一桁になるまで各桁を足し続けて求めます。",
          en: "The result shows up to three numbers, each with its ruling planet. Every number is found by adding digits together repeatedly until a single digit from 1 to 9 remains.",
          hi: "परिणाम में अधिकतम तीन अंक, प्रत्येक अपने स्वामी ग्रह के साथ, दिखाए जाते हैं। हर अंक अंकों को बार-बार जोड़कर तब तक निकाला जाता है जब तक 1 से 9 के बीच एक अंक न बचे।",
          ko: "결과에는 최대 세 가지 수가 각각의 지배 행성과 함께 표시됩니다. 모든 수는 1~9의 한 자리가 될 때까지 각 자릿수를 계속 더해 구합니다.",
        },
        {
          ja: "支配星の対応は、1＝太陽、2＝月、3＝木星、4＝ラーフ、5＝水星、6＝金星、7＝ケトゥ、8＝土星、9＝火星です。ラーフとケトゥは、インド占星術で月の軌道と黄道の交点を指す「影の惑星」です。",
          en: "The planetary rulers are 1 = Sun, 2 = Moon, 3 = Jupiter, 4 = Rahu, 5 = Mercury, 6 = Venus, 7 = Ketu, 8 = Saturn and 9 = Mars. Rahu and Ketu are the 'shadow planets' of Indian astrology — the points where the Moon's orbit crosses the ecliptic.",
          hi: "स्वामी ग्रह इस प्रकार हैं: 1 = सूर्य, 2 = चंद्र, 3 = गुरु, 4 = राहु, 5 = बुध, 6 = शुक्र, 7 = केतु, 8 = शनि, 9 = मंगल। राहु और केतु भारतीय ज्योतिष के 'छाया ग्रह' हैं — वे बिंदु जहाँ चंद्रमा की कक्षा क्रांतिवृत्त को काटती है।",
          ko: "지배 행성은 1=태양, 2=달, 3=목성, 4=라후, 5=수성, 6=금성, 7=케투, 8=토성, 9=화성입니다. 라후와 케투는 인도 점성술에서 달의 궤도와 황도가 만나는 교점을 가리키는 '그림자 행성'입니다.",
        },
      ],
      bullets: [
        {
          ja: "ムーランク（誕生数）：生まれた「日」だけから求める数です。日付の数字を一桁になるまで足します。生まれ持った気質や、ふだんの自分らしさを映す数とされます。",
          en: "Mulank (birth number): found from the day of the month alone, reduced to a single digit. It's traditionally read as your innate temperament and everyday self.",
          hi: "मूलांक (जन्म अंक): केवल जन्म के दिनांक से निकाला जाता है, एक अंक तक घटाकर। परंपरागत रूप से इसे आपके स्वाभाविक स्वभाव और दैनिक व्यक्तित्व के रूप में पढ़ा जाता है।",
          ko: "물랑크(출생수): 태어난 '일'만으로 구하는 수로, 한 자리가 될 때까지 더합니다. 타고난 기질과 평소의 자기다움을 비추는 수로 여겨집니다.",
        },
        {
          ja: "バギャーンク（運命数）：生年月日の年・月・日のすべての数字を足して求めます。人生全体の方向性やテーマを示す数とされます。",
          en: "Bhagyank (destiny number): found by adding every digit of the year, month and day. It's traditionally read as the direction and theme of your life as a whole.",
          hi: "भाग्यांक (भाग्य अंक): वर्ष, माह और दिन के सभी अंकों को जोड़कर निकाला जाता है। इसे परंपरागत रूप से जीवन की समग्र दिशा और विषय के रूप में पढ़ा जाता है।",
          ko: "바갼크(운명수): 생년월일의 연·월·일 숫자를 모두 더해 구합니다. 인생 전체의 방향성과 주제를 나타내는 수로 여겨집니다.",
        },
        {
          ja: "名前の数：ローマ字のお名前の各文字をカルデア式の数値表（例：A・I・J・Q・Y＝1、B・K・R＝2）で数に置き換え、合計を一桁にします。空白やハイフンは0として扱われます。",
          en: "Name number: each Latin letter of your name is converted with the Chaldean table (for example A, I, J, Q, Y = 1; B, K, R = 2), and the total is reduced to one digit. Spaces and hyphens count as zero.",
          hi: "नाम अंक: नाम के हर रोमन अक्षर को कैल्डियन तालिका से अंक में बदला जाता है (जैसे A, I, J, Q, Y = 1; B, K, R = 2), और योग को एक अंक तक घटाया जाता है। रिक्त स्थान और हाइफ़न शून्य माने जाते हैं।",
          ko: "이름 수: 로마자 이름의 각 글자를 칼데아식 수치표(예: A·I·J·Q·Y=1, B·K·R=2)로 숫자로 바꾸고 합계를 한 자리로 줄입니다. 공백과 하이픈은 0으로 처리됩니다.",
        },
        {
          ja: "支配星：それぞれの数に対応する惑星です。例えば、ムーランクが5なら支配星は水星で、伝統的には知性や会話、機転と結びつけて読まれます。",
          en: "Ruling planet: the planet paired with each number. For example, a Mulank of 5 is ruled by Mercury, traditionally associated with intellect, communication and quick wit.",
          hi: "स्वामी ग्रह: हर अंक से जुड़ा ग्रह। उदाहरण के लिए, मूलांक 5 का स्वामी बुध है, जिसे परंपरागत रूप से बुद्धि, संवाद और तत्परता से जोड़ा जाता है।",
          ko: "지배 행성: 각 수에 대응하는 행성입니다. 예를 들어 물랑크가 5라면 지배 행성은 수성이며, 전통적으로 지성·대화·재치와 연결해 읽습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "計算例：1990年7月23日生まれ「Hanako Sato」さんの場合",
        en: "Worked example: \"Hanako Sato\", born 23 July 1990",
        hi: "उदाहरण: \"Hanako Sato\", जन्म 23 जुलाई 1990",
        ko: "계산 예: 1990년 7월 23일생 \"Hanako Sato\" 씨의 경우",
      },
      body: [
        {
          ja: "ツールの内部で行っている計算を、架空の例で手順どおりに追ってみましょう。ご自身の結果を検算するときの参考にもなります。",
          en: "Let's follow the exact steps the tool performs, using a fictional example. You can use the same steps to double-check your own result.",
          hi: "आइए एक काल्पनिक उदाहरण से वही चरण देखें जो टूल भीतर करता है। अपने परिणाम की जाँच के लिए भी आप इन्हीं चरणों का उपयोग कर सकते हैं।",
          ko: "도구 내부에서 하는 계산을 가상의 예로 단계별로 따라가 보겠습니다. 자신의 결과를 검산할 때도 참고가 됩니다.",
        },
      ],
      bullets: [
        {
          ja: "ムーランク：生まれた日は23日。2＋3＝5なので、ムーランクは5、支配星は水星です。",
          en: "Mulank: the birth day is 23. 2 + 3 = 5, so the Mulank is 5, ruled by Mercury.",
          hi: "मूलांक: जन्म दिनांक 23 है। 2 + 3 = 5, इसलिए मूलांक 5 है, स्वामी बुध।",
          ko: "물랑크: 태어난 날은 23일. 2+3=5이므로 물랑크는 5, 지배 행성은 수성입니다.",
        },
        {
          ja: "バギャーンク：1＋9＋9＋0＋7＋2＋3＝31。さらに3＋1＝4なので、バギャーンクは4、支配星はラーフです。",
          en: "Bhagyank: 1 + 9 + 9 + 0 + 7 + 2 + 3 = 31, then 3 + 1 = 4. The Bhagyank is 4, ruled by Rahu.",
          hi: "भाग्यांक: 1 + 9 + 9 + 0 + 7 + 2 + 3 = 31, फिर 3 + 1 = 4। भाग्यांक 4 है, स्वामी राहु।",
          ko: "바갼크: 1+9+9+0+7+2+3=31, 다시 3+1=4이므로 바갼크는 4, 지배 행성은 라후입니다.",
        },
        {
          ja: "名前の数（HANAKO）：H5＋A1＋N5＋A1＋K2＋O7＝21。",
          en: "Name number, HANAKO: H5 + A1 + N5 + A1 + K2 + O7 = 21.",
          hi: "नाम अंक, HANAKO: H5 + A1 + N5 + A1 + K2 + O7 = 21।",
          ko: "이름 수(HANAKO): H5+A1+N5+A1+K2+O7=21.",
        },
        {
          ja: "名前の数（SATO）：S3＋A1＋T4＋O7＝15。合計21＋15＝36、3＋6＝9なので、名前の数は9、支配星は火星です。",
          en: "Name number, SATO: S3 + A1 + T4 + O7 = 15. The total is 21 + 15 = 36, and 3 + 6 = 9, so the name number is 9, ruled by Mars.",
          hi: "नाम अंक, SATO: S3 + A1 + T4 + O7 = 15। कुल 21 + 15 = 36, और 3 + 6 = 9, इसलिए नाम अंक 9 है, स्वामी मंगल।",
          ko: "이름 수(SATO): S3+A1+T4+O7=15. 합계 21+15=36, 3+6=9이므로 이름 수는 9, 지배 행성은 화성입니다.",
        },
        {
          ja: "もし「Satou」と綴ると、Uの6が加わって合計42、4＋2＝6となり、名前の数は6（金星）に変わります。綴りの選び方が結果を左右する一例です。",
          en: "Spelled \"Satou\" instead, the U adds 6 for a total of 42, and 4 + 2 = 6 — the name number becomes 6 (Venus). It shows how much the choice of spelling matters.",
          hi: "यदि \"Satou\" लिखें, तो U का 6 जुड़कर योग 42 होता है, और 4 + 2 = 6 — नाम अंक 6 (शुक्र) हो जाता है। यह दिखाता है कि वर्तनी का चुनाव कितना मायने रखता है।",
          ko: "만약 \"Satou\"로 쓰면 U의 6이 더해져 합계 42, 4+2=6이 되어 이름 수가 6(금성)으로 바뀝니다. 철자 선택이 결과를 좌우하는 예입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋の数秘術との違い",
        en: "Background: how this differs from Western numerology",
        hi: "पृष्ठभूमि: पश्चिमी अंक ज्योतिष से अंतर",
        ko: "배경 지식: 서양 수비학과의 차이",
      },
      body: [
        {
          ja: "日本の雑誌やウェブでよく見る数秘術は、ピタゴラス式と呼ばれる西洋の流派が中心です。生年月日の合計を「ライフパスナンバー」とし、11・22・33を「マスターナンバー」として特別に扱うのが一般的です。",
          en: "The numerology most often seen in Japanese magazines and websites is the Western, so-called Pythagorean school. It typically calls the birth-date total the 'life path number' and treats 11, 22 and 33 specially as 'master numbers'.",
          hi: "जापानी पत्रिकाओं और वेबसाइटों में दिखने वाला अंक ज्योतिष ज़्यादातर पश्चिमी, तथाकथित पाइथागोरियन शैली का है। इसमें जन्म तिथि के योग को 'लाइफ़ पाथ नंबर' कहा जाता है और 11, 22, 33 को 'मास्टर नंबर' के रूप में विशेष माना जाता है।",
          ko: "일본 잡지나 웹에서 흔히 보는 수비학은 피타고라스식이라 불리는 서양 유파가 중심입니다. 생년월일 합계를 '라이프 패스 넘버'라 하고 11·22·33을 '마스터 넘버'로 특별히 다루는 것이 일반적입니다.",
        },
        {
          ja: "一方、インドで親しまれている数秘術（アンク・ジョーティシュ）では、すべての数を1〜9まで還元し、各数を九つの惑星（ナヴァグラハ）に対応させて読みます。当ツールもこの方式で、マスターナンバーの例外は設けていません。",
          en: "Numerology as practised in India (ank jyotish), by contrast, reduces every number to 1–9 and reads each one through one of the nine planets, the navagraha. This tool follows that approach and makes no master-number exception.",
          hi: "इसके विपरीत, भारत में प्रचलित अंक ज्योतिष हर अंक को 1–9 तक घटाता है और हर अंक को नवग्रहों में से एक के माध्यम से पढ़ता है। यह टूल उसी पद्धति का पालन करता है और मास्टर नंबर का कोई अपवाद नहीं रखता।",
          ko: "반면 인도에서 친숙한 수비학(앙크 지오티시)은 모든 수를 1~9로 환원하고, 각 수를 아홉 행성(나바그라하)에 대응시켜 읽습니다. 이 도구도 이 방식이며, 마스터 넘버 예외는 두지 않습니다.",
        },
        {
          ja: "名前の数に使うカルデア式の表は、AからIまでを順に1〜9とするピタゴラス式の表とは異なり、文字の音に基づいて1〜8を割り当て、9はどの文字にも与えません。そのため同じ名前でも、西洋式の計算とは結果が違うことがあります。",
          en: "The Chaldean table used for the name number differs from the Pythagorean one, which simply numbers A to I as 1 to 9. It assigns 1 to 8 based on the sound of each letter and gives 9 to no letter at all, so the same name can produce a different result from a Western calculation.",
          hi: "नाम अंक के लिए प्रयुक्त कैल्डियन तालिका पाइथागोरियन तालिका से अलग है, जो A से I तक को सीधे 1 से 9 देती है। कैल्डियन तालिका अक्षरों की ध्वनि के आधार पर 1 से 8 देती है और 9 किसी अक्षर को नहीं देती, इसलिए एक ही नाम का परिणाम पश्चिमी गणना से अलग हो सकता है।",
          ko: "이름 수에 쓰는 칼데아식 표는 A부터 I까지를 차례로 1~9로 매기는 피타고라스식 표와 달리, 글자의 소리에 따라 1~8을 부여하고 9는 어떤 글자에도 주지 않습니다. 그래서 같은 이름이라도 서양식 계산과 결과가 다를 수 있습니다.",
        },
        {
          ja: "なお、数秘術はインド占星術（ジョーティシュ）そのものではありません。支配星という考え方は共有していますが、出生時の天体配置を計算するホロスコープとは別の、隣接する伝統として扱っています。",
          en: "Numerology is also not Jyotish itself. It shares the idea of ruling planets, but this site treats it as a neighbouring tradition, separate from the horoscope, which calculates the actual sky at birth.",
          hi: "ध्यान दें कि अंक ज्योतिष स्वयं ज्योतिष (कुंडली विज्ञान) नहीं है। यह स्वामी ग्रह का विचार साझा करता है, पर यह साइट इसे जन्म के समय के आकाश की गणना करने वाली कुंडली से अलग, एक पड़ोसी परंपरा मानती है।",
          ko: "덧붙여 수비학은 인도 점성술(지오티시) 자체가 아닙니다. 지배 행성이라는 개념은 공유하지만, 출생 시 천체 배치를 계산하는 호로스코프와는 별개의 인접 전통으로 다룹니다.",
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
          ja: "数秘術の結果を受け止めるときに、つまずきやすいポイントをまとめました。",
          en: "Here are the points where people most often get tripped up when reading a numerology result.",
          hi: "अंक ज्योतिष का परिणाम पढ़ते समय लोग अक्सर जिन बातों में उलझते हैं, वे यहाँ दी गई हैं।",
          ko: "수비학 결과를 받아들일 때 걸려 넘어지기 쉬운 점들을 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "「運命数」という言葉は流派によって意味が違います。西洋式では名前から求める数を指すこともありますが、当ツールの運命数（バギャーンク）は生年月日全体から求める数です。",
          en: "'Destiny number' means different things in different schools. In Western numerology it can refer to a number taken from the name, but this tool's destiny number (Bhagyank) comes from the full birth date.",
          hi: "'भाग्य अंक' शब्द का अर्थ अलग-अलग शैलियों में अलग है। पश्चिमी पद्धति में यह नाम से निकला अंक भी हो सकता है, पर इस टूल का भाग्यांक पूरी जन्म तिथि से निकलता है।",
          ko: "'운명수'라는 말은 유파마다 뜻이 다릅니다. 서양식에서는 이름에서 구한 수를 가리키기도 하지만, 이 도구의 운명수(바갼크)는 생년월일 전체에서 구한 수입니다.",
        },
        {
          ja: "「悪い数字」はありません。4（ラーフ）や8（土星）も、伝統的には忍耐や独自性といった資質と結びつけて読まれます。数字だけで吉凶を決めつける必要はありません。",
          en: "There are no 'bad numbers'. Even 4 (Rahu) and 8 (Saturn) are traditionally linked with qualities such as perseverance and originality. A number alone doesn't decide good or bad fortune.",
          hi: "कोई 'बुरा अंक' नहीं होता। 4 (राहु) और 8 (शनि) को भी परंपरागत रूप से धैर्य और मौलिकता जैसे गुणों से जोड़ा जाता है। केवल अंक से शुभ-अशुभ तय करने की आवश्यकता नहीं।",
          ko: "'나쁜 숫자'는 없습니다. 4(라후)나 8(토성)도 전통적으로 인내나 독창성 같은 자질과 연결해 읽습니다. 숫자만으로 길흉을 단정할 필요는 없습니다.",
        },
        {
          ja: "名前の数のために改名する必要はありません。名前の数は綴りひとつで変わる、いわば遊び心のある指標です。大切な決断の根拠にはしないでください。",
          en: "You don't need to change your name for its number. The name number shifts with a single letter of spelling, so treat it as a playful indicator, not grounds for an important decision.",
          hi: "नाम अंक के लिए नाम बदलने की आवश्यकता नहीं है। एक अक्षर की वर्तनी से ही नाम अंक बदल जाता है, इसलिए इसे एक हल्का संकेतक मानें, किसी महत्वपूर्ण निर्णय का आधार नहीं।",
          ko: "이름 수 때문에 개명할 필요는 없습니다. 이름 수는 철자 하나로도 바뀌는 가벼운 지표이니, 중요한 결정의 근거로 삼지 마세요.",
        },
        {
          ja: "数秘術と星座占いの結果が一致しなくても問題ありません。両者はまったく別の材料（数字と天体）から読むものなので、異なる面を映していると考えるのが自然です。",
          en: "It's fine if your numerology and your astrology don't agree. They read entirely different material — digits versus the sky — so it's natural for them to reflect different sides of you.",
          hi: "यदि अंक ज्योतिष और ज्योतिष के परिणाम मेल न खाएँ तो कोई समस्या नहीं। दोनों बिल्कुल अलग आधार — अंक और आकाश — से पढ़ते हैं, इसलिए उनका आपके अलग-अलग पहलू दिखाना स्वाभाविक है।",
          ko: "수비학과 점성술 결과가 일치하지 않아도 괜찮습니다. 둘은 전혀 다른 재료(숫자와 천체)로 읽는 것이므로 서로 다른 면을 비춘다고 보는 것이 자연스럽습니다.",
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
          ja: "数秘術は、自分を見つめ直すきっかけや楽しみとしてお使いください。結果は医療・法律・金融などの専門的な助言に代わるものではありません。健康やお金、契約に関わる判断は、必ず専門家にご相談ください。",
          en: "Please use numerology as a prompt for self-reflection and for enjoyment. The result is no substitute for medical, legal or financial advice; for decisions about health, money or contracts, always consult a qualified professional.",
          hi: "कृपया अंक ज्योतिष का उपयोग आत्म-चिंतन और आनंद के लिए करें। परिणाम चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है; स्वास्थ्य, धन या अनुबंध से जुड़े निर्णयों के लिए हमेशा योग्य विशेषज्ञ से परामर्श करें।",
          ko: "수비학은 자신을 돌아보는 계기이자 즐거움으로 이용해 주세요. 결과는 의료·법률·금융 등 전문적인 조언을 대신하지 않습니다. 건강, 돈, 계약에 관한 판단은 반드시 전문가와 상담하세요.",
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
          ja: "数秘術とあわせて、天体の配置から読むインド占星術のツールや解説もご覧ください。",
          en: "Alongside numerology, explore the Indian-astrology tools and guides that read the actual planetary positions.",
          hi: "अंक ज्योतिष के साथ, वास्तविक ग्रह-स्थिति से पढ़ने वाले भारतीय ज्योतिष के टूल और मार्गदर्शिकाएँ भी देखें।",
          ko: "수비학과 함께 실제 천체 배치로 읽는 인도 점성술 도구와 해설도 살펴보세요.",
        },
      ],
      links: [
        {
          href: "/tools/baby-names",
          label: { ja: "赤ちゃんの名前（ナクシャトラと数秘術）", en: "Baby names (nakshatra and numerology)", hi: "शिशु के नाम (नक्षत्र और अंक ज्योतिष)", ko: "아기 이름(낙샤트라와 수비학)" },
        },
        {
          href: "/tools/birth-chart",
          label: { ja: "無料ホロスコープ作成", en: "Free birth chart", hi: "निःशुल्क जन्म कुंडली", ko: "무료 출생 차트" },
        },
        {
          href: "/grahas",
          label: { ja: "九つの惑星（ナヴァグラハ）解説", en: "The nine planets (navagraha)", hi: "नवग्रह", ko: "아홉 행성(나바그라하) 해설" },
        },
        {
          href: "/tools/moon-sign",
          label: { ja: "月星座を調べる", en: "Moon sign calculator", hi: "चंद्र राशि कैलकुलेटर", ko: "달 별자리 찾기" },
        },
        {
          href: "/learn-jyotish/introduction/western-differences",
          label: { ja: "インド占星術と西洋占星術の違い", en: "Vedic vs Western astrology", hi: "वैदिक और पश्चिमी ज्योतिष का अंतर", ko: "인도 점성술과 서양 점성술의 차이" },
        },
      ],
    },
  ],
};
