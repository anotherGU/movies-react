import React from "react";
import "./Card.css";


const Card = ({poster}) => {
  return (
    <div className="trends__column">
      <div className="trends__card">
        <img
          src={poster}
          alt=""
          className="image"
        />
        <div className="plus__icon"></div>
      </div>
    </div>
  );
};

export default Card;
