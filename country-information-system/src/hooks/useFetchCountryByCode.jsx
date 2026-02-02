import { useState, useEffect } from "react";

export default function useFetchCountryByCode(code) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) return;

    const fetchCountry = async () => {
      try {
        const fields = ["name","cca3","capital","region","population","flags", "language"].join(",");
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=${fields}`);
        if (!res.ok) throw new Error(`Failed to fetch country: ${res.status}`);

        const data = await res.json();
        
        const c = Array.isArray(data) ? data[0] : data;
        
        const formatted = {
          name: c.name.common,
          code: c.cca3,
          capital: c.capital ? c.capital[0] : "N/A",
          region: c.region,
          population: c.population,
          flag: c.flags.svg,
          language: c.language
        };

        setCountry(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  return { country, loading, error };
}