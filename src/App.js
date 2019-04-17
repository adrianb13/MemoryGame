import React, { Component } from "react";
import Header from "./components/Header";
//import Container from "./components/Container"
//import GameCard from "./components/GameCard";
import Counter from "./components/Counter";
//import memoryCards from "./data/cards.json";

class App extends Component {
  state = {
    clicked: false
  };

  randomizeOnClick = () => {
    this.setState({
      clicked: true
    })

    let n = memoryCards.length;
    let tempArr = [];
    for ( var i = 0; i < n-1; i++ ) {
      tempArr.push(memoryCards.splice(Math.floor(Math.random()*memoryCards.length),1)[0]);
    }
    tempArr.push(memoryCards[0]);
    memoryCards = tempArr;
    console.log(memoryCards);
  }

  render() {
    return (
      <div>
        <Header>Test Your Memory</Header>
        <Counter />
{/*         {memoryCards.map(memoryCard => (
          <GameCard
            id={memoryCard.id}
            key={memoryCard.id}
            image1={memoryCard.image1}
            name={memoryCard.name}
          />
        ))} */}
      </div>
    );
  }
}

export default App;
