import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./slideshow.scss";
import ButtonSlider from "./ButtonSlider.jsx";
import Slider from "./Slider.jsx";
import FullscreenButton from "./FullscreenButton.jsx";

function Slideshow({
  pictures,
  isFullscreen,
  setIsFullscreen,
  classFullscreen,
}) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [previousPicture, setPreviousPicture] = useState(pictures.length - 1);
  const [nextPicture, setNextPicture] = useState(1);
  const picturesLength = pictures.length;

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
    };
  }, [isFullscreen, setIsFullscreen]);

  function updatePictures(direction) {
    if (direction === "next") {
      setPreviousPicture(currentPicture);
      setCurrentPicture(nextPicture);
      setNextPicture(nextPicture + 1 === picturesLength ? 0 : nextPicture + 1);
    } else {
      setPreviousPicture(
        previousPicture - 1 === -1 ? picturesLength - 1 : previousPicture - 1,
      );
      setCurrentPicture(previousPicture);
      setNextPicture(currentPicture);
    }
  }

  return (
    <div className={"slideshow" + classFullscreen}>
      {picturesLength > 1 && (
        <ButtonSlider
          next={() => {
            updatePictures("next");
          }}
          previous={() => {
            updatePictures({ direction: "previous" });
          }}
        />
      )}
      {
        <Slider
          pictures={pictures}
          currentPicture={currentPicture}
          previousPicture={previousPicture}
          nextPicture={nextPicture}
          classFullscreen={classFullscreen}
        />
      }
      {
        <div className="slideshow__footer">
          <div className="slideshow__footer__ghost"></div>
          {picturesLength > 1 && (
            <h2 className="slideshow__footer__count">
              {currentPicture + 1 + "/" + picturesLength}
            </h2>
          )}
          {
            <FullscreenButton
              isFullscreen={isFullscreen}
              setIsFullscreen={setIsFullscreen}
            />
          }
        </div>
      }
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isFullscreen: PropTypes.bool,
  setIsFullscreen: PropTypes.func,
  classFullscreen: PropTypes.string,
};

export default Slideshow;
