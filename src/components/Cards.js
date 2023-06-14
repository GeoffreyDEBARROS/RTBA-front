import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";


const Cards = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/messages")
      .then((res) => setMessages(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {messages.map((item, index) => (
        <div className="card" key={index}>
          <div className="ba-title">
            <h3>{item.title}</h3>
          </div>
          <div className="info-ba">
            <span>B.A de : {item.user_id}</span>
            <span>{moment(item.created_at).format('DD/MM/YY')}</span>
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
  );
};

export default Cards;
