import React from "react";
import ReactDOM from "react-dom/client";
import OptionsPage from "./components/OptionsPage/OptionsPage";

const targetElement = document.createElement("div");

ReactDOM.createRoot(targetElement).render(
  <React.StrictMode>
    <OptionsPage />
  </React.StrictMode>
);

document.body.appendChild(targetElement);
