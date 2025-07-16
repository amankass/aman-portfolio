import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import messege from "../../assets/messege.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Navbar rendered");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{ position: "fixed", top: 0 }}>
      <div className="navbarContent">
        <img src={logo} alt="logo" className="logo" />
        <div className={`desktopMenu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Projects
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Services
          </Link>
        </div>

        <button className="contactmeBtn">
          <img src={messege} alt="messege" className="desktopmenuimg" />
          Contact Me
        </button>

        <div className="hamburgerMenu" onClick={toggleMenu}>
          <div className={`hamburgerIcon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
