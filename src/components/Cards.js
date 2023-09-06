import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const pseudo = localStorage.getItem("pseudo");
  const role = localStorage.getItem("role");
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/messages")
      .then((res) => {
        const sortedMessages = res.data.sort((b, a) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setMessages(sortedMessages);
      })
      .catch((error) => console.log(error));
  }, []);

  // Fonction pour supprimer la BA //
  const deleteBA = (messageId) => {
    setTimeout(() => {
      const confirmation = window.confirm(
        "Êtes-vous sûr de vouloir supprimer votre BA ?"
      );
      if (confirmation) {
        axios.delete(`http://localhost:3001/api/messages/${messageId}`);
        navigate("/");
        window.location.reload();
      }
    }, 400);
  };
  //

  // Fonction pour like une BA //
  const likeBa = (messageId) => {
    axios
      .put(`http://localhost:3001/api/messages/${messageId}/like`)
      .then((res) => {
        // Mise à jour de l'état avec le nouveau nombre de likes
        const updatedMessages = messages.map((message) => {
          if (message.id === messageId) {
            return { ...message, likes_count: message.likes_count + 1 };
          }
          return message;
        });
        setMessages(updatedMessages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //

  return (
    <div className="card-container">
      {messages.map((item, index) => (
        <div className="card" key={index}>
          <div className="ba-title">
            <h3>{item.title}</h3>
            {(role === "admin" || pseudo === item.pseudo) && (
              <button onClick={() => deleteBA(item.id)} id="delete-ba">
                &#x2716;
              </button>
            )}
          </div>
          <div className="info-ba">
            <span>B.A de : {item.pseudo}</span>
            <span>{moment(item.created_at).format("YY/MM/DD")}</span>
          </div>
          <div className="text-ba">
            <p>{item.content}</p>
          </div>
          <div className="likes">
            <div className="like-count">{item.likes_count} likes</div>
            <button onClick={() => likeBa(item.id)}>&#x2764;</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
