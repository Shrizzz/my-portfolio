import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Shrinidhi Shetti.</span>
        </h1>
        <p className="home-subtext">
          Currently Software Developer at Mindtree Ltd.
        </p>
        <div className="icons">
          <Link className="icon-head">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-head">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-head">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
