import React from "react";

const Resume = () => {
  return (
    <section>
      <a href="/path-to-resume.pdf" download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
