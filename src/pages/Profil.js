import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Profil = () => {
  const userId = localStorage.getItem("id");
  const [userCo, setUserCo] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${userId}`)
      .then((res) => setUserCo(res.data.member));
  }, [userId]);

  // Fonctions pour modifier le nom du client //
  const handleNameChange = (event) => {
    setUserCo({
      ...userCo,
      pseudo: event.target.value,
    });
  };
  const updateName = () => {
    axios
      .put(`http://localhost:3001/api/users/${userId}`, {
        pseudo: userCo.pseudo,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setMessage("Pseudo modifée");
  };
  //

  // Fonctions pour modifier le mail du client //
  const handleMailChange = (event) => {
    setUserCo({
      ...userCo,
      mail: event.target.value,
    });
  };
  const updateMail = () => {
    axios
      .put(`http://localhost:3001/api/users/${userId}`, {
        mail: userCo.mail,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setMessage("Adresse email modifée");
  };
  //

   // Fonction pour modifier le mot de passe du client //
   const updatePassword = () => {
    axios
      .put(`http://localhost:3001/api/users/${userId}`, {
        password: passwordInput,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setMessage("Mot de passe modifié");
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  //

  return (
    <div>
      <Header />
      <div className="profil">
        <h4>Mon profil</h4>
        <div className="account-infos">
          <p>Consulte où modifie les informations de ton compte</p>
          <div className="userInfos">
            Mon pseudo :
            <input
              type="text"
              value={userCo.pseudo}
              onChange={handleNameChange}
            />
            <button onClick={updateName}>Modifier mon prénom</button>
          </div>

          <div className="userInfos">
            Mon email :
            <input
              type="text"
              value={userCo.mail}
              onChange={handleMailChange}
            />
            <button onClick={updateMail}>Modifier mon adresse email</button>
          </div>

          <div className="userInfos">
            Nouveau mot de passe :
            <input
              type="password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
            <button onClick={updatePassword}>Modifier mon mot de passe</button>
          </div>
        </div>
        <p id="success-msg">{message}</p>
      </div>
    </div>
  );
};

export default Profil;
