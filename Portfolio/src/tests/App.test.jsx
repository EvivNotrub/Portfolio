import { expect, describe, it, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
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
  it("navigates to error page when bad route is entered", () => {
    render(
      <MemoryRouter initialEntries={["/bad-route"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("error-testid")).toBeInTheDocument();
  });
});
