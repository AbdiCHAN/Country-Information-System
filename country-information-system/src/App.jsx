import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddCountry from "./pages/AddCountry";
import About from "./pages/About";
import CountryDetails from "./pages/CountryDetails";

export default function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home page with search and country cards */}
        <Route path="/" element={<Home />} />

        {/* Dashboard page with stats */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add Country page */}
        <Route path="/add-country" element={<AddCountry />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Country Details page with dynamic code param */}
        <Route path="/country/:code" element={<CountryDetails />} />

        {/* Catch-all 404 */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "100px", color: "#334155" }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}