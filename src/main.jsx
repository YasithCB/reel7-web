import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// fas
import "@fortawesome/fontawesome-free/css/all.min.css";

// Example: custom CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
