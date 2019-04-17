import React, { Component } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Header>Test Your Memory</Header>
        <Instructions><strong>Instructions:</strong> Click on an image, but REMEMBER which one it is. You must click a new image without repeating yourself. You will gain <strong>1 point for each new image</strong> you click. But if <strong>you repeat yourself, you lose the game</strong> and have to restart back at 0.  Can you beat your High Score?!?!?!</Instructions>
        <Counter />
      </div>
    );
  }
}

export default App;
