import React from "react";
import "../Foot/Foot.css";
import pic from "../Images/pic2.png";
import insta from "../Images/instagram.png";
import fb from "../Images/facebook.png";
import git from "../Images/github.png";
import call from "../Images/phone-call.png";
import mail from "../Images/mail.png";
import map from "../Images/location.png";
const Foot = () => {
  return (
    <div className="foot-main" id="Contact">
      <div className="up">
        <div className="up-info">
          <span className="up-info-text">
            Get connected with me on social networks:
          </span>
        </div>
        <div className="up-link">
          <a href="https://www.facebook.com/gourav.basak.5245" target="blank">
            <img src={fb} alt="Facebook" className="uplinks" />
          </a>
          <a href="https://www.instagram.com/gourav_06_/" target="blank">
            <img src={insta} alt="Instagram" className="uplinks" />
          </a>
          <a href="https://github.com/gouravbasak" target="blank">
            <img src={git} alt="Github" className="uplinks" />
          </a>
        </div>
      </div>
      <div className="mid">
        <div className="m1">
          <div className="mid-about">
            <img src={pic} alt="/" className="pic" />
            <span className="a4">
              An engineer who doesn't have an eye <br /> for design is like a
              musician who can't hear .
            </span>
          </div>
          <div className="mid-info">
            <span className="a5">Contact information</span>
            <span className="a6">
              <a href="tel:8637866948">
                <img src={call} alt="+" className="midicon" />
              </a>
              8637866948
            </span>
            <span className="a6">
              <a href="mailto: gouravbasak248@gmail.com">
                <img src={mail} alt="/" className="midicon" />
              </a>
              gouravbasak248@gmail.com
            </span>
            <span className="a6">
              <a href="https://goo.gl/maps/wqjNcLJr9gxnH3Z16" target="blank">
                <img src={map} alt="/" className="midicon" />
              </a>
              Sector126,Noida, India
            </span>
          </div>
        </div>
        <div className="m2">
          <div className="mid-contact">
            <div className="con-head">
              <span className="a7">Contact Me</span>
            </div>
            <form
              className="form"
              action="https://formspree.io/f/mqkojyrz"
              method="POST"
            >
              <div className="formip">
                <input
                  type="text"
                  name="sendername"
                  placeholder=" Your Name"
                  className="ip"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder=" Your Email id"
                  className="ip"
                  required
                />
                <br />
                <input
                  type="Phone"
                  name="Contact no"
                  placeholder=" Contact Number"
                  className="ip"
                  required
                />
                <input
                  type="textarea"
                  name="Reasons"
                  placeholder=" Reason For Contact"
                  className="ip"
                  autoComplete="off"
                />
                <br />
              </div>
              <div className="sb">
                <input type="submit" className="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="low">
        <span className="rights">
          Copyright ©2023 All rights reserved - made by
          <span
            style={{
              color: "red",
              fontFamily: "Coming Soon",
              background: "#070101",
            }}
          >
            Gourav basak
          </span>
        </span>
      </div>
    </div>
  );
};
export default Foot;
