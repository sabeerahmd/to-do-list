// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Import the App component
import "bootstrap/dist/css/bootstrap.css";  // Import Bootstrap CSS
import './index.css'; // Optional: You can add custom global styles here

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
