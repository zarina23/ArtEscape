import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
import Button from "@mui/material/Button";

function ArtistQuizQ1({ quizQuestionsList, onNext, keepScore }) {
  //We need to get the question from the quizQuestionsList which question_type is "questionImage_answersText"

  const [questionItemObject, setQuestionItemObject] = useState({});
  const [answerOptionsList, setAnswerOptionsList] = useState([]);
  const [shuffledAnswerOptionList, setShuffledAnswerOptionList] = useState([]);
  // setUserSelectedAnswer is called when user selects an answer BUT DOES NOT yet submit it
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  const [didCheck, setDidCheck] = useState(false);

  useEffect(() => {
    setDidCheck(false);
  }, [quizQuestionsList]);

  const filteredQuestion = quizQuestionsList?.filter(
    (questionObject) =>
      questionObject.question_type === "questionImage_answersText"
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

    // console.log(shuffledArray);
    setShuffledAnswerOptionList(shuffledArray);
  }

  useEffect(() => {
    // console.log(filteredQuestion);

    setQuestionItemObject(filteredQuestion?.[0]);
  }, [filteredQuestion]);

  useEffect(() => {
    setAnswerOptionsList([
      { optionAnswer: questionItemObject?.option0_text },
      { optionAnswer: questionItemObject?.option1_text },
      { optionAnswer: questionItemObject?.option2_text },
      { optionAnswer: questionItemObject?.option3_text },
    ]);
  }, [questionItemObject]);

  useEffect(() => {
    shuffleArray(answerOptionsList);
  }, [answerOptionsList]);

  //this function is called when user submits selected answer
  const handleCheck = () => {
    setDidCheck(true);

    const correctAnswer = filteredQuestion[0].option0_text;

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

      {/* Question Image */}
      <section className="questionImageContainer">
        <img
          src={questionItemObject?.question_image_url}
          alt=""
          className="questionImage"
        />
      </section>

      {/* Feedback */}

      <section className="feedbackContainer">
        {!didCheck ? null : userSelectedAnswer ===
          questionItemObject?.option0_text ? (
          <p className="feedbackTextPositive">Look at you go. Good job! </p>
        ) : (
          <p className="feedbackTextNegative">Oops! Wrong answer...</p>
        )}
      </section>

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
                  questionItemObject?.option0_text
                ? "success"
                : userSelectedAnswer !== questionItemObject?.option0_text &&
                  shuffledAnswerOptionObject?.optionAnswer ===
                    userSelectedAnswer
                ? "danger"
                : null
            }
          >
            <p className="answerOption">
              {shuffledAnswerOptionObject?.optionAnswer}
            </p>
          </div>
        ))}
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

export default ArtistQuizQ1;
