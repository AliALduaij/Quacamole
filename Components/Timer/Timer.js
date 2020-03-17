import React, { Component } from "react";
import { Timer } from "react-native-stopwatch-timer";

class GameTimer extends Component {
  state = {
    isTimerStart: true,

    timerDuration: 90000,
    resetTimer: false
  };

  render() {
    return (
      <Timer
        totalDuration={this.state.timerDuration}
        secs
        //Time Duration
        start={this.state.isTimerStart}
        //To start
        reset={this.state.resetTimer}
        //To reset
        options={options}
      />
    );
  }
}

export default GameTimer;

const options = {
  container: {
    position: "absolute",
    top: 275,
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center"
  }
};
