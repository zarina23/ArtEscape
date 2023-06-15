var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

router.get("/artists", function (req, res, next) {
  const artistsResponse = [
    {
      key: "frida-kahlo",
      name: "Frida Kahlo",
      image:
        "https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Portrait.jpg",
    },
    {
      key: "tamara-de-lempicka",
      name: "Tamara de Lempicka",
      image:
        "https://uploads8.wikiart.org/00109/images/tamara-de-lempicka/1.jpg!Portrait.jpg",
    },
    {
      key: "emma-amos",
      name: "Emma Amos",
      image:
        "https://uploads1.wikiart.org/00335/images//photo-becket-logan.jpg!Portrait.jpg",
    },
    {
      key: "mary-cassatt",
      name: "Mary Cassatt",
      image:
        "https://uploads4.wikiart.org/images/mary-cassatt.jpg!Portrait.jpg",
    },
    {
      key: "hilma-af-klint",
      name: "Hilma Af Klint",
      image:
        "https://uploads8.wikiart.org/temp/c5de8e4a-1cb2-4e2f-b31a-72406334ad13.jpg",
    },
    {
      key: "pablo-picasso",
      name: "Pablo Picasso",
      image:
        "https://uploads4.wikiart.org/00115/images/pablo-picasso/iuyqtex0.jpeg!Portrait.jpeg",
    },
    {
      key: "salvador-dali",
      name: "Salvador Dalí",
      image:
        "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg",
    },
    {
      key: "wassily-kandinsky",
      name: "Wassily Kandinsky",
      image:
        "https://uploads0.wikiart.org/images/wassily-kandinsky.jpg!Portrait.jpg",
    },
    {
      key: "leonardo-da-vinci",
      name: "Leonardo da Vinci",
      image:
        "https://uploads0.wikiart.org/images/leonardo-da-vinci.jpg!Portrait.jpg",
    },
    {
      key: "ivan-aivazovsky",
      name: "Ivan Aivazovsky",
      image:
        "https://uploads7.wikiart.org/00340/images/ivan-aivazovsky/440px-aivazovsky-self-portrait-1874.jpg!Portrait.jpg",
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
