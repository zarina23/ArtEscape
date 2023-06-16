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

  const [questionItem, setQuestionItem] = useState({});

  const filteredQuestion = quizQuestionsList.filter(
    (questionObject) =>
      questionObject.question_type === "questionImage_answersText"
  );

  useEffect(() => {
    console.log(filteredQuestion);

    setQuestionItem(filteredQuestion[0]);
  }, [filteredQuestion]);


  //next
  return (
    <div className="mainContainer">
      {/* Question text */}
      <h3 className="questionText"> {questionItem?.question_text} </h3>

      {/* Question Image */}
      <div className="questionImageContainer">
        <img
          src={questionItem?.question_image_url}
          alt=""
          className="questionImage"
        />
      </div>
    </div>
  );
}

export default ArtistQuizQ1;
