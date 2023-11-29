import { MemoryRouter } from "react-router-dom";
import { expect, describe, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

// TODO_REMOVE: research before deleting
// const renderWithRouter = (ui, { route = "/" } = {}) => {
//   window.history.pushState({}, "Test page", route);
//   return render(ui, { wrapper: MemoryRouter });
// };

describe("error page", () => {
  const redirectToBadRoute = "/bad-route";

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[redirectToBadRoute]}>
        <App />
      </MemoryRouter>,
    );
  });

  it("renders when bad route is used", () => {
    const errorTestId = screen.getByTestId("error-testid");
    expect(errorTestId).toBeInTheDocument();
  });
  it("renders error message", () => {
    const errorMessage = screen.getByText(
      "Oups! La page que vous demandez n´existe pas.",
    );
    expect(errorMessage).toBeInTheDocument();
  });
  it("renders link to home page", () => {
    const linkToHome = screen.getByText("Retourner sur la page d´accueil");
    expect(linkToHome).toBeInTheDocument();
  });
  it("link to home page is working and redirects to home", () => {
    fireEvent.click(screen.getByTestId("error-homeLink-testid"));
    expect(screen.getByTestId("home-testid")).toBeInTheDocument();
  });
});
