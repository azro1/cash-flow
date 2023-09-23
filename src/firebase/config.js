import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnDzW_385F-ftEydjA8jB57knH6iJfYdw",
    authDomain: "cash-flow-9cc5e.firebaseapp.com",
    projectId: "cash-flow-9cc5e",
    storageBucket: "cash-flow-9cc5e.appspot.com",
    messagingSenderId: "27566951949",
    appId: "1:27566951949:web:04a03f7786e7d6326c0f44"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// firebase timestamp - a special datatype from firebase called a firebase timestamp which returns to us a function and when we invoke that function in the future then it's going to create us a timestamp data property (a special type of data property used in firestore databases) because we don't just send through a date object because if we do that firestore won't be able to order them correctly so instead we pass through a timestamp object which will be created when we invoke this function
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }