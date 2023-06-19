var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

router.get("/artists", function (req, res, next) {
  const artistsResponse = [
    {
      key: "frida-kahlo",
      name: "Frida Kahlo",
      profileImage:
        "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Portrait.jpg",
      coverImage:
        "https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg",
      style: "Naïve Art (Primitivism), Surrealism, Indigenism, Magic Realism",
      nationality: "Mexican",
      mainFacts: [],
      firstParagraph: `<h4>Frida Kahlo typically uses the visual symbolism of physical pain in a long-standing attempt to better understand emotional suffering.</h4><p>Before Kahlo's efforts, the language of loss, death, and selfhood, had been relatively well investigated by some male artists (including Albrecht Dürer, Francisco Goya, and Edvard Munch), but had not yet been significantly dissected by a woman. Indeed not only did Kahlo enter into an existing language, but she also expanded it and made it her own. By literally exposing interior organs, and depicting her own body in a bleeding and broken state, Kahlo opened up our insides to help explain human behaviors on the outside. She gathered together motifs that would repeat throughout her career, including ribbons, hair, and personal animals, and in turn, created a new and articulate means to discuss the most complex aspects of female identity.</p>`,
      bio: `<h4>Frida Kahlo typically uses the visual symbolism of physical pain in a long-standing attempt to better understand emotional suffering.</h4><p>Before Kahlo's efforts, the language of loss, death, and selfhood, had been relatively well investigated by some male artists (including Albrecht Dürer, Francisco Goya, and Edvard Munch), but had not yet been significantly dissected by a woman. Indeed not only did Kahlo enter into an existing language, but she also expanded it and made it her own. By literally exposing interior organs, and depicting her own body in a bleeding and broken state, Kahlo opened up our insides to help explain human behaviors on the outside. She gathered together motifs that would repeat throughout her career, including ribbons, hair, and personal animals, and in turn, created a new and articulate means to discuss the most complex aspects of female identity.</p>

      <p>Magdalena Carmen Frieda Kahlo Calderon was born at La Casa Azul (The Blue House) in Coyoacan, a town on the outskirts of Mexico City in 1907. Her father, Wilhelm Kahlo, was German and had moved to Mexico at a young age where he remained for the rest of his life, eventually taking over the photography business of Kahlo's mother's family. Kahlo's mother, Matilde Calderon y Gonzalez, was of mixed Spanish and Indian ancestry and raised Frida and her three sisters in a strict and religious household (Frida also had two half-sisters from her father's first marriage who were raised in a convent). La Casa Azul was not only Kahlo's childhood home but also the place that she returned to live and work from 1939 until her death. It later opened as the Frida Kahlo Museum.</p>
      
     <p>Aside from her mother's rigidity, religious fanaticism, and a tendency toward outbursts, several other events in Kahlo's childhood affected her deeply. At age six, Kahlo contracted polio; a long recovery isolated her from other children and permanently damaged one of her legs, causing her to walk with a limp after recovery. Wilhelm, with whom Kahlo was very close, and particularly so after the experience of being invalid, enrolled his daughter at the German College in Mexico City and introduced Kahlo to the writings of European philosophers such as Johann Wolfgang von Goethe, Friedrich Schiller, and Arthur Schopenhauer. All of Kahlo's sisters instead attended a convent school so it seems that there was a thirst for expansive learning noted in Frida that resulted in her father making different decisions especially for her. Kahlo was grateful for this and despite a strained relationship with her mother, always credited her father with great tenderness and insight. Still, she was interested in both strands of her roots, and her mixed European and Mexican heritage provided life-long fascination in her approach towards both life and art.
      Kahlo had a horrible experience at the German School where she was sexually abused and thus forced to leave. Luckily at the time, the Mexican Revolution and the Minister of Education had changed the education policy, and from 1922 girls were admitted to the National Preparatory School. Kahlo was one of the first 35 girls admitted and she began to study medicine, botany, and the social sciences. She excelled academically, became very interested in Mexican culture, and also became active politically.</p>
      
      <p>When Kahlo was 15, Diego Rivera (already a renowned artist) was painting the Creation mural (1922) in the amphitheater of her Preparatory School. Upon seeing him work, Kahlo experienced a moment of infatuation and fascination that she would go on to fully explore later in life. Meanwhile, she enjoyed helping her father in his photography studio and received drawing instruction from her father's friend, Fernando Fernandez - for whom she was an apprentice engraver. At this time Kahlo also befriended a dissident group of students known as the Cachuchas, who confirmed the young artist's rebellious spirit and further encouraged her interest in literature and politics. In 1923 Kahlo fell in love with a fellow member of the group, Alejandro Gomez Arias, and the two remained romantically involved until 1928. Sadly, in 1925 together with Alejandro (who survived unharmed) on their way home from school, Kahlo got into a near-fatal bus accident. She suffered multiple fractures throughout her body, including a crushed pelvis, and a metal rod impaled her womb. She spent one month in the hospital immobile and bound in a plaster corset, and following this period, many more months bedridden at home. During her long recovery, she began to experiment in small-scale autobiographical portraiture, henceforth abandoning her medical pursuits due to practical circumstances and turning her focus to art.</p>
      
      <p>During the months of convalescence at home, Kahlo's parents made her a special easel, gave her a set of paints, and placed a mirror above her head so that she could see her reflection and make self-portraits. Kahlo spent hours confronting existential questions raised by her trauma including a feeling of dissociation from her identity, a growing interiority, and general closeness to death. She drew upon the acute pictorial realism known from her father's photographic portraits (which she greatly admired) and approached her early portraits (mostly of herself, her sisters, and her school friends) with the same psychological intensity. At the time, Kahlo seriously considered becoming a medical illustrator during this period as she saw this as a way to marry her interests in science and art.</p>
      
      <p>By 1927, Kahlo was well enough to leave her bedroom and thus re-kindled her relationship with the Cachuchas group, which was by this point all the more political. She joined the Mexican Communist Party (PCM) and began to familiarize herself with the artistic and political circles in Mexico City. In June 1928, Kahlo was personally introduced to Diego Rivera who was already one of Mexico's most famous artists and a highly influential member of the PCM. Soon after, Kahlo boldly asked him to decide, upon looking at one of her portraits, if her work was worthy of pursuing a career as an artist. He was utterly impressed by the honesty and originality of her painting and assured her of her talents. Even though Rivera had already been married twice, and was known to have an insatiable fondness for women, the two quickly began a romantic relationship and were married in 1929. According to Kahlo's mother, who outwardly expressed her dissatisfaction with the match, the couple were 'the elephant and the dove'. Her father, however, unconditionally supported his daughter and was happy to know that Rivera had the financial means to help with Kahlo's medical bills. The new couple moved to Cuernavaca in the rural state of Morelos where Kahlo devoted herself entirely to painting.</p>
      
      <p>By the early 1930s, Kahlo's painting had evolved to include a more assertive sense of Mexican identity, a facet of her artwork that had stemmed from her exposure to the modernist Indigenist movement in Mexico and from her interest in preserving the revival of Mexicanidad during the rise of fascism in Europe. Kahlo's interest in distancing herself from her German roots is evidenced in her name change from Frieda to Frida, and in her decision to wear traditional Tehuana costume (the dress from earlier matriarchal times). At the time, two failed pregnancies augmented Kahlo's simultaneously harsh and beautiful representation of the specifically female experience through symbolism and autobiography.</p>
      
      <p>During the first few years of the 1930s, Kahlo and Rivera lived in San Francisco, Detroit, and New York whilst Rivera was creating various murals. Kahlo also completed some seminal works including Frieda and Diego Rivera (1931) and Self-Portrait on the Borderline Between Mexico and The United States (1932) with the latter expressing her observations of rivalry taking place between nature and industry in the two lands.</p>
      
      <p>Soon after the unveiling of a large and controversial Man at the Crossroads mural (1933) that Rivera had made for the Rockefeller Centre in New York, the couple returned to Mexico as Kahlo was feeling particularly homesick. They moved into a new house in the wealthy neighborhood of San Angel. The house was made up of two separate parts joined by a bridge. This set up was appropriate as their relationship was undergoing immense strain. Kahlo had numerous health issues while Rivera, although he had been previously unfaithful, at this time had an affair with Kahlo's younger sister Cristina which understandably hurt Kahlo more than her husband's other infidelities. Kahlo too started to have her extramarital affairs at this point. Not long after returning to Mexico from the States, she met the Hungarian photographer Nickolas Muray, who was on holiday in Mexico. The two began an on-and-off romantic affair that lasted 10 years, and it is Muray who is credited as the man who captured Kahlo most colorfully on camera.
      While briefly separated from Diego following the affair with her sister and living in her flat away from San Angel, Kahlo also had a short affair with the Japanese-American sculptor Isamu Noguchi. The two highly politically and socially conscious artists remained friends until Kahlo's death.</p>
      
      <p>In 1936, Kahlo joined the Fourth International (a Communist organization) and often used La Casa Azul as a meeting point for international intellectuals, artists, and activists. She also offered the house where the exiled Russian Communist leader Leon Trotsky and his wife, Natalia Sedova, could take up residence once they were granted asylum in Mexico. In 1937, as well as helping Trotsky, Kahlo and the political icon embarked on a short love affair. Trotsky and his wife remained in La Casa Azul until mid-1939.</p>
      
      <p>During a visit to Mexico City in 1938, the founder of Surrealism, André Breton, was enchanted with Kahlo's painting and wrote to his friend and art dealer, Julien Levy, who quickly invited Kahlo to hold her first solo show at his gallery in New York. This time around, Kahlo traveled to the States without Rivera and upon arrival caused a huge media sensation. People were attracted to her colorful and exotic (but actually traditional) Mexican costumes and her exhibition was a success. Georgia O'Keeffe was one of the notable guests to attend Kahlo's opening. Kahlo enjoyed some months socializing in New York and then sailed to Paris in early 1939 to exhibit with the Surrealists there. That exhibition was not as successful and she became quickly tired of the over-intellectualism of the Surrealist group. Kahlo returned to New York hoping to continue her love affair with Muray, but he broke off the relationship as he had recently met somebody else. Thus Kahlo traveled back to Mexico City and upon her return, Rivera requested a divorce.</p>
      
      <p>Following her divorce, Kahlo moved back to La Casa Azul. She moved away from her smaller paintings and began to work on much larger canvases. In 1940 Kahlo and Rivera remarried and their relationship became less turbulent as Kahlo's health deteriorated. Between the years of 1940-1956, the suffering artist often had to wear supportive back corsets to help her spinal problems, she also had an infectious skin condition, along with syphilis. When her father died in 1941, this exacerbated both her depression and her health. She again was often housebound and found simple pleasure in surrounding herself by animals and tending to the garden at La Casa Azul.</p>
      
      <p>Meanwhile, throughout the 1940s, Kahlo's work grew in notoriety and acclaim from international collectors and was included in several group shows both in the United States and in Mexico. In 1943, her work was included in Women Artists at Peggy Guggenheim's Art of This Century Gallery in New York. In this same year, Kahlo accepted a teaching position at a painting school in Mexico City (the school known as La Esmeralda) and acquired highly devoted students with whom she undertook some mural commissions. She struggled to continue making a living from her art, never accommodating to clients' wishes if she did not like them, but luckily received a national prize for her painting Moses (1945) and then The Two Fridas (1939) was bought by the Museo de Arte Moderno in 1947. Meanwhile, the artist grew progressively ill. She had a complicated operation to try and straighten her spine, but it failed and from 1950 onwards, she was often confined to a wheelchair.</p>
      
      <p>She continued to paint relatively prolifically in her final years while also maintaining her political activism, and protesting nuclear testing by Western powers. Kahlo exhibited one last time in Mexico in 1953 at Lola Alvarez Bravo's gallery, her first and only solo-show in Mexico. She was brought to the event in an ambulance, with her four-poster bed following on the back of a truck. The bed was then placed in the center of the gallery so that she could lie there for the duration of the opening.</p>
      
      <p>Kahlo died in 1954 at La Casa Azul. While the official cause of death was given as pulmonary embolism, questions have been raised about suicide - either deliberate or accidental. She was 47 years old.</p>
      
      <p>As an individualist who was disengaged from any official artistic movement, Kahlo's artwork has been associated with Primitivism, Indigenism, Magic Realism, and Surrealism. Posthumously, Kahlo's artwork has grown profoundly influential for feminist studies and postcolonial debates, while Kahlo has become an international cultural icon. The artist's celebrity status for mass audiences has at times resulted in the compartmentalization of the artist's work as representative of interwar Latin American artwork at large, distanced from the complexities of Kahlo's deeply personal subject matter. Recent exhibitions, such as Unbound: Contemporary Art After Frida Kahlo (2014) at the Museum of Contemporary Art Chicago, have attempted to reframe Kahlo's cultural significance by underscoring her lasting impact on the politics of the body and Kahlo's challenge to mainstream aesthetics of representation. Dreamers Awake (2017) held at The White Cube Gallery in London further illustrated the huge influence that Frida Kahlo and a handful of other early female Surrealists have had on the development and progression of female art.</p>
      
      <p>Kahlo uses religious symbolism throughout her oeuvre. She appears as the Madonna holding her 'animal babies', and becomes the Virgin Mary as she cradles Diego Rivera. She identifies with Saint Sebastian, and even fittingly appears as the martyred Christ. She positions herself as a prophet when she takes to head of the table in her Last Supper-style painting, and her accident when impaled on a metal bar (and covered in gold dust when lying injured) recalls the crucifixion and suggests her holiness. Following a repeated miscarriage, Kahlo asks to what extent does motherhood or the absence of this impact on female identity. She alters the meaning of maternal subjectivity irreversibly. It becomes clear through umbilical symbolism (often shown by ribbons) that Kahlo is connected to all that surrounds her, and that she is a 'mother' without children.</p>
      
      <p>The legacy of Kahlo cannot be underestimated or exaggerated. It likely that every female artist making art since the 1950s will quote her as an influence, but it is not only artists and those who are interested in art that she inspires. Her art also supports people who suffer as a result of an accident, as a result of miscarriage, and as a result of a failed marriage. Through imagery, Kahlo articulated experiences so complex, making them more manageable and giving viewers hope that they can endure, recover, and start again. Kahlo made it legitimate for women to outwardly display their pains and frustrations and to thus take steps towards understanding them.</p>
      
      <p>Women before Kahlo who had attempted to communicate the wildest and deepest of emotions were often labeled hysterical or condemned insane - while men were aligned with the 'melancholy' character type. By remaining artistically active under the weight of sadness, Kahlo revealed that women too can be melancholy rather than depressed and that these terms should not be thought of as gendered.</p>`,
      selectedPaintings: [
        {
          title: "Me and My Parrots",
          artistName: "Frida Kahlo",
          width: 1776,
          year: 1941,
          image:
            "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/me-and-my-parrots-1941.jpg!Large.jpg",
          height: 2326,
        },
        {
          title: "Two Women",
          artistName: "Frida Kahlo",
          width: "553",
          year: 1929,
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/two-women-1929.jpg!Large.jpg",
          height: 750,
        },
        {
          title: "My Grandparents, My Parents, and I (Family Tree)",
          artistName: "Frida Kahlo",
          year: 1936,
          width: 2527,
          image:
            "https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/my-grandparents-my-parents-and-me-1936.jpg!Large.jpg",
          height: 2197,
        },
        {
          title: "Sun and Life",
          artistName: "Frida Kahlo",
          year: 1947,
          width: 1822,
          image:
            "https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg",
          height: 1447,
        },
        {
          title: "Henry Ford Hospital (The Flying Bed)",
          artistName: "Frida Kahlo",
          year: 1932,
          width: 2305,
          image:
            "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/henry-ford-hospital-the-flying-bed-1932.jpg!Large.jpg",
          height: 1845,
        },
        {
          title:
            "The Love Embrace of the Universe, the Earth (Mexico), Myself, Diego and Señor Xólotl",
          artistName: "Frida Kahlo",
          width: 1816,
          year: 1949,
          image:
            "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-love-embrace-of-the-universe-the-earth-mexico-myself-diego-and-señor-xólotl-1949.jpg!Large.jpg",
          height: 2201,
        },
        {
          title: "Moses",
          artistName: "Frida Kahlo",
          width: 1813,
          year: 1945,
          image:
            "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/moses-1945.jpg!Large.jpg",
          height: 1456,
        },
        {
          title: "The Two Fridas",
          artistName: "Frida Kahlo",
          width: 2206,
          year: 1939,
          image:
            "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-two-fridas-1939.jpg!Large.jpg",
          height: 2186,
        },
        {
          title: "Marxism Will Give Health to the Sick",
          artistName: "Frida Kahlo",
          width: 1866,
          year: 1954,
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg",
          height: 2371,
        },
        {
          title: "Self Portrait with Cropped Hair",
          artistName: "Frida Kahlo",
          width: 461,
          year: 1940,
          image:
            "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-cropped-hair-1940.jpg!Large.jpg",
          height: 750,
        },
      ],
    },
    {
      key: "tamara-de-lempicka",
      name: "Tamara de Lempicka",
      profileImage:
        "https://ic.pics.livejournal.com/tanjand/44781189/71030736/71030736_original.jpg",
      coverImage:
        "https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg",
      style: "Art Deco",
      nationality: "Polish, Russian, French",
      mainFacts: [],
      firstParagraph: `<h4>Tamara de Lempicka was the lone traditional easel painter in the entirety of the Art Deco style.</h4><p>Her sources of inspiration ranged dramatically: she adored Italian Renaissance painting; she was characterized by critics as a sort of modern-day Ingres, although the comparisons were more often not intended to flatter; she absorbed the avant-garde art of the era - particularly post-cubist abstraction but of a "softened" style. Perhaps most influential was Lempicka's desire to capitalize on her social connections to create a niche for her portraiture, which most often featured well-to-do, cosmopolitan types. The Art Deco style, lavish in a less visually complex way than its predecessor, Art Nouveau, was probably the ideal vehicle for her trendy style. Most notably, despite its decorative quality, her work provided her with an outlet for unconventional self-expression: truly a product of her era, the libertine golden age between the two world wars, Lempicka, a bisexual, made bold, liberated female sexuality the linchpin of her art.</p>`,
      bio: `<h4>Tamara de Lempicka was the lone traditional easel painter in the entirety of the Art Deco style.</h4><p> Her sources of inspiration ranged dramatically: she adored Italian Renaissance painting; she was characterized by critics as a sort of modern-day Ingres, although the comparisons were more often not intended to flatter; she absorbed the avant-garde art of the era - particularly post-cubist abstraction but of a "softened" style. Perhaps most influential was Lempicka's desire to capitalize on her social connections to create a niche for her portraiture, which most often featured well-to-do, cosmopolitan types. The Art Deco style, lavish in a less visually complex way than its predecessor, Art Nouveau, was probably the ideal vehicle for her trendy style. Most notably, despite its decorative quality, her work provided her with an outlet for unconventional self-expression: truly a product of her era, the libertine golden age between the two world wars, Lempicka, a bisexual, made bold, liberated female sexuality the linchpin of her art.</p>

      <p>Tamara de Lempicka was born in Warsaw (then part of Russian Empire). Her father was a Russian-Jewish lawyer and her mother was a Polish socialite. As a child of a well-off family, she went to boarding school in Lausanne, Switzerland. In 1911, she spent the summer with her grandmother in Italy, where she was introduced to the work of the great Italian painters, sparking a love of art that would inform the rest of her life. The following year, her parents divorced and she was sent to live with her aunt in St. Petersburg. Her aunt was very wealthy, which provided her niece with a taste of the life of luxury enjoyed by the rich elite. When she was 15, Maria Gorska attended an opera, where she encountered the dashing Tadeusz Lempicki, whom she determined to marry. The gregarious and self-confident Maria convinced her uncle to make the introduction and, three years later, she and Lempicki were married.</p>
      
      <p>The following year, in 1917 the Russian Revolution began and her husband was arrested by the Bolsheviks. After weeks of trying to locate her husband in prison by exploiting her social connections, charm, and attractive appearance, Maria found Tadeusz and managed to arrange for his release (supposedly, Lempicka seduced a person of power to get her husband out). Shortly afterward, the couple left the country and eventually settled in Paris where her family had also taken refuge.</p>
      
      <p>In Paris, she reinvented herself as Tamara de Lempicka, a name that had direct aristocratic pretensions. Ironically, her financial circumstances were somewhat dire as a result of her refugee status, so she determined to make money from her art. Tamara began studying diligently, enrolling at the Académie de la Grande Chaumière where she was taught by the Nabis painter, Maurice Denis, and the Cubist André Lhote. Denis encouraged her to take inspiration from the graphic arts, an engagement that was to play a key role in the development of her signature style. Lhote was arguably her most influential mentor. Lhote's brand of Cubism - less flattened, angular version to which he referred as "soft Cubism," - is immediately detectable in Lempicka's style.</p>
      
      <p>Lempicka established herself fairly rapidly in the sophisticated, lively atmosphere of roaring '20s Paris in both social and artistic terms. She began showing her work in smaller galleries in the French capital and, in 1925, had her first solo exhibition in Milan. The show was sponsored by Count Emmanuele Castelbarco, a member of Italian high society and chic, continental artistic circles. In preparation for the show, Lempicka painted an astonishing 28 new pieces in a mere six months.</p>
      
      <p>Tamara de Lempicka was well suited to the prosperous golden age of the post-war period of the 1920s. Devoted to social ascendance but also enthralled with the bohemian lifestyles of the Parisian avant-garde, Lempicka found her place as a portraitist of some of the era's beautiful people. She mingled in circles with bright personalities such as André Gide, Pablo Picasso, Colette, and Jean Cocteau. Although married and the mother of a young daughter named Kizette, Tamara, who fashioned herself part-free spirit, part-femme fatale, engaged openly in romantic and sexual involvements with both men and women, a good number of whom were her patrons and models. She mixed with groups of lesbian and bisexual women artists and writers, attending Natalie Barney's "women only" afternoons and becoming friendly with figures such as Vita Sackville-West. Among her infamous entanglements was Lempicka's affair with a Parisian nightclub singer, Suzy Solidor, and her correspondence with the distinguished Italian poet, Gabriel d'Annunzio, whom she visited on two different occasions at his villa in Italy on Lake Garda. During the second visit, when she resisted his amorous advances, Annunzio withdrew his permission for Tamara to paint his portrait and the relationship ended before it had really begun.</p>
      
      <p>In 1927, Lempicka received first prize at the Exposition Internationale des Beaux-Arts for the painting Kizette on the Balcony (1927) - a striking portrait of her daughter, whom she saw very rarely. The following year, she and her husband divorced. Subsequently, her patron, Baron Raoul Kuffner con Dioszeg, commissioned her to paint a portrait of his mistress. However, in the process of painting the portrait, Lempicka developed a romantic relationship with the Baron, replacing his mistress and eventually marrying him in 1934 following the death of his wife.</p>
      
      <p>Lempicka, who had experienced the turbulent run-up to the Russian Revolution and then the catastrophic First World War, recognized early on the signs of a second impending world war and encouraged her husband to shore up his finances. In 1939, when war seemed inevitable, the couple left Paris and moved to Hollywood, California. They lived in the former house of the well-known film director, King Vidor, and Tamara soon became a favorite artist of the stars of Hollywood's silver screen.</p>
      
      <p>Lempicka busied herself with war relief work and after an extended struggle, managed to rescue her daughter Kizette from Nazi-occupied Paris in 1941. In 1943, the Baron and Baroness, as Lempicka was now known, moved to New York City, where they continued to socialize as frequently as ever, although de Lempicka's art took something of a back seat compared to her prolific output in Paris. The distinctive style in which she painted had by the mid-1940s become somewhat passe and therefore her work was less in demand.
      When her husband, the Baron, died in 1961, Tamara sold many of her belongings and embarked on three around-the-world voyages by ship. Afterward, she moved to Houston, Texas to be closer to her daughter. Around that time, she began producing abstract paintings in an effort to remain more in-step with current artistic trends. However, when she exhibited her work in 1962, it was poorly received by critics and the aging Lempicka made the decision to retire from public life as a painter and to never again exhibit her work.</p>
      
      <p>Ironically, around the time Tamara had forsaken art, there was a renewed interest in the Art Deco style. In 1966, an exhibition devoted completely to the Art Deco movement was held in the Musée des Arts Decoratifs in Paris, reigniting interest in Lempicka's work. In 1972, the Galerie du Luxembourg presented a major retrospective of her work, thus restoring interest both in Lempicka and her work.</p>
      
      <p>The intelligent, self-determined Lempicka was reportedly very temperamental in her old age, including being notoriously difficult with everyone - her daughter included - who proposed to exhibit her work. In 1978, she moved to Cuernavaca in Mexico, where she bought a unique architect-designed house. After she died in 1980, her ashes were scattered on top of Popocatepetl, a volcano in Mexico.</p>
      
      <p>In both her life and her art, Tamara de Lempicka offered a new image of the modern woman: part jazz-age femme fatale, libertine, and social climber, and part canny self-promoter, self-styled experimental artist and astute cultural and historical prognosticator. In many ways, Lempicka's artistic output has been assessed as inseparable from her larger-than-life character and, more significantly, her gender. Lempicka's lifestyle, one in which she flouted her sexual freedom, has made her something of a conundrum for feminist art historians. As she frequently depicted her female lovers and other women - often in pairs or groups - as reveling in their sexuality under the gaze of a female painter, it is possible to regard Lempicka as a kind of proto-feminism. Indeed, as a female painter representing the female nude, she subverted the conventional arrangement in which a naked woman is displayed exclusively for the viewing pleasure of the male onlooker. The result is a kind of egalitarian voyeurism. The caveat may be, however, that as a member of the upper class, Lempicka's freedom was more easily attained and forgiven.</p>
      
      <p>Her work, while arguably Cubist-inspired to an extent, exudes the lavishness of the decorative, just as do her sitters. Trained by two successful avant-garde artists at the height of post-Cubist experimentation, Lempicka's work is nevertheless most often categorized as Art Deco. While her style incorporates the geometric, faceted forms of Cubism, her emphasis on soft modeling achieved a more sensuous effect. The bodies of her sitters are slightly distorted so that they appear as elegant objets d'art as much as human figures. She incorporated the rich, limited palette of Art Deco - particularly, graphic design - to create polished portraits that seemed more decorative than serious high art. Finding her niche - a comfortable place between traditional easel painting inspired by the likes of Michelangelo, Caravaggio, and Ingres and objects produced solely for decoration - Tamara de Lempicka's Art Deco style has been an inspiration to figures as diverse as the singer and designer Florence Welch and fashion designers Karl Lagerfeld and Louis Vuitton. She was a favorite artist of the rich and socialites of her time, her popularity continues with celebrities such as Madonna, Jack Nicholson, and Barbra Streisand that enjoy her sharp lines and bold statements of a by-gone age.</p>`,
      selectedPaintings: [
        {
          title: "My Portrait (Self-Portrait in the Green Bugatti)",
          artistName: "Tamara de Lempicka",
          year: "1929",
          width: 1190,
          image:
            "https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg",
          height: 1584,
        },
        {
          title: "Portrait of Marquis Sommi",
          artistName: "Tamara de Lempicka",
          year: "1925",
          width: 424,
          image:
            "https://uploads2.wikiart.org/images/tamara-de-lempicka/portrait-of-marquis-sommi-1925.jpg!Large.jpg",
          height: 648,
        },
        {
          title: "Girl with Gloves",
          artistName: "Tamara de Lempicka",
          year: "1929",
          width: 800,
          image:
            "https://uploads2.wikiart.org/images/tamara-de-lempicka/girl-with-gloves-1929.jpg!Large.jpg",
          height: 1064,
        },
        {
          title: "Kizette On The Balcony",
          artistName: "Tamara de Lempicka",
          year: "1927",
          width: 750,
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/kizette-on-the-balcony-1927.jpg!Large.jpg",
          height: 1179,
        },
        {
          title: "Double 47",
          artistName: "Tamara de Lempicka",
          year: "1924",
          width: 794,
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/double-47.jpg!Large.jpg",
          height: 1023,
        },
        {
          title: "Andromeda",
          artistName: "Tamara de Lempicka",
          year: "1929",
          width: 724,
          image:
            "https://uploads4.wikiart.org/images/tamara-de-lempicka/andromeda-1929.jpg!Large.jpg",
          height: 1114,
        },
        {
          title: "Portrait Of Ira P",
          artistName: "Tamara de Lempicka",
          year: "1930",
          width: 797,
          image:
            "https://uploads3.wikiart.org/images/tamara-de-lempicka/portrait-of-ira-p-1930.jpg!Large.jpg",
          height: 1258,
        },
        {
          title: "Nude with Dove",
          artistName: "Tamara de Lempicka",
          year: "1928",
          width: 400,
          image:
            "https://uploads0.wikiart.org/images/tamara-de-lempicka/nude-with-dove-1928.jpg!Large.jpg",
          height: 710,
        },
        {
          title: "Portrait Of Dr. Boucard",
          artistName: "Tamara de Lempicka",
          year: "1929",
          width: 897,
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/portrait-of-dr-boucard-1929.jpg!Large.jpg",
          height: 1612,
        },
        {
          title: "The Marquis D'Afflitto on a Staircase",
          artistName: "Tamara de Lempicka",
          year: "1926",
          width: 546,
          image:
            "https://uploads5.wikiart.org/images/tamara-de-lempicka/the-marquis-d-afflitto-on-a-staircase-1926.jpg!Large.jpg",
          height: 866,
        },
      ],
    },
    {
      key: "emma-amos",
      name: "Emma Amos",
      profileImage:
        "https://uploads1.wikiart.org/00335/images//photo-becket-logan.jpg!Portrait.jpg",
      coverImage:
        "https://uploads7.wikiart.org/00335/images/emma-amos/seated-figure-and-nude-1966.png",
      style: "Contemporary",
      nationality: "American",
      mainFacts: [],
      firstParagraph: `<h4>Painter, printmaker, and weaver Emma Amos was born in 1937 and grew up in Atlanta, Georgia.</h4><p> She began painting and drawing when she was six. At age sixteen, after attending segregated public schools in Atlanta, she entered the five-year program at Antioch University in Yellow Springs, Ohio.</p>`,
      bio: `<h4>Painter, printmaker, and weaver Emma Amos was born in 1937 and grew up in Atlanta, Georgia.</h4><p> She began painting and drawing when she was six. At age sixteen, after attending segregated public schools in Atlanta, she entered the five-year program at Antioch University in Yellow Springs, Ohio.</p>

      <p>Amos's first solo exhibition was in an Atlanta galery in 1960. In that same year she moved to New York, where she taught as an assistant at the Dalton School and continued her work as an artist by making prints. In 1961 she was hired by Dorothy Liebes as a designer/weaver, creating rugs for a major textile manufacturer. In 1964 she entered a master's program in Art Education at New York University. During this time Hale Woodruff invited her to become a member of Spiral, a group of black artists that included Romare Bearden, Norman Lewis, and Charles Alston. She was the group's youngest and only female member.</p> 
      
      <p>She married Bobby Levine in 1965 and received her MA in 1966. She had a son, Nicholas, in 1967, and her daughter, India, followed three years later. While the children were small, Amos focused on sewing, weaving, quilting, and doing illustrations for Sesame Street magazine. In 1974 she began teaching at the Newark School of Fine and Industrial Arts, and in 1977 she developed and cohosted (with Beth Gutcheon) Show of Hands, a crafts show for WGBH Educational TV in Boston, which ran for two years.</p> 
      
      <p>In 1980, Amos was hired as an assistant professor at the Mason Gross School of Art, Rutgers University. She continued teaching there until she retired in June 2008.</p>`,
      selectedPaintings: [
        {
          title: "Three Figures",
          artistName: "Emma Amos",
          year: "1966",
          width: 543,
          image:
            "https://uploads7.wikiart.org/00335/images/emma-amos/three-figures-1966.jpg!Large.jpg",
          height: 640,
        },
        {
          title: "Fanny Mae",
          artistName: "Emma Amos",
          year: "1965",
          width: 540,
          image:
            "https://uploads3.wikiart.org/00335/images/emma-amos/fanny-mae-1965.jpg!Large.jpg",
          height: 640,
        },
        {
          title: "22 and Cheetah",
          artistName: "Emma Amos",
          year: "1983",
          width: 490,
          image:
            "https://uploads8.wikiart.org/00335/images/emma-amos/22-and-cheetah-1983.jpg!Large.jpg",
          height: 640,
        },
        {
          title: "Equals",
          artistName: "Emma Amos",
          year: "1992",
          width: 800,
          image:
            "https://uploads0.wikiart.org/00335/images/emma-amos/equals-1992.png!Large.png",
          height: 734,
        },
        {
          title: "Identity",
          artistName: "Emma Amos",
          year: "2006",
          width: 800,
          image:
            "https://uploads2.wikiart.org/00335/images/emma-amos/identity-2006.png!Large.png",
          height: 801,
        },
        {
          title: "Does Black Rub Off?",
          artistName: "Emma Amos",
          year: "1992",
          width: 776,
          image:
            "https://uploads8.wikiart.org/00335/images/emma-amos/does-black-rub-off-question-mark-1992.png!Large.png",
          height: 1217,
        },
        {
          title: "Seated Figure and Nude",
          artistName: "Emma Amos",
          year: "1966",
          width: 800,
          image:
            "https://uploads7.wikiart.org/00335/images/emma-amos/seated-figure-and-nude-1966.png!Large.png",
          height: 889,
        },
        {
          title: "Head First",
          artistName: "Emma Amos",
          year: "2006",
          width: 486,
          image:
            "https://uploads4.wikiart.org/00335/images/emma-amos/head-first-2006.jpg!Large.jpg",
          height: 640,
        },
        {
          title: "Without Feather Boa",
          artistName: "Emma Amos",
          year: "1965",
          width: 504,
          image:
            "https://uploads4.wikiart.org/00335/images/emma-amos/without-feather-boa-1965.jpg!Large.jpg",
          height: 640,
        },
        {
          title: "Blue Balls",
          artistName: "Emma Amos",
          year: "1964",
          width: 640,
          image:
            "https://uploads4.wikiart.org/00335/images/emma-amos/blue-balls-1964.jpg",
          height: 525,
        },
      ],
    },
    {
      key: "mary-cassatt",
      name: "Mary Cassatt",
      profileImage:
        "https://uploads4.wikiart.org/images/mary-cassatt.jpg!Portrait.jpg",
      coverImage:
        "https://uploads3.wikiart.org/images/mary-cassatt/young-woman-sewing-in-the-garden-1886.jpg!Large.jpg",
      style: "Impressionism",
      nationality: "American",
      mainFacts: [],
      firstParagraph: `<h4>An American painter and printmaker, Mary Cassatt was an impressionist painter, who depicted the lives of women, especially the special bond between mother and child.</h4><p>She traveled extensively as a child, and was probably exposed to the works of the great masters at the World's fair in Paris in 1855. Other artist's, such as Degas and Pissarro, would later become her mentors and fellow painters. She began studying art seriously at the age of 15, at a time when only around twenty percent of all arts students were female. Unlike many of the other female students, she was determined to make art her career, rather than just a social skill. She was disappointed at her art education in the United States, and moved to Paris to study art under private tutors in Paris. Her mother and family friends traveled with her to France, acting as chaperones.</p>`,
      bio: `<h4>An American painter and printmaker, Mary Cassatt was an impressionist painter, who depicted the lives of women, especially the special bond between mother and child.</h4> <p>She traveled extensively as a child, and was probably exposed to the works of the great masters at the World's fair in Paris in 1855. Other artist's, such as Degas and Pissarro, would later become her mentors and fellow painters. She began studying art seriously at the age of 15, at a time when only around twenty percent of all arts students were female. Unlike many of the other female students, she was determined to make art her career, rather than just a social skill. She was disappointed at her art education in the United States, and moved to Paris to study art under private tutors in Paris. Her mother and family friends traveled with her to France, acting as chaperones.</p>

      <p>She continued her art education in France, and her first work was accepted into the Paris Salon in 1868. At the outbreak of the Franco-Prussian War in 1870, however, she returned to the United States to live with her family. Her father, who did not approve of her chosen vocation as an artist, paid for her living expenses, but refused to pay for her art supplies. During her stay in the United States, Cassatt was miserable. She exhibited some paintings but found no buyers, and upset at the lack of art to study, she quit painting and almost gave up the craft. After a trip to Chicago, her work was noticed by the Archbishop of Pittsburgh, who commissioned from her a copy of two of Correggio's paintings in Italy. He offered to pay for her travel expenses and she immediately left the United States.</p>
      
      <p>In Europe, Cassatt's paintings were better received, increasing her prospects, and exhibited in the Salon of 1872, selling a painting. She exhibited every year at the Paris Salon until 1877, when all her works were rejected. Distraught at her rejection, she turned to the Impressionists, who welcomed her with welcome arms.</p>
      
      <p>Deciding early in her career that marriage was not an option, Cassatt never married, and spent much of her time with her sister Lydia, until her death in 1882, which left Mary unable to work for a short time. As her career progressed, her critical reputation grew, and she was often touted, along with Degas, as the one of the best exhibitors at the Impressionist Salon. She was awarded the French Legion of Honor in 1906.</p>
      
      <p>In her later life, she was diagnosed with rheumatism, neuralgia, diabetes, and cataracts, although her spirit was never crushed. She continued to fight for the cause of women's suffrage after she went almost blind in 1914. She died twelve years later. He works have since been printed on United States postage stamps and her works have sold for as much as $2.9 million at auction.</p>`,
      selectedPaintings: [
        {
          title: "At the Theater",
          artistName: "Mary Cassatt",
          year: "1879",
          width: 656,
          image:
            "https://uploads3.wikiart.org/images/mary-cassatt/at-the-theater-1879.jpg!Large.jpg",
          height: 800,
        },
        {
          title: "The Flirtation A Balcony in Seville",
          artistName: "Mary Cassatt",
          year: "1872",
          width: 826,
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/the-flirtation-a-balcony-in-seville-1872.jpg!Large.jpg",
          height: 988,
        },
        {
          title: "After the Bullfight",
          artistName: "Mary Cassatt",
          year: "1873",
          width: 770,
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/toreador-1873.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "Susan Comforting the Baby (no.1)",
          artistName: "Mary Cassatt",
          yearA: "1881",
          width: 1106,
          image:
            "https://uploads5.wikiart.org/images/mary-cassatt/susan-comforting-the-baby-no-1.jpg!Large.jpg",
          height: 815,
        },
        {
          title: "Young Woman Sewing in the garden",
          artistName: "Mary Cassatt",
          year: "1882",
          width: 563,
          image:
            "https://uploads3.wikiart.org/images/mary-cassatt/young-woman-sewing-in-the-garden-1882.jpg!Large.jpg",
          height: 800,
        },
        {
          title: "Baby in His Mother`s arms, sucking his finger",
          artistName: "Mary Cassatt",
          year: "1889",
          width: 716,
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/baby-in-his-mother-s-arms-sucking-his-finger-1889.jpg!Large.jpg",
          height: 946,
        },
        {
          title: "Mother And Child",
          artistName: "Mary Cassatt",
          year: "1889",
          width: 845,
          image:
            "https://uploads5.wikiart.org/images/mary-cassatt/mother-and-child-1889.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "Mother Holding a Child in Her arms",
          artistName: "Mary Cassatt",
          year: "1890",
          width: 767,
          image:
            "https://uploads0.wikiart.org/images/mary-cassatt/mother-holding-a-child-in-her-arms.jpg!Large.jpg",
          height: 953,
        },
        {
          title: "Baby`s First Caress",
          artistName: "Mary Cassatt",
          year: "1891",
          width: 806,
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/baby-s-first-cess-1891.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "Mothers Kiss",
          artistName: "Mary Cassatt",
          year: "1891",
          width: 618,
          image:
            "https://uploads1.wikiart.org/images/mary-cassatt/mothers-kiss-1891.jpg!Large.jpg",
          height: 1000,
        },
      ],
    },
    {
      key: "hilma-af-klint",
      name: "Hilma Af Klint",
      profileImage:
        "https://uploads4.wikiart.org/temp/c5de8e4a-1cb2-4e2f-b31a-72406334ad13.jpg",
      coverImage:
        "https://uploads7.wikiart.org/00140/images/hilma-af-klint/hilma-af-klint-svanen.jpg!Large.jpg",
      style: " Naïve Art (Primitivism), Abstract Art, Modernism",
      nationality: "Swedish",
      mainFacts: [],
      firstParagraph: `<h4>Hilma af Klint was a Swedish artist and mystic whose paintings were amongst the first abstract art.</h4> <p>She belonged to a group called 'The Five' and the paintings or diagrams were a visual representation of complex philosophical ideas.</p>`,
      bio: `<h4>Hilma af Klint was a Swedish artist and mystic whose paintings were amongst the first abstract art.</h4> <p>She belonged to a group called 'The Five' and the paintings or diagrams were a visual representation of complex philosophical ideas.</p>

      <p>The fourth child of Captain Victor af Klint, a Swedish naval commander, and Mathilda af Klint (née Sonntag), Hilma af Klint spent summers with her family at their farm Hammora on the island of Adelsö in Lake Mälaren. In these idylic surroundings Hilma came into contact with nature at an early stage in her life and this deep association with natural forms was to be an inspiration in her work. From her father she adopted an interest in mathematics.</p>
      
      <p>In 1880 her younger sister Hermina died and it was at this time that the spiritual dimension of her life began to develop.</p>
      
      <p>She showed an early ability in visual art and after the family had moved to Stockholm she studied at the Academy of Fine Arts for five years during which time she learned portraiture and landscape painting . Here she met Anna Cassel, the first of the four women with whom she later worked in 'The Five' (de fem), a group of artists who shared her ideas. Her more conventional painting became the source of her financial income while the 'life's work' remained a quite separate practice.</p>
      
      <p>The project on which "the Five" were engaged involved, in 1892, recording in a book a completely new system of mystical thought in the form of messages from higher spirits. One, Gregor, spoke thus: "all the knowledge that is not of the senses, not of the intellect, not of the heart but is the property that exclusively belongs to the deepest aspect of your being...the knowledge of your spirit".</p>
      
      <p>It is interesting to note that af Klint's work ran parallel to the development of abstract art by other artists such as Mondrian, Malevich and Kandinsky who were, like af Klint, inspired by the Theosophical Movement founded by Madame Blavatsky. Af Klint's work can also be seen in the wider context of the modernist search for new forms in artistic, spiritual, political and scientific systems in the beginnings of the 20th century.</p>
      
      <p>Through her work with the group 'the Five' af Klint created experimental automatic drawing as early as 1896, leading her towards an inventive geometric visual language capable of conceptualising invisible forces both of the inner and outer worlds. Quite apart from their diagrammatic purpose the paintings have a freshness and a modern aesthetic of tentative line and hastily captured image: a segmented circle, a helix bisected and divided into a spectrum of lightly painted colours. She continued prolifically to add to the body of work amounting to over 1000 pieces until 1941. She requested that it should not be shown until 20 years after the end of her life.</p>`,
      selectedPaintings: [
        {
          title: "The Large Figure Paintings, nr 5",
          artistName: "Hilma af Klint",
          year: "1907",
          width: 801,
          image:
            "https://uploads6.wikiart.org/00287/images/hilma-af-klint/hilma-1.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "They tens mainstay IV",
          artistName: "Hilma af Klint",
          year: "1907",
          width: 660,
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/they-tens-mainstay-iv-1907.jpg!Large.jpg",
          height: 898,
        },
        {
          title: "De tio största, n° 2 Barnaaldern",
          artistName: "Hilma af Klint",
          year: "1907",
          width: 673,
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/de-tio-st-rsta-n-2-barnaaldern-1907.jpg!Large.jpg",
          height: 899,
        },
        {
          title: "Tree of Knowledge No.2 Series W",
          artistName: "Hilma af Klint",
          year: "1913",
          width: 1072,
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/untitled.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "The Dove, Nr. 12",
          artistName: "Hilma af Klint",
          year: "1915",
          width: 462,
          image:
            "https://uploads5.wikiart.org/images/hilma-af-klint/the-dove-nr-12-1915.jpg",
          height: 553,
        },
        {
          title: "Svanen",
          artistName: "Hilma af Klint",
          year: "1914",
          width: 1010,
          image:
            "https://uploads6.wikiart.org/images/hilma-af-klint/svanen-1914.jpg!Large.jpg",
          height: 1024,
        },
        {
          title: "Wheat and Wormwood",
          artistName: "Hilma af Klint",
          year: "1922",
          width: 1473,
          image:
            "https://uploads0.wikiart.org/images/hilma-af-klint/wheat-and-wormwood-1922.jpg!Large.jpg",
          height: 1029,
        },
        {
          title: "Altarpiece No. 1, Group X",
          artistName: "Hilma af Klint",
          year: "1915",
          width: 364,
          image:
            "https://uploads5.wikiart.org/images/hilma-af-klint/altar-painting-1915.jpg",
          height: 481,
        },
        {
          title: "The Swan (No. 16)",
          artistName: "Hilma af Klint",
          year: "1915",
          width: 462,
          image:
            "https://uploads5.wikiart.org/images/hilma-af-klint/the-swan-no-16-1915.jpg",
          height: 474,
        },
        {
          title: "The Swan (No. 17)",
          artistName: "Hilma af Klint",
          completitionYear: 1915,
          yearAsString: "1915",
          width: 1278,
          image:
            "https://uploads7.wikiart.org/00140/images/hilma-af-klint/hilma-af-klint-svanen.jpg!Large.jpg",
          height: 1280,
        },
      ],
    },
    {
      key: "pablo-picasso",
      name: "Pablo Picasso",
      profileImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFcRzX6_Vq6RHOQ7mjrTkbzrfKb9eAi7Ug57nXBrRxVQUBXvZWTRYTJ5gFrcRwZf42Y4Nloz7WLgbkCXu-A9LvS8sYW6i55ao9Z5ReZGset3nlGuoqZ5yyX-kH9CCqTk_t04bHnzF-cXfx7LYmFFg-E3OPh2DyT1iQX0p8LZD310HjKC9dBCBRklcy/s1600/picasso_3358.jpg",
      coverImage:
        "https://cdn.shopify.com/s/files/1/0849/4704/files/guernica_sartle.jpg?v=1582528493",
      style: "Cubism, Post-Impressionism, Surrealism",
      nationality: "Spanish",
      mainFacts: [],
      firstParagraph: `<h4>Pablo Picasso was the most dominant and influential artist of the 1st half of the 20th century.</h4> <p>Associated most of all with pioneering Cubism, he also invented collage and made major contribution to Surrealism. He saw himself above all as a painter, yet his sculpture was greatly influential, and he also explored areas as diverse as printmaking and ceramics. Finally, he was a famously charismatic personality, the leading figure in the Ecole de Paris. His many relationships with women not only filtered into his art but also may have directed its course, and his behavior has come to embody that of the bohemian modern artist in the popular imagination.</p>`,
      bio: `<h4>Pablo Picasso was the most dominant and influential artist of the 1st half of the 20th century.</h4> <p>Associated most of all with pioneering Cubism, he also invented collage and made major contribution to Surrealism. He saw himself above all as a painter, yet his sculpture was greatly influential, and he also explored areas as diverse as printmaking and ceramics. Finally, he was a famously charismatic personality, the leading figure in the Ecole de Paris. His many relationships with women not only filtered into his art but also may have directed its course, and his behavior has come to embody that of the bohemian modern artist in the popular imagination.</p>

      <p>Picasso rejected Matisse's view of the primary importance and role of colour, and focused instead on new pictorial ways of representing form and space. Influenced by novelties of Cézanne, and also by African sculpture and ancient Iberian art, he started to lend his figures more structure, and to deconstruct the conventions of perspective that had dominated painting since the Renaissance. This led him (alongside with Georges Braque) to evolve an entirely new Cubist movement, which rapidly became the cutting edge of modern art. At the same time, Picasso himself rejected the label "Cubism," especially when critics began to differentiate between the two key approaches he pursued - Analytic and Synthetic.</p>
      
      <p>In the 1920s and 1930s Picasso adopted a neoclassical figurative style. As he matured he worked on his own versions of canonical masterpieces by artists such as Poussin, Ingres, Velazquez, Goya, Rembrandt, and El Greco.</p>
      
      <p>Picasso's influence was profound and far-reaching for most of his life. His work in pioneering Cubism established a set of pictorial problems, devices, and approaches, which remained important well into the 1950s. The Museum of Modern Art in New York (MoMA) has been called "the house that Pablo built," because it has so widely exhibited the artist's work. Picasso created some of the greatest 20th century paintings, several of which have achieved iconic status (Les Demoiselles d'Avignon, Guernica, Weeping Woman).</p>`,
      selectedPaintings: [
        {
          title: "Guernica",
          artistName: "Pablo Picasso",
          year: "1937",
          width: 3369,
          image:
            "https://uploads0.wikiart.org/00139/images/pablo-picasso/guernica-by-pablo-picasso.jpg!Large.jpg",
          height: 1523,
        },
        {
          title: "Madeleine",
          artistName: "Pablo Picasso",
          year: "1904",
          width: 962,
          image:
            "https://uploads8.wikiart.org/images/pablo-picasso/madeleine-1904.jpg!Large.jpg",
          height: 1266,
        },
        {
          title: "Weeping Woman with Handkerchief",
          artistName: "Pablo Picasso",
          year: "1937",
          width: 749,
          image:
            "https://uploads0.wikiart.org/00234/images/pablo-picasso/pablo-picasso-head-of-a-woman-crying-with-handkerchief-1937.jpeg!Large.jpeg",
          height: 960,
        },
        {
          title: "Sleeping woman (Meditation)",
          artistName: "Pablo Picasso",
          year: "1904",
          width: 1443,
          image:
            "https://uploads6.wikiart.org/images/pablo-picasso/sleeping-woman-meditation-1904.jpg!Large.jpg",
          height: 1984,
        },
        {
          title: "Portrait of Marie-Thérèse Walter",
          artistName: "Pablo Picasso",
          year: "1937",
          width: 888,
          image:
            "https://uploads4.wikiart.org/images/pablo-picasso/portrait-of-marie-thérèse-walter-1937.jpg!Large.jpg",
          height: 1088,
        },
        {
          title: "Leaning woman with bonnet",
          artistName: "Pablo Picasso",
          year: "1921",
          width: 733,
          image:
            "https://uploads6.wikiart.org/images/pablo-picasso/leaning-woman-with-bonnet-1921.jpg!Large.jpg",
          height: 940,
        },
        {
          title: "Portrait of Dora Maar",
          artistName: "Pablo Picasso",
          year: "1937",
          width: 900,
          image:
            "https://uploads2.wikiart.org/images/pablo-picasso/portrait-of-dora-maar-1937.jpg!Large.jpg",
          height: 1088,
        },
        {
          title: "The ironer",
          artistName: "Pablo Picasso",
          year: "1904",
          width: 1522,
          image:
            "https://uploads0.wikiart.org/images/pablo-picasso/the-ironer-1904.jpg!Large.jpg",
          height: 2454,
        },
        {
          title: "Woman with raven",
          artistName: "Pablo Picasso",
          year: "1904",
          width: 728,
          image:
            "https://uploads6.wikiart.org/images/pablo-picasso/woman-with-raven-1904.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "A horsewoman",
          artistName: "Pablo Picasso",
          year: "1905",
          width: 974,
          image:
            "https://uploads2.wikiart.org/images/pablo-picasso/a-horsewoman-1905.jpg!Large.jpg",
          height: 718,
        },
      ],
    },
    {
      key: "salvador-dali",
      name: "Salvador Dalí",
      profileImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/1024px-Salvador_Dal%C3%AD_1939.jpg",
      coverImage:
        "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg",
      style: "Surrealism",
      nationality: "Spanish, Catalan",
      mainFacts: [],
      firstParagraph: `<h4>An author, artist and provocateur, Salvador Dalí was one of the most notable figures of the Surrealist movement.</h4><p> Born in 1904 in Figueras, Catalonia, Dalí studied art in Madrid and Barcelona, where he demonstrated masterful painting skills and experimented with several artistic styles. In the late 1920s, two chief influences emerged that shaped his mature artistic style. The first was the work of psychoanalyst Sigmund Freud that explored the erotic significance of dreams and subconscious imagery. The second was his introduction to the Paris Surrealists, a group of artists and writers who sought to unlock the creative potential of the human unconscious.</p>`,
      bio: `<h4>An author, artist and provocateur, Salvador Dalí was one of the most notable figures of the Surrealist movement.</h4><p> Born in 1904 in Figueras, Catalonia, Dalí studied art in Madrid and Barcelona, where he demonstrated masterful painting skills and experimented with several artistic styles. In the late 1920s, two chief influences emerged that shaped his mature artistic style. The first was the work of psychoanalyst Sigmund Freud that explored the erotic significance of dreams and subconscious imagery. The second was his introduction to the Paris Surrealists, a group of artists and writers who sought to unlock the creative potential of the human unconscious.</p>

      <p>In 1929, Dalí burst onto the art scene with the debut of Un Chien Andalou (An Andalusian Dog) (1929), a short silent surrealist film he made with Spanish director Luis Buñuel. The film propelled the authors to the center of the French surrealist circle led by André Breton. Between 1929 and 1973, Dalí produced some of the most famous surrealist paintings, including his masterpiece, The Persistence of Memory (1931). The painting depicts a dreamworld in which common objects are deformed and displayed bizarrely and irrationally: watches, solid and hard objects appear to be inexplicably limp and melting in the desolate landscape. In the painting, he effortlessly integrates the real and the imaginary in order “to systemize confusion and thus to help discredit completely the world of reality”.</p>
      
      <p>Dalí's most important contribution to Surrealism was the paranoiac-critical method, a surrealist technique he developed in the 1930s. The technique required the artist to enter a unique state of mind which he described as a “spontaneous method of irrational knowledge, based on the critical-interpretative association of the phenomena of delirium”. He also published essays in which he discussed and defined the surrealist object, such as Lobster Telephone[/i[/url]] (1936) andMae West Lips Sofa (1937) were usually constructed from found items or readymade materials.</p>
      
      <p>In the late 1930s, Dalí began painting in a more academic style influenced by the Renaissance masters. His admiration for Raphael is particularly evident in paintings such as Poetry of America (1943), Raphaelesque Head Exploding (1951), and Maximum Speed of Raphael's Madonna (1954). Throughout the 1930s, Dalí's ambiguous political stance on fascism alienated him from his Surrealist colleagues, which eventually expelled Dalí from the movement.</p>
      
      <p>In 1940, during World War II, Dalí and his wife Gala moved to the United States. Henceforth, Dalí worked in a variety of media, designing theatre sets, furniture, jewelry, and even display windows for fashionable shops. In 1942, he published his most intriguing book, the autobiography The Secret Life of Salvador Dali.</p>
      
      <p>Dalí and Gala returned to Spain in 1948. The artist continued to be prolific in the late stages of his career, he worked on a variety of projects, while continuing to produce paintings, sculptures, and objects. He was also particularly fond of publicity stunts and was able to intrigue the public for decades with his outrageous behavior. Dalí died of heart failure on January 23, 1989, in Figueres, Spain.</p>`,
      selectedPaintings: [
        {
          title: "The Discovery of America by Christopher Columbus",
          artistName: "Salvador Dali",
          year: "1959",
          width: 1018,
          image:
            "https://uploads2.wikiart.org/images/salvador-dali/the-discovery-of-america-by-christopher-columbus-1959.jpg!Large.jpg",
          height: 1349,
        },
        {
          title: "The Vertebrated Cavern - Series of Decals",
          artistName: "Salvador Dali",
          year: "1936",
          width: 467,
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/the-vertebrated-cavern-series-of-decals.jpg!Large.jpg",
          height: 764,
        },
        {
          title: "Portrait of the Cellist Ricard Pichot",
          artistName: "Salvador Dali",
          year: "1920",
          width: 534,
          image:
            "https://uploads4.wikiart.org/images/salvador-dali/portrait-of-the-cellist-ricard-pichot.jpg!Large.jpg",
          height: 700,
        },
        {
          title: "Space Elephant",
          artistName: "Salvador Dali",
          year: "1948",
          width: 834,
          image:
            "https://uploads8.wikiart.org/images/salvador-dali/space-elephant.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "Swans Reflecting Elephants",
          artistName: "Salvador Dali",
          year: "1937",
          width: 2402,
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/cygnes-refletant-des-elephants.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "The Sublime Moment",
          artistName: "Salvador Dali",
          year: "1938",
          width: 1973,
          image:
            "https://uploads3.wikiart.org/images/salvador-dali/the-sublime-moment.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "Geopolitical Child Watching the Birth of the New Man",
          artistName: "Salvador Dali",
          year: "1943",
          width: 1738,
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/geopolitical-child-watching-the-birth-of-the-new-man-1943.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "Fountain of Milk Spreading Itself Uselessly on Three Shoes",
          artistName: "Salvador Dali",
          year: "1945",
          width: 1983,
          image:
            "https://uploads7.wikiart.org/images/salvador-dali/fountain-of-milk-spreading-itself-uselessly-on-three-shoes.jpg!Large.jpg",
          height: 1600,
        },
        {
          title: "Portrait of Mrs. Mary Sigall",
          artistName: "Salvador Dali",
          year: "1948",
          width: 640,
          image:
            "https://uploads3.wikiart.org/images/salvador-dali/portrait-of-mrs-mary-sigall.jpg!Large.jpg",
          height: 736,
        },
        {
          title: "Leda Atomica",
          artistName: "Salvador Dali",
          year: "1949",
          width: 671,
          image:
            "https://uploads0.wikiart.org/00153/images/salvador-dali/leda-atomica.jpeg!Large.jpeg",
          height: 900,
        },
      ],
    },
    {
      key: "wassily-kandinsky",
      name: "Wassily Kandinsky",
      profileImage:
        "https://uploads0.wikiart.org/images/wassily-kandinsky.jpg!Portrait.jpg",
      coverImage:
        "https://uploads1.wikiart.org/00280/images/wassily-kandinsky/37-262-ph-web-1-1.jpg!Large.jpg",
      style: "Expressionism, Abstract Art",
      nationality: "Russian",
      mainFacts: [],
      firstParagraph: `<h4>The creator of the first modern abstract paintings, Wassily Kandinsky was an influential Russian painter and art theorist.</h4><p> In his youth, he studied law and economics at the University of Moscow, and was later hired as a professor of Roman law at the University of Dorpat in Estonia. He was 30 years old when he began his studies in painting, focusing on life drawing, sketching, and anatomy, at the University of Munich.</p>`,
      bio: `<h4>The creator of the first modern abstract paintings, Wassily Kandinsky was an influential Russian painter and art theorist.</h4><p> In his youth, he studied law and economics at the University of Moscow, and was later hired as a professor of Roman law at the University of Dorpat in Estonia. He was 30 years old when he began his studies in painting, focusing on life drawing, sketching, and anatomy, at the University of Munich.</p>

      <p>He was not immediately accepted into the school as an art student, and so in the meantime he began learning art by himself, gaining artistic insight from Monet's Haystacks and Richard Wagner's composition Lohengrin. He was also influenced by the teachings of anthroposophy, as such, his abstract works were a creation of his intense philosophical beliefs, based on his own personal experiences with art. The devotion to inner beauty remained a central theme in his art.</p>
      
      <p>In 1914, after the beginning of World War I, Kandinsky returned to Moscow, where he did not find much inspiration in the art world. In 1921, he returned to Munich, where he taught at the Bauhaus school of architecture, until it was closed by the Nazis in 1933. He was an active art theorist, publishing a number of books on art theory, and developing a complex and deeply emotional theory about the ability of colors and shapes to represent sound and evince human emotion. He eventually traveled to the United States to lecture on the topic.</p>
      
      <p>After the Bauhaus was closed, Kandinsky moved to Paris, where he was mostly isolated from the other Impressionist or Cubist painters. He later became a French citizen, and lived the rest of his days there. His legacy lives on in the newly created Kandinsky Award, which rewards a promising young Russian artist a 55,000 euro prize, and attempts to elevate the status of contemporary Russian art.</p>`,
      selectedPaintings: [
        {
          title: "Moscow I",
          artistName: "Wassily Kandinsky",
          year: "1916",
          width: 1063,
          image:
            "https://uploads2.wikiart.org/images/wassily-kandinsky/moscow-i-1916.jpg!Large.jpg",
          height: 1102,
        },
        {
          title: "Blue mountain",
          artistName: "Wassily Kandinsky",
          year: "1908",
          width: 778,
          image:
            "https://uploads7.wikiart.org/images/wassily-kandinsky/blue-mountain-1908.jpg!Large.jpg",
          height: 879,
        },
        {
          title: "To the Unknown Voice",
          artistName: "Wassily Kandinsky",
          year: "1916",
          width: 534,
          image:
            "https://uploads5.wikiart.org/images/wassily-kandinsky/to-the-unknown-voice-1916.jpg!Large.jpg",
          height: 809,
        },
        {
          title: "Red Oval",
          artistName: "Wassily Kandinsky",
          year: "1920",
          width: 1063,
          image:
            "https://uploads2.wikiart.org/images/wassily-kandinsky/red-oval-1920.jpg!Large.jpg",
          height: 1053,
        },
        {
          title: "Small worlds II",
          artistName: "Wassily Kandinsky",
          year: "1922",
          width: 587,
          image:
            "https://uploads0.wikiart.org/images/wassily-kandinsky/small-worlds-ii-1922.jpg!Large.jpg",
          height: 750,
        },
        {
          title: "Composition 8",
          artistName: "Wassily Kandinsky",
          year: "1923",
          width: 1280,
          image:
            "https://uploads1.wikiart.org/00280/images/wassily-kandinsky/37-262-ph-web-1-1.jpg!Large.jpg",
          height: 891,
        },
        {
          title: "Small dream in red",
          artistName: "Wassily Kandinsky",
          year: "1925",
          width: 703,
          image:
            "https://uploads3.wikiart.org/images/wassily-kandinsky/small-dream-in-red-1925.jpg!Large.jpg",
          height: 605,
        },
        {
          title: "Several Circles",
          artistName: "Wassily Kandinsky",
          year: "1926",
          width: 1063,
          image:
            "https://uploads0.wikiart.org/images/wassily-kandinsky/several-circles-1926.jpg!Large.jpg",
          height: 1046,
        },
        {
          title: "Accent on rose",
          artistName: "Wassily Kandinsky",
          year: "1926",
          width: 515,
          image:
            "https://uploads8.wikiart.org/images/wassily-kandinsky/accent-on-rose-1926.jpg!Large.jpg",
          height: 650,
        },
        {
          title: "Succession",
          artistName: "Wassily Kandinsky",
          year: "1935",
          width: 1800,
          image:
            "https://uploads4.wikiart.org/images/wassily-kandinsky/succession-1935.jpg!Large.jpg",
          height: 1450,
        },
      ],
    },
    {
      key: "leonardo-da-vinci",
      name: "Leonardo da Vinci",
      profileImage:
        "https://uploads0.wikiart.org/images/leonardo-da-vinci.jpg!Portrait.jpg",
      coverImage:
        "https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg",
      style: "High Renaissance",
      nationality: "Italian",
      mainFacts: [],
      firstParagraph: `<h4>One of the most important and influential figures of the Renaissance was the painter, sculptor, architect and engineer, Leonardo Da Vinci - a man that epitomized the Renaissance humanist ideal.</h4><p> Born in 1452 in the town of Vinci, Leonardo began his early artistic training in Florence, working at the workshop of the sculptor Andrea Verrocchio. There, he received a multifaceted training in painting, sculpture and the technical-mechanical arts. Leonardo left Verrocchio's workshop in 1476, and worked independently in Florence until 1481.</p>`,
      bio: `<h4>One of the most important and influential figures of the Renaissance was the painter, sculptor, architect and engineer, Leonardo Da Vinci - a man that epitomized the Renaissance humanist ideal.</h4><p> Born in 1452 in the town of Vinci, Leonardo began his early artistic training in Florence, working at the workshop of the sculptor Andrea Verrocchio. There, he received a multifaceted training in painting, sculpture and the technical-mechanical arts. Leonardo left Verrocchio's workshop in 1476, and worked independently in Florence until 1481.</p>

      <p>Feeling stifled and dissatisfied in Florence, Leonardo decided to seek new challenges, and in 1482, he moved to Milan, where he would spend the next 17 years. One of his early commissions was the altar painting The Virgin of the Rocks (1483-1486) for the Confraternity of the Immaculate Conception. However, the parties got into a dispute over payment, and Leonardo sold the painting to someone else. After ten years of litigation, the confraternity persuaded Leonardo to paint a second version, The Virgin of the Rocks (1495-1508). During this first Milanese period (1482-1499), Leonardo completed six paintings, including the masterpiece, The Last Supper (1495), at the monastery of Santa Maria delle Grazie in Milan. He also worked for the Sforza family (the ruling family in Milan) on a monumental sculptural project: a huge equestrian monument honoring the founder of the Sforza dynasty, Francesco Sforza. Leonardo devoted 12 years to the project, creating a clay model of the horse and preparing to cast the 5-meter high figure. However, this great undertaking was never realized: in 1499 the French army invaded Milan and the Sforza family fell from power sealing the fate of the monument (the clay model made by Leonardo was destroyed during the war).</p>
      
      <p>With the political shift in Milan, Leonardo travelled around Italy before resettling in Florence. During his second period in Florence (1500-1508), he painted his most famous work, the Mona Lisa (ca. 1503-1519). By 1508, Leonardo returned to Milan, working for the French rulers of the city. In this period, he painted very little and instead focused on his scientific activity, specifically his study of anatomy. In 1513, the French were expelled from Milan, and forced to move, Leonardo went to Rome, where he spent the next three years. While in Rome, he received an invitation from French King, Francis I to enter his service in France. At 65, Leonardo accepted and bore the title of First painter, architect and engineer to the King.</p>
      
      <p>In his final years in France, he did little painting and mainly worked on his scientific studies and his treatise on painting. Leonardo Da Vinci died in 1519 in Cloux in France. Leonardo, one of the most revered painters of his time, remains among the most important figures in art history. However, it is important to note that his influence goes far beyond - from the drawings, scientific diagrams, and technical studies in his notebooks it is known that his scientific writings and mechanical inventions were centuries ahead of their time.</p>`,
      selectedPaintings: [
        {
          title: "Study for Madonna and Child with St. Anne",
          artistName: "Leonardo da Vinci",
          year: "1510",
          width: 852,
          image:
            "https://uploads2.wikiart.org/images/leonardo-da-vinci/study-for-madonna-and-child-with-st-anne.jpg!Large.jpg",
          height: 789,
        },
        {
          title: "The Virgin of the Rocks",
          artistName: "Leonardo da Vinci",
          year: "1505",
          width: 2692,
          image:
            "https://uploads3.wikiart.org/00142/images/57726d85edc2cb3880b48ccd/leonardo-da-vinci-virgin-of-the-rocks-national-gallery-london.jpg!Large.jpg",
          height: 4150,
        },
        {
          title: "The Baptism of Christ",
          artistName: "Leonardo da Vinci",
          year: "1475",
          width: 600,
          image:
            "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/the-baptism-of-christ-c-1475.png!Large.png",
          height: 715,
        },
        {
          title: "Mona Lisa",
          artistName: "Leonardo da Vinci",
          year: "1519",
          width: 671,
          image:
            "https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "Head of a Young Woman with Tousled Hair (Leda)",
          artistName: "Leonardo da Vinci",
          year: "1508",
          width: 808,
          image:
            "https://uploads6.wikiart.org/images/leonardo-da-vinci/head-of-a-young-woman-with-tousled-hair-leda.jpg!Large.jpg",
          height: 952,
        },
        {
          title: "La Bella Principessa - Portrait of Bianca Sforza",
          artistName: "Leonardo da Vinci",
          year: "1498",
          width: 5000,
          image:
            "https://uploads4.wikiart.org/00302/images/leonardo-da-vinci/la-bella-principessa-portrait-of-bianca-sforza.jpg!Large.jpg",
          height: 6977,
        },
        {
          title: "The Last Supper",
          artistName: "Leonardo da Vinci",
          year: "1495",
          width: 5193,
          image:
            "https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg",
          height: 2926,
        },
        {
          title: "Heads of an old man and a youth",
          artistName: "Leonardo da Vinci",
          year: "1495",
          width: 704,
          image:
            "https://uploads2.wikiart.org/images/leonardo-da-vinci/heads-of-an-old-man-and-a-youth.jpg!Large.jpg",
          height: 939,
        },
        {
          title: "Leda and the Swan",
          artistName: "Leonardo da Vinci",
          year: "1506",
          width: 865,
          image:
            "https://uploads6.wikiart.org/images/leonardo-da-vinci/leda-and-the-swan.jpg!Large.jpg",
          height: 1000,
        },
        {
          title: "Allegory",
          artistName: "Leonardo da Vinci",
          year: "1516",
          width: 1150,
          image:
            "https://uploads8.wikiart.org/images/leonardo-da-vinci/allegory-with-wolf-and-eagle.jpg!Large.jpg",
          height: 663,
        },
      ],
    },
    {
      key: "ivan-aivazovsky",
      name: "Ivan Aivazovsky",
      profileImage:
        "https://uploads7.wikiart.org/00340/images/ivan-aivazovsky/440px-aivazovsky-self-portrait-1874.jpg!Portrait.jpg",
      coverImage:
        "https://uploads5.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-1851.jpg!Large.jpg",
      style: "Romanticism",
      nationality: "Russian, Armenian",
      mainFacts: [],
      firstParagraph: `<h4>Throughout his lifetime, Aivazovsky contributed over 6,000 paintings to the art world, ranging from his early landscapes of the Crimean countryside to the seascapes and coastal scenes for which he is most famous.</h4><p> Aivazovsky was especially effective at developing the play of light in his paintings, sometimes applying layers of color to create a transparent quality, a technique for which they are highly admired.</p>`,
      bio: `<h4>Throughout his lifetime, Aivazovsky contributed over 6,000 paintings to the art world, ranging from his early landscapes of the Crimean countryside to the seascapes and coastal scenes for which he is most famous.</h4><p> Aivazovsky was especially effective at developing the play of light in his paintings, sometimes applying layers of color to create a transparent quality, a technique for which they are highly admired.</p>

      <p>Although he produced many portraits and landscapes, over half of all of Aivazovsky's paintings are realistic depictions of coastal scenes and seascapes. He is most remembered for his beautifully melodramatic renditions of the seascapes of which he painted the most. Many of his later works depict the painful heartbreak of soldiers at battle or lost at sea, with a soft celestial body taunting of hope from behind the clouds. His artistic technique centers on his ability to render the realistic shimmer of the water against the light of the subject in the painting, be it the full moon, the sunrise, or battleships in flames. Many of his paintings also illustrate his adeptness at filling the sky with light, be it the diffuse light of a full moon through fog, or the orange glow of the sun gleaming through the clouds.</p>
      
      <p>In addition to being the most prolific of Russian Armenian painters, Aivazovsky founded an art school and gallery to engage and educate other artists of the day. He also and built a historical museum in his hometown on Feodosia, Crimea, in addition to beginning the first archaeological expeditions of the same region.</p>
      
      <p>Today, Aivazovsky's paintings have been auctioned off for millions of dollars and have been printed on postage stamps for Russia, Ukraine, and Armenia. Perhaps it is also to his lasting legacy that he is said to be one of the most forged of all Russian artists.</p>`,
      selectedPaintings: [
        {
          title: "The Ninth Wave",
          artistName: "Ivan Aivazovsky",
          year: "1850",
          width: 5090,
          image:
            "https://uploads8.wikiart.org/00129/images/ivan-aivazovsky/the-ninth-wave.jpg!Large.jpg",
          height: 3420,
        },
        {
          title: "Lunar night on the Black sea",
          artistName: "Ivan Aivazovsky",
          year: "1859",
          width: 1000,
          image:
            "https://uploads2.wikiart.org/images/ivan-aivazovsky/lunar-night-on-the-black-sea-1859.jpg!Large.jpg",
          height: 792,
        },
        {
          title: "View of Constantinople by evening light",
          artistName: "Ivan Aivazovsky",
          year: "1846",
          width: 1026,
          image:
            "https://uploads4.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-by-evening-light-1846.jpg!Large.jpg",
          height: 663,
        },
        {
          title: "Ships at anchor",
          artistName: "Ivan Aivazovsky",
          year: "1851",
          width: 1000,
          image:
            "https://uploads7.wikiart.org/images/ivan-aivazovsky/ships-at-anchor-1851.jpg!Large.jpg",
          height: 780,
        },
        {
          title: "View of Constantinople",
          artistName: "Ivan Aivazovsky",
          year: "1851",
          width: 1000,
          image:
            "https://uploads5.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-1851.jpg!Large.jpg",
          height: 631,
        },
        {
          title: "Fishermen on the coast of the sea",
          artistName: "Ivan Aivazovsky",
          year: "1852",
          width: 1100,
          image:
            "https://uploads7.wikiart.org/images/ivan-aivazovsky/fishermen-on-the-coast-of-the-sea-1852.jpg!Large.jpg",
          height: 712,
        },
        {
          title: "View of Constantinople and the Bosphorus",
          artistName: "Ivan Aivazovsky",
          year: "1856",
          width: 4000,
          image:
            "https://uploads2.wikiart.org/00342/images/ivan-aivazovsky/aivazovsky-view-of-constantinople-and-the-bosphorus.jpg!Large.jpg",
          height: 2509,
        },
        {
          title: "Sunset at Sea",
          artistName: "Ivan Aivazovsky",
          year: "1856",
          width: 1000,
          image:
            "https://uploads5.wikiart.org/images/ivan-aivazovsky/sunset-at-sea-1856.jpg!Large.jpg",
          height: 643,
        },
        {
          title: "Winter Caravan on Road",
          artistName: "Ivan Aivazovsky",
          year: "1857",
          width: 1204,
          image:
            "https://uploads7.wikiart.org/00279/images/ivan-aivazovsky/336666.jpeg!Large.jpeg",
          height: 800,
        },
      ],
    },
  ];
  res.send(artistsResponse);
});

