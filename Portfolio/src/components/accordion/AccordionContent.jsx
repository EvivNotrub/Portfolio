import { PropTypes } from "prop-types";

function AccordionContent({ title, datum }) {
  // TODO: this has to be removed or adjusted
  switch (title) {
    case "Équipements":
      return (
        <ul className="accordion2__content__data --acc-list">
          {datum.map((data, index) => (
            <li key={data + index}>{data}</li>
          ))}
        </ul>
      );
    default:
      return <p className="accordion2__content__data">{datum}</p>;
  }
}

AccordionContent.propTypes = {
  title: PropTypes.string,
  datum: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default AccordionContent;
