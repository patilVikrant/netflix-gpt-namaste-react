// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-6EFuV8yNQMDd_QDrE2nFieD9j3KFIc",
  authDomain: "netflixgpt-92bde.firebaseapp.com",
  projectId: "netflixgpt-92bde",
  storageBucket: "netflixgpt-92bde.firebasestorage.app",
  messagingSenderId: "558032209617",
  appId: "1:558032209617:web:abeaa53af03de818dba7f0",
  measurementId: "G-EQMHN34NT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();