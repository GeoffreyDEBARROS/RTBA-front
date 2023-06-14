import React from "react";
import Header from "../components/Header";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="login">
        <div className="title">
          <h4>Connecte toi !</h4>
          <p className="sub-title">
            Tu pourras ensuite partager tes B.A et liker celles des autres, trop cool.
          </p>
        </div>
        <form>
          <label htmlFor="mail">Ton adresse mail</label>
          <input type="email" id="mail" name="mail" />
          <label htmlFor="password">Et ton mot de passe</label>
          <input type="password" id="password" name="password" />
          <button type="submit" onClick={handleSubmit}>
            j'me connecte !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
