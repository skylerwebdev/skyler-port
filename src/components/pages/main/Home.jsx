import React from "react";
import '../../style/css/Home.css'
import profile from '../../images/profile.png'
const Home = () => {
  return (
    <div className='homemain'>
    <div className="homeMain">
      <div className="homeLeft"><img src={profile} alt="profile" className="profile"/></div>
      
      <div className="homeRight">
        <h1 className="Header">Skyler Dowdy</h1>
        <a href="https://resume.creddle.io/resume/edlcf7lr5ji" className="subheader">Check out My Resume</a>
        <p className="subHeader">"Always a work in progress!"</p>
        </div>
    </div>
    <div className="homeMid">
      <div className="homeMidLeft">
      <h1 className="header">About Me!</h1>
      I am a 32 years old, married for 13 wonderful years, and have 4 amazing children. I am from Texas but, currently living in Florida and definitely would love to re-locate back to the Dallas Fort-Worth Area. I am looking for a job in the tech industry as a Full-Stack web developer. I am fairly new to the industry but, I am a very quick learner. You can see more about my Skills and how to contact me by clicking those links. I look forward to talking with you. <p>Skyler Dowdy</p>
      </div>
      <div className="homeMidMid"><h1 className="header">Current Project</h1><ul className="aboutMe">
      <h3>"Team Lead" at Lambda School for a labs project</h3> <li className="listItem"> I am responsible for supervising 12 developers in the process of starting an app from the ground up.</li><li className="listItem"> Currently we have 12 student devlopers / designers on our team</li><li>2 UX Designers</li><li className="listItem"> Three Android developer using Kotlin</li><li>Two iOS developers using Swift</li> <li>Five Full Stack Web Developers building the frontend from React</li><li> Building the backend from Node and Apollo that is shared amongst the Android, iOS, and Web Teams</li></ul><h2 className='subhead'>See my projects section for more projects.</h2></div>
      </div>

</div>
    );
};

export default Home;
