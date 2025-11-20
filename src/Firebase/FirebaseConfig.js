import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtiVFjnUXTxsfcIbuzz7EwxYkAJ-z0-2I",
  authDomain: "fooddev1-b4c28.firebaseapp.com",
  projectId: "fooddev1-b4c28",
  storageBucket: "fooddev1-b4c28.appspot.com",
  messagingSenderId: "931767479331",
  appId: "1:931767479331:web:5791c46c7ef8a5f9569596"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db };
