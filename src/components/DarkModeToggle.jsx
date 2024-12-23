import React from 'react';

const DarkModeToggle = ({ isDark, toggleDarkMode }) => {
  return (
    <button 
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <span className="toggle-icon">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default DarkModeToggle; 