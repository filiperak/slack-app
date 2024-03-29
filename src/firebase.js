import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDkzUVz65avODrI_95R877ymz-jtA0fgr4",
    authDomain: "slack-app-d0818.firebaseapp.com",
    projectId: "slack-app-d0818",
    storageBucket: "slack-app-d0818.appspot.com",
    messagingSenderId: "909046260408",
    appId: "1:909046260408:web:5c7e7509b4ef6e94a80a4d"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};