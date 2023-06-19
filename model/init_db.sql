DROP TABLE if exists questions;
DROP TABLE if exists artistsData;
DROP TABLE if exists paintingsData;

CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT,
    quiz_type VARCHAR(255) NOT NULL,
    artist_name_key VARCHAR(255),
    question_type VARCHAR(255) NOT NULL,
    question_text VARCHAR(255) NOT NULL,
    question_image_url TEXT,
    option0_text TEXT,
    option0_image_url TEXT,
    option1_text TEXT,
    option1_image_url TEXT,
    option2_text TEXT,
    option2_image_url TEXT,
    option3_text TEXT,
    option3_image_url TEXT,
    PRIMARY KEY (id)
);

INSERT INTO questions (quiz_type, artist_name_key, question_type, question_text, question_image_url, option0_text, option1_text, option2_text, option3_text, option0_image_url, option1_image_url, option2_image_url, option3_image_url)
VALUES

    ('individual_artist', 'ivan-aivazovsky', 'questionImage_answersText', 'What is the name of this famous painting by Ivan Aivazovsky?', 'https://uploads1.wikiart.org/images/ivan-aivazovsky/shipwreck-1854.jpg', 'Shipwreck', 'Tempest Shipwreck of the foreign ship', 'Thunderstorm', 'Storm at Sea', NULL, NULL, NULL, NULL),
    ('individual_artist', 'ivan-aivazovsky', 'questionText_answersImage', 'Ivan Aivazovsky is most remembered for his beautifully melodramatic renditions of the seascapes. Which one of these paintings is his work?', NULL, NULL, NULL, NULL, NULL,'https://uploads8.wikiart.org/00129/images/ivan-aivazovsky/the-ninth-wave.jpg!Large.jpg', 'https://uploads4.wikiart.org/00290/images/william-turner/joseph-mallord-william-turner-fishermen-at-sea-google-art-project-1.jpg', 'https://uploads4.wikiart.org/00142/images/vincent-van-gogh/the-starry-night.jpg', 'https://uploads8.wikiart.org/images/edvard-munch/moon-light-1895.jpg!Large.jpg'),
    ('individual_artist', 'ivan-aivazovsky', 'questionText_answersText', 'Today, the paintings of Aivazovsky have been auctioned off for millions of dollars and have been printed on postage stamps for Russia, Ukraine, and Armenia. Throughout his lifetime, with how many paintings did Aivazovsky contribute to the art world?', NULL, 'Oven 6,000', 'Approximately 2,450', 'Less than 1,000', 'Only 50', NULL, NULL, NULL, NULL),

    ('individual_artist', 'emma-amos', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads8.wikiart.org/00335/images/emma-amos/does-black-rub-off-question-mark-1992.png!Large.png', 'Does Black Rub Off?', 'Hands', 'Gloves', 'Fingers', NULL, NULL, NULL, NULL),
    ('individual_artist', 'emma-amos', 'questionText_answersImage', 'Which one of the following paintings was created by Amos in 2006?', NULL, NULL, NULL, NULL, NULL, 'https://uploads2.wikiart.org/00335/images/emma-amos/identity-2006.png!Large.png', 'https://media.tate.org.uk/art/images/work/T/T12/T12450_10.jpg', 'https://media.artsper.com/artwork/1923234_1_m.jpg', 'https://www.menziesartbrands.com/sites/default/files/field/image/Jeffrey%20Smart-w_0.jpg'),
    ('individual_artist', 'emma-amos', 'questionText_answersText', 'For which famous magazine did Amos use to work creating illustrations?', NULL, 'Sesame Street Magazine', 'Vogue', 'Teenage Mutant Ninja Turtles', 'GQ', NULL, NULL, NULL, NULL),

    ('individual_artist', 'mary-cassatt', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads6.wikiart.org/images/mary-cassatt/the-flirtation-a-balcony-in-seville-1872.jpg!Large.jpg', 'The Flirtation A Balcony in Seville', 'Los chismosos', 'The man with the hat', 'Summer days', NULL, NULL, NULL, NULL),
    ('individual_artist', 'mary-cassatt', 'questionText_answersImage', 'Which of the following paintings is At the Theater by Cassatt?', NULL, NULL, NULL, NULL, NULL, 'https://uploads3.wikiart.org/images/mary-cassatt/at-the-theater-1879.jpg!Large.jpg', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fcarpelibrum%2Fart-at-the-theater%2F&psig=AOvVaw128kvd8BJu640bl2Am8unD&ust=1686681714763000&source=images&cd=vfe&ved=2ahUKEwioj_eUsb7_AhVUQ8AKHTCpBWYQjRx6BAgAEAw', 'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/08/19/Style/Images/sundayimage001.jpg?t=20170517', 'https://www.artstor.org/wp-content/uploads/2019/12/CARNEGIE_4020004-490x600.jpg'),
    ('individual_artist', 'mary-cassatt', 'questionText_answersText', 'Which art movement best describes the art movement of Cassatt?', NULL, 'Impressionism', 'Baroque', 'Art Nouveau', 'Surrealism', NULL, NULL, NULL, NULL),

    ('individual_artist', 'salvador-dali', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg', 'The Persistence of Memory', 'The Sense of Speed', 'The Dream Approaches', 'Surrealist Essay', NULL, NULL, NULL, NULL),
    ('individual_artist', 'salvador-dali', 'questionText_answersImage', 'Which of these paintings is Swans Reflecting Elephants painted in 1937?',NULL, NULL, NULL, NULL, NULL, 'https://uploads6.wikiart.org/images/salvador-dali/cygnes-refletant-des-elephants.jpg!Large.jpg', 'https://uploads4.wikiart.org/images/salvador-dali/the-elephants-large.jpg!Large.jpg', 'https://uploads8.wikiart.org/images/salvador-dali/space-elephant.jpg!Large.jpg', 'https://uploads0.wikiart.org/images/salvador-dali/warrior-mounted-on-an-elephant-overpowering-a-cello.jpg'),
    ('individual_artist', 'salvador-dali', 'questionText_answersText', 'What is the birth place of Salvador Dali?', NULL, 'Figueras, Spain', 'Lyon, France', 'Malaga, Spain', 'Verona, Italy', NULL, NULL, NULL, NULL),

    ('individual_artist', 'leonardo-da-vinci', 'questionImage_answersText', 'What is the name of the painting that Leonardo Da Vinci was persuaded to paint not once, but twice for the Confraternity of the Immaculate Conception in Milan?', 'https://uploads2.wikiart.org/00339/images/leonardo-da-vinci/virgin-of-the-rocks-between-1483-and-1486.jpg', 'The Virgin of The Rocks', 'The Madonna of the Carnation', 'The Virgin and Child with Saint Anne and Saint John the Baptist', 'Leda', NULL, NULL, NULL, NULL),
    ('individual_artist', 'leonardo-da-vinci', 'questionText_answersImage', 'Which of the below works is NOT a creation of Leonardo Da Vinci?', NULL, NULL, NULL, NULL, NULL, 'https://uploads7.wikiart.org/images/michelangelo/the-last-judgement-1541.jpg', 'https://uploads1.wikiart.org/images/leonardo-da-vinci/bird-s-eye-view-of-a-landscape.jpg', 'https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg', 'https://uploads1.wikiart.org/00226/images/leonardo-da-vinci/1503990074029518-568314.jpg'),
    ('individual_artist', 'leonardo-da-vinci', 'questionText_answersText', 'The interests of Leonardo da Vinci were largely focused on scientific studies. Which one of his greatest interests is evidenced in his work The Vitruvian Man?', NULL, 'Anatomy', 'Genetics', 'Zoology', 'Diagnosis', NULL, NULL, NULL, NULL),

    ('individual_artist', 'frida-kahlo', 'questionImage_answersText', 'As one of the last and most famous works of Frida Kahlo, this painting captures her fundamental values. What is it called?', 'https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg', 'Marxism will give health to the sick', 'Final recovery from her illness', 'Divine revelation', 'A tribute to nature forces', NULL, NULL, NULL, NULL),
    ('individual_artist', 'frida-kahlo', 'questionText_answersImage', 'What painting was a tribute to the father of Frida and was painted after his death?', NULL, NULL, NULL, NULL, NULL, 'https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/me-and-my-parrots-1941.jpg!Large.jpg', 'https://uploads2.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/thinking-about-death-1943.jpg!Large.jpg', 'https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/my-grandparents-my-parents-and-me-1936.jpg!Large.jpg', 'https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Large.jpg'),
    ('individual_artist', 'frida-kahlo', 'questionText_answersText', 'What was one of the most important narratives in the work of Frida, which she was actively known for?', NULL, 'Political activism and Mexican indigenous values', 'Anatomy of the human body and philosophy', 'Romantic relationship with Diego Rivera', 'Nature symbols and animals', NULL, NULL, NULL, NULL),

    ('individual_artist', 'wassily-kandinsky', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads7.wikiart.org/images/wassily-kandinsky/blue-mountain-1908.jpg!Large.jpg', 'Blue mountain', 'A mountain', 'Horses', 'Park of St. Cloud with horseman', NULL, NULL, NULL, NULL),
    ('individual_artist', 'wassily-kandinsky', 'questionText_answersImage', 'Which of this paintings is work of Wassily Kandinsky?', NULL, NULL, NULL, NULL, NULL, 'https://uploads0.wikiart.org/images/wassily-kandinsky/several-circles-1926.jpg!Large.jpg', 'https://uploads5.wikiart.org/images/hilma-af-klint/atom-series-no-8-atom-on-the-ether-plane-is-in-constant-change-between-rest-and-activity-at-the-1917.jpg', 'https://uploads4.wikiart.org/images/tamara-de-lempicka/the-model-1925.jpg!Large.jpg', 'https://uploads5.wikiart.org/images/mary-cassatt/mary-ellison-embroidering-1877.jpg!Large.jpg'),
    ('individual_artist', 'wassily-kandinsky', 'questionText_answersText', 'Where is Wassily Kandinsky from?', NULL, 'Russia', 'Ukraine', 'Poland', 'Bulgaria', NULL, NULL, NULL, NULL),

    ('individual_artist', 'hilma-af-klint', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads6.wikiart.org/images/hilma-af-klint/the-ten-largest-1907.jpg', 'The Ten Largest', 'Circles', 'White circles', 'Blue and yellow circles', NULL, NULL, NULL, NULL),
    ('individual_artist', 'hilma-af-klint', 'questionText_answersImage', 'Which one of this paintings is called What A Human Being Is by af Klimt?', NULL, NULL, NULL, NULL, NULL, 'https://uploads3.wikiart.org/images/hilma-af-klint/what-a-human-being-is-1910.jpg', 'https://studyfinds.org/wp-content/uploads/2020/12/AdobeStock_267410313-604x385.jpeg', 'https://i.etsystatic.com/36644323/r/il/4db5c9/4296968593/il_794xN.4296968593_5iyf.jpg', 'https://i.etsystatic.com/33706763/r/il/530aee/3828553553/il_794xN.3828553553_fu9o.jpg'),
    ('individual_artist', 'hilma-af-klint', 'questionText_answersText', 'What kind of work characterizes af Klint and The Five?', NULL, 'Inventive geometric visual language capable of conceptualising invisible forces both of the inner and outer worlds', 'A chain of fast food restaurants', 'A talk show on Fox News Channel', 'A mystery thriller miniseries', NULL, NULL, NULL, NULL),

    ('individual_artist', 'pablo-picasso', 'questionImage_answersText', 'What is the name of this painting?', 'https://uploads0.wikiart.org/00139/images/pablo-picasso/guernica-by-pablo-picasso.jpg', 'Guernica', 'Dream and Lie of Franco', 'Minotaur is wounded', 'Candle, palette, head of red bull', NULL, NULL, NULL, NULL),
    ('individual_artist', 'pablo-picasso', 'questionText_answersImage', 'Which of this paintings is The Weeping Woman painted in 1937?', NULL, NULL, NULL, NULL, NULL, 'https://uploads4.wikiart.org/images/pablo-picasso/crying-woman-1937-1.jpg!Large.jpg', 'https://uploads3.wikiart.org/images/pablo-picasso/leaning-woman-1937.jpg!Large.jpg', 'https://uploads2.wikiart.org/images/pablo-picasso/portrait-of-dora-maar-1937.jpg!Large.jpg', 'https://uploads4.wikiart.org/images/pablo-picasso/portrait-of-marie-th%C3%A9r%C3%A8se-walter-1937.jpg!Large.jpg'),
    ('individual_artist', 'pablo-picasso', 'questionText_answersText', 'Which of the following is the full original name of Pablo Picasso?', NULL, 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso', 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de la Santísima Trinidad de los Remedios Cipriano Ruiz y Picasso', 'Pablo Diego María Francisco de Paula Juan Nepomuceno José de los Remedios Cipriano de la Santísima Trinidad y Picasso', 'Pablo Diego María Francisco de Paula Juan Nepomuceno José de la Santísima Trinidad de los Remedios Cipriano Ruiz y Picasso', NULL, NULL, NULL, NULL),

    ('individual_artist', 'tamara-de-lempicka', 'questionImage_answersText', 'Looking at this famous painting of Tamara de Lempicka, what do you think are the main topics in her work?', 'https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg', 'Liberation of women with aggressive confidence and luxury elegance', 'Aristocratic lifestyle and luxury elegance', 'Fashion style in the modernism of the 1920s', 'Feminine beauty and the power of nature', NULL, NULL, NULL, NULL),
    ('individual_artist', 'tamara-de-lempicka', 'questionText_answersImage', 'Which of these paintings represents purely the art deco style that Tamara de Lempicka was known for?', NULL, NULL, NULL, NULL, NULL, 'https://uploads2.wikiart.org/images/tamara-de-lempicka/girl-with-gloves-1929.jpg!Large.jpg', 'https://uploads0.wikiart.org/images/tamara-de-lempicka/redheaded-woman-reading-1922.jpg!Large.jpg', 'https://uploads8.wikiart.org/images/tamara-de-lempicka/double-47.jpg!Large.jpg', 'https://uploads2.wikiart.org/images/tamara-de-lempicka/portrait-of-marquis-sommi-1925.jpg!Large.jpg'),
    ('individual_artist', 'tamara-de-lempicka', 'questionText_answersText', 'What was the predominant technique and pictorial style that Tamara de Lempicka was acclaimed for?', NULL, 'Art Deco style with blended cubism and neoclassicism', 'Cubism', 'Neorealism', 'Surrealism and Expressionism', NULL, NULL, NULL, NULL),


    ("artists_final", NULL, "questionImage_answersText", "Who is the creator of this artwork?", "https://uploads2.wikiart.org/images/wassily-kandinsky/moscow-i-1916.jpg!Large.jpg", "Wassily Kandinsky", "Ivan Aivazovsky", "Salvador Dali","Pablo Picasso", NULL, NULL, NULL, NULL),

  (
 "artists_final",
  NULL,
  "questionText_answersImage",
  "Which of the following artworks was not created by Leonardo Da Vinci?",
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  "https://uploads2.wikiart.org/images/salvador-dali/the-discovery-of-america-by-christopher-columbus-1959.jpg!Large.jpg",
  "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/the-baptism-of-christ-c-1475.png!Large.png",
  "https://uploads3.wikiart.org/00142/images/57726d85edc2cb3880b48ccd/leonardo-da-vinci-virgin-of-the-rocks-national-gallery-london.jpg!Large.jpg",
  "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/madonna-and-the-child-c-1490.jpg!Large.jpg"
  ),

  ("artists_final", NULL, "questionText_answersText", "Which art movement did both Salvador Dali and Pablo Picasso significantly influence with their contributions?", NULL, "Surrealism", "Cubism", "Post-Impressionism", "Expressionism", NULL, NULL, NULL, NULL),

  (
 "artists_final",
  NULL,
  "questionImage_answersText",
  "What prominent artist from the 19th century is renowned for their captivating seascapes and is particularly known for their work titled The Ninth Wave?",
  "https://uploads8.wikiart.org/00129/images/ivan-aivazovsky/the-ninth-wave.jpg!Large.jpg",
  "Ivan Aivazovsky",
  "Wassily Kandinsky",
  "Tamara de Lempicka",
  "Hilma af Klint",
  NULL,
  NULL,
  NULL,
  NULL
  ),

  (
  "artists_final",
  NULL,
  "questionImage_answersText",
  "Frida has 55 self-portraits. She approached her early portraits (mostly of herself, family and friends) in 1925, during her recovery from...",
  "https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Large.jpg",
  "a near-fatal bus accident",
  "a flu",
  "an hangover",
  "a break-up with Diego Rivera",
  NULL,
  NULL,
  NULL,
  NULL
),

(
  "artists_final",
  NULL,
  "questionText_answersImage",
  "In 1927, Lempicka received first prize at the Exposition Internationale des Beaux-Arts for which painting?",
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  "https://uploads6.wikiart.org/images/tamara-de-lempicka/kizette-on-the-balcony-1927.jpg!Large.jpg",
  "https://artenet.es/media/reviews/photos/thumbnail/550x550s/ce/61/66/9317-balcon-con-nina-87-1471885553.jpg",
  "https://d2r83x5xt28klo.cloudfront.net/5705_e3NerwWViLG8bRRc_b.jpg",
  "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/on-the-balcony-george-schrimpf.jpg"
),

(
  "artists_final",
  NULL,
  "questionText_answersText",
  "Amos moved to New York City after feeling stunted by the slow move of the Atlanta art scene. After the level of racism, sexism, and ageism that she encountered upon moving to New York, she decided to begin are career as a...",
  NULL,
  "textile/weaver designer",
  "web developer",
  "television show host",
  "chef",
  NULL,
  NULL,
  NULL,
  NULL
),

(
  "artists_final",
  NULL,
  "questionText_answersText",
  "What themes have in common Mary Cassatt and Hilma af Klint?",
  NULL,
  "Symbolism and Spirituality",
  "Industry, Invention, and Progress",
  "Immigration and Migration",
  "Identity and the Environment",
  NULL,
  NULL,
  NULL,
  NULL
);

create table artistsData
(
    id             int auto_increment
        primary key,
    artistName     varchar(255)   null,
    profileImage   varchar(400)   null,
    coverImage     varchar(255)   null,
    style          varchar(255)   null,
    nationality    varchar(255)   null,
    mainFacts      varchar(255)   null,
    firstParagraph varchar(1100)  null,
    bio            varchar(13000) null
);

INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (3, 'Emma Amos', 'https://uploads1.wikiart.org/00335/images//photo-becket-logan.jpg!Portrait.jpg', 'https://uploads7.wikiart.org/00335/images/emma-amos/seated-figure-and-nude-1966.png', 'Contemporary', 'American', null, '<h4>Painter, printmaker, and weaver Emma Amos was born in 1937 and grew up in Atlanta, Georgia.</h4><p> She began painting and drawing when she was six. At age sixteen, after attending segregated public schools in Atlanta, she entered the five-year program at Antioch University in Yellow Springs, Ohio.</p>', '<h4>Painter, printmaker, and weaver Emma Amos was born in 1937 and grew up in Atlanta, Georgia.</h4><p> She began painting and drawing when she was six. At age sixteen, after attending segregated public schools in Atlanta, she entered the five-year program at Antioch University in Yellow Springs, Ohio.</p>

      <p>Amoss first solo exhibition was in an Atlanta galery in 1960. In that same year she moved to New York, where she taught as an assistant at the Dalton School and continued her work as an artist by making prints. In 1961 she was hired by Dorothy Liebes as a designer/weaver, creating rugs for a major textile manufacturer. In 1964 she entered a masters program in Art Education at New York University. During this time Hale Woodruff invited her to become a member of Spiral, a group of black artists that included Romare Bearden, Norman Lewis, and Charles Alston. She was the groups youngest and only female member.</p> 
      
      <p>She married Bobby Levine in 1965 and received her MA in 1966. She had a son, Nicholas, in 1967, and her daughter, India, followed three years later. While the children were small, Amos focused on sewing, weaving, quilting, and doing illustrations for Sesame Street magazine. In 1974 she began teaching at the Newark School of Fine and Industrial Arts, and in 1977 she developed and cohosted (with Beth Gutcheon) Show of Hands, a crafts show for WGBH Educational TV in Boston, which ran for two years.</p> 
      
      <p>In 1980, Amos was hired as an assistant professor at the Mason Gross School of Art, Rutgers University. She continued teaching there until she retired in June 2008.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (1, 'Frida Kahlo', 'https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Portrait.jpg', 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 'Naïve Art (Primitivism), Surrealism, Indigenism, Magic Realism', 'Mexican', null, '<h4>Frida Kahlo typically uses the visual symbolism of physical pain in a long-standing attempt to better understand emotional suffering.</h4><p>Before Kahlos efforts, the language of loss, death, and selfhood, had been relatively well investigated by some male artists (including Albrecht Dürer, Francisco Goya, and Edvard Munch), but had not yet been significantly dissected by a woman. Indeed not only did Kahlo enter into an existing language, but she also expanded it and made it her own. By literally exposing interior organs, and depicting her own body in a bleeding and broken state, Kahlo opened up our insides to help explain human behaviors on the outside. She gathered together motifs that would repeat throughout her career, including ribbons, hair, and personal animals, and in turn, created a new and articulate means to discuss the most complex aspects of female identity.</p>', '<h4>Frida Kahlo typically uses the visual symbolism of physical pain in a long-standing attempt to better understand emotional suffering.</h4><p>Before Kahlos efforts, the language of loss, death, and selfhood, had been relatively well investigated by some male artists (including Albrecht Dürer, Francisco Goya, and Edvard Munch), but had not yet been significantly dissected by a woman. Indeed not only did Kahlo enter into an existing language, but she also expanded it and made it her own. By literally exposing interior organs, and depicting her own body in a bleeding and broken state, Kahlo opened up our insides to help explain human behaviors on the outside. She gathered together motifs that would repeat throughout her career, including ribbons, hair, and personal animals, and in turn, created a new and articulate means to discuss the most complex aspects of female identity.</p>

      <p>Magdalena Carmen Frieda Kahlo Calderon was born at La Casa Azul (The Blue House) in Coyoacan, a town on the outskirts of Mexico City in 1907. Her father, Wilhelm Kahlo, was German and had moved to Mexico at a young age where he remained for the rest of his life, eventually taking over the photography business of Kahlos mothers family. Kahlos mother, Matilde Calderon y Gonzalez, was of mixed Spanish and Indian ancestry and raised Frida and her three sisters in a strict and religious household (Frida also had two half-sisters from her fathers first marriage who were raised in a convent). La Casa Azul was not only Kahlos childhood home but also the place that she returned to live and work from 1939 until her death. It later opened as the Frida Kahlo Museum.</p>
      
     <p>Aside from her mothers rigidity, religious fanaticism, and a tendency toward outbursts, several other events in Kahlos childhood affected her deeply. At age six, Kahlo contracted polio; a long recovery isolated her from other children and permanently damaged one of her legs, causing her to walk with a limp after recovery. Wilhelm, with whom Kahlo was very close, and particularly so after the experience of being invalid, enrolled his daughter at the German College in Mexico City and introduced Kahlo to the writings of European philosophers such as Johann Wolfgang von Goethe, Friedrich Schiller, and Arthur Schopenhauer. All of Kahlos sisters instead attended a convent school so it seems that there was a thirst for expansive learning noted in Frida that resulted in her father making different decisions especially for her. Kahlo was grateful for this and despite a strained relationship with her mother, always credited her father with great tenderness and insight. Still, she was interested in both strands of her roots, and her mixed European and Mexican heritage provided life-long fascination in her approach towards both life and art.
      Kahlo had a horrible experience at the German School where she was sexually abused and thus forced to leave. Luckily at the time, the Mexican Revolution and the Minister of Education had changed the education policy, and from 1922 girls were admitted to the National Preparatory School. Kahlo was one of the first 35 girls admitted and she began to study medicine, botany, and the social sciences. She excelled academically, became very interested in Mexican culture, and also became active politically.</p>
      
      <p>When Kahlo was 15, Diego Rivera (already a renowned artist) was painting the Creation mural (1922) in the amphitheater of her Preparatory School. Upon seeing him work, Kahlo experienced a moment of infatuation and fascination that she would go on to fully explore later in life. Meanwhile, she enjoyed helping her father in his photography studio and received drawing instruction from her fathers friend, Fernando Fernandez - for whom she was an apprentice engraver. At this time Kahlo also befriended a dissident group of students known as the Cachuchas, who confirmed the young artists rebellious spirit and further encouraged her interest in literature and politics. In 1923 Kahlo fell in love with a fellow member of the group, Alejandro Gomez Arias, and the two remained romantically involved until 1928. Sadly, in 1925 together with Alejandro (who survived unharmed) on their way home from school, Kahlo got into a near-fatal bus accident. She suffered multiple fractures throughout her body, including a crushed pelvis, and a metal rod impaled her womb. She spent one month in the hospital immobile and bound in a plaster corset, and following this period, many more months bedridden at home. During her long recovery, she began to experiment in small-scale autobiographical portraiture, henceforth abandoning her medical pursuits due to practical circumstances and turning her focus to art.</p>
      
      <p>During the months of convalescence at home, Kahlos parents made her a special easel, gave her a set of paints, and placed a mirror above her head so that she could see her reflection and make self-portraits. Kahlo spent hours confronting existential questions raised by her trauma including a feeling of dissociation from her identity, a growing interiority, and general closeness to death. She drew upon the acute pictorial realism known from her fathers photographic portraits (which she greatly admired) and approached her early portraits (mostly of herself, her sisters, and her school friends) with the same psychological intensity. At the time, Kahlo seriously considered becoming a medical illustrator during this period as she saw this as a way to marry her interests in science and art.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (5, 'Hilma Af Klint', 'https://uploads4.wikiart.org/temp/c5de8e4a-1cb2-4e2f-b31a-72406334ad13.jpg', 'https://uploads7.wikiart.org/00140/images/hilma-af-klint/hilma-af-klint-svanen.jpg!Large.jpg', 'Naïve Art (Primitivism), Abstract Art, Modernism', 'Swedish', null, '<h4>Hilma af Klint was a Swedish artist and mystic whose paintings were amongst the first abstract art.</h4> <p>She belonged to a group called The Five and the paintings or diagrams were a visual representation of complex philosophical ideas.</p>', '<h4>Hilma af Klint was a Swedish artist and mystic whose paintings were amongst the first abstract art.</h4> <p>She belonged to a group called The Five and the paintings or diagrams were a visual representation of complex philosophical ideas.</p>

      <p>The fourth child of Captain Victor af Klint, a Swedish naval commander, and Mathilda af Klint (née Sonntag), Hilma af Klint spent summers with her family at their farm Hammora on the island of Adelsö in Lake Mälaren. In these idylic surroundings Hilma came into contact with nature at an early stage in her life and this deep association with natural forms was to be an inspiration in her work. From her father she adopted an interest in mathematics.</p>
      
      <p>In 1880 her younger sister Hermina died and it was at this time that the spiritual dimension of her life began to develop.</p>
      
      <p>She showed an early ability in visual art and after the family had moved to Stockholm she studied at the Academy of Fine Arts for five years during which time she learned portraiture and landscape painting . Here she met Anna Cassel, the first of the four women with whom she later worked in The Five (de fem), a group of artists who shared her ideas. Her more conventional painting became the source of her financial income while the lifes work remained a quite separate practice.</p>
      
      <p>The project on which The Five were engaged involved, in 1892, recording in a book a completely new system of mystical thought in the form of messages from higher spirits. One, Gregor, spoke thus: all the knowledge that is not of the senses, not of the intellect, not of the heart but is the property that exclusively belongs to the deepest aspect of your being...the knowledge of your spirit.</p>
      
      <p>It is interesting to note that af Klints work ran parallel to the development of abstract art by other artists such as Mondrian, Malevich and Kandinsky who were, like af Klint, inspired by the Theosophical Movement founded by Madame Blavatsky. Af Klints work can also be seen in the wider context of the modernist search for new forms in artistic, spiritual, political and scientific systems in the beginnings of the 20th century.</p>
      
      <p>Through her work with the group The Five af Klint created experimental automatic drawing as early as 1896, leading her towards an inventive geometric visual language capable of conceptualising invisible forces both of the inner and outer worlds. Quite apart from their diagrammatic purpose the paintings have a freshness and a modern aesthetic of tentative line and hastily captured image: a segmented circle, a helix bisected and divided into a spectrum of lightly painted colours. She continued prolifically to add to the body of work amounting to over 1000 pieces until 1941. She requested that it should not be shown until 20 years after the end of her life.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (10, 'Ivan Aivazovsky', 'https://uploads7.wikiart.org/00340/images/ivan-aivazovsky/440px-aivazovsky-self-portrait-1874.jpg!Portrait.jpg', 'https://uploads5.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-1851.jpg!Large.jpg', 'Romanticism', 'Russian, Armenian', null, '<h4>Throughout his lifetime, Aivazovsky contributed over 6,000 paintings to the art world, ranging from his early landscapes of the Crimean countryside to the seascapes and coastal scenes for which he is most famous.</h4><p> Aivazovsky was especially effective at developing the play of light in his paintings, sometimes applying layers of color to create a transparent quality, a technique for which they are highly admired.</p>', '<h4>Throughout his lifetime, Aivazovsky contributed over 6,000 paintings to the art world, ranging from his early landscapes of the Crimean countryside to the seascapes and coastal scenes for which he is most famous.</h4><p> Aivazovsky was especially effective at developing the play of light in his paintings, sometimes applying layers of color to create a transparent quality, a technique for which they are highly admired.</p>

      <p>Although he produced many portraits and landscapes, over half of all of Aivazovskys paintings are realistic depictions of coastal scenes and seascapes. He is most remembered for his beautifully melodramatic renditions of the seascapes of which he painted the most. Many of his later works depict the painful heartbreak of soldiers at battle or lost at sea, with a soft celestial body taunting of hope from behind the clouds. His artistic technique centers on his ability to render the realistic shimmer of the water against the light of the subject in the painting, be it the full moon, the sunrise, or battleships in flames. Many of his paintings also illustrate his adeptness at filling the sky with light, be it the diffuse light of a full moon through fog, or the orange glow of the sun gleaming through the clouds.</p>
      
      <p>In addition to being the most prolific of Russian Armenian painters, Aivazovsky founded an art school and gallery to engage and educate other artists of the day. He also and built a historical museum in his hometown on Feodosia, Crimea, in addition to beginning the first archaeological expeditions of the same region.</p>
      
      <p>Today, Aivazovskys paintings have been auctioned off for millions of dollars and have been printed on postage stamps for Russia, Ukraine, and Armenia. Perhaps it is also to his lasting legacy that he is said to be one of the most forged of all Russian artists.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (9, 'Leonardo da Vinci', 'https://uploads0.wikiart.org/images/leonardo-da-vinci.jpg!Portrait.jpg', 'https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg', 'High Renaissance', 'Italian', null, '<h4>One of the most important and influential figures of the Renaissance was the painter, sculptor, architect and engineer, Leonardo Da Vinci - a man that epitomized the Renaissance humanist ideal.</h4><p> Born in 1452 in the town of Vinci, Leonardo began his early artistic training in Florence, working at the workshop of the sculptor Andrea Verrocchio. There, he received a multifaceted training in painting, sculpture and the technical-mechanical arts. Leonardo left Verrocchios workshop in 1476, and worked independently in Florence until 1481.</p>', '<h4>One of the most important and influential figures of the Renaissance was the painter, sculptor, architect and engineer, Leonardo Da Vinci - a man that epitomized the Renaissance humanist ideal.</h4><p> Born in 1452 in the town of Vinci, Leonardo began his early artistic training in Florence, working at the workshop of the sculptor Andrea Verrocchio. There, he received a multifaceted training in painting, sculpture and the technical-mechanical arts. Leonardo left Verrocchios workshop in 1476, and worked independently in Florence until 1481.</p>

      <p>Feeling stifled and dissatisfied in Florence, Leonardo decided to seek new challenges, and in 1482, he moved to Milan, where he would spend the next 17 years. One of his early commissions was the altar painting The Virgin of the Rocks (1483-1486) for the Confraternity of the Immaculate Conception. However, the parties got into a dispute over payment, and Leonardo sold the painting to someone else. After ten years of litigation, the confraternity persuaded Leonardo to paint a second version, The Virgin of the Rocks (1495-1508). During this first Milanese period (1482-1499), Leonardo completed six paintings, including the masterpiece, The Last Supper (1495), at the monastery of Santa Maria delle Grazie in Milan. He also worked for the Sforza family (the ruling family in Milan) on a monumental sculptural project: a huge equestrian monument honoring the founder of the Sforza dynasty, Francesco Sforza. Leonardo devoted 12 years to the project, creating a clay model of the horse and preparing to cast the 5-meter high figure. However, this great undertaking was never realized: in 1499 the French army invaded Milan and the Sforza family fell from power sealing the fate of the monument (the clay model made by Leonardo was destroyed during the war).</p>
      
      <p>With the political shift in Milan, Leonardo travelled around Italy before resettling in Florence. During his second period in Florence (1500-1508), he painted his most famous work, the Mona Lisa (ca. 1503-1519). By 1508, Leonardo returned to Milan, working for the French rulers of the city. In this period, he painted very little and instead focused on his scientific activity, specifically his study of anatomy. In 1513, the French were expelled from Milan, and forced to move, Leonardo went to Rome, where he spent the next three years. While in Rome, he received an invitation from French King, Francis I to enter his service in France. At 65, Leonardo accepted and bore the title of First painter, architect and engineer to the King.</p>
      
      <p>In his final years in France, he did little painting and mainly worked on his scientific studies and his treatise on painting. Leonardo Da Vinci died in 1519 in Cloux in France. Leonardo, one of the most revered painters of his time, remains among the most important figures in art history. However, it is important to note that his influence goes far beyond - from the drawings, scientific diagrams, and technical studies in his notebooks it is known that his scientific writings and mechanical inventions were centuries ahead of their time.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (4, 'Mary Cassatt', 'https://uploads4.wikiart.org/images/mary-cassatt.jpg!Portrait.jpg', 'https://uploads3.wikiart.org/images/mary-cassatt/young-woman-sewing-in-the-garden-1886.jpg!Large.jpg', 'Impressionism', 'American', null, '<h4>An American painter and printmaker, Mary Cassatt was an impressionist painter, who depicted the lives of women, especially the special bond between mother and child.</h4><p>She traveled extensively as a child, and was probably exposed to the works of the great masters at the Worlds fair in Paris in 1855. Other artists, such as Degas and Pissarro, would later become her mentors and fellow painters. She began studying art seriously at the age of 15, at a time when only around twenty percent of all arts students were female. Unlike many of the other female students, she was determined to make art her career, rather than just a social skill. She was disappointed at her art education in the United States, and moved to Paris to study art under private tutors in Paris. Her mother and family friends traveled with her to France, acting as chaperones.</p>', '<h4>An American painter and printmaker, Mary Cassatt was an impressionist painter, who depicted the lives of women, especially the special bond between mother and child.</h4> <p>She traveled extensively as a child, and was probably exposed to the works of the great masters at the Worlds fair in Paris in 1855. Other artists, such as Degas and Pissarro, would later become her mentors and fellow painters. She began studying art seriously at the age of 15, at a time when only around twenty percent of all arts students were female. Unlike many of the other female students, she was determined to make art her career, rather than just a social skill. She was disappointed at her art education in the United States, and moved to Paris to study art under private tutors in Paris. Her mother and family friends traveled with her to France, acting as chaperones.</p>

      <p>She continued her art education in France, and her first work was accepted into the Paris Salon in 1868. At the outbreak of the Franco-Prussian War in 1870, however, she returned to the United States to live with her family. Her father, who did not approve of her chosen vocation as an artist, paid for her living expenses, but refused to pay for her art supplies. During her stay in the United States, Cassatt was miserable. She exhibited some paintings but found no buyers, and upset at the lack of art to study, she quit painting and almost gave up the craft. After a trip to Chicago, her work was noticed by the Archbishop of Pittsburgh, who commissioned from her a copy of two of Correggios paintings in Italy. He offered to pay for her travel expenses and she immediately left the United States.</p>
      
      <p>In Europe, Cassatts paintings were better received, increasing her prospects, and exhibited in the Salon of 1872, selling a painting. She exhibited every year at the Paris Salon until 1877, when all her works were rejected. Distraught at her rejection, she turned to the Impressionists, who welcomed her with welcome arms.</p>
      
      <p>Deciding early in her career that marriage was not an option, Cassatt never married, and spent much of her time with her sister Lydia, until her death in 1882, which left Mary unable to work for a short time. As her career progressed, her critical reputation grew, and she was often touted, along with Degas, as the one of the best exhibitors at the Impressionist Salon. She was awarded the French Legion of Honor in 1906.</p>
      
      <p>In her later life, she was diagnosed with rheumatism, neuralgia, diabetes, and cataracts, although her spirit was never crushed. She continued to fight for the cause of womens suffrage after she went almost blind in 1914. She died twelve years later. He works have since been printed on United States postage stamps and her works have sold for as much as $2.9 million at auction.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (6, 'Pablo Picasso', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFcRzX6_Vq6RHOQ7mjrTkbzrfKb9eAi7Ug57nXBrRxVQUBXvZWTRYTJ5gFrcRwZf42Y4Nloz7WLgbkCXu-A9LvS8sYW6i55ao9Z5ReZGset3nlGuoqZ5yyX-kH9CCqTk_t04bHnzF-cXfx7LYmFFg-E3OPh2DyT1iQX0p8LZD310HjKC9dBCBRklcy/s1600/picasso_3358.jpg', 'https://cdn.shopify.com/s/files/1/0849/4704/files/guernica_sartle.jpg?v=1582528493', 'Cubism, Post-Impressionism, Surrealism', 'Spanish', null, '<h4>Pablo Picasso was the most dominant and influential artist of the 1st half of the 20th century.</h4> <p>Associated most of all with pioneering Cubism, he also invented collage and made major contribution to Surrealism. He saw himself above all as a painter, yet his sculpture was greatly influential, and he also explored areas as diverse as printmaking and ceramics. Finally, he was a famously charismatic personality, the leading figure in the Ecole de Paris. His many relationships with women not only filtered into his art but also may have directed its course, and his behavior has come to embody that of the bohemian modern artist in the popular imagination.</p>', '<h4>Pablo Picasso was the most dominant and influential artist of the 1st half of the 20th century.</h4> <p>Associated most of all with pioneering Cubism, he also invented collage and made major contribution to Surrealism. He saw himself above all as a painter, yet his sculpture was greatly influential, and he also explored areas as diverse as printmaking and ceramics. Finally, he was a famously charismatic personality, the leading figure in the Ecole de Paris. His many relationships with women not only filtered into his art but also may have directed its course, and his behavior has come to embody that of the bohemian modern artist in the popular imagination.</p>

      <p>Picasso rejected Matisses view of the primary importance and role of colour, and focused instead on new pictorial ways of representing form and space. Influenced by novelties of Cézanne, and also by African sculpture and ancient Iberian art, he started to lend his figures more structure, and to deconstruct the conventions of perspective that had dominated painting since the Renaissance. This led him (alongside with Georges Braque) to evolve an entirely new Cubist movement, which rapidly became the cutting edge of modern art. At the same time, Picasso himself rejected the label Cubism especially when critics began to differentiate between the two key approaches he pursued - Analytic and Synthetic.</p>
      
      <p>In the 1920s and 1930s Picasso adopted a neoclassical figurative style. As he matured he worked on his own versions of canonical masterpieces by artists such as Poussin, Ingres, Velazquez, Goya, Rembrandt, and El Greco.</p>
      
      <p>Picassos influence was profound and far-reaching for most of his life. His work in pioneering Cubism established a set of pictorial problems, devices, and approaches, which remained important well into the 1950s. The Museum of Modern Art in New York (MoMA) has been called the house that Pablo built, because it has so widely exhibited the artists work. Picasso created some of the greatest 20th century paintings, several of which have achieved iconic status (Les Demoiselles dAvignon, Guernica, Weeping Woman).</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (7, 'Salvador Dalí', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/1024px-Salvador_Dal%C3%AD_1939.jpg', 'https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg', 'Surrealism', 'Spanish, Catalan', null, '<h4>An author, artist and provocateur, Salvador Dalí was one of the most notable figures of the Surrealist movement.</h4><p> Born in 1904 in Figueras, Catalonia, Dalí studied art in Madrid and Barcelona, where he demonstrated masterful painting skills and experimented with several artistic styles. In the late 1920s, two chief influences emerged that shaped his mature artistic style. The first was the work of psychoanalyst Sigmund Freud that explored the erotic significance of dreams and subconscious imagery. The second was his introduction to the Paris Surrealists, a group of artists and writers who sought to unlock the creative potential of the human unconscious.</p>', '<h4>An author, artist and provocateur, Salvador Dalí was one of the most notable figures of the Surrealist movement.</h4><p> Born in 1904 in Figueras, Catalonia, Dalí studied art in Madrid and Barcelona, where he demonstrated masterful painting skills and experimented with several artistic styles. In the late 1920s, two chief influences emerged that shaped his mature artistic style. The first was the work of psychoanalyst Sigmund Freud that explored the erotic significance of dreams and subconscious imagery. The second was his introduction to the Paris Surrealists, a group of artists and writers who sought to unlock the creative potential of the human unconscious.</p>

      <p>In 1929, Dalí burst onto the art scene with the debut of Un Chien Andalou (An Andalusian Dog) (1929), a short silent surrealist film he made with Spanish director Luis Buñuel. The film propelled the authors to the center of the French surrealist circle led by André Breton. Between 1929 and 1973, Dalí produced some of the most famous surrealist paintings, including his masterpiece, The Persistence of Memory (1931). The painting depicts a dreamworld in which common objects are deformed and displayed bizarrely and irrationally: watches, solid and hard objects appear to be inexplicably limp and melting in the desolate landscape. In the painting, he effortlessly integrates the real and the imaginary in order to systemize confusion and thus to help discredit completely the world of reality.</p>
      
      <p>Dalís most important contribution to Surrealism was the paranoiac-critical method, a surrealist technique he developed in the 1930s. The technique required the artist to enter a unique state of mind which he described as a spontaneous method of irrational knowledge, based on the critical-interpretative association of the phenomena of delirium. He also published essays in which he discussed and defined the surrealist object, such as Lobster Telephone (1936) andMae West Lips Sofa (1937) were usually constructed from found items or readymade materials.</p>
      
      <p>In the late 1930s, Dalí began painting in a more academic style influenced by the Renaissance masters. His admiration for Raphael is particularly evident in paintings such as Poetry of America (1943), Raphaelesque Head Exploding (1951), and Maximum Speed of Raphaels Madonna (1954). Throughout the 1930s, Dalís ambiguous political stance on fascism alienated him from his Surrealist colleagues, which eventually expelled Dalí from the movement.</p>
      
      <p>In 1940, during World War II, Dalí and his wife Gala moved to the United States. Henceforth, Dalí worked in a variety of media, designing theatre sets, furniture, jewelry, and even display windows for fashionable shops. In 1942, he published his most intriguing book, the autobiography The Secret Life of Salvador Dali.</p>
      
      <p>Dalí and Gala returned to Spain in 1948. The artist continued to be prolific in the late stages of his career, he worked on a variety of projects, while continuing to produce paintings, sculptures, and objects. He was also particularly fond of publicity stunts and was able to intrigue the public for decades with his outrageous behavior. Dalí died of heart failure on January 23, 1989, in Figueres, Spain.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (2, 'Tamara de Lempicka', 'https://ic.pics.livejournal.com/tanjand/44781189/71030736/71030736_original.jpg', 'https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg', 'Art Deco', 'Polish, Russian, French', null, '<h4>Tamara de Lempicka was the lone traditional easel painter in the entirety of the Art Deco style.</h4><p>Her sources of inspiration ranged dramatically: she adored Italian Renaissance painting; she was characterized by critics as a sort of modern-day Ingres, although the comparisons were more often not intended to flatter; she absorbed the avant-garde art of the era - particularly post-cubist abstraction but of a "softened" style. Perhaps most influential was Lempickas desire to capitalize on her social connections to create a niche for her portraiture, which most often featured well-to-do, cosmopolitan types. The Art Deco style, lavish in a less visually complex way than its predecessor, Art Nouveau, was probably the ideal vehicle for her trendy style. Most notably, despite its decorative quality, her work provided her with an outlet for unconventional self-expression: truly a product of her era, the libertine golden age between the two world wars, Lempicka, a bisexual, made bold, liberated female sexuality the linchpin of her art.</p>', '<h4>Tamara de Lempicka was the lone traditional easel painter in the entirety of the Art Deco style.</h4><p> Her sources of inspiration ranged dramatically: she adored Italian Renaissance painting; she was characterized by critics as a sort of modern-day Ingres, although the comparisons were more often not intended to flatter; she absorbed the avant-garde art of the era - particularly post-cubist abstraction but of a softened style. Perhaps most influential was Lempickas desire to capitalize on her social connections to create a niche for her portraiture, which most often featured well-to-do, cosmopolitan types. The Art Deco style, lavish in a less visually complex way than its predecessor, Art Nouveau, was probably the ideal vehicle for her trendy style. Most notably, despite its decorative quality, her work provided her with an outlet for unconventional self-expression: truly a product of her era, the libertine golden age between the two world wars, Lempicka, a bisexual, made bold, liberated female sexuality the linchpin of her art.</p>

      <p>Tamara de Lempicka was born in Warsaw (then part of Russian Empire). Her father was a Russian-Jewish lawyer and her mother was a Polish socialite. As a child of a well-off family, she went to boarding school in Lausanne, Switzerland. In 1911, she spent the summer with her grandmother in Italy, where she was introduced to the work of the great Italian painters, sparking a love of art that would inform the rest of her life. The following year, her parents divorced and she was sent to live with her aunt in St. Petersburg. Her aunt was very wealthy, which provided her niece with a taste of the life of luxury enjoyed by the rich elite. When she was 15, Maria Gorska attended an opera, where she encountered the dashing Tadeusz Lempicki, whom she determined to marry. The gregarious and self-confident Maria convinced her uncle to make the introduction and, three years later, she and Lempicki were married.</p>
      
      <p>The following year, in 1917 the Russian Revolution began and her husband was arrested by the Bolsheviks. After weeks of trying to locate her husband in prison by exploiting her social connections, charm, and attractive appearance, Maria found Tadeusz and managed to arrange for his release (supposedly, Lempicka seduced a person of power to get her husband out). Shortly afterward, the couple left the country and eventually settled in Paris where her family had also taken refuge.</p>
      
      <p>In Paris, she reinvented herself as Tamara de Lempicka, a name that had direct aristocratic pretensions. Ironically, her financial circumstances were somewhat dire as a result of her refugee status, so she determined to make money from her art. Tamara began studying diligently, enrolling at the Académie de la Grande Chaumière where she was taught by the Nabis painter, Maurice Denis, and the Cubist André Lhote. Denis encouraged her to take inspiration from the graphic arts, an engagement that was to play a key role in the development of her signature style. Lhote was arguably her most influential mentor. Lhotes brand of Cubism - less flattened, angular version to which he referred as soft Cubism - is immediately detectable in Lempickas style.</p>
      
      <p>Lempicka established herself fairly rapidly in the sophisticated, lively atmosphere of roaring 20s Paris in both social and artistic terms. She began showing her work in smaller galleries in the French capital and, in 1925, had her first solo exhibition in Milan. The show was sponsored by Count Emmanuele Castelbarco, a member of Italian high society and chic, continental artistic circles. In preparation for the show, Lempicka painted an astonishing 28 new pieces in a mere six months.</p>
      
      <p>Tamara de Lempicka was well suited to the prosperous golden age of the post-war period of the 1920s. Devoted to social ascendance but also enthralled with the bohemian lifestyles of the Parisian avant-garde, Lempicka found her place as a portraitist of some of the eras beautiful people. She mingled in circles with bright personalities such as André Gide, Pablo Picasso, Colette, and Jean Cocteau. Although married and the mother of a young daughter named Kizette, Tamara, who fashioned herself part-free spirit, part-femme fatale, engaged openly in romantic and sexual involvements with both men and women, a good number of whom were her patrons and models. She mixed with groups of lesbian and bisexual women artists and writers, attending Natalie Barney\'s women only afternoons and becoming friendly with figures such as Vita Sackville-West. Among her infamous entanglements was Lempickas affair with a Parisian nightclub singer, Suzy Solidor, and her correspondence with the distinguished Italian poet, Gabriel d\'Annunzio, whom she visited on two different occasions at his villa in Italy on Lake Garda. During the second visit, when she resisted his amorous advances, Annunzio withdrew his permission for Tamara to paint his portrait and the relationship ended before it had really begun.</p>
      
      <p>In 1927, Lempicka received first prize at the Exposition Internationale des Beaux-Arts for the painting Kizette on the Balcony (1927) - a striking portrait of her daughter, whom she saw very rarely. The following year, she and her husband divorced. Subsequently, her patron, Baron Raoul Kuffner con Dioszeg, commissioned her to paint a portrait of his mistress. However, in the process of painting the portrait, Lempicka developed a romantic relationship with the Baron, replacing his mistress and eventually marrying him in 1934 following the death of his wife.</p>
      
      <p>Lempicka, who had experienced the turbulent run-up to the Russian Revolution and then the catastrophic First World War, recognized early on the signs of a second impending world war and encouraged her husband to shore up his finances. In 1939, when war seemed inevitable, the couple left Paris and moved to Hollywood, California. They lived in the former house of the well-known film director, King Vidor, and Tamara soon became a favorite artist of the stars of Hollywoods silver screen.</p>
      
      <p>Lempicka busied herself with war relief work and after an extended struggle, managed to rescue her daughter Kizette from Nazi-occupied Paris in 1941. In 1943, the Baron and Baroness, as Lempicka was now known, moved to New York City, where they continued to socialize as frequently as ever, although de Lempickas art took something of a back seat compared to her prolific output in Paris. The distinctive style in which she painted had by the mid-1940s become somewhat passe and therefore her work was less in demand.
      When her husband, the Baron, died in 1961, Tamara sold many of her belongings and embarked on three around-the-world voyages by ship. Afterward, she moved to Houston, Texas to be closer to her daughter. Around that time, she began producing abstract paintings in an effort to remain more in-step with current artistic trends. However, when she exhibited her work in 1962, it was poorly received by critics and the aging Lempicka made the decision to retire from public life as a painter and to never again exhibit her work.</p>');
INSERT INTO artescape.artistsData (id, artistName, profileImage, coverImage, style, nationality, mainFacts, firstParagraph, bio) VALUES (8, 'Wassily Kandinsky', 'https://uploads0.wikiart.org/images/wassily-kandinsky.jpg!Portrait.jpg', 'https://uploads1.wikiart.org/00280/images/wassily-kandinsky/37-262-ph-web-1-1.jpg!Large.jpg', 'Expressionism, Abstract Art', 'Russian', null, '<h4>The creator of the first modern abstract paintings, Wassily Kandinsky was an influential Russian painter and art theorist.</h4><p> In his youth, he studied law and economics at the University of Moscow, and was later hired as a professor of Roman law at the University of Dorpat in Estonia. He was 30 years old when he began his studies in painting, focusing on life drawing, sketching, and anatomy, at the University of Munich.</p>', '<h4>The creator of the first modern abstract paintings, Wassily Kandinsky was an influential Russian painter and art theorist.</h4><p> In his youth, he studied law and economics at the University of Moscow, and was later hired as a professor of Roman law at the University of Dorpat in Estonia. He was 30 years old when he began his studies in painting, focusing on life drawing, sketching, and anatomy, at the University of Munich.</p>

      <p>He was not immediately accepted into the school as an art student, and so in the meantime he began learning art by himself, gaining artistic insight from Monets Haystacks and Richard Wagners composition Lohengrin. He was also influenced by the teachings of anthroposophy, as such, his abstract works were a creation of his intense philosophical beliefs, based on his own personal experiences with art. The devotion to inner beauty remained a central theme in his art.</p>
      
      <p>In 1914, after the beginning of World War I, Kandinsky returned to Moscow, where he did not find much inspiration in the art world. In 1921, he returned to Munich, where he taught at the Bauhaus school of architecture, until it was closed by the Nazis in 1933. He was an active art theorist, publishing a number of books on art theory, and developing a complex and deeply emotional theory about the ability of colors and shapes to represent sound and evince human emotion. He eventually traveled to the United States to lecture on the topic.</p>
      
      <p>After the Bauhaus was closed, Kandinsky moved to Paris, where he was mostly isolated from the other Impressionist or Cubist painters. He later became a French citizen, and lived the rest of his days there. His legacy lives on in the newly created Kandinsky Award, which rewards a promising young Russian artist a 55,000 euro prize, and attempts to elevate the status of contemporary Russian art.</p>');

CREATE TABLE paintingsData (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	artistName varchar(255) NOT NULL,
	width INT NOT NULL,
	height INT NOT NULL,
	image VARCHAR(255) NOT NULL,
	year INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO paintingsData (id, title, artistName, width, height, image, year) 
VALUES 
(1, 'Me and My Parrots', 'Frida Kahlo', 1776, 2326,'https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/me-and-my-parrots-1941.jpg!Large.jpg', 1941 );
(2, 'Two Women', 'Frida Kahlo', 553, 750, 'https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/two-women-1929.jpg!Large.jpg', 1929 );
(3, 'My Grandparents, My Parents, and I (Family Tree)', 'Frida Kahlo', 2527, 2197, 'https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/my-grandparents-my-parents-and-me-1936.jpg!Large.jpg', 1936 );
(4, 'Henry Ford Hospital (The Flying Bed)', 'Frida Kahlo', 2305, 1845, 'https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/henry-ford-hospital-the-flying-bed-1932.jpg!Large.jpg', 1932 );
(5, 'The Love Embrace of the Universe, the Earth (Mexico), Myself, Diego and Señor Xólotl', 'Frida Kahlo', 1816, 2201, 'https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-love-embrace-of-the-universe-the-earth-mexico-myself-diego-and-señor-xólotl-1949.jpg!Large.jpg', 1949 );
(6, 'Moses', 'Frida Kahlo', 1813, 1456, 'https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/moses-1945.jpg!Large.jpgg', 1945 );
(7, 'The Two Fridas', 'Frida Kahlo', 2206, 2186, 'https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-two-fridas-1939.jpg!Large.jpg', 19339 );
(8, 'Marxism Will Give Health to the Sick', 'Frida Kahlo', 1866, 2371, 'https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg', 1954 );
(9, 'Self Portrait with Cropped Hair', 'Frida Kahlo', 461, 750, 'https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-cropped-hair-1940.jpg!Large.jpg', 1940 );
(10, 'Sun and Life', 'Frida Kahlo', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );

(11, 'My Portrait (Self-Portrait in the Green Bugatti)', 'Tamara de Lempicka', 1190, 1584, 'https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg', 1929 );
(12, 'Portrait of Marquis Sommi', 'Tamara de Lempicka', 424, 648, 'https://uploads2.wikiart.org/images/tamara-de-lempicka/portrait-of-marquis-sommi-1925.jpg!Large.jpg', 1925 );
(13, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(14, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(15, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(16, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(17, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(18, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(19, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );
(20, 'Sun and Life', 'Tamara de Lempicka', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );

(21, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(22, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(23, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(24, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(25, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(26, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(27, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(28, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(29, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(30, 'Sun and Life', 'Emma Amos', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(31, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(32, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(33, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(34, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(35, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(36, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(37, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(38, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(39, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(40, 'Sun and Life', 'Mary Cassatt', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(41, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(42, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(43, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(44, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(45, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(46, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(47, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(48, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(49, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(50, 'Sun and Life', 'Hilma Af Klint', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(51, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(52, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(53, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(54, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(55, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(56, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(57, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(58, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(59, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(60, 'Sun and Life', 'Pablo Picasso', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(61, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(62, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(63, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(64, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(65, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(66, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(67, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(68, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(69, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(70, 'Sun and Life', 'Salvador Dalí', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(71, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(72, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(73, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(74, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(75, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(76, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(77, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(78, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(79, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(80, 'Sun and Life', 'Wassily Kandinsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(81, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(82, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(83, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(84, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(85, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(86, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(87, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(88, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(89, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(90, 'Sun and Life', 'Leonardo Da Vinci', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )

(91, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(92, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(93, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(94, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(95, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(96, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(97, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(98, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(99, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 )
(100, 'Sun and Life', 'Ivan Aivazovsky', 1822, 1447, 'https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg', 1947 );