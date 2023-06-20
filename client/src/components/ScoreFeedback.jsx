import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
import Button from "@mui/material/Button";

function ScoreFeedback({ artist, score }) {
  //

  //next
  return (
    <div className="mainContainer">
      <p className="questionText">Quiz completed!</p>
      <p className="questionText">Your {artist.name} quiz results:</p>
      <p className="score">{score}/3</p>

      {score === 3 && <p>Impressive! You're a {artist.name} expert!</p>}
      {score === 2 && (
        <p>Well done! You're on your way to mastering {artist.name}'s art.</p>
      )}
      {score === 1 && <p>Nice effort! Keep exploring {artist.name}'s work.</p>}
      {score === 0 && (
        <p>Keep exploring! {artist.name}'s art has much to discover.</p>
      )}
    </div>
  );
}

export default ScoreFeedback;
