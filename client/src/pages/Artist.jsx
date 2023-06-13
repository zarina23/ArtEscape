import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Loading } from "../components/Loading";

export function Artist() {
  const [artist, setArtist] = useState({});
  const [paintings, setPaintings] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArtistAndPaintingsDetails(id);
  }, [id]);

  const getArtistAndPaintingsDetails = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/artists/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setArtist(data.artist);
      setPaintings(data.paintings);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Paper
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${paintings?.[0]?.image})`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {artist.artistName}
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  {artist.OriginalArtistName}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {`${artist.birthDayAsString} - ${artist.deathDayAsString}`}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {console.log(paintings)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}
