import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navii}>
      <Link to="/" >Home</Link>
       <Link to="/dashboard">Dashboard</Link>
      <Link to="/add-country" >Add Country</Link>
      <Link to="/about" >About</Link>
      <button className={styles.sign}>Sign In</button>
    </nav>
  );
}
