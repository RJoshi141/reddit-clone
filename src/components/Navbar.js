import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Reddit Clone Logo" className="logo" />
        <span className="brand-name">Reddit Clone</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/profile" className="nav-link">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/messages" className="nav-link">
          <i className="fas fa-envelope"></i>
        </Link>
        <Link to="/notifications" className="nav-link">
          <i className="fas fa-bell"></i>
        </Link>
        <Link to="/settings" className="nav-link">
          <i className="fas fa-cog"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
