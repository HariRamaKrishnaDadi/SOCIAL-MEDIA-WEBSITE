import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxF4C1TRGydSAu4H-gnQdQupMo93nPdo0",
  authDomain: "intra-veltech.firebaseapp.com",
  databaseURL: "https://intra-veltech-default-rtdb.firebaseio.com",
  projectId: "intra-veltech",
  storageBucket: "intra-veltech.appspot.com",
  messagingSenderId: "975327429226",
  appId: "1:975327429226:web:45b41119ba8a8450054013",
  measurementId: "G-HSH5N3H9G4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};
export default db;