import { Outlet } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export function Layout() {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  const handleLecturesClick = () => {
    navigate("/lectures/artists");
  };

  const handleQuizClick = () => {
    navigate("hook_quiz");
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
            <Tooltip title="Take a random quiz" arrow>
              <Button onClick={handleQuizClick} color="inherit">
                Play
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
