import { useEffect, useState } from "react";

const ENDPOINTS = {
  all: "https://restcountries.com/v3.1/all",
  africa: "https://restcountries.com/v3.1/region/africa",
  americas: "https://restcountries.com/v3.1/region/americas",
  asia: "https://restcountries.com/v3.1/region/asia",
  europe: "https://restcountries.com/v3.1/region/europe",
  oceania: "https://restcountries.com/v3.1/region/oceania",
  antarctic: "https://restcountries.com/v3.1/region/antarctic",
};

export default function useFetchCountries(region = "all") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = ENDPOINTS[region];

    if (!url) {
      setError("Invalid region");
      setLoading(false);
      return;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch country data");
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [region]);

  return { data, loading, error };
}
