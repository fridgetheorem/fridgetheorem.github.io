// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBo36Mworvq0FHWnbXVdaQ7f_q40D3uqM",
  authDomain: "personalwebsiteassets.firebaseapp.com",
  databaseURL: "https://personalwebsiteassets.firebaseio.com",
  projectId: "personalwebsiteassets",
  storageBucket: "personalwebsiteassets.appspot.com",
  messagingSenderId: "412723832129",
  appId: "1:412723832129:web:da460e592893454a7fedc0",
  measurementId: "G-L37GVJ7WHD"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);