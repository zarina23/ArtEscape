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
    console.log(updatedScore);
  };

  useEffect(() => {
    getArtist();
  }, []);

  //this is needed to fetch artist's name to display at the top of the page
  const getArtist = async () => {
    try {
      const response = await fetch(`/api/artists`, {
        method: "GET",
      });
      const data = await response.json();
      // console.log(data);

      const artist = data.filter((artist) => artist.key === id);
      // console.log(artist);
      setArtist(artist[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getQuizQuestionsList = async (id) => {
    try {
      const response = await fetch(`/api/artists/${id}/quiz`);
      const data = await response.json();
      setQuizQuestionsList(data);
      // console.log(data);

      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getQuizQuestionsList(id);
  }, []);

  return (
    <div>
      <h1 className="artistQuizHeader">Test Your Knowledge: {artist.name}</h1>
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
