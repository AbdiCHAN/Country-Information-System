import { renderHook, act } from "@testing-library/react-hooks";
import useFetchCountries from "../hooks/useFetchCountries";

// Mock the global fetch
global.fetch = jest.fn();

describe("useFetchCountries hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and returns countries data successfully", async () => {
    const mockApiResponse = [
      {
        name: { common: "Kenya" },
        cca3: "KEN",
        capital: ["Nairobi"],
        region: "Africa",
        population: 53771296,
        flags: { svg: "kenya-flag.svg" },
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetchCountries());

    // Initial state
    expect(result.current.countries).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    // Wait for useEffect to finish
    await waitForNextUpdate();

    expect(result.current.countries).toEqual([
      {
        name: "Kenya",
        code: "KEN",
        capital: "Nairobi",
        region: "Africa",
        population: 53771296,
        flag: "kenya-flag.svg",
      },
    ]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test("handles fetch failure", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetchCountries());

    await waitForNextUpdate();

    expect(result.current.countries).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Failed to fetch countries");
  });

  test("handles fetch throwing an error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    const { result, waitForNextUpdate } = renderHook(() => useFetchCountries());

    await waitForNextUpdate();

    expect(result.current.countries).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Network Error");
  });
});
