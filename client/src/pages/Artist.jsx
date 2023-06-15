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
        {
          image:
            "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/me-and-my-parrots-1941.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/two-women-1929.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/my-grandparents-my-parents-and-me-1936.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/sun-and-life-1947.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/moses-1945.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-love-embrace-of-the-universe-the-earth-mexico-myself-diego-and-señor-xólotl-1949.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-dream-the-bed-1940.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/the-two-fridas-1939.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calderón-de-rivera/marxism-will-give-health-to-the-sick-1954.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "tamara-de-lempicka",
      selectedPaintings: [
        {
          image:
            "https://uploads6.wikiart.org/images/tamara-de-lempicka/portrait-in-the-green-bugatti-1925.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/tamara-de-lempicka/portrait-of-marquis-sommi-1925.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/tamara-de-lempicka/girl-with-gloves-1929.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/kizette-on-the-balcony-1927.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/double-47.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/images/tamara-de-lempicka/andromeda-1929.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/tamara-de-lempicka/portrait-of-ira-p-1930.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/tamara-de-lempicka/nude-with-dove-1928.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/tamara-de-lempicka/portrait-of-dr-boucard-1929.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/tamara-de-lempicka/the-marquis-d-afflitto-on-a-staircase-1926.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "emma-amos",
      selectedPaintings: [
        {
          image:
            "https://uploads7.wikiart.org/00335/images/emma-amos/three-figures-1966.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/00335/images/emma-amos/fanny-mae-1965.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/00335/images/emma-amos/22-and-cheetah-1983.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/00335/images/emma-amos/equals-1992.png!Large.png",
        },
        {
          image:
            "https://uploads2.wikiart.org/00335/images/emma-amos/identity-2006.png!Large.png",
        },
        {
          image:
            "https://uploads8.wikiart.org/00335/images/emma-amos/does-black-rub-off-question-mark-1992.png!Large.png",
        },
        {
          image:
            "https://uploads6.wikiart.org/00335/images/emma-amos/malcom-x-morley-matisse-and-me-1993.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/00335/images/emma-amos/seated-figure-and-nude-1966.png!Large.png",
        },
        {
          image:
            "https://uploads4.wikiart.org/00335/images/emma-amos/head-first-2006.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/00335/images/emma-amos/without-feather-boa-1965.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "mary-cassatt",
      selectedPaintings: [
        {
          image:
            "https://uploads3.wikiart.org/images/mary-cassatt/at-the-theater-1879.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/the-flirtation-a-balcony-in-seville-1872.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/mary-cassatt/maternity.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/mary-cassatt/susan-comforting-the-baby-no-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/mary-cassatt/young-woman-sewing-in-the-garden-1886.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/baby-in-his-mother-s-arms-sucking-his-finger-1889.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/mary-cassatt/mother-and-child-1890.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/mary-cassatt/mother-holding-a-child-in-her-arms.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/mary-cassatt/baby-s-first-cess-1891.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads1.wikiart.org/images/mary-cassatt/mothers-kiss-1891.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "hilma-af-klint",
      selectedPaintings: [
        {
          image:
            "https://uploads6.wikiart.org/00287/images/hilma-af-klint/hilma-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/they-tens-mainstay-iv-1907.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/de-tio-st-rsta-n-2-barnaaldern-1907.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/hilma-af-klint/untitled.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/hilma-af-klint/the-ten-largest-1907.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/hilma-af-klint/svanen-1914.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/hilma-af-klint/wheat-and-wormwood-1922.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/hilma-af-klint/untitled(3).jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/hilma-af-klint/untitled(5).jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/00140/images/hilma-af-klint/hilma-af-klint-svanen.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "pablo-picasso",
      selectedPaintings: [
        {
          image:
            "https://uploads7.wikiart.org/images/pablo-picasso/the-soup-1903.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/pablo-picasso/madeleine-1904.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/images/pablo-picasso/crying-woman-1937-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/pablo-picasso/sleeping-woman-meditation-1904.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/images/pablo-picasso/portrait-of-marie-th%C3%A9r%C3%A8se-walter-1937.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/pablo-picasso/leaning-woman-1937.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/pablo-picasso/portrait-of-dora-maar-1937.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/pablo-picasso/the-ironer-1904.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/pablo-picasso/woman-with-raven-1904-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/pablo-picasso/a-horsewoman-1905.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "salvador-dali",
      selectedPaintings: [
        {
          image:
            "https://uploads2.wikiart.org/images/salvador-dali/the-discovery-of-america-by-christopher-columbus-1959.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/the-vertebrated-cavern-series-of-decals.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/salvador-dali/space-elephant.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/cygnes-refletant-des-elephants.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/salvador-dali/the-sublime-moment.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/salvador-dali/geopolitical-child-watching-the-birth-of-the-new-man-1943.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/salvador-dali/fountain-of-milk-spreading-itself-uselessly-on-three-shoes.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/salvador-dali/portrait-of-mrs-mary-sigall.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/00153/images/salvador-dali/leda-atomica.jpeg!Large.jpeg",
        },
      ],
    },
    {
      artist: "wassily-kandinsky",
      selectedPaintings: [
        {
          image:
            "https://uploads2.wikiart.org/images/wassily-kandinsky/moscow-i-1916.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/wassily-kandinsky/blue-mountain-1908.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/wassily-kandinsky/to-the-unknown-voice-1916.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/wassily-kandinsky/red-oval-1920.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/wassily-kandinsky/small-worlds-ii-1922.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads1.wikiart.org/00280/images/wassily-kandinsky/37-262-ph-web-1-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/images/wassily-kandinsky/small-dream-in-red-1925.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads0.wikiart.org/images/wassily-kandinsky/several-circles-1926.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/wassily-kandinsky/accent-on-rose-1926.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/images/wassily-kandinsky/succession-1935.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "leonardo-da-vinci",
      selectedPaintings: [
        {
          image:
            "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/madonna-and-the-child-c-1490.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads3.wikiart.org/00142/images/57726d85edc2cb3880b48ccd/leonardo-da-vinci-virgin-of-the-rocks-national-gallery-london.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/00339/images/leonardo-da-vinci/the-baptism-of-christ-c-1475.png!Large.png",
        },
        {
          image:
            "https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads6.wikiart.org/images/leonardo-da-vinci/head-of-a-young-woman-with-tousled-hair-leda.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/00302/images/leonardo-da-vinci/la-bella-principessa-portrait-of-bianca-sforza.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/leonardo-da-vinci/heads-of-an-old-man-and-a-youth.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/leonardo-da-vinci/leda-and-the-swan-1.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads8.wikiart.org/images/leonardo-da-vinci/allegory-with-wolf-and-eagle.jpg!Large.jpg",
        },
      ],
    },
    {
      artist: "ivan-aivazovsky",
      selectedPaintings: [
        {
          image:
            "https://uploads8.wikiart.org/00129/images/ivan-aivazovsky/the-ninth-wave.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/images/ivan-aivazovsky/lunar-night-on-the-black-sea-1859.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-1849.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/ivan-aivazovsky/ships-at-anchor-1851.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/ivan-aivazovsky/view-of-constantinople-1851.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/ivan-aivazovsky/fishermen-on-the-coast-of-the-sea-1852.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/images/ivan-aivazovsky/after-the-storm-1854.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads2.wikiart.org/00342/images/ivan-aivazovsky/aivazovsky-view-of-constantinople-and-the-bosphorus.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads5.wikiart.org/images/ivan-aivazovsky/sunset-at-sea-1856.jpg!Large.jpg",
        },
        {
          image:
            "https://uploads7.wikiart.org/00279/images/ivan-aivazovsky/336666.jpeg!Large.jpeg",
        },
      ],
    },

    // {
    //   artist: "mary-cassatt",
    //   selectedPaintings: [
    //     { contentId: 190381 },
    //     { contentId: 190232 },
    //     { contentId: 190141 },
    //     { contentId: 190358 },
    //     { contentId: 190443 },
    //     { contentId: 190146 },
    //     { contentId: 190241 },
    //     { contentId: 190261 },
    //     { contentId: 190150 },
    //     { contentId: 190271 },
    //   ],
    // },
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
      painting.image === selectedPainting.image &&
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
