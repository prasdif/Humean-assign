import React, { useEffect } from "react";
import "./index.scss";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero h1", { opacity: 0, y: 40, duration: 1, ease: "power3.out" });
    gsap.from(".hero button", { opacity: 0, scale: 0.9, delay: 0.5, duration: 1, ease: "back.out(1.7)" });
    gsap.from(".hero .update", { opacity: 0, y: 20, delay: 1, duration: 1 });
  }, []);

  return (
    <section className="hero">
      <img
        className="chrome-icon"
        src="https://res.cloudinary.com/dztmp3saa/image/upload/v1757855200/new_u68tex.svg"
        alt="Chrome"
      />
      <h1 className="hero-heading">The browser<br />built to be yours</h1>

      <button className="download-btn">Download Chrome</button>

      <p className="update">I want to update Chrome</p>

      <p className="system">For Windows 11/10 64-bit</p>
    </section>
  );
};

export default Hero;
