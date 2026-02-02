import React, { useState } from "react";
import "./Home.css";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import RegionCard from "../components/RegionCard";
import Footer from "../components/Footer";

import useFetchCountries from "../hooks/useFetchCountries";

export default function Home() {
  const { countries, loading, error } = useFetchCountries();
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const regions = [...new Set(countries.map((c) => c.region))]
    .filter(Boolean)
    .map((region) => ({
      region,
      count: countries.filter((c) => c.region === region).length,
    }));

  return (
    <>
      
      <div className="Homee">
        <h1>Welcome to World Viewer</h1>
        <p>
          Explore the statistics of countries around the World <br />
        </p>

        <div className="pri">
          <button>Get Started</button>
          <button>Learn here</button>
        </div>
      </div>

  
      <SearchBar onSearch={setSearch} />

     
      <div className="regions">
        {regions.map((r) => (
          <RegionCard key={r.region} region={r.region} count={r.count} />
        ))}
      </div>

      {loading && <p className="loading">Loading countries...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && filteredCountries.length > 0 && (
        <CountryCard countries={filteredCountries} search={search} />
      )}

      {!loading && !error && filteredCountries.length === 0 && (
        <p className="noResults">No countries found.</p>
      )}

      <Footer />
    </>
  );
}
