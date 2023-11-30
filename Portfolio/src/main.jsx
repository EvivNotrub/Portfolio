import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

console.log(
  "import.meta.env.DEV  :>> ",
  import.meta.env.DEV,
  "\nimport.meta.env.BASE_URL :>> ",
  import.meta.env.BASE_URL,
  "\nimport.meta.env.PROD :",
  import.meta.env.PROD,
  "\nimport.meta.env.MODE :>> ",
  import.meta.env.MODE,
  "\nimport.meta.env.SSR :>> ",
  import.meta.env.SSR,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  </React.StrictMode>,
);
