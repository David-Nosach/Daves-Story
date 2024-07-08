import React from "react";
import Project from "../components/Project";
import projectData from "../data/projectData";
import "./Portfolio.css"; // Import the CSS file

const Portfolio = () => {
  return (
    <section id="work" className="projects">
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
