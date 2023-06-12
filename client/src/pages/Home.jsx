import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/lectures");
  };
  return (
    <>
      <h1>ArtEscape</h1>
      <Button variant="contained">Get started - Hook Quiz</Button>
      <br />
      <br />
      <Button onClick={handleClick} variant="contained">
        Go to lectures
      </Button>
    </>
  );
}
