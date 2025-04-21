import React from "react";
import "../Body/Body.css";
import boy from "../Images/MicrosoftTeams-image (12)-PhotoRoom.png";
import fb from "../Images/facebook.png";
import insta from "../Images/instagram.png";
import linkedIn from "../Images/linkedin.png";
import git from "../Images/github.png";
import twitter from "../Images/twitter.png";
import wp from "../Images/whatsapp.png";
import cv from "../Body/Resume.pdf";
const Body=()=> {
  return (  
    <div className="body-main" id="Home">

          <div className="left">
            <label htmlFor="/"className="h1">Hey there, I'm <span className="name">Gourav</span></label>           
            <span className="h2">
              Developers write code to create digital products, while designers
              use their creative skills to design the look and feel of those
              products, including user interfaces and user experiences.I merged
              both into one.
            </span>
           
            <a href={cv} download>
              <button className="cv-button">Download CV</button>
            </a>
          </div>
         <div className="middle">
         <img src={boy} alt="/" className="boy" />
         </div>
          <div className="right">
              <a
                href="https://www.facebook.com/gourav.basak.5245"
                target="blank"
              >
                <img src={fb} alt="facebook" className="links" />
              </a>
              <a href="https://www.instagram.com/gourav_06_/" target="blank">
                <img src={insta} alt="instagram" className="links" />
              </a>
              <a
                href="https://www.linkedin.com/in/gourav-basak/"
                target="blank"
              >
                <img src={linkedIn} alt="Linkedin" className="links" />
              </a>
              <a href="https://github.com/gouravbasak" target="blank">
                <img src={git} alt="Github" className="links" />
              </a>
              <a href="https://twitter.com/GouravBasak4" target="blank">
                <img src={twitter} alt="Twitter" className="links" />
              </a>
              <a href="https://wa.me/7583998120" target="blank">
                <img src={wp} alt="Whatsapp" className="links" />
              </a>
          </div>       
      </div>
  
  );
}
export default Body;
