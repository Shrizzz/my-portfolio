import React from "react";

function Experience(props) {
  return (
    <div className="ExperienceSection">
      <div className="experience">
        <div className="experience-content">
          <img src={props.image} alt="" srcset="" className="experi-img" />
          <h5 className="experience-title">{props.title}</h5>
          <div className="aftereffect"></div>
          <p className="experience-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
