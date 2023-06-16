import { useState, useEffect } from "react";
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
  const [questionItem, setQuestionItem] = useState({});

  const filteredQuestion = quizQuestionsList.filter(
    (questionObject) =>
      questionObject.question_type === "questionImage_answersText"
  );

  useEffect(() => {
    // const filteredQuestion = quizQuestionsList.filter(
    //   (questionObject) =>
    //     questionObject.question_type === "questionImage_answersText"
    // );

    console.log(filteredQuestion);
  }, [filteredQuestion]);

  return (
    <>
      {/* Question text */}
      <h3> {quizQuestionsList?.[0]?.question_text} </h3>

      {/* Question Image */}
      <div>
        <img src="" alt="" />
      </div>
    </>
  );
}

export default ArtistQuizQ1;
