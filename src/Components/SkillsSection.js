import React from "react";

function SkillsSection(props) {
  return (
    <div className="SkillSection">
      <div className="skill-container">
        <h5 className="skill-title">{props.skill}</h5>
        <div className="skill-bar">
          <p className="skill-text">{props.progress}</p>
          <div className="skill-progress">
            <div className="progress">
              <div
                className="inner-progress"
                style={{ width: props.width }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
