// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyADSonrfMbKzlOE8tuAhlvZcAsf9zf3axw",
//     authDomain: "flash-in-3abb4.firebaseapp.com",
//     projectId: "flash-in-3abb4",
//     storageBucket: "flash-in-3abb4.appspot.com",
//     messagingSenderId: "1030965375373",
//     appId: "1:1030965375373:web:688ecb682b3a596b688dc4"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// require('dotenv').config()

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyBVs-J8gYPsSz0QFaBTdBV6-TdowWj5c6Y",
    authDomain: "flash-in-auth.firebaseapp.com",
    projectId: "flash-in-auth",
    storageBucket: "flash-in-auth.appspot.com",
    messagingSenderId: "170902088992",
    appId: "1:170902088992:web:5079cb96e73cbc00663b45"
  };

  // // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  // firebase server timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  

  export {projectStorage, projectFirestore, timestamp};