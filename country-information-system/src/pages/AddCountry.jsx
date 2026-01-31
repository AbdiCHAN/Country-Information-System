import React, { useState } from "react";
import "./AddCountry.css";

export default function AddCountry() {
  // Form state for add/edit
  const [form, setForm] = useState({
    name: "",
    capital: "",
    region: "",
    population: "",
    flag: "",
  });

  // List of countries in this component
  const [countries, setCountries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submit (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.capital || !form.region) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingIndex !== null) {
      // Update existing country
      const updated = [...countries];
      updated[editingIndex] = form;
      setCountries(updated);
      setEditingIndex(null);
    } else {
      // Add new country
      setCountries([...countries, form]);
    }

    // Clear form
    setForm({ name: "", capital: "", region: "", population: "", flag: "" });
  };

  // Handle delete
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  // Handle edit
  const handleEdit = (index) => {
    setForm(countries[index]);
    setEditingIndex(index);
  };

  return (
    <section className="add-country-page">
      <h1>{editingIndex !== null ? "Edit Country" : "Add New Country"}</h1>
      <p>
        Fill in the details below to{" "}
        {editingIndex !== null ? "update" : "add"} a country.
      </p>

      <form className="country-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Country Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="capital"
          placeholder="Capital City"
          value={form.capital}
          onChange={handleChange}
          required
        />
        <select name="region" value={form.region} onChange={handleChange} required>
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
          type="number"
          value={form.population}
          onChange={handleChange}
        />
        <input
          name="flag"
          placeholder="Flag Image URL"
          value={form.flag}
          onChange={handleChange}
        />

        <div className="form-actions">
          <button type="button" onClick={() => setForm({ name: "", capital: "", region: "", population: "", flag: "" })}>
            Clear Form
          </button>
          <button type="submit">
            {editingIndex !== null ? "Update Country" : "Add Country"}
          </button>
        </div>
      </form>

      {countries.length > 0 && (
        <div className="added-countries">
          <h2>Countries List</h2>
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <h3>{country.name}</h3>
              <p>
                <strong>Capital:</strong> {country.capital} <br />
                <strong>Region:</strong> {country.region} <br />
                {country.population && <><strong>Population:</strong> {country.population} <br /></>}
              </p>
              {country.flag && <img src={country.flag} alt={`${country.name} flag`} width="120" style={{ border: "1px solid #ccc" }} />}
              <div className="country-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
