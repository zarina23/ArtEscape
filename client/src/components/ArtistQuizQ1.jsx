import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { containerClasses } from "@mui/material";

function ArtistQuizQ1({}) {
  const theme = useTheme();

  return (
    <Box >
      <Paper >
        <Typography>{/* question? */}</Typography>
      </Paper>
      <Box
       
      >
        <img
        
        />
      </Box>
      <MobileStepper
        
        nextButton={
          <Button
            size="small">
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          
          </Button>
        }
      />
    </Box>
  );
}

export default ArtistQuizQ1;
