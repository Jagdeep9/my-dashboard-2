
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDoywVaBThytg2qrnQsetX3YGARbnYnkcs",
  authDomain: "my-dashboard-auth.firebaseapp.com",
  projectId: "my-dashboard-auth",
  storageBucket: "my-dashboard-auth.appspot.com",
  messagingSenderId: "180398140038",
  appId: "1:180398140038:web:2084810957cf7e39583f07",
  measurementId: "G-N1JEFSS961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();

export { app, auth };