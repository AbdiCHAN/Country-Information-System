import React from 'react'
import styles from "./Featured.module.css"

function Featured({search}) {

    const countries = [
    { name: "Kenya", capital: "Nairobi", population: "53.7M", language: "Swahili" },
    { name: "France", capital: "Paris", population: "67.39M", language: "French" },
    { name: "Japan", capital: "Tokyo", population: "125.8M", language: "Japanese" },
    { name: "Brazil", capital: "Brasília", population: "214.3M", language: "Portuguese" },
    { name: "Canada", capital: "Ottawa", population: "38.2M", language: "English" },
    { name: "Australia", capital: "Canberra", population: "25.7M", language: "English" },
  ];

        const filterdCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||  country.name.toUpperCase().includes(search.toUpperCase()) 
    )





  return (<>
                <div className={styles.top}>
                     <h2> Countries</h2>
                <p>discover some elegant countries like kenya</p>
                </div>
            <div className={styles.ficha}>
                
               
                <div className={styles.cont}>
                    {filterdCountries.length > 0 ?(filterdCountries.map((country, id) => (
                    <div className={styles.Cardss} key={id}>
                        <img src='' alt='' ></img>
                        <div className={styles.lower}>
                            <h3>{country.name}</h3>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                            <p>population: {country.language}</p>
                        </div>
                        
                    </div>)))
                    :
                     (<p>Probably your Country does not exist</p>)}

                     <a href='/more'className={styles.seeMore}>Hundreds + ,More</a>
                </div>
            </div>

            

            
  
  
  
  
  </>
  )
}

export default Featured