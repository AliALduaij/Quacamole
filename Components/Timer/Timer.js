import React, { Component } from "react";

import CountDown from "react-native-countdown-component";
import styles from "./style";

class GameTimer extends Component {
  render() {
    return (
      <CountDown
        until={60 * 2}
        size={13}
        onFinish={() => alert("Finished")}
        digitStyle={{ backgroundColor: "#FFF" }}
        timeToShow={["M", "S"]}
        timeLabels={{ m: "", s: "" }}
        style={styles.timerPosition}
      />
    );
  }
}

export default GameTimer;
