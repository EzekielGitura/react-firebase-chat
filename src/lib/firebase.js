import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8c76d.firebaseapp.com",
  projectId: "reactchat-8c76d",
  storageBucket: "reactchat-8c76d.appspot.com",
  messagingSenderId: "459688758681",
  appId: "1:459688758681:web:05dd295b4b4ea7150ad708"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth()
export const db = getFirestore()
export const storage = getStorage()