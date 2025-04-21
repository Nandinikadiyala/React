import "../About/About.css";
import React from "react";
import edu from "../Images/education.png";
import stack from "../Images/stack.png";
import cert from "../Images/certificate.png";
const About = () => {
  return (
    <div className="about-main"id="Body">
      <div className="about" >  
        <span className="a1">About Me</span>
      </div>
      <div className="card">
        <div className="cards">
          <img src={edu} alt="Education" className="cards-img" />
          <span className="c1">Lovely professional university</span>
          <span className="c2">B.Tech- CSE [2019-23]</span>
        </div>
        <div className="cards">
          <img src={stack} alt="stack" className="cards-img" />
          <span className="c1" id="c1">
            Tech Stack Proficient
          </span>
          <span className="c2">Web Dev, Android, Design</span>
        </div>
        <div className="cards">
          <img src={cert} alt="certification" className="cards-img" />
          <span className="c1" id="c1">
            Certification Complete
          </span>
          <span className="c2">Google UX, IBM Android, Blockchain</span>
        </div>
      </div>
    </div>
  );
};
export default About;
