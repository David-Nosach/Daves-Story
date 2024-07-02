import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/path-to-image1.jpg",
      deployedLink: "https://deployed-app1.com",
      repoLink: "https://github.com/yourprofile/project1",
    },
    // Add more projects here
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
