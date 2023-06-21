import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ArtistCard } from "../components/ArtistCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import "../components/stylesheets/ArtistQuiz.css";

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
      setArtists(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuizClick = () => {
    navigate("/lectures/artists/final_quiz");
  };

  const handleButtonHover = () => {};

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ padding: 1 }}>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h5"
          color="inherit"
          paragraph
        >
          <h3 className="artistQuizHeader">
            Your Learning Journey: Discover and Explore the World of Artists
          </h3>
        </Typography>
        <Tooltip
          title="Feeling ready to test your knowledge?"
          placement="top-end"
          arrow
        >
          <Button
            sx={{ maxWidth: "400px", minWidth: "200px", mt: 0 }}
            variant="contained"
            onClick={handleQuizClick}
          >
            Test your knowledge of artists
          </Button>
        </Tooltip>
      </Box>
      <div className="artistsList">
        {artists.map((artist, id) => (
          <ArtistCard key={id} id={artist.id} artist={artist}></ArtistCard>
        ))}
      </div>

      <Tooltip
        title="Feeling ready to test your knowledge?"
        placement="top-end"
        arrow
      >
        <Button
          sx={{ maxWidth: "400px", minWidth: "200px", mb: 3 }}
          variant="contained"
          onClick={handleQuizClick}
        >
          Test your knowledge of artists
        </Button>
      </Tooltip>
    </Box>
  );
}
