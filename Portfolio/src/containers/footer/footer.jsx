import "./footer.scss";
import PersonalDetails from "../../components/resume/personalDetails/personalDetails";
import LinkList from "../../components/linkList/linkList";
import SocialLink from "../../components/buttons/socialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer id="footer" data-testid="footer-testid" className="footer">
      <div className="footer__info">
        <LinkList className={"footer__info__links"}>
          <SocialLink link="https://codepen.io/EvivNotrub/" text="CodePen">
            <FontAwesomeIcon icon="fa-brands fa-codepen" />
          </SocialLink>
          <SocialLink link="https://github.com/EvivNotrub" text="GitHub">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </SocialLink>
          <SocialLink link="https://www.linkedin.com/" text="LinkedIn">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </SocialLink>
          {/* TODO: add linkedin */}
          <SocialLink link="/contact" text="Email">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </SocialLink>
        </LinkList>
        {/* TODO: Copyright and Privacy Policy ?
        <a href="/">Privacy Policy</a> */}
        <div className="footer__info__address">
          <PersonalDetails />
        </div>
      </div>
      <p className="footer__copyright">Copyright 2023 Barthélémy Werlé</p>
    </footer>
  );
}

export default Footer;
