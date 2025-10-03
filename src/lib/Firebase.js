// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZvHKfcPfUgTNcSMAjQYEumFmg5r0KrQc",
    authDomain: "adoptly-261d7.firebaseapp.com",
    projectId: "adoptly-261d7",
    storageBucket: "adoptly-261d7.firebasestorage.app",
    messagingSenderId: "982622463959",
    appId: "1:982622463959:web:98f8ca34cb923a2df10d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth