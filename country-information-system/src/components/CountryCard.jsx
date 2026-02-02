import React from 'react';
import styles from "./CountryCard.module.css"; 
import { Link } from "react-router-dom";

function Featured({ countries = [], search = "" }) {

  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={styles.top}>
        <h2>Countries</h2>
        <p>Discover some elegant countries like Kenya</p>
      </div>

      <div className={styles.ficha}>
        <div className={styles.cont}>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, id) => (
              <Link
                to={`/country/${country.code}`}
                key={id}
                className={styles.Cardss}
              >
                <img src={country.flag} alt={`${country.name} flag`} />
                <div className={styles.lower}>
                  <h3>{country.name}</h3>
                  <p>Capital: <b> {country.capital}</b></p>
                  <p>Population: <b>{country.population.toLocaleString()}</b></p>
                  <p>Language: <b>{country.language || "Haijulikani"}</b></p>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.pp}>
              <p>Bwana, add a valid country</p>
            </div>
          )}

       
        </div>
      </div>
    </>
  );
}

export default Featured;
