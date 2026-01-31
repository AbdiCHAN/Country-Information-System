import { Link } from "react-router-dom";
import "./CountryCard.css";

export default function CountryCard({ country, loading }) {
  if (loading) return <div className="country-card skeleton"></div>;

  return (
    <Link to={`/country/${country.code}`} className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <div className="country-info">
        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    </Link>
  );
}