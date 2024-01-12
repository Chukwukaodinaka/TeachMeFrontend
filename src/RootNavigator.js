// RootNavigator.js

import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Stack.Navigator>
      {user ? (
        // User is signed in
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        // User is not signed in
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
