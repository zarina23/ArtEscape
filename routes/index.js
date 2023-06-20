var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

router.get("/artists", async function (req, res, next) {
  try {
    const results = await db(`SELECT * FROM artistsData;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// Route for artists data
router.get("/artists/:id", async function (req, res, next) {
  const { id } = req.params;

  // Call WikiArt API with axios (no need to json)
  try {
    const response1 = await db(`SELECT * FROM artistsData WHERE id = ${id};`);
    const artistsStaticData = response1.data[0];
    const artist_key = artistsStaticData.artistKey;

    const response2 = await axios.get(
      `https://www.wikiart.org/en/${artist_key}?json=2`
    );
    const artistDataFull = response2.data;

    // if (response1.status !== 200) throw new Error(artistsStaticData.message);
    if (response2.status !== 200) throw new Error(artistDataFull.message);

    //Clean artist bio data
    const {
      OriginalArtistName,
      birthDayAsString,
      deathDayAsString,
      wikipediaUrl,
    } = artistDataFull;

    const {
      // id,
      artistKey,
      artistName,
      profileImage,
      coverImage,
      style,
      nationality,
      firstParagraph,
      bio,
    } = artistsStaticData;

    let artistDataJoined = {
      OriginalArtistName,
      birthDayAsString,
      deathDayAsString,
      wikipediaUrl,
      artistKey,
      artistName,
      profileImage,
      coverImage,
      style,
      nationality,
      firstParagraph,
      bio,
    };

    // Send response
    res.send(artistDataJoined);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route for paintings data
router.get("/paintings", async function (req, res, next) {
  try {
    const response = await db(`SELECT * FROM paintingsData;`);
    const paintingsData = response.data;

    res.send(paintingsData);
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
