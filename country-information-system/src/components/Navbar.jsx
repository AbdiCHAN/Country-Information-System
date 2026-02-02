import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      
      <nav className="navbar-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/add-country">Add Country</NavLink>
        <NavLink to="/about">About</NavLink>
        <button className="navbar-auth">Sign In</button>
      </nav>

      
    </header>
  );
}
