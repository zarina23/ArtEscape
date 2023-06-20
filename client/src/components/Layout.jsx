import { Outlet } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  const handleLecturesClick = () => {
    navigate("/lectures");
  };

  const handleQuizClick = () => {
    navigate("lectures/artists/final_quiz");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              onClick={handleLogoClick}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              ArtEscape
            </Typography>
            <Button onClick={handleGalleryClick} color="inherit">
              Gallery
            </Button>
            <Button onClick={handleLecturesClick} color="inherit">
              Lectures
            </Button>
            <Button onClick={handleQuizClick} color="inherit">
              Quiz
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
