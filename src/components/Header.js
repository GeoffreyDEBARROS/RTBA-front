import React, { useState } from "react";

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="header">
      <h1>RTBA</h1>

      <div className="burger-btn" onClick={handleClick}>
        <span id="line1" className="burger-line"></span>
        <span id="line2" className="burger-line"></span>
        <span id="line3" className="burger-line"></span>
      </div>

      <div
        className={`navigation ${isNavigationOpen ? "navigation-display" : ""}`}
      >
        <ul>
          <li>Inscription</li>
          <li>Connexion</li>
          <li>Profil</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
