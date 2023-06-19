import { useState, useEffect } from "react";
import "./ArtistQuizQ1.css";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import { containerClasses } from "@mui/material";

function ArtistQuizQ1({ quizQuestionsList, onNext }) {
  //We need to get the question from the quizQuestionsList which question_type is "questionImage_answersText"

  const [questionItemObject, setQuestionItemObject] = useState({});
  const [answerOptionsList, setAnswerOptionsList] = useState([]);
  const [shuffledAnswerOptionList, setShuffledAnswerOptionList] = useState([]);
  const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState(false);
  // setUserSelectedAnswer is called when user selects an answer BUT DOES NOT yet submit it
  const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
  const [didCheck, setDidCheck] = useState(false);

  const filteredQuestion = quizQuestionsList.filter(
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

    console.log(shuffledArray);
    setShuffledAnswerOptionList(shuffledArray);
  }

  useEffect(() => {
    console.log(filteredQuestion);

    setQuestionItemObject(filteredQuestion[0]);
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

    //compare the correct answer to the option selected by user
    if (userSelectedAnswer === correctAnswer) {
      setIsUserAnswerCorrect(true);
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
          variant={!didCheck ? "contained" : "outlined"}
          onClick={handleCheck}
        >
          Check
        </Button>

        <Button onClick={didCheck ? onNext : null} variant={!didCheck ? "outlined" : "contained"}>
          Next
        </Button>

      </section>
    </div>
  );
}

export default ArtistQuizQ1;
