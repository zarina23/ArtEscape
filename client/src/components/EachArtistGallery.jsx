import { useState, useEffect, useRef } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function EachArtistGallery({ paintingsToBeDisplayed }) {
  const galleryRef = useRef();
  const [index, setIndex] = useState(-1);
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const paintings = paintingsToBeDisplayed;
    const mappedPaintings = paintings.map((painting) => {
      return {
        src: painting.image,
        width: painting.width,
        height: painting.height,
        title: `${painting.title} - ${painting.year}`,
      };
    });

    const random = mappedPaintings.sort(() => 0.5 - Math.random());
    setPaintings(random);
  }, [paintingsToBeDisplayed]);

  return (
    <div className="gallery" ref={galleryRef}>
      <PhotoAlbum
        photos={paintings}
        layout="columns"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        portal={{ root: galleryRef.current }}
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

export default EachArtistGallery;
