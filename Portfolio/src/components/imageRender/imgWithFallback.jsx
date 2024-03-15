import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// !!!! carefull the loading attribute is for img tag NOT related to setLoading
export default function ImgWithFallback({
  src,
  fallback,
  alt,
  loading,
  setLoading,
  ...props
}) {
  const [error, setError] = useState(false);
  const [imgSrc, imgSrcSet] = useState(src);

  function handleError() {
    console.error(
      "Failed to load image from source:",
      src,
      "\nNew source:",
      fallback,
    );
    setError(true);
  }

  function handleLoad() {
    setLoading(false);
  }

  useEffect(() => {
    if (error && imgSrc !== fallback) {
      imgSrcSet(fallback);
    }
  }, [error, fallback, imgSrc]);

  return (
    <>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        {...props}
      />
    </>
  );
}

ImgWithFallback.propTypes = {
  setLoading: PropTypes.func.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loading: PropTypes.string,
  sercSet: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};
