import React, { useState } from "react";
import Footer from "./Footer";

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="header">
      <h1>RTBA</h1>

      <div className="burger-btn" onClick={handleClick}>
        <span
          className={`burger-line line1 ${
            isNavigationOpen ? "line1-anim" : ""
          }`}
        ></span>
        <span
          className={`burger-line line2 ${
            isNavigationOpen ? "line2-anim" : ""
          }`}
        ></span>
        <span
          className={`burger-line line3 ${
            isNavigationOpen ? "line3-anim" : ""
          }`}
        ></span>
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
