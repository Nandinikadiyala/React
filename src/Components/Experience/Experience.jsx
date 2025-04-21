import React from "react";
import "../Experience/Experience.css";
import mdb from "../Images/mongodb.png";
import ex from "../Images/express-js.png";
import rjs from "../Images/react.png";
import node from "../Images/node.png";
import java from "../Images/java.png";
import flutter from "../Images/flutter.png";
import figma from "../Images/figma.png";
import bootsrp from "../Images/bootstrap.png";
import web from "../Images/webicon.png";
import android from "../Images/androidicon.png";
import design from "../Images/deignicon.png";
export default function Experience() {
  return (
    <div className="exp-main" id="Experties">
      <div className="exp-banner">
        <span className="a2">My Expertise</span>
      </div>
       <div className="exp-col">
        <div className="col1">
          <div className="domain">
            <img src={web} alt="/" className="e-icon" />
            <span className="e1">Web Developer</span>
          </div>
          <div className="domain">
            <img src={android} alt="/" className="e-icon" />
            <span className="e1">Android Developer</span>
          </div>
          <div className="domain">
            <img src={design} alt="" className="e-icon" />
            <span className="e1"> Design</span>
          </div>
        </div>
        <div className="col2">
          <span className="stack">MERN</span>
          <span className="stack">Native Cross</span>
          <span className="stack">Figma Bootstrap</span>
        </div>
        <div className="col3">
          <div className="tool">
            <img src={mdb} alt="Mongodb" className="tools" />
            <img src={ex} alt="Express Js" className="tools" />
            <img src={rjs} alt="React Js" className="tools" />
            <img src={node} alt="Node Js" className="tools" />
          </div>
          <div className="tool">
            <img src={java} alt="Java" className="tools" />
            <img src={flutter} alt="Flutter" className="tools" />
          </div>
          <div className="tool">
            <img src={figma} alt="Figma" className="tools" />
            <img src={bootsrp} alt="Bootstrap" className="tools" />
          </div>
        </div>
      </div> 
    </div>
  );
}
