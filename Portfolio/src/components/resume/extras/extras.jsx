import { PropTypes } from "prop-types";
import Accordion from "../../accordion/Accordion";
import "./extras.scss";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";

function Extras({ textContent }) {
  const { language } = useLanguage();
  return (
    <>
      {textContent.map((section) => (
        <article className="essentials__article" key={section.id}>
          <Accordion
            type="text-list"
            title={section.title[language]}
            header="h4"
            datum={section.content[language]}
            className={"essentials__article__accordion"}
          />
        </article>
      ))}
    </>
  );
}

Extras.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default Extras;
