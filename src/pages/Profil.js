import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const navigate = useNavigate();
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

  // Fonction pour supprimer le compte du clien //
  const deleteAccount = () => {
    setTimeout(() => {
      const confirmation = window.confirm(
        "Êtes-vous sûr de vouloir supprimer votre compte ?"
      );
      if (confirmation) {
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        axios.delete(`http://localhost:3001/api/users/${userId}`);
        navigate("/");
        window.location.reload();
      }
    }, 400);
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

          <button id="delete-btn" onClick={deleteAccount}>
            Supprimer mon compte
          </button>
        </div>
        <p id="success-msg">{message}</p>
      </div>
    </div>
  );
};

export default Profil;
