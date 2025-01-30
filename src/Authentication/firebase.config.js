// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRc_4zNTaPU6-O9Bzfr9TGGXHmEvMmNVk",
  authDomain: "todolist-a8970.firebaseapp.com",
  databaseURL: "https://todolist-a8970-default-rtdb.firebaseio.com",
  projectId: "todolist-a8970",
  storageBucket: "todolist-a8970.firebasestorage.app",
  messagingSenderId: "174773794542",
  appId: "1:174773794542:web:819689e5561882bfa925ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig