import React from "react";
import "./skills.css";
import uiux from "../../assets/webdesign.png";
import webdesign from "../../assets/website.png";
import graphicsdesign from "../../assets/graphics.png";
import Contentcreation from "../../assets/content-creator.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a dedicated and results-driven Information Systems graduate with a
        B.Sc. degree. I bring practical experience in system and web
        development, having worked on various projects that showcase my
        expertise in delivering high-quality digital solutions.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={webdesign} alt="UI/UX Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full Stack Website Deevloper</h2>
            <p>
              I build responsive, high-performance websites using modern
              technologies like React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={Contentcreation}
            alt="Content Creator"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Content Creator</h2>
            <p>
              I build responsive, high-performance websites using modern
              technologies like React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={graphicsdesign}
            alt="Graphics Design"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Graphics Design</h2>
            <p>
              I create visually appealing designs that communicate brand
              identity and captivate audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
