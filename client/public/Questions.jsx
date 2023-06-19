const questions = [
  {
    quiz_type: "individual_artist",
    artist_name_key: "ivan-aivazovsky",
    question_type: "questionImage_answersText",
    question_text:
      "What is the name of this famous painting by Ivan Aivazovsky?",
    question_image_url:
      "https://uploads1.wikiart.org/images/ivan-aivazovsky/shipwreck-1854.jpg",
    option0_text: "Shipwreck",
    option1_text: "Tempest. Shipwreck of the foreign ship",
    option2_text: "Thunderstor",
    option3_text: "Storm at Sea",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "ivan-aivazovsky",
    question_type: "questionText_answersImage",
    question_text:
      "Ivan Aivazovsky is most remembered for his beautifully melodramatic renditions of the seascapes. Which one of these paintings is his work?",
    // questionImage: `url()`,
    option0_image_url:
      "https://uploads8.wikiart.org/00129/images/ivan-aivazovsky/the-ninth-wave.jpg!Large.jpg",
    option1_image_url:
      "https://uploads4.wikiart.org/00290/images/william-turner/joseph-mallord-william-turner-fishermen-at-sea-google-art-project-1.jpg",
    option2_image_url:
      "https://uploads4.wikiart.org/00142/images/vincent-van-gogh/the-starry-night.jpg",
    option3_image_url:
      "https://uploads8.wikiart.org/images/edvard-munch/moon-light-1895.jpg!Large.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "ivan-aivazovsky",
    question_type: "questionText_answersText",
    question_text:
      "Today, Aivazovsky's paintings have been auctioned off for millions of dollars and have been printed on postage stamps for Russia, Ukraine, and Armenia. Throughout his lifetime, with how many paintings did Aivazovsky contribute to the art world?",
    option0_text: "Oven 6,000",
    option1_text: "Approximately 2,450",
    option2_text: "Less than 1,000",
    option3_text: "Only 50",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "emma-amos",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this painting?",
    question_image_url:
      "https://uploads8.wikiart.org/00335/images/emma-amos/does-black-rub-off-question-mark-1992.png!Large.png",
    option0_text: "Does Black Rub Off?",
    option1_text: "Hands",
    option2_text: "Gloves",
    option3_text: "Fingers",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "emma-amos",
    question_type: "questionText_answersImage",
    question_text:
      "Which one of the following paintings was created by Amos in 2006?",
    option0_image_url:
      "https://uploads2.wikiart.org/00335/images/emma-amos/identity-2006.png!Large.png",
    option1_image_url:
      "https://media.tate.org.uk/art/images/work/T/T12/T12450_10.jpg",
    option2_image_url: "https://media.artsper.com/artwork/1923234_1_m.jpg",
    option3_image_url:
      "https://www.menziesartbrands.com/sites/default/files/field/image/Jeffrey%20Smart-w_0.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "emma-amos",
    question_type: "questionText_answersText",
    question_text:
      "For which famous magazine did Amos use to work creating illustrations?",
    option0_text: "Sesame Street Magazine",
    option1_text: "Vogue",
    option2_text: "Teenage Mutant Ninja Turtles",
    option3_text: "GQ",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "mary-cassatt",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this painting?",
    question_image_url:
      "https://uploads6.wikiart.org/images/mary-cassatt/the-flirtation-a-balcony-in-seville-1872.jpg!Large.jpg",
    option0_text: "The Flirtation A Balcony in Seville",
    option1_text: "Los chismosos",
    option2_text: "The man with the hat",
    option3_text: "Summer days",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "mary-cassatt",
    question_type: "questionText_answersImage",
    question_text:
      "Which of the following paintings is At the Theater by Cassatt?",
    option0_image_url:
      "https://uploads3.wikiart.org/images/mary-cassatt/at-the-theater-1879.jpg!Large.jpg",
    option1_image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fcarpelibrum%2Fart-at-the-theater%2F&psig=AOvVaw128kvd8BJu640bl2Am8unD&ust=1686681714763000&source=images&cd=vfe&ved=2ahUKEwioj_eUsb7_AhVUQ8AKHTCpBWYQjRx6BAgAEAw",
    option2_image_url:
      "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/08/19/Style/Images/sundayimage001.jpg?t=20170517",
    option3_image_url:
      "https://www.artstor.org/wp-content/uploads/2019/12/CARNEGIE_4020004-490x600.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "mary-cassatt",
    question_type: "questionText_answersText",
    question_text: "Which art movement best describes Cassatt's work?",
    option0_text: "Impressionism",
    option1_text: "Baroque",
    option2_text: "Art Nouveau",
    option3_text: "Surrealism",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "salvador-dali",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this painting?",
    question_image_url:
      "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg",
    option0_text: "The Persistence of Memory",
    option1_text: "The Sense of Speed",
    option2_text: "The Dream Approaches",
    option3_text: "Surrealist Essay",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "salvador-dali",
    question_type: "questionText_answersImage",
    question_text:
      "Which of these paintings is Swans Reflecting Elephants painted in 1937?",
    option0_image_url:
      "https://uploads6.wikiart.org/images/salvador-dali/cygnes-refletant-des-elephants.jpg!Large.jpg",
    option1_image_url:
      "https://uploads4.wikiart.org/images/salvador-dali/the-elephants-large.jpg!Large.jpg",
    option2_image_url:
      "https://uploads8.wikiart.org/images/salvador-dali/space-elephant.jpg!Large.jpg",
    option3_image_url:
      "https://uploads0.wikiart.org/images/salvador-dali/warrior-mounted-on-an-elephant-overpowering-a-cello.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "salvador-dali",
    question_type: "questionText_answersText",
    question_text: "What is the birth place of Salvador Dali?",
    option0_text: "Figueras, Spain",
    option1_text: "Lyon, France",
    option2_text: "Malaga, Spain",
    option3_text: "Verona, Italy",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "leonardo-da-vinci",
    question_type: "questionImage_answersText",
    question_text:
      "What is the name of the painting that Leonardo Da Vinci was persuaded to paint not once, but twice for the Confraternity of the Immaculate Conception in Milan?",
    question_image_url:
      "https://uploads2.wikiart.org/00339/images/leonardo-da-vinci/virgin-of-the-rocks-between-1483-and-1486.jpg",
    option0_text: "The Virgin of The Rocks",
    option1_text: "The Madonna of the Carnation",
    option2_text:
      "The Virgin and Child with Saint Anne and Saint John the Baptist",
    option3_text: "Leda",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "leonardo-da-vinci",
    question_type: "questionText_answersImage",
    question_text:
      "Which of the below works is NOT a creation of Leonardo Da Vinci?",
    option0_image_url:
      "https://uploads7.wikiart.org/images/michelangelo/the-last-judgement-1541.jpg", // "The Last Judgement"
    option1_image_url:
      "https://uploads1.wikiart.org/images/leonardo-da-vinci/bird-s-eye-view-of-a-landscape.jpg", // "Bird's Eye View of a Landscape"
    option2_image_url:
      "https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg", // "The Last Supper"
    option3_image_url:
      "https://uploads1.wikiart.org/00226/images/leonardo-da-vinci/1503990074029518-568314.jpg", // "Annunciation"
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "leonardo-da-vinci",
    question_type: "questionText_answersText",
    question_text:
      "Leonardo Da Vinci's interests were largely focused on scientific studies. Which one of his greatest interests is evidenced in his work The Vitruvian Man?",
    option0_text: "Anatomy",
    option1_text: "Genetics",
    option2_text: "Zoology",
    option3_text: "Diagnosis",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "frida-kahlo",
    question_type: "questionImage_answersText",
    question_text:
      "As one of the last and most famous works of Frida Kahlo, this painting captures her fundamental values. How is it called?",
    question_image_url:
      "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg",
    option0_text: "Marxism will give health to the sick",
    option1_text: "Final recovery from her illness",
    option2_text: "Divine revelation",
    option3_text: "A tribute to nature forces",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "frida-kahlo",
    question_type: "questionText_answersImage",
    question_text:
      "What painting was a tribute to Frida's father and was painted after his death?",
    option0_image_url:
      "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/me-and-my-parrots-1941.jpg!Large.jpg",
    option1_image_url:
      "https://uploads2.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/thinking-about-death-1943.jpg!Large.jpg",
    option2_image_url:
      "https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/my-grandparents-my-parents-and-me-1936.jpg!Large.jpg",
    option3_image_url:
      "https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Large.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "frida-kahlo",
    question_type: "questionText_answersText",
    question_text:
      "What was one of the most important narratives in Frida's work, which she was actively known for?",
    option0_text: "Political activism and Mexican indigenous values",
    option1_text: "Anatomy of the human body and philosophy",
    option2_text: "Romantic relationship with Diego Rivera",
    option3_text: "Nature symbols and animals",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "wassily-kandinsky",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this painting?",
    question_image_url:
      "https://uploads7.wikiart.org/images/wassily-kandinsky/blue-mountain-1908.jpg!Large.jpg",
    option0_text: "Blue mountain",
    option1_text: "A mountain",
    option2_text: "Horses",
    option3_text: "Park of St. Cloud with horseman",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "wassily-kandinsky",
    question_type: "questionText_answersImage",
    question_text: "Which of this paintings is work of Wassily Kandinsky?",
    option0_image_url:
      "https://uploads0.wikiart.org/images/wassily-kandinsky/several-circles-1926.jpg!Large.jpg", //Several Circles
    option1_image_url:
      "https://uploads5.wikiart.org/images/hilma-af-klint/atom-series-no-8-atom-on-the-ether-plane-is-in-constant-change-between-rest-and-activity-at-the-1917.jpg",
    option2_image_url:
      "https://uploads4.wikiart.org/images/tamara-de-lempicka/the-model-1925.jpg!Large.jpg",
    option3_image_url:
      "https://uploads5.wikiart.org/images/mary-cassatt/mary-ellison-embroidering-1877.jpg!Large.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "wassily-kandinsky",
    question_type: "questionText_answersText",
    question_text: "Where is Wassily Kandinsky from?",
    option0_text: "Russia",
    option1_text: "Ukraine",
    option2_text: "Poland",
    option3_text: "Bulgaria",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "hilma-af-klint",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this paiting?",
    question_image_url:
      "https://uploads6.wikiart.org/images/hilma-af-klint/the-ten-largest-1907.jpg",
    option0_text: "The Ten Largest.",
    option1_text: "Circles.",
    option2_text: "White circles.",
    option3_text: "Blue and yellow circles.",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "hilma-af-klint",
    question_type: "questionText_answersImage",
    question_text:
      "Which one of this paitings is called What A Human Being Is by af Klimt?",
    option0_image_url:
      "https://uploads3.wikiart.org/images/hilma-af-klint/what-a-human-being-is-1910.jpg",
    option1_image_url:
      "https://studyfinds.org/wp-content/uploads/2020/12/AdobeStock_267410313-604x385.jpeg",
    option2_image_url:
      "https://i.etsystatic.com/36644323/r/il/4db5c9/4296968593/il_794xN.4296968593_5iyf.jpg",
    option3_image_url:
      "https://i.etsystatic.com/33706763/r/il/530aee/3828553553/il_794xN.3828553553_fu9o.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "hilma-af-klint",
    question_type: "questionText_answersText",
    question_text: "What kind of work characterizes af Klint and The Five?",
    option0_text:
      "Inventive geometric visual language capable of conceptualising invisible forces both of the inner and outer worlds.",
    option1_text: "A chain of fast food restaurants.",
    option2_text: "A talk show on Fox News Channel.",
    option3_text: "A mystery thriller miniseries",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "pablo-picasso",
    question_type: "questionImage_answersText",
    question_text: "What is the name of this painting?",
    question_image_url:
      "https://uploads0.wikiart.org/00139/images/pablo-picasso/guernica-by-pablo-picasso.jpg",
    option0_text: "Guernica",
    option1_text: "Dream and Lie of Franco",
    option2_text: "Minotaur is wounded",
    option3_text: "Candle, palette, head of red bull",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "pablo-picasso",
    question_type: "questionText_answersImage",
    question_text:
      "Which of these paintings is The Weeping Woman painted in 1937?",
    option0_image_url:
      "https://uploads4.wikiart.org/images/pablo-picasso/crying-woman-1937-1.jpg!Large.jpg",
    option1_image_url:
      "https://uploads3.wikiart.org/images/pablo-picasso/leaning-woman-1937.jpg!Large.jpg",
    option2_image_url:
      "https://uploads2.wikiart.org/images/pablo-picasso/portrait-of-dora-maar-1937.jpg!Large.jpg",
    option3_image_url:
      "https://uploads4.wikiart.org/images/pablo-picasso/portrait-of-marie-th%C3%A9r%C3%A8se-walter-1937.jpg!Large.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "pablo-picasso",
    question_type: "questionText_answersText",
    question_text: "What is Pablo Picasso's full original name?",
    option0_text:
      "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso",
    option1_text:
      "Pablo Diego José Francisco de Paula Juan Nepomuceno María de la Santísima Trinidad de los Remedios Cipriano Ruiz y Picasso",
    option2_text:
      "Pablo Diego María Francisco de Paula Juan Nepomuceno José de los Remedios Cipriano de la Santísima Trinidad y Picasso",
    option3_text:
      "Pablo Diego María Francisco de Paula Juan Nepomuceno José de la Santísima Trinidad de los Remedios Cipriano Ruiz y Picasso",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "tamara-de-lempicka",
    question_type: "questionImage_answersText",
    question_text:
      "Looking at this famous painting of Tamara de Lempicka, what do you think are the main topics in her work?",
    question_image_url:
      "https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg",
    option0_text:
      "Women's liberation with aggressive confindence and luxury elegance",
    option1_text: "Aristocratic lifestyle and luxury elegance",
    option2_text: "Fashion style in the modernism of the 1920s",
    option3_text: "Feminine beauty and the power of nature",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "tamara-de-lempicka",
    question_type: "questionText_answersImage",
    question_text:
      "Which of these paintings represents purely the art deco style that Tamara de Lempicka was known for?",
    option0_image_url:
      "https://uploads2.wikiart.org/images/tamara-de-lempicka/girl-with-gloves-1929.jpg!Large.jpg",
    option1_image_url:
      "https://uploads0.wikiart.org/images/tamara-de-lempicka/redheaded-woman-reading-1922.jpg!Large.jpg",
    option2_image_url:
      "https://uploads8.wikiart.org/images/tamara-de-lempicka/double-47.jpg!Large.jpg",
    option3_image_url:
      "https://uploads2.wikiart.org/images/tamara-de-lempicka/portrait-of-marquis-sommi-1925.jpg!Large.jpg",
  },

  {
    quiz_type: "individual_artist",
    artist_name_key: "tamara-de-lempicka",
    question_type: "questionText_answersText",
    question_text:
      "What was the predominant technique and pictorical style that Tamara de Lempicka was acclaimed for?",
    option0_text: "Art Deco style with blended cubism and neoclassicism",
    option1_text: "Cubism",
    option2_text: "Neorealism",
    option3_text: "Surrealism and Expressionism",
  },
];
