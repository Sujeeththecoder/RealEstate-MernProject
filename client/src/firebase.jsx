// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-d32fd.firebaseapp.com",
  projectId: "realestate-mern-d32fd",
  storageBucket: "realestate-mern-d32fd.appspot.com",
  messagingSenderId: "741209028296",
  appId: "1:741209028296:web:3f4f1a1a4e10dab04597fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);