import React, { useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import { gsap } from "gsap";

const App = () => {
  const carouselRef = useRef();
  const introRef = useRef();

  useEffect(() => {
    gsap.from(carouselRef.current, { y: -1700, duration: 1.5, rotate: -90 });
    gsap.from(introRef.current, { x: 1000, duration: 1.5, rotate: 90 });
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={0}>
        <p></p>
      </Grid>

      <Grid item xs={1} lg={1}>
        <p></p>
      </Grid>

      <Grid ref={carouselRef} item xs={10} md={7}>
        <Carousel className="caro" fade indicators={false} controls={false} pause={false} interval={5000}>
          <Carousel.Item>
            <img className="d-block w-80" src="./peopleImagesbox/Food4ThoughtsPrint.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-80" src="./peopleImagesbox/vetrina.jpg" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-80" src="./peopleImagesbox/thewalk17.jpg" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-80" src="./streetImagesbox/RunByOrbit2021.jpg" alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-80" src="./peopleImagesbox/JamesStPaul.jpg" alt="" />
          </Carousel.Item>
        </Carousel>
      </Grid>

      <Grid ref={introRef} item xs={12} md={4}>
        <div className="intro">
          <h5 className="chapter"> My name is Marco and I am a London based photographer.</h5>

          <h5 className="chapter">I like to create striking images, by capturing the subject while adding my personal touch. </h5>
          <h5 className="chapter">I experiment blending movement with different angles and idle with distinctive colors...</h5>
          <img className="profile" src="./peopleImagesbox/me2.jpg" alt="test" width="80%vw" margingLeft="40px" />
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
