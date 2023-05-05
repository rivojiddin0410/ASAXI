import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSHgcIR95AqupbJi-2w1l2xaSQS1XbVBc",
  authDomain: "react-imtihon-35460.firebaseapp.com",
  projectId: "react-imtihon-35460",
  storageBucket: "react-imtihon-35460.appspot.com",
  messagingSenderId: "1048287522462",
  appId: "1:1048287522462:web:b8b2b70d41ccff3013558f",
  measurementId: "G-XE5G5W6SRG"
};

const app = initializeApp(firebaseConfig);
// db - DataBase
export const db = getFirestore(app)

