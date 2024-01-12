import React from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../state/authSlice"; // Assuming you have a signUp action
import AuthForm from "./AuthForm";
import { Alert } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignUp = async (email, password) => {
    try {
      await dispatch(signUp({ email, password })).unwrap();
    } catch (error) {
      Alert.alert("Sign Up Error", error);
    }
  };

  return (
    <AuthForm
      title="Sign Up"
      onAuth={handleSignUp}
      isSignUp={true}
      navigation={navigation}
    />
  );
};

export default SignUpScreen;
