import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/home";
import ReviewDetail from "../Screens/reviewDetail";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    // navigationOptions: {
    // title: "Home page",
    // headerStyle: {
    //   backgroundColor: "#eee",
    // },
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home Page" />,
      };
    },
  },
  ReviewDetail: {
    screen: ReviewDetail,
    navigationOptions: {
      title: "Review detail page",
      // headerStyle: {
      //   backgroundColor: "#eee",
      // },
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      // height: 80,
    },
  },
});

export default HomeStack;
