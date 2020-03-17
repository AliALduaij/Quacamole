import React, { Component } from "react";
import styles from "./styles";
import { Image, TouchableHighlight } from "react-native";
import { View, Container, Text } from "native-base";
import GameTimer from "../Timer/Timer";

class GamePage extends Component {
  state = {
    showImage: Math.floor(Math.random() * 3) + 1,
    score: 0,
    quacamole: 0
  };

  changeNumber = () => {
    this.setState({
      showImage: Math.floor(Math.random() * 3) + 1
    });
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 5
    });
  };

  changeQuacamole = position => {
    this.setState({
      quacamole: position
    });
  };

  returnQuacamole = () => {
    this.setState({
      quacamole: 0
    });
  };

  gotIt = position => {
    this.changeQuacamole(position);

    this.incrementScore();
    setTimeout(() => {
      this.returnQuacamole();
    }, 1000);

    console.log("Quacamole" + this.state.quacamole);
  };
  // change did update to did mount , because wrote did update by mistake last time using tab .
  componentDidMount() {
    setInterval(() => this.changeNumber(), 1000);
  }

  render() {
    //I didnt use mapping because every picture will have a condition !!
    return (
      <Container>
        <Text style={styles.time}>Time:</Text>
        <GameTimer />
        <Text style={styles.score}>Score: {this.state.score}</Text>
        <View style={styles.square}>
          <View style={styles.circle}>
            {this.state.showImage == 1 ? (
              <TouchableHighlight onPress={() => this.gotIt(1)}>
                {this.state.quacamole == 1 ? (
                  <Image
                    source={require("../../assets/guacamole.png")}
                    style={styles.img}
                  />
                ) : (
                  <Image
                    source={require("../../assets/avocado.png")}
                    style={styles.img}
                  />
                )}
              </TouchableHighlight>
            ) : null}
          </View>
          <View style={styles.circle}>
            {this.state.showImage == 2 ? (
              <TouchableHighlight onPress={() => this.gotIt(2)}>
                {this.state.quacamole == 2 ? (
                  <Image
                    source={require("../../assets/guacamole.png")}
                    style={styles.img}
                  />
                ) : (
                  <Image
                    source={require("../../assets/avocado.png")}
                    style={styles.img}
                  />
                )}
              </TouchableHighlight>
            ) : null}
          </View>
          <View style={styles.circle}>
            {this.state.showImage == 3 ? (
              <TouchableHighlight onPress={() => this.gotIt(3)}>
                {this.state.quacamole == 3 ? (
                  <Image
                    source={require("../../assets/guacamole.png")}
                    style={styles.img}
                  />
                ) : (
                  <Image
                    source={require("../../assets/avocado.png")}
                    style={styles.img}
                  />
                )}
              </TouchableHighlight>
            ) : null}
          </View>
        </View>
      </Container>
    );
  }
}

export default GamePage;
