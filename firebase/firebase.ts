// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULfivsBodrgOTuP9uZVnPtOpjaawnV8s",
  authDomain: "michael-smith-website.firebaseapp.com",
  projectId: "michael-smith-website",
  storageBucket: "michael-smith-website.firebasestorage.app",
  messagingSenderId: "220469809511",
  appId: "1:220469809511:web:2d277cf6ac2f05206c1fc2",
  measurementId: "G-GMGBM2B0B6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
