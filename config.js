import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EQqW7EZPq4ZCWbCHEeP1ncKHcfCXW4Y",
  authDomain: "buy-sale-corner-a9e75.firebaseapp.com",
  projectId: "buy-sale-corner-a9e75",
  storageBucket: "buy-sale-corner-a9e75.appspot.com",
  messagingSenderId: "1023222618639",
  appId: "1:1023222618639:web:6d00327f2cca3790afe17a",
  measurementId: "G-N71TTJ915T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);
