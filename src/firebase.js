import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTwrVWsJuGBxHI81Zbntykd3KMmZ_IZL8",
  authDomain: "thirdwheel-1009.firebaseapp.com",
  projectId: "thirdwheel-1009",
  storageBucket: "thirdwheel-1009.appspot.com",
  messagingSenderId: "67943380566",
  appId: "1:67943380566:web:3df2c37516b7cc78ffadf7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
