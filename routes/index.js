var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

router.get("/artists", function (req, res, next) {
  try {
    const results = await db(
      `SELECT * FROM artistsData;`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }

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
