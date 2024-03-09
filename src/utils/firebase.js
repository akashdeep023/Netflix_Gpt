// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1_tciLqaZ0Bo4hoOXwk9uPs12JIdbpGA",
  authDomain: "netflix-gpt-jack.firebaseapp.com",
  projectId: "netflix-gpt-jack",
  storageBucket: "netflix-gpt-jack.appspot.com",
  messagingSenderId: "1063188513598",
  appId: "1:1063188513598:web:c6c262884685767992e26f",
  measurementId: "G-R7MFPETCTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()