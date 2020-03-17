import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";

import StartPage from "../StartPage/StartPage";
import GamePage from "../GamePage";

const StackNav = createStackNavigator(
  {
    StartPage: StartPage,
    GamePage: GamePage
  },
  {
    initialRoutName: "StartPage"
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
