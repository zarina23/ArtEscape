DROP TABLE if exists questions;

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

    ('individual_artist', 'frida-kahlo', 'questionImage_answersText', 'As one of the last and most famous works of Frida Kahlo, this painting captures her fundamental values. How is it called?', 'https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg', 'Marxism will give health to the sick', 'Final recovery from her illness', 'Divine revelation', 'A tribute to nature forces', NULL, NULL, NULL, NULL),
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
