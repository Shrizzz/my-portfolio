import React from "react";
import about from "../img/about.jpg";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> Shrinidhi</span>
        </h4>
        <p className="about-text">
          Working at Mindtree Ltd. from the past last 2 years. I mainly focus on
          web development. Completed my Engineering at S.D.M. College.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className="right-section">
            <p>: Shrinidhi Shetti</p>
            <p>: 23</p>
            <p>: Indian</p>
            <p>: Kannada, Hindi, English</p>
            <p>: Keshwapur, Hubli, Karnataka</p>
            <p>: India</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
};

export default ImageSection;
