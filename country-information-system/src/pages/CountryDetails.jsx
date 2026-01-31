import { useParams } from "react-router-dom";
import useFetchCountries from "../hooks/useFetchCountries";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { code } = useParams();
  const { countries } = useFetchCountries();

  const country = countries.find(c => c.code === code);
  if (!country) return null;

  return (
    <div className="details">
      <img src={country.flag} alt={country.name} />
      <div>
        <h1>{country.name}</h1>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
      </div>
    </div>
  );
}