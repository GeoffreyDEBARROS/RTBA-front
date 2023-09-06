import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import moment from "moment/moment";

const MyBa = () => {
  const pseudo = localStorage.getItem("pseudo");
  const [userBa, setUserBa] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/messages/${pseudo}`)
      .then((res) => {
        setUserBa(res.data);
      })
      .catch((error) => console.log(error));
  }, [pseudo]);

  // Fonction pour supprimer la BA //
  const deleteBA = (messageId) => {
    setTimeout(() => {
      const confirmation = window.confirm(
        "Êtes-vous sûr de vouloir supprimer votre BA ?"
      );
      if (confirmation) {
        axios.delete(`http://localhost:3001/api/messages/${messageId}`);
        window.location.reload();
      }
    }, 400);
  };
  //

  return (
    <div>
      <Header />
      <div className="myBas">
        <h4>Mes B.A's</h4>
        <div className="card-container">
          {userBa.map((item, index) => (
            <div className="card" key={index}>
              <div className="ba-title">
                <h3>{item.title}</h3>
                {pseudo === item.pseudo && (
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
                <div className="like-count">8 likes</div>
                <button>&#x2764;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBa;