router.get("/artists/:artist_name", async function (req, res, next) {
  const { artist_name } = req.params;

  // Call WikiArt API with axios (no need to json)
  try {
    // Make both axios requests simultaneously
    const [response1, response2] = await Promise.all([
      axios.get(`https://www.wikiart.org/en/${artist_name}?json=2`),
      axios.get(
        `https://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${artist_name}&json=2`
      ),
    ]);

    const artistDataFull = response1.data;
    if (response1.status !== 200) throw new Error(artistDataFull.message);

    const paintingsDataFull = response2.data;
    if (response2.status !== 200) throw new Error(paintingsDataFull.message);

    // Process the data and send the response

    //Clean artist bio data
    const {
      OriginalArtistName,
      artistName,
      image,
      birthDayAsString,
      deathDayAsString,
      biography,
      wikipediaUrl,
    } = artistDataFull;

    let artistDataCleaned = {
      OriginalArtistName,
      artistName,
      image,
      birthDayAsString,
      deathDayAsString,
      biography,
      wikipediaUrl,
    };

    artistDataCleaned = {
      ...artistDataCleaned,
      artistId: artistDataFull.contentId,
    };

    const artistAndPaintingsData = {
      artist: artistDataCleaned,
      paintings: paintingsDataFull,
    };

    // Send response
    res.send(artistAndPaintingsData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route for quiz "individual artist"

router.get("/artists/:artist_name/quiz", async function (req, res, next) {
  const { artist_name } = req.params;

  // call to DB table questions

  try {
    const results = await db(
      `SELECT * FROM questions WHERE artist_name_key = "${artist_name}";`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// Route for final quiz

// router.get("artists/final_quiz" does not work!

router.get("/final_quiz", async function (req, res, next) {
  // call to DB table questions
  try {
    const results = await db(
      `SELECT * FROM questions WHERE quiz_type = 'artists_final';`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = router;
