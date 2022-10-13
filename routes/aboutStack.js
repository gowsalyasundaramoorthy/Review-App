import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
  About: {
    screen: About,
    // navigationOptions: {
    // title: "About page",
    // headerStyle: {
    //   backgroundColor: "#eee",
    // },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About Page" />
        ),
      };
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      // height: 80,
    },
  },
});

export default AboutStack;
