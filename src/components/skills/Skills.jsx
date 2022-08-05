import React from "react";
import "./skills.css";
import photo from "../../assets/download.jpg";
import html from "../../assets/html-5.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwindcss.png";
import bootstrap from "../../assets/bootstrap.png";
import npm from "../../assets/npm.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import java from "../../assets/java.png";
import SocialMedia from "../socialmedia/SocialMedia";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";

const Skills = () => {
  return (
    <div className="container">
      <div className="greet-main">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                Hi all, I'm Sanyam
                <span className="wave-emoji"> 👋</span>
              </h1>
              <p className="greeting-text-p subTitle">
                A aspiring passionate Full Stack Software Developer 🚀 building
                Web applications with JavaScript / Reactjs / Nodejs / Nextjs and
                some other cool libraries and frameworks.
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                  <Link to="contact">
                <button className="btn" href="#contact">
                  Contact Me
                </button>
                  </Link>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={photo} width={300} alt="" />
          </div>
        </div>
      </div>
      <div className="what-section">
        <h1>What I do</h1>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        <div className="logotech">
          <div>
            <img className="techstack" width={50} src={html} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={css} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={javascript} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={java} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={tailwind} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={bootstrap} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={react} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={node} alt="" />
          </div>
          <div>
            <img className="techstack" width={50} src={npm} alt="" />
          </div>
        </div>
        <div>
          <p>
            ⚡ Develop interactive Front end / User Interfaces for your web
            applications
          </p>
          {/* <p>⚡ Loves to listen podcasts, </p> */}
          {/* <p></p> */}
        </div>
      </div>
      <div className="proficiency">
        <h1>Proficiency</h1>

        <div>
          <div className="skill">
            <p>Frontend/Design</p>
            <div className="meter">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>
          <div className="skill">
            <p>Programming</p>
            <div className="meter">
              <span style={{ width: "50%" }}></span>
            </div>
          </div>
          <div className="skill">
            <p>Backend</p>
            <div className="meter">
              <span style={{ width: "10%" }}></span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h1>Projects</h1>
        <div>
          <p>I have build some amazing Projects you can see here </p>
        </div>
        <div>
          <Link to="projects">
            <p className="btn">See Projects</p>
          </Link>
        </div>
      </div>
      <div className="blogs-section">
        <h1>Blogs</h1>
        <p>WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.</p>
        <Link to="blogs">
        <button className="btn">See Blogs</button>
        </Link>
      </div>
      <Contact />
      
    </div>
  );
};

export default Skills;
