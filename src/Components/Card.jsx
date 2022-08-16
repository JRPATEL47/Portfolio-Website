import React from "react";

const Card = ({ heading, detail }) => {
  return (
    <div className="card">
      <span>{heading}</span>
      <span className="satoshi">{detail}</span>
    </div>
  );
};

export default Card;
