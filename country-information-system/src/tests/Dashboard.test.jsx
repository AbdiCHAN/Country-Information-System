import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

// Mock the useFetchCountries hook
jest.mock("../hooks/useFetchCountries");
import useFetchCountries from "../hooks/useFetchCountries";

describe("Dashboard Component", () => {
  const mockCountries = [
    { name: "Kenya", population: 53771296, region: "Africa" },
    { name: "Nigeria", population: 211400708, region: "Africa" },
    { name: "Japan", population: 125960000, region: "Asia" },
  ];

  test("renders loading state", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      loading: true,
      error: null,
    });

    render(<Dashboard />);

    expect(screen.getByText(/Loading dashboard/i)).toBeInTheDocument();
  });

  test("renders error state", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      loading: false,
      error: "Failed to fetch",
    });

    render(<Dashboard />);

    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  test("renders dashboard stats correctly", () => {
    useFetchCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });

    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // Total countries
    expect(screen.getByText(/Total Countries/i).nextSibling.textContent).toBe("3");

    // Total regions (Africa, Asia)
    expect(screen.getByText(/Total Regions/i).nextSibling.textContent).toBe("2");

    // Most populated country
    expect(screen.getByText(/Most Populated Country/i).nextSibling.textContent).toBe(
      "Nigeria (211,400,708)"
    );

    // Check Add Country link
    const link = screen.getByText(/Go/i);
    expect(link.closest("a")).toHaveAttribute("href", "/add-country");
  });
});
