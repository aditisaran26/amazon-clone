// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAak4sSM2R31ru2Hu_FgpM4oWgyfY5fxPI",
  authDomain: "clone-3c907.firebaseapp.com",
  projectId: "clone-3c907",
  storageBucket: "clone-3c907.appspot.com",
  messagingSenderId: "20651419145",
  appId: "1:20651419145:web:399469b1e4f1e24089bad8",
  measurementId: "G-7ECB10SDLM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth= firebase.auth();

export { db , auth};