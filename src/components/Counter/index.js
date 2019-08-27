import React from "react";
import GameCard from "../GameCard";
import EndGame from "../EndGame";
import memoryCards from "../../data/cards.json";
import "./Counter.css"

// Populate json data in random order
/* const randomizer = (memoryCards) => {
  let n = memoryCards.length;
  let tempArr = []

  for ( var i = 0; i < n-1; i++ ) {
    tempArr.push(memoryCards.splice(Math.floor(Math.random()*memoryCards.length),1)[0]);
  }
  tempArr.push(memoryCards[0]);
  
  let newArr = tempArr;
  return newArr
}
let newArr = randomizer(memoryCards); */
let clickedCards = [];

class Counter extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    cheer: "",
    newArr: memoryCards,
    endGame: false,
    winner: false
  };

  randomizer = (memoryCards) => {
    let n = this.state.newArr.length;
    let tempArr = []
  
    for ( var i = 0; i < n-1; i++ ) {
      tempArr.push(this.state.newArr.splice(Math.floor(Math.random()*this.state.newArr.length),1)[0]);
    }
    tempArr.push(this.state.newArr[0]);

    this.setState({
      newArr: tempArr
    })
  }

  handleClick = id => {
    let playcards = this.state.newArr;
    const currCard = playcards.filter(card => card.id === id);
    const checkCard = clickedCards.filter(card => card === currCard[0].id);

    if (checkCard[0] !== currCard[0].id) {
      this.setState({
        score: this.state.score + 1
      });
      clickedCards.push(currCard[0].id);

      if (this.state.score === 12) {
        this.setState({
          cheer: "You WIN!!! You Got ALLLLL The Minions!!!",
          endGame: true,
          winner: true
        })
      } else if (this.state.score < 12) {
        this.setState({
          cheer: "Nice Choice! Pick Again!"
        })
      }

      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.score +1
        });
      };
      
    } else if (checkCard[0] === currCard[0].id) {
      this.setState({
        score: 0,
        cheer: "Aww man!!! They got you this time!",
        endGame: true
      });
      clickedCards = [];
    };
    this.randomizer(this.state.newArr);
  };

  newGame = () => {
    this.setState({
      endGame: false,
      winner: false
    })
    this.randomizer(this.state.newArr);
  }

  render() {
    return (
      <div className="container">
        <div className="scoreboard">
          <div className="score">Your Score: {this.state.score}</div>
          <div className="score">High Score: {this.state.highScore}</div>
          <div style={{clear: "both"}}></div>
          <div className="cheer">{this.state.cheer}</div>
        </div>
        <div>
          {this.state.endGame ? (
            <EndGame
              winner={this.state.winner} 
              newGame={this.newGame}
            />
            ) : (
            <div className="gamebox">
              {this.state.newArr.map(memoryCard => (
                <GameCard
                  id={memoryCard.id}
                  key={memoryCard.id}
                  image1={memoryCard.image1}
                  name={memoryCard.name}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          )}
        </div>
        <div style={{clear: "both"}}></div>
      </div>
    )
  }
}

export default Counter;