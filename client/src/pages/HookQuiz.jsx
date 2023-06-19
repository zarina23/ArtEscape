import { useEffect, useState } from "react";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";
import ArtistQuizQ2 from "../components/ArtistQuizQ2";
import ArtistQuizQ3 from "../components/ArtistQuizQ3";

export function HookQuiz() {
  const [hookQuizQuestionsList, setHookQuizQuestionsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const getHookQuizQuestionsList = async () => {
    try {
      const response = await fetch(`/api/hook_quiz`, {
        method: "GET",
      });
      const data = await response.json();
      setHookQuizQuestionsList(data);
      console.log(data);
      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      // console.log(err.message);
    }
  };

  useEffect(() => {
    getHookQuizQuestionsList();
  }, []);

  return (
    <>
      <h3>Hook Quiz</h3>
      {/* 
      <div className="HookQuestions">
        {hookQuizQuestionsList.map((hook, id) => (
          <div key={id}>{hook.question_text}</div>
        ))} */}

      {currentPage === 1 && (
        <ArtistQuizQ1
          onNext={handleNextPage}
          hookQuizQuestionsList={hookQuizQuestionsList}
        />
      )}
      {currentPage === 2 && (
        <ArtistQuizQ2
          onNext={handleNextPage}
          hookQuizQuestionsList={hookQuizQuestionsList}
        />
      )}
      {currentPage === 3 && (
        <ArtistQuizQ3
          onNext={handleNextPage}
          hookQuizQuestionsList={hookQuizQuestionsList}
        />
      )}
    </>
  );
}
