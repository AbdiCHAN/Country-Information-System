import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

export default function CountryCard({ country, loading }) {
  if (loading) return <div className="country-card skeleton"></div>;

  return (
    <Link to={`/country/${country.code}`} className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <div>
        <h3>{country.name}</h3>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>
    </Link>
  );
}