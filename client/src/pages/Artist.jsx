import { useEffect, useState, useRef } from "react";
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
import EachArtistGallery from "../components/EachArtistGallery";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export function Artist() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [paintings, setPaintings] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null);
  const [value2, setValue2] = useState(0);

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0.8),
    textAlign: "center",
    fontFamily: "Source Serif 4",
  }));

  // useEffect(() => {
  //   ref.current.ownerDocument.body.scrollTop = 0;
  // }, [value]);

  useEffect(() => {
    const getPaintings = async (id) => {
      try {
        const response = await fetch(`/api/paintings/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        setPaintings(data);
      } catch (err) {
        console.log(err);
      }
    };

    const getArtist = async (id) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/artists/${id}`, {
          method: "GET",
        });
        const data = await response.json();
        setArtist(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getArtist(id);
    getPaintings(id);
  }, [id]);

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
  const handleBackClick = () => {
    navigate(`/lectures/artists`);
  };

  return (
    <>
      {" "}
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
              backgroundImage: `url(${artist.coverImage})`,
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
                width: "calc(100% - 48px)",
                maxWidth: 800,
              }}
            >
              <Typography component="h1" variant="h3" color="inherit">
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
                src={artist.profileImage}
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
                maxWidth: "750px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <Button
                  sx={{
                    width: "130px",
                    mt: 1,
                    mb: 3,
                    ml: 2,
                    mr: 2,
                    textAlign: "center",
                  }}
                  variant="contained"
                  onClick={handleQuizClick}
                >
                  Go To Quiz
                </Button>
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
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                  sx={{ marginTop: "2px" }}
                >
                  <Grid item xs={6} sx={{ padding: 0 }}>
                    <Item>{<strong>ORIGINAL NAME</strong>}</Item>
                    <Item>
                      {artist.OriginalArtistName
                        ? artist.OriginalArtistName
                        : artist.artistName}
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>{<strong>NATIONALITY</strong>}</Item>
                    <Item>{artist.nationality}</Item>
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
                    <Item>{artist.style}</Item>
                  </Grid>
                </Grid>
                <br />
                <div className="bio">
                  <div>
                    {showMore
                      ? ReactHtmlParser(artist.bio)
                      : ReactHtmlParser(artist.firstParagraph)}
                  </div>
                  <Button
                    sx={{ float: "right", mt: 2.5 }}
                    onClick={handleClick}
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <EachArtistGallery paintingsToBeDisplayed={paintings} />
              </TabPanel>
              <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper
                  sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                  elevation={3}
                ></Paper>
                <Button
                  variant="contained"
                  sx={{ float: "right", mt: 1, mr: 2 }}
                  onClick={handleBackClick}
                >
                  Go Back To Artists
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}
