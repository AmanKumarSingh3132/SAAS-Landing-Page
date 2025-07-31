import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="company-name">MyCompany</span>
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;