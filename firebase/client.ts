// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdIr_PYvu9ReCcLfBMvVkIJQjHDsV6Yus",
  authDomain: "prepwise-2b8da.firebaseapp.com",
  projectId: "prepwise-2b8da",
  storageBucket: "prepwise-2b8da.firebasestorage.app",
  messagingSenderId: "117426849171",
  appId: "1:117426849171:web:add936163357dc629d5466",
  measurementId: "G-XFZE8650T4"
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);