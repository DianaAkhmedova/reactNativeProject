import "react-native-gesture-handler";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "../router";

import { useUser } from "../../userContext";

const MainComponent = () => {
  const { isLoggedIn, logIn } = useUser();
  const routing = useRoute(isLoggedIn);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        {routing}
      </View>
    </NavigationContainer>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
