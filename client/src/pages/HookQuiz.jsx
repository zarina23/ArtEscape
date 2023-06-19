import { useEffect, useState } from "react";

export function HookQuiz() {
  const [hookQuizQuestionsList, setHookQuizQuestionsList] = useState([]);

  const getHookQuizQuestionsList = async () => {
    try {
      const response = await fetch(`/api/hook_quiz`, {
        method: "GET",
      });
      const data = await response.json();
      setHookQuizQuestionsList(data);
      console.log(data);
      if (!response.ok) throw new Error(data.message);
    } catch (err) {
      // console.log(err.message);
    }
  };

  useEffect(() => {
    getHookQuizQuestionsList();
  }, []);

  return (
    <>
      <h3>Hook Quiz</h3>
      <div className="artistsList">
        {hookQuizQuestionsList.map((hook, id) => (
          <div key={id}>{hook.question_text}</div>
        ))}
      </div>
    </>
  );
}
