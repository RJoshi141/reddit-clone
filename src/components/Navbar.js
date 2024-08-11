import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Reddit Clone Logo" className="logo" />
        <span>Reddit Clone</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">Profile</a>
        <a href="/">Messages</a>
        <a href="/">Notifications</a>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
