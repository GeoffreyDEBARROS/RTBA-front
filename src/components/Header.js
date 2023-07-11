import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  // Fonction pour se déconnecter du compte //
  const decoAccount = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (confirmation) {
      localStorage.removeItem("id");
      localStorage.removeItem("pseudo");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/");
      window.location.reload();
    }
  };
  //

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
          {localStorage.getItem("token") ? (
            <NavLink to="/raconte_ta_ba">
              <li>Ma B.A</li>
            </NavLink>
          ) : null}
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          {!localStorage.getItem("token") ? (
            <NavLink to="/inscription">
              <li>Inscription</li>
            </NavLink>
          ) : null}
          {!localStorage.getItem("token") ? (
            <NavLink to="/connexion">
              <li>Connexion</li>
            </NavLink>
          ) : null}

          {localStorage.getItem("token") ? (
            <NavLink to="/profil">
              <li>Profil</li>
            </NavLink>
          ) : null}
          {localStorage.getItem("token") ? (
            <li onClick={decoAccount}>Déconnexion</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Header;
