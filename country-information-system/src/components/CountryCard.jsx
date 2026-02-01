import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

function Featured({ countries = [], search = "" }) {
  // Filter countries by search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="top">
        <h2>Countries</h2>
        <p>Discover some elegant countries like Kenya</p>
      </div>

      <div className="ficha">
        <div className="cont">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, id) => (
              <Link
                to={`/country/${country.code}`}
                key={id}
                className="Cardss"
              >
                <img src={country.flag} alt={`${country.name} flag`} />

                <div className="lower">
                  <h3>{country.name}</h3>
                  <p>
                    Capital: <b>{country.capital}</b>
                  </p>
                  <p>
                    Population: <b>{country.population.toLocaleString()}</b>
                  </p>
                  <p>


                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="pp">
              <p>Bwana, add a valid country</p>
            </div>
          )}

          {search === "" && (
            <Link to="/more" className="seeMore">
              Hundreds + More Countries
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Featured;
