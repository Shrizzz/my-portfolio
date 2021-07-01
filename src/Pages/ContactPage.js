import React from "react";
import ContactSection from "../Components/ContactSection";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="map-sect">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.6140980277696!2d75.15570010799998!3d15.364122897329983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d9fdbeb15cd7%3A0x4c9af09f5eec9d65!2sMadhura%20Colony%2C%20Badami%20Nagar%2C%20Hubli%2C%20Karnataka%20580023!5e0!3m2!1sen!2sin!4v1622551375885!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          tabIndex="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-section">
        <ContactSection icon={phone} text1={"+91 9482233735"} title={"Phone"} />
        <ContactSection icon={email} text1={"+91 9482233735"} title={"Email"} />
        <ContactSection
          icon={location}
          text1={"+91 9482233735"}
          title={"Location"}
        />
      </div>
    </div>
  );
}

export default ContactPage;
