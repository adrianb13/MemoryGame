import React from "react";
import "./Endgame.css";

class EndGame extends React.Component {
  render () {
    return (
      <div>
        {this.props.winner ? ( 
          <div className="winner"
            onClick={() => this.props.newGame()}>
              <div className="display">CLICK TO PLAY AGAIN</div>
          </div>
        ) : (
          <div className="loser"
            onClick={() => this.props.newGame()}>
              <div className="display">CLICK TO PLAY AGAIN</div>
          </div>
        )}
      </div>
    )
  }
}

export default EndGame;