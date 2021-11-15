import React, { useState, useCallback, useEffect, useRef } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos_green } from "./images_coord/photos_green";
import { gsap } from "gsap";

function Green() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //gsap animation////

  const galleryRef = useRef();

  useEffect(() => {
    gsap.from(galleryRef.current, { x: -2500, duration: 1.5 });
  }, []);

  //gsap animation////

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div ref={galleryRef} className="galleryDiv" style={{ backgroundColor: "#292b2c" }}>
      <Gallery photos={photos_green} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos_green.map((x) => ({
                ...x,
                srcset: x.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Green;
