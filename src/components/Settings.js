// src/components/Settings.js
import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-item">
        <label htmlFor="dark-mode-toggle" className="dark-mode-label">
          Dark Mode
          <input
            id="dark-mode-toggle"
            type="checkbox"
            checked={darkMode}
            onChange={handleToggle}
            className="dark-mode-toggle"
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default Settings;
