import { useEffect, useState, createElement } from "react";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";
import ArtistQuizQ2 from "../components/ArtistQuizQ2";
import ArtistQuizQ3 from "../components/ArtistQuizQ3";
import "../components/stylesheets/ArtistQuiz.css";

export function HookQuiz() {
  const [currentPage, setCurrentPage] = useState(1);

  const [quizQuestionsList, setQuizQuestionsList] = useState([]);
  const [shuffledQuizQuestionsList, setShuffledQuizQuestionsList] = useState(
    []
  );
  const [questionOne, setQuestionOne] = useState([]);
  const [score, setScore] = useState(0);

  //load ALL questions from database
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
      const response = await fetch(`/api/hook_quiz`, {
        method: "GET",
      });
      const data = await response.json();
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
    console.log(questionOne);
  }, [questionOne]);

  const components = {
    questionImage_answersText: ArtistQuizQ1,
    questionText_answersImage: ArtistQuizQ2,
    questionText_answersText: ArtistQuizQ3,
  };

  return (
    <>
      <h1 className="artistQuizHeader">Test Your Art Knowledge</h1>

      {/* {currentPage === 1 &&
        (questionOne?.[0]?.question_type === "questionImage_answersText" ? (
          <ArtistQuizQ1
            onNext={handleNextPage}
            quizQuestionsList={questionOne}
          />
        ) : questionOne?.[0]?.question_type === "questionText_answersImage" ? (
          <ArtistQuizQ2
            onNext={handleNextPage}
            quizQuestionsList={questionOne}
          />
        ) : questionOne?.[0]?.question_type === "questionText_answersText" ? (
          <ArtistQuizQ3
            onNext={handleNextPage}
            quizQuestionsList={questionOne}
          />
        ) : null)} */}

      {/* {currentPage === 1 &&
        shuffledQuizQuestionsList?.[0] &&
        createElement(components[shuffledQuizQuestionsList[0]?.question_type], {
          onNext: handleNextPage,
          quizQuestionsList: [shuffledQuizQuestionsList[0]],
        })} */}

      {/* {currentPage === 1 && */}
      {currentPage < 6 &&
        shuffledQuizQuestionsList?.[0] &&
        createElement(
          components[shuffledQuizQuestionsList[currentPage - 1]?.question_type],
          {
            onNext: handleNextPage,
            quizQuestionsList: [shuffledQuizQuestionsList[currentPage - 1]],
            keepScore: keepScore,
          }
        )}

      {currentPage === 6 && <p>Feedback page here</p>}

      {/* {currentPage === 2 && (
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
      )} */}
    </>
  );
}
