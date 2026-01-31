import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  test("renders all navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check each NavLink
    const homeLink = screen.getByText(/Home/i);
    const dashboardLink = screen.getByText(/Dashboard/i);
    const addCountryLink = screen.getByText(/Add Country/i);
    const aboutLink = screen.getByText(/About/i);

    expect(homeLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
    expect(addCountryLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();

    // Check href attributes
    expect(homeLink.closest("a")).toHaveAttribute("href", "/");
    expect(dashboardLink.closest("a")).toHaveAttribute("href", "/dashboard");
    expect(addCountryLink.closest("a")).toHaveAttribute("href", "/add-country");
    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about");
  });

  test("renders Sign In button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const button = screen.getByText(/Sign In/i);
    expect(button).toBeInTheDocument();
  });
});
