import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtWdEKUySlNF_9t3jzbk_mjH-K3wgbPrc",
  authDomain: "chatapp-a4ca5.firebaseapp.com",
  projectId: "chatapp-a4ca5",
  storageBucket: "chatapp-a4ca5.appspot.com",
  messagingSenderId: "1081396569725",
  appId: "1:1081396569725:web:283096266717e863a4f314",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
