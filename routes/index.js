var express = require("express");
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});


router.get("/artists/:artist_name", async function (req, res, next) {

  const { artist_name } = req.params;

  // Call WikiArt API with axios (no need to json)
  try {
    // Make both axios requests simultaneously
    const [response1, response2] = await Promise.all([
      axios.get(`https://www.wikiart.org/en/${artist_name}?json=2`),
      axios.get(`https://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${artist_name}&json=2`)
    ]);

    const artistDataFull = response1.data;
    if (response1.status !== 200) throw new Error(artistDataFull.message);

    const paintingsDataFull = response2.data;
    if (response2.status !== 200) throw new Error(paintingsDataFull.message);

    // Process the data and send the response

    //Clean artist bio data
    const { OriginalArtistName, birthDayAsString, deathDayAsString, biography, wikipediaUrl } = artistDataFull;

    let artistDataCleaned = { OriginalArtistName, birthDayAsString, deathDayAsString, biography, wikipediaUrl };

    artistDataCleaned = { ...artistDataCleaned, artistId: artistDataFull.contentId };



    const artistAndPaintingsData = {
      artist: artistDataCleaned,
      paintings: paintingsDataFull
    };

    // Send response
    res.send(artistAndPaintingsData);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
