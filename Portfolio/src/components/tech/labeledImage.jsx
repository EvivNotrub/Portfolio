import { PropTypes } from "prop-types";
import "./labeledImage.scss";

function LabeledImage({ key, image, label }) {
  return (
    <li key={key} className="labeled-image">
      <img src={image} alt={label} />
      <span>{label}</span>
    </li>
  );
}

LabeledImage.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  key: PropTypes.string,
};

export default LabeledImage;
