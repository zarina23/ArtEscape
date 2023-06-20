var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

// Route for all paintings of all artists
router.get("/", async function (req, res, next) {
  try {
    const response = await db(`SELECT * FROM paintingsData;`);
    const paintingsData = response.data;

    res.send(paintingsData);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// Route for all paintings of each artist
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  try {
    const response = await db(
      `SELECT * FROM paintingsData WHERE artistId = ${id};`
    );
    const artistPaintings = response.data;
    res.send(artistPaintings);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = router;
