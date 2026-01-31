import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "../pages/CountryDetails";

// Mock the custom hook
jest.mock("../hooks/useFetchCountryByCode");

import useFetchCountryByCode from "../hooks/useFetchCountryByCode";

describe("CountryDetails Component", () => {
  const mockCountry = {
    name: "Kenya",
    capital: "Nairobi",
    region: "Africa",
    population: 53771296,
    flag: "kenya-flag.svg",
  };

  const renderWithRouter = (code) => {
    return render(
      <MemoryRouter initialEntries={[`/country/${code}`]}>
        <Routes>
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test("renders loading state", () => {
    useFetchCountryByCode.mockReturnValue({
      country: null,
      loading: true,
      error: null,
    });

    renderWithRouter("KEN");

    expect(screen.getByText(/Loading country details/i)).toBeInTheDocument();
  });

  test("renders error state", () => {
    useFetchCountryByCode.mockReturnValue({
      country: null,
      loading: false,
      error: "Failed to fetch",
    });

    renderWithRouter("KEN");

    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  test("renders country not found", () => {
    useFetchCountryByCode.mockReturnValue({
      country: null,
      loading: false,
      error: null,
    });

    renderWithRouter("XYZ");

    expect(screen.getByText(/Country not found/i)).toBeInTheDocument();
  });

  test("renders country details correctly", () => {
    useFetchCountryByCode.mockReturnValue({
      country: mockCountry,
      loading: false,
      error: null,
    });

    renderWithRouter("KEN");

    expect(screen.getByText(/Kenya/i)).toBeInTheDocument();
    expect(screen.getByText(/Nairobi/i)).toBeInTheDocument();
    expect(screen.getByText(/Africa/i)).toBeInTheDocument();
    expect(screen.getByText(/53,771,296/i)).toBeInTheDocument();

    const img = screen.getByAltText(/Kenya flag/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("kenya-flag.svg");

    // Check back link
    const backLink = screen.getByText(/Back to Home/i);
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });
});
