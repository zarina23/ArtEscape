import { useEffect, useState } from "react";

export function ArtistsQuizFinal() {
  const [finalQuizQuestionsList, setFinalQuizQuestionsList] = useState([]);

  const getFinalQuizQuestionsList = async () => {
    try {
      const response = await fetch(`/api/final_quiz`, {
        method: "GET",
      });

      const data = await response.json();
      setFinalQuizQuestionsList(data);
      console.log(data);

      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      // console.log(err.message);
    }
  };

  useEffect(() => {
    getFinalQuizQuestionsList();
  }, []);

  return (
    <>
      <h3>Artists Final Quiz</h3>
      <div className="artistsList">
        {finalQuizQuestionsList.map((final, id) => (
          <div key={id}>{final.question_text}</div>
        ))}
      </div>
    </>
  );
}
