import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBz0GW45-m1s2cdHDdQaJGAuj53n1SXpQM",
  authDomain: "fir-7e987.firebaseapp.com",
  projectId: "fir-7e987",
  storageBucket: "fir-7e987.appspot.com",
  messagingSenderId: "99773478579",
  appId: "1:99773478579:web:4fc5175a1eeb014ce4a2c6",
  measurementId: "G-HB402JR7C5"
};

const firebaseFolder = firebase.initializeApp(firebaseConfig);
