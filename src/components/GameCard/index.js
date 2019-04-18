import React from "react";
import "./GameCard.css";

class GameCard extends React.Component {
  render() {
    return (
      <div className="card" 
        key={this.props.id} 
        onClick={() => this.props.handleClick()}>
        <div className="imageBox">
          <img className="image"
            alt={this.props.name}
            src={this.props.image1} 
          />
        </div>
      </div>
    );
  }
}

export default GameCard;