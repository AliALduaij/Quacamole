import React, { Component } from "react";
import { Content, Text, Button, View } from "native-base";
import styles from "./style";

class StartPage extends Component {
  handlePress = () => {
    this.props.navigation.navigate("GamePage");
  };

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.header}>Guac-A-Mole</Text>
        <Text style={styles.text}>
          Make the fastest and most delicios guacamole
        </Text>
        <Button bordered success onPress={this.handlePress}>
          <Text>START</Text>
        </Button>
      </View>
    );
  }
}

export default StartPage;
