import { Fragment } from "react";
import { PropTypes } from "prop-types";
import { useLanguage } from "../../../utils/contexts/reactContext/language/useLang";
import Accordion from "../../accordion/Accordion";
import "./education.scss";

function Education({ textContent }) {
  const { language } = useLanguage();

  return (
    <>
      {textContent.map((section) => (
        <article className="essentials__article" key={section.id}>
          <Accordion
            type="text"
            title={section.title[language]}
            header="h4"
            datum={
              <>
                {section.dates ? (
                  <span>
                    {section.dates.map((date, index) => {
                      return (
                        <Fragment key={index + date.dateTime}>
                          {index > 0 ? " - " : null}
                          <time dateTime={date.dateTime}>{date.display}</time>
                        </Fragment>
                      );
                    })}
                  </span>
                ) : null}
                <br />
                <span className="essentials__article__institute">
                  {section.content[language]}
                </span>
              </>
            }
            className={"essentials__article__accordion"}
          />
        </article>
      ))}
    </>
  );
}

Education.propTypes = {
  textContent: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.object, content: PropTypes.object }),
  ),
};

export default Education;
