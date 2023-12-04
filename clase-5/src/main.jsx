import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextoAlumnos } from "./context/alumnos.jsx";
import "./index.css";
import { ContextMenu } from "./context/menu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoAlumnos>
      <ContextMenu>
        <App />
      </ContextMenu>
    </ContextoAlumnos>
  </React.StrictMode>
);
