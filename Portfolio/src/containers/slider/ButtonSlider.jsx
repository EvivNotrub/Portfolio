import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./buttonSlider.scss";

function ButtonSlider({ next, previous }) {
  return (
    <div className="slideshow__arrows">
      <div className="buttonSlider">
        <button
          type="button"
          onClick={() => {
            previous();
          }}
          className="buttonSlider__arrow --left"
          aria-label="previous slide"
        >
          <FontAwesomeIcon className="svg" icon="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          onClick={() => {
            next();
          }}
          className="buttonSlider__arrow --right"
          aria-label="next slide"
        >
          <FontAwesomeIcon className="svg" icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

ButtonSlider.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};

export default ButtonSlider;
