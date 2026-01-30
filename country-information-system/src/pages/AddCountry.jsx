import { useState } from "react";
import "./AddCountry.css";

export default function AddCountry() {
  const [form, setForm] = useState({
    name: "",
    capital: "",
    region: "",
    population: "",
    flag: "",
  });

  // State to store the list of added countries
  const [countries, setCountries] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.capital || !form.region) {
      alert("Please fill in all required fields");
      return;
    }

    // Add the new country to the list
    setCountries([...countries, form]);

    // Clear the form
    setForm({ name: "", capital: "", region: "", population: "", flag: "" });
  };

  return (
    <section className="add-country-page">
      <h1>Add New Country</h1>
      <p>Fill in the details below to add a new country.</p>

      <form className="country-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Country Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="capital"
          placeholder="Capital City"
          value={form.capital}
          onChange={handleChange}
        />

        <select name="region" value={form.region} onChange={handleChange}>
          <option value="">Select Region</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Antarctic</option>
        </select>

        <input
          name="population"
          placeholder="Population"
          value={form.population}
          onChange={handleChange}
        />

        <input
          name="flag"
          placeholder="Flag Image URL"
          value={form.flag}
          onChange={handleChange}
        />

        <button type="submit">Add Country</button>
      </form>

      {/* Display added countries */}
      {countries.length > 0 && (
        <div className="added-countries">
          <h2>Added Countries</h2>
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <h3>{country.name}</h3>
              <p>
                <strong>Capital:</strong> {country.capital} <br />
                <strong>Region:</strong> {country.region} <br />
                {country.population && (
                  <>
                    <strong>Population:</strong> {country.population} <br />
                  </>
                )}
              </p>
              {country.flag && (
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width="120"
                  style={{ border: "1px solid #ccc" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
