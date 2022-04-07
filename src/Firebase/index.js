// // import firebase from "firebase/app";
// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA_SbppZJxne822k6WD5QGYtX3u138uZa4",
// //   authDomain: "project-lurah.firebaseapp.com",
// //   databaseURL: "https://project-lurah-default-rtdb.firebaseio.com",
// //   projectId: "project-lurah",
// //   storageBucket: "project-lurah.appspot.com",
// //   messagingSenderId: "885088042334",
// //   appId: "1:885088042334:web:bfcb17088eed3ba5a0a3cf",
// //   measurementId: "G-QNMCE892VX",
// // };

// // // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // TODO: Replace with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKACXLnwDCx_4SmeKEqt0ECsiiYSj6_Ww",
//   authDomain: "project-lurah-7d104.firebaseapp.com",
//   databaseURL: "https://project-lurah-7d104-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "project-lurah-7d104",
//   storageBucket: "project-lurah-7d104.appspot.com",
//   messagingSenderId: "119758166752",
//   appId: "1:119758166752:web:eb4fdbc97d41a14607ce85",
//   measurementId: "G-45NVD916DM",
// };

// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const firebase = getDatabase(app);

// export default firebase;

import firebase from "firebase";
import "firebase/storage";
// import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh2gVsWzf1T0W6Az9wkQ62rVjhF6lNKF0",
  authDomain: "project-lurah-465b2.firebaseapp.com",
  databaseURL: "https://project-lurah-465b2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "project-lurah-465b2",
  storageBucket: "project-lurah-465b2.appspot.com",
  messagingSenderId: "1010427077617",
  appId: "1:1010427077617:web:fda5118b823bb95629da50",
  measurementId: "G-15Y1L4YLJT",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };

// export default firebase;
