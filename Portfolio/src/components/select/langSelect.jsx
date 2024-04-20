import { useLanguage } from "../../utils/contexts/reactContext/language/useLang.js";
import PropTypes from "prop-types";
import "./langSelect.scss";

function LangSelect({ ...props }) {
  const { language, setLanguage, LANGUAGES } = useLanguage();
  const { className } = props;

  return (
    <div {...props} className={className + " lang"}>
      {language ? <p>{language}</p> : null}
      {LANGUAGES ? (
        <select
          defaultValue={"fr"}
          className="lang__select"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
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
