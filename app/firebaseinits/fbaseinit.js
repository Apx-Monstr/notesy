// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, browserSessionPersistence, setPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK85Tzkco6VKdJHyhiiGqsvcaxbqhis8E",
  authDomain: "mynotes-1cf80.firebaseapp.com",
  databaseURL: "https://mynotes-1cf80-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mynotes-1cf80",
  storageBucket: "mynotes-1cf80.appspot.com",
  messagingSenderId: "280836863428",
  appId: "1:280836863428:web:629898212d7f5157cca091",
  measurementId: "G-K8R64QV3VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const rtdb = getDatabase(app);
export {rtdb}