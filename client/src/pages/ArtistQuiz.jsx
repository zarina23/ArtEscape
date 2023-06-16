import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArtistQuizQ1 from '../components/ArtistQuizQ1';

export function ArtistQuiz() {
  return (
    <div>
      <h1>Artist Quiz</h1>
      <ArtistQuizQ1 />
    </div>
  );
}