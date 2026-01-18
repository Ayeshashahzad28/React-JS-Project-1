import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Header.css";
import "./StudentForm.css";
import "./Footer.css";
import "./style.css";
import "./students.css";
import "./courses.css";
import "./App.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
