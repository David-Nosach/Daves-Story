import React from "react";
import "./Resume.css"; // Ensures you have a CSS file for styling

const Resume = () => {
  return (
    <section className="resume">
      <h1>Resume</h1>
      <p>
        {/* Download link for resume PDF */}
        <a
          href="/Resume-Full-Stack-Developer.pdf"
          download="Resume-Full-Stack-Developer.pdf"
        >
          Download my resume
        </a>
      </p>
      <p>
        {/* Link to view resume PDF */}
        <a
          href="/Resume-Full-Stack-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
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
