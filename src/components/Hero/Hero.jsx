import React from "react";
import "./Hero.css";
import akanksha from "../../assets/akanksha.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Akanksha main.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={akanksha} alt="Akanksha" />
      <h1><span>I’m Akanksha Thotwe,</span>Full Stack Developer(MERN).</h1>
      <p>
        I am a passionate Full Stack Developer and MCA student dedicated to
        building scalable, responsive, and user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
