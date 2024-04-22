import { memo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollPage from "../../components/buttons/scrollPage";
import SocialLink from "../../components/buttons/socialLink";
import LinkList from "../../components/linkList/linkList";
import "./about.scss";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";

const About = memo(function About({ textContent }) {
  const { language } = useLanguage();
  return (
    <div data-testid="about-testid" className="about">
      <h2 className="about__title">{textContent.title[language]}</h2>
      <article className="about__article">
        {textContent.article[language].map((paragraph, index) => (
          <p key={index + paragraph[0]} className="about__article__text">
            {paragraph}
          </p>
        ))}
      </article>
      <div className="about__links">
        <LinkList>
          {/* TODO: add linkedin ink */}
          <SocialLink
            link="https://www.linkedin.com/in/barthelemy-werle-b93769128"
            text="LinkedIn"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </SocialLink>
          <SocialLink link="https://github.com/EvivNotrub" text="GitHub">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </SocialLink>
          <SocialLink link="https://codepen.io/EvivNotrub/" text="CodePen">
            <FontAwesomeIcon icon="fa-brands fa-codepen" />
          </SocialLink>
          <SocialLink link="/contact" text="Email" ReactRouter={true}>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </SocialLink>
        </LinkList>
      </div>
      <ScrollPage path="/#skills" ariaLabel={textContent.next[language]} />
    </div>
  );
});

//TODO: describe the props
About.propTypes = {
  textContent: PropTypes.object.isRequired,
};

export default About;
