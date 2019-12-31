import React from "react";
import "../../style/css/Contact.css";
import ghlogo from "../../images/ghlogo.png";
import lilogo from "../../images/LI-Logo.png";
import twlogo from "../../images/twitter.svg";
import resume from "../../images/resume.png";
import ContactForm from "../../forms/ContactForm";

const Contact = () => {
  return (
   <>
   <div className="contactMain">
      <div className="contactLeft">
        <h1 className="name contInfo header">Skyler Dowdy</h1>
        <div className="contactShit">
          <h3 className="phone contInfo">(972)302-9966</h3>
          <h5 className="phone contInfo">(Call or Text)</h5>
          <h3 className="email contInfo">skylerwebdev@gmail.com</h3>
        </div>
      </div>
      <div className="contactMid">
        <h1 className="header">Check Out My Resume</h1>
        <a
          className="resume"
          target="_blank"
          href="https://resume.creddle.io/resume/edlcf7lr5ji"
        >
          <img src={resume} className="resume" alt="resume" />
        </a>
      </div>

      <div className="contactRight">
          <h1 className="header">Check Me Out</h1>
        <a href="https://github.com/skylerwebdev/">
          <img className="ghlogo" src={ghlogo} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/skylerwebdev/">
          <img className="lilogo" src={lilogo} alt="linkedin logo"></img>
        </a>
        <a href="https://twitter.com/skylerwebdev">
          <img className="twlogo" src={twlogo} alt="twitter logo" />
        </a>
      </div>
    </div>
    <div className="contactForm">
        <h1 className="header headerForm">Drop Me a Line</h1>
        <ContactForm /></div>
</>

  );
};
export default Contact;
