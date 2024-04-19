import { memo } from "react";
import { PropTypes } from "prop-types";
import LabeledImage from "../tech/labeledImage";
import "./AccordionContent.scss";

const AccordionContent = memo(function AccordionContent({ type, datum }) {
  // TODO: this has to be removed or adjusted
  switch (type) {
    case "text-list":
      return (
        <ul className="accordion2__content__data --acc-list">
          {datum.map((data, index) => (
            <li key={data + index}>{data}</li>
          ))}
        </ul>
      );
    case "text":
      return <p className="accordion2__content__data">{datum}</p>;
    case "LabeledImages":
      return (
        <ul className="accordion2__content__data --img">
          {datum.map((skill, index) => (
            <LabeledImage
              key={skill.name + index}
              image={skill.path}
              label={skill.name}
            />
          ))}
        </ul>
      );
    default:
      return <p className="accordion2__content__data">{datum}</p>;
  }
});

AccordionContent.propTypes = {
  type: PropTypes.string,
  datum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default AccordionContent;
