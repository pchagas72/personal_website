import firebase from 'firebase/compat/app';
import {getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDuY4wlWQJtfV93_scQPetZxs3_BbBS5Jc",
  authDomain: "pchagas-sh.firebaseapp.com",
  projectId: "pchagas-sh",
  storageBucket: "pchagas-sh.appspot.com",
  messagingSenderId: "1083235124608",
  appId: "1:1083235124608:web:44a505a1781880d9492d65",
  measurementId: "G-Z5DNY9XK72"
})

export const firestore = getFirestore(app)

export const auth = getAuth(app)

