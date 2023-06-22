import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
import Button from "@mui/material/Button";

function ArtistQuizQ2({ quizQuestionsList, onNext, keepScore }) {
  //We need to get the question from the quizQuestionsList which question_type is "questionText_answersImage"

  const [questionItemObject, setQuestionItemObject] = useState({});
  const [answerOptionsList, setAnswerOptionsList] = useState([]);
  const [shuffledAnswerOptionList, setShuffledAnswerOptionList] = useState([]);
  // setUserSelectedAnswer is called when user selects an answer BUT DOES NOT yet submit it
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  const [didCheck, setDidCheck] = useState(false);

  //need to set didCheck back to false because it stays true if the same component is passed twice in a row
  //we want to set it to false when NEW props are passed, i.e. new question is shown
  useEffect(() => {
    setDidCheck(false);
    setQuestionItemObject(filteredQuestion?.[0]);
  }, [quizQuestionsList]);

  const filteredQuestion = quizQuestionsList.filter(
    (questionObject) =>
      questionObject.question_type === "questionText_answersImage"
  );

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    
    setShuffledAnswerOptionList(shuffledArray);
  }

  useEffect(() => {
    setAnswerOptionsList([
      { optionAnswer: questionItemObject?.option0_image_url },
      { optionAnswer: questionItemObject?.option1_image_url },
      { optionAnswer: questionItemObject?.option2_image_url },
      { optionAnswer: questionItemObject?.option3_image_url },
    ]);
  }, [questionItemObject]);

  useEffect(() => {
    shuffleArray(answerOptionsList);
  }, [answerOptionsList]);

  //this function is called when user submits selected answer
  const handleCheck = () => {
    setDidCheck(true);

    const correctAnswer = filteredQuestion[0].option0_image_url;

    //compare the correct answer to the option selected by user and update score
    if (userSelectedAnswer === correctAnswer) {
      keepScore(1);
    } else {
      keepScore(0);
    }
  };

  //next
  return (
    <div className="mainContainer">
      {/* Question text */}
      <p className="questionText"> {questionItemObject?.question_text} </p>

      {/* Answer options */}
      <section className="answerOptionsContainer">
        {shuffledAnswerOptionList.map((shuffledAnswerOptionObject, i) => (
          <div
            onClick={
              !didCheck
                ? () =>
                    setUserSelectedAnswer(
                      shuffledAnswerOptionObject.optionAnswer
                    )
                : null
            }
            key={i}
            className={
              !didCheck
                ? shuffledAnswerOptionObject?.optionAnswer ===
                  userSelectedAnswer
                  ? "selected"
                  : null
                : shuffledAnswerOptionObject?.optionAnswer ===
                  questionItemObject?.option0_image_url
                ? "success"
                : userSelectedAnswer !==
                    questionItemObject?.option0_image_url &&
                  shuffledAnswerOptionObject?.optionAnswer ===
                    userSelectedAnswer
                ? "danger"
                : null
            }
          >
            <img
              className="answerOptionUrl"
              src={shuffledAnswerOptionObject?.optionAnswer}
            />
          </div>
        ))}
      </section>

      {/* Feedback */}

      <section className="feedbackContainer">
        {!didCheck ? null : userSelectedAnswer ===
          questionItemObject?.option0_image_url ? (
          <p className="feedbackTextPositive">Look at you go. Good job! </p>
        ) : (
          <p className="feedbackTextNegative">Oops! Wrong answer...</p>
        )}
      </section>

      {/* action buttons */}
      <section className="buttonGroup">
        <Button
          variant={!didCheck && userSelectedAnswer ? "contained" : "outlined"}
          onClick={!didCheck && userSelectedAnswer ? handleCheck : null}
        >
          Check
        </Button>

        <Button
          onClick={didCheck ? onNext : null}
          variant={!didCheck ? "outlined" : "contained"}
        >
          Next
        </Button>
      </section>
    </div>
  );
}

export default ArtistQuizQ2;
