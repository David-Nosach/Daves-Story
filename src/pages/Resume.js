import React from "react";
import "./Resume.css"; // Ensure you have a CSS file for styling

const Resume = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>
        <a href="../Resume/Resume-FrontEnd.png" download="Resume-FrontEnd.png">
          Download my resume
        </a>
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
};

export default Resume;
