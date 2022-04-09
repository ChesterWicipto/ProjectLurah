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
