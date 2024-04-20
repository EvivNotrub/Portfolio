import { useLanguage } from "../../utils/contexts/reactContext/language/useLang.js";
import PropTypes from "prop-types";
import "./langSelect.scss";
import { useCallback } from "react";

function LangSelect({ ...props }) {
  const { language, setLanguage, LANGUAGES } = useLanguage();
  const { className } = props;

  function storeLanguage(lang) {
    localStorage.setItem("language", lang);
  }

  function removeLanguage() {
    localStorage.removeItem("language");
  }

  const navLang = useCallback(() => {
    return navigator.language.split(/[-_]/)[0];
  }, []);

  function handleChange(e) {
    setLanguage(e.target.value);
    if (e.target.value === navLang()) {
      removeLanguage();
    } else {
      storeLanguage(e.target.value);
    }
  }

  return (
    <div {...props} className={className + " lang"}>
      {language ? <p>{language}</p> : null}
      {LANGUAGES ? (
        <select
          defaultValue={language}
          className="lang__select"
          onChange={(e) => handleChange(e)}
        >
          {LANGUAGES.map(({ code, label }) => (
            <option
              className="lang__select__opt"
              title={label}
              key={code}
              value={code}
            >
              {label}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}

LangSelect.propTypes = {
  className: PropTypes.string,
};

export default LangSelect;
