import React from "react";
import GameCard from "../GameCard";
import memoryCards from "./cards.json";

class Counter extends React.Component {
  state = {
    count: 0,
    clicked: false
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      clicked: true
    })
  };

  render() {
    return (
      <div>
        <div>Your Score: {this.state.count}</div>
        {memoryCards.map(memoryCard => (
        <GameCard
          id={memoryCard.id}
          key={memoryCard.id}
          image1={memoryCard.image1}
          name={memoryCard.name}
          handleClick={this.handleClick}
        />
        ))}
      </div>
    )
  }
}

export default Counter;