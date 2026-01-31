import React, { useState } from "react";
import useFetchCountries from "../hooks/useFetchCountries";
import CountryCard from "../components/CountryCard";
import RegionCard from "../components/RegionCard";
import "./Home.css";

export default function Home() {
  const { countries, loading, error } = useFetchCountries();
  const [query, setQuery] = useState("");

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const regions = [...new Set(countries.map(c => c.region))]
    .map(region => ({
      region,
      count: countries.filter(c => c.region === region).length
    }));

  return (
    <div className="home-page">
      <h1>Explore Countries</h1>
      <p>Search and explore countries by region and name.</p>

      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="regions-grid">
        {regions.map(r => (
          <RegionCard key={r.region} region={r.region} count={r.count} />
        ))}
      </div>

      {loading && (
        <div className="added-countries">
          {Array(12).fill(0).map((_, i) => <CountryCard key={i} loading />)}
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {!loading && !error && filteredCountries.length > 0 && (
        <div className="added-countries">
          {filteredCountries.map(country => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      )}

      {!loading && !error && filteredCountries.length === 0 && (
        <p className="no-results">No countries found.</p>
      )}
    </div>
  );
}