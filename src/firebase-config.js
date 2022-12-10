import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2oU7vZkXPvACM7ALA4I32CvjV6FG9jUQ",
  authDomain: "murointeractivo-db077.firebaseapp.com",
  projectId: "murointeractivo-db077",
  storageBucket: "murointeractivo-db077.appspot.com",
  messagingSenderId: "7493243675",
  appId: "1:7493243675:web:e1274e57d3be238f9f39be"
};

const app = initializeApp(firebaseConfig)
export const auth= getAuth(app);
export const db = getFirestore(app)