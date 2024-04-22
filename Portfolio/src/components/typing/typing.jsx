import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import "./typing.scss";

const Typewriter = ({ text, speed, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    /* here we compare currentText with text prop to avoid having a mixup of two
     texts if language changes during typing. But we do not reset typing animation.*/
    if (
      currentIndex > 0 &&
      currentText[currentIndex - 1] !== text[currentIndex - 1]
    ) {
      setCurrentText(text.slice(0, currentIndex));
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentText, speed, text]);
  return <span className={className}>{currentText}</span>;
};

Typewriter.propTypes = {
  speed: PropTypes.number,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Typewriter;
