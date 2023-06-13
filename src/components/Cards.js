import React from "react";

const Cards = () => {
  return (
    <div className="card">
      <div className="title">
        <h3>Titre de la BA</h3>
      </div>
      <div className="info-ba">
        <span>B.A de : Sacha</span>
        <span>06/06/2023</span>
      </div>
      <div className="text-ba">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          dolorem non est facere ratione sed eligendi expedita explicabo saepe
          similique obcaecati accusantium assumenda, maxime suscipit pariatur
          quam iste consequuntur animi a. Repudiandae assumenda sint earum
          exercitationem voluptatum, provident explicabo sed.
        </p>
      </div>
      <div className="likes">
        <div className="like-count">8 likes</div>
        <button>&#x2764;</button>
      </div>
    </div>
  );
};

export default Cards;
