import { useState, useEffect } from "react";

export default function useFetchCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fields = ["name","cca3","capital","region","population","flags"].join(",");
        const res = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();

        const formatted = data.map(c => ({
          name: c.name.common,
          code: c.cca3,
          capital: c.capital ? c.capital[0] : "N/A",
          region: c.region,
          population: c.population,
          flag: c.flags.svg,
          language: c.language
        }));

        setCountries(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
}