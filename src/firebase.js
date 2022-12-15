// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAXNmz_4jE938_fiDYqXQDirU2v4KE7grg",
  authDomain: "netflix-clone-49185.firebaseapp.com",
  projectId: "netflix-clone-49185",
  storageBucket: "netflix-clone-49185.appspot.com",
  messagingSenderId: "871642526670",
  appId: "1:871642526670:web:d42abfeb53e27f732df19f",
  measurementId: "G-MT1TV72JMV"


};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
