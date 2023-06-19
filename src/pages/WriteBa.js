import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import moment from "moment/moment";
import axios from "axios";

const WriteBa = () => {
  const userId = localStorage.getItem("id");
  const [userCo, setUserCo] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${userId}`)
      .then((res) => setUserCo(res.data.member));
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const pseudo = document.getElementById("pseudo").value;
    const created_at = document.getElementById("created_at").value;
    const content = document.getElementById("content").value;

    const data = {
      title: title,
      pseudo: pseudo,
      created_at: created_at,
      content: content,
    };
    setMessage("B.A partagé !");
    if (!title || !content) {
      setMessage("Tous les champs doivent être remplis");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    fetch("http://localhost:3001/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setTimeout(() => {
            setMessage("");
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
      <div className="Write-ba">
        <h4>Raconte ta B.A</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Donne un titre a ta B.A</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="pseudo">Ton pseudo</label>
          <input type="text" id="pseudo" name="pseudo" value={userCo.pseudo} />
          <label htmlFor="created_at">Date d'écriture</label>
          <input
            type="text"
            id="created_at"
            name="created_at"
            value={moment(new Date()).format("DD/MM/YY")}
          />
          <label htmlFor="content">Raconte !</label>
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
          <button>Partage ta B.A !</button>
          <span id="error">{message}</span>
        </form>
      </div>
    </div>
  );
};

export default WriteBa;
