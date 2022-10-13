import React, { useState } from "react";
import Home from "./Screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";
// import * as SplashScreen from "expo-splash-screen";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }
}
