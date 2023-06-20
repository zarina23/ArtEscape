import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function ArtistCard({ artist, id }) {
  const navigate = useNavigate();

  const handleArtistClick = (id) => {
    navigate(`/lectures/artists/${id}`);
  };

  return (
    <div className="artistsRoute">
      <Card
        sx={{
          maxHeight: 300,
          maxWidth: 500,
          textAlign: "right",
          pl: 0,
          pr: 0,
        }}
      >
        <CardActionArea
          sx={{ display: "flex", maxWidth: 500, minWidth: 400 }}
          onClick={() => handleArtistClick(id)}
        >
          <CardMedia // artist picture
            component="img"
            sx={{
              maxWidth: 100,
              maxHeight: 100,
              minWidth: 100,
              minHeight: 100,
            }}
            image={artist.profileImage}
            alt={artist.artistName}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {artist.artistName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
