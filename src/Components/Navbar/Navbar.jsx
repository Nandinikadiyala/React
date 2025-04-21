import React from "react";
import "../Navbar/Navbar.css";
import logo from "../Images/logo.png";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="logo">
        <ScrollLink to="Home" smooth={true} duration={700} offset={-1450}>
          <img src={logo} alt="Gourav." className="logo-pic" />
        </ScrollLink>
      </div>
      <div className="item">
        <nav className="items" >
          <ScrollLink to="Body" smooth={true} duration={700} offset={-100}>
            <li>About</li>
          </ScrollLink>
          <ScrollLink to="Experties" smooth={true} duration={700} offset={-70}>
            <li>EXPERTISE</li>
          </ScrollLink>
          <ScrollLink to="Project" smooth={true} duration={700} offset={-70}>
            <li>PROJECTS</li>
          </ScrollLink>
        </nav>
      </div>
      <div className="con-btn">
        <ScrollLink to="Contact" smooth={true} duration={700} offset={1200}>
          <button className="contact">Contact Me</button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
