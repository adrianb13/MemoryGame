import React, { Component } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Minion Mayhem</Header>
        <Instructions><strong>Instructions:</strong> Click on a Minion, but REMEMBER which one it is. You must pick a Minion without repeating yourself. You will gain <strong>1 point for each new Minion</strong> you click. But if <strong>you repeat yourself, you lose the game</strong> and your score is back at 0.  Can you track these mischievous Minions and beat your High Score?!?!?!</Instructions>
        <Counter />
      </div>
    );
  }
}

export default App;
