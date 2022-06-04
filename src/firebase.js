import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMHk20C1pb8lbAGaW3aU_i5uFPPtIrPG8",
  authDomain: "clone-776db.firebaseapp.com",
  projectId: "clone-776db",
  storageBucket: "clone-776db.appspot.com",
  messagingSenderId: "897849889689",
  appId: "1:897849889689:web:517e97841f7992ce0c3908",
  measurementId: "G-5H9BPEEB8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
