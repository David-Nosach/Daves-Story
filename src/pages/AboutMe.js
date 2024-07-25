import React from "react";
import developerPhoto from "../images/portfolioPic.png";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={developerPhoto} alt="Developer" className="developer-photo" />
      <p className="about-me">
        {/* Introduction and personal description */}
        Hi! My name is David and I find pleasure in making all things web
        related. Having graduated with a useless degree of B.S. in business
        administration, I realized I needed to learn a practical skill, and web
        development was an easy choice. Since then I have graduated from the
        Frontend WebDevelopement Techdegree program with Team Treehouse, as well
        as the 6 month Full-Stack Coding BootCamp with the UC Berkeley Extension
        Program. I am currently working on personal and professional projects as
        well as grinding leetcode to further hone my skills as a full-stack
        developer. Check out some of my projects down below and don't hesitate
        to contact me.
      </p>
    </div>
  );
}

export default AboutMe;
