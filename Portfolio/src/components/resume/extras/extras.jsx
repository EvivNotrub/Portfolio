import { PropTypes } from "prop-types";
import Accordion from "../../accordion/Accordion";
import "./extras.scss";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function Extras({ textContent }) {
  const { language } = useLanguage();
  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          title={textContent[0].title[language]}
          header="h4"
          datum={textContent[0].content[language]}
          className={"essentials__article__accordion"}
        />
      </article>
      <article className="essentials__article">
        <Accordion
          type="text-list"
          title={textContent[1].title[language]}
          header="h4"
          datum={textContent[1].content[language]}
          className={"essentials__article__accordion"}
        />
      </article>
    </>
  );
}

Extras.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default Extras;
