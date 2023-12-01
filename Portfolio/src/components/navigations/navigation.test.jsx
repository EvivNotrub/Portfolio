import { expect, describe, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./navigation";

describe("navigation", () => {
  beforeEach(() => {
    MemoryRouter.defaultProps = {
      initialEntries: ["/"],
    };
    render(<Navigation />, { wrapper: MemoryRouter });
  });

  it("renders", () => {
    expect(screen.getByTestId("nav-testid")).toBeInTheDocument();
  });
  it("renders home link", () => {
    const home = screen.getByText("Accueil");
    expect(home).toBeInTheDocument();
    expect(home).toHaveAttribute("href", "/");
  });
  it("renders projects link", () => {
    const projects = screen.getByText("Mes Projets");
    expect(projects).toBeInTheDocument();
    expect(projects).toHaveAttribute("href", "/projects");
  });
  it("renders resume link", () => {
    const resume = screen.getByText("CV");
    expect(resume).toBeInTheDocument();
    expect(resume).toHaveAttribute("href", "/resume");
  });
  it("renders contact link", () => {
    const contact = screen.getByText("Contact");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveAttribute("href", "/contact");
  });
  describe("sub-nav", () => {
    it("renders", () => {
      expect(screen.getByTestId("sub-nav-testid")).toBeInTheDocument();
    });
    it("renders about link", () => {
      expect(screen.getByText("A propos"))
        .toBeInTheDocument()
        .toHaveAttribute("href", "/#about");
    });
    it("renders skills link", () => {
      expect(screen.getByText("Compétences"))
        .toBeInTheDocument()
        .toHaveAttribute("href", "/#skills");
    });
    it("renders projectsPreview link", () => {
      expect(screen.getByText("Projets Preview"))
        .toBeInTheDocument()
        .toHaveAttribute("href", "/#projectsPreview");
    });
  });
  //   it("scrolls to About when Link is clicked", () => {
  //     const aboutLink = screen.getAllByText("A propos");
  //     for (let i in aboutLink) {
  //       fireEvent.click(aboutLink[i]);
  //       expect(screen.getByTestId("about-testid")).toBeInTheDocument();
  //     }
  //   });
});
