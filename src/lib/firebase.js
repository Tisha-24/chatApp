import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-d0ae6.firebaseapp.com",
  projectId: "react-chatapp-d0ae6",
  storageBucket: "react-chatapp-d0ae6.appspot.com",
  messagingSenderId: "112283949099",
  appId: "1:112283949099:web:a903968fc15fb64ec4f26e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()