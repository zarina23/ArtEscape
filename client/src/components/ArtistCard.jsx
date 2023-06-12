import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function ArtistCard({ artistName }) {
  const navigate = useNavigate();
  const handleArtistClick = (id) => {
    navigate(`/lecture/artists/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleArtistClick()}>
        {/* <CardMedia // artist picture
        //   sx={{ height: 140 }}
        //   image=""
        //   title=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {artistName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
