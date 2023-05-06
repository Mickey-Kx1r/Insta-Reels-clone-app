// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
// import "firebase/firestone";

const firebaseConfig = {
  apiKey: "AIzaSyDVmXInjye88JKNt45T-7Qf8bA416c6Hew",
  authDomain: "ig-reels-1e65a.firebaseapp.com",
  projectId: "ig-reels-1e65a",
  storageBucket: "ig-reels-1e65a.appspot.com",
  messagingSenderId: "262813994002",
  appId: "1:262813994002:web:388f901498d97cec781ccb",
  measurementId: "G-YZ6JDDSVP3"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;