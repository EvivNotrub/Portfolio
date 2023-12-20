import ScrollPage from "../../components/buttons/scrollPage";
import SocialLink from "../../components/buttons/socialLink";
import LinkList from "../../components/linkList/linkList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.scss";

function About() {
  return (
    <div data-testid="about-testid" className="about">
      <h2 className="about__title">About</h2>
      <article className="about__article">
        <p className="about__article__text">
          This website is a showcase of the projects, skills and technologies I
          worked on, they already provide a good deal of tools to create or
          improve website-applications.
        </p>
        <p className="about__article__text">
          This is just the beginning, more projects will come very soon, and
          learning is part of everyday life.
        </p>
        <p className="about__article__text">
          Fresh out of a web-developer education program at Open Classrooms, my
          site is, as of now, advertising some projects that are part of the
          degree. They are made for the sole purpose of learning new skills and
          technologies, each one with a specific topic. A description of the
          project provides context and the goals we had, since not all of them
          were made from scratch. This allows you to understand what was
          implemented by myself or not.
        </p>
        <p className="about__article__text">
          Additional links to my resume, GitHub and others will provide more
          information about myself.
        </p>
      </article>
      <div className="about__links">
        <LinkList>
          {/* TODO: add linkedin ink */}
          <SocialLink link="https://www.linkedin.com/" text="LinkedIn">
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
      <ScrollPage path="/#skills" ariaLabel="next section: Skills" />
    </div>
  );
}

export default About;
