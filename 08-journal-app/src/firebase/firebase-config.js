import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


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
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db, googleAuthProvider
}