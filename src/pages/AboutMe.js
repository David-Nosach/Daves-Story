import React from "react";
import developerPhoto from "../images/portfolioPic.png";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={developerPhoto} alt="Developer" className="developer-photo" />
      <p className="about-me">
        Hi! My name is David and I find pleasure in making all things web
        related. Having graduated with a useless degree of B.S. in business
        administration, I realzied I needed to learn a practical skill, and web
        development was an easy choice. Since then I have graduated from the
        Frontend WebDevelopement Techdegree program with Team Treehouse, and
        completed many personal projects in order to hone my skills as a web
        developer. I am currently expanding my skillset learning new languages
        and frameworks as I continue to build personal projects and software for
        local businesses. Check out some of my projects down below and don't
        hesitate to contact me.
      </p>
    </div>
  );
}

export default AboutMe;
