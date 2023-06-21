var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var quizRouter = require("./routes/quiz");
var artistsRouter = require("./routes/artists");
var paintingsRouter = require("./routes/paintings");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/quiz", quizRouter);
app.use("/api/artists", artistsRouter);
app.use("/api/paintings", paintingsRouter);

module.exports = app;
