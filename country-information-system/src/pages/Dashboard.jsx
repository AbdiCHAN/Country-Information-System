import React from "react";
import { Link } from "react-router-dom";
import useFetchCountries from "../hooks/useFetchCountries";
import "./Dashboard.css";

export default function Dashboard() {
  const { countries, loading, error } = useFetchCountries();

  // Compute summary stats
  const totalCountries = countries.length;
  const regions = [...new Set(countries.map(c => c.region))];
  const totalRegions = regions.length;

  const mostPopulated = countries.reduce((max, country) => 
    country.population > (max?.population || 0) ? country : max
  , null);

  if (loading) return <p className="loading">Loading dashboard...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Overview of all countries and regions</p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Total Countries</h2>
          <p>{totalCountries}</p>
        </div>

        <div className="dashboard-card">
          <h2>Total Regions</h2>
          <p>{totalRegions}</p>
        </div>

        <div className="dashboard-card">
          <h2>Most Populated Country</h2>
          <p>{mostPopulated ? `${mostPopulated.name} (${mostPopulated.population.toLocaleString()})` : "N/A"}</p>
        </div>

        <div className="dashboard-card add-country-card">
          <h2>Add New Country</h2>
          <Link to="/add-country" className="add-country-link">Go</Link>
        </div>
      </div>
    </div>
  );
}