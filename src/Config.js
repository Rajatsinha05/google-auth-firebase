// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,sendEmailVerification,sendPasswordResetEmail,signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCpENPqp-ioXjP-19-XuEPGaxyd10LAXsc",
  authDomain: "email-554fe.firebaseapp.com",
  projectId: "email-554fe",
  storageBucket: "email-554fe.appspot.com",
  messagingSenderId: "274001914086",
  appId: "1:274001914086:web:cbe4cc27bb0a2f3b777327"
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

  export const emailAuth=async (email,password)=>{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    sendEmailVerification(userCredential.user);
    return userCredential;
  }

  export const EmaiLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  } 

  export const reset=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }
