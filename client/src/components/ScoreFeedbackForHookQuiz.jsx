import "./stylesheets/ArtistQuiz.css";
import Chip from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ScoreFeedbackForHookQuiz({ score }) {
  //
  const navigate = useNavigate();

  const exploreAllArtists = () => {
    navigate(`/lectures/artists`);
  };

  const returnToHomePage = () => {
    navigate(`/`);
  };

  const takeTheQuizAgain = () => {
    navigate(`/hook_quiz`);
  };

  const shareWithFriends = () => {
    alert("Hang in there! This feature is in development 🎨");
  };

  //next
  return (
    <div className="mainContainer">
      <p className="questionText">Quiz completed!</p>
      <p className="score">{score}/5</p>

      {score === 5 && <p className="scoreFeedback">Impressive!</p>}
      {score === 4 && <p className="scoreFeedback">Impressive!</p>}
      {score === 3 && <p className="scoreFeedback">Well done!</p>}
      {score === 2 && <p className="scoreFeedback">Well done!</p>}
      {score === 1 && <p className="scoreFeedback">Nice effort!</p>}
      {score === 0 && <p className="scoreFeedback">Keep exploring!</p>}

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
              onClick={() => takeTheQuizAgain()}
            >
              Take the quiz again!
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

export default ScoreFeedbackForHookQuiz;
