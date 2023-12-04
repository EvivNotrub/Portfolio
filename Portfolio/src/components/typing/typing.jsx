import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import "./typing.scss";

const Typewriter = ({ text, speed, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);
  return <span className={className}>{currentText}</span>;
};

Typewriter.propTypes = {
  speed: PropTypes.number,
  className: PropTypes.string,
  text: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
};

export default Typewriter;
