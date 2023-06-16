import { useState, useEffect } from "react";
import "./ArtistQuizQ1.css";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import { containerClasses } from "@mui/material";

function ArtistQuizQ1({ quizQuestionsList }) {
  //We need to get the question from the quizQuestionsList which question_type is "questionImage_answersText"

  const [questionItemObject, setQuestionItemObject] = useState({});
  const [answerOptionsList, setAnswerOptionsList] = useState([]);

  const filteredQuestion = quizQuestionsList.filter(
    (questionObject) =>
      questionObject.question_type === "questionImage_answersText"
  );

  useEffect(() => {
    // console.log(filteredQuestion);

    setQuestionItemObject(filteredQuestion[0]);

    // setAnswerOptionsList([
    //   { correctAnswer: questionItemObject?.option0_text },
    //   { optionAnswer1: questionItemObject?.option1_text },
    //   { optionAnswer2: questionItemObject?.option2_text },
    //   { optionAnswer3: questionItemObject?.option3_text },
    // ]);
  }, [filteredQuestion]);

  useEffect(() => {
    setAnswerOptionsList([
      { correctAnswer: questionItemObject?.option0_text },
      { optionAnswer1: questionItemObject?.option1_text },
      { optionAnswer2: questionItemObject?.option2_text },
      { optionAnswer3: questionItemObject?.option3_text },
    ]);
  }, [questionItemObject]);

  //next
  return (
    <div className="mainContainer">
      {/* Question text */}
      <h3 className="questionText"> {questionItemObject?.question_text} </h3>

      {/* Question Image */}
      <section className="questionImageContainer">
        <img
          src={questionItemObject?.question_image_url}
          alt=""
          className="questionImage"
        />
      </section>

      {/* Answer options */}
      <section className="answerOptionsContainer">
        <div>
          <p>{answerOptionsList?.[0].correctAnswer}</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default ArtistQuizQ1;
