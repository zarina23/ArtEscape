import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const HeroFrame = styled(Box)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('src/images/succession-1935.jpg!Large.jpg'), url('src/images/hilma-af-klint-svanen.jpg!Large.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "70vh",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  maxWidth: 400,
  margin: theme.spacing(2),
  boxShadow: "0 0 0px rgba(0, 1, 0.5, 0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Source Serif 4",
}));

// const Button = styled(Button)(({ theme }) => ({

// }));

const Spacer = styled(Box)(({ theme }) => ({
  backgroundColor: "beige",
  height: theme.spacing(-2),
}));

export function Welcome() {
  const navigate = useNavigate();

  const takeHookQuiz = () => {
    navigate("hook_quiz");
  };

  const goToGallery = () => {
    navigate("gallery");
  };

  return (
    <div>
      <HeroFrame>
        <TextContainer>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to ArtEscape
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Expand your art knowledge and navigate through the most beautiful
            paintings in the art history
          </Typography>
        </TextContainer>
        <TextContainer>
          <Typography variant="h6" align="center" gutterBottom>
            Take a first quick quiz and test your knowledge in art
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              size="large"
              onClick={takeHookQuiz}
              sx={{ marginRight: 2 }}
            >
              Start Quiz Now
            </Button>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="h6" align="center" gutterBottom>
            Go straight to the gallery and simply enjoy art!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button variant="contained" size="large" onClick={goToGallery}>
              Paintings Gallery
            </Button>
          </Box>
        </TextContainer>
      </HeroFrame>
      <Spacer />
      <TextContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Take a first quick quiz and test your knowledge in art!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          <Button
            variant="contained"
            size="large"
            onClick={takeHookQuiz}
            sx={{ marginRight: 0 }}
          >
            Start Quiz Now
          </Button>
        </Box>
      </TextContainer>
      <div>
      <TextContainer>
          <Typography variant="h4" align="left" gutterBottom>
            Go straight to the gallery and simply enjoy art!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
            <Button variant="contained" size="large" onClick={goToGallery}>
              Paintings Gallery
            </Button>
          </Box>
        </TextContainer>
        </div>

      {/* componente espacio para el footer */}
    </div>
  );
}
