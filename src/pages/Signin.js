import React from "react";
import Header from "../components/Header";

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="signin">
        <div className="title">
          <h4>Inscris toi !</h4>
          <p className="sub-title">
            Étape obligatoire pour pouvoir poster tes B.A et te la pété un max .
          </p>
        </div>
        <form>
          <label htmlFor="pseudo">Un p'tit pseudo</label>
          <input type="text" id="pseudo" name="pseudo" />
          <label htmlFor="mail">Ton adresse mail</label>
          <input type="email" id="mail" name="mail" />
          <label htmlFor="password">Et le mot de passe</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="passChecker">Vérification du mot de passe</label>
          <input type="password" id="passChecker" name="passChecker" />
          <button type="submit" onClick={handleSubmit}>
            Je m'inscrit !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
