// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8SJJWCifM1Ng6jUWMhVWVSe3-oib5rFs",
  authDomain: "local-food-review.firebaseapp.com",
  projectId: "local-food-review",
  storageBucket: "local-food-review.firebasestorage.app",
  messagingSenderId: "985766373376",
  appId: "1:985766373376:web:aebf1a64d8410ba99a90e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);