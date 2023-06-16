import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        mail: mail,
        password: password,
      });

      const responseData = response.data; // Récupère la réponse complète
      const { pseudo, token, id } = responseData; // Extraire les valeurs du pseudo, du token et de l'id de la réponse

      console.log(response.data);

      localStorage.setItem("pseudo", pseudo);
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      setMail("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setMessage("Erreur lors de la connexion:", error.response.data.error);
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <div className="title">
          <h4>Connecte toi !</h4>
          <p className="sub-title">
            Tu pourras ensuite partager tes B.A et liker celles des autres, trop
            cool.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="mail">Ton adresse mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="password">Et ton mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">j'me connecte !</button>
          <span id="error">{message}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
