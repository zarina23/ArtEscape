import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © ArtEscape"}

      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/welcome");
  };
  return (
    <div className="bodyGetStarted">
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", justifyContent: "center" }}
        >
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            sx={{
              backgroundImage: "url(../images/artEscape.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} */}
          {/* > */}
          {/* <Box
                sx={{
                  marginTop: 50,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              > */}

          <section className="containerBtnGetStarted">
            <Button
              className="getStarted"
              onClick={handleClick}
              variant="contained"
              // sx={{ mt: 3, mb: 2, width: 250 }}
            >
              GET STARTED
            </Button>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </section>

          {/* </Box> */}
          {/* </Grid> */}
        </Grid>
      </ThemeProvider>
    </div>
  );
}
