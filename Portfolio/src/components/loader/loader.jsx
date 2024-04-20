import { useCallback } from "react";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";
import "./loader.scss";

function Loader() {
  const { language } = useLanguage();
  const title = useCallback(() => {
    switch (language) {
      case "fr":
        return "Chargement...";
      case "es":
        return "Cargando...";
      case "de":
        return "Lade...";
      case "en":
        return "Loading...";
      default:
        return "Chargement...";
    }
  }, [language]);
  return (
    <div className="loader">
      <h2 className="loader__title">{title()}</h2>
      <div className="loader__container">
        <div className="loader__container__spinner --outside">
          <div className="loader__container__spinner --inside">
            <div className="loader__container__spinner --inception"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
