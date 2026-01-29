import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/add-country" style={{ marginRight: "1rem" }}>Add Country</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
