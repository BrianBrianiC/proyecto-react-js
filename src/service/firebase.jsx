// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXC169k5nz2jusCUXKeJ9HDNtYmn-nM7Q",
    authDomain: "proyecto-messina.firebaseapp.com",
    projectId: "proyecto-messina",
    storageBucket: "proyecto-messina.firebasestorage.app",
    messagingSenderId: "1040681614971",
    appId: "1:1040681614971:web:e0744878bc4ee074f72cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);