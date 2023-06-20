import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ScoreFeedback({ artist, score, id }) {
  //
  const navigate = useNavigate();

  const exploreSameArtist = (id) => {
    navigate(`/lectures/artists/${id}`);
  };

  const exploreAllArtists = () => {
    navigate(`/lectures/artists`);
  };

  const returnToHomePage = () => {
    navigate(`/`);
  };

  const shareWithFriends = () => {
    alert("Hang in there! This feature is in development 🎨");
  };

  //next
  return (
    <div className="mainContainer">
      <p className="questionText">Quiz completed!</p>
      <p className="questionText">Your {artist.name} quiz results:</p>
      <p className="score">{score}/3</p>

      {score === 3 && (
        <p className="scoreFeedback">
          Impressive! You're a {artist.name} expert!
        </p>
      )}
      {score === 2 && (
        <p className="scoreFeedback">
          Well done! You're on your way to mastering {artist.name}'s art.
        </p>
      )}
      {score === 1 && (
        <p className="scoreFeedback">
          Nice effort! Keep exploring {artist.name}'s work.
        </p>
      )}
      {score === 0 && (
        <p className="scoreFeedback">
          Keep exploring! {artist.name}'s art has much to discover.
        </p>
      )}

      {/* CTAs */}
      <section className="ctaBigContainer">
        <div className="ctaContainer">
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => shareWithFriends()}
            >
              Spread the word: share results with friends
            </Chip>
          </div>
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => exploreSameArtist(id)}
            >
              Explore the world of {artist.name}
            </Chip>
          </div>
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => exploreAllArtists()}
            >
              Explore other artists
            </Chip>
          </div>
          <div className="chip">
            <Chip
              label="Clickable"
              variant="contained"
              color="info"
              onClick={() => returnToHomePage()}
            >
              Return to home page
            </Chip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScoreFeedback;
