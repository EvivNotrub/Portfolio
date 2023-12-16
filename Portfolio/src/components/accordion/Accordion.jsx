import { useState } from "react";
import PropTypes from "prop-types";
import "./accordion.scss";
import AccordionContent from "./AccordionContent.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Accordion({ title, datum, type, children, className, header }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const HeaderTag = header || "h3";

  return (
    <div className={"accordion2-container" + " " + className}>
      <div className="accordion2">
        <div className="accordion2__header">
          <HeaderTag className="accordion2__header__title">{title}</HeaderTag>
          <button
            onClick={() => {
              !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
            }}
            className="accordion2__header__button"
            aria-expanded={isExpanded ? "true" : "false"}
          >
            <FontAwesomeIcon
              className="accordion2__header__button__arrow"
              icon="fa-solid fa-chevron-down"
            />
          </button>
        </div>
        <div
          className="accordion2__content"
          aria-expanded={isExpanded ? "true" : "false"}
        >
          {datum && <AccordionContent type={type} datum={datum} />}
          {children}
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  datum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Accordion;
