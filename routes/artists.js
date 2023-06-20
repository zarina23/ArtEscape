var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

// Route for getting the ten selected artists data - from db
router.get("/", async function (req, res, next) {
  try {
    const results = await db(`SELECT * FROM artistsData;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// Route for getting data of EACH selected artist - from db && WikiArt API
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  try {
    // Call to db to access data of each artist
    const response1 = await db(`SELECT * FROM artistsData WHERE id = ${id};`);
    const artistsStaticData = response1.data[0];
    const artist_key = artistsStaticData.artistKey;

    // Call to WikiArt API to access selected data of each artist
    const response2 = await axios.get(
      `https://www.wikiart.org/en/${artist_key}?json=2`
    );
    const artistDataFull = response2.data;

    // if (response1.status !== 200) throw new Error(artistsStaticData.message);
    if (response2.status !== 200) throw new Error(artistDataFull.message);

    // Clean artist data coming from db
    const {
      artistKey,
      artistName,
      profileImage,
      coverImage,
      style,
      nationality,
      firstParagraph,
      bio,
    } = artistsStaticData;

    // Clean artist data coming from WikiArt API
    const {
      OriginalArtistName,
      birthDayAsString,
      deathDayAsString,
      wikipediaUrl,
    } = artistDataFull;

    // Join both data into an object
    const artistDataJoined = {
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

    // Send object with joined data as response
    res.send(artistDataJoined);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = router;
