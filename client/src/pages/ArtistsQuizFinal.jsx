import { useEffect, useState, createElement, useMemo } from "react";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";
import ArtistQuizQ2 from "../components/ArtistQuizQ2";
import ArtistQuizQ3 from "../components/ArtistQuizQ3";
import "../components/stylesheets/ArtistQuiz.css";
import ScoreFeedbackForFinalQuiz from "../components/ScoreFeedbackForFinalQuiz";

export function ArtistsQuizFinal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [quizQuestionsList, setQuizQuestionsList] = useState([]);
  const [shuffledQuizQuestionsList, setShuffledQuizQuestionsList] = useState(
    []
  );
  const [questionOne, setQuestionOne] = useState([]);
  const [score, setScore] = useState(0);

  //load ALL 'artists_final' questions from database
  useEffect(() => {
    getHookQuizQuestionsList();
  }, []);

  //page number is used for rendering components, i.e. go to next question or show score
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const keepScore = (additionalScore) => {
    const updatedScore = score + additionalScore;
    setScore(updatedScore);
    console.log(updatedScore);
  };

  //API call to fetch all question from database
  const getHookQuizQuestionsList = async () => {
    try {
      const response = await fetch(`/api/quiz/final_quiz`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setQuizQuestionsList(data);
      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  //when all question from database are fetched and state is updated, we want to shuffle the questions, and save randomized array to state
  useEffect(() => {
    shuffleArray(quizQuestionsList);
  }, [quizQuestionsList]);

  //to randomize the questions for new hook quiz
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    console.log(shuffledArray);
    setShuffledQuizQuestionsList(shuffledArray);
  }

  //set individual questions
  useEffect(() => {
    const arrayOne = [shuffledQuizQuestionsList[0]];
    setQuestionOne(arrayOne);
  }, [shuffledQuizQuestionsList]);

  useEffect(() => {
    // console.log(questionOne);
  }, [questionOne]);

  const components = {
    questionImage_answersText: ArtistQuizQ1,
    questionText_answersImage: ArtistQuizQ2,
    questionText_answersText: ArtistQuizQ3,
  };

  const selectQuizQuestion = useMemo(
    () => [shuffledQuizQuestionsList[currentPage - 1]],
    [currentPage, shuffledQuizQuestionsList]
  );

  return (
    <>
      <h1 className="artistQuizHeader">Test Your Art Knowledge</h1>

      {currentPage < 9 &&
        shuffledQuizQuestionsList?.[0] &&
        createElement(
          components[shuffledQuizQuestionsList[currentPage - 1]?.question_type],
          {
            onNext: handleNextPage,
            quizQuestionsList: selectQuizQuestion,
            keepScore: keepScore,
          }
        )}

      {currentPage === 9 && <ScoreFeedbackForFinalQuiz score={score} />}
    </>
  );
}
