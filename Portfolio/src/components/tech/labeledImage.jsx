import { PropTypes } from "prop-types";
import "./labeledImage.scss";

function LabeledImage({ image, label }) {
  return (
    <li className="labeled-image">
      <img src={image} alt={label + " clored logo"} loading="lazy" />
      <span>{label}</span>
    </li>
  );
}

LabeledImage.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
};

export default LabeledImage;
