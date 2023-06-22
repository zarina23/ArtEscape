import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HookQuiz } from "./pages/HookQuiz";
import { Welcome } from "./pages/Welcome";
import { ArtistsList } from "./pages/ArtistsList";
import { Artist } from "./pages/Artist";
import { ArtistQuiz } from "./pages/ArtistQuiz";
import { ArtistsQuizFinal } from "./pages/ArtistsQuizFinal";

import { Layout } from "./components/Layout";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="gallery" element={<Gallery />} />
          <Route path="hook_quiz" element={<HookQuiz />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="lectures/artists" element={<ArtistsList />} />
          <Route path="lectures/artists/:id" element={<Artist />} />
          <Route path="lectures/artists/:id/quiz" element={<ArtistQuiz />} />
          <Route
            path="lectures/artists/final_quiz"
            element={<ArtistsQuizFinal />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
