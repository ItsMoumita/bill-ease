// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbtj7bjyxS3FiYWKxxTzr5mgNx4djgoYU",
  authDomain: "bill-payment-1fb7a.firebaseapp.com",
  projectId: "bill-payment-1fb7a",
  storageBucket: "bill-payment-1fb7a.firebasestorage.app",
  messagingSenderId: "505606606127",
  appId: "1:505606606127:web:2c624c33c2a47578afe5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;