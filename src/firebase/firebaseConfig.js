// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAgZxZdUZWkCbs3KsTe8i7unV1XoGN68Y",
  authDomain: "fir-auth-5ac44.firebaseapp.com",
  projectId: "fir-auth-5ac44",
  storageBucket: "fir-auth-5ac44.appspot.com",
  messagingSenderId: "675903100601",
  appId: "1:675903100601:web:ee2ffd30f79dd601baad68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Enable persistence
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
