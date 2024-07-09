import React from "react";

// Defines the Footer component which renders the footer section of the application.
// This component contains links to professional and social profiles.
const Footer = () => {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/David-Nosach"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/david-nosach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://stackoverflow.com/users/26265580/diddybop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
      </p>
    </footer>
  );
};

export default Footer;
