// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZ0-HQJ_X7eZxiqBKbIbu_4hFnK1L9Co",
  authDomain: "accountingsys-1dc2d.firebaseapp.com",
  projectId: "accountingsys-1dc2d",
  storageBucket: "accountingsys-1dc2d.firebasestorage.app",
  messagingSenderId: "141110513925",
  appId: "1:141110513925:web:a80a3684d670924445e76c",
  measurementId: "G-JEYGGY9NQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);