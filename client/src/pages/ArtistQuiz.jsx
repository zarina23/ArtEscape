import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistQuizQ1 from "../components/ArtistQuizQ1";

export function ArtistQuiz() {
  const [quizQuestionsList, setQuizQuestionsList] = useState([]);

  const { id } = useParams();

  const getQuizQuestionsList = async (id) => {
    try {
      const response = await fetch(`/api/artists/${id}/quiz`);
      const data = await response.json();
      setQuizQuestionsList(data);
      // console.log(data);

      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getQuizQuestionsList(id);
  }, []);

  return (
    <div>
      <h1>Artist Quiz</h1>
      <ArtistQuizQ1 quizQuestionsList={quizQuestionsList} />
    </div>
  );
}
