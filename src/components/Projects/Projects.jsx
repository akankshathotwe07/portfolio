import React from "react";
import "./Projects.css";
import blog from "../../assets/Blog.png";
import ecommerce from "../../assets/project_2.svg";
import portfolio from "../../assets/portfolio.png";

const projectData = [
  {
    title: "Modern Blog Application",
    description:
      "A full-featured blog platform with admin dashboard, comment approval system, and publish/unpublish functionality.",
    image: blog,
    live: "https://blog-app-xgji.vercel.app/",
    github: "https://github.com/akankshathotwe07/BlogApp",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce platform with cart, product listing, and order processing functionality.",
    image: ecommerce,
    live: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio showcasing projects, skills, and contact integration.",
    image: portfolio,
    live: "#",
    github: "#",
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
