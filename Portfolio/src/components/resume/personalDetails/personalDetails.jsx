import { Link } from "react-router-dom";
import "./personalDetails.scss";

function PersonalDetails() {
  return (
    <>
      {/* TODO: add google maps or link */}
      <address className="addresse">
        <span>
          <span>74100</span> <span>Annemasse, France</span>
        </span>
      </address>
      <span className="tel">
        Tel.: <a href="tel:+33767887884">+33767887884</a>
      </span>
      <Link to="/contact" className="address__contact">
        Contact Me
      </Link>
    </>
  );
}

export default PersonalDetails;
