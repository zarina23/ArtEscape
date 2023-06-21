import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";
import ArtistQuizQ2 from "../components/ArtistQuizQ2";
import ArtistQuizQ3 from "../components/ArtistQuizQ3";
import ScoreFeedbackForArtistQuiz from "../components/ScoreFeedbackForArtistQuiz";

import "../components/stylesheets/ArtistQuiz.css";

export function ArtistQuiz() {
  const [quizQuestionsList, setQuizQuestionsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [artist, setArtist] = useState([]); // fetch with database to get all artists array
  const { id } = useParams();
  const [score, setScore] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const keepScore = (additionalScore) => {
    const updatedScore = score + additionalScore;
    setScore(updatedScore);
  };

  useEffect(() => {
    getArtist(id);
  }, [id]);

  //this is needed to fetch artist's name to display at the top of the page
  const getArtist = async (id) => {
    try {
      const response = await fetch(`/api/artists/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setArtist(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getQuizQuestionsList = async (id) => {
    try {
      const response = await fetch(`/api/quiz/${id}`);
      const data = await response.json();
      setQuizQuestionsList(data);

      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getQuizQuestionsList(id);
  }, [id]);

  return (
    <div>
      <h1 className="artistQuizHeader">
        Test Your Knowledge: {artist?.artistName}
      </h1>
      {currentPage === 1 && (
        <ArtistQuizQ1
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
          keepScore={keepScore}
        />
      )}
      {currentPage === 2 && (
        <ArtistQuizQ2
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
          keepScore={keepScore}
        />
      )}
      {currentPage === 3 && (
        <ArtistQuizQ3
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
          keepScore={keepScore}
        />
      )}

      {currentPage === 4 && (
        <ScoreFeedbackForArtistQuiz artist={artist} score={score} id={id} />
      )}
    </div>
  );
}
