import { PropTypes } from "prop-types";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";
import Accordion from "../../accordion/Accordion";
import "./education.scss";

function Education({ textContent }) {
  const { language } = useLanguage();

  return (
    <>
      <article className="essentials__article">
        <Accordion
          type="text"
          title={textContent[0].title[language]}
          header="h4"
          datum={
            <>
              <span>
                <time dateTime="2023-03">03/2023</time>-
                <time dateTime="2023-12">12/2023</time>
              </span>
              <br />
              <span className="essentials__article__institute">
                {textContent[0].content[language]}
              </span>
            </>
          }
          className={"essentials__article__accordion"}
        />
      </article>
      <article className="essentials__article">
        <Accordion
          type="text"
          title={textContent[1].title[language]}
          header="h4"
          datum={
            <>
              <span>
                <time dateTime="2008-06">06/2008</time>
              </span>
              <br />
              <span className="essentials__article__institute">
                {textContent[1].content[language]}
              </span>
            </>
          }
          className={"essentials__article__accordion"}
        />
      </article>
    </>
  );
}

Education.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default Education;
