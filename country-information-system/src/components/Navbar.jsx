import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // your CSS module

export default function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navii}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ""}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : ""}>
          Dashboard
        </NavLink>
        <NavLink to="/add-country" className={({ isActive }) => isActive ? styles.active : ""}>
          Add Country
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
          About
        </NavLink>
      </nav>
      <button className={styles.sign}>Sign In</button>
    </header>
  );
}
