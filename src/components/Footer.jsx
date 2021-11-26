import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Contact from "../Contact";

const Footer = () => {
  const icon1Ref = useRef();
  const icon2Ref = useRef();
  const icon3Ref = useRef();
  const icon5Ref = useRef();
  const icon4Ref = useRef();

  useEffect(() => {
    gsap.from(icon1Ref.current, { y: 1600, delay: 1, duration: 1 });
    gsap.from(icon2Ref.current, { y: 1600, delay: 1.3, duration: 1 });
    gsap.from(icon3Ref.current, { y: 1600, delay: 1.6, duration: 1 });
    gsap.from(icon5Ref.current, { y: 1600, delay: 1.8, duration: 1 });
    gsap.from(icon4Ref.current, { x: 1100, delay: 2, duration: 2, ease: "bounce" });
  }, []);

  return (
    <div class="footer">
      <a ref={icon1Ref} className="soc" style={{ marginTop: "10px" }} href="https://www.instagram.com/simplycomplicatedphotography/">
        <i className=" soc bi bi-instagram"></i>
      </a>

      <a ref={icon2Ref} className="soc" style={{ marginTop: "10px" }} href="https://www.facebook.com/simplycomplicated.co.uk/">
        <i className=" soc bi bi-facebook"></i>
      </a>

      <a ref={icon3Ref} className="soc" style={{ marginTop: "10px" }} href="https://www.pinterest.co.uk/simpcomplicated/my-latest-pics/">
        <i className=" soc bi bi-pinterest"></i>
      </a>

      <span className="soc2" ref={icon5Ref}>
        <Contact />
      </span>
      <p ref={icon4Ref} className="rights">
        © {new Date().getFullYear()} by{" "}
        <a href="https://www.marcodallomo.com/" target="_blank" rel="noopener noreferrer" className="xsLink">
          Marco Dall'Omo
        </a>
      </p>
    </div>
  );
};

export default Footer;
