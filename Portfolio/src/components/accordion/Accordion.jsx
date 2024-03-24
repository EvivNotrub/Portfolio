import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import "./accordion.scss";
import AccordionContent from "./AccordionContent.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = memo(function Accordion({
  title,
  datum,
  type,
  children,
  className,
  header,
  expanded,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded || false);
  const HeaderTag = header || "h3";
  const headerId = title.replace(/\s+/g, "") + Date.now();

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  return (
    <div className={"accordion2-container" + " " + className}>
      <div className="accordion2">
        <div className="accordion2__header">
          <HeaderTag id={headerId} className="accordion2__header__title">
            {title}
          </HeaderTag>
          <button
            onClick={() => {
              !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
            }}
            className="accordion2__header__button"
            aria-expanded={isExpanded ? "true" : "false"}
            aria-labelledby={headerId}
            title={isExpanded ? "Collapse" : "Expand"}
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
});

Accordion.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  datum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  expanded: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Accordion;
