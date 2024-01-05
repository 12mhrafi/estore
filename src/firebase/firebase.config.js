// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLtvyXOb5-WmHlQPR0q3i2UsO5pwFbZuc",
  authDomain: "ecommerce-eae4b.firebaseapp.com",
  projectId: "ecommerce-eae4b",
  storageBucket: "ecommerce-eae4b.appspot.com",
  messagingSenderId: "756822497696",
  appId: "1:756822497696:web:4a91c0e80378789ec7acc5",
  measurementId: "G-0W5BTQDT5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;