import React from "react";
import "./GameCard.css";

function GameCard(props) {
  return (
    <div className="card" key={props.id} onClick={props.handleClick}>
      <div className="imageBox">
        <img 
          alt={props.name}
          src={props.image1} 
        />
      </div>
    </div>
  )
}

export default GameCard;