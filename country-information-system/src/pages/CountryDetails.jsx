import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetchCountryByCode from "../hooks/useFetchCountryByCode";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { code } = useParams();
  const { country, loading, error } = useFetchCountryByCode(code);

  if (loading) return <p className="loading">Loading country details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!country) return <p className="error">Country not found</p>;

  return (
    <div className="country-details-page">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="country-details-card">
        <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
        <div className="country-info">
          <h1>{country.name}</h1>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}