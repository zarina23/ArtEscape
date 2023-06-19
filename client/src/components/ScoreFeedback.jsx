import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
import Button from "@mui/material/Button";

function ScoreFeedback({ artist }) {
  //

  //next
  return (
    <div className="mainContainer">
      <p className="questionText">Quiz completed!</p>
      <p className="questionText">Your {artist.name} quiz results:</p>
    </div>
  );
}

export default ScoreFeedback;
