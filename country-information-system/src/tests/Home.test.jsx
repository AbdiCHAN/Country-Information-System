import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/Home";
import CountryCard from "../components/CountryCard";
import RegionCard from "../components/RegionCard";

// Mock custom hook and child components
jest.mock("../hooks/useFetchCountries");
import useFetchCountries from "../hooks/useFetchCountries";

jest.mock("../components/CountryCard", () => ({ country, loading }) => (
  <div data-testid={loading ? "loading-card" : "country-card"}>
    {loading ? "Loading..." : country.name}
  </div>
));

jest.mock("../components/RegionCard", () => ({ region, count }) => (
  <div data-testid="region-card">{region} ({count})</div>
));

describe("Home Component", () => {
  const mockCountries = [
    { name: "Kenya", code: "KEN", region: "Africa" },
    { name: "Nigeria", code: "NGA", region: "Africa" },
    { name: "Japan", code: "JPN", region: "Asia" },
  ];

  test("renders loading state", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      loading: true,
      error: null,
    });

    render(<Home />);
    const loadingCards = screen.getAllByTestId("loading-card");
    expect(loadingCards.length).toBe(12); // skeleton shows 12 placeholders
  });

  test("renders error state", () => {
    useFetchCountries.mockReturnValue({
      countries: [],
      loading: false,
      error: "Failed to fetch",
    });

    render(<Home />);
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  test("renders country cards and region cards", () => {
    useFetchCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });

    render(<Home />);

    // Region cards: Africa, Asia
    const regionCards = screen.getAllByTestId("region-card");
    expect(regionCards.length).toBe(2);
    expect(screen.getByText(/Africa \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Asia \(1\)/i)).toBeInTheDocument();

    // Country cards
    const countryCards = screen.getAllByTestId("country-card");
    expect(countryCards.length).toBe(3);
    expect(screen.getByText(/Kenya/i)).toBeInTheDocument();
    expect(screen.getByText(/Japan/i)).toBeInTheDocument();
  });

  test("filters countries based on search query", () => {
    useFetchCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });

    render(<Home />);
    const searchInput = screen.getByPlaceholderText(/Search countries/i);

    // Type "Kenya"
    fireEvent.change(searchInput, { target: { value: "Kenya" } });

    // Only Kenya should appear
    expect(screen.getAllByTestId("country-card").length).toBe(1);
    expect(screen.getByText(/Kenya/i)).toBeInTheDocument();
    expect(screen.queryByText(/Japan/i)).not.toBeInTheDocument();
  });

  test("shows 'No countries found' when search returns nothing", () => {
    useFetchCountries.mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });

    render(<Home />);
    const searchInput = screen.getByPlaceholderText(/Search countries/i);

    fireEvent.change(searchInput, { target: { value: "XYZ" } });

    expect(screen.getByText(/No countries found/i)).toBeInTheDocument();
  });
});
