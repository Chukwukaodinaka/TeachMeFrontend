// AuthForm.js

import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../colors/GlobalStyles";

const AuthForm = ({ title, onAuth, isSignUp, navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.background }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")} // Local image
            style={styles.image}
          />
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            textContentType="oneTimeCode"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onAuth(email, password)}
          >
            <Text style={styles.buttonText}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </Text>
          </TouchableOpacity>
          <View style={styles.frame2}>
            <View style={[styles.frameInner, styles.frameInnerLayout]} />
            <Text style={[styles.or, styles.orClr]}>or</Text>
            <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          </View>
          {isSignUp ? (
            <Button
              title="Already have an account? Sign In"
              onPress={() => navigation.goBack()}
            />
          ) : (
            <Button
              title="Don't have an account? Create account"
              onPress={() => navigation.navigate("SignUp")}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    padding: 30,
    backgroundColor: Color.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
  },
  title: {
    color: "black",
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: 400,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderColor: "lightgray",
    backgroundColor: Color.searchBarColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: Color.buttonBackground, // Set the background color
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%", // Set width to 100% of the container
  },
  buttonText: {
    color: Color.searchBarColor, // Set text color
    fontSize: 16,
  },
  Button: {
    Color: "black",
  },
  frameInner: {
    width: 143,
  },
  or: {
    marginLeft: 19,
    fontFamily: "Arial",
    fontWeight: "500",
    // fontSize: FontSize.size_24,
  },
  frame2: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    width: 330,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameInnerLayout: {
    height: 1,
    backgroundColor: Color.black,
  },
  rectangleView: {
    width: 127,
    marginLeft: 19,
  },
  image: {
    width: 170,
    height: 10,
  },
});

export default AuthForm;
