// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import addDoc and other Firestore functions

const firebaseConfig = {
  apiKey: "AIzaSyCSixdJgpQOqSlC22yV_yy78axPzaXP5JQ",
  authDomain: "techkrate-caa95.firebaseapp.com",
  projectId: "techkrate-caa95",
  storageBucket: "techkrate-caa95.firebasestorage.app",
  messagingSenderId: "583632819983",
  appId: "1:583632819983:web:f81422fd0fd366fa32907a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore functions and db instance
export { db, collection, addDoc };
