import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Menu = () => {
  let location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const titleRef = useRef();
  const menu1Ref = useRef();
  const menu2Ref = useRef();
  const menu3Ref = useRef();
  const menu4Ref = useRef();
  const menu5Ref = useRef();
  const menu6Ref = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, { x: 1600, delay: 1, duration: 1 });
    gsap.from(menu1Ref.current, { y: -400, delay: 1.2, duration: 1, rotate: -120 });
    gsap.from(menu2Ref.current, { y: -400, delay: 1.4, duration: 1, rotate: -120 });
    gsap.from(menu3Ref.current, { y: -400, delay: 1.6, duration: 1, rotate: -120 });
    gsap.from(menu4Ref.current, { y: -400, delay: 1.8, duration: 1, rotate: -120 });
    gsap.from(menu5Ref.current, { y: -400, delay: 2, duration: 1, rotate: -120 });
    gsap.from(menu6Ref.current, { y: -400, delay: 2.2, duration: 1, rotate: -120 });
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" expanded={expanded}>
      <Container style={{ backgroundColor: "#292b2c", display: "flex", justifyContent: "space-between" }}>
        <Navbar.Brand style={{ fontFamily: "Gluten, cursive", color: "lightblue" }}>
          <h1 ref={titleRef} className="mainTitle">
            Simply Complicated Ph<i className="bi bi-camera2"></i>tography
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle style={{ fontSize: "18px", color: "lightblue", border: "none", marginRight: "10px" }} aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
          Menu<span className="menuIcon">☰</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginBottom: "20px", fontFamily: "Gluten, cursive", backgroundColor: "#292b2c" }}>
            {location.pathname !== "/" && (
              <Link to="/">
                <h3 style={{ marginRight: "15px" }} ref={menu1Ref} className="tLink" onClick={() => setExpanded(false)}>
                  Home
                </h3>
              </Link>
            )}

            {location.pathname !== "/street" && (
              <Link to="/street">
                <h4 style={{ marginRight: "15px" }} ref={menu2Ref} className="tLink" onClick={() => setExpanded(false)}>
                  Street
                </h4>
              </Link>
            )}

            {location.pathname !== "/people" && (
              <Link to="/people">
                <h4 style={{ marginRight: "15px" }} ref={menu3Ref} className="tLink" onClick={() => setExpanded(false)}>
                  People
                </h4>
              </Link>
            )}

            {location.pathname !== "/stilllife" && (
              <Link to="/stilllife">
                <h4 style={{ marginRight: "15px" }} ref={menu4Ref} className="tLink" onClick={() => setExpanded(false)}>
                  StillLife
                </h4>
              </Link>
            )}

            {location.pathname !== "/random" && (
              <Link to="/random">
                <h4 style={{ marginRight: "15px" }} ref={menu5Ref} className="tLink" onClick={() => setExpanded(false)}>
                  Random
                </h4>
              </Link>
            )}

            {location.pathname !== "/green" && (
              <Link to="/green">
                <h4 style={{ marginRight: "15px" }} ref={menu6Ref} className="tLink" onClick={() => setExpanded(false)}>
                  Green
                </h4>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
