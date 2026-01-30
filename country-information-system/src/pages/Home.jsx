import React from "react";
import useFetchCountries from "../hooks/useFetchCountries";

export default function Home() {
  const { data, loading, error } = useFetchCountries("kenya");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Home Page</h1>

      {data.map((country) => (
        <div key={country.cca3}>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital?.[0]}</p>
          <p>Region: {country.region}</p>
        </div>
      ))}
    </div>
  );
}