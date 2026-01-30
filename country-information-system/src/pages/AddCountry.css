import React from "react";
// src/pages/AddCountry.jsx
import { useState } from "react";

export default function AddCountry() {
  const [formData, setFormData] = useState({
    name: "",
    capital: "",
    region: "",
    population: "",
    flag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Country added:", formData);
    alert("Country added successfully!");
    setFormData({ name: "", capital: "", region: "", population: "", flag: "" });
  };

  const handleClear = () => {
    setFormData({ name: "", capital: "", region: "", population: "", flag: "" });
  };

  return (
    <div className="add-country-container">
      <h1>Add New Country</h1>
      <p>Fill in the details below to add a new country to the Stitch global database.</p>

      <form onSubmit={handleSubmit} className="add-country-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Country Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="capital"
            placeholder="Capital City"
            value={formData.capital}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select name="region" value={formData.region} onChange={handleChange} required>
            <option value="">Select a region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <input
            type="number"
            name="population"
            placeholder="Population"
            value={formData.population}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="flag"
            placeholder="Flag Image URL"
            value={formData.flag}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleClear}>Clear Form</button>
          <button type="submit">Add Country</button>
        </div>
      </form>

      <div className="pro-tip">
        <strong>Pro Tip:</strong> Once added, you can click on the country card in the main dashboard to edit advanced data.
      </div>
    </div>
  );
}
