import React from "react";
import Navigation from "./Navigation"; // Importing the Navigation component from the same directory.

// Header component representing the top section of the application.
const Header = () => {
  return (
    // Semantic header element used for containing header content.
    <header>
      <h1>David Nosach</h1>
      <Navigation />
    </header>
  );
};

export default Header; // Exports the Header component for use in other parts of the application.
