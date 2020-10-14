import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI2JRMROgJiDhSQLsO1sPvxmSytkJ0FTc",
  authDomain: "journalapp-ee644.firebaseapp.com",
  databaseURL: "https://journalapp-ee644.firebaseio.com",
  projectId: "journalapp-ee644",
  storageBucket: "journalapp-ee644.appspot.com",
  messagingSenderId: "589450341647",
  appId: "1:589450341647:web:719b17764bb5f94515a27a"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}