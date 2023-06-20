import { useState, useEffect } from "react";
import "./stylesheets/ArtistQuiz.css";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import { containerClasses } from "@mui/material";

function ArtistQuizQ2({ quizQuestionsList, onNext, keepScore }) {
  //We need to get the question from the quizQuestionsList which question_type is "questionText_answersImage"

  const [questionItemObject, setQuestionItemObject] = useState({});
  const [answerOptionsList, setAnswerOptionsList] = useState([]);
  const [shuffledAnswerOptionList, setShuffledAnswerOptionList] = useState([]);
  // const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState(false);
  // setUserSelectedAnswer is called when user selects an answer BUT DOES NOT yet submit it
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  const [didCheck, setDidCheck] = useState(false);

  useEffect(() => {
    setDidCheck(false);
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
    // console.log(shuffledArray);
    setShuffledAnswerOptionList(shuffledArray);
  }

  useEffect(() => {
    // console.log(filteredQuestion);

    setQuestionItemObject(filteredQuestion[0]);
  }, [filteredQuestion]);

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
    // console.log(userSelectedAnswer);
    setDidCheck(true);


    const correctAnswer = filteredQuestion[0].option0_image_url;

    console.log(correctAnswer);
    console.log(userSelectedAnswer);

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
