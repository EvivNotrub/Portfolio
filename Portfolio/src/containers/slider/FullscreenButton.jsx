import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FullscreenButton({ isFullscreen, setIsFullscreen }) {
  return (
    <button
      className="slideshow__footer__viewbutton"
      onClick={() => {
        isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);
      }}
      aria-label="toggle fullscreen button"
    >
      {isFullscreen ? (
        <FontAwesomeIcon icon="fa-solid fa-compress" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-expand" />
      )}
    </button>
  );
}

FullscreenButton.propTypes = {
  isFullscreen: PropTypes.bool,
  setIsFullscreen: PropTypes.func,
};

export default FullscreenButton;
