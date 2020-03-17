import React, { Component } from "react";
import styles from "./styles";
import { Image, TouchableHighlight } from "react-native";
import { View, Container, Text } from "native-base";
import GameTimer from "../Timer/Timer";

class GamePage extends Component {
  state = {
    showImage: Math.floor(Math.random() * 3) + 1,
    score: 0
  };

  changeNumber = () => {
    this.setState({
      showImage: Math.floor(Math.random() * 3) + 1
    });
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 5
    }),
      console.log("Score" + this.state.score);
  };

  componentDidUpdate() {
    setInterval(() => this.changeNumber(), 3000);
  }

  render() {
    return (
      <Container>
        <Text style={styles.time}>Time:</Text>
        <GameTimer />
        <Text style={styles.score}>Score: {this.state.score}</Text>
        <View style={styles.square}>
          <View style={styles.circle}>
            {this.state.showImage == 1 ? (
              <TouchableHighlight onPress={this.incrementScore}>
                <Image
                  source={require("../../assets/avocado.png")}
                  style={styles.img}
                />
              </TouchableHighlight>
            ) : null}
          </View>
          <View style={styles.circle}>
            {this.state.showImage == 2 ? (
              <TouchableHighlight onPress={this.incrementScore}>
                <Image
                  source={require("../../assets/avocado.png")}
                  style={styles.img}
                />
              </TouchableHighlight>
            ) : null}
          </View>
          <View style={styles.circle}>
            {this.state.showImage == 3 ? (
              <TouchableHighlight onPress={this.incrementScore}>
                <Image
                  source={require("../../assets/avocado.png")}
                  style={styles.img}
                />
              </TouchableHighlight>
            ) : null}
          </View>
        </View>
      </Container>
    );
  }
}

export default GamePage;
