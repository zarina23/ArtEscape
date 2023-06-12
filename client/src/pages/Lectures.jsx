import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function Lectures() {
  return (
    <>
      <Box>
        <Button sx={{ maxWidth: "100px" }} variant="contained">
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
