// SignInScreen.js

import React from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { signIn } from "../../state/authSlice"; // Adjust the path as necessary
import AuthForm from "./AuthForm"; // Adjust the path as necessary

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignIn = async (email, password) => {
    try {
      await dispatch(signIn({ email, password })).unwrap();
    } catch (error) {
      Alert.alert("Sign In Error", error);
    }
  };

  return (
    <AuthForm title="Sign In" onAuth={handleSignIn} navigation={navigation} />
  );
};

export default SignInScreen;
