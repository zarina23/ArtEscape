
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HookQuiz } from "./pages/HookQuiz";
import { Lectures } from "./pages/Lectures";
import { ArtistsList } from "./pages/ArtistsList";
import { ArtistsListQuiz } from "./pages/ArtistsListQuiz";
import { Artist } from "./pages/Artist";
import { ArtistQuiz } from "./pages/ArtistQuiz";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="hookQuiz" element={<HookQuiz />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="lectures/artists" element={<ArtistsList />} />
          <Route path="lectures/artists/quiz" element={<ArtistsListQuiz />} />
          <Route path="lectures/artists/:id" element={<Artist />} />
          <Route path="lectures/artists/:id/quiz" element={<ArtistQuiz />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
