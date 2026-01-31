import React, { useState } from "react";
import styles from "./Home.module.css";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import RegionCard from "../components/RegionCard";
import Footer from "../components/Footer";

import useFetchCountries from "../hooks/useFetchCountries";

export default function Home() {
  const { countries, loading, error } = useFetchCountries();
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const regions = [...new Set(countries.map(c => c.region))]
    .filter(Boolean)
    .map(region => ({
      region,
      count: countries.filter(c => c.region === region).length
    }));

  return (
    <>
      {/* HERO SECTION (YOUR UI) */}
      <div className={styles.Homee}>
        <h1>Welcome to Aloo World Viewer</h1>
        <p>
          explore where you will never visit <br />
          i doubt you did geography
        </p>

        <div className={styles.pri}>
          <button>Get Started</button>
          <button>Learn here</button>
        </div>
      </div>

      {/* SEARCH */}
      <SearchBar onSearch={setSearch} />

      {/* REGIONS */}
      <div className={styles.regions}>
        {regions.map(r => (
          <RegionCard
            key={r.region}
            region={r.region}
            count={r.count}
          />
        ))}
      </div>

      {/* STATES */}
      {loading && <p className={styles.loading}>Loading countries...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {/* COUNTRIES */}
      {!loading && !error && filteredCountries.length > 0 && (
        <div className={styles.countries}>
          {filteredCountries.map(country => (
            <CountryCard
             countries={filteredCountries} search={search}
            />
          ))}
        </div>
      )}

      {!loading && !error && filteredCountries.length === 0 && (
        <p className={styles.noResults}>No countries found.</p>
      )}

      <Footer />
    </>
  );
}
