import "./about.scss";

function About() {
  return (
    <div data-testid="about-testid" className="about">
      <h2 className="about__title">About</h2>
      <p className="about__text">
        This website is a showcase of the projects, skills and technologies I
        worked on, they already provide a good deal of tools to create or
        improve a website.
      </p>
      <p className="about__text">
        This is just the beginning, more projects will come very soon, and
        learning is part of everyday life.
      </p>
      <p className="about__text">
        Fresh out of a developer program from Open Classrooms, the site is, as
        of now, advertising some projects that are part of this degree. They are
        made for the sole purpose of learning new skills and technologies, each
        one with a specific topic. A description of the project provides context
        and the goals we had, since not all of them were made from scratch. This
        allows you to understand what was implemented by myself or not.
      </p>
      <p className="about__text">
        Additional links to my resume, GitHub and others will provide more
        information about myself.
      </p>
    </div>
  );
}

export default About;
