import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ArtistCard } from "../components/ArtistCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function ArtistsList() {
  const [artists, setArtists] = useState([]); // fetch with database to get all artists array
  const navigate = useNavigate();

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    try {
      const response = await fetch(`/api/artists`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(response);
      setArtists(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuizClick = () => {
    navigate("/lectures/artists/quiz");
  };

  return (
    <>
      <Box sx={{ justifyContent: "center" }}>
        <br />
        <Typography
          sx={{ textAlign: "center" }}
          variant="h5"
          color="inherit"
          paragraph
        >
          WELCOME TO THE ARTISTS ROUTE
        </Typography>
        <Button onClick={handleQuizClick}>Go to quiz</Button>
        <div className="artistsList">
          {artists.map((artist, id) => (
            <ArtistCard
              key={id}
              id={artist.key}
              artistName={artist.name}
              artistImage={artist.image}
            ></ArtistCard>
          ))}
        </div>
      </Box>
    </>
  );
}
