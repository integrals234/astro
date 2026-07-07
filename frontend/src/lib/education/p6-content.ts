import type { WisdomArticle } from "./types";
import { educationImages, eduImage } from "./education-images";

/** Articles sourced verbatim from temp-content/p6.txt (link-scrubbed, headings normalized) */
export const p6Articles: WisdomArticle[] = [
  {
    id: "mahadashas",
    section: "mahadashas",
    title: {
      en: "Mahadashas – Planetary Periods",
      ja: "マハダシャー – 惑星時代"
    },
    related: [
      "transits",
      "birth-time-errors",
      "functional-benefics-malefics",
      "planetary-aspects"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Explaining the key features of the Mahadasha planetary periods used in prediction, their duration, possible effects, and how these influences are modified by the Antardasha sub-periods.",
          ja: "概要: 予測に使用されるマハダシャー惑星周期の主な特徴、その期間、考えられる影響、およびこれらの影響がアンタルダシャー サブ周期によってどのように変更されるかを説明します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish astrologers use Mahadashas to predict periods in life when significant changes may occur, along with the events—both favourable and unfavourable—that are associated with them.",
          ja: "ジョーティッシュの占星術師は、マハダシャーを使用して、人生に重大な変化が起こる可能性のある時期と、それに関連する好ましい出来事と悪い出来事の両方を予測します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "During a particular Mahadasha, the indications in the birth-chart connected with that planet are most likely to manifest. Mahadashas therefore help astrologers determine when the \"cosmic postman\" is likely to deliver our \"karmic packages.\"",
          ja: "特定のマハダシャーの間、その惑星に関連する出生図の兆候が現れる可能性が最も高くなります。したがって、マハダシャーは、占星術師が「宇宙の郵便配達員」がいつ私たちの「カルマの小包」を配達する可能性が高いかを判断するのに役立ちます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha system is unique to Jyotish. Although it is sometimes written as Mahadasa, it is pronounced Mahadasha.",
          ja: "マハダシャー システムはジョーティッシュに特有のものです。マハダサと書かれることもありますが、マハダシャーと発音します。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Features of Mahadashas",
          ja: "マハダシャーの主な特徴"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The Mahadasha system of prediction is unique to Vedic Astrology and is not based upon planetary transits.",
          ja: "• マハダシャーの予測システムはヴェーダ占星術に特有のものであり、惑星の通過に基づいていません。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Each major period is governed by a different planet.",
          ja: "• 各主要期間は異なる惑星によって統治されます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The complete sequence of Mahadashas covers a total of 120 years.",
          ja: "• マハダシャーの完全な一連の流れは、合計 120 年に及びます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Although the duration of each Mahadasha remains the same for everyone, each individual begins at a different point in the 120-year cycle. This starting point is determined by the longitude of the Moon at birth in the Sidereal Zodiac.",
          ja: "• 各マハダシャーの期間は誰にとっても同じですが、各個人は 120 年のサイクルの異なる時点から始まります。この開始点は、恒星黄道帯における出生時の月の経度によって決まります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Mahadashas are one of the most important tools for accurate prediction. They represent the point where the static factors shown in the birth-chart—such as planets in signs and houses—interact with the dynamic timing system of the Mahadashas. This enables astrologers to determine both what may happen and when it may happen.",
          ja: "• マハダシャーは、正確な予測のための最も重要なツールの 1 つです。それらは、出生図に示されている静的要素 (サインやハウス内の惑星など) がマハダシャーの動的なタイミング システムと相互作用するポイントを表しています。これにより、占星術師は何が起こるか、いつ起こるかを判断することができます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Several Mahadasha systems exist, but the most widely used and the one discussed here is the Vimsottari Dasha system.",
          ja: "• マハダシャー システムはいくつか存在しますが、最も広く使用されており、ここで説明するのはヴィムソタリ ダシャー システムです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Jyotish software provides by far the easiest method of calculating an individual's Mahadashas, although traditional tables are also available.",
          ja: "• ジョーティッシュ ソフトウェアは、個人のマハダシャーを計算する最も簡単な方法を提供しますが、従来の表も利用できます。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Mahadasha Periods – Duration in Years",
          ja: "マハダシャー期間 - 年単位の期間"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Duration of Planetary Mahadashas in Jyotish Astrology",
          ja: "ジョーティッシュ占星術における惑星マハダシャーの期間"
        }
      },
      eduImage(educationImages.mahadashaPeriodYears, {
        en: "Mahadasha period — duration in years for each planet",
        ja: "マハダシャー期間 — 各惑星の年数",
      }),
      {
        type: "heading",
        level: 3,
        text: {
          en: "Mahadasha Sequence",
          ja: "マハダシャー シーケンス"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha sequence follows the order shown in the diagram above.",
          ja: "マハダシャー シーケンスは、上の図に示されている順序に従います。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "This sequence remains exactly the same for everyone, regardless of Ascendant, Moon sign, or any other chart factor.",
          ja: "この順序は、アセンダント、月星座、その他のチャート要素に関係なく、誰にとってもまったく同じです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha operating at the time of birth is determined by the longitude of the Moon in the Sidereal Zodiac at the moment of birth.",
          ja: "誕生時に動作するマハダシャーは、誕生時の恒星黄道帯の月の経度によって決まります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The Moon's position also determines how much of that Mahadasha remains to be experienced. For example, a person may begin life nine years into a Saturn Mahadasha. Since Saturn's Mahadasha lasts a total of nineteen years, there would be ten years remaining before the next Mahadasha begins. In this case, the native would enter a Mercury Mahadasha at age ten.",
          ja: "月の位置は、そのマハダシャーをどれだけ経験できるかによっても決まります。たとえば、人は土星マハダシャーになってから 9 年後に人生を始めるかもしれません。土星のマハダシャーは合計 19 年間続くため、次のマハダシャーが始まるまでには 10 年が残っていることになります。この場合、ネイティブは10歳でマーキュリー・マハダシャーに入るでしょう。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "After the seventeen-year Mercury Mahadasha, the individual would move into a Ketu Mahadasha at age twenty-seven. This would then be followed by the Venus Mahadasha, then the Sun Mahadasha, and so on through the established sequence.",
          ja: "17年間の水星マハダシャーの後、その人は27歳でケートゥ・マハダシャーに移ります。次に、確立された順序で金星マハダシャー、太陽マハダシャーなどが続きます。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Effects of Mahadashas",
          ja: "マハダシャーの効果"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A useful way to understand Mahadashas is through the analogy of a theatrical play. In the drama of life, all of the main characters—represented by the planets—are always present. However, many remain waiting behind the scenes until their time arrives. We may have to wait until \"Act Three\" before the hero or villain makes an appearance.",
          ja: "マハダシャーを理解する便利な方法は、演劇に例えることです。人生のドラマには、惑星に代表されるすべての主要登場人物が常に存在します。しかし、多くの人はその時が来るまで舞台裏で待ち続けています。ヒーローや悪役が登場する前に、「第 3 幕」まで待たなければならないかもしれません。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A skilled Vedic astrologer can identify these latent potentials within the birth-chart and use them to forecast future developments. By understanding the unfolding pattern of planetary periods, they can make predictions extending many years into the future.",
          ja: "熟練したヴェーダ占星術師は、出生図内のこれらの潜在的な可能性を特定し、将来の展開を予測するために使用できます。惑星周期の展開パターンを理解することで、何年も先の未来を予測することができます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Astrologers often describe a range of possible events during a Mahadasha, although only some of these possibilities may actually occur. This should not be viewed as a weakness in prediction. Rather, the classical texts provide lists of potential outcomes, and astrologers communicate these possibilities accordingly. Even when exact events cannot be specified, they can usually identify the areas of life where benefits or challenges are most likely to arise. As the saying goes, \"forewarned is forearmed.\"",
          ja: "占星術師はマハダシャー中に起こり得るさまざまな出来事について説明することがよくありますが、実際に起こるのはこれらの可能性のうちの一部だけです。これを予測の弱点と見なすべきではありません。むしろ、古典的なテキストは潜在的な結果のリストを提供しており、占星術師はそれらの可能性をそれに応じて伝えています。正確な出来事を特定できない場合でも、通常は、利益や課題が最も発生する可能性が最も高い人生の領域を特定できます。ことわざにあるように、「事前警告は事前準備」です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "It is as though everything connected with a particular planet becomes activated during its Mahadasha. This includes:",
          ja: "あたかも、特定の惑星に関連するすべてのものが、そのマハダシャー中に活性化されるかのようです。これには以下が含まれます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The planet's natural significations",
          ja: "• 地球の自然の意味"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The houses it rules",
          ja: "• それが支配する家"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The sign and house it occupies",
          ja: "• 看板とそれが住んでいる家"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Planets it aspects",
          ja: "• アスペクトする惑星"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Other important associations connected with it",
          ja: "• それに関連するその他の重要な関連性"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Consequently, the most significant events experienced during a Mahadasha are often directly related to the placement and condition of that planet in the birth-chart.",
          ja: "その結果、マハダシャー中に経験した最も重要な出来事は、出生図におけるその惑星の位置と状態に直接関係していることがよくあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "While the indications shown in a natal chart remain valid throughout life, a Mahadasha acts like a switch that activates specific portions of the chart. The houses and factors connected with the Mahadasha planet become especially prominent during that period and often indicate the major life themes and events that arise.",
          ja: "出生図に示されている兆候は生涯を通じて有効ですが、マハダシャーは図の特定の部分を活性化するスイッチのように機能します。マハダシャー惑星に関連するハウスと要素は、この期間に特に顕著になり、多くの場合、人生の主要なテーマや発生する出来事を示します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Assessing Mahadasha effects becomes more complex because planets do not operate solely according to their natural characteristics. This is where the concepts of functional benefics and functional malefics become important.",
          ja: "惑星はその自然の特性のみに従って機能するわけではないため、マハダシャーの効果の評価はより複雑になります。ここで、機能的有益性と機能的有害性の概念が重要になります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A benefic functions as a positive agent, while a malefic acts as a challenging or disruptive influence. For example, Jupiter is naturally considered a benefic planet. However, for certain ascendants—such as Libra Ascendant—it can function as a malefic due to the houses it rules. During Jupiter's Mahadasha, its functional nature becomes highly significant, and its negative tendencies may become more visible and active.",
          ja: "ベネフィックはポジティブな要素として機能しますが、マレフィックは挑戦的または破壊的な影響として機能します。たとえば、木星は当然ながら吉祥の惑星と考えられています。ただし、天秤座のアセンダントなど、特定のアセンダントにとっては、支配するハウスの関係で凶星として機能する可能性があります。木星のマハダシャー期間中、その機能的な性質が非常に重要になり、その否定的な傾向がより目に見えて活発になる可能性があります。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Antardashas: Sub-Periods of Mahadashas",
          ja: "アンタルダシャー: マハダシャーの亜時代"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Each major period, known as a Mahadasha, is ruled by one of the planets. Within every Mahadasha there are also nine secondary periods known as Antardashas, each governed by a planet. These sub-periods significantly modify the effects of the main Mahadasha.",
          ja: "マハダシャーとして知られる各主要期間は、惑星の 1 つによって支配されます。各マハダシャーの中には、アンタルダシャーとして知られる 9 つの二次期間もあり、それぞれが惑星によって統治されています。これらのサブ期間は、メインのマハダシャーの効果を大幅に変更します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "While identifying general positive or negative trends during a Mahadasha is often straightforward, predicting specific events during Antardashas can be considerably more challenging, even for an experienced Jyotishi.",
          ja: "マハダシャー中の一般的なポジティブまたはネガティブな傾向を特定することは多くの場合簡単ですが、アンタルダシャー中の特定の出来事を予測することは、経験豊富なジョーティシであってもかなり難しい場合があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "During the Mahadasha of a strong and well-placed functional benefic, if the Antardasha is also governed by another benefic planet, we can generally expect highly favourable outcomes.",
          ja: "強力で適切に配置された機能的恩恵のマハダシャー中に、アンタルダシャーが別の有益な惑星によっても支配されている場合、一般に非常に有利な結果が期待できます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Naturally, the overall strength of the birth-chart remains important, as it indicates how well an individual can withstand the challenges presented by difficult Mahadasha and Antardasha combinations.",
          ja: "当然のことながら、出生図の全体的な強さは依然として重要であり、それは個人が困難なマハダシャとアンタルダシャの組み合わせによってもたらされる課題にどれだけ耐えられるかを示します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "When discussing minor periods, two planets are always mentioned. For example, a Venus–Mars period indicates that Venus governs the Mahadasha (major period), while Mars governs the Antardasha (sub-period).",
          ja: "マイナーな時代について議論するとき、常に 2 つの惑星が言及されます。たとえば、金星-火星の期間は、金星がマハダシャー (メジャー期間) を支配し、火星がアンタルダシャー (サブ期間) を支配していることを示します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The sequence of Antardashas within each Mahadasha follows the same order as the Mahadasha sequence itself. For example, during a Mars Mahadasha the Antardashas proceed as follows:",
          ja: "各マハダシャー内のアンタルダシャーの順序は、マハダシャーの順序自体と同じ順序に従います。たとえば、火星のマハダシャー中、アンタルダシャーは次のように進みます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Mars–Mars, Mars–Jupiter, Mars–Saturn, Mars–Mercury, Mars–Ketu, Mars–Venus, Mars–Sun, Mars–Moon, and Mars–Rahu.",
          ja: "火星-火星、火星-木星、火星-土星、火星-水星、火星-ケートゥ、火星-金星、火星-太陽、火星-月、火星-ラーフ。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "After the completion of the Mars Mahadasha, the next Mahadasha in the sequence begins.",
          ja: "火星のマハダシャーが完了すると、シーケンスの次のマハダシャーが始まります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "What relative importance should be given to the Mahadasha and Antardasha planets when making predictions?",
          ja: "予測を行う際には、マハダシャー惑星とアンタルダシャー惑星にどのような相対的な重要性を与える必要がありますか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Many Jyotish astrologers attribute approximately 60% of the influence to the Mahadasha planet and around 20% to the Antardasha planet. The remaining 20% is often assigned to planetary transits, particularly those of the slower-moving planets Jupiter and Saturn. This important subject is covered separately in another article.",
          ja: "多くのジョーティッシュ占星術師は、その影響の約 60% がマハダシャー惑星、約 20% がアンタルダシャー惑星によるものであると考えています。残りの 20% は、惑星の通過、特に動きの遅い惑星である木星と土星の通過に割り当てられることがよくあります。この重要な主題については、別の記事で別途取り上げます。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Effects of Birth-Time Errors",
          ja: "出生時間の誤差の影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Although errors in birth-time usually have little effect on the positions of most planets, the Moon is a notable exception because it moves approximately one degree through the zodiac in less than two hours.",
          ja: "通常、出生時間の誤差はほとんどの惑星の位置にほとんど影響を与えませんが、月は 2 時間未満で黄道帯内を約 1 度移動するため、注目に値する例外です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Since the Moon's position is used to calculate Mahadasha starting dates, even small birth-time inaccuracies can significantly affect timing predictions.",
          ja: "月の位置はマハダシャーの開始日の計算に使用されるため、出生時間のわずかな誤差でもタイミングの予測に大きな影響を与える可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A relatively minor birth-time error can shift the beginning of a Mahadasha by several months. If the actual birth-time is earlier than recorded, Mahadasha and Antardasha start dates will occur later than expected. Conversely, if the true birth-time is later, the predicted dates will occur earlier.",
          ja: "比較的軽微な出生時間の誤差により、マハダシャーの開始が数か月ずれる可能性があります。実際の出生時間が記録されている時間より早い場合、マハダシャーとアンタルダシャーの開始日は予想より遅くなります。逆に、実際の出生時間が遅い場合、予測される日付は早くなります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For example, if an individual is born during a Venus Mahadasha, a birth-time error of only twenty minutes can alter the calculated timing of future Mahadashas and Antardashas by more than three months.",
          ja: "たとえば、ある人が金星のマハダシャー中に生まれた場合、わずか 20 分の出生時間の誤差によって、将来のマハダシャーとアンタルダシャーの計算されたタイミングが 3 か月以上変わる可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Highly skilled astrologers can often work backwards from important life events to determine a more accurate birth-time. This process is known as rectification, and Mahadasha analysis plays a major role in achieving it.",
          ja: "高度なスキルを持つ占星術師は、人生の重要な出来事から逆算して、より正確な出生時刻を決定することができます。このプロセスは修正として知られており、マハダシャー分析はこれを達成する上で重要な役割を果たします。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Wow!",
          ja: "おお！"
        }
      }
    ]
  },
  {
    id: "transits",
    section: "transits",
    title: {
      en: "Transits",
      ja: "トランジット"
    },
    related: [
      "mahadashas",
      "planetary-aspects",
      "birth-time-errors",
      "twelve-houses"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Transits provide another method of predicting returning karma, although they are generally considered less important than the Mahadasha periods. Their effects are evaluated on a house-by-house basis counted from the sign occupied by the Moon in the birth-chart. In Jyotish, particular attention is given to the transits of Jupiter and Saturn, especially the period known as Sade Sati.",
          ja: "要約: トランジットは、カルマの帰還を予測する別の方法を提供しますが、一般にマハダシャー期間ほど重要ではないと考えられています。それらの効果は、出生図の月が占める星座から数えてハウスごとに評価されます。ジョーティッシュでは、木星と土星の通過、特にサデ・サティとして知られる期間に特別な注意が払われます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, transits offer another means of predicting the return of karmic influences.",
          ja: "ヴェーダ占星術では、トランジットはカルマの影響の再来を予測する別の手段を提供します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Within Jyotish, however, transits are regarded as less significant than the predictions derived from the major planetary periods known as Mahadashas.",
          ja: "しかし、ジョーティッシュ内では、太陽面通過は、マハダシャーとして知られる主要な惑星周期から導き出された予測ほど重要ではないと考えられています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Although it is difficult to assign exact percentages, many astrologers consider karmic influences to operate approximately as follows:",
          ja: "正確なパーセンテージを割り当てることは困難ですが、多くの占星術師はカルマの影響がおおよそ次のように作用すると考えています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• 60% due to the Mahadasha (Major Dasha) planet",
          ja: "• 60% はマハダシャー (メジャー ダシャー) 惑星によるもの"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• 20% due to the Antardasha (Minor Dasha or Bhukti) planet",
          ja: "• 20% はアンタルダシャ (マイナー ダシャまたはブクティ) 惑星によるもの"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• 20% due to the transiting planets",
          ja: "• 20% トランジット惑星による"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Transit effects are interpreted from the current orbital movement of the planets as they pass through different signs, which correspond to different houses in the birth-chart. In Jyotish, signs and houses correspond exactly and each occupies 30 degrees of the Sidereal Zodiac. Through this process, the dynamic influence of a transiting planet interacts with the static framework of the birth-chart, which is determined by the planetary positions at birth.",
          ja: "トランジット効果は、出生図のさまざまなハウスに対応するさまざまな星座を通過するときの惑星の現在の軌道運動から解釈されます。ジョーティッシュでは、サインとハウスは正確に対応しており、それぞれが恒星黄道帯の 30 度を占めます。このプロセスを通じて、トランジット惑星の動的な影響が、出生時の惑星の位置によって決定される出生図の静的な枠組みと相互作用します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, the houses used to evaluate transit effects are counted from the sign occupied by the Moon at birth. For example, if the Moon is placed in Aries, then the entire sign of Aries becomes the 1st house for transit purposes. The previous sign, Pisces, becomes the 12th house, while the next sign, Taurus, becomes the 2nd house, and so on.",
          ja: "ヴェーダ占星術では、トランジットの効果を評価するために使用されるハウスは、出生時に月が占めていた星座から数えられます。たとえば、月が牡羊座に配置されている場合、牡羊座のサイン全体がトランジットの目的で1番目の家になります。前の星座、魚座は 12 ハウスになり、次の星座、おうし座は 2 ハウスになり、以下同様です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Note: This method applies specifically to the calculation of transits.",
          ja: "注: この方法は、特に通過の計算に適用されます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Some pundits also recommend judging transits from the ordinary Ascendant. However, this approach is generally considered secondary compared with using the Moon sign as the Ascendant for transit analysis. In a sense, it is the reverse of the normal approach used in birth-chart interpretation.",
          ja: "一部の専門家は、トランジットを通常のアセンダントから判断することを推奨しています。ただし、このアプローチは一般に、トランジット分析のアセンダントとして月星座を使用することに比べれば二次的であると考えられています。ある意味、これは出生図の解釈で使用される通常のアプローチの逆です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish astrologers pay particular attention to the transits of the two slowest-moving physical planets, Jupiter and Saturn.",
          ja: "ジョーティッシュの占星術師は、最も動きの遅い 2 つの物理惑星、木星と土星の通過に特に注意を払っています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Jupiter takes approximately one year to pass through each sign, while Saturn spends around three years in a sign. Before finally settling into a sign, Saturn often appears to move backwards and forwards several times due to its apparent retrograde motion.",
          ja: "木星は各星座を通過するのに約 1 年かかりますが、土星は 1 つの星座に約 3 年かかります。土星は、最終的にサインに落ち着く前に、その見かけの逆行運動により、何度か前後に動いているように見えることがよくあります。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "‘Sade Sati’ – Important Transits of Saturn",
          ja: "「サデ・サティ」 – 土星の重要な通過"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In India, people are particularly aware of the challenges that may arise when Saturn transits the 12th, 1st, and 2nd houses from the natal Moon. This seven-and-a-half-year period is known as Sade Sati.",
          ja: "インドでは、土星が出生の月から12室、1室、2室を通過するときに生じる可能性のある課題を人々が特に認識しています。この 7 年半の期間はサデ サティとして知られています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "During this time, Saturn may influence the life areas associated with these houses. For example:",
          ja: "この時期、土星はこれらのハウスに関連する生活領域に影響を与える可能性があります。例えば："
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The 12th house relates to losses and expenditure.",
          ja: "• 12 ハウスは損失と支出に関係します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The 1st house relates to the body, health, and personal wellbeing.",
          ja: "• 第 1 ハウスは、身体、健康、個人の幸福に関係します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The 2nd house relates to accumulated wealth, family resources, and finances.",
          ja: "• 第 2 ハウスは、蓄積された富、家族の資源、財政に関係します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "However, it is important to remember that transits are less influential than Mahadashas. Consequently, Sade Sati may not necessarily be as difficult as many people fear, particularly if:",
          ja: "ただし、トランジットはマハダシャーよりも影響力が低いことを覚えておくことが重要です。したがって、特に次の場合、サデ サティは多くの人が懸念しているほど難しいものではない可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• It occurs during a favourable Mahadasha.",
          ja: "• それは有利なマハダシャー中に発生します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn is a functional benefic for the particular Ascendant.",
          ja: "• 土星は特定のアセンダントにとって機能的に有益です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn is well placed in the birth-chart.",
          ja: "• 土星は出生図の中で良い位置にあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn rules favourable houses (for example, the 9th and 10th houses when counted from the Moon sign).",
          ja: "• 土星は有利なハウスを支配します（たとえば、月星座から数えて 9 番目と 10 番目の家）。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Many Jyotish pundits also agree that when Saturn is the Lord of the Ascendant, as in Aquarius or Capricorn, it generally does not damage the planets in the birth-chart through transit. Likewise, it does not harm the houses that it owns through transit.",
          ja: "また、多くのジョーティッシュの専門家は、水瓶座や山羊座のように土星がアセンダントの主である場合、一般的にトランジットを通じて出生図の惑星にダメージを与えないことに同意しています。同様に、輸送を通じて所有する家屋に損害を与えることはありません。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Detailed Rules for Evaluating Transit Effects",
          ja: "交通効果評価の細則"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "These rules are particularly interesting because they demonstrate that there are important exceptions to consider when using transits for prediction, especially during Saturn's Sade Sati period.",
          ja: "これらのルールは、特に土星のサドサティ期に、予測にトランジットを使用する際に考慮すべき重要な例外があることを示しているため、特に興味深いものです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Clients should therefore understand that Saturn's transits are not always something to fear.",
          ja: "したがって、クライアントは、土星の通過が必ずしも恐れるべきものではないことを理解する必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The following rules are taken from the book \"Predictive Astrology of the Hindus\" by Gopesh Kumar Pandit Ojha (ISBN 10: 812083416X, ISBN 13: 9788120834163).",
          ja: "以下のルールは、Gopesh Kumar Pandit Ojha の書籍「Predictive Astrology of the Hindus」(ISBN 10: 812083416X、ISBN 13: 9788120834163) から引用したものです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "1.",
          ja: "1."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "As Jupiter passes over a radical planet (a planet in the birth-chart), or casts a full aspect upon it, the significations connected with that planet tend to improve. This includes factors such as Karakas and the houses ruled by that planet.",
          ja: "木星がラジカル惑星（出生図の惑星）の上を通過するか、そこにフルアスペクトをキャストすると、その惑星に関連する意味が改善する傾向があります。これには、カラカスやその惑星が支配する家などの要素が含まれます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "2.",
          ja: "2."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Saturn, when acting as the Lord of the Ascendant, will not damage radical planets through its transits. Nor will it damage the houses that it owns by transit. This is an important consideration when making predictions.",
          ja: "土星がアセンダントの主として行動するとき、そのトランジットを通じて過激な惑星にダメージを与えることはありません。また、輸送によって所有する家屋に損害を与えることもありません。これは予測を行う際の重要な考慮事項です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "3.",
          ja: "3."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Pandit Ojha confirms that Saturn's functional benefic or malefic status should be assessed using the Moon sign as the Ascendant.",
          ja: "パンディット・オジャは、土星の機能的な吉凶のステータスは、アセンダントとして月星座を使用して評価されるべきであることを確認しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "He states that Saturn for a Taurus Moon (Lord of the 9th and 10th houses) does not cause as much damage through transit. Similarly, Saturn for a Libra Moon (Lord of the 4th and 5th houses) tends to produce more favourable results.",
          ja: "彼は、おうし座の月（9室と10室の支配星）にある土星は、トランジットを通じてそれほど大きなダメージを引き起こさないと述べています。同様に、天秤座の月（4室と5室の支配星）にある土星は、より好ましい結果を生み出す傾向があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "4.",
          ja: "4."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Planets that are strong in the birth-chart generally produce better results during transit, even when passing through adverse houses, than planets that are weak in the natal chart.",
          ja: "一般的に、出生図で強い惑星は、たとえ逆向きのハウスを通過する場合でも、出生図で弱い惑星よりもトランジット中に良い結果をもたらします。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Strength may arise from factors such as:",
          ja: "強さは次のような要因から生じる可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Placement in a friend's sign or a stronger dignity.",
          ja: "• 友人のサインまたはより強い威厳に配置されます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Benefic aspects.",
          ja: "• 有益な側面。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Other favourable chart conditions.",
          ja: "• その他の良好なチャート状況。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "These positive effects become even stronger when the transiting planet is connected with an Upachaya house in the birth-chart.",
          ja: "これらのプラスの効果は、トランジットの惑星が出生図のウパチャヤ ハウスと関係している場合にさらに強くなります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "5.",
          ja: "5."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The dignity and condition of planets during transit should always be considered. Factors such as exaltation, placement in own sign, combustion, conjunction with malefics, and similar conditions should be used to modify transit predictions accordingly.",
          ja: "輸送中の惑星の尊厳と状態は常に考慮されるべきです。高揚感、自身の星座への配置、燃焼、凶星との結合、および同様の条件などの要素を使用して、トランジット予測をそれに応じて変更する必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The rules listed above represent only a few of the basic principles involved in transit interpretation. There are many additional considerations and refinements that must be taken into account when making accurate transit predictions.",
          ja: "上記のルールは、交通機関の通訳に含まれる基本原則のほんの一部を表しています。正確な交通機関の予測を行う際には、考慮すべき追加の考慮事項や改良点が数多くあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Students of Jyotish who wish to explore this subject in greater depth are advised to consult Pandit Ojha's book for further study and detailed guidance.",
          ja: "この主題をより深く探求したいジョーティッシュの学生は、さらなる研究と詳細な指導のためにパンディット・オジャの本を参照することをお勧めします。"
        }
      }
    ]
  },
  {
    id: "chart-interpretation",
    section: "introduction",
    title: {
      en: "How to Start Interpreting Vedic Horoscopes",
      ja: "ヴェーダ星占いの解釈を始める方法"
    },
    related: [
      "twelve-houses",
      "planetary-aspects",
      "mahadashas",
      "transits"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: The first steps towards successful Vedic Horoscope interpretation. This article examines important spiritual considerations and key factors that should be understood before attempting to interpret a birth-chart using Jyotish astrology. A separate article covers the step-by-step mechanics of Vedic chart interpretation.",
          ja: "概要: ヴェーダ星占いの解釈を成功させるための最初のステップ。この記事では、ジョーティッシュ占星術を使用して出生図を解釈する前に理解しておくべき、重要なスピリチュアルな考慮事項と重要な要素について検討します。別の記事では、ヴェーダチャート解釈の段階的な仕組みについて説明します。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Successful Vedic Horoscope Interpretation",
          ja: "成功したヴェーダ星占い解釈"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "To interpret a Vedic Horoscope successfully, we need much more than simply knowing the planets, houses, and astrological rules of Jyotish.",
          ja: "ヴェーダの星占いをうまく解釈するには、ジョーティッシュの惑星、ハウス、占星術の規則を単に知るだけでは十分ではありません。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Firstly, Vedic Astrology is a spiritual discipline in its own right, and we should understand the broader spiritual implications of the subject before beginning the process of chart interpretation.",
          ja: "まず、ヴェーダ占星術はそれ自体がスピリチュアルな学問であり、チャートの解釈のプロセスを開始する前に、この主題のより広範なスピリチュアルな意味を理解する必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Secondly, making predictions from a Jyotish birth-chart requires us to combine information from many different sources and assign appropriate weight to those indicators. This process requires a degree of intuition. To develop that intuition, regular spiritual practices and a Sattvic lifestyle are extremely beneficial.",
          ja: "第二に、ジョーティッシュの出生図から予測を行うには、さまざまな情報源からの情報を組み合わせて、それらの指標に適切な重みを割り当てる必要があります。このプロセスには、ある程度の直感が必要です。その直観を養うには、定期的なスピリチュアルな実践とサトヴィックなライフスタイルが非常に有益です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Thirdly, as beginners, we must learn how to manage information overload and decide which factors can temporarily be set aside until we gain more experience.",
          ja: "第三に、初心者として、情報過多に対処する方法を学び、経験を積むまでどの要素を一時的に脇に置いてもよいかを判断する必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The following sections examine these considerations in greater detail. The actual mechanics of chart interpretation are covered separately in the article \"12-Step Guide to Vedic Horoscope Interpretation.\"",
          ja: "次のセクションでは、これらの考慮事項を詳しく検討します。チャート解釈の実際の仕組みについては、「ヴェーダ星占い解釈への 12 ステップ ガイド」の記事で個別に説明しています。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Jyotish Astrology and Spirituality",
          ja: "ジョーティッシュ占星術とスピリチュアリティ"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Knowledge of Jyotish – A Great Privilege",
          ja: "ジョーティッシュの知識 – 大きな特権"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "An enlightened Vedic Master, Sri Sri Ravi Shankar, explains the ultimate purpose of Vedic Astrology as follows:",
          ja: "啓発されたヴェーダのマスター、シュリ・シュリ・ラヴィ・シャンカールは、ヴェーダ占星術の究極の目的を次のように説明しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"The purpose of astrology is to take you to the ultimate truth that the entire universe is one organism. It's one Being, one consciousness, one Self, that manifests itself into this varied universe.\"",
          ja: "「占星術の目的は、宇宙全体が一つの有機体であるという究極の真実にあなたを導くことです。この多様な宇宙に現れるのは、一つの存在、一つの意識、一つの自己です。」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "(Published in Art of Living's \"Daily Sutra\", May 2003)",
          ja: "（アート・オブ・リビング「日々のお経」2003年5月掲載）"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Access to this knowledge has always been considered a great privilege. In earlier times, it was largely restricted to the royal households and courts of the Kings of Bharat. These courts employed highly learned astronomy and astrology pundits, and rulers frequently sought their guidance before making important decisions.",
          ja: "この知識にアクセスできることは、常に大きな特権であると考えられてきました。初期の時代では、それは主にバーラタ王の王室と宮廷に限定されていました。これらの法廷では高度に学んだ天文学や占星術の専門家が雇用されており、支配者たちは重要な決定を下す前にしばしば彼らの指導を求めました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Why is the knowledge of Jyotish such a privilege in the modern world?",
          ja: "ジョーティッシュの知識が現代社会においてこれほど特権的なのはなぜでしょうか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Because Jyotish gives us some ability to glimpse another soul's returning karma. This makes it a divine gift that should be approached with respect and humility.",
          ja: "なぜなら、ジョーティッシュは私たちに、他の魂が戻ってくるカルマを垣間見る能力を与えてくれるからです。したがって、それは敬意と謙虚さを持って取り組むべき神からの贈り物です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "With great privilege comes great responsibility. Before beginning any chart interpretation, we should ask ourselves:",
          ja: "大きな特権には大きな責任が伴います。チャートの解釈を始める前に、次のことを自問する必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"How can I be of the greatest benefit to my client?\"",
          ja: "「どうすればクライアントに最大の利益をもたらすことができるでしょうか？」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In doing so, we must carefully balance honesty with compassion.",
          ja: "その際、私たちは誠実さと思いやりのバランスを慎重にとらなければなりません。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Horoscope Interpretation Requires Intuition",
          ja: "ホロスコープの解釈には直感が必要です"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Chart interpretation demands the ability to synthesise information and make predictions based on numerous sources of astrological data.",
          ja: "チャートの解釈には、情報を総合し、多数の占星術データのソースに基づいて予測を行う能力が必要です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Before we can make reliable, high-probability predictions, we must combine information from many important indicators.",
          ja: "信頼性が高く確率の高い予測を行う前に、多くの重要な指標からの情報を組み合わせる必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish is both logical and systematic. However, successfully blending multiple factors and assigning the correct importance to each requires a reasonable degree of intuition.",
          ja: "ジョーティッシュは論理的かつ体系的です。ただし、複数の要素をうまく組み合わせて、それぞれに正しい重要性を割り当てるには、ある程度の直感が必要です。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Spiritual Practices and Lifestyle Help Us Develop Intuition",
          ja: "スピリチュアルな習慣とライフスタイルは直観力を養う"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The study and practice of Jyotish itself helps cultivate intuition and gradually awakens awareness of the \"all-seeing light of pure consciousness\" within us. This state is referred to as Jyotish Mati Pragya, the all-knowing consciousness.",
          ja: "ジョーティッシュの研究と実践自体が直観を養い、私たちの中にある「すべてを見渡す純粋な意識の光」の意識を徐々に目覚めさせるのに役立ちます。この状態はジョーティッシュ・マティ・プラギャ、全知の意識と呼ばれます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The more charts we analyse, the more proficient we become and the stronger our intuition develops. This ability grows naturally over time through observing many charts and recognising recurring patterns that correlate with real-life experiences.",
          ja: "チャートを分析すればするほど、私たちはより熟練し、より強い直観力を養うことができます。この能力は、多くのチャートを観察し、実生活の経験と相関する繰り返しのパターンを認識することで、時間の経過とともに自然に成長します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Experienced Vedic astrologers also understand the importance of maintaining regular spiritual practices. These practices help strengthen intuition, sometimes described as a \"sixth sense,\" and deepen our connection with the universal forces reflected in the cosmos.",
          ja: "経験豊富なヴェーダ占星術師は、定期的に精神的な修行を続けることの重要性も理解しています。これらの実践は、「第六感」とも呼ばれる直観力を強化し、宇宙に反映される普遍的な力とのつながりを深めるのに役立ちます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For a Jyotish astrologer, spiritual disciplines will often include:",
          ja: "ジョーティッシュの占星術師にとって、精神的な分野には次のものが含まれることがよくあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Daily meditation, preferably using mantra-based Vedic techniques",
          ja: "• 毎日の瞑想、できればマントラに基づいたヴェーダのテクニックを使用"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Yoga practice",
          ja: "• ヨガの練習"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Pranayama",
          ja: "• プラナヤマ"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Advanced meditation practices",
          ja: "• 高度な瞑想の実践"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Chanting of Vedic mantras",
          ja: "• ヴェーダマントラの詠唱"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "All of these can contribute to the development of stronger intuitive abilities.",
          ja: "これらはすべて、より強力な直観力の発達に貢献します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In addition, many Vedic astrologers follow a reasonably Sattvic lifestyle based on Ayurvedic principles. A Sattvic, meat-free diet may help support a balanced and less biased approach to interpretation.",
          ja: "さらに、多くのヴェーダ占星術師は、アーユルヴェーダの原則に基づいた合理的なサトヴィックなライフスタイルに従っています。サトヴィックで肉を含まない食事は、解釈に対するバランスの取れた偏りの少ないアプローチをサポートするのに役立つ可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "One well-known living saint has even insisted that astrologers serving within Her ashram remain celibate.",
          ja: "ある有名な現存する聖人は、彼女のアシュラム内で奉仕する占星術師は独身を貫くとさえ主張しました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Some people say it takes an entire lifetime to become truly proficient at Jyotish Horoscope interpretation. Others suggest it may take several lifetimes.",
          ja: "ジョーティッシュのホロスコープ解釈に本当に習熟するには一生かかると言う人もいます。他の人は、それには数生涯かかるかもしれないと示唆しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "However, this should not discourage us. It is entirely possible that we studied or practised aspects of Jyotish in a previous life and are now rediscovering this knowledge.",
          ja: "しかし、だからといって落胆するべきではありません。私たちが前世でジョーティッシュの側面を研究または実践しており、現在その知識を再発見している可能性は十分にあります。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Considerations Before We Start Chart Interpretation",
          ja: "チャートの解釈を始める前の重要な考慮事項"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Dealing With Information Overload",
          ja: "情報過多への対処"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "When we begin studying Jyotish and attempt to apply our knowledge to chart interpretation, we often encounter a problem known as information overload.",
          ja: "ジョーティッシュの学習を開始し、その知識をチャートの解釈に適用しようとすると、情報過多として知られる問題に遭遇することがよくあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "This is especially true when using modern Jyotish software, which can generate far more information than a beginner can comfortably process.",
          ja: "これは、初心者が快適に処理できるよりもはるかに多くの情報を生成する可能性がある最新のジョーティッシュ ソフトウェアを使用する場合に特に当てはまります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "As a result, we may become so overwhelmed that we fail to recognise the most important factors in the chart. In other words, we can end up \"not seeing the wood for the trees.\"",
          ja: "その結果、私たちは圧倒されすぎて、チャート内の最も重要な要素を認識できなくなる可能性があります。言い換えれば、「木を見て木を見ず」になってしまう可能性があるのです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, it is important to understand what can reasonably be left out during the early stages of learning.",
          ja: "このため、学習の初期段階で合理的に除外できるものを理解することが重要です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Professional astrologers will correctly tell us that every available factor should be considered when interpreting a birth-chart. While this is true, it is not particularly helpful advice for beginners.",
          ja: "プロの占星術師は、出生図を解釈する際には、利用可能なすべての要素を考慮する必要があると正しく教えてくれます。これは事実ですが、初心者にとって特に役立つアドバイスではありません。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Factors to Include – Keeping It Simple",
          ja: "含めるべき重要な要素 – シンプルさを保つ"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Before anything else, we should have a basic understanding of planets, houses, aspects, and related concepts.",
          ja: "何よりもまず、惑星、ハウス、アスペクト、および関連する概念についての基本的な理解を得る必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "As a minimum, we should be able to identify and evaluate:",
          ja: "少なくとも、以下を特定して評価できる必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The overall strength of the birth-chart",
          ja: "• 出生図の全体的な強さ"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The overall strength of the Ascendant and its ruler",
          ja: "• アセンダントとそのルーラーの全体的な強さ"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Functional benefics and malefics arising from the Ascendant",
          ja: "• アセンダントから生じる機能的な恩恵と凶作用"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The strength of all planets by sign placement (exalted, debilitated, etc.)",
          ja: "• 星座の配置によるすべての惑星の強さ（高揚、衰弱など）"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The strength of all planets by house placement (good or bad houses)",
          ja: "• ハウス配置によるすべての惑星の強さ（良いハウスまたは悪いハウス）"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• How planetary strength affects the things indicated by that planet",
          ja: "• 惑星の強さが、その惑星が示すものにどのような影響を与えるか"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• How planetary strength affects the houses ruled by that planet",
          ja: "• 惑星の強さが、その惑星が支配するハウスにどのような影響を与えるか"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The condition of each house based upon occupying planets and aspects",
          ja: "• 占有惑星とアスペクトに基づいた各ハウスの状態"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The major planetary periods (Mahadashas) and their favourable or unfavourable effects",
          ja: "• 主要な惑星周期（マハダシャー）とその有利または不利な影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Significant transits, particularly those of Saturn and Jupiter",
          ja: "• 重要な通過、特に土星と木星の通過"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "All of these topics are covered in much greater detail in the Step-by-Step Guide to Vedic Horoscope Interpretation article.",
          ja: "これらのトピックはすべて、「ヴェーダ星占い解釈のステップバイステップ ガイド」の記事でさらに詳しく説明されています。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "What to Leave Out?",
          ja: "何を省略するか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "What should a complete beginner temporarily leave out?",
          ja: "まったくの初心者が一時的にやめるべきものは何ですか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The following suggestions are my personal recommendations. Some astrologers may disagree and insist that some or all of these factors should be included from the beginning.",
          ja: "以下の提案は私の個人的な推奨事項です。一部の占星術師はこれに同意せず、これらの要素の一部またはすべてを最初から含めるべきだと主張するかもしれません。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "My response would be:",
          ja: "私の返答は次のようになります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"Yes—but later, once we have gained more experience.\"",
          ja: "「はい、でも、もっと経験を積んでから、また後ほど。」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I would omit the numerical results obtained from the six Shadbala calculations and instead assess planetary strength systematically through sign placement and house placement alone.",
          ja: "個人的には、6 つのシャドバラ計算から得られた数値結果を省略し、代わりにサインの配置とハウスの配置だけで惑星の強さを体系的に評価したいと思います。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I would also leave out detailed analysis of the Vargas (divisional charts), with the possible exception of the Navamsha chart, which is important in marriage analysis and also modifies the strengths indicated in the main chart.",
          ja: "また、結婚分析において重要であり、メインチャートに示されている強みを修正するナヴァムシャチャートを除いて、ヴァルガス（分割チャート）の詳細な分析も省略します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The Vargas can always be studied later. For beginners, it is usually best to focus on the main birth-chart.",
          ja: "バルガスは後でいつでも研究できます。初心者の場合、通常はメインの出生図に焦点を当てるのが最善です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I would also avoid detailed transit analysis unless there is a particularly important Saturn transit, such as Sani Sade (Saturn transiting the 12th, 1st, and 2nd houses counted from the Moon sign). Likewise, I would generally leave out Jupiter transits unless they are especially significant.",
          ja: "また、サニ・サデ（月星座から数えて12、1、2ハウスを通過する土星）など、特に重要な土星のトランジットがない限り、詳細なトランジット分析は避けます。同様に、特に重要でない限り、私は通常、木星の通過を除外します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For complete beginners, I would also postpone using the Nakshatras.",
          ja: "まったくの初心者の場合、ナクシャトラの使用も延期します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I fully recognise that the Moon's placement in a particular Nakshatra can have a considerable impact on the chart. However, it introduces another layer of complexity. If the main chart does not adequately explain real-life events, then by all means begin investigating the Nakshatras.",
          ja: "特定のナクシャトラにおける月の配置がチャートに大きな影響を与える可能性があることを私は十分に認識しています。ただし、別の複雑さの層が生じます。メインチャートが現実の出来事を適切に説明していない場合は、ぜひナクシャトラの調査を始めてください。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Should we analyse a chart using the sign occupied by the Moon as the Lagna?",
          ja: "ラグナとして月が占める星座を使用してチャートを分析する必要がありますか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Some astrologers consider this essential. Personally, I tend to glance at the chart from this perspective without giving it primary emphasis. In my enhanced chart format, I label each house counted from the Moon for easy reference. Ultimately, this is a matter of personal preference.",
          ja: "占星術師の中には、これが不可欠であると考える人もいます。私個人としては、特に重視せずにこの観点からチャートを眺める傾向があります。私の強化されたチャート形式では、簡単に参照できるように、月から数えて各家にラベルを付けています。結局のところ、これは個人の好みの問題です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Should we leave out Sambandhas, the mutual relationships between planets?",
          ja: "惑星間の相互関係であるサンバンダを除外すべきでしょうか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A common example is an exchange of signs, such as the Moon occupying Pisces (Jupiter's sign) while Jupiter occupies Cancer (Moon's sign).",
          ja: "一般的な例は、月が魚座 (木星の星座) を占め、木星が蟹座 (月の星座) を占めるなど、星座の交換です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Perhaps this introduces additional complexity for absolute beginners. Nevertheless, even beginners should be aware that Sambandhas exist because they can produce powerful and highly significant effects.",
          ja: "おそらく、これにより、まったくの初心者にとってはさらに複雑さが増します。それにもかかわらず、サンバンダは強力で非常に重要な効果を生み出すことができるため、初心者でもサンバンダの存在を認識しておく必要があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I have seen many charts where Sambandhas explained important results that were not obvious from other factors alone.",
          ja: "私は、他の要素だけでは明らかではない重要な結果をサンバンダが説明しているチャートを数多く見てきました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "What about Planetary Yogas?",
          ja: "プラネタリーヨガはどうでしょうか？"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Should we include them or not?",
          ja: "それらを含めるべきかどうか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The word Yoga means \"union\" and refers to special planetary arrangements or combinations. Jyotish recognises hundreds of Planetary Yogas, which presents a significant challenge for beginners.",
          ja: "ヨガという言葉は「結合」を意味し、特別な惑星の配置や組み合わせを指します。 Jyotish は何百もの惑星ヨガを認識していますが、初心者にとっては大きな課題となります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "If your software identifies them, you may wish to investigate a few major Yogas such as Raja Yoga, Adhi Yoga, and similar combinations. However, trying to learn all Yogas at the beginning can be overwhelming.",
          ja: "ソフトウェアがそれらを識別する場合は、ラージャ ヨガ、アディ ヨガ、および同様の組み合わせなど、いくつかの主要なヨガを調査するとよいでしょう。しかし、最初からすべてのヨガを学ぼうとするのは大変なことかもしれません。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Can We Learn Chart Interpretation from a Book or Website?",
          ja: "チャートの解釈を本やウェブサイトから学ぶことはできますか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The answer is:",
          ja: "答えは次のとおりです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"Maybe.\"",
          ja: "\"多分。\""
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The difficulty with many Jyotish books is that they contain a huge amount of information, which can become confusing for beginners.",
          ja: "多くのジョーティッシュ本の難点は、膨大な量の情報が含まれており、初心者にとっては混乱する可能性があることです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "When I first started studying Jyotish, I found the book Ancient Hindu Astrology for the Modern Western Astrologer by James T. Braha very useful.",
          ja: "私が初めてジョーティッシュの勉強を始めたとき、ジェームズ・T・ブラハ著『現代西洋占星術師のための古代ヒンドゥー占星術』という本がとても役立つことがわかりました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "It was well organised and presented information in a concise format that was easy to reference.",
          ja: "情報がよく整理されており、簡潔な形式でまとめられており、参照しやすいものでした。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "However, the book also had some significant omissions. For example, it did not adequately explain functional benefic and malefic planets. Nevertheless, it provided me with an initial foothold into the subject at a time when few other resources existed and the internet was not available.",
          ja: "ただし、この本にはいくつかの重大な省略もありました。たとえば、機能的な吉星や凶星については十分に説明されていませんでした。それにもかかわらず、他のリソースがほとんど存在せず、インターネットも利用できなかった当時、この主題への最初の足掛かりを私に提供してくれました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I have also found AI—particularly ChatGPT—to be quite effective for answering detailed questions about Jyotish.",
          ja: "また、AI (特に ChatGPT) は、Jyotish に関する詳細な質問に答えるのに非常に効果的であることもわかりました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "It is not perfect, and the usual warning of \"beginners beware\" still applies. However, it is often much faster than searching through numerous websites and has become my first source for quick research.",
          ja: "それは完璧ではなく、「初心者は注意してください」という通常の警告が依然として適用されます。ただし、多くの場合、多数の Web サイトを検索するよりもはるかに高速であり、迅速な調査のための最初の情報源となっています。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Do We Need a Mentor?",
          ja: "メンターは必要ですか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Having a mentor is certainly helpful.",
          ja: "メンターがいることは確かに役立ちます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I was fortunate to have several highly knowledgeable friends involved in advanced and residential Transcendental Meditation Programmes (Purusha Programmes) whom I could consult regularly.",
          ja: "幸運なことに、私には高度な宿泊型超越瞑想プログラム (プルシャ プログラム) に参加している知識豊富な友人が何人かいて、定期的に相談することができました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Some of these friends also had access to professional Jyotish pundits from India. Through them I gained valuable insights that I never found in books.",
          ja: "これらの友人の中には、インドのプロのジョーティッシュ評論家と連絡を取ることができた人もいました。 Through them I gained valuable insights that I never found in books."
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Could AI act as a mentor?",
          ja: "AIはメンターの役割を果たすことができるでしょうか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "This was a question I asked ChatGPT directly.",
          ja: "これは私が ChatGPT に直接尋ねた質問です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Its response acknowledged that AI can be a powerful tool for research, information gathering, and learning. However, it also noted:",
          ja: "その回答では、AI が研究、情報収集、学習のための強力なツールとなり得ることが認められました。ただし、次のようにも指摘しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"It doesn't possess personal experiences, intuition, or the ability to provide subjective insights in the same way a human mentor might.\"",
          ja: "「人間の指導者のように、個人的な経験や直観、主観的な洞察を提供する能力はありません。」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The complete response, which I rate highly, is included in Footnote [1].",
          ja: "完全な回答は、私が高く評価していますが、脚注 [1] に含まれています。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "What Charts Should We Look at First?",
          ja: "最初にどのチャートを見るべきでしょうか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I always recommend starting with our own chart.",
          ja: "個人的には、常に独自のチャートから始めることをお勧めします。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Many people begin their journey into Jyotish in exactly this way.",
          ja: "多くの人はまさにこの方法でジョーティッシュへの旅を始めます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "At some stage, there may even be an \"OMG\" moment when we realise that Jyotish genuinely works. That certainly happened to me.",
          ja: "ある段階で、Jyotish が本当に機能することに気づく「OMG」の瞬間さえあるかもしれません。それは確かに私にも起こりました。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "I started out highly sceptical but quickly realised that Jyotish was very different from Western Astrology. It appeared to offer a genuine window into returning karma—something both remarkable and paradigm-shifting.",
          ja: "私は最初は非常に懐疑的でしたが、ジョーティッシュが西洋占星術とは大きく異なることにすぐに気づきました。それは、カルマを取り戻すための真の窓を提供するものであるように見えました。それは驚くべきことであり、パラダイムを変えるものです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "After studying our own chart, we can move on to the charts of close friends and family members.",
          ja: "自分自身のチャートを研究した後、親しい友人や家族のチャートに進むことができます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "This allows us to compare their life experiences with the indications shown in their charts.",
          ja: "これにより、彼らの人生経験をグラフに示されている兆候と比較することができます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "At the same time, we should remember that Jyotish is dynamic. Some events promised by Mahadashas may not yet have manifested in younger individuals.",
          ja: "同時に、ジョーティッシュはダイナミックであることを覚えておく必要があります。マハダシャーによって約束されたいくつかの出来事は、若い人たちにはまだ現れていないかもしれません。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Many books teach chart interpretation through the charts of famous people.",
          ja: "著名人のチャートを通じてチャートの解釈を教える本は数多くあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I find this less useful because our knowledge of the full lives of celebrities, politicians, sports figures, and other public personalities is limited. Much of what we know about them has been filtered through public relations teams.",
          ja: "個人的には、有名人、政治家、スポーツ選手、その他の著名人の生涯に関する知識が限られているため、これはあまり役に立たないと思います。彼らについて私たちが知っていることの多くは、広報チームを通じて濾過されています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, friends, family members, and people we know well often provide better examples when beginning chart interpretation. Their charts are also more representative of ordinary life.",
          ja: "このため、チャートの解釈を始める際には、友人、家族、よく知っている人がより良い例を提供してくれることがよくあります。彼らのグラフは、日常生活をよりよく表しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Here are some useful questions to keep in mind when examining your own chart or someone else's:",
          ja: "自分や他の人のチャートを調べるときに覚えておくと役立つ質問がいくつかあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• How accurate is the recorded birth-time? Has it been documented somewhere?",
          ja: "• 記録された出生時間はどの程度正確ですか?どこかに文書化されていますか？"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Are there any specific issues or current problems being experienced?",
          ja: "• 何か特定の問題や現在発生している問題はありますか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Can planetary imbalances or chart factors be identified that relate to these concerns?",
          ja: "• これらの懸念に関連する惑星の不均衡やチャート要因を特定できるか？"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Which planetary remedies might be appropriate?",
          ja: "• どの惑星の治療法が適切でしょうか?"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Footnotes",
          ja: "脚注"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "[1] The question I asked ChatGPT was:",
          ja: "[1] ChatGPT に尋ねた質問は次のとおりです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"Can AI act as a mentor to someone studying Jyotish?\"",
          ja: "「AI はジョーティッシュ語を勉強している人の指導者として機能することができますか?」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The answer I received was:",
          ja: "私が受け取った答えは次のとおりです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"AI can provide information, answer questions, and assist in learning various topics, including Jyotish (Vedic astrology). However, it's important to note that AI, including myself, doesn't possess personal experiences, intuition, or the ability to provide subjective insights in the same way a human mentor might.",
          ja: "「AI は、情報を提供したり、質問に答えたり、ジョーティッシュ (ヴェーダ占星術) を含むさまざまなトピックの学習を支援したりできます。ただし、私を含む AI は、人間のメンターのように個人的な経験、直観、または主観的な洞察を提供する能力を持たないことに注意することが重要です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "If you're studying Jyotish and seeking guidance, it's advisable to complement AI resources with human mentors who have practical experience in the field. A human mentor can offer personalised advice, share their experiences, and provide a deeper understanding of the nuances of Jyotish that might not be covered by AI.",
          ja: "ジョーティッシュを勉強していて指導を求めている場合は、その分野での実践経験を持つ人間のメンターで AI リソースを補完することをお勧めします。人間のメンターは、個人に合わせたアドバイスを提供し、経験を共有し、AI ではカバーできない可能性のあるジョーティッシュのニュアンスをより深く理解できるようにします。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "AI can be a valuable tool for learning, researching, and practising Jyotish, but for a holistic and personalised learning experience, combining AI resources with guidance from experienced practitioners is often the most effective approach.\"",
          ja: "AI は、ジョーティッシュの学習、研究、実践にとって貴重なツールとなり得ますが、総合的でパーソナライズされた学習体験を得るには、AI リソースと経験豊富な実践者からの指導を組み合わせることが、多くの場合最も効果的なアプローチとなります。」"
        }
      }
    ]
  },
  {
    id: "birth-time-errors",
    section: "introduction",
    title: {
      en: "Birth-time Errors",
      ja: "出生時間エラー"
    },
    related: [
      "mahadashas",
      "transits",
      "nakshatras-stellar-1",
      "planetary-antidotes"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Discussing the implications of birth-time errors for correctly determining the Ascendant, prescribing planetary antidotes, calculating Mahadasha starting times, possible errors in Nakshatra allocation, and chart rectification techniques used to establish an accurate birth-time.",
          ja: "概要: アセンダントの正確な決定、惑星の解毒剤の処方、マハダシャーの開始時間の計算、ナクシャトラの割り当てで起こり得るエラー、正確な出生時間を確立するために使用されるチャート修正技術に対する出生時間の誤差の影響について議論します。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Consequences of Birth-time Errors for Chart Interpretation",
          ja: "チャートの解釈における出生時間エラーの影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Do birth-time errors really matter?",
          ja: "出生時間の誤差は本当に重要ですか?"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, the answer is a very definite \"Yes.\"",
          ja: "ヴェーダ占星術では、答えは明確に「はい」です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Inaccurate birth-times can have serious consequences, both for correct chart interpretation and for the advice given to clients.",
          ja: "出生時間が不正確であると、正しいチャートの解釈とクライアントへのアドバイスの両方に重大な影響を与える可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Most planets move relatively slowly through the zodiac. For example, the Sun takes approximately one day to move through one degree of arc. However, this is not true of the Moon, which moves through one degree of the zodiac in less than two hours. The same applies to the Ascendant—the zodiac sign appearing to rise on the eastern horizon at the time of birth.",
          ja: "ほとんどの惑星は黄道帯の中を比較的ゆっくりと移動します。たとえば、太陽は 1 度の弧を移動するのに約 1 日かかります。ただし、これは月には当てはまりません。月は 2 時間未満で黄道帯を 1 度移動します。同じことがアセンダントにも当てはまります。出生時に東の地平線に昇って見える星座です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Unfortunately, both the precise position of the Moon and the correct determination of the Ascendant play an absolutely crucial role in Vedic Astrology.",
          ja: "残念ながら、月の正確な位置とアセンダントの正確な決定の両方が、ヴェーダ占星術において極めて重要な役割を果たします。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Identifying Ascendant (Lagna)",
          ja: "アセンダント（ラグナ）の識別における出生時間エラーの影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "There are twelve zodiac signs and twenty-four hours in a day, meaning that the Ascendant changes, on average, every two hours.",
          ja: "黄道帯は 12 個あり、1 日は 24 時間あります。つまり、アセンダントは平均して 2 時間ごとに変わります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "However, because of the complex three-dimensional geometry of the rotating Earth—whose axis is tilted by approximately 23 degrees relative to its orbit around the Sun—the Ascendant can sometimes change in less than one hour. This depends upon factors such as latitude, time of day, and geographical location.",
          ja: "ただし、回転する地球の複雑な 3 次元幾何学形状 (その軸は太陽の周りの軌道に対して約 23 度傾いている) のため、アセンダントは 1 時間以内に変化することがあります。これは、緯度、時刻、地理的位置などの要因によって異なります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Note: When we use the term Ascendant, we are referring to the rising sign itself, regardless of the exact degree of the horizon projected onto that sign.",
          ja: "注: アセンダントという用語を使用するときは、その標識に投影される地平線の正確な度合いに関係なく、上昇する標識自体を指します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "An inaccurate birth-time can be very problematic because it may result in an astrologer identifying the wrong Ascendant altogether.",
          ja: "出生時間が不正確であると、占星術師がまったく間違ったアセンダントを特定してしまう可能性があるため、非常に問題となる可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Birth-time errors can produce several negative outcomes:",
          ja: "出生時間のエラーは、いくつかのマイナスの結果を引き起こす可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Chart interpretation becomes unreliable because all interpretation is built around correctly identifying the first house, which corresponds exactly with the rising sign.",
          ja: "• すべての解釈は、上昇サインに正確に対応する最初のハウスを正確に特定することに基づいて構築されているため、チャートの解釈は信頼できなくなります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Functional benefic and functional malefic planets may be identified incorrectly.",
          ja: "• 機能的吉星および機能的凶星は、誤って識別される可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Planetary antidotes or remedies may be prescribed incorrectly, potentially doing more harm than good.",
          ja: "• 惑星の解毒剤や治療法は誤って処方される可能性があり、利益よりも害を及ぼす可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "If the actual Ascendant degree is positioned near the middle of a sign, perhaps around 15 degrees, there is usually some tolerance for birth-time errors without the Ascendant sign itself changing. This is good news.",
          ja: "実際のアセンダント度がサインの中央近く、おそらく約 15 度に位置する場合、通常、アセンダント サイン自体が変化することなく、出生時間の誤差がある程度許容されます。これは良いニュースです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The real difficulties arise when the Ascendant is close to a sign boundary, perhaps within five degrees of the next sign. In such situations, a difference of only a few minutes in birth-time can completely change the Ascendant and alter the location of the first house.",
          ja: "本当の困難は、アセンダントがサインの境界に近いとき、おそらく次のサインから 5 度以内にあるときに発生します。このような状況では、出生時間のわずか数分の違いがアセンダントを完全に変え、最初のハウスの位置を変える可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "That is definitely bad news.",
          ja: "それは間違いなく悪いニュースです。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Prescribing Planetary Antidotes",
          ja: "惑星の解毒剤の処方における出生時の誤りの影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "An incorrect birth-time may result in remedies being prescribed that worsen a person's situation rather than improve it.",
          ja: "出生時間が不正確であると、人の状況を改善するどころか悪化させる治療法が処方される可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In medicine, one of the most important principles is:",
          ja: "医学において最も重要な原則の 1 つは次のとおりです。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "\"Do No Harm.\"",
          ja: "「危害を加えないでください。」"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A Jyotish astrologer can inadvertently cause harm if they recommend strengthening a functional malefic planet through the use of gemstones or other remedies.",
          ja: "ジョーティッシュの占星術師が、宝石やその他の治療法を使用して凶星の機能を強化することを勧めると、誤って害を及ぼす可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For example, suppose an astrologer uses a stated—but inaccurate—birth-time and calculates the Ascendant as Aries.",
          ja: "たとえば、占星術師が、明示されているが不正確な出生時間を使用し、アセンダントを牡羊座として計算したとします。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In that case, it would be perfectly reasonable to recommend a yellow sapphire to strengthen Jupiter, since Jupiter rules the 9th and 12th houses for an Aries Ascendant.",
          ja: "その場合、木星は牡羊座のアセンダントの9室と12室を支配しているため、木星を強化するためにイエローサファイアを推奨するのは完全に合理的です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "However, if the true birth-time places the Ascendant in the following sign, Taurus, the situation changes dramatically. Jupiter then becomes a strong functional malefic because it rules the 8th and 11th houses.",
          ja: "しかし、本当の出生時間がアセンダントを次の星座であるおうし座に置く場合、状況は劇的に変化します。その後、木星は8室と11室を支配するため、強力な機能凶星になります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Strengthening such a planet with gemstones could therefore be highly undesirable.",
          ja: "したがって、そのような惑星を宝石で強化することは非常に望ましくない可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "So, birth-time accuracy really does matter.",
          ja: "したがって、出生時間の正確性は非常に重要です。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Mahadasha Timings",
          ja: "マハダシャーのタイミングにおける出生時間の誤差の影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "One of the unique features of Jyotish is the Mahadasha system of prediction, which helps determine both what is likely to happen and when those events may occur.",
          ja: "ジョーティッシュのユニークな機能の 1 つは、マハダシャ予測システムです。これは、何が起こる可能性が高く、それらの出来事がいつ起こるかを判断するのに役立ちます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "The calculation of Mahadasha and Antardasha starting times depends directly upon the Moon's position in the birth-chart.",
          ja: "マハダシャーとアンタルダシャーの開始時間の計算は、出生図における月の位置に直接依存します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Consequently, accurate birth data is essential.",
          ja: "したがって、正確な出生データが不可欠です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For the longer Mahadashas—such as those of Venus, Saturn, or Rahu—even a birth-time error of only twenty minutes can shift the calculated Mahadasha starting time by approximately six months.",
          ja: "金星、土星、ラーフなどのより長いマハダシャーの場合、わずか 20 分の出生時間の誤差でも、計算されたマハダシャーの開始時刻が約 6 か月ずれる可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A later actual birth-time than the recorded one means the Mahadasha period will begin earlier than calculated.",
          ja: "実際の出生時間が記録された時間より遅いということは、マハダシャー期間が計算よりも早く始まることを意味します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Conversely, if the actual birth-time is earlier than recorded, the Mahadasha will begin later than predicted.",
          ja: "逆に、実際の出生時間が記録されている時間より早い場合、マハダシャーは予測よりも遅く始まります。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Nakshatras",
          ja: "ナクシャトラにおける出生時間の誤差の影響"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "A professional Jyotish astrologer will make use of the Moon's position within the lunar mansions, known as Nakshatras.",
          ja: "プロのジョーティッシュ占星術師は、ナクシャトラとして知られる月の邸宅内の月の位置を利用します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Each Nakshatra contributes its own distinctive flavour and influence to the birth-chart.",
          ja: "それぞれのナクシャトラは、出生図に独自の独特の風味と影響を与えます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Potential problems arise when the recorded birth-time places the Moon very close to the boundary between two Nakshatras.",
          ja: "記録された出生時間が、月が 2 つのナクシャトラの境界に非常に近い位置にある場合、潜在的な問題が発生します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "In such situations, even a small birth-time error may result in the Moon being assigned to the wrong Nakshatra.",
          ja: "このような状況では、出生時間のわずかな誤差でも、月が間違ったナクシャトラに割り当てられる可能性があります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "An experienced astrologer will watch carefully for this possibility and assess it alongside the other birth-time considerations discussed above.",
          ja: "経験豊富な占星術師は、この可能性を注意深く観察し、上で説明した他の出生時間の考慮事項と並行して評価します。"
        }
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Chart Rectification – Techniques to Check Birth-time Accuracy",
          ja: "チャートの修正 – 出生時間の正確さをチェックするテクニック"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Professional Vedic astrologers are fully aware of the problems that inaccurate birth-times can create.",
          ja: "プロのヴェーダ占星術師は、不正確な出生時刻が引き起こす可能性のある問題を十分に認識しています。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, they continually compare what they observe in a person's chart with actual life events and the timing of those events.",
          ja: "このため、彼らは人のチャートで観察したことを、実際の人生の出来事やそれらの出来事のタイミングと継続的に比較します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "An astrologer may ask clients about:",
          ja: "占星術師はクライアントに次のような質問をすることがあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Marriage dates",
          ja: "• 結婚日"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The birth dates of children",
          ja: "• 子供の生年月日"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• The timing of parental deaths",
          ja: "• 親の死亡のタイミング"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Health issues",
          ja: "• 健康上の問題"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Financial circumstances",
          ja: "• 財務状況"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Relationships",
          ja: "• 人間関係"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Career developments",
          ja: "• キャリア開発"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "• Spiritual interests and aspirations",
          ja: "• 精神的な興味と願望"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "If there are major discrepancies between what the chart appears to indicate and what has actually happened in real life, birth-time errors become a strong possibility.",
          ja: "グラフが示しているように見えることと、現実の生活で実際に起こったことの間に大きな矛盾がある場合、出生時間の誤りの可能性が高くなります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish is such a powerful predictive system that skilled astrologers can often work backwards from real-life events to determine a more accurate birth-time.",
          ja: "ジョーティッシュは非常に強力な予測システムであるため、熟練した占星術師は、現実の出来事から逆算して、より正確な出生時刻を決定することがよくあります。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "They achieve this by analysing Mahadasha periods, Ascendant calculations, and other important timing factors.",
          ja: "彼らは、マハダシャー期間、アセンダントの計算、その他の重要なタイミング要素を分析することでこれを実現します。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "This process is known as Birth-time Rectification or simply Chart Rectification, and it requires considerable skill and experience.",
          ja: "このプロセスは出生時修正または単にチャート修正として知られており、かなりのスキルと経験が必要です。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Modern Jyotish software has made this process much faster than it once was. Astrologers can quickly generate charts for a range of possible birth-times and compare the resulting Ascendants and planetary configurations.",
          ja: "最新の Jotish ソフトウェアにより、このプロセスが以前よりもはるかに高速になりました。占星術師は、考えられるさまざまな出生時刻のチャートを迅速に作成し、その結果得られるアセンダントと惑星の配置を比較できます。"
        }
      },
      {
        type: "paragraph",
        text: {
          en: "Mahadasha calculations can also be performed rapidly, making it much easier to identify the birth-time that best matches the client's life history.",
          ja: "マハダシャーの計算も迅速に実行できるため、クライアントの生活史に最も一致する出生時刻を特定するのがはるかに簡単になります。"
        }
      }
    ]
  }
];
