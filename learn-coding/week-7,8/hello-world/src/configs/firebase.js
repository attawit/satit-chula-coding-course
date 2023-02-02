import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/auth';
//import { getAuth } from 'firebase/auth';
//import { getFunctions } from 'firebase/functions';
//import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "ccccccccc",
    authDomain: "satitchula.firebaseapp.com",
    projectId: "satitchula",
    storageBucket: "satitchula.appspot.com",
    messagingSenderId: "61885158544",
    appId: "1:6188515ff44:web:474d966431f5d87a28f415"
};

const fbAuth = firebase.initializeApp(firebaseConfig);
//const fbAuth = getAuth(app);
const db = firebase.firestore();
export { db }