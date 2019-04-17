import React from "react";
import GameCard from "../GameCard";
import memoryCards from "../../data/cards.json";
import "./Counter.css"

let n = memoryCards.length;
let tempArr = []

for ( var i = 0; i < n-1; i++ ) {
  tempArr.push(memoryCards.splice(Math.floor(Math.random()*memoryCards.length),1)[0]);
}
tempArr.push(memoryCards[0]);
let newArr = tempArr;


class Counter extends React.Component {
  state = {
    score: 0,
    clicked: false,
    newArr
  };

  handleClick = () => {
    if (this.state.clicked === false) {
      this.setState({ 
        score: this.state.score + 1,
        clicked: true 
      });
    } else if (this.state.clicked === true) {
      this.setState({
        score: 0,
      })
    }
    console.log(this.state.clicked);
    console.log(this.state.score+1);
  }

  render() {
    return (
      <div className="container">
        <div className="scoreboard">
          <div className="score">Your Score: {this.state.score}</div>
          <div className="score">High Score: {this.state.score}</div>
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