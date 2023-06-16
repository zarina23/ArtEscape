import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import PaintingsCarousel from "../components/PaintingsCarousel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Artist() {
  const [artist, setArtist] = useState({});
  const [artistStaticData, setArtistStaticData] = useState({});
  const [paintings, setPaintings] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0.8),
    textAlign: "center",
    fontFamily: "Source Serif 4",
  }));

  useEffect(() => {
    getArtistAndPaintingsDetails(id);
    getArtists();
  }, [id]);

  const getArtists = async () => {
    try {
      const response = await fetch(`/api/artists`, {
        method: "GET",
      });
      const data = await response.json();
      const staticArtist = data.filter((artist) => artist.key === id);
      setArtistStaticData(staticArtist[0]);
    } catch (err) {
      console.log(err);
    }
  };

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

  const paintingsPerArtist = artistStaticData.selectedPaintings;

  const selectedGalleryImages = [];

  paintings.forEach((painting) => {
    paintingsPerArtist.forEach((selectedPainting) => {
      painting.title === selectedPainting.title &&
        selectedGalleryImages.push(painting);
    });
  });

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

  const handleQuizClick = () => {
    navigate(`/lectures/artists/${id}/quiz`);
  };

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${artistStaticData.coverImage})`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.5)",
              }}
            />
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                width: 800,
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
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Avatar
                sx={{ width: 200, height: 200, marginBottom: -7, border: 5 }}
                alt={artist.artistName}
                src={artistStaticData.profileImage}
              />
            </Stack>
          </Paper>
          <Box
            sx={{
              marginTop: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "850px",
                width: "100%",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="BIO" {...a11yProps(0)} />
                  <Tab label="PAINTINGS" {...a11yProps(1)} />
                  <Button
                    sx={{
                      width: "150px",
                      mt: 2,
                      mb: 2,
                      ml: 65,
                    }}
                    variant="contained"
                    onClick={handleQuizClick}
                  >
                    {`go to quiz`}
                  </Button>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                  sx={{ marginTop: "2px" }}
                >
                  <Grid item xs={6} sx={{ padding: 0 }}>
                    <Item>{<strong>ORIGINAL NAME</strong>}</Item>
                    <Item>{artist.OriginalArtistName}</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>{<strong>NATIONALITY</strong>}</Item>
                    <Item>{artistStaticData.nationality}</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>{<strong>DATE OF BIRTH</strong>}</Item>
                    <Item>{artist.birthDayAsString}</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>{<strong>DATE OF DEATH</strong>}</Item>
                    <Item>{artist.deathDayAsString}</Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>{<strong>ART MOVEMENT </strong>}</Item>
                    <Item>{artistStaticData.style}</Item>
                  </Grid>
                </Grid>
                <br />
                <div className="bio">
                  <div
                    dangerouslySetInnerHTML={
                      showMore
                        ? { __html: artistStaticData.bio }
                        : { __html: artistStaticData.firstParagraph }
                    }
                  ></div>
                  <Button
                    sx={{ float: "right", mt: 2.5 }}
                    onClick={handleClick}
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PaintingsCarousel paintings={selectedGalleryImages} />
              </TabPanel>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}
