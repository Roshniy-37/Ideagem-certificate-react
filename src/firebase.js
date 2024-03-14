// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGbINkoiNZwWKzsR0l4f65xW8_kotR5uk",
  authDomain: "cbscoins-acm.firebaseapp.com",
  databaseURL: "https://cbscoins-acm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cbscoins-acm",
  storageBucket: "cbscoins-acm.appspot.com",
  messagingSenderId: "592771396516",
  appId: "1:592771396516:web:65f10e853e158927554731",
  measurementId: "G-Y9LN9KPJ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;