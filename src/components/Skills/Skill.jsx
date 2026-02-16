import React from "react";
import "./Skill.css";

const Skill = () => {

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "SQL",
    "OOPS",
    "Java",
    "PHP",
    "Basic AWS",
    "Git & GitHub"
  ];

  return (
    <div id="skills" className="skills">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
