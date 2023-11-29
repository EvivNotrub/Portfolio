import { expect, describe, it, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// TODO_REMOVE: comment: moved BrouserRouter to main.jsx in order to change the tests
// otherwise we cannot render app directly and have to render a copy of the routes to mock the paths
// But maybe I am missing something and there is an other way ...
// describe("App", () => {
//   beforeEach(() => {
//     render(<App />);
//   });
//   it("renders", () => {
//     const AppTestId = screen.getByTestId("app-testid");
//     expect(AppTestId).toBeInTheDocument();
//   });
//   // here I use another syntax for reference and practice
//   it("renders Home component", () => {
//     const homeElement = screen.getByTestId("home-testid");
//     expect(homeElement).toBeInTheDocument();
//   });
//   it("renders Header component", () => {
//     const headerElement = screen.getByTestId("header-testid");
//     expect(headerElement).toBeInTheDocument();
//   });
//   it("renders Footer component", () => {
//     const footerElement = screen.getByTestId("footer-testid");
//     expect(footerElement).toBeInTheDocument();
//   });
// });

describe("App", () => {
  beforeEach(() => {
    MemoryRouter.defaultProps = {
      initialEntries: ["/"],
    };
    render(<App />, { wrapper: MemoryRouter });
  });
  it("renders", () => {
    const AppTestId = screen.getByTestId("app-testid");
    expect(AppTestId).toBeInTheDocument();
  });
  it("renders Home component", () => {
    const homeElement = screen.getByTestId("home-testid");
    expect(homeElement).toBeInTheDocument();
  });
  it("renders Header component", () => {
    const headerElement = screen.getByTestId("header-testid");
    expect(headerElement).toBeInTheDocument();
  });
  it("renders Footer component", () => {
    const footerElement = screen.getByTestId("footer-testid");
    expect(footerElement).toBeInTheDocument();
  });
  it("renders About when Link is clicked", () => {
    const aboutLink = screen.getAllByText("A propos");
    for (let i in aboutLink) {
      fireEvent.click(aboutLink[i]);
      expect(screen.getByTestId("about-testid")).toBeInTheDocument();
    }
  });
  it("renders Skills when Link is clicked", () => {
    const skillsLink = screen.getAllByText("Compétences");
    for (let i in skillsLink) {
      fireEvent.click(skillsLink[i]);
      expect(screen.getByTestId("skills-testid")).toBeInTheDocument();
    }
  });
  it("renders ProjectsPreview when Link is clicked", () => {
    const projectsPreviewLink = screen.getAllByText("Projets Preview");
    for (let i in projectsPreviewLink) {
      fireEvent.click(projectsPreviewLink[i]);
      expect(screen.getByTestId("projectsPreview-testid")).toBeInTheDocument();
    }
  });
  it("renders Contact when Link is clicked", () => {
    const contactLink = screen.getAllByText("Contact");
    for (let i in contactLink) {
      fireEvent.click(contactLink[i]);
      expect(screen.getByTestId("contact-testid")).toBeInTheDocument();
    }
  });
  it("renders Portfolio when Link is clicked", () => {
    const portfolioLink = screen.getAllByText("Portfolio");
    for (let i in portfolioLink) {
      fireEvent.click(portfolioLink[i]);
      expect(screen.getByTestId("portfolio-testid")).toBeInTheDocument();
    }
  });
  it("renders Resume when Link is clicked", () => {
    const resumeLink = screen.getAllByText("CV");
    for (let i in resumeLink) {
      fireEvent.click(resumeLink[i]);
      expect(screen.getByTestId("resume-testid")).toBeInTheDocument();
    }
  });
  it("navigates to error page when bad route is entered", () => {
    render(
      <MemoryRouter initialEntries={["/bad-route"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("error-testid")).toBeInTheDocument();
  });
});
