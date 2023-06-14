import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/inscription">
            <li>Inscription</li>
          </NavLink>
          <NavLink to="/connexion">
            <li>Connexion</li>
          </NavLink>
          <NavLink to="/profil">
            <li>Profil</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
