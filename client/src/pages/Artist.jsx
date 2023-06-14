import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Loading } from "../components/Loading";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import PaintingsCarousel from "../components/PaintingsCarousel";
import { autoPlay } from "react-swipeable-views-utils";

export function Artist() {
  const [artist, setArtist] = useState({});
  const [paintings, setPaintings] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  const paintingsSelection = [
    {
      artist: "frida-kahlo",
      selectedPaintings: [
        { contentId: 184936 },
        { contentId: 184938 },
        { contentId: 185011 },
        { contentId: 184943 },
        { contentId: 184989 },
        { contentId: 185009 },
        { contentId: 185005 },
        { contentId: 184935 },
        { contentId: 185000 },
        { contentId: 185006 },
      ],
    },
    
  ];

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "left",
  }));

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

  console.log(paintings);

  const gallerySelection = paintingsSelection.filter(
    (selection) => selection.artist === id
  );
  const selectedPaintings = gallerySelection[0].selectedPaintings;

  console.log(selectedPaintings);

  const selectedGalleryImages = [];

  paintings.forEach((painting) => {
    selectedPaintings.forEach((selectedPainting) => {
      painting.contentId === selectedPainting.contentId &&
        selectedGalleryImages.push(painting);
    });
  });

  console.log(selectedGalleryImages);

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              backgroundColor: "rgba(0,0,0,.6)",
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
                {/* <Typography variant="h6" color="inherit" paragraph>
                  {artist.OriginalArtistName}
                </Typography> */}
                {/* <Typography variant="h5" color="inherit" paragraph>
                  {`${artist.birthDayAsString} - ${artist.deathDayAsString}`}
                </Typography> */}
                <Typography variant="h5" color="inherit" paragraph></Typography>
              </Box>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Avatar
              sx={{ width: 200, height: 200, marginBottom: -7 }}
              alt={artist.artistName}
              src={artist.image}
            />
          </Stack>
        </Paper>
      )}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="BIO" {...a11yProps(0)} />
            <Tab label="PAINTINGS" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={6}>
              <Item>{`ORIGINAL NAME: ${artist.OriginalArtistName} `}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`NATIONALITY: Mexico `}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`YEAR OF BIRTH: ${artist.birthDayAsString} `}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`YEAR OF DEATH: ${artist.deathDayAsString} `}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>{`PICTORICAL STYLE: XXXXXXXXXXXXXX `}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>XXXXXX</Item>
            </Grid>
          </Grid>
          <br />
          <Paper sx={{ padding: 5, textAlign: "left" }}>
            {artist.biography}
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PaintingsCarousel paintings={selectedGalleryImages} />
        </TabPanel>
      </Box>
    </>
  );
}
