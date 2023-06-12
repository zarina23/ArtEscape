import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/hookQuiz" element={<HookQuiz />} />
        <Route path="/hookQuiz" element={<HookQuizFeedback />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/lectures/artists" element={<ArtistsList />} />
        <Route path="/lectures/artists/quiz" element={<ArtistsListQuiz />} />
        <Route
          path="/lectures/artists/quizFeedback"
          element={<ArtistsListQuizFeedback />}
        />
        <Route path="/lectures/artists/:id" element={<Artist />} />
        <Route path="/lectures/artists/:id/quiz" element={<ArtistQuiz />} />
        <Route
          path="/lectures/artists/:id/quizFeedback"
          element={<ArtistQuizFeedback />}
        />
      </Routes>
    </>
  );
}

export default App;
