import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export function Gallery() {
  const [index, setIndex] = useState(-1);
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await fetch(`/api/artists`, {
          method: "GET",
        });
        const data = await response.json();
        const paintings = data.map((artist) => artist.selectedPaintings);
        const mappedPaintings = paintings.flat().map((painting) => {
          return {
            src: painting.image,
            width: painting.width,
            height: painting.height,
            title: `${painting.title} - ${painting.artistName} (${painting.year})`,
          };
        });
        const random = mappedPaintings.sort(() => 0.5 - Math.random());
        setPaintings(random);
      } catch (err) {
        console.log(err);
      }
    };
    getArtists();
  }, []);

  return (
    <div className="gallery">
      <PhotoAlbum
        photos={paintings}
        layout="columns"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={paintings}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
        captions={{
          descriptionTextAlign: "center",
        }}
      />
    </div>
  );
}
