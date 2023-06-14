/*
  quiz_type,
  artist_name_key,
  question_type,
  question_text,
  question_image_url,
  option0_text,
  option1_text,
  option2_text,
  option3_text,
  option0_image_url,
  option1_image_url,
  option2_image_url,
  option3_image_url;
  */

const questionsFinalKahlo = {
  quiz_type: "artists_final",
  artist_name_key: "" /* "frida-kahlo",*/,
  question_type: "questionImage_answersText",
  question_text:
    "Frida has 55 self-portraits. She approached her early portraits (mostly of herself, family and friends) in 1925, during her recovery from...",
  question_image_url:
    "https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Large.jpg",
  option0_text: "a near-fatal bus accident",
  option1_text: "a flu",
  option2_text: "an hangover",
  option3_text: "a break-up with Diego Rivera",
};

MySQL(
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
);

const questionsFinalDeLempicka = {
  quiz_type: "artists_final",
  artist_name_key: "" /*"tamara-de-lempicka",*/,
  question_type: "questionText_answersImage",
  question_text:
    "In 1927, Lempicka received first prize at the Exposition Internationale des Beaux-Arts for which painting?",
  option0_image_url:
    "https://uploads6.wikiart.org/images/tamara-de-lempicka/kizette-on-the-balcony-1927.jpg!Large.jpg",
  option1_image_url:
    "https://artenet.es/media/reviews/photos/thumbnail/550x550s/ce/61/66/9317-balcon-con-nina-87-1471885553.jpg",
  option2_image_url:
    "https://d2r83x5xt28klo.cloudfront.net/5705_e3NerwWViLG8bRRc_b.jpg",
  option3_image_url:
    "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/on-the-balcony-george-schrimpf.jpg",
};

MySQL(
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
);

const questionsFinalAmos = {
  quiz_type: "artists_final",
  artist_name_key: "" /*"emma-amos",*/,
  question_type: "questionText_answersText",
  question_text:
    "Amos moved to New York City after feeling stunted by the slow move of the Atlanta art scene. After the level of racism, sexism, and ageism that she encountered upon moving to New York, she decided to begin are career as a...",
  option0_text: "textile/weaver designer",
  option1_text: "web developer",
  option2_text: "television show host",
  option3_text: "chef",
};

MySQL(
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
);

const questionsFinalAfKlintAndCassatt = {
  quiz_type: "artists_final",
  artist_name_key: "" /*["hilma-af-klint", "mary-cassatt"],*/,
  question_type: "questionText_answersText",
  question_text: "What themes have in common Mary Cassatt and Hilma af Klint?",
  option0_text: "Symbolism and Spirituality",
  option1_text: "Industry, Invention, and Progress",
  option2_text: "Immigration and Migration",
  option3_text: "Identity and the Environment",
};

MySQL(
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
