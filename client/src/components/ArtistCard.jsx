import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function ArtistCard(id) {
  const navigate = useNavigate();
  const handleArtistClick = (id) => {
    navigate(`/lecture/artists/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleArtistClick(id)}>
        <CardMedia // artist picture
        //   sx={{ height: 140 }}
        //   image=""
        //   title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artist Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
