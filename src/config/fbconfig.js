import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC-BbdbsNuqWNSMGyrjAcYVQr4ReOdqqIg",
    authDomain: "libraryportal-febf8.firebaseapp.com",
    databaseURL: "https://libraryportal-febf8.firebaseio.com",
    projectId: "libraryportal-febf8",
    storageBucket: "libraryportal-febf8.appspot.com",
    messagingSenderId: "569618826442",
    appId: "1:569618826442:web:7f1fc573a5861c11682033",
    measurementId: "G-0Q9ZZYWM0M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase