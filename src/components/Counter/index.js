import React from "react";
import GameCard from "../GameCard";
import memoryCards from "../../data/cards.json";
import "./Counter.css"

// Populate json data in random order
const randomizer = (memoryCards) => {
let n = memoryCards.length;
let tempArr = []

for ( var i = 0; i < n-1; i++ ) {
  tempArr.push(memoryCards.splice(Math.floor(Math.random()*memoryCards.length),1)[0]);
}
tempArr.push(memoryCards[0]);
let newArr = tempArr;
return newArr
}

let newArr = randomizer(memoryCards);
let clickedCards = [];

class Counter extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    cheer: "",
    newArr
  };

  handleClick = id => {
    let playcards = this.state.newArr;
    const currCard = playcards.filter(card => card.id === id);
    const checkCard = clickedCards.filter(card => card === currCard[0].id);

    console.log(checkCard)

    if (checkCard[0] !== currCard[0].id) {
      this.setState({
        score: this.state.score + 1
      });
      clickedCards.push(currCard[0].id);

      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score +1
        });
      };
      
    } else if (checkCard[0] === currCard[0].id) {
      this.setState({
        score: 0
      });
      clickedCards = [];
    };
  };

  render() {
    return (
      <div className="container">
        <div className="scoreboard">
          <div className="score">Your Score: {this.state.score}</div>
          <div className="score">High Score: {this.state.highScore}</div>
          <div>{this.state.cheer}</div>
          <div style={{clear: "both"}}></div>
        </div>
        {newArr.map(memoryCard => (
          <GameCard
            id={memoryCard.id}
            key={memoryCard.id}
            image1={memoryCard.image1}
            name={memoryCard.name}
            handleClick={this.handleClick}
          />
        ))}
        <div style={{clear: "both"}}></div>
      </div>
    )
  }
}

export default Counter;