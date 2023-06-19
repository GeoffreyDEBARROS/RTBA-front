import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const pseudo = document.getElementById("pseudo").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const passChecker = document.getElementById("passChecker").value;
    const error = document.getElementById("error");
    const success = document.getElementById("success");

    const data = {
      pseudo: pseudo,
      mail: mail,
      password: password,
      passChecker: passChecker,
    };

    if (!pseudo || !mail || !password) {
      error.innerHTML = "Tous les champs doivent être remplis";
      setTimeout(() => {
        error.innerHTML = "";
      }, 2000);
    } else if (password !== passChecker) {
      error.innerHTML = "Les mots de passe ne correspondent pas.";
      setTimeout(() => {
        error.innerHTML = "";
      }, 2000);
      return;
    }

    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    if (password.length < 8 || !hasNumber || !hasUpperCase) {
      error.innerHTML =
        "Le mot de passe doit contenir au moins 8 caractères, dont au moins un chiffre et une majuscule";
      success.innerHTML = "";
      setTimeout(() => {
        error.innerHTML = "";
      }, 2000);
    }

    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          success.innerHTML = "Compte créé !";
          setTimeout(() => {
            success.innerHTML = "";
            navigate("/connexion");
          }, 2000);
        } else {
          throw new Error("Erreur lors de la création du compte");
        }
      })
      .catch((error) => {
        console.error(error); // Gestion des erreurs
      });
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
        <form action="http://localhost:3001/api/users" method="post">
          <label htmlFor="pseudo">Un p'tit pseudo</label>
          <input type="text" id="pseudo" name="pseudo" />
          <label htmlFor="mail">Ton adresse mail</label>
          <input type="email" id="mail" name="mail" />
          <label htmlFor="password">Et le mot de passe</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="passChecker">Vérification du mot de passe</label>
          <input type="password" id="passChecker" name="passChecker" />
          <button type="submit" onClick={handleSubmit} id="login-btn">
            Je m'inscris !
          </button>
          <span id="error"></span>
          <span id="success"></span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
