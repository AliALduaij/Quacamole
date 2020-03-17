import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  square: {
    position: "absolute",
    left: 15,
    top: 325,
    width: 350,
    height: 275,
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "black"
  },

  img: {
    width: 100,
    height: 100
  },

  score: {
    position: "absolute",
    top: 300,
    left: 20
  },

  time: {
    position: "absolute",
    top: 280,
    left: 20
  }
});

export default styles;
