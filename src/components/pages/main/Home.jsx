import React from "react";
import '../../style/css/Home.css'
import profile from '../../images/profile.png'
const Home = () => {
  return (
    <div className="homeMain">
      <div className="homeLeft"><img src={profile} alt="profile" className="profile"/></div>
      
      <div className="homeRight">
        <h1 className="Header">Skyler Dowdy</h1>
        <a href="https://resume.creddle.io/resume/edlcf7lr5ji" className="subheader">Check out My Resume</a>
        <p className="subHeader">"Always a work in progress!"</p>
        </div>
    </div>
    );
};

export default Home;
