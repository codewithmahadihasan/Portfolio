// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZWB4aXZdVJ03B_i3qygFRLHmskWUhnpw",
    authDomain: "md-mahadi-hasan-portfolio.firebaseapp.com",
    projectId: "md-mahadi-hasan-portfolio",
    storageBucket: "md-mahadi-hasan-portfolio.appspot.com",
    messagingSenderId: "697805570928",
    appId: "1:697805570928:web:1eb8e864e29373145dc5b5",
    measurementId: "G-3MSZE2Z11S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);