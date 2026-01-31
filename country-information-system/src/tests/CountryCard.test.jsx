import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryCard from "../components/CountryCard";

describe("CountryCard Component", () => {
  const mockCountry = {
    code: "KEN",
    name: "Kenya",
    capital: "Nairobi",
    region: "Africa",
    population: 53771296,
    flag: "kenya-flag.svg",
  };

  test("renders loading skeleton when loading is true", () => {
    render(
      <CountryCard country={mockCountry} loading={true} />
    );

    const skeleton = screen.getByRole("generic"); // div has no semantic role
    expect(document.querySelector(".skeleton")).toBeInTheDocument();
  });

  test("renders country information correctly when loading is false", () => {
    render(
      <BrowserRouter>
        <CountryCard country={mockCountry} loading={false} />
      </BrowserRouter>
    );

    // Check that country info is displayed
    expect(screen.getByText(/Kenya/i)).toBeInTheDocument();
    expect(screen.getByText(/Nairobi/i)).toBeInTheDocument();
    expect(screen.getByText(/Africa/i)).toBeInTheDocument();
    expect(screen.getByText(/53,771,296/i)).toBeInTheDocument();

    // Check that flag image is rendered
    const img = screen.getByAltText(/Kenya flag/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("kenya-flag.svg");

    // Check that Link points to the correct URL
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/country/KEN");
  });
});
