import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);

  //loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // get country data
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);

  const totalCount = countries.length;

  const getCountPerRegion = (name) => {
    return countries.filter((c) => c.region === name).length;
  };

  const trackedRegions = new Set(countries.map(c => c.region)).size;

  const displayRegions = [
    { name: "Africa", icon: "🧭" },
    { name: "Americas", icon: "🌍" },
    { name: "Asia", icon: "🏔️" },
    { name: "Europe", icon: "🏰" },
    { name: "Oceania", icon: "🌊" }
  ];

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinning-world">🌍</div>
        <p className="loader-text">Locating countries...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <nav className="top-nav">
        <div className="nav-logo">
          Dashboard
        </div>
      </nav>

      <header className="dashboard-header">
        <div className="header-info">
          <h1>Overview</h1>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => navigate("/add-country")}>
            ➕ Add Country
          </button>
        </div>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">🌍</div>
            <span>Total Countries</span>
          </div>
          <div className="stat-value">{totalCount}</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon-wrapper">🗺️</div>
            <span>Regions Tracked</span>
          </div>
          <div className="stat-value">{trackedRegions}</div>
        </div>
      </section>

      <div className="section-title-row">
        <h3>Navigation Hub - Regions</h3>
      </div>
      <section className="regions-grid">
        {displayRegions.map((region) => (
          <div key={region.name} className="region-card">
            <div className="region-icon">{region.icon}</div>
            <div className="region-name">{region.name}</div>
            <div className="region-count">{getCountPerRegion(region.name)} Countries</div>
          </div>
        ))}
      </section>

      <section className="analysis-box">
        <div className="analysis-header">
          <h3>Distribution Analysis</h3>
        </div>

        <div className="analysis-chart">
          {displayRegions
            .map(r => ({ ...r, count: getCountPerRegion(r.name) }))
            .sort((a, b) => b.count - a.count)
            .map((item) => (
              <div key={item.name} className="progress-item">
                <div className="progress-label">
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${totalCount > 0 ? (item.count / totalCount) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <footer className="dashboard-footer">
        <div className="status-indicator">
          <div className="dot"></div>
          <span>All systems operational</span>
        </div>
      </footer>
    </div>
  );
}
