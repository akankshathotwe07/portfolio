import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import akanksha from "../../assets/akanksha.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={akanksha} alt="Akanksha" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Akanksha Thotwe, an aspiring Full Stack Developer and MCA
              student passionate about building modern and user-friendly web
              applications. I enjoy transforming ideas into real digital
              experiences through clean code and creative design. With skills in
              HTML, CSS, JavaScript, React, PHP, and SQL, I focus on developing
              responsive and efficient solutions.
            </p>

            <p>
              I am a continuous learner who believes in improving every day by
              exploring new technologies and solving real-world problems. I have
              worked on projects like blog platforms and portfolio websites,
              implementing features such as admin dashboards, authentication
              systems, and dynamic content management. My goal is to grow as a
              developer and contribute to impactful, innovative projects.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default About;
