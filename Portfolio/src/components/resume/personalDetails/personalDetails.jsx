import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./personalDetails.scss";

function PersonalDetails({ textContent }) {
  return (
    <>
      {/* TODO: add google maps or link */}
      <address className="addresse">
        <span>
          <span>74100</span>{" "}
          <span>Annemasse, {textContent.addressCountry}</span>
        </span>
      </address>
      <span className="tel">
        {textContent.phone + ": "}
        <a href="tel:+33767887884">+33767887884</a>
      </span>
      <Link to="/contact" className="address__contact">
        {textContent.contact}
      </Link>
    </>
  );
}

PersonalDetails.propTypes = {
  textContent: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PersonalDetails;
