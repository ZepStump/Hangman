// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9mDoozL8gqVe3HKp7PlkWkKyI6q8XB_c",
  authDomain: "hangman-10121.firebaseapp.com",
  projectId: "hangman-10121",
  storageBucket: "hangman-10121.appspot.com",
  messagingSenderId: "828655341362",
  appId: "1:828655341362:web:42fcd6722e36eefc1d912b",
  measurementId: "G-GFN9C4MSQN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = app.firestore();
//const auth = firebase.auth();

export { db };