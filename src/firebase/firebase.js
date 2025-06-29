// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtM1d8PPB259o_qb8eh5s7DZMa_z2N1X8",
  authDomain: "financify-7ffbb.firebaseapp.com",
  projectId: "financify-7ffbb",
  storageBucket: "financify-7ffbb.appspot.com", 
  messagingSenderId: "780569585844",
  appId: "1:780569585844:web:259d427020055d07588fe1",
  measurementId: "G-80ZY4Y8QLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db=getFirestore(app)
export default app;
