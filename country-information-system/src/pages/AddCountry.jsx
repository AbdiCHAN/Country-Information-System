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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.capital || !form.region) {
      alert("Please fill in all required fields");
      return;
    }

    alert("Country successfully added (demo only)");
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
    </section>
  );
}
