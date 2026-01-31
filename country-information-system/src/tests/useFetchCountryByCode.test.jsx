import { renderHook } from "@testing-library/react-hooks";
import useFetchCountryByCode from "../hooks/useFetchCountryByCode";

// Mock fetch
global.fetch = jest.fn();

describe("useFetchCountryByCode hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and returns a country successfully", async () => {
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

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCountryByCode("KEN")
    );

    // Initial state
    expect(result.current.country).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    // Wait for fetch to finish
    await waitForNextUpdate();

    expect(result.current.country).toEqual({
      name: "Kenya",
      code: "KEN",
      capital: "Nairobi",
      region: "Africa",
      population: 53771296,
      flag: "kenya-flag.svg",
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test("handles fetch failure (ok: false)", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCountryByCode("XYZ")
    );

    await waitForNextUpdate();

    expect(result.current.country).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Failed to fetch country: 404");
  });

  test("handles network error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCountryByCode("KEN")
    );

    await waitForNextUpdate();

    expect(result.current.country).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Network Error");
  });

  test("does nothing if no code provided", () => {
    const { result } = renderHook(() => useFetchCountryByCode(""));

    expect(result.current.country).toBe(null);
    expect(result.current.loading).toBe(true); // stays true because fetch never ran
    expect(result.current.error).toBe(null);
  });
});
