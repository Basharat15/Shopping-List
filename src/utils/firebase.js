// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB4bJngJpNOZpRo8wFxKVFp_LjKNNENw8I",
//   authDomain: "shoppinglist-81666.firebaseapp.com",
//   projectId: "shoppinglist-81666",
//   storageBucket: "shoppinglist-81666.appspot.com",
//   messagingSenderId: "491906766105",
//   appId: "1:491906766105:web:cc5c9901de24e4b6716188",
//   measurementId: "G-KMWXDFJHDM",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCM-qmABTi0WKDv96LE8NJ2cWav-M8JLqo",
  authDomain: "authentication-app-d25c7.firebaseapp.com",
  databaseURL: "https://authentication-app-d25c7-default-rtdb.firebaseio.com",
  projectId: "authentication-app-d25c7",
  storageBucket: "authentication-app-d25c7.appspot.com",
  messagingSenderId: "416795687479",
  appId: "1:416795687479:web:a1e85e660743371d851db2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
