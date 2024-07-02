import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Using createRoot for React 18

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
