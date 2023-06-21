var express = require("express");
var router = express.Router();
const axios = require("axios");
const db = require("../model/helper");

// Route for individual artist quiz
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  // call to DB table questions
  try {
    const results = await db(
      `SELECT * FROM questions WHERE artist_id = "${id}";`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

// Route for final quiz
router.get("/", async function (req, res, next) {
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
