// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuOlbXko9pkWS9KmmntQuqH0egBt3M5CE",
  authDomain: "disneyplus-clone-4a290.firebaseapp.com",
  projectId: "disneyplus-clone-4a290",
  storageBucket: "disneyplus-clone-4a290.appspot.com",
  messagingSenderId: "965516410214",
  appId: "1:965516410214:web:5c8cd886e4d97f59705ca7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup };
export default db;
