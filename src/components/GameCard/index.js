import React from "react";
import "./GameCard.css";

class GameCard extends React.Component {
  render() {
    return (
      <div className="card" 
        id={this.props.id}
        onClick={() => this.props.handleClick(this.props.id)}>
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