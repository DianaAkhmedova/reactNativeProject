import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import HomeScreen from "./screens/main/HomeScreen";

const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};
