// src/Footer.jsx

import React from "react";

function Footer() {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <p>Copyright © {year}</p> {/* Render the current year dynamically */}
    </footer>
  );
}

export default Footer;
