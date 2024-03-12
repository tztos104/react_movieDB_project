// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl6kG95VlKT09E-28V89t33OHZYYu-LuQ",
  authDomain: "react-moviedb-project.firebaseapp.com",
  projectId: "react-moviedb-project",
  storageBucket: "react-moviedb-project.appspot.com",
  messagingSenderId: "791805015746",
  appId: "1:791805015746:web:0ef4ef169866b70b822d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;