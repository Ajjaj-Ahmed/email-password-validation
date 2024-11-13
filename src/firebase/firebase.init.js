// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsP1shhuxruU3Y_KLgg0tT4NHkpFnrc0E",
  authDomain: "email-password-auth-12cf7.firebaseapp.com",
  projectId: "email-password-auth-12cf7",
  storageBucket: "email-password-auth-12cf7.firebasestorage.app",
  messagingSenderId: "805319278678",
  appId: "1:805319278678:web:a36f06e2608eb5470a7bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
