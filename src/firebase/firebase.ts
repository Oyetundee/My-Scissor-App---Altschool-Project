// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm5Babh3z3B9e-8O2ToUs0mwLaWd--kbA",
    authDomain: "the-scissor-app.firebaseapp.com",
    projectId: "the-scissor-app",
    storageBucket: "the-scissor-app.appspot.com",
    messagingSenderId: "461172566355",
    appId: "1:461172566355:web:6911e30f635318626719a6",
    measurementId: "G-N3PHVGPWN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
