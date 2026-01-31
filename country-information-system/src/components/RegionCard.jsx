import React from "react";
import "./RegionCard.css";

export default function RegionCard({ region, count }) {
  return (
    <div className="region-card">
      <h3>{region}</h3>
      <p>{count} countries</p>
    </div>
  );
}