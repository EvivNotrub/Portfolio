import { createContext, useState } from "react";
import PropTypes from "prop-types";

const LANGUAGES = [
  { label: "Français", code: "fr" },
  { label: "English", code: "en" },
];

function getLanguage() {
  const browserLang = navigator.language.split(/[-_]/)[0];
  console.log(browserLang, navigator, navigator.language);
  return (
    LANGUAGES.find((l) => l.code === browserLang).code || LANGUAGES[1].code
  );
}

export const LanguageContext = createContext("fr");

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getLanguage());

  return (
    <LanguageContext.Provider value={{ language, setLanguage, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
