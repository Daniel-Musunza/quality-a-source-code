// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, FieldValue} from "firebase/firestore";
import { getFunctions } from 'firebase/functions'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUb-mg54KKot1PHUQI2HBK5HJu7dFdKi4",
    authDomain: "qualitya-3dfd2.firebaseapp.com",
    projectId: "qualitya-3dfd2",
    storageBucket: "qualitya-3dfd2.appspot.com",
    messagingSenderId: "280023372293",
    appId: "1:280023372293:web:1396794b7ba69016eb026c",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app)
const db =getFirestore(app);
// const analytics = getAnalytics(app);
const firestamp = FieldValue.serverTimestamp;

  export { firestamp, functions, db };