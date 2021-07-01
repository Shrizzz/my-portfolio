import React from "react";

function ContactSection(props) {
  return (
    <div className="contact-item">
      <div className="contact">
        <img src={props.icon} alt="" srcset="" />
        <div className="right-items">
          <h6>{props.title}</h6>
          <h6>{props.text1}</h6>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
