import React from "react";
import "./Project.css";

const Project = ({ title, imageUrl, liveUrl, repoUrl, techStack }) => {
  return (
    <div className="project" style={{ backgroundImage: `url(${imageUrl})` }}>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className="image-overlay">
          <h3>{title}</h3>
        </div>
      </a>
      <div className="project-details">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live Project
        </a>
        <span>{techStack}</span>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
