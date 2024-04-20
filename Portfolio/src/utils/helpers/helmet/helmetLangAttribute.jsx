import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../contexts/reactContext/language/useLang";

function HelmetLangAttribute() {
  const { language } = useLanguage();

  return <Helmet htmlAttributes={{ lang: language ? language : "fr" }} />;
}

export default HelmetLangAttribute;
