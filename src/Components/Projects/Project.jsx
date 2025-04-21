import React from "react";
import "../Projects/Project.css";
import proj1 from "../Images/music.png";
import proj2 from "../Images/blogging.png";
import proj3 from "../Images/chatting.png";
import git from "../Images/github.png";
import arrow from "../Images/arrow.png";
// import corner from "../Images/corner.png";
const Project = () => {
  return (
    <div className="pro-main" id="Project">
      <div className="prohead">
        <span className="a3">My Projects</span>
      </div>
      <div className="pro-content">
        <div className="projects">
          <div className="proleft">
            <div className="proimg">
              <img src={proj2} alt="/" className="imgsource" />
            </div>
            <div className="prolink">
              <span className="linkcap">Know More</span>
              <img src={arrow} alt="------>" className="arrow" />
              <a
                href="https://github.com/gouravbasak/Blogging-websites"
                target="blank"
              >
                <img src={git} alt="git" className="direction" />
              </a>
            </div>
          </div>
          <div className="proright">
            <div className="part1">
              <span className="title">Blogging website</span>
              <span className="stackused">Web [HTML,CSS,Vanila JS]</span>
              <span className="date">Oct 2021 - Nov 2021</span>
            </div>
            <div className="part2">
              <span className="des">
                A sleek and modern blogging website crafted using HTML5, CSS3,
                and vanilla JavaScript. Enjoy a clean and intuitive interface,
                optimized for both desktop and mobile devices, and explore a
                diverse range of engaging and informative blog posts.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="projects">
            <div className="proleft">
              <div className="proimg">
                <img src={proj3} alt="/" className="imgsource" />
              </div>
              <div className="prolink">
                <span className="linkcap">Know More</span>
                <img src={arrow} alt="------>" className="arrow" />
                <a
                  href="https://github.com/gouravbasak/Sky-talk"
                  target="blank"
                >
                  <img src={git} alt="git" className="direction" />
                </a>
              </div>
            </div>
            <div className="proright">
              <div className="part1">
                <span className="title">Messaging App</span>
                <span className="stackused">Web [PHP, CSS3, JS]</span>
                <span className="date">June 2021 - July 2021</span>
              </div>
              <div className="part2">
                <span className="des">
                  A dynamic web-based chat application powered by PHP, CSS3, and
                  JavaScript. Stay connected with friends and colleagues in
                  real-time, share messages, files, and emojis, and enjoy a
                  seamless user experience.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="proleft">
            <div className="proimg">
              <img src={proj1} alt="/" className="imgsource" />
            </div>
            <div className="prolink">
              <span className="linkcap">Know More</span>
              <img src={arrow} alt="------>" className="arrow" />
              <a href="https://github.com/gouravbasak/MyMusic" target="blank">
                <img src={git} alt="git" className="direction" />
              </a>
            </div>
          </div>
          <div className="proright">
            <div className="part1">
              <span className="title">Music application</span>
              <span className="stackused">Android [Java]</span>
              <span className="date">June 2020 - July 2020</span>
            </div>
            <div className="part2">
              <span className="des">
                This Android music player app, built using Java, offers a
                user-friendly interface for easy navigation, customizable
                playlists, and seamless audio playback. Enjoy your favorite
                tunes on-the-go online or offline depends upon your mood.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
// <img src={corner} alt="/" className="corner1" />
//         <img src={corner} alt="/" className="corner2" />
// <div className="blur s-blur3" style={{ background: "#DDFFBB" }}></div>
//   <div className="blur s-blur4" style={{ background: "#DDFFBB" }}></div>
//   <div className="blur s-blur5" style={{ background: "#FFB4B4" }}></div>
