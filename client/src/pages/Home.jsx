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
      <Button onClick={handleClick} variant="contained">
        Get started!
      </Button>
    </>
  );
}
