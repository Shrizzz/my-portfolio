import React from "react";

function Title(props) {
  return (
    <div className="Title">
      <h3>
        {props.title}
        <span>{props.span}</span>
      </h3>
    </div>
  );
}

export default Title;
