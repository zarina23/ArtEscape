import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";
import ArtistQuizQ2 from "../components/ArtistQuizQ2";
import ArtistQuizQ3 from "../components/ArtistQuizQ3";

import "../components/stylesheets/ArtistQuiz.css";

export function ArtistQuiz() {
  const [quizQuestionsList, setQuizQuestionsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const { id } = useParams();

  const getQuizQuestionsList = async (id) => {
    try {
      const response = await fetch(`/api/quiz/${id}`);
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
  }, [id]);

  return (
    <div>
      <h1>Artist Quiz</h1>
      {currentPage === 1 && (
        <ArtistQuizQ1
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
        />
      )}
      {currentPage === 2 && (
        <ArtistQuizQ2
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
        />
      )}
      {currentPage === 3 && (
        <ArtistQuizQ3
          onNext={handleNextPage}
          quizQuestionsList={quizQuestionsList}
        />
      )}
    </div>
  );
}
