import "./footer.scss";
import PersonalDetails from "../../components/resume/personalDetails/personalDetails";
import LinkList from "../../components/linkList/linkList";
import SocialLink from "../../components/buttons/socialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import legalNotice from "../../assets/documents/legalNotice_portfolio_BW.pdf";

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
          <SocialLink link="/contact" text="Email" ReactRouter={true}>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </SocialLink>
        </LinkList>
        {/* TODO: Copyright and Privacy Policy ?
        <a href="/">Privacy Policy</a> */}
        <div className="footer__info__address">
          <PersonalDetails />
        </div>
      </div>
      <p className="footer__legal">
        <span>Copyright 2023 Barthélémy Werlé</span>
        <a
          className="legal-notice"
          href={legalNotice}
          target="_blank"
          rel="noreferrer"
        >
          Legal Notice
        </a>
      </p>
    </footer>
  );
}

export default Footer;
