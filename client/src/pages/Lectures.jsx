import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export function Lectures() {
  const navigate = useNavigate();
  const handleByArtistsClick = () => {
    navigate("/lectures/artists");
  };
  return (
    <>
      <Box>
        <Button
          sx={{ maxWidth: "100px" }}
          variant="contained"
          onClick={handleByArtistsClick}
        >
          By Artists
        </Button>
      </Box>
      <br />
      <Box>
        <Button sx={{ maxWidth: "100px" }} variant="contained">
          By Paintings
        </Button>
      </Box>
      <br />
      <Box>
        <Button sx={{ maxWidth: "100px" }} variant="contained">
          By Periods
        </Button>
      </Box>
    </>
  );
}
