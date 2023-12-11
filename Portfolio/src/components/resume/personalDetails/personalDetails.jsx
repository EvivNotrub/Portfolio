import { Link } from "react-router-dom";
import "./personalDetails.scss";

function PersonalDetails() {
  return (
    <>
      {/* TODO: add google maps or link */}
      <address className="addresse">
        <span>23 Rue du Salève,</span>
        <span>
          <span>74100</span> <span>Annemasse, France</span>
        </span>
      </address>
      {/*TODO: find a wise way to have a phone number <span className="tel">
        Tel.: <a href="tel:+33767887884">0767887884</a>
      </span> */}
      <Link to="/contact" className="address__contact">
        Me contacter
      </Link>
    </>
  );
}

export default PersonalDetails;
