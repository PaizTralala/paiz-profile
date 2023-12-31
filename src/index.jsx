import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("past"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
