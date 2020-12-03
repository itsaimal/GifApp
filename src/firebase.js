import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJBwSvTIBVTwktVlDy7rA47SuZMPDOxX0",
  authDomain: "instagram-clone-e5623.firebaseapp.com",
  databaseURL: "https://instagram-clone-e5623.firebaseio.com",
  projectId: "instagram-clone-e5623",
  storageBucket: "instagram-clone-e5623.appspot.com",
  messagingSenderId: "978271419643",
  appId: "1:978271419643:web:f0262e10a81bf9742c845e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
