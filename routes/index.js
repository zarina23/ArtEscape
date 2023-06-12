var express = require("express");
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});



router.get("/artist", async function (req, res, next) {
  try {
    // Call WikiArt API with axios (no need to json)
    const response = await axios.get(
      `https://www.wikiart.org/en/pieter-bruegel-the-elder?json=2`
    );

    //save response (data) in a var
    const artistData = response.data;
    // Send the error message if exists
    if (response.status !== 200) throw new Error(artistData.message); // When the error code was not 200

    // Send response
    res.send(artistData)
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
