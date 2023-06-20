import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export function Lectures() {
  const navigate = useNavigate();

  const handleByArtistsClick = () => {
    navigate("/lectures/artists");
  };

  return (
    <Box sx={{ textAlign: "center", padding: 10 }}>
      <Box sx={{ padding: 2 }}>
        <Button
          sx={{
            maxWidth: "200px",
            minWidth: "200px",
          }}
          variant="contained"
          onClick={handleByArtistsClick}
        >
          By Artists
        </Button>
      </Box>
      {/* <Box sx={{ padding: 2 }}>
        <Button
          sx={{ maxWidth: "200px", minWidth: "200px" }}
          variant="contained"
          onClick={handleByPaintingsClick}
        >
          By Paintings
        </Button>
      </Box> 
      <Box sx={{ padding: 2 }}>
        <Button
          sx={{ maxWidth: "200px", minWidth: "200px" }}
          variant="contained"
        >
          By Periods
        </Button>
      </Box> */}
    </Box>
  );
}
