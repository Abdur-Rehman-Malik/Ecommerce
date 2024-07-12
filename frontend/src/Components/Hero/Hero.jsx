import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow_icon.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrivals</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="" height={50} />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-button">
            <div>Latest Colletion</div>
            <img src={arrow_icon} alt="" height={30} />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" height={600} />
        </div>
      </div>
    </>
  );
};

export default Hero;
