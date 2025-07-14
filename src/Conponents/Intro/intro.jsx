import React from "react";
import "./intro.css";
import bg from "../../assets/bgimage.png";
import hiremepng from "../../assets/hireme.png";
import { Link } from "react-scroll";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Aman</span> <br />
          Website Developer{" "}
        </span>
        <p className="introPara">
          I am a dedicated and results-driven Information Systems graduate with
          a B.Sc.Degree.
          <br />I bring practical experience in system and web development.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={hiremepng} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
