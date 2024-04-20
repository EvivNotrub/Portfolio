import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import MainStructuredData from "./components/helmet/mainStructuredData.jsx";
import App from "./App.jsx";
import "./index.scss";
import LanguageProvider from "./utils/contexts/reactContext/language/languageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HelmetProvider>
        <MainStructuredData />
        <Router basename={import.meta.env.BASE_URL}>
          <App />
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
