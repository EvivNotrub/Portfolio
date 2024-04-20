import { useLanguage } from "../../utils/contexts/reactContext/language/useLang.js";
import HelmetStructuredData from "../../utils/helpers/helmet/helmetStructuredData";
import data from "../../data/structuredData.json";

function MainStructuredData() {
  const { language } = useLanguage();

  const structuredData = data.structuredData;
  const defaultLanguage = data.defaultLanguage;
  if (defaultLanguage !== language) {
    const DataLangVar = data.langVariations;
    structuredData.name = DataLangVar.name[language];
    structuredData.description = DataLangVar.description[language];
    structuredData.author.jobTitle = DataLangVar.jobTitle[language];
  }

  return <HelmetStructuredData structuredData={structuredData} />;
}
export default MainStructuredData;
