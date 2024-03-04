
// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-ca33f.firebaseapp.com",
  projectId: "mern-estate-ca33f",
  storageBucket: "mern-estate-ca33f.appspot.com",
  messagingSenderId: "657817722997",
  appId: "1:657817722997:web:0bc10329be16721562583c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);