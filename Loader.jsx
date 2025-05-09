// src/Components/Loader.js
import React from 'react';
import '../Styles/Loader.css'; // Ensure this path is correct

const Loader = () => (
  <div className="loader-overlay">
    <div className="dot-loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default Loader;