// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBWq8PQlccu4zWEzYHbDRuLBgydPCB2jJk",
  authDomain: "react-b9521.firebaseapp.com",
  projectId: "react-b9521",
  storageBucket: "react-b9521.appspot.com",
  messagingSenderId: "585747328687",
  appId: "1:585747328687:web:29d333079bd97ad04aae5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth=getAuth();
export const googleauth=()=>{
const provider=new GoogleAuthProvider();
return signInWithPopup(auth,provider)
}
export const logout=()=>{
    return auth.signOut()
  }
