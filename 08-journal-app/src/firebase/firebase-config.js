import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2zaxZPp2MBYUGVJwY9kv0A25c2pONLXA",
    authDomain: "react-app-course-b488a.firebaseapp.com",
    projectId: "react-app-course-b488a",
    storageBucket: "react-app-course-b488a.appspot.com",
    messagingSenderId: "157671523682",
    appId: "1:157671523682:web:d60776541587b6ad28583b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, googleAuthProvider, firebase
}