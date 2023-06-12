import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ArtistCard } from "../components/ArtistCard";
import { useState } from "react";

export function ArtistsList() {
  const [artists] = useState([
    { artistName: "Pablo Picasso" },
    { artistName: "Frida Kahlo" },
    { artistName: "Tamara de Lempicka" },
    { artistName: "Remedios Varo" },
    { artistName: "Mary Cassatt" },
    { artistName: "Hilma Af Klint" },
  ]); // fetch with database to get all artists array
  const navigate = useNavigate();
  const handleQuizClick = () => {
    navigate("/lectures/artists/quiz");
  };

  // const getArtists = async () => {
  //   try {
  //     const response = await fetch(``, {
  //       method: "GET",
  //     });
  //     const data = await response.json();
  //     setArtists(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <h3>Welcome to the Artists Route!</h3>
      <Button onClick={handleQuizClick}>Go to quiz</Button>
      <div>
        {artists.map((artist, id) => (
          <ArtistCard key={id} artistName={artist.artistName}></ArtistCard>
        ))}
      </div>
    </>
  );
}
