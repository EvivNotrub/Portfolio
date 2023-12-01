import { Link } from "react-router-dom";
import Social from "../../components/social/social";
import "./footer.scss";

function Footer() {
  return (
    <footer id="footer" data-testid="footer-testid" className="footer">
      <Social />
      <Link to="/contact">Contact Us</Link>

      {/* TODO: Copyright and Privacy Policy ?
      <a href="/">Privacy Policy</a> */}
      <p className="footer__copyright">Copyright 2023 Barthélémy Werlé</p>
    </footer>
  );
}

export default Footer;
